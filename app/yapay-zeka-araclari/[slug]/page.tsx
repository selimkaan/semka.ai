'use client'

import { useState, useEffect } from 'react'
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { ExternalLink, Users, Star, Search, Sliders, X } from 'lucide-react'
import { getAIsByCategory, AIProduct, getUseCasesForCategory, getUseCasesArray } from '@/lib/firebase-data'
import { useRouter } from 'next/navigation'
import { Pagination } from '@/components/pagination'
import Image from 'next/image'

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
  const [showMobileFilters, setShowMobileFilters] = useState(false)
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (showMobileFilters) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [showMobileFilters])

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
    setCurrentPage(1); // Reset to first page when filters change
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

  // Calculate pagination
  const totalPages = Math.ceil(products.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const paginatedProducts = products.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    // Scroll to top when page changes
    window.scrollTo({ top: 0, behavior: 'smooth' })
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
      {/* Mobile Header */}
      <div className="lg:hidden">
        {/* Status Bar */}
        <div className="bg-[#343739] text-white px-4 py-2 text-xs">
          <div className="flex justify-between items-center">
            <span className="font-semibold">9:41</span>
            <div className="flex items-center gap-2">
              <div className="w-4 h-3 bg-white rounded-sm"></div>
              <div className="w-4 h-3 bg-white rounded-sm"></div>
              <div className="w-6 h-3 bg-white rounded-sm"></div>
            </div>
          </div>
        </div>

        {/* URL Bar */}
        <div className="bg-gray-800 text-white px-4 py-2 text-sm text-center">
          semka.ai
        </div>

        {/* Main Header */}
        <div className="bg-white border-b border-gray-200 px-5 py-4">
          <div className="flex items-center justify-between">
            <div 
              className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => router.push('/')}
            >
              <Image
                src="/images/semka_logo_sinek_golgeli.png"
                alt="Semka Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-2xl font-semibold text-black">Semka</span>
            </div>
            <button 
              onClick={() => {
                const searchTerm = prompt('Arama yapmak istediğiniz yapay zeka aracını yazın:');
                if (searchTerm && searchTerm.trim()) {
                  router.push(`/aramasonucu/${encodeURIComponent(searchTerm.trim())}`);
                }
              }}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <Search className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Categories Navigation */}
        <div className="bg-white border-b border-gray-200 px-5">
          <div className="flex gap-8 overflow-x-auto">
            <button 
              onClick={() => router.push('/yapay-zeka-araclari/agentlar')}
              className={`text-sm whitespace-nowrap hover:text-blue-600 h-[45px] border-b-2 transition-colors ${
                params.slug === 'agentlar' 
                  ? 'text-black border-[#0053E2] font-medium' 
                  : 'text-gray-600 border-transparent'
              }`}
            >
              Agentlar
            </button>
            <button 
              onClick={() => router.push('/yapay-zeka-araclari/otomasyon')}
              className={`text-sm whitespace-nowrap hover:text-blue-600 h-[45px] border-b-2 transition-colors ${
                params.slug === 'otomasyon' 
                  ? 'text-black border-[#0053E2] font-medium' 
                  : 'text-gray-600 border-transparent'
              }`}
            >
              Otomasyon
            </button>
            <button 
              onClick={() => router.push('/yapay-zeka-araclari/fotograf-video')}
              className={`text-sm whitespace-nowrap hover:text-blue-600 h-[45px] border-b-2 transition-colors ${
                params.slug === 'fotograf-video' 
                  ? 'text-black border-[#0053E2] font-medium' 
                  : 'text-gray-600 border-transparent'
              }`}
            >
              Fotoğraf & Video
            </button>
            <button 
              onClick={() => router.push('/yapay-zeka-araclari/kurumsal')}
              className={`text-sm whitespace-nowrap hover:text-blue-600 h-[45px] border-b-2 transition-colors ${
                params.slug === 'kurumsal' 
                  ? 'text-black border-[#0053E2] font-medium' 
                  : 'text-gray-600 border-transparent'
              }`}
            >
              Kurumsal
            </button>
            <button 
              onClick={() => router.push('/yapay-zeka-araclari/altyapi')}
              className={`text-sm whitespace-nowrap hover:text-blue-600 h-[45px] border-b-2 transition-colors ${
                params.slug === 'altyapi' 
                  ? 'text-black border-[#0053E2] font-medium' 
                  : 'text-gray-600 border-transparent'
              }`}
            >
              Altyapı
            </button>
            <button 
              onClick={() => router.push('/yapay-zeka-araclari/verimlilik')}
              className={`text-sm whitespace-nowrap hover:text-blue-600 h-[45px] border-b-2 transition-colors ${
                params.slug === 'verimlilik' 
                  ? 'text-black border-[#0053E2] font-medium' 
                  : 'text-gray-600 border-transparent'
              }`}
            >
              Verimlilik
            </button>
            <button 
              onClick={() => router.push('/yapay-zeka-araclari/veri')}
              className={`text-sm whitespace-nowrap hover:text-blue-600 h-[45px] border-b-2 transition-colors ${
                params.slug === 'veri' 
                  ? 'text-black border-[#0053E2] font-medium' 
                  : 'text-gray-600 border-transparent'
              }`}
            >
              Veri
            </button>
            <button 
              onClick={() => router.push('/yapay-zeka-araclari/sosyal-medya')}
              className={`text-sm whitespace-nowrap hover:text-blue-600 h-[45px] border-b-2 transition-colors ${
                params.slug === 'sosyal-medya' 
                  ? 'text-black border-[#0053E2] font-medium' 
                  : 'text-gray-600 border-transparent'
              }`}
            >
              Sosyal Medya
            </button>
            <button 
              onClick={() => router.push('/yapay-zeka-araclari/ses')}
              className={`text-sm whitespace-nowrap hover:text-blue-600 h-[45px] border-b-2 transition-colors ${
                params.slug === 'ses' 
                  ? 'text-black border-[#0053E2] font-medium' 
                  : 'text-gray-600 border-transparent'
              }`}
            >
              Ses
            </button>
            <button 
              onClick={() => router.push('/yapay-zeka-araclari/sohbet-botu')}
              className={`text-sm whitespace-nowrap hover:text-blue-600 h-[45px] border-b-2 transition-colors ${
                params.slug === 'sohbet-botu' 
                  ? 'text-black border-[#0053E2] font-medium' 
                  : 'text-gray-600 border-transparent'
              }`}
            >
              Sohbet Botu
            </button>
            <button 
              onClick={() => router.push('/yapay-zeka-araclari/yazilim-araclari')}
              className={`text-sm whitespace-nowrap hover:text-blue-600 h-[45px] border-b-2 transition-colors ${
                params.slug === 'yazilim-araclari' 
                  ? 'text-black border-[#0053E2] font-medium' 
                  : 'text-gray-600 border-transparent'
              }`}
            >
              Yazılım Araçları
            </button>
            <button 
              onClick={() => router.push('/yapay-zeka-araclari/kodsuz-yazilim')}
              className={`text-sm whitespace-nowrap hover:text-blue-600 h-[45px] border-b-2 transition-colors ${
                params.slug === 'kodsuz-yazilim' 
                  ? 'text-black border-[#0053E2] font-medium' 
                  : 'text-gray-600 border-transparent'
              }`}
            >
              Kodsuz Yazılım
            </button>
            <button 
              onClick={() => router.push('/yapay-zeka-araclari/tasarim')}
              className={`text-sm whitespace-nowrap hover:text-blue-600 h-[45px] border-b-2 transition-colors ${
                params.slug === 'tasarim' 
                  ? 'text-black border-[#0053E2] font-medium' 
                  : 'text-gray-600 border-transparent'
              }`}
            >
              Tasarım
            </button>
            <button 
              onClick={() => router.push('/yapay-zeka-araclari/akademi')}
              className={`text-sm whitespace-nowrap hover:text-blue-600 h-[45px] border-b-2 transition-colors ${
                params.slug === 'akademi' 
                  ? 'text-black border-[#0053E2] font-medium' 
                  : 'text-gray-600 border-transparent'
              }`}
            >
              Akademi
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Header Section */}
      <div className="hidden lg:block border-b border-gray-200">
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

      {/* Mobile Content */}
      <div className="lg:hidden">
        {/* Mobile Title and Filter */}
        <div className="px-5 py-4">
          <h1 className="text-3xl font-semibold text-black mb-4">
            {getCategoryTitle(params.slug)}
          </h1>
          
          <div className="flex items-center justify-between mb-4">
            <span className="text-base font-semibold text-[#535962]">
              {products.length} yapay zeka
            </span>
            <button 
              onClick={() => setShowMobileFilters(true)}
              className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <span className="text-base font-normal text-black">Filtre</span>
              <Sliders className="w-6 h-6 text-[#343330]" />
            </button>
          </div>
        </div>

        {/* Mobile Product Cards */}
        <div className="px-5 space-y-3">
          {paginatedProducts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Bu kategoride ürün bulunamadı.</p>
            </div>
          ) : (
            paginatedProducts.map((product, index) => (
              <div key={product.id} className="relative">
                {/* Divider */}
                {index > 0 && (
                  <div className="w-full h-px bg-[rgba(199,202,208,0.6)] mb-3"></div>
                )}
                
                {/* Product Card */}
                <div 
                  className="bg-white rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                  onClick={() => {
                    console.log('Card clicked for product:', product.name);
                    try {
                      router.push(`/yapay-zeka/${product.slug}`);
                    } catch (error) {
                      console.error('Router navigation failed, using fallback:', error);
                      window.location.href = `/yapay-zeka/${product.slug}`;
                    }
                  }}
                >
                  {/* Banner Image */}
                  <div className="w-full h-40 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 relative rounded-lg">
                    {product.banner_url ? (
                      <img 
                        src={product.banner_url} 
                        alt={product.name}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    ) : (
                      <>
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

                  {/* Product Info */}
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        {product.logo_url ? (
                          <img 
                            src={product.logo_url} 
                            alt={`${product.name} logo`}
                            className="w-8 h-8 rounded object-cover"
                          />
                        ) : (
                          <div className="w-8 h-8 bg-black rounded flex items-center justify-center">
                            <span className="text-white text-xs font-bold">
                              {product.name.charAt(0).toUpperCase()}
                            </span>
                          </div>
                        )}
                        <span className="text-base font-semibold text-black">
                          {product.name}
                        </span>
                      </div>
                      <a
                        href={product.website_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.stopPropagation(); // Prevent card click when clicking button
                        }}
                        className="bg-[#0053E2] text-white px-3 py-1 rounded-lg text-xs font-bold hover:bg-blue-600 transition-colors"
                      >
                        Siteye Git
                      </a>
                    </div>

                    {/* Categories */}
                    <div className="flex items-center gap-1 mb-3">
                      {product.categories.slice(0, 3).map((category, catIndex) => (
                        <div key={category} className="flex items-center">
                          <span className="text-xs text-[#888E96]">{category}</span>
                          {catIndex < product.categories.slice(0, 3).length - 1 && (
                            <span className="text-xs text-[#888E96] mx-1">·</span>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Description */}
                    <p className="text-sm text-[#535961] leading-6 line-clamp-2">
                      {product.description_tr || product.overview_tr || 'Açıklama mevcut değil'}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Mobile Pagination */}
        {products.length > 0 && (
          <div className="px-5 py-4">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
              itemsPerPage={itemsPerPage}
              totalItems={products.length}
            />
          </div>
        )}

        {/* Mobile Footer */}
        <div className="bg-white border-t border-gray-200 px-5 py-4 mt-8">
          <div className="max-w-sm mx-auto text-center">
            {/* Logo */}
            <div className="flex items-center justify-center gap-2 mb-3">
              <Image
                src="/images/semka_logo_sinek_golgeli.png"
                alt="Semka Logo"
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <span className="text-2xl font-semibold text-black">Semka</span>
            </div>

            {/* Subtitle */}
            <p className="text-sm text-black mb-3">Yapay Zeka Rehberiniz</p>

            {/* Email */}
            <p className="text-sm text-black mb-4">hello@semka.ai</p>

            {/* Social Icons */}
            <div className="flex justify-center gap-4 mb-4">
              <a 
                href="https://x.com/semkaai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-4 h-4 hover:opacity-70 transition-opacity"
              >
                <svg className="w-full h-full text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              <a 
                href="https://linkedin.com/company/semkaai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-4 h-4 hover:opacity-70 transition-opacity"
              >
                <svg className="w-full h-full text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <button 
                onClick={() => {
                  if (navigator.share) {
                    navigator.share({
                      title: 'Semka - Yapay Zeka Rehberi',
                      text: 'Yapay zeka araçlarını keşfet!',
                      url: window.location.href
                    });
                  } else {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Link kopyalandı!');
                  }
                }}
                className="w-4 h-4 hover:opacity-70 transition-opacity"
              >
                <svg className="w-full h-full text-black" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <div className="space-y-5 mb-4">
              <div className="space-y-5">
                <a 
                  href="/about" 
                  className="block text-sm text-black hover:text-blue-600 transition-colors"
                >
                  Hakkımızda
                </a>
                <a 
                  href="mailto:hello@semka.ai" 
                  className="block text-sm text-black hover:text-blue-600 transition-colors"
                >
                  Şirketini Ekle
                </a>
                <a 
                  href="/use-cases" 
                  className="block text-sm text-black hover:text-blue-600 transition-colors"
                >
                  Kullanım Senaryoları
                </a>
              </div>
            </div>

            {/* Copyright */}
            <p className="text-xs text-black">Semka A.Ş. Tüm Hakları Saklıdır</p>
          </div>
        </div>

        {/* iOS Home Indicator */}
        <div className="flex justify-center py-2">
          <div className="w-32 h-1 bg-black rounded-full"></div>
        </div>

        {/* Mobile Filter Modal */}
        {showMobileFilters && (
          <div 
            className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-end lg:hidden"
            onClick={() => setShowMobileFilters(false)}
          >
            <div 
              className="bg-white w-full h-[80vh] rounded-t-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Filter Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200 flex-shrink-0">
                <h2 className="text-lg font-semibold text-black">Filtreler</h2>
                <button 
                  onClick={() => setShowMobileFilters(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-black" />
                </button>
              </div>

              {/* Filter Content */}
              <div className="flex-1 overflow-y-auto p-4 space-y-6 min-h-0">
                {/* Use Cases Filter */}
                <div>
                  <h3 className="text-base font-semibold text-black mb-3">Kullanım Senaryoları
                  </h3>
                  <div className="space-y-3">
                    {useCaseFilters.map((useCase) => (
                      <div key={useCase} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Checkbox
                            id={`mobile-${useCase}`}
                            checked={selectedUseCases.includes(useCase)}
                            onCheckedChange={() => handleUseCaseToggle(useCase)}
                          />
                          <label htmlFor={`mobile-${useCase}`} className="text-sm text-black cursor-pointer">
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
                  <h3 className="text-base font-semibold text-black mb-3">Fiyatlandırma</h3>
                  <div className="space-y-3">
                    {pricingFilters.map((pricing) => (
                      <div key={pricing} className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <Checkbox
                            id={`mobile-pricing-${pricing}`}
                            checked={selectedPricing.includes(pricing)}
                            onCheckedChange={() => handlePricingToggle(pricing)}
                          />
                          <label htmlFor={`mobile-pricing-${pricing}`} className="text-sm text-black cursor-pointer">
                            {pricing}
                          </label>
                        </div>
                        <span className="text-sm text-gray-500">
                          {allProducts.filter(product => {
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

              {/* Filter Footer */}
              <div className="border-t border-gray-200 p-4 flex gap-3 flex-shrink-0">
                <button 
                  onClick={() => {
                    setSelectedUseCases([]);
                    setSelectedPricing([]);
                  }}
                  className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors"
                >
                  Temizle
                </button>
                <button 
                  onClick={() => setShowMobileFilters(false)}
                  className="flex-1 px-4 py-2 bg-[#0053E2] text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
                >
                  Uygula
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Desktop Content */}
      <div className="hidden lg:block container mx-auto px-10 py-8">
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
              {paginatedProducts.length === 0 ? (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No products found for this category.</p>
                </div>
              ) : (
                paginatedProducts.map((product) => (
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
                          className="inline-flex items-center justify-center rounded-md text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-gray-300 bg-white text-black hover:bg-blue-50 hover:text-blue-600 h-8 px-3 dark:border-gray-300 dark:bg-white dark:text-black"
                        >
                          Siteye Git
                        </a>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            
            {/* Pagination */}
            {products.length > 0 && (
              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                itemsPerPage={itemsPerPage}
                totalItems={products.length}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
