#!/usr/bin/env node
/*
  Manual Pinecone updater for Firebase tools
  Usage examples:
    node scripts/update-embedding.js --id 1234
    node scripts/update-embedding.js --since 2025-10-01T00:00:00Z
    node scripts/update-embedding.js --all
*/

const { initializeApp } = require('firebase/app');
const { getFirestore, doc, getDoc, updateDoc, collection, getDocs } = require('firebase/firestore');
const { Pinecone } = require('@pinecone-database/pinecone');
require('dotenv').config({ path: '.env.local' });

// --- CLI args ---
const args = process.argv.slice(2);
const getArg = (name) => {
  const idx = args.findIndex(a => a === `--${name}`);
  if (idx !== -1) return args[idx + 1] || true; // flags return true
  const pref = `--${name}=`;
  const found = args.find(a => a.startsWith(pref));
  return found ? found.slice(pref.length) : undefined;
};

const toolId = getArg('id');
const since = getArg('since');
const allFlag = !!getArg('all');
const forceFlag = !!getArg('force');

if (!toolId && !since && !allFlag) {
  console.log('Usage:');
  console.log('  node scripts/update-embedding.js --id <toolId>');
  console.log('  node scripts/update-embedding.js --since <ISO_TIMESTAMP>');
  console.log('  node scripts/update-embedding.js --all');
  console.log('  node scripts/update-embedding.js --id <toolId> --force   # re-embed even if unchanged');
  process.exit(1);
}

// --- Firebase ---
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// --- Pinecone ---
const pinecone = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
const index = pinecone.index(process.env.PINECONE_INDEX_NAME);

// --- OpenAI Embeddings via fetch ---
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_EMBEDDING_MODEL = process.env.NEXT_PUBLIC_OPENAI_EMBEDDING_MODEL || 'text-embedding-3-small';

async function generateEmbedding(text) {
  const res = await fetch('https://api.openai.com/v1/embeddings', {
    method: 'POST',
    headers: { 'Authorization': `Bearer ${OPENAI_API_KEY}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ model: OPENAI_EMBEDDING_MODEL, input: text })
  });
  if (!res.ok) throw new Error(`OpenAI error: ${res.status} ${res.statusText}`);
  const json = await res.json();
  return json.data[0].embedding;
}

// Build weighted text from either array fields or features1..10/usecase1..6
function collectListFields(obj, prefix, count) {
  const arr = [];
  for (let i = 1; i <= count; i++) {
    const v = obj[`${prefix}${i}`];
    if (typeof v === 'string' && v.trim()) arr.push(v.trim());
  }
  return arr;
}

function buildWeightedText(tool) {
  const features = Array.isArray(tool.features) ? tool.features : collectListFields(tool, 'features', 10);
  const usecases = Array.isArray(tool.use_cases) ? tool.use_cases : collectListFields(tool, 'usecase', 6);
  const parts = [];
  if (tool.name) parts.push(tool.name, tool.name, tool.name); // 3x
  if (tool.description_tr) parts.push(tool.description_tr, tool.description_tr); // 2x
  if (tool.overview_tr) parts.push(tool.overview_tr);
  if (tool.category_name) parts.push(tool.category_name);
  if (features.length) parts.push(features.join(' '));
  if (usecases.length) parts.push(usecases.join(' '));
  return parts.join('\n').trim();
}

function hashString(str) {
  // Simple djb2 hash for change detection (non-crypto; fine for cache busting)
  let h = 5381;
  for (let i = 0; i < str.length; i++) h = ((h << 5) + h) + str.charCodeAt(i);
  return String(h >>> 0);
}

const SEMANTIC_KEYS = new Set([
  'name','description_tr','overview_tr','category_name',
  ...Array.from({length:10},(_,i)=>`features${i+1}`),
  ...Array.from({length:6},(_,i)=>`usecase${i+1}`),
  // If your data uses arrays too
  'features','use_cases'
]);

function semanticChanged(before, after) {
  for (const key of SEMANTIC_KEYS) {
    if ((before?.[key] || null) !== (after?.[key] || null)) return true;
  }
  return false;
}

async function upsertOne(toolId) {
  const ref = doc(db, 'tools', toolId);
  const snap = await getDoc(ref);
  if (!snap.exists()) {
    console.log(`❓ Tool ${toolId} not found`);
    return;
  }
  const data = { id: toolId, ...snap.data() };

  // Build content and hash
  const content = buildWeightedText(data);
  if (!content) {
    console.log(`⚠️  Tool ${toolId} has no semantic content, skipping`);
    return;
  }
  const newHash = hashString(content);
  if (data.embedding_content_hash === newHash && !forceFlag) {
    console.log(`↩️  Tool ${toolId} unchanged (semantic content hash match).`);
    console.log('ℹ️  Note: popularity_score is read from Firebase during ranking; no Pinecone update is required for this change.');
    return;
  }

  const embedding = await generateEmbedding(content);
  await index.upsert([{
    id: toolId,
    values: embedding,
    metadata: {
      toolId,
      name: data.name || '',
      category: data.category_name || '',
      slug: data.slug || '',
      popularity_score: typeof data.popularity_score === 'number' ? data.popularity_score : undefined
    }
  }]);

  await updateDoc(ref, { embedding_content_hash: newHash, embedding_updated_at: new Date().toISOString() });
  console.log(`✅ Upserted tool ${toolId} to Pinecone${forceFlag ? ' (forced)' : ''}`);
}

async function main() {
  if (toolId) {
    await upsertOne(toolId);
    return;
  }

  const snaps = await getDocs(collection(db, 'tools'));
  const sinceDate = since ? new Date(since) : null;
  let count = 0, skipped = 0;
  for (const d of snaps.docs) {
    const data = { id: d.id, ...d.data() };
    if (!allFlag) {
      // Skip if nothing semantic changed and hash exists
      const content = buildWeightedText(data);
      if (!content) { skipped++; continue; }
      const newHash = hashString(content);
      if (data.embedding_content_hash === newHash && !forceFlag) {
        // If since provided, ensure updated since
        if (sinceDate) {
          const updatedAt = data.embedding_updated_at ? new Date(data.embedding_updated_at) : null;
          if (!updatedAt || updatedAt <= sinceDate) { skipped++; continue; }
        } else { skipped++; continue; }
      }
    }
    await upsertOne(d.id);
    count++;
    if (count % 25 === 0) await new Promise(r => setTimeout(r, 200));
  }
  console.log(`Done. Upserted: ${count}, skipped: ${skipped}`);
}

main().catch(err => {
  console.error('❌ Failed:', err);
  process.exit(1);
});


