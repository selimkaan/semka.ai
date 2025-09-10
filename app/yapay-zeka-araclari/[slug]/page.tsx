'use client'

import { useState, useEffect } from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { ExternalLink, Users, Star } from 'lucide-react'
import { getAIsByCategory, AIProduct, getUseCasesForCategory, getUseCasesArray } from '@/lib/firebase-data'
import { useRouter } from 'next/navigation'

// Dynamic use case filters will be loaded based on category

const pricingFilters = [
  '0 - $20',
  '$20 - $40',
  '$60 - $80',
  '$80 - $100',
  '$100 - $150',
  '$150+'
]

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const router = useRouter()
  const [selectedUseCases, setSelectedUseCases] = useState<string[]>([])
  const [selectedPricing, setSelectedPricing] = useState<string[]>([])
  const [products, setProducts] = useState<AIProduct[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [useCaseFilters, setUseCaseFilters] = useState<string[]>([])
  const [allProducts, setAllProducts] = useState<AIProduct[]>([]) // Store original products for filtering

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        console.log('Fetching products for slug:', params.slug)
        
        // Load use cases for this category
        const categoryUseCases = getUseCasesForCategory(params.slug)
        setUseCaseFilters(categoryUseCases)
        console.log('Loaded use cases for category:', categoryUseCases)
        
        // Load products
        const fetchedProducts = await getAIsByCategory(params.slug)
        console.log('Fetched products:', fetchedProducts)
        
        // Debug: Show slug values for each product
        fetchedProducts.forEach(product => {
          console.log(`Product: ${product.name}, Slug: ${product.slug}, Slug type: ${typeof product.slug}`);
        });
        
        setAllProducts(fetchedProducts) // Store original products
        setProducts(fetchedProducts)   // Display filtered products
        setError(null)
      } catch (err) {
        console.error('Error fetching products:', err)
        setError('Failed to load products')
        setAllProducts([])
        setProducts([])
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [params.slug])

  // Filter products whenever selected filters change
  useEffect(() => {
    if (allProducts.length === 0) return;

    let filtered = [...allProducts];

    // Filter by use cases
    if (selectedUseCases.length > 0) {
      filtered = filtered.filter(product => {
        const productUseCases = getUseCasesArray(product);
        return selectedUseCases.some(selectedUseCase => 
          productUseCases.some(productUseCase => 
            productUseCase.toLowerCase().includes(selectedUseCase.toLowerCase()) ||
            selectedUseCase.toLowerCase().includes(productUseCase.toLowerCase())
          )
        );
      });
    }

    // Filter by pricing (existing logic)
    if (selectedPricing.length > 0) {
      filtered = filtered.filter(product => {
        const hasMatchingPricing = selectedPricing.some(pricing => {
          if (pricing === '0 - $20' && product.has_free_plan) return true;
          if (product.price) {
            const price = product.price.toLowerCase();
            if (pricing === '0 - $20' && (price.includes('free') || price.includes('0'))) return true;
            if (pricing === '$20 - $40' && price.includes('20')) return true;
            if (pricing === '$60 - $80' && price.includes('60')) return true;
            if (pricing === '$80 - $100' && price.includes('80')) return true;
            if (pricing === '$100 - $150' && price.includes('100')) return true;
            if (pricing === '$150+' && price.includes('150')) return true;
          }
          return false;
        });
        return hasMatchingPricing;
      });
    }

    setProducts(filtered);
  }, [selectedUseCases, selectedPricing, allProducts]);

  const handleUseCaseToggle = (useCase: string) => {
    setSelectedUseCases(prev => 
      prev.includes(useCase) 
        ? prev.filter(item => item !== useCase)
        : [...prev, useCase]
    )
  }

  const handlePricingToggle = (pricing: string) => {
    setSelectedPricing(prev => 
      prev.includes(pricing) 
        ? prev.filter(item => item !== pricing)
        : [...prev, pricing]
    )
  }

  const getCategoryTitle = (slug: string) => {
    const categoryMap: { [key: string]: string } = {
      'altyapi': 'Altyapı',
      'agentlar': 'Agentlar',
      'otomasyon': 'Otomasyon',
      'fotograf-video': 'Fotoğraf & Video',
      'kurumsal': 'Kurumsal',
      'verimlilik': 'Verimlilik',
      'veri': 'Veri',
      'sosyal-medya': 'Sosyal Medya',
      'ses': 'Ses',
      'sohbet-botu': 'Sohbet Botu',
      'yazilim-araclari': 'Yazılım Araçları',
      'kodsuz-yazilim': 'Kodsuz Yazılım',
      'tasarim': 'Tasarım',
      'akademi': 'Akademi'
    }
    return categoryMap[slug] || slug.charAt(0).toUpperCase() + slug.slice(1)
  }

  const getCategorySubtitle = (slug: string) => {
    const subtitleMap: { [key: string]: string } = {
      'altyapi': 'Yapay zeka tabanlı uygulamalı inşa et ve yayınla.',
      'agentlar': 'Akıllı AI ajanları ile işlerinizi otomatikleştirin.',
      'otomasyon': 'İş süreçlerinizi yapay zeka ile otomatikleştirin.',
      'fotograf-video': 'Görsel içerik oluşturma ve düzenleme araçları.',
      'kurumsal': 'Kurumsal ihtiyaçlar için özel AI çözümleri.',
      'verimlilik': 'Verimliliğinizi artıran AI araçları.',
      'veri': 'Veri analizi ve işleme AI araçları.',
      'sosyal-medya': 'Sosyal medya yönetimi için AI araçları.',
      'ses': 'Ses işleme ve analiz AI araçları.',
      'sohbet-botu': 'Akıllı sohbet botları ve müşteri hizmetleri.',
      'yazilim-araclari': 'Yazılım geliştirme için AI araçları.',
      'kodsuz-yazilim': 'Kod yazmadan AI uygulamaları geliştirin.',
      'tasarim': 'Tasarım ve yaratıcılık için AI araçları.',
      'akademi': 'AI eğitimi ve öğrenme kaynakları.'
    }
    return subtitleMap[slug] || 'Yapay zeka araçlarını keşfedin.'
  }

  // Filter products based on selected filters
  const filteredProducts = products.filter(product => {
    // Apply use case filters if any are selected
    if (selectedUseCases.length > 0) {
      const hasMatchingUseCase = selectedUseCases.some(useCase => {
        // Check if any of the product's use cases match the selected filter
        for (let i = 1; i <= 6; i++) {
          const productUseCase = product[`usecase${i}` as keyof AIProduct] as string;
          if (productUseCase && productUseCase.toLowerCase().includes(useCase.toLowerCase())) {
            return true;
          }
        }
        return false;
      });
      if (!hasMatchingUseCase) return false;
    }

    // Apply pricing filters if any are selected
    if (selectedPricing.length > 0) {
      const hasMatchingPricing = selectedPricing.some(pricing => {
        if (pricing === '0 - $20' && product.has_free_plan) return true;
        if (product.price) {
          const price = product.price.toLowerCase();
          if (pricing === '0 - $20' && (price.includes('free') || price.includes('0'))) return true;
          if (pricing === '$20 - $40' && price.includes('20')) return true;
          if (pricing === '$60 - $80' && price.includes('60')) return true;
          if (pricing === '$80 - $100' && price.includes('80')) return true;
          if (pricing === '$100 - $150' && price.includes('100')) return true;
          if (pricing === '$150+' && price.includes('150')) return true;
        }
        return false;
      });
      if (!hasMatchingPricing) return false;
    }

    return true;
  });

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-lg">Yükleniyor...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-lg text-red-600">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="border-b border-gray-200">
        <div className="container mx-auto px-10 py-2">
          <div className="mb-[6px] flex items-center gap-6">
            <h1 className="text-4xl font-bold text-black">
              {getCategoryTitle(params.slug)}
            </h1>
            <p className="text-lg text-gray-600">
              {getCategorySubtitle(params.slug)}
            </p>

          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-10 py-8">
        <div className="flex gap-8">
          {/* Left Sidebar - Filters */}
          <div className="w-80 flex-shrink-0">
            <div className="space-y-8">
              {/* Usage Scenarios Filter */}
              <div>
                <h3 className="text-lg font-semibold text-black mb-4">
                  Kullanım Senaryoları
                </h3>
                <div className="space-y-3">
                  {useCaseFilters.map((useCase) => (
                    <div key={useCase} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          id={useCase}
                          checked={selectedUseCases.includes(useCase)}
                          onCheckedChange={() => handleUseCaseToggle(useCase)}
                        />
                        <label htmlFor={useCase} className="text-sm text-gray-700 cursor-pointer">
                          {useCase}
                        </label>
                      </div>
                      <span className="text-sm text-gray-500">
                        {allProducts.filter(product => {
                          const productUseCases = getUseCasesArray(product);
                          return productUseCases.some(productUseCase => 
                            productUseCase.toLowerCase().includes(useCase.toLowerCase()) ||
                            useCase.toLowerCase().includes(productUseCase.toLowerCase())
                          );
                        }).length}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pricing Filter */}
              <div>
                <h3 className="text-lg font-semibold text-black mb-4">
                  Fiyatlandırma
                </h3>
                <div className="space-y-3">
                  {pricingFilters.map((pricing) => (
                    <div key={pricing} className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Checkbox
                          id={pricing}
                          checked={selectedPricing.includes(pricing)}
                          onCheckedChange={() => handlePricingToggle(pricing)}
                        />
                        <label htmlFor={pricing} className="text-sm text-gray-700 cursor-pointer">
                          {pricing}
                        </label>
                      </div>
                      <span className="text-sm text-gray-500">
                        {filteredProducts.filter(product => {
                          if (pricing === '0 - $20' && product.has_free_plan) return true;
                          if (product.price) {
                            const price = product.price.toLowerCase();
                            if (pricing === '0 - $20' && (price.includes('free') || price.includes('0'))) return true;
                            if (pricing === '$20 - $40' && price.includes('20')) return true;
                            if (pricing === '$60 - $80' && price.includes('60')) return true;
                            if (pricing === '$80 - $100' && price.includes('80')) return true;
                            if (pricing === '$100 - $150' && price.includes('100')) return true;
                            if (pricing === '$150+' && price.includes('150')) return true;
                          }
                          return false;
                        }).length}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Product Listings */}
          <div className="flex-1">
            <div className="space-y-4">
              {filteredProducts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No products found for this category.</p>
                </div>
              ) : (
                filteredProducts.map((product) => (
                  <div key={product.id} className="flex w-full h-[134px] bg-white border border-gray-200 rounded-lg hover:shadow-md transition-shadow overflow-hidden">
                    {/* Left Section - Banner Image */}
                    <div className="w-[260px] h-[134px] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 flex-shrink-0 relative rounded-lg">
                      {/* Use actual banner URL if available */}
                      {product.banner_url ? (
                        <img 
                          src={product.banner_url} 
                          alt={product.name}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      ) : (
                        <>
                          {/* Tech-themed background elements */}
                          <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 opacity-30"></div>
                          <div className="absolute top-4 left-4 w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center">
                            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                              <div className="w-4 h-4 bg-gray-800 rounded-full"></div>
                            </div>
                          </div>
                          <div className="absolute bottom-4 left-4 text-white text-xs font-medium">
                            {product.name.toLowerCase().replace(/\s+/g, '')}.ai
                          </div>
                        </>
                      )}
                    </div>

                    {/* Product Card - Entire card is now clickable */}
                    <div 
                      className="flex items-start gap-4 p-6 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-200 cursor-pointer flex-1 h-full"
                      onClick={() => {
                        console.log('Card clicked for product:', product.name);
                        console.log('Full product object:', product);
                        console.log('Product slug:', product.slug);
                        console.log('Attempting to navigate to:', `/yapay-zeka/${product.slug}`);
                        try {
                          router.push(`/yapay-zeka/${product.slug}`);
                        } catch (error) {
                          console.error('Router navigation failed, using fallback:', error);
                          window.location.href = `/yapay-zeka/${product.slug}`;
                        }
                      }}
                    >
                      {/* Left Side - Product Info */}
                      <div className="flex-1 min-w-0 flex flex-col justify-between h-full">
                        <div>
                          {/* Product Name and Icon */}
                          <div className="flex items-center gap-3 mb-3">
                            {product.logo_url ? (
                              <img 
                                src={product.logo_url} 
                                alt={`${product.name} logo`}
                                className="w-6 h-6 rounded object-cover flex-shrink-0"
                                onError={(e) => {
                                  // Fallback to placeholder if image fails to load
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                  const fallback = target.nextElementSibling as HTMLElement;
                                  if (fallback) fallback.style.display = 'flex';
                                }}
                              />
                            ) : (
                              <div className="w-6 h-6 bg-black rounded flex items-center justify-center flex-shrink-0">
                                <span className="text-white text-xs font-bold">
                                  {product.name.charAt(0).toUpperCase()}
                                </span>
                              </div>
                            )}
                            <h3 className="text-xl font-semibold text-black hover:text-primary transition-colors truncate">
                              {product.name}
                            </h3>
                          </div>
                          
                          {/* Description */}
                          <p className="text-gray-600 mb-3 text-sm truncate whitespace-nowrap overflow-hidden max-w-[550px]">
                            {product.description_tr || product.overview_tr || 'No description available'}
                          </p>
                        </div>
                        
                        {/* Categories */}
                        <div className="flex flex-wrap gap-2">
                          {product.categories.map((category) => (
                            <span key={category} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                              {category}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Right Side - Actions */}
                      <div className="flex flex-col items-end ml-6 flex-shrink-0 justify-between h-full">
                        <span className="text-xs text-black font-medium">
                          {product.sales_action === 'price' ? (
                            // If sales_action is "price", show actual pricing
                            product.has_free_plan ? 'Bedava' : (
                              product.prices?.pro ? `$${product.prices.pro}/ay` : (product.price || 'Fiyat bilgisi yok')
                            )
                          ) : (
                            // If sales_action is not "price", show the sales_action value
                            product.sales_action || 'Fiyat bilgisi yok'
                          )}
                        </span>
                        
                        {/* Only Siteye Git button remains */}
                        <a
                          href={product.website_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent card click when clicking button
                          }}
                          className="inline-flex items-center justify-center rounded-md text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-8 px-3"
                        >
                          Siteye Git
                        </a>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
