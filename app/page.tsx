'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Search, ArrowLeft, ArrowRight, Video, Image as ImageIcon, Clipboard, Scale, Mic, Code } from 'lucide-react'
import ScrollableCards from '@/components/scrollable-cards'
import { getPopularAIs, getTrendingAIs, AIProduct } from '@/lib/firebase-data'
import agentsData from '@/data/agents.json'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function HomePage() {
  const router = useRouter();
  const [popularAIs, setPopularAIs] = useState<AIProduct[]>([]);
  const [trendingAIs, setTrendingAIs] = useState<AIProduct[]>([]);

  useEffect(() => {
    // Fetch real data from Firebase with error handling
    const fetchData = async () => {
      try {
        const fetchedPopularAIs = await getPopularAIs();
        const fetchedTrendingAIs = await getTrendingAIs();
        setPopularAIs(fetchedPopularAIs);
        setTrendingAIs(fetchedTrendingAIs);
      } catch (error) {
        console.error('Error fetching AI data:', error);
        // Fallback to empty arrays if Firebase fails
      }
    };

    fetchData();
  }, []);

  // Convert local agents data to AIProduct format for fallback
  const localAgentsAsAIProducts: AIProduct[] = agentsData.slice(0, 6).map((agent, index) => ({
    id: agent.id,
    name: agent.name,
    description_tr: agent.description_tr || agent.shortDescription,
    overview_tr: agent.description,
    categories: agent.categories,
    banner_url: agent.cover || '',
    logo_url: agent.icon || '',
    website_url: agent.providerUrl || '',
    sales_action: agent.pricing === 'Freemium' ? 'Ücretsiz' : agent.pricing,
    price: agent.price || undefined,
    has_free_plan: agent.pricing === 'Freemium' || agent.pricing === 'Free',
    slug: agent.slug,
    tool_id: parseInt(agent.id),
    category_id: index + 1,
    category_tool_id: index + 1,
    sort_id: agent.id
  }));

  // Use fallback data if Firebase data is empty
  const displayPopularAIs = popularAIs.length > 0 ? popularAIs : localAgentsAsAIProducts;
  const displayTrendingAIs = trendingAIs.length > 0 ? trendingAIs : localAgentsAsAIProducts.slice(3);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-10 text-center">
          {/* Main Title */}
          <div className="mb-8">
            <h1 className="text-8xl font-bold text-black mb-4">
              Yapay Zeka
            </h1>
            <h2 className="text-8xl font-bold text-primary">
              Rehberi
            </h2>
          </div>

          {/* Description - Positioned ABOVE the search bar as per Figma */}
          <div className="mb-32">
            <p className="text-base font-normal text-black max-w-4xl mx-auto leading-relaxed mb-4">
              Semka geleceği şekillendiren yapay zekaların bulunduğu bir pazar yeri platformudur.
            </p>
            <p className="text-base font-normal text-black max-w-4xl mx-auto leading-relaxed">
              En iyi yapay zekaları keşfedebilir ve satın alabilirsin.
            </p>
          </div>

          {/* Search Bar - Positioned BELOW the description as per Figma */}
          <div className="max-w-4xl mx-auto mb-8">
            <div className="relative">
              <form onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const searchTerm = formData.get('search') as string;
                if (searchTerm.trim()) {
                  router.push(`/aramasonucu/${encodeURIComponent(searchTerm.trim())}`);
                }
              }}>
                <div className="flex items-center border-2 border-black rounded-[36px] px-6 py-3 bg-white w-full max-w-[895px] h-[54px] mx-auto">
                  <input
                    type="text"
                    name="search"
                    placeholder="Yapay zeka ile ne yapmak istiyorsun?"
                    className="flex-1 text-base font-medium text-gray-400 placeholder:text-gray-400 placeholder:font-medium outline-none bg-transparent"
                  />
                  <button type="submit" className="flex-shrink-0">
                    <Search className="h-5 w-5 text-[#343330] ml-2" />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Additional Info */}
          <p className="text-sm text-primary">
            10.000+'den fazla işi otomatikleştirin ve kolaylaştırın
          </p>
        </div>
      </section>

      {/* Popular AI Section */}
      <ScrollableCards
        title="Popüler Yapay Zekalar"
        subtitle="En çok kullanılan AI araçları"
        scrollId="popular-ais"
        cards={displayPopularAIs.map((ai, index) => ({
          index: index + 1,
          title: ai.name,
          description: ai.description_tr,
          categories: ai.categories,
          price: ai.sales_action === 'price' ? (
            ai.has_free_plan ? "Bedava" : (
              ai.prices?.pro ? `$${ai.prices.pro}/ay` : (ai.price || "Fiyat bilgisi yok")
            )
          ) : (
            ai.sales_action || "Fiyat bilgisi yok"
          ),
          logoUrl: ai.logo_url,
          bannerUrl: ai.banner_url
        }))}
      />

      {/* Use Cases Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-10">
          {/* Section Header */}
          <div className="mb-12">
            <h2 className="text-3xl font-semibold text-black mb-4">
              Kullanım Senaryoları
            </h2>
            <p className="text-lg text-gray-600">
              Semka üzerinden ihtiyaçlarına uygun yapay zekaları bulabilir ve nasıl kullanacağına dair yol haritalarını öğrenebilirsin.
            </p>
          </div>
          
          {/* Use Cases Grid - Exact Figma Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[70px] max-w-[1139px] mx-auto">
            {/* Video Creation */}
            <Link href="/use-cases/video-creation/" className="block">
              <div className="w-[300px] h-[255px] min-w-[300px] min-h-[255px] bg-white border-2 border-[#C7CAD0] rounded-[10px] flex flex-col items-center justify-center p-4 cursor-pointer hover:shadow-lg transition-shadow">
                <div className="w-[72px] h-[72px] flex items-center justify-center mb-3">
                  <Video className="w-[58.5px] h-[56.25px] text-[#0E0E0F]" />
                </div>
                <div className="w-[72px] h-[1px] bg-[#535962] mb-4"></div>
                <div className="text-center">
                  <h3 className="font-['Inter'] font-semibold text-[28px] leading-[1.14] text-[#0E0E0F] mb-4">Video Oluşturma</h3>
                  <p className="font-['Inter'] font-normal text-[18px] leading-[1.21] text-[#0E0E0F] max-w-[261.88px]">Sadece metin girerek istediğin videoyu oluştur</p>
                </div>
              </div>
            </Link>

            {/* Image Generation */}
            <Link href="/use-cases/gorsel-olusturma/" className="block">
              <div className="w-[300px] h-[255px] min-w-[300px] min-h-[255px] bg-white border border-[#C7CAD0] rounded-[10px] flex flex-col items-center justify-center p-4 cursor-pointer hover:shadow-lg transition-shadow">
                <div className="w-[72px] h-[72px] flex items-center justify-center mb-3">
                  <ImageIcon className="w-[60.75px] h-[51.75px] text-[#0E0E0F]" />
                </div>
                <div className="w-[72px] h-[1px] bg-[#535962] mb-4"></div>
                <div className="text-center">
                  <h3 className="font-['Inter'] font-semibold text-[28px] leading-[1.14] text-[#0E0E0F] mb-4">Görsel Oluşturma</h3>
                  <p className="font-['Inter'] font-normal text-[18px] leading-[1.21] text-[#0E0E0F] max-w-[261.88px]">Sadece metin girerek istediğin görseli oluştur</p>
                </div>
              </div>
            </Link>

            {/* Voiceover */}
            <Link href="/use-cases/seslendirme/" className="block">
              <div className="w-[300px] h-[255px] min-w-[300px] min-h-[255px] bg-white border border-[#C7CAD0] rounded-[10px] flex flex-col items-center justify-center p-4 cursor-pointer hover:shadow-lg transition-shadow">
                <div className="w-[72px] h-[72px] flex items-center justify-center mb-3">
                  <Mic className="w-[60.75px] h-[51.75px] text-[#0E0E0F]" />
                </div>
                <div className="w-[72px] h-[1px] bg-[#535962] mb-4"></div>
                <div className="text-center">
                  <h3 className="font-['Inter'] font-semibold text-[28px] leading-[1.14] text-[#0E0E0F] mb-4">Seslendirme</h3>
                  <p className="font-['Inter'] font-normal text-[18px] leading-[1.21] text-[#0E0E0F] max-w-[261.88px]">İstediğin metni yapay zeka ile seslendir</p>
                </div>
              </div>
            </Link>

            {/* Report Creation */}
            <Link href="/use-cases/rapor-olusturma/" className="block">
              <div className="w-[300px] h-[255px] min-w-[300px] min-h-[255px] bg-white border border-[#C7CAD0] rounded-[10px] flex flex-col items-center justify-center p-4 cursor-pointer hover:shadow-lg transition-shadow">
                <div className="w-[72px] h-[72px] flex items-center justify-center mb-3">
                  <Clipboard className="w-[51.75px] h-[63px] text-[#0E0E0F]" />
                </div>
                <div className="w-[72px] h-[1px] bg-[#535962] mb-4"></div>
                <div className="text-center">
                  <h3 className="font-['Inter'] font-semibold text-[28px] leading-[1.14] text-[#0E0E0F] mb-4">Rapor Oluşturma</h3>
                  <p className="font-['Inter'] font-normal text-[18px] leading-[1.21] text-[#0E0E0F] max-w-[261.88px]">Yapay zeka desteği ile rapor oluşturabilirsin</p>
                </div>
              </div>
            </Link>

            {/* Legal Support */}
            <div className="w-[300px] h-[255px] min-w-[300px] min-h-[255px] bg-white border border-[#C7CAD0] rounded-[10px] flex flex-col items-center justify-center p-4">
              <div className="w-[72px] h-[72px] flex items-center justify-center mb-3">
                <Scale className="w-[60.75px] h-[51.75px] text-[#0E0E0F]" />
              </div>
              <div className="w-[72px] h-[1px] bg-[#535962] mb-4"></div>
              <div className="text-center">
                <h3 className="font-['Inter'] font-semibold text-[28px] leading-[1.14] text-[#0E0E0F] mb-4">Hukuki Destek</h3>
                <p className="font-['Inter'] font-normal text-[18px] leading-[1.21] text-[#0E0E0F] max-w-[261.88px]">Yapay zeka ile sözleşme oluştur veya yorumlat</p>
              </div>
            </div>

            {/* Code Generation */}
            <Link href="/use-cases/kod-yazdir/" className="block">
              <div className="w-[300px] h-[255px] min-w-[300px] min-h-[255px] bg-white border border-[#C7CAD0] rounded-[10px] flex flex-col items-center justify-center p-4 cursor-pointer hover:shadow-lg transition-shadow">
                <div className="w-[72px] h-[72px] flex items-center justify-center mb-3">
                  <Code className="w-[60.75px] h-[51.75px] text-[#0E0E0F]" />
                </div>
                <div className="w-[72px] h-[1px] bg-[#535962] mb-4"></div>
                <div className="text-center">
                  <h3 className="font-['Inter'] font-semibold text-[28px] leading-[1.14] text-[#0E0E0F] mb-4">Kod Yazdır</h3>
                  <p className="font-['Inter'] font-normal text-[18px] leading-[1.21] text-[#0E0E0F] max-w-[261.88px]">Yapay zeka ile uygulama geliştir veya yazılım desteği al</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Trending AI Section */}
      <ScrollableCards
        title="Trend Yapay Zekalar"
        subtitle="En popüler ve güncel AI araçları"
        scrollId="trending-ais"
        cards={displayTrendingAIs.map((ai, index) => ({
          index: index + 1,
          title: ai.name,
          description: ai.description_tr,
          categories: ai.categories,
          price: ai.sales_action === 'price' ? (
            ai.has_free_plan ? "Bedava" : (
              ai.prices?.pro ? `$${ai.prices.pro}/ay` : (ai.price || "Fiyat bilgisi yok")
            )
          ) : (
            ai.sales_action || "Fiyat bilgisi yok"
          ),
          logoUrl: ai.logo_url,
          bannerUrl: ai.banner_url
        }))}
      />
    </div>
  )
}
