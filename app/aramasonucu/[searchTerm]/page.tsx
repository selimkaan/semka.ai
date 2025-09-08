'use client'

import { useState, useEffect } from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { ExternalLink, Users, Star } from 'lucide-react'
import { searchAIs, AIProduct } from '@/lib/firebase-data'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface SearchPageProps {
  params: {
    searchTerm: string
  }
}

const pricingFilters = [
  '0 - $20',
  '$20 - $40',
  '$60 - $80',
  '$80 - $100',
  '$100 - $150',
  '$150+'
]

export default function SearchPage({ params }: SearchPageProps) {
  const router = useRouter()
  const searchTerm = decodeURIComponent(params.searchTerm)
  const [selectedPricing, setSelectedPricing] = useState<string[]>([])
  const [searchResults, setSearchResults] = useState<AIProduct[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Search for products using Firebase
    const performSearch = async () => {
      setIsLoading(true)
      try {
        const results = await searchAIs(searchTerm)
        setSearchResults(results)
      } catch (error) {
        console.error('Error searching AIs:', error)
        setSearchResults([])
      } finally {
        setIsLoading(false)
      }
    }

    performSearch()
  }, [searchTerm])

  const handlePricingToggle = (pricing: string) => {
    setSelectedPricing(prev => 
      prev.includes(pricing) 
        ? prev.filter(item => item !== pricing)
        : [...prev, pricing]
    )
  }

  // Filter products based on selected filters
  const filteredProducts = searchResults.filter(product => {
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

  if (isLoading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-lg">Yükleniyor...</div>
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
              Arama Sonuçları
            </h1>
            <p className="text-lg text-gray-600">
              "{searchTerm}" için {filteredProducts.length} sonuç bulundu
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
                  <div className="text-gray-400 mb-4">
                    <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Bu arama için uygun bir yapay zeka bulunamadı.
                  </h3>
                  <p className="text-gray-500 mb-6">
                    Farklı anahtar kelimeler deneyebilir veya kategorilere göz atabilirsiniz.
                  </p>
                  <Link href="/">
                    <Button>Ana Sayfaya Dön</Button>
                  </Link>
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
                        <Button 
                          variant="outline" 
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent card click when clicking button
                            window.open(product.website_url, '_blank');
                          }}
                          className="text-xs"
                        >
                          Siteye Git
                        </Button>
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

