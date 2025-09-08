import { collection, getDocs, doc, getDoc, query, where, orderBy, limit } from 'firebase/firestore';
import { db } from './firebase';

// Types matching your actual Firebase data structure
export interface AIProduct {
  id: string;
  name: string;
  description_tr: string;
  overview_tr: string;
  categories: string[];
  banner_url: string;
  logo_url: string;
  website_url: string;
  sales_action: string;
  has_free_plan: boolean;
  slug: string;
  tool_id: number;
  category_id: number;
  category_tool_id: number;
  sort_id: string;
  
  // Pricing properties
  price?: string;
  prices?: {
    pro?: number;
    team?: number;
    business?: number;
    organization?: number;
    plus?: number;
  };
  
  // Features (features1 through features10)
  features1?: string;
  features2?: string;
  features3?: string;
  features4?: string;
  features5?: string;
  features6?: string;
  features7?: string;
  features8?: string;
  features9?: string;
  features10?: string;
  
  // Use cases (usecase1 through usecase6)
  usecase1?: string;
  usecase2?: string;
  usecase3?: string;
  usecase4?: string;
  usecase5?: string;
  usecase6?: string;
}

export interface UseCase {
  id: string;
  title: string;
  description: string;
  steps: string[];
  relatedAIs: string[];
  imageUrl?: string;
}

// Helper function to get all features as an array
export function getFeaturesArray(ai: AIProduct): string[] {
  const features: string[] = [];
  for (let i = 1; i <= 10; i++) {
    const feature = ai[`features${i}` as keyof AIProduct] as string;
    if (feature && feature.trim() !== '') {
      features.push(feature);
    }
  }
  return features;
}

// Helper function to get all use cases as an array
export function getUseCasesArray(ai: AIProduct): string[] {
  const useCases: string[] = [];
  for (let i = 1; i <= 6; i++) {
    const useCase = ai[`usecase${i}` as keyof AIProduct] as string;
    if (useCase && useCase.trim() !== '') {
      useCases.push(useCase);
    }
  }
  return useCases;
}

// Fetch popular AI applications (you can adjust the logic based on your needs)
export async function getPopularAIs(): Promise<AIProduct[]> {
  try {
    // For now, fetch all AIs and you can add popularity logic later
    const q = query(
      collection(db, 'tools'),
      orderBy('sort_id', 'asc'),
      limit(10)
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as AIProduct[];
  } catch (error) {
    console.error('Error fetching popular AIs:', error);
    return [];
  }
}

// Fetch trending AI applications
export async function getTrendingAIs(): Promise<AIProduct[]> {
  try {
    // For now, fetch all AIs and you can add trending logic later
    const q = query(
      collection(db, 'tools'),
      orderBy('sort_id', 'asc'),
      limit(10)
    );
    
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as AIProduct[];
  } catch (error) {
    console.error('Error fetching trending AIs:', error);
    return [];
  }
}

// Fetch all AI products (for related tools and filtering)
export async function getAllAIs(): Promise<AIProduct[]> {
  try {
    console.log('Fetching all AI tools from Firebase...');
    
    const allQuery = query(collection(db, 'tools'));
    const allSnapshot = await getDocs(allQuery);
    
    if (allSnapshot.empty) {
      console.log('No tools found in Firebase');
      return [];
    }
    
    const allProducts: AIProduct[] = [];
    allSnapshot.forEach((doc) => {
      const data = doc.data();
      allProducts.push({
        id: doc.id,
        ...data,
        slug: String(data.slug || data.name?.toLowerCase().replace(/\s+/g, '-') || doc.id)
      } as AIProduct);
    });
    
    console.log(`Total tools fetched: ${allProducts.length}`);
    return allProducts;
  } catch (error) {
    console.error('Error fetching all AIs:', error);
    return [];
  }
}

// Search AIs by name and description
export async function searchAIs(searchTerm: string): Promise<AIProduct[]> {
  try {
    console.log(`Searching for: "${searchTerm}"`);
    
    const allAIs = await getAllAIs();
    
    if (!searchTerm || searchTerm.trim() === '') {
      return [];
    }
    
    const searchLower = searchTerm.toLowerCase().trim();
    
    // Search by name (partial match) and description (case-insensitive)
    const matchingAIs = allAIs.filter(ai => {
      const nameMatch = ai.name.toLowerCase().includes(searchLower);
      const descriptionMatch = ai.description_tr.toLowerCase().includes(searchLower);
      const overviewMatch = ai.overview_tr.toLowerCase().includes(searchLower);
      
      return nameMatch || descriptionMatch || overviewMatch;
    });
    
    // Sort results: exact name matches first, then partial name matches, then description matches
    const sortedResults = matchingAIs.sort((a, b) => {
      const aNameExact = a.name.toLowerCase() === searchLower;
      const bNameExact = b.name.toLowerCase() === searchLower;
      const aNameMatch = a.name.toLowerCase().includes(searchLower);
      const bNameMatch = b.name.toLowerCase().includes(searchLower);
      
      if (aNameExact && !bNameExact) return -1;
      if (!aNameExact && bNameExact) return 1;
      if (aNameMatch && !bNameMatch) return -1;
      if (!aNameMatch && bNameMatch) return 1;
      
      return 0;
    });
    
    console.log(`Found ${sortedResults.length} matching AIs`);
    return sortedResults;
  } catch (error) {
    console.error('Error searching AIs:', error);
    return [];
  }
}

// Fetch AI products by category
export async function getAIsByCategory(categorySlug: string): Promise<AIProduct[]> {
  try {
    console.log(`Fetching products for category: ${categorySlug}`);
    
    // Get all tools from Firebase
    const allQuery = query(collection(db, 'tools'));
    const allSnapshot = await getDocs(allQuery);
    
    if (allSnapshot.empty) {
      console.log('No tools found in Firebase');
      return [];
    }
    
    const allProducts: AIProduct[] = [];
    allSnapshot.forEach((doc) => {
      const data = doc.data();
      allProducts.push({
        id: doc.id,
        ...data,
        slug: String(data.slug || data.name?.toLowerCase().replace(/\s+/g, '-') || doc.id)
      } as AIProduct);
    });
    
    console.log(`Total tools found: ${allProducts.length}`);
    
    // Simple debug log
    if (allProducts.length > 0) {
      console.log(`Sample product: ${allProducts[0].name}, category_id: ${allProducts[0].category_id}`);
    }
    
    // CORRECTED CATEGORY MAPPING - Based on your screenshot observations
    const categoryMapping: { [key: string]: (product: any) => boolean } = {
      // SWAP: Altyapı currently shows automation tools, so Altyapı should get what Otomasyon has
      'altyapi': (product) => Number(product.category_id) === 3, // Get what Otomasyon currently shows
      
      // SWAP: Otomasyon currently shows infrastructure tools, so Otomasyon should get what Altyapı has  
      'otomasyon': (product) => Number(product.category_id) === 2, // Get what Altyapı currently shows
      
      // SWAP: Sohbet Botu shows development tools, so Kodsuz Yazılım should get those
      'kodsuz-yazilim': (product) => Number(product.category_id) === 10, // Get what Sohbet Botu currently shows
      
      // And Sohbet Botu should get actual chatbot tools
      'sohbet-botu': (product) => Number(product.category_id) === 2,
      
      // Keep others as they were
      'agentlar': (product) => Number(product.category_id) === 1,
      'verimlilik': (product) => Number(product.category_id) === 4,
      'fotograf-video': (product) => Number(product.category_id) === 13,
      'kurumsal': (product) => Number(product.category_id) === 14,
      'veri': (product) => Number(product.category_id) === 5,
      'sosyal-medya': (product) => Number(product.category_id) === 6,
      'ses': (product) => Number(product.category_id) === 7,
      'yazilim-araclari': (product) => Number(product.category_id) === 9,
      'tasarim': (product) => Number(product.category_id) === 11,
      'akademi': (product) => Number(product.category_id) === 12
    };

    // Apply filtering
    const filterFunction = categoryMapping[categorySlug];
    if (filterFunction) {
      const filtered = allProducts.filter(filterFunction);
      console.log(`Filtered to ${filtered.length} products for category: ${categorySlug}`);
      
      if (filtered.length > 0) {
        return filtered;
      }
    }
    
    // Return empty array for unknown categories
    console.log(`Unknown category: ${categorySlug}`);
    return [];
    
  } catch (error) {
    console.error('Firebase error:', error);
    return [];
  }
}

// Fetch specific AI product details
export async function getAIProduct(id: string): Promise<AIProduct | null> {
  try {
    const docRef = doc(db, 'tools', id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data()
      } as AIProduct;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error fetching AI product:', error);
    return null;
  }
}

// Fetch AI product by slug
export async function getAIProductBySlug(slug: string): Promise<AIProduct | null> {
  try {
    const q = query(
      collection(db, 'tools'),
      where('slug', '==', slug),
      limit(1)
    );
    
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      const doc = querySnapshot.docs[0];
      return {
        id: doc.id,
        ...doc.data()
      } as AIProduct;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error fetching AI product by slug:', error);
    return null;
  }
}

// Fetch use cases
export async function getUseCases(): Promise<UseCase[]> {
  try {
    const querySnapshot = await getDocs(collection(db, 'use-cases'));
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as UseCase[];
  } catch (error) {
    console.error('Error fetching use cases:', error);
    return [];
  }
}

// Fetch specific use case
export async function getUseCase(id: string): Promise<UseCase | null> {
  try {
    const docRef = doc(db, 'use-cases', id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return {
        id: docSnap.id,
        ...docSnap.data()
      } as UseCase;
    } else {
      return null;
    }
  } catch (error) {
    console.error('Error fetching use case:', error);
    return null;
  }
}
