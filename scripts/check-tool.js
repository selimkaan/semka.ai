require('dotenv').config({ path: '.env.local' });
const { initializeApp } = require('firebase/app');
const { getFirestore, doc, getDoc } = require('firebase/firestore');
const { Pinecone } = require('@pinecone-database/pinecone');

const toolId = process.argv[2];
if (!toolId) {
  console.log('Usage: node scripts/check-tool.js <toolId>');
  process.exit(1);
}

async function main() {
  // Firebase
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

  const snap = await getDoc(doc(db, 'tools', toolId));
  if (!snap.exists()) {
    console.log(`Tool ${toolId} not found in Firebase`);
    return;
  }
  const data = { id: toolId, ...snap.data() };
  console.log('Firebase fields summary:', {
    id: toolId,
    name: data.name,
    slug: data.slug,
    popularity_score: data.popularity_score,
    has_description: Boolean(data.description_tr),
    has_overview: Boolean(data.overview_tr),
    category_name: data.category_name
  });

  // Pinecone
  const pinecone = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });
  const ns = process.env.PINECONE_NAMESPACE || '__default__';
  const index = pinecone.index(process.env.PINECONE_INDEX_NAME).namespace(ns);
  try {
    const fetched = await index.fetch([toolId]);
    const vec = fetched?.records?.[toolId] || fetched?.vectors?.[toolId];
    console.log('Pinecone vector exists:', Boolean(vec));
    if (vec) {
      const values = vec.values || vec?.data?.values || [];
      console.log('Vector length:', Array.isArray(values) ? values.length : 0);
      console.log('Vector metadata:', vec.metadata || vec?.data?.metadata);
    }
  } catch (e) {
    console.log('Pinecone fetch error:', e.message);
  }
}

main().catch(e => { console.error(e); process.exit(1); });


