'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Search, ArrowLeft, ArrowRight, Video, Image as ImageIcon, Clipboard, Scale, Mic, Code } from 'lucide-react'
import ScrollableCards from '@/components/scrollable-cards'
import { getPopularAIs, getTrendingAIs, AIProduct } from '@/lib/firebase-data'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  const router = useRouter();
  const [popularAIs, setPopularAIs] = useState<AIProduct[]>([]);
  const [trendingAIs, setTrendingAIs] = useState<AIProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch real data from Firebase
    const fetchData = async () => {
      try {
        console.log('Starting to fetch AI data...');
        setIsLoading(true);
        const [fetchedPopularAIs, fetchedTrendingAIs] = await Promise.all([
          getPopularAIs(),
          getTrendingAIs(),
        ]);

        console.log('Fetched popular AIs:', fetchedPopularAIs?.length || 0);
        console.log('Fetched trending AIs:', fetchedTrendingAIs?.length || 0);

        setPopularAIs(fetchedPopularAIs || []);
        setTrendingAIs(fetchedTrendingAIs || []);
      } catch (error) {
        console.error('Error fetching AI data:', error);
        setPopularAIs([]);
        setTrendingAIs([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Use Firebase data directly - no local fallback
  const displayPopularAIs = popularAIs;
  const displayTrendingAIs = trendingAIs;

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
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
        <div className="bg-white border-b border-gray-200 px-5 py-0">
          <div className="flex gap-8 overflow-x-auto">
            <button 
              onClick={() => router.push('/yapay-zeka-araclari/agentlar')}
              className="text-sm font-medium text-black whitespace-nowrap hover:text-[#0053E2] transition-colors h-[45px]"
            >
              Agentlar
            </button>
            <button 
              onClick={() => router.push('/yapay-zeka-araclari/otomasyon')}
              className="text-sm text-gray-600 whitespace-nowrap hover:text-[#0053E2] transition-colors h-[45px]"
            >
              Otomasyon
            </button>
            <button 
              onClick={() => router.push('/yapay-zeka-araclari/fotograf-video')}
              className="text-sm text-gray-600 whitespace-nowrap hover:text-[#0053E2] transition-colors h-[45px]"
            >
              Fotoğraf & Video
            </button>
            <button 
              onClick={() => router.push('/yapay-zeka-araclari/kurumsal')}
              className="text-sm text-gray-600 whitespace-nowrap hover:text-[#0053E2] transition-colors h-[45px]"
            >
              Kurumsal
            </button>
            <button 
              onClick={() => router.push('/yapay-zeka-araclari/altyapi')}
              className="text-sm text-gray-600 whitespace-nowrap hover:text-[#0053E2] transition-colors h-[45px]"
            >
              Altyapı
            </button>
            <button 
              onClick={() => router.push('/yapay-zeka-araclari/uretkenlik')}
              className="text-sm text-gray-600 whitespace-nowrap hover:text-[#0053E2] transition-colors h-[45px]"
            >
              Üretkenlik
            </button>
            <button 
              onClick={() => router.push('/yapay-zeka-araclari/veri')}
              className="text-sm text-gray-600 whitespace-nowrap hover:text-[#0053E2] transition-colors h-[45px]"
            >
              Veri
            </button>
            <button 
              onClick={() => router.push('/yapay-zeka-araclari/sosyal-medya')}
              className="text-sm text-gray-600 whitespace-nowrap hover:text-[#0053E2] transition-colors h-[45px]"
            >
              Sosyal Medya
            </button>
            <button 
              onClick={() => router.push('/yapay-zeka-araclari/ses')}
              className="text-sm text-gray-600 whitespace-nowrap hover:text-[#0053E2] transition-colors h-[45px]"
            >
              Ses
            </button>
            <button 
              onClick={() => router.push('/yapay-zeka-araclari/sohbet-botu')}
              className="text-sm text-gray-600 whitespace-nowrap hover:text-[#0053E2] transition-colors h-[45px]"
            >
              Sohbet Botu
            </button>
            <button 
              onClick={() => router.push('/yapay-zeka-araclari/yazilim-araclari')}
              className="text-sm text-gray-600 whitespace-nowrap hover:text-[#0053E2] transition-colors h-[45px]"
            >
              Yazılım Araçları
            </button>
            <button 
              onClick={() => router.push('/yapay-zeka-araclari/kodsuz-yazilim')}
              className="text-sm text-gray-600 whitespace-nowrap hover:text-[#0053E2] transition-colors h-[45px]"
            >
              Kodsuz Yazılım
            </button>
            <button 
              onClick={() => router.push('/yapay-zeka-araclari/tasarim')}
              className="text-sm text-gray-600 whitespace-nowrap hover:text-[#0053E2] transition-colors h-[45px]"
            >
              Tasarım
            </button>
            <button 
              onClick={() => router.push('/yapay-zeka-araclari/akademi')}
              className="text-sm text-gray-600 whitespace-nowrap hover:text-[#0053E2] transition-colors h-[45px]"
            >
              Akademi
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-4 lg:pt-20 pb-4 lg:pb-16 px-5 lg:px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <div className="mb-4 lg:mb-8">
            <h1 className="text-3xl lg:text-8xl font-bold text-black mb-1">
              Yapay Zeka
            </h1>
            <h1 className="text-3xl lg:text-8xl font-bold text-[#0053E2]">
              Rehberi
            </h1>
          </div>

          {/* Description */}
          <div className="mb-4 lg:mb-32">
            <p className="text-sm lg:text-base text-black max-w-4xl mx-auto leading-relaxed mb-1">
              Semka geleceği şekillendiren yapay zekaların
            </p>
            <p className="text-sm lg:text-base text-black max-w-4xl mx-auto leading-relaxed mb-1">
              bulunduğu bir pazar yeri platformudur.
            </p>
            <p className="text-sm lg:text-base text-black max-w-4xl mx-auto leading-relaxed">
              En iyi yapay zekaları keşfedebilir ve satın alabilirsin.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto mb-4 lg:mb-8">
            <div className="relative">
              <form onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const searchTerm = formData.get('search') as string;
                if (searchTerm.trim()) {
                  router.push(`/aramasonucu/${encodeURIComponent(searchTerm.trim())}`);
                }
              }}>
                <div className="flex items-center border-2 border-black focus-within:border-[#0053E2] rounded-[36px] px-6 py-3 bg-white w-full max-w-[349px] lg:max-w-[895px] h-[54px] mx-auto transition-colors">
                  <input
                    type="text"
                    name="search"
                    placeholder="Yapay zeka ile ne yapmak istersin?"
                    className="flex-1 text-base font-medium text-black placeholder:text-gray-400 placeholder:font-medium outline-none bg-transparent"
                  />
                  <button type="submit" className="flex-shrink-0">
                    <Search className="h-5 w-5 text-[#343330] ml-2" />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Additional Info */}
          <p className="text-sm text-[#0053E2]">
            10.000+'den fazla işi otomatikleştirin ve kolaylaştırın
          </p>
        </div>
      </section>

      {/* Popular AI Section */}
      <ScrollableCards
        title="Popüler Yapay Zekalar"
        subtitle="En sık kullanılan yapay zekalar"
        scrollId="popular-ais"
        cards={isLoading ? [] : displayPopularAIs.map((ai, index) => ({
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
      <section className="py-4 lg:py-16 px-5 lg:px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-4 lg:mb-12">
            <h2 className="text-xl lg:text-3xl font-bold text-black mb-1 lg:mb-4">
              Kullanım Senaryoları
            </h2>
            <p className="text-sm lg:text-lg text-gray-600">
              Yapay zekayı kullanmak için yol haritaları
            </p>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-0">
            {/* Video Creation */}
            <Link href="/use-cases/video-creation/" className="block border-b border-gray-200 py-2">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Video className="w-6 h-6 text-[#0053E2]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-black mb-1">
                    Video Oluşturma
                  </h3>
                  <p className="text-xs text-gray-600">
                    Sadece metin girerek istediğin videoyu oluştur
                  </p>
                </div>
              </div>
            </Link>

            {/* Image Generation */}
            <Link href="/use-cases/gorsel-olusturma/" className="block border-b border-gray-200 py-2">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <ImageIcon className="w-6 h-6 text-[#0053E2]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-black mb-1">
                    Görsel Oluşturma
                  </h3>
                  <p className="text-xs text-gray-600">
                    Sadece metin girerek istediğin görseli oluştur
                  </p>
                </div>
              </div>
            </Link>

            {/* Voice Generation */}
            <Link href="/use-cases/seslendirme/" className="block border-b border-gray-200 py-2">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mic className="w-6 h-6 text-[#0053E2]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-black mb-1">
                    Seslendirme
                  </h3>
                  <p className="text-xs text-gray-600">
                    İstediğin metni yapay zeka ile seslendir
                  </p>
                </div>
              </div>
            </Link>

            {/* Report Generation */}
            <Link href="/use-cases/rapor-olusturma/" className="block border-b border-gray-200 py-2">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clipboard className="w-6 h-6 text-[#0053E2]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-black mb-1">
                    Rapor Oluşturma
                  </h3>
                  <p className="text-xs text-gray-600">
                    Yapay zeka desteği ile rapor oluşturabilirsin
                  </p>
                </div>
              </div>
            </Link>

            {/* Legal Support */}
            <div className="block border-b border-gray-200 py-2">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Scale className="w-6 h-6 text-[#0053E2]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-black mb-1">
                    Hukuki Destek
                  </h3>
                  <p className="text-xs text-gray-600">
                    Yapay zeka ile sözleşme oluştur veya yorumlat
                  </p>
                </div>
              </div>
            </div>

            {/* Code Generation */}
            <Link href="/use-cases/kod-yazdir/" className="block py-2">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Code className="w-6 h-6 text-[#0053E2]" />
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-black mb-1">
                    Kod Yazdır
                  </h3>
                  <p className="text-xs text-gray-600">
                    Yapay zeka ile uygulama geliştir veya yazılım desteği al
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[70px] max-w-[1139px] mx-auto">
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
        subtitle="Yeni çıkan yapay zekalar"
        scrollId="trending-ais"
        cards={isLoading ? [] : displayTrendingAIs.map((ai, index) => ({
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

      {/* Mobile Footer */}
      <div className="lg:hidden bg-white border-t border-gray-200 px-5 py-4">
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
              <svg className="w-full h-full text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </button>
            <button className="w-4 h-4">
              <svg className="w-full h-full text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 c0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </button>
            <button className="w-4 h-4">
              <svg className="w-full h-full text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
            </button>
          </div>

          {/* Links */}
          <div className="space-y-2 text-sm">
            <div className="flex justify-center gap-6">
              <a href="/hakkimizda" className="text-black">Hakkımızda</a>
              <button className="text-black">Şirketini Ekle</button>
            </div>
            <button className="text-black">Kullanım Senaryoları</button>
          </div>

          {/* Copyright */}
          <p className="text-xs text-black mt-4">Semka A.Ş. Tüm Hakları Saklıdır</p>
        </div>
      </div>

      {/* iOS Home Indicator */}
      <div className="lg:hidden flex justify-center py-2">
        <div className="w-32 h-1 bg-black rounded-full"></div>
      </div>
    </div>
  )
}