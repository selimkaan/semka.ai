import { NextRequest, NextResponse } from 'next/server';
import { collection, getDocs, query, where, limit } from 'firebase/firestore';
import { db } from '../../../lib/firebase';
import { Pinecone } from '@pinecone-database/pinecone';

// Lazy Pinecone initialization to avoid build-time crashes
function getPineconeIndex() {
  const apiKey = process.env.PINECONE_API_KEY;
  const indexName = process.env.PINECONE_INDEX_NAME;
  if (!apiKey || !indexName) {
    throw new Error('Missing Pinecone env vars');
  }
  const client = new Pinecone({ apiKey });
  const ns = process.env.PINECONE_NAMESPACE || '__default__';
  return client.index(indexName).namespace(ns);
}

// OpenAI API configuration
const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
const OPENAI_EMBEDDING_MODEL = process.env.NEXT_PUBLIC_OPENAI_EMBEDDING_MODEL || 'text-embedding-3-small';

interface SearchResult {
  id: string;
  name: string;
  description_tr?: string;
  overview_tr?: string;
  features?: string[];
  use_cases?: string[];
  category_name?: string;
  categories?: string[];
  slug?: string;
  banner_url?: string;
  logo_url?: string;
  website_url?: string;
  sales_action?: string;
  has_free_plan?: boolean;
  price?: string;
  prices?: {
    pro?: number;
    team?: number;
    business?: number;
    organization?: number;
    plus?: number;
  };
  popularity_score?: number;
  similarity_score: number;
  final_score: number;
}

// Generate embedding using OpenAI API
async function generateEmbedding(text: string): Promise<number[]> {
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

// Fallback keyword search function
async function keywordSearch(searchTerm: string): Promise<SearchResult[]> {
  try {
    const searchLower = searchTerm.toLowerCase().trim();
    
    // Search by name, description, and features
    const toolsSnapshot = await getDocs(collection(db, 'tools'));
    const matchingTools: SearchResult[] = [];
    
    toolsSnapshot.forEach((doc) => {
      const data = doc.data();
      
      const nameMatch = data.name?.toLowerCase().includes(searchLower) || false;
      const descriptionMatch = data.description_tr?.toLowerCase().includes(searchLower) || false;
      const overviewMatch = data.overview_tr?.toLowerCase().includes(searchLower) || false;
      const featuresMatch = Array.isArray(data.features) ? data.features.some((feature: string) => 
        String(feature).toLowerCase().includes(searchLower)
      ) : false;
      
      if (nameMatch || descriptionMatch || overviewMatch || featuresMatch) {
        matchingTools.push({
          id: doc.id,
          name: data.name || '',
          description_tr: data.description_tr,
          overview_tr: data.overview_tr,
          features: data.features,
          use_cases: data.use_cases,
          category_name: data.category_name,
          categories: Array.isArray(data.categories) ? data.categories : (data.category_name ? [data.category_name] : []),
          slug: data.slug,
          banner_url: data.banner_url,
          logo_url: data.logo_url,
          website_url: data.website_url,
          sales_action: data.sales_action,
          has_free_plan: Boolean(data.has_free_plan),
          price: data.price,
          prices: data.prices,
          popularity_score: data.popularity_score || 50,
          similarity_score: 0.5, // Default score for keyword matches
          final_score: 0.5
        });
      }
    });
    
    // Sort by name match first, then by popularity
    matchingTools.sort((a, b) => {
      const aNameMatch = a.name.toLowerCase().includes(searchLower);
      const bNameMatch = b.name.toLowerCase().includes(searchLower);
      
      if (aNameMatch && !bNameMatch) return -1;
      if (!aNameMatch && bNameMatch) return 1;
      
      return (b.popularity_score || 50) - (a.popularity_score || 50);
    });
    
    return matchingTools.slice(0, 8);
  } catch (error) {
    console.error('Error in keyword search:', error);
    return [];
  }
}

export async function POST(request: NextRequest) {
  try {
    const { query: searchQuery } = await request.json();
    
    if (!searchQuery || typeof searchQuery !== 'string' || searchQuery.trim() === '') {
      return NextResponse.json({ error: 'Search query is required' }, { status: 400 });
    }
    
    console.log(`🔍 Semantic search for: "${searchQuery}"`);
    
    // Debug: Check environment variables
    console.log('--- Environment Check ---');
    console.log('OPENAI_API_KEY:', process.env.OPENAI_API_KEY ? 'SET' : 'NOT SET');
    console.log('PINECONE_API_KEY:', process.env.PINECONE_API_KEY ? 'SET' : 'NOT SET');
    console.log('PINECONE_INDEX_NAME:', process.env.PINECONE_INDEX_NAME || 'NOT SET');
    console.log('PINECONE_NAMESPACE:', process.env.PINECONE_NAMESPACE || '__default__');
    console.log('------------------------');
    
    // Generate embedding for the search query
    console.log('📝 Generating embedding...');
    const queryEmbedding = await generateEmbedding(searchQuery.trim());
    console.log('✅ Embedding generated, length:', queryEmbedding.length);
    
    // Query Pinecone for similar vectors
    console.log('🔍 Querying Pinecone...');
    let pineconeResults;
    try {
      const index = getPineconeIndex();
      pineconeResults = await index.query({
        vector: queryEmbedding,
        topK: 32, // widen candidate pool
        includeMetadata: true,
      });
      console.log('📊 Pinecone results:', pineconeResults.matches?.length || 0, 'matches');
      
      if (pineconeResults.matches && pineconeResults.matches.length > 0) {
        console.log('🎯 Top match score:', pineconeResults.matches[0].score);
      }
    } catch (error: any) {
      console.error('❌ Pinecone query failed or env not set, using keyword fallback:', (error && error.message) ? error.message : String(error));
      const keywordResults = await keywordSearch(searchQuery);
      return NextResponse.json({ results: keywordResults, source: 'keyword' });
    }
    
    if (!pineconeResults.matches || pineconeResults.matches.length === 0) {
      console.log('❌ No semantic matches found, trying keyword search...');
      const keywordResults = await keywordSearch(searchQuery);
      return NextResponse.json({ results: keywordResults, source: 'keyword' });
    }
    
    // Filter results by minimum similarity threshold (less strict to allow re-ranking)
    const filteredMatches = pineconeResults.matches.filter(match => (match.score || 0) >= 0.2);
    
    // If we have less than 3 results, use fallback keyword search
    if (filteredMatches.length < 3) {
      console.log(`⚠️  Only ${filteredMatches.length} semantic results (threshold: 0.2), using keyword fallback`);
      const keywordResults = await keywordSearch(searchQuery);
      return NextResponse.json({ results: keywordResults, source: 'keyword' });
    }
    
    // Extract tool IDs from Pinecone results
    const toolIds = filteredMatches.map(match => match.id);
    
    // Fetch full tool data from Firebase
    const toolsSnapshot = await getDocs(collection(db, 'tools'));
    const toolsMap = new Map();
    
    toolsSnapshot.forEach((doc) => {
      toolsMap.set(doc.id, { id: doc.id, ...doc.data() });
    });
    
    // Create search results with re-ranking
    const results: SearchResult[] = filteredMatches
      .map(match => {
        const toolData = toolsMap.get(match.id);
        if (!toolData) return null;
        
        const popularityScore = toolData.popularity_score || 50;
        const semanticScore = match.score || 0;
        
        // Apply post-search re-ranking: 85% semantic, 15% popularity
        const finalScore = (semanticScore * 0.85) + ((popularityScore / 100) * 0.15);
        
        return {
          id: toolData.id,
          name: toolData.name || '',
          description_tr: toolData.description_tr,
          overview_tr: toolData.overview_tr,
          features: toolData.features,
          use_cases: toolData.use_cases,
          category_name: toolData.category_name,
        categories: Array.isArray(toolData.categories) ? toolData.categories : (toolData.category_name ? [toolData.category_name] : []),
          slug: toolData.slug,
        banner_url: toolData.banner_url,
        logo_url: toolData.logo_url,
        website_url: toolData.website_url,
        sales_action: toolData.sales_action,
        has_free_plan: Boolean(toolData.has_free_plan),
        price: toolData.price,
        prices: toolData.prices,
          popularity_score: popularityScore,
          similarity_score: semanticScore,
          final_score: finalScore
        };
      })
      .filter(result => result !== null) // Remove null values
      .sort((a, b) => (b?.final_score || 0) - (a?.final_score || 0)) // Sort by final score
      .slice(0, 8); // Limit to 8 results
    
    console.log(`✅ Found ${results.length} semantic results`);
    
    return NextResponse.json({ 
      results, 
      source: 'semantic',
      query: searchQuery,
      total_matches: filteredMatches.length
    });
    
  } catch (error) {
    console.error('❌ Error in semantic search API:', error);
    
    // Fallback to keyword search on error
    try {
      const { query: searchQuery } = await request.json();
      const keywordResults = await keywordSearch(searchQuery);
      return NextResponse.json({ 
        results: keywordResults, 
        source: 'keyword',
        error: 'Semantic search failed, using keyword search'
      });
    } catch (fallbackError) {
      console.error('❌ Fallback keyword search also failed:', fallbackError);
      return NextResponse.json({ 
        error: 'Search service temporarily unavailable' 
      }, { status: 500 });
    }
  }
}
