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
  
  // Semantic search properties
  popularity_score?: number;
  similarity_score?: number;
  final_score?: number;
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
    console.log('Fetching popular AIs from popular-agents collection...');
    
    // Test if collection exists by trying to get all documents
    const testQuery = query(collection(db, 'popular-agents'));
    const testSnapshot = await getDocs(testQuery);
    console.log('Total documents in popular-agents:', testSnapshot.size);
    
    if (testSnapshot.empty) {
      console.log('popular-agents collection is empty, trying fallback...');
    } else {
      console.log('Found documents in popular-agents, processing...');
    }
    
    // Primary strategy: query the popular-agents collection directly
    const popularQuery = query(
      collection(db, 'popular-agents'),
      limit(10)
    );
    const popularSnapshot = await getDocs(popularQuery);
    
    console.log('Popular agents query result:', popularSnapshot.size, 'documents found');
    
    if (!popularSnapshot.empty) {
      const results = popularSnapshot.docs.map(d => ({ id: d.id, ...(d.data() as any) })) as AIProduct[];
      console.log('Popular AIs loaded:', results.length);
      return results;
    }

    console.log('No documents found in popular-agents, trying fallback...');

    // Fallback: try the tools collection with is_popular flag
    const popularFlagQuery = query(
      collection(db, 'tools'),
      where('is_popular', '==', true),
      orderBy('sort_id', 'asc'),
      limit(10)
    );
    const popularFlagSnap = await getDocs(popularFlagQuery);
    if (!popularFlagSnap.empty) {
      return popularFlagSnap.docs.map(d => ({ id: d.id, ...(d.data() as any) })) as AIProduct[];
    }

    // Final fallback: get first 10 tools from tools collection
    const q = query(collection(db, 'tools'), orderBy('sort_id', 'asc'), limit(10));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...(doc.data() as any) })) as AIProduct[];
  } catch (error) {
    console.error('Error fetching popular AIs:', error);
    return [];
  }
}

// Fetch trending AI applications
export async function getTrendingAIs(): Promise<AIProduct[]> {
  try {
    console.log('Fetching trending AIs from trend-agents collection...');
    
    // Primary strategy: query the trend-agents collection directly
    const trendingQuery = query(
      collection(db, 'trend-agents'),
      limit(10)
    );
    const trendingSnapshot = await getDocs(trendingQuery);
    
    console.log('Trend agents query result:', trendingSnapshot.size, 'documents found');
    
    if (!trendingSnapshot.empty) {
      const results = trendingSnapshot.docs.map(d => ({ id: d.id, ...(d.data() as any) })) as AIProduct[];
      console.log('Trending AIs loaded:', results.length);
      return results;
    }

    console.log('No documents found in trend-agents, trying fallback...');

    // Fallback: try the tools collection with is_trending flag
    const trendingFlagQuery = query(
      collection(db, 'tools'),
      where('is_trending', '==', true),
      orderBy('sort_id', 'asc'),
      limit(10)
    );
    const trendingFlagSnap = await getDocs(trendingFlagQuery);
    if (!trendingFlagSnap.empty) {
      return trendingFlagSnap.docs.map(d => ({ id: d.id, ...(d.data() as any) })) as AIProduct[];
    }

    // Final fallback: get first 10 tools from tools collection
    const q = query(collection(db, 'tools'), orderBy('sort_id', 'asc'), limit(10));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...(doc.data() as any) })) as AIProduct[];
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
// Intent mapping for natural language queries
const intentMapping: { [key: string]: string[] } = {
  // Video creation
  'video': ['video', 'görsel', 'animasyon', 'film', 'kısa film', 'reklam', 'tanıtım', 'youtube', 'tiktok', 'instagram'],
  'oluştur': ['oluştur', 'yap', 'hazırla', 'üret', 'düzenle', 'edit', 'create', 'make', 'generate'],
  'video oluştur': ['video', 'görsel', 'animasyon', 'film', 'kısa film', 'reklam', 'tanıtım', 'youtube', 'tiktok', 'instagram'],
  
  // Image creation
  'görsel': ['görsel', 'resim', 'fotoğraf', 'image', 'picture', 'photo', 'illustration', 'art', 'sanat'],
  'görsel oluştur': ['görsel', 'resim', 'fotoğraf', 'image', 'picture', 'photo', 'illustration', 'art', 'sanat'],
  
  // Writing and content
  'yazı': ['yazı', 'metin', 'içerik', 'blog', 'makale', 'article', 'text', 'content', 'writing'],
  'yazı yaz': ['yazı', 'metin', 'içerik', 'blog', 'makale', 'article', 'text', 'content', 'writing'],
  
  // Audio and voice
  'ses': ['ses', 'müzik', 'podcast', 'seslendirme', 'voice', 'audio', 'sound', 'music'],
  'ses oluştur': ['ses', 'müzik', 'podcast', 'seslendirme', 'voice', 'audio', 'sound', 'music'],
  
  // Code and development
  'kod': ['kod', 'programlama', 'yazılım', 'uygulama', 'website', 'web sitesi', 'code', 'programming', 'development'],
  'kod yaz': ['kod', 'programlama', 'yazılım', 'uygulama', 'website', 'web sitesi', 'code', 'programming', 'development'],
  
  // Design
  'tasarım': ['tasarım', 'design', 'logo', 'branding', 'marka', 'grafik', 'graphic'],
  'tasarım yap': ['tasarım', 'design', 'logo', 'branding', 'marka', 'grafik', 'graphic'],
  
  // Data and analysis
  'veri': ['veri', 'analiz', 'rapor', 'data', 'analysis', 'report', 'excel', 'spreadsheet'],
  'veri analiz': ['veri', 'analiz', 'rapor', 'data', 'analysis', 'report', 'excel', 'spreadsheet'],
  
  // Social media
  'sosyal medya': ['sosyal medya', 'instagram', 'facebook', 'twitter', 'linkedin', 'tiktok', 'youtube', 'social media'],
  'sosyal medya yönet': ['sosyal medya', 'instagram', 'facebook', 'twitter', 'linkedin', 'tiktok', 'youtube', 'social media'],
  
  // Chat and communication
  'sohbet': ['sohbet', 'chat', 'müşteri hizmetleri', 'customer service', 'destek', 'support'],
  'sohbet botu': ['sohbet', 'chat', 'müşteri hizmetleri', 'customer service', 'destek', 'support', 'bot'],
  
  // Productivity
  'verimlilik': ['verimlilik', 'productivity', 'organizasyon', 'organization', 'planlama', 'planning'],
  'verimlilik artır': ['verimlilik', 'productivity', 'organizasyon', 'organization', 'planlama', 'planning'],
  
  // Automation
  'otomasyon': ['otomasyon', 'automation', 'otomatik', 'automatic', 'workflow', 'iş akışı'],
  'otomatikleştir': ['otomasyon', 'automation', 'otomatik', 'automatic', 'workflow', 'iş akışı']
};

// Extract keywords from natural language query
function extractKeywords(query: string): string[] {
  const queryLower = query.toLowerCase().trim();
  const keywords: string[] = [];
  
  // Check for exact intent matches
  for (const [intent, relatedKeywords] of Object.entries(intentMapping)) {
    if (queryLower.includes(intent)) {
      keywords.push(...relatedKeywords);
    }
  }
  
  // Add individual words from the query
  const words = queryLower.split(/\s+/).filter(word => word.length > 2);
  keywords.push(...words);
  
  // Remove duplicates
  return Array.from(new Set(keywords));
}

// Semantic search function using Pinecone
export async function semanticSearchAIs(searchTerm: string): Promise<AIProduct[]> {
  try {
    console.log(`🔍 Semantic search for: "${searchTerm}"`);
    
    const response = await fetch('/api/semantic-search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: searchTerm }),
    });
    
    if (!response.ok) {
      throw new Error(`Semantic search API error: ${response.status}`);
    }
    
    const data = await response.json();
    
    if (data.error) {
      console.warn('Semantic search error:', data.error);
      // Fallback to keyword search
      return await searchAIs(searchTerm);
    }
    
    // Convert semantic search results to AIProduct format
    const results: AIProduct[] = data.results.map((result: any) => ({
      id: result.id,
      name: result.name,
      description_tr: result.description_tr || '',
      overview_tr: result.overview_tr || '',
      categories: Array.isArray(result.categories) ? result.categories : (result.category_name ? [result.category_name] : []),
      banner_url: result.banner_url || '',
      logo_url: result.logo_url || '',
      website_url: result.website_url || '',
      sales_action: result.sales_action || '',
      has_free_plan: Boolean(result.has_free_plan),
      slug: result.slug || '',
      tool_id: parseInt(result.id) || 0,
      category_id: 0,
      category_tool_id: 0,
      sort_id: result.id,
      price: result.price,
      prices: result.prices,
      popularity_score: result.popularity_score || 50,
      similarity_score: result.similarity_score || 0,
      final_score: result.final_score || 0,
    }));
    
    console.log(`✅ Semantic search returned ${results.length} results (source: ${data.source})`);
    return results;
    
  } catch (error) {
    console.error('❌ Semantic search failed, falling back to keyword search:', error);
    // Fallback to existing keyword search
    return await searchAIs(searchTerm);
  }
}

export async function searchAIs(searchTerm: string): Promise<AIProduct[]> {
  try {
    console.log(`Searching for: "${searchTerm}"`);
    
    const allAIs = await getAllAIs();
    
    if (!searchTerm || searchTerm.trim() === '') {
      return [];
    }
    
    const searchLower = searchTerm.toLowerCase().trim();
    
    // Extract keywords for intelligent matching
    const keywords = extractKeywords(searchTerm);
    console.log('Extracted keywords:', keywords);
    
    // Search by name, description, overview, features, and use cases
    const matchingAIs = allAIs.filter(ai => {
      // Direct text matches
      const nameMatch = ai.name.toLowerCase().includes(searchLower);
      const descriptionMatch = ai.description_tr?.toLowerCase().includes(searchLower) || false;
      const overviewMatch = ai.overview_tr?.toLowerCase().includes(searchLower) || false;
      
      // Keyword-based matches
      const keywordMatches = keywords.some(keyword => {
        const keywordLower = keyword.toLowerCase();
        return (
          ai.name.toLowerCase().includes(keywordLower) ||
          ai.description_tr?.toLowerCase().includes(keywordLower) ||
          ai.overview_tr?.toLowerCase().includes(keywordLower) ||
          ai.categories.some(cat => cat.toLowerCase().includes(keywordLower))
        );
      });
      
      // Feature and use case matches
      const featureMatches = keywords.some(keyword => {
        const keywordLower = keyword.toLowerCase();
        for (let i = 1; i <= 10; i++) {
          const feature = ai[`features${i}` as keyof AIProduct] as string;
          if (feature && feature.toLowerCase().includes(keywordLower)) {
            return true;
          }
        }
        return false;
      });
      
      const useCaseMatches = keywords.some(keyword => {
        const keywordLower = keyword.toLowerCase();
        for (let i = 1; i <= 6; i++) {
          const useCase = ai[`usecase${i}` as keyof AIProduct] as string;
          if (useCase && useCase.toLowerCase().includes(keywordLower)) {
            return true;
          }
        }
        return false;
      });
      
      return nameMatch || descriptionMatch || overviewMatch || keywordMatches || featureMatches || useCaseMatches;
    });

    // Enhanced sorting by relevance
    const sortedAIs = matchingAIs.sort((a, b) => {
      // Exact name matches first
      const aNameExact = a.name.toLowerCase() === searchLower;
      const bNameExact = b.name.toLowerCase() === searchLower;
      if (aNameExact && !bNameExact) return -1;
      if (!aNameExact && bNameExact) return 1;
      
      // Partial name matches
      const aNamePartial = a.name.toLowerCase().includes(searchLower);
      const bNamePartial = b.name.toLowerCase().includes(searchLower);
      if (aNamePartial && !bNamePartial) return -1;
      if (!aNamePartial && bNamePartial) return 1;
      
      // Keyword relevance scoring
      const aKeywordScore = keywords.reduce((score, keyword) => {
        const keywordLower = keyword.toLowerCase();
        let keywordScore = 0;
        
        if (a.name.toLowerCase().includes(keywordLower)) keywordScore += 3;
        if (a.description_tr?.toLowerCase().includes(keywordLower)) keywordScore += 2;
        if (a.overview_tr?.toLowerCase().includes(keywordLower)) keywordScore += 2;
        if (a.categories.some(cat => cat.toLowerCase().includes(keywordLower))) keywordScore += 1;
        
        return score + keywordScore;
      }, 0);
      
      const bKeywordScore = keywords.reduce((score, keyword) => {
        const keywordLower = keyword.toLowerCase();
        let keywordScore = 0;
        
        if (b.name.toLowerCase().includes(keywordLower)) keywordScore += 3;
        if (b.description_tr?.toLowerCase().includes(keywordLower)) keywordScore += 2;
        if (b.overview_tr?.toLowerCase().includes(keywordLower)) keywordScore += 2;
        if (b.categories.some(cat => cat.toLowerCase().includes(keywordLower))) keywordScore += 1;
        
        return score + keywordScore;
      }, 0);
      
      return bKeywordScore - aKeywordScore;
    });

    console.log(`Found ${sortedAIs.length} matching AIs`);
    return sortedAIs;
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
    
    // CORRECTED CATEGORY MAPPING - Fixed based on actual data analysis
    const categoryMapping: { [key: string]: (product: any) => boolean } = {
      // FIXED: Map to correct category_ids based on actual data
      'altyapi': (product) => Number(product.category_id) === 2, // Infrastructure tools
      'otomasyon': (product) => Number(product.category_id) === 3, // Automation tools
      
      // FIXED: Kodsuz Yazılım gets no-code development tools  
      'kodsuz-yazilim': (product) => Number(product.category_id) === 10, // No-code development tools
      
      // FIXED: Sohbet Botu gets actual chatbot tools
      'sohbet-botu': (product) => Number(product.category_id) === 8, // Chatbot tools
      
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

// Get use cases for a specific category from the pre-analyzed mapping
export function getUseCasesForCategory(categorySlug: string): string[] {
  // This would ideally load from the JSON file or a database
  // For now, I'll return the mapping we created
  const categoryUseCasesMapping: { [key: string]: string[] } = {
    'agentlar': [
      "Araştırmalarınızın kalitesini ve derinliğini artırın.",
      "Daha akıllı planlama.",
      "Daha iyi adayları daha hızlı işe alın.",
      "Müşteri hizmetleri ve başarı ekiplerini güçlendirin.",
      "Satış performansını ve hacmini artırın.",
      "Satış ve pazarlama otomasyonu",
      "Toplantı notlarını ve takipleri otomatikleştirin.",
      "Veri analizi ve içgörüler",
      "Verileri alın, düzenleyin, açıklama ekleyin ve yönetin.",
      "İnsan sesine benzeyen telefon operatörleri.",
      "İçerik oluşturma",
      "İşlevlere özel ajanlar."
    ],
    'otomasyon': [
      "Açık kaynak modellerini yerel olarak çalıştırın.",
      "Gizlilik, yönetişim, uyumluluk ve risk ile ilgili her şey.",
      "Katmanlar arasında uzanan bütünsel platformlar.",
      "Koordinasyon, yönlendirme, uyarılar ve daha fazlası.",
      "Satış ve pazarlama otomasyonu",
      "Sunucusuz GPU'lar, bilgi işlem ve daha fazlası.",
      "Süreç otomasyonu",
      "Test modelleme, hizmet sunma, çıkarım, ince ayar ve daha fazlası.",
      "Veri analizi ve içgörüler",
      "Verileri alın, düzenleyin, açıklama ekleyin ve yönetin.",
      "İzleme ve gözlemlenebilirlik.",
      "İçerik oluşturma"
    ],
    'fotograf-video': [
      "Diğer görüntü ve video araçları.",
      "Fotoğraf düzenleme",
      "Görsel içerik oluşturma",
      "Ses ve müzik",
      "Video düzenleme",
      "Video oluşturma",
      "Yakında",
      "İçerik oluşturma"
    ],
    'altyapi': [
      "Açık kaynak modellerini yerel olarak çalıştırın.",
      "Gizlilik, yönetişim, uyumluluk ve risk ile ilgili her şey.",
      "Katmanlar arasında uzanan bütünsel platformlar.",
      "Sunucusuz GPU'lar, bilgi işlem ve daha fazlası.",
      "Test modelleme, hizmet sunma, çıkarım, ince ayar ve daha fazlası.",
      "Verileri alın, düzenleyin, açıklama ekleyin ve yönetin.",
      "İzleme ve gözlemlenebilirlik."
    ],
    'verimlilik': [
      "Daha akıllı planlama.",
      "Müşteri hizmetleri ve başarı ekiplerini güçlendirin.",
      "Satış performansını ve hacmini artırın.",
      "Toplantı notlarını ve takipleri otomatikleştirin.",
      "Veri analizi ve içgörüler",
      "İçerik oluşturma"
    ],
    'veri': [
      "Analizlerinizi derinleştirin.",
      "Belgelerinizin değerini en üst düzeye çıkarın.",
      "Diğer görüntü ve video araçları.",
      "Satış ve pazarlama otomasyonu",
      "Veri analizi ve içgörüler",
      "İçerik oluşturma",
      "İş akış otomasyonu"
    ],
    'ses': [
      "Diğer görüntü ve video araçları.",
      "Her türden şarkıyı saniyeler içinde oluşturun.",
      "Herhangi bir dilde, tonla veya tavırla konuşun",
      "Satış ve pazarlama otomasyonu",
      "Sesleri kopyalayın ve kendi sesinizi güçlendirin.",
      "Sesleri kopyalayın ve kendi seslerinizi güçlendirin.",
      "Veri analizi ve içgörüler",
      "İnsan sesine benzeyen telefon operatörleri.",
      "İçerik oluşturma",
      "İş akış otomasyonu"
    ],
    'sosyal-medya': [
      "Diğer görüntü ve video araçları.",
      "Düzenleme artık eğlenceli ve kolay.",
      "Kaydedin, düzenleyin, transkripsiyon yapın ve daha fazlasını yapın.",
      "Platformlar arasında büyük ölçekte içerik oluşturun",
      "Profesyonel kalitede avatarlar ve klonlar oluşturun.",
      "Satış ve pazarlama otomasyonu",
      "Veri analizi ve içgörüler",
      "Verileri alın, düzenleyin, açıklama ekleyin ve yönetin.",
      "Yakında",
      "İçerik oluşturma",
      "İçeriği farklı platformlarda yeniden kullanın.",
      "İş akış otomasyonu"
    ],
    'sohbet-botu': [
      "Satış ve pazarlama otomasyonu",
      "Veri analizi ve içgörüler",
      "İçerik oluşturma"
    ],
    'yazilim-araclari': [
      "Satış ve pazarlama otomasyonu",
      "Süreç otomasyonu",
      "Veri analizi ve içgörüler",
      "Yakında",
      "İçerik oluşturma",
      "İş akış otomasyonu"
    ],
    'kodsuz-yazilim': [
      "Satış ve pazarlama otomasyonu",
      "Veri analizi ve içgörüler",
      "İçerik oluşturma",
      "İş akış otomasyonu"
    ],
    'tasarim': [
      "Satış ve pazarlama otomasyonu",
      "Veri analizi ve içgörüler",
      "İçerik oluşturma",
      "İş akış otomasyonu"
    ],
    'akademi': [
      "Fikirlerinizi sunmak için yeni bir ortam.",
      "Veri analizi ve içgörüler",
      "Yakında",
      "İçerik oluşturma"
    ],
    'kurumsal': [
      "Daha iyi adayları daha hızlı işe alın.",
      "Diğer kurumsal araçlar.",
      "Dönüşüm sağlayan deneyimler yaratın.",
      "Harcamaları ve tasarrufları daha akıllı hale getirin.",
      "Hukuki iş akışlarınızı geliştirin.",
      "Müşteri hizmetleri ve başarı ekiplerini güçlendirin.",
      "Satış performansını ve hacmini artırın.",
      "Satış ve pazarlama otomasyonu",
      "Süreç otomasyonu",
      "Veri analizi ve içgörüler",
      "Yakında",
      "İçerik oluşturma",
      "Şirketinizi her açıdan güvence altına alın."
    ]
  };
  
  return categoryUseCasesMapping[categorySlug] || [];
}
