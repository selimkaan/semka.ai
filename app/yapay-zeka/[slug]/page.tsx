'use client'

import Link from 'next/link'
import { CheckCircle, Share2, Twitter, Linkedin, Search, ArrowLeft } from 'lucide-react'
import { useParams, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { getAIProductBySlug, getAllAIs, AIProduct, getFeaturesArray } from '@/lib/firebase-data'
import Image from 'next/image'

export default function AIDetailPage() {
  const params = useParams()
  const router = useRouter()
  const [agent, setAgent] = useState<AIProduct | null>(null)
  const [loading, setLoading] = useState(true)
  const [relatedTools, setRelatedTools] = useState<AIProduct[]>([])

  useEffect(() => {
    const fetchAgent = async () => {
      if (params && params.slug) {
        console.log('Fetching agent with slug:', params.slug);
        try {
          const agentData = await getAIProductBySlug(params.slug as string)
          console.log('Agent data received:', agentData);
          console.log('Pricing data:', {
            sales_action: agentData?.sales_action,
            has_free_plan: agentData?.has_free_plan,
            prices: agentData?.prices,
            price: agentData?.price
          });
          console.log('Full prices object:', JSON.stringify(agentData?.prices, null, 2));
          console.log('Sales action type:', typeof agentData?.sales_action);
          console.log('Sales action value:', agentData?.sales_action);
          setAgent(agentData)
          
          // Fetch related tools from the same category using category_id
          if (agentData && agentData.category_id) {
            console.log('Current tool category_id:', agentData.category_id);
            console.log('Current tool categories array:', agentData.categories);
            console.log('Fetching all tools and filtering by category_id:', agentData.category_id);
            
            // Get all tools and filter by category_id to avoid Firebase index issues
            const allTools = await getAllAIs()
            console.log('Total tools fetched:', allTools.length);
            
            const categoryTools = allTools.filter(tool => tool.category_id === agentData.category_id)
            console.log('All tools in category before filtering:', categoryTools.length);
            console.log('All tools in category:', categoryTools.map(t => ({ name: t.name, slug: t.slug, category_id: t.category_id })));
            
            // Filter out the current tool and limit to 4 tools
            const filteredTools = categoryTools
              .filter(tool => tool.slug !== agentData.slug)
              .slice(0, 4)
            
            console.log('Filtered related tools:', filteredTools.length);
            console.log('Related tools:', filteredTools.map(t => ({ name: t.name, slug: t.slug })));
            setRelatedTools(filteredTools)
          }
        } catch (error) {
          console.error('Error fetching agent:', error)
        } finally {
          setLoading(false)
        }
      }
    }

    fetchAgent()
  }, [params?.slug])

  if (loading) {
    return (
      <div className="min-h-screen bg-white dark:bg-white flex items-center justify-center">
        <div className="text-xl text-black dark:text-black">Yükleniyor...</div>
      </div>
    )
  }

  if (!agent) {
    return (
      <div className="min-h-screen bg-white dark:bg-white flex items-center justify-center">
        <div className="text-xl text-black dark:text-black">AI tool not found</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-white">
      {/* Mobile Header */}
      <div className="lg:hidden">
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
        <div className="bg-white border-b border-gray-200">
          <div className="flex gap-8 overflow-x-auto px-5 py-3 scrollbar-hide">
            <button 
              onClick={() => router.push('/yapay-zeka-araclari/agentlar')}
              className={`text-sm whitespace-nowrap hover:text-blue-600 h-[45px] border-b-2 transition-colors flex-shrink-0 ${
                agent.categories.includes('Agentlar') 
                  ? 'text-black border-[#0053E2] font-medium' 
                  : 'text-gray-600 border-transparent'
              }`}
            >
              Agentlar
            </button>
            <button 
              onClick={() => router.push('/yapay-zeka-araclari/otomasyon')}
              className={`text-sm whitespace-nowrap hover:text-blue-600 h-[45px] border-b-2 transition-colors flex-shrink-0 ${
                agent.categories.includes('Otomasyon') 
                  ? 'text-black border-[#0053E2] font-medium' 
                  : 'text-gray-600 border-transparent'
              }`}
            >
              Otomasyon
            </button>
            <button 
              onClick={() => router.push('/yapay-zeka-araclari/gorsel-video')}
              className={`text-sm whitespace-nowrap hover:text-blue-600 h-[45px] border-b-2 transition-colors flex-shrink-0 ${
                agent.categories.includes('Görsel & Video') 
                  ? 'text-black border-[#0053E2] font-medium' 
                  : 'text-gray-600 border-transparent'
              }`}
            >
              Görsel & Video
            </button>
            <button 
              onClick={() => router.push('/yapay-zeka-araclari/kurumsal')}
              className={`text-sm whitespace-nowrap hover:text-blue-600 h-[45px] border-b-2 transition-colors flex-shrink-0 ${
                agent.categories.includes('Kurumsal') 
                  ? 'text-black border-[#0053E2] font-medium' 
                  : 'text-gray-600 border-transparent'
              }`}
            >
              Kurumsal
            </button>
            <button 
              onClick={() => router.push('/yapay-zeka-araclari/altyapi')}
              className={`text-sm whitespace-nowrap hover:text-blue-600 h-[45px] border-b-2 transition-colors flex-shrink-0 ${
                agent.categories.includes('Altyapı') 
                  ? 'text-black border-[#0053E2] font-medium' 
                  : 'text-gray-600 border-transparent'
              }`}
            >
              Altyapı
            </button>
            <button 
              onClick={() => router.push('/yapay-zeka-araclari/uretkenlik')}
              className={`text-sm whitespace-nowrap hover:text-blue-600 h-[45px] border-b-2 transition-colors flex-shrink-0 ${
                agent.categories.includes('Verimlilik') 
                  ? 'text-black border-[#0053E2] font-medium' 
                  : 'text-gray-600 border-transparent'
              }`}
            >
              Verimlilik
            </button>
            <button 
              onClick={() => router.push('/yapay-zeka-araclari/veri')}
              className={`text-sm whitespace-nowrap hover:text-blue-600 h-[45px] border-b-2 transition-colors flex-shrink-0 ${
                agent.categories.includes('Veri') 
                  ? 'text-black border-[#0053E2] font-medium' 
                  : 'text-gray-600 border-transparent'
              }`}
            >
              Veri
            </button>
            <button 
              onClick={() => router.push('/yapay-zeka-araclari/sosyal-medya')}
              className={`text-sm whitespace-nowrap hover:text-blue-600 h-[45px] border-b-2 transition-colors flex-shrink-0 ${
                agent.categories.includes('Sosyal Medya') 
                  ? 'text-black border-[#0053E2] font-medium' 
                  : 'text-gray-600 border-transparent'
              }`}
            >
              Sosyal Medya
            </button>
            <button 
              onClick={() => router.push('/yapay-zeka-araclari/ses')}
              className={`text-sm whitespace-nowrap hover:text-blue-600 h-[45px] border-b-2 transition-colors flex-shrink-0 ${
                agent.categories.includes('Ses') 
                  ? 'text-black border-[#0053E2] font-medium' 
                  : 'text-gray-600 border-transparent'
              }`}
            >
              Ses
            </button>
            <button 
              onClick={() => router.push('/yapay-zeka-araclari/sohbet-botu')}
              className={`text-sm whitespace-nowrap hover:text-blue-600 h-[45px] border-b-2 transition-colors flex-shrink-0 ${
                agent.categories.includes('Sohbet Botu') 
                  ? 'text-black border-[#0053E2] font-medium' 
                  : 'text-gray-600 border-transparent'
              }`}
            >
              Sohbet Botu
            </button>
            <button 
              onClick={() => router.push('/yapay-zeka-araclari/yazilim-araclari')}
              className={`text-sm whitespace-nowrap hover:text-blue-600 h-[45px] border-b-2 transition-colors flex-shrink-0 ${
                agent.categories.includes('Yazılım Araçları') 
                  ? 'text-black border-[#0053E2] font-medium' 
                  : 'text-gray-600 border-transparent'
              }`}
            >
              Yazılım Araçları
            </button>
            <button 
              onClick={() => router.push('/yapay-zeka-araclari/kodsuz-yazilim')}
              className={`text-sm whitespace-nowrap hover:text-blue-600 h-[45px] border-b-2 transition-colors flex-shrink-0 ${
                agent.categories.includes('Kodsuz Yazılım') 
                  ? 'text-black border-[#0053E2] font-medium' 
                  : 'text-gray-600 border-transparent'
              }`}
            >
              Kodsuz Yazılım
            </button>
            <button 
              onClick={() => router.push('/yapay-zeka-araclari/tasarim')}
              className={`text-sm whitespace-nowrap hover:text-blue-600 h-[45px] border-b-2 transition-colors flex-shrink-0 ${
                agent.categories.includes('Tasarım') 
                  ? 'text-black border-[#0053E2] font-medium' 
                  : 'text-gray-600 border-transparent'
              }`}
            >
              Tasarım
            </button>
            <button 
              onClick={() => router.push('/yapay-zeka-araclari/akademi')}
              className={`text-sm whitespace-nowrap hover:text-blue-600 h-[45px] border-b-2 transition-colors flex-shrink-0 ${
                agent.categories.includes('Akademi') 
                  ? 'text-black border-[#0053E2] font-medium' 
                  : 'text-gray-600 border-transparent'
              }`}
            >
              Akademi
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Content */}
      <div className="lg:hidden">
        {/* Banner Image */}
        <div className="w-full h-40 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 relative overflow-hidden">
          {agent.banner_url ? (
            <img 
              src={agent.banner_url} 
              alt={`${agent.name} banner`}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700"></div>
          )}
        </div>

        {/* AI Logo */}
        <div className="px-5 -mt-9 relative z-10">
          <div className="w-20 h-20 flex items-center justify-center">
            {agent.logo_url ? (
              <img 
                src={agent.logo_url} 
                alt={`${agent.name} logo`}
                className="w-20 h-20 object-contain rounded-lg"
              />
            ) : (
              <div className="w-20 h-20 bg-gray-200 rounded-lg"></div>
            )}
          </div>
        </div>

        {/* AI Details */}
        <div className="px-5 mt-4">
          {/* Title */}
          <h1 className="text-3xl font-semibold text-black mb-2">{agent.name}</h1>
          
          {/* Description */}
          <p className="text-lg text-black mb-6 leading-relaxed">
            {agent.description_tr || 'AI tool description'}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 mb-6">
            <a
              href={agent.website_url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0053E2] text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#003db3] transition-colors"
            >
              Siteye Git
            </a>
            {agent.categories.slice(0, 2).map((category, index) => (
              <span
                key={category}
                className="border border-gray-300 text-gray-600 px-4 py-2 rounded-md text-sm font-semibold"
              >
                {category}
              </span>
            ))}
          </div>

          {/* Social Share Buttons */}
          <div className="flex gap-3 mb-8">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Share2 className="w-4 h-4 text-black" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Twitter className="w-4 h-4 text-black" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <Linkedin className="w-4 h-4 text-black" />
            </button>
          </div>

          {/* Overview Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-black mb-4">Overview</h2>
            <div className="w-full h-px bg-gray-300 mb-4"></div>
            <p className="text-base text-black leading-relaxed">
              {agent.overview_tr || 'AI tool overview description'}
            </p>
          </div>

          {/* Pricing Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-black mb-4">Fiyatlar</h2>
            <div className="w-full h-px bg-gray-300 mb-4"></div>
            <div className="grid grid-cols-1 gap-4">
              {/* Show fixed prices like desktop version, not from Firebase */}
              <div className="border border-gray-300 rounded-md p-4 flex items-center justify-center">
                <span className="text-lg font-semibold text-gray-600">$20 / ay</span>
              </div>
              <div className="border border-gray-300 rounded-md p-4 flex items-center justify-center">
                <span className="text-lg font-semibold text-gray-600">$40 / ay</span>
              </div>
              <div className="border border-gray-300 rounded-md p-4 flex items-center justify-center">
                <span className="text-lg font-semibold text-gray-600">$0 / ay</span>
              </div>
            </div>
          </div>

          {/* Features Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-black mb-4">Özellikler ve Kullanım Senaryoları</h2>
            <div className="w-full h-px bg-gray-300 mb-4"></div>
            <div className="space-y-4">
              {(() => {
                const features = getFeaturesArray(agent);
                return features.length > 0 ? (
                  features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-base text-black">{feature}</span>
                    </div>
                  ))
                ) : (
                  // Fallback features if no features are available
                  <>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-base text-black">AI-powered code completion and suggestions</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-base text-black">Intelligent code generation and editing</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-base text-black">Real-time AI assistance while coding</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-base text-black">VS Code compatibility and familiar interface</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-base text-black">Advanced debugging and error detection</span>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>

          {/* Similar AIs Section */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-black mb-4">Benzer yapay zekalar</h2>
            <div className="w-full h-px bg-gray-300 mb-4"></div>
            <div className="flex gap-6 overflow-x-auto pb-4">
              {relatedTools.map((tool, index) => (
                <Link
                  key={tool.slug}
                  href={`/yapay-zeka/${tool.slug}`}
                  className="flex-shrink-0 w-80 bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {/* Tool Banner */}
                  <div className="w-full h-40 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 relative overflow-hidden">
                    {tool.banner_url ? (
                      <img 
                        src={tool.banner_url} 
                        alt={`${tool.name} banner`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700"></div>
                    )}
                  </div>
                  
                  {/* Tool Info */}
                  <div className="p-3">
                    <div className="flex items-start gap-3">
                      {/* Tool Logo */}
                      <div className="w-14 h-14 bg-white rounded-lg shadow-sm flex items-center justify-center flex-shrink-0">
                        {tool.logo_url ? (
                          <img 
                            src={tool.logo_url} 
                            alt={`${tool.name} logo`}
                            className="w-12 h-12 object-contain"
                          />
                        ) : (
                          <div className="w-12 h-12 bg-gray-200 rounded-lg"></div>
                        )}
                      </div>
                      
                      {/* Tool Details */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-semibold text-black mb-1 truncate">{tool.name}</h3>
                        <p className="text-sm text-gray-600 mb-2 line-clamp-2">{tool.description_tr}</p>
                        
                        {/* Categories */}
                        <div className="flex items-center gap-1 text-xs text-gray-500 mb-2">
                          {tool.categories.slice(0, 3).map((category, catIndex) => (
                            <span key={category} className="flex items-center">
                              <span>{category}</span>
                              {catIndex < Math.min(tool.categories.length - 1, 2) && (
                                <span className="mx-1">·</span>
                              )}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      {/* Price */}
                      <div className="text-sm font-semibold text-black flex-shrink-0">
                        {tool.has_free_plan ? 'Bedava' : 
                         tool.sales_action === 'price' && tool.prices?.pro ? `$${tool.prices.pro}` : 
                         'Fiyat'}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Footer */}
        <div className="bg-white border-t border-gray-200 px-5 py-6">
          <div className="max-w-sm mx-auto text-center">
            {/* Logo */}
            <div className="flex items-center justify-center gap-2 mb-3">
              <Image
                src="/images/semka_logo_sinek_golgeli.png"
                alt="Semka Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-2xl font-semibold text-black">Semka</span>
            </div>

            {/* Subtitle */}
            <p className="text-sm text-black mb-3">Yapay Zeka Rehberiniz</p>

            {/* Email */}
            <p className="text-sm text-black mb-4">hello@semka.ai</p>

            {/* Social Icons */}
            <div className="flex justify-center gap-4 mb-4">
              <button className="w-4 h-4">
                <Twitter className="w-full h-full text-black" />
              </button>
              <button className="w-4 h-4">
                <Linkedin className="w-full h-full text-black" />
              </button>
              <button className="w-4 h-4">
                <Share2 className="w-full h-full text-black" />
              </button>
            </div>

            {/* Links */}
            <div className="space-y-2 text-sm">
              <div className="flex justify-center gap-6">
                <button className="text-black">Hakkımızda</button>
                <button className="text-black">Kullanım Senaryoları</button>
              </div>
              <button className="text-black">Yapay Zeka İle Başarı Hikayeleri</button>
            </div>

            {/* Copyright */}
            <p className="text-xs text-black mt-4">Semka A.Ş. Tüm Hakları Saklıdır</p>
          </div>
        </div>

        {/* iOS Home Indicator */}
        <div className="flex justify-center py-2">
          <div className="w-32 h-1 bg-black rounded-full"></div>
        </div>
      </div>

      {/* Desktop Content - Hidden on Mobile */}
      <div className="hidden lg:block">
        {/* Existing desktop content will go here */}
        <div className="relative">
          {/* Background Image with 40px gap from screen edges */}
          <div className="mx-10 h-[260px] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 relative overflow-hidden rounded-t-lg">
            {/* Banner Image */}
            {agent.banner_url ? (
              <img 
                src={agent.banner_url} 
                alt={`${agent.name} banner`}
                className="w-full h-full object-cover"
              />
            ) : (
              <>
                {/* Abstract grid pattern overlay */}
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMEg2MFY2MEgwVjBaIiBmaWxsPSIjMDAwMDAwIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8cGF0aCBkPSJNMCAwSDYwVjBIMFYwWiIgZmlsbD0iIzAwMDAwMCIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPHBhdGggZD0iTTAgMEg2MFY2MEgwVjBaIiBmaWxsPSIjMDAwMDAwIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8cGF0aCBkPSJNMCAwSDYwVjBIMFYwWiIgZmlsbD0iIzAwMDAwMCIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPC9zdmc+')] opacity-20"></div>
                
                {/* Glowing circular element on right */}
                <div className="absolute right-8 top-8 w-24 h-24 bg-blue-400 rounded-full opacity-60 blur-sm"></div>
              </>
            )}
          </div>
        </div>

        {/* Rest of desktop content - keeping existing desktop layout */}
        <div className="hidden lg:block container mx-auto px-10 py-8">
          {/* Desktop content continues here - keeping existing structure */}
        </div>
      </div>
    </div>
  )
}