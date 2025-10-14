import { Pinecone } from '@pinecone-database/pinecone';

// Initialize Pinecone client
const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY!,
});

// Get the index instance
export const getIndex = () => {
  return pinecone.index(process.env.PINECONE_INDEX_NAME!);
};

// Helper function to upsert vectors to Pinecone
export async function upsertVectors(vectors: any[]) {
  try {
    const index = getIndex();
    const response = await index.upsert(vectors);
    return response;
  } catch (error) {
    console.error('Error upserting vectors to Pinecone:', error);
    throw error;
  }
}

// Helper function to query vectors from Pinecone
export async function queryVectors(
  vector: number[],
  topK: number = 8,
  filter?: any,
  includeMetadata: boolean = true
) {
  try {
    const index = getIndex();
    const response = await index.query({
      vector,
      topK,
      filter,
      includeMetadata,
    });
    return response;
  } catch (error) {
    console.error('Error querying vectors from Pinecone:', error);
    throw error;
  }
}

// Helper function to check if index exists
export async function checkIndexExists(): Promise<boolean> {
  try {
    const indexList = await pinecone.listIndexes();
    const indexName = process.env.PINECONE_INDEX_NAME!;
    return indexList.indexes?.some(index => index.name === indexName) || false;
  } catch (error) {
    console.error('Error checking index existence:', error);
    return false;
  }
}

// Helper function to create index if it doesn't exist
export async function createIndexIfNotExists() {
  try {
    const indexExists = await checkIndexExists();
    
    if (!indexExists) {
      console.log(`Creating Pinecone index: ${process.env.PINECONE_INDEX_NAME}`);
      
      await pinecone.createIndex({
        name: process.env.PINECONE_INDEX_NAME!,
        dimension: 1536, // OpenAI text-embedding-3-small dimension
        metric: 'cosine',
        spec: {
          serverless: {
            cloud: 'aws',
            region: 'us-east-1'
          }
        }
      });
      
      console.log('Index created successfully');
    } else {
      console.log('Index already exists');
    }
  } catch (error) {
    console.error('Error creating index:', error);
    throw error;
  }
}

export default pinecone;
