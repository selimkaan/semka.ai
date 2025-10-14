const { collection, getDocs } = require('firebase/firestore');
const { initializeApp } = require('firebase/app');
const { Pinecone } = require('@pinecone-database/pinecone');
require('dotenv').config({ path: '.env.local' });

// Initialize Firebase
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const { getFirestore } = require('firebase/firestore');
const db = getFirestore(app);

// Initialize Pinecone
const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY,
});

const index = pinecone.index(process.env.PINECONE_INDEX_NAME);

// OpenAI API configuration
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_EMBEDDING_MODEL = process.env.NEXT_PUBLIC_OPENAI_EMBEDDING_MODEL || 'text-embedding-3-small';

// Generate embedding using OpenAI API
async function generateEmbedding(text) {
  try {
    const response = await fetch('https://api.openai.com/v1/embeddings', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: OPENAI_EMBEDDING_MODEL,
        input: text,
      }),
    });

    if (!response.ok) {
      throw new Error(`OpenAI API error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();
    return data.data[0].embedding;
  } catch (error) {
    console.error('Error generating embedding:', error);
    throw error;
  }
}

// Create weighted text for embedding
function createWeightedText(tool) {
  const parts = [];
  
  // Name (3x weight)
  if (tool.name) {
    parts.push(tool.name, tool.name, tool.name);
  }
  
  // Description (2x weight)
  if (tool.description_tr) {
    parts.push(tool.description_tr, tool.description_tr);
  }
  
  // Category (1x weight)
  if (tool.category_name) {
    parts.push(tool.category_name);
  }
  
  // Features (1x weight)
  if (tool.features && Array.isArray(tool.features)) {
    parts.push(tool.features.join(' '));
  }
  
  // Use cases (1x weight)
  if (tool.use_cases && Array.isArray(tool.use_cases)) {
    parts.push(tool.use_cases.join(' '));
  }
  
  return parts.join(' ');
}

// Main function to generate and store embeddings
async function generateEmbeddings() {
  try {
    console.log('🚀 Starting embedding generation process...');
    
    // Fetch all tools from Firebase
    console.log('📥 Fetching tools from Firebase...');
    const toolsSnapshot = await getDocs(collection(db, 'tools'));
    const tools = [];
    
    toolsSnapshot.forEach((doc) => {
      tools.push({
        id: doc.id,
        ...doc.data()
      });
    });
    
    console.log(`📊 Found ${tools.length} tools to process`);
    
    // Process tools in batches
    const batchSize = 100;
    let processedCount = 0;
    
    for (let i = 0; i < tools.length; i += batchSize) {
      const batch = tools.slice(i, i + batchSize);
      console.log(`\n🔄 Processing batch ${Math.floor(i / batchSize) + 1}/${Math.ceil(tools.length / batchSize)}`);
      
      const vectors = [];
      
      for (const tool of batch) {
        try {
          // Create weighted text
          const weightedText = createWeightedText(tool);
          
          if (!weightedText.trim()) {
            console.warn(`⚠️  Skipping tool ${tool.id} - no text content`);
            continue;
          }
          
          // Generate embedding
          const embedding = await generateEmbedding(weightedText);
          
          // Create vector for Pinecone
          vectors.push({
            id: tool.id,
            values: embedding,
            metadata: {
              toolId: tool.id,
              name: tool.name || '',
              category: tool.category_name || '',
              slug: tool.slug || '',
            }
          });
          
          processedCount++;
          
          // Add small delay to avoid rate limiting
          if (processedCount % 10 === 0) {
            console.log(`   ✅ Processed ${processedCount}/${tools.length} tools`);
            await new Promise(resolve => setTimeout(resolve, 100));
          }
          
        } catch (error) {
          console.error(`❌ Error processing tool ${tool.id}:`, error);
          continue;
        }
      }
      
      // Upsert batch to Pinecone
      if (vectors.length > 0) {
        try {
          await index.upsert(vectors);
          console.log(`   📤 Uploaded ${vectors.length} vectors to Pinecone`);
        } catch (error) {
          console.error(`❌ Error uploading batch to Pinecone:`, error);
          continue;
        }
      }
      
      // Add delay between batches
      if (i + batchSize < tools.length) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    }
    
    console.log(`\n🎉 Embedding generation completed!`);
    console.log(`📈 Successfully processed ${processedCount} tools`);
    console.log(`💾 All vectors stored in Pinecone index: ${process.env.PINECONE_INDEX_NAME}`);
    
  } catch (error) {
    console.error('💥 Fatal error in embedding generation:', error);
    process.exit(1);
  }
}

// Run the script
generateEmbeddings()
  .then(() => {
    console.log('✅ Script completed successfully');
    process.exit(0);
  })
  .catch((error) => {
    console.error('❌ Script failed:', error);
    process.exit(1);
  });
