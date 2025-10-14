import { searchAIs } from './lib/firebase-data';
import { searchWithEmbeddings } from './lib/embeddings';
import { config as dotenvConfig } from 'dotenv';

// Load environment variables
dotenvConfig({ path: '.env.local' });

// Test queries to validate semantic search
const testQueries = [
  // Turkish natural language queries
  'video yapmak için araç',
  'görsel oluşturma',
  'ses ile ilgili yapay zeka',
  'kod yazma asistanı',
  'sosyal medya için araç',
  
  // English queries
  'video creation tools',
  'image generation',
  'voice synthesis',
  'code assistant',
  'social media automation',
  
  // Mixed queries  
  'AI for video editing',
  'yapay zeka ile müzik yapma',
  'chatbot development',
  'presentation maker'
];

async function testSemanticSearch() {
  console.log('🧪 Testing Semantic Search Functionality\n');
  console.log('=' .repeat(60));
  
  for (const query of testQueries) {
    console.log(`\n🔍 Testing query: "${query}"`);
    console.log('-'.repeat(40));
    
    try {
      // Test direct semantic search
      console.log('📊 Direct semantic search results:');
      const semanticResults = await searchWithEmbeddings(query, 5);
      if (semanticResults && semanticResults.length > 0) {
        semanticResults.forEach((result, index) => {
          console.log(`  ${index + 1}. ${result.name}`);
        });
        console.log(`✅ Semantic search returned ${semanticResults.length} results`);
      } else {
        console.log('❌ No semantic search results found');
      }
      
      // Test integrated search (with fallback)
      console.log('\n🔄 Integrated search results (with fallback):');
      const integratedResults = await searchAIs(query);
      if (integratedResults && integratedResults.length > 0) {
        integratedResults.slice(0, 5).forEach((result, index) => {
          console.log(`  ${index + 1}. ${result.name}`);
        });
        console.log(`✅ Integrated search returned ${integratedResults.length} total results`);
      } else {
        console.log('❌ No integrated search results found');
      }
      
      // Compare results
      if (semanticResults?.length > 0 && integratedResults?.length > 0) {
        const semanticFirst = semanticResults[0]?.name;
        const integratedFirst = integratedResults[0]?.name;
        if (semanticFirst === integratedFirst) {
          console.log('✅ Semantic search is being used (not falling back to keyword search)');
        } else {
          console.log('⚠️  Results differ - may be using fallback or hybrid approach');
        }
      }
      
    } catch (error) {
      console.error(`❌ Error testing query "${query}":`, error.message);
    }
  }
  
  console.log('\n' + '='.repeat(60));
  console.log('🎉 Semantic search testing completed!');
}

// Run the test
testSemanticSearch().catch(console.error);
