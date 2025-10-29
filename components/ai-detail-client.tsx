'use client'

import Link from 'next/link'
import { CheckCircle, Twitter, Linkedin } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { AIProduct } from '@/lib/firebase-data'

interface AIDetailClientProps {
  agent: AIProduct
  relatedTools: AIProduct[]
}

export function AIDetailClient({ agent, relatedTools }: AIDetailClientProps) {
  const router = useRouter()

  // Share handlers
  const handleTwitterShare = () => {
    const url = window.location.href
    const text = `${agent.name} - ${agent.description_tr || agent.overview_tr || ''}`
    const twitterUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`
    window.open(twitterUrl, '_blank')
  }

  const handleLinkedInShare = () => {
    const url = window.location.href
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`
    window.open(linkedInUrl, '_blank')
  }

  return (
    <div className="min-h-screen bg-white dark:bg-white">
      {/* Mobile Layout */}
      <div className="lg:hidden">
        {/* Mobile Header (same as main page) */}
        <div className="bg-white border-b border-gray-200 px-5 py-4">
          <div className="flex items-center justify-between">
            <div 
              className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => router.push('/')}
            >
              <img src="/images/semka_logo_sinek_golgeli.png" alt="Semka Logo" className="w-8 h-8" />
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
              <svg className="h-5 w-5 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.3-4.3"/></svg>
            </button>
          </div>
        </div>
        {/* Categories Navigation (same as main page) */}
        <div className="bg-white border-b border-gray-200 px-5 py-0">
          <div className="flex gap-8 overflow-x-auto">
            <button onClick={() => router.push('/yapay-zeka-araclari/agentlar')} className="text-sm font-medium text-black whitespace-nowrap hover:text-[#0053E2] transition-colors h-[45px]">Agentlar</button>
            <button onClick={() => router.push('/yapay-zeka-araclari/otomasyon')} className="text-sm text-gray-600 whitespace-nowrap hover:text-[#0053E2] transition-colors h-[45px]">Otomasyon</button>
            <button onClick={() => router.push('/yapay-zeka-araclari/fotograf-video')} className="text-sm text-gray-600 whitespace-nowrap hover:text-[#0053E2] transition-colors h=[45px] h-[45px]">Fotoğraf & Video</button>
            <button onClick={() => router.push('/yapay-zeka-araclari/kurumsal')} className="text-sm text-gray-600 whitespace-nowrap hover:text-[#0053E2] transition-colors h-[45px]">Kurumsal</button>
            <button onClick={() => router.push('/yapay-zeka-araclari/altyapi')} className="text-sm text-gray-600 whitespace-nowrap hover:text-[#0053E2] transition-colors h-[45px]">Altyapı</button>
            <button onClick={() => router.push('/yapay-zeka-araclari/uretkenlik')} className="text-sm text-gray-600 whitespace-nowrap hover:text-[#0053E2] transition-colors h-[45px]">Üretkenlik</button>
            <button onClick={() => router.push('/yapay-zeka-araclari/veri')} className="text-sm text-gray-600 whitespace-nowrap hover:text-[#0053E2] transition-colors h-[45px]">Veri</button>
            <button onClick={() => router.push('/yapay-zeka-araclari/sosyal-medya')} className="text-sm text-gray-600 whitespace-nowrap hover:text-[#0053E2] transition-colors h-[45px]">Sosyal Medya</button>
            <button onClick={() => router.push('/yapay-zeka-araclari/ses')} className="text-sm text-gray-600 whitespace-nowrap hover:text-[#0053E2] transition-colors h-[45px]">Ses</button>
            <button onClick={() => router.push('/yapay-zeka-araclari/sohbet-botu')} className="text-sm text-gray-600 whitespace-nowrap hover:text-[#0053E2] transition-colors h-[45px]">Sohbet Botu</button>
            <button onClick={() => router.push('/yapay-zeka-araclari/yazilim-araclari')} className="text-sm text-gray-600 whitespace-nowrap hover:text-[#0053E2] transition-colors h-[45px]">Yazılım Araçları</button>
            <button onClick={() => router.push('/yapay-zeka-araclari/kodsuz-yazilim')} className="text-sm text-gray-600 whitespace-nowrap hover:text-[#0053E2] transition-colors h-[45px]">Kodsuz Yazılım</button>
            <button onClick={() => router.push('/yapay-zeka-araclari/tasarim')} className="text-sm text-gray-600 whitespace-nowrap hover:text-[#0053E2] transition-colors h-[45px]">Tasarım</button>
            <button onClick={() => router.push('/yapay-zeka-araclari/akademi')} className="text-sm text-gray-600 whitespace-nowrap hover:text-[#0053E2] transition-colors h-[45px]">Akademi</button>
          </div>
        </div>

        {/* Banner */}
        <div className="w-full h-[160px] relative">
          {agent.banner_url ? (
            <img src={agent.banner_url} alt={`${agent.name} banner`} className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700" />
          )}
          {/* Logo overlay */}
          <div className="absolute -bottom-8 left-5 w-[64px] h-[64px] rounded-xl overflow-hidden">
            {agent.logo_url ? (
              <img src={agent.logo_url} alt={`${agent.name} logo`} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500 text-xl font-bold">{agent.name.charAt(0)}</span>
              </div>
            )}
          </div>
        </div>

        {/* Header area */}
        <div className="px-5 pt-10">
          <h1 className="text-2xl font-bold text-black mb-1">{agent.name}</h1>
          <p className="text-sm text-[#6A6C72] mb-3">{agent.description_tr || agent.overview_tr || 'AI tool description'}</p>

          {/* Actions */}
          <div className="flex items-center gap-2 mb-4">
            <a
              href={agent.website_url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0053E2] text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-[#003db3] transition-colors"
            >
              Siteye Git
            </a>
            {agent.categories.slice(0, 2).map((category) => (
              <button
                key={category}
                className="bg-white text-[#6A6C72] border border-[rgba(199,202,208,0.6)] px-3 py-2 rounded-md text-xs font-semibold dark:bg-white"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Overview */}
        <div className="px-5">
          <h2 className="text-lg font-semibold text-black mb-2">Yapay Zeka Hakkında</h2>
          <p className="text-sm text-black leading-relaxed">
            {agent.overview_tr || agent.description_tr || 'Detailed description about this AI tool.'}
          </p>
        </div>

        {/* Pricing */}
        <div className="px-5 mt-6">
          <h2 className="text-lg font-semibold text-black mb-2">Fiyatlar</h2>
          <div className="space-y-3">
            {agent.sales_action === 'price' ? (
              <>
                {agent.has_free_plan && (
                  <div className="w-full h-[44px] bg-white border-2 border-[rgba(199,202,208,0.6)] rounded-md flex items-center justify-center">
                    <span className="text-base font-semibold text-[#6A6C72]"><span className="text-black font-bold">$0</span> / ay</span>
                  </div>
                )}
                {agent.prices?.pro !== undefined && agent.prices?.pro !== null && String(agent.prices.pro) !== '-' && (
                  <div className="w-full h-[44px] bg-white border-2 border-[rgba(199,202,208,0.6)] rounded-md flex items-center justify-center">
                    <span className="text-base font-semibold text-[#6A6C72]"><span className="text-black font-bold">${agent.prices.pro}</span> / ay</span>
                  </div>
                )}
                {agent.prices?.team !== undefined && agent.prices?.team !== null && String(agent.prices.team) !== '-' && (
                  <div className="w-full h-[44px] bg-white border-2 border-[rgba(199,202,208,0.6)] rounded-md flex items-center justify-center">
                    <span className="text-base font-semibold text-[#6A6C72]"><span className="text-black font-bold">${agent.prices.team}</span> / ay</span>
                  </div>
                )}
              </>
            ) : (
              <div className="w-full h-[44px] bg-white border-2 border-[rgba(199,202,208,0.6)] rounded-md flex items-center justify-center">
                <span className="text-base font-semibold text-[#6A6C72]"><span className="text-black font-bold">{agent.sales_action || 'Fiyat bilgisi yok'}</span></span>
              </div>
            )}
          </div>
        </div>

        {/* Features */}
        <div className="px-5 mt-6">
          <h2 className="text-lg font-semibold text-black mb-3">Özellikler ve Kullanım Senaryoları</h2>
          <div className="space-y-3">
            {[agent.features1, agent.features2, agent.features3, agent.features4, agent.features5, agent.features6, agent.features7, agent.features8, agent.features9, agent.features10]
              .filter(feature => feature && feature.trim() !== '')
              .map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 min-w-[16px] min-h-[16px] text-[#65D46A] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-black">{feature}</span>
                </div>
              ))}
          </div>
        </div>

        {/* Related */}
        <div className="px-5 mt-8">
          <h2 className="text-lg font-semibold text-black mb-3">Benzer yapay zekalar</h2>
          <div className="flex gap-[22px] overflow-x-auto pb-2">
            {relatedTools.map((tool) => (
              <Link
                key={tool.id}
                href={`/yapay-zeka/${tool.slug}`}
                className="min-w-[326px] w-[326px] flex flex-col items-start"
              >
                {/* Banner */}
                <div className="w-full h-[163.37px] rounded-t-[10px] overflow-hidden">
                  {tool.banner_url ? (
                    <img src={tool.banner_url} alt={`${tool.name} banner`} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100" />
                  )}
                </div>
                {/* Bottom info */}
                <div className="w-full h-[97px] pt-[14px] px-[12px] bg-white rounded-b-[10px] flex items-start gap-[2px] border border-[#E5E7EB] border-t-0">
                  {/* Logo */}
                  <div className="w-[57px] h-[57px] rounded-[8px] overflow-hidden flex-shrink-0 bg-gray-100">
                    {tool.logo_url ? (
                      <img src={tool.logo_url} alt={`${tool.name} logo`} className="w-full h-full object-cover" />
                    ) : null}
                  </div>
                  {/* Middle content */}
                  <div className="flex-1 h-[71px] flex flex-col items-start gap-2 ml-2 min-w-0">
                    <div className="w-full text-black font-semibold text-[16px] leading-[19px] truncate">{tool.name}</div>
                    <div className="w-[210px] h-[19px] text-[#535961] font-semibold text-[16px] leading-[19px] truncate">
                      {tool.description_tr || 'AI tool description'}
                    </div>
                    <div className="flex items-center gap-[3px] text-[#888E96] text-[12px] leading-[15px]">
                      {tool.categories.slice(0, 3).map((c, i) => (
                        <span key={c} className="flex items-center whitespace-nowrap">
                          <span>{c}</span>
                          {i < Math.min(tool.categories.length - 1, 2) && (
                            <span className="w-[9px] h-[11.16px] text-[30px] leading-[10px] ml-[3px]">·</span>
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Price */}
                  <div className="text-black text-[12px] font-semibold ml-2 flex-shrink-0 self-start">
                    {tool.has_free_plan
                      ? 'Ücretsiz Sürümü Var'
                      : tool.sales_action === 'price' && tool.prices?.pro
                        ? `$${tool.prices.pro}`
                        : 'Fiyat'}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        {/* Mobile Footer (same as main page) */}
        <div className="bg-white border-t border-gray-200 px-5 py-4 mt-6">
          <div className="max-w-sm mx-auto text-center">
            {/* Logo */}
            <div className="flex items-center justify-center gap-2 mb-3">
              <img src="/images/semka_logo_sinek_golgeli.png" alt="Semka Logo" className="w-8 h-8" />
              <span className="text-2xl font-semibold text-black">Semka</span>
            </div>

            {/* Subtitle */}
            <p className="text-sm text-black mb-3">Yapay Zeka Rehberiniz</p>

            {/* Email */}
            <p className="text-sm text-black mb-4">hello@semka.ai</p>

            {/* Social Icons */}
            <div className="flex justify-center gap-4 mb-4">
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="w-4 h-4">
                <svg className="w-full h-full text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="w-4 h-4">
                <svg className="w-full h-full text-black" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" className="w-4 h-4">
                <svg className="w-full h-full text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" /></svg>
              </a>
            </div>

            {/* Links */}
            <div className="space-y-2 text-sm">
              <div className="flex justify-center gap-6">
                <a href="/hakkimizda" className="text-black">Hakkımızda</a>
                <a href="/add-company" className="text-black">Şirketini Ekle</a>
              </div>
              <a href="/use-cases" className="text-black">Kullanım Senaryoları</a>
            </div>

            {/* Copyright */}
            <p className="text-xs text-black mt-4">Semka A.Ş. Tüm Hakları Saklıdır</p>
          </div>
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
      {/* Hero Section */}
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
        
        {/* AI Logo - positioned exactly as per Figma coordinates */}
        <div className="absolute left-[70px] top-[210px] w-[100px] h-[100px] rounded-xl flex items-center justify-center overflow-hidden">
          {agent.logo_url ? (
            <img 
              src={agent.logo_url} 
              alt={`${agent.name} logo`}
              className="w-full h-full rounded-xl object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 rounded-xl flex items-center justify-center">
              <span className="text-gray-500 text-2xl font-bold">{agent.name.charAt(0)}</span>
            </div>
          )}
        </div>
        
        {/* AI Name - positioned exactly as per Figma coordinates */}
        <h1 className="absolute left-[73.89px] top-[349px] w-[200px] h-[36px] text-[30px] font-bold text-black dark:text-black leading-[36px] whitespace-nowrap">
          {agent.name}
        </h1>
        
        {/* AI Description - positioned exactly as per Figma coordinates */}
        <p className="absolute left-[73.89px] top-[393px] w-[544px] h-[19px] text-base font-medium text-black dark:text-black leading-[19px] tracking-[0.01em] whitespace-nowrap">
          {agent.description_tr || agent.overview_tr || 'AI tool description'}
        </p>
        
        {/* Action Buttons - positioned exactly as per Figma coordinates */}
        <div className="absolute left-[73.2px] top-[432px] w-[277px] h-[27px] flex items-center gap-3">
          <a 
            href={agent.website_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#0053E2] text-white px-4 py-2 rounded-md text-xs font-semibold hover:bg-[#003db3] transition-colors whitespace-nowrap"
          >
            Siteye Git
            
          </a>
          {agent.categories.slice(0, 2).map((category) => (
            <button key={category} className="bg-white text-[#6A6C72] border border-[rgba(199,202,208,0.6)] px-4 py-2 rounded-md text-xs font-semibold hover:bg-gray-50 transition-colors whitespace-nowrap dark:bg-white dark:text-[#6A6C72] dark:border-[rgba(199,202,208,0.6)]">
              {category}
            </button>
          ))}
        </div>
        
        {/* Social Icons - positioned on same line as action buttons, ending at banner's right edge */}
        <div className="absolute right-[40px] top-[432px] w-[80px] h-[16px] flex items-center gap-4 justify-end">
          <button 
            onClick={handleTwitterShare}
            className="w-8 h-8 flex items-center justify-center text-[#343330] hover:text-gray-600 transition-colors"
            title="Twitter'da paylaş"
          >
            <Twitter className="w-5 h-5" />
          </button>
          <button 
            onClick={handleLinkedInShare}
            className="w-8 h-8 flex items-center justify-center text-[#343330] hover:text-gray-600 transition-colors"
            title="LinkedIn'de paylaş"
          >
            <Linkedin className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-10 py-16 mt-[214px]">
        {/* About AI Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-black dark:text-black mb-6">
            Yapay Zeka Hakkında
          </h2>
          <p className="text-sm text-black dark:text-black leading-relaxed max-w-[1170px]">
            {agent.overview_tr || agent.description_tr || 'Detailed description about this AI tool.'}
          </p>
        </div>

        {/* Pricing Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-black dark:text-black mb-6">
            Fiyatlar
          </h2>
          
          <div className="flex gap-[85px]">
            {/* Check if sales_action is "price" */}
            {agent.sales_action === 'price' ? (
              <>
                {/* Free Plan */}
                {agent.has_free_plan && (
                  <div className="w-[206px] h-[49px] bg-white dark:bg-white border-2 border-[rgba(199,202,208,0.6)] dark:border-[rgba(199,202,208,0.6)] rounded-md flex items-center justify-center p-1">
                    <span className="text-lg font-semibold text-[#6A6C72]">
                      <span className="text-black dark:text-black font-bold">$0</span> / ay
                    </span>
                  </div>
                )}
                
                {/* Pro Plan - only show if price is valid */}
                {agent.prices?.pro !== undefined && agent.prices?.pro !== null && String(agent.prices.pro) !== '-' && (
                  <div className="w-[206px] h-[49px] bg-white dark:bg-white border-2 border-[rgba(199,202,208,0.6)] dark:border-[rgba(199,202,208,0.6)] rounded-md flex items-center justify-center p-1">
                    <span className="text-lg font-semibold text-[#6A6C72]">
                      <span className="text-black dark:text-black font-bold">${agent.prices.pro}</span> / ay
                    </span>
                  </div>
                )}
                
                {/* Team Plan - only show if price is valid */}
                {agent.prices?.team !== undefined && agent.prices?.team !== null && String(agent.prices.team) !== '-' && (
                  <div className="w-[206px] h-[49px] bg-white dark:bg-white border-2 border-[rgba(199,202,208,0.6)] dark:border-[rgba(199,202,208,0.6)] rounded-md flex items-center justify-center p-1">
                    <span className="text-lg font-semibold text-[#6A6C72]">
                      <span className="text-black dark:text-black font-bold">${agent.prices.team}</span> / ay
                    </span>
                  </div>
                )}
                
                {/* Business Plan - only show if price is valid */}
                {agent.prices?.business !== undefined && agent.prices?.business !== null && String(agent.prices.business) !== '-' && (
                  <div className="w-[206px] h-[49px] bg-white dark:bg-white border-2 border-[rgba(199,202,208,0.6)] dark:border-[rgba(199,202,208,0.6)] rounded-md flex items-center justify-center p-1">
                    <span className="text-lg font-semibold text-[#6A6C72]">
                      <span className="text-black dark:text-black font-bold">${agent.prices.business}</span> / ay
                    </span>
                  </div>
                )}
                
                {/* Organization Plan - only show if price is valid */}
                {agent.prices?.organization !== undefined && agent.prices?.organization !== null && String(agent.prices.organization) !== '-' && (
                  <div className="w-[206px] h-[49px] bg-white dark:bg-white border-2 border-[rgba(199,202,208,0.6)] dark:border-[rgba(199,202,208,0.6)] rounded-md flex items-center justify-center p-1">
                    <span className="text-lg font-semibold text-[#6A6C72]">
                      <span className="text-black dark:text-black font-bold">${agent.prices.organization}</span> / ay
                    </span>
                  </div>
                )}
                
                {/* Plus Plan - only show if price is valid */}
                {agent.prices?.plus !== undefined && agent.prices?.plus !== null && String(agent.prices.plus) !== '-' && agent.prices.plus !== 0 && (
                  <div className="w-[206px] h-[49px] bg-white dark:bg-white border-2 border-[rgba(199,202,208,0.6)] dark:border-[rgba(199,202,208,0.6)] rounded-md flex items-center justify-center p-1">
                    <span className="text-lg font-semibold text-[#6A6C72]">
                      <span className="text-black dark:text-black font-bold">${agent.prices.plus}</span> / ay
                    </span>
                  </div>
                )}
                
                {/* Plus Plan with 0 value - special case */}
                {agent.prices?.plus === 0 && (
                  <div className="w-[206px] h-[49px] bg-white dark:bg-white border-2 border-[rgba(199,202,208,0.6)] dark:border-[rgba(199,202,208,0.6)] rounded-md flex items-center justify-center p-1">
                    <span className="text-lg font-semibold text-[#6A6C72]">
                      <span className="text-black dark:text-black font-bold">$0</span> / ay
                    </span>
                  </div>
                )}

              </>
            ) : (
              /* If sales_action is not "price", show the sales_action value */
              <div className="w-[206px] h-[49px] bg-white border-2 border-[rgba(199,202,208,0.6)] rounded-md flex items-center justify-center p-1">
                <span className="text-lg font-semibold text-[#6A6C72]">
                  <span className="text-black dark:text-black font-bold">{agent.sales_action || 'Fiyat bilgisi yok'}</span>
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-0">
          <h2 className="text-2xl font-semibold text-black dark:text-black mb-6">
            Özellikler ve Kullanım Senaryoları
          </h2>
          
          <div className="flex flex-col gap-5 max-w-[1162px]">
            {[agent.features1, agent.features2, agent.features3, agent.features4, agent.features5, agent.features6, agent.features7, agent.features8, agent.features9, agent.features10]
              .filter(feature => feature && feature.trim() !== '')
              .map((feature, index) => (
                <div key={index} className="flex items-end gap-[9px]">
                  <CheckCircle className="w-4 h-4 text-[#65D46A] flex-shrink-0" />
                  <span className="text-sm text-black dark:text-black">{feature}</span>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Separator Line */}
      <div className="container mx-auto px-10">
        <div className="w-full h-px bg-[rgba(199,202,208,0.6)] dark:bg-[rgba(199,202,208,0.6)] mb-10"></div>
      </div>

      {/* Related AI Section */}
      <div className="container mx-auto px-10 mb-16">
        <h2 className="text-2xl font-semibold text-black dark:text-black mb-8">
          Bu yapay zekaları da beğenebilirsin
        </h2>
        <div className="flex gap-6 overflow-x-auto pb-4">
          {relatedTools.length > 0 ? (
            relatedTools.map((tool) => (
              <Link 
                key={tool.id} 
                href={`/yapay-zeka/${tool.slug}`}
                className="border border-[#E5E7EB] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] hover:shadow-lg transition-shadow w-[385px] h-[277px] flex-shrink-0"
              >
                <div className="p-0 h-full flex flex-col">
                  {/* Top Section - Background with banner or gradient */}
                  <div className="w-[385px] h-[192.24px] rounded-t-[10px] relative overflow-hidden">
                    {tool.banner_url ? (
                      <img 
                        src={tool.banner_url} 
                        alt={`${tool.name} banner`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <>
                        {/* Gradient background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100" />
                        
                        {/* Decorative elements */}
                        <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 opacity-60 blur-sm top-4 left-4" />
                        <div className="absolute w-12 h-8 bg-gradient-to-br from-purple-400 to-blue-500 opacity-40 rounded-lg transform bottom-4 right-4 rotate-12" />
                        <div className="absolute top-8 right-8 w-2 h-2 bg-gray-600 rounded-full opacity-60" />
                        <div className="absolute top-16 right-16 w-1.5 h-1.5 bg-gray-600 rounded-full opacity-40" />
                        <div className="absolute top-20 right-6 w-1 h-1 bg-gray-600 rounded-full opacity-50" />
                      </>
                    )}
                  </div>

                  {/* Bottom Section - Tool info */}
                  <div className="w-[385px] h-[103px] bg-white dark:bg-white rounded-b-[10px] flex flex-row justify-center items-start px-[12px] pt-[12px] pb-[20px] gap-[12px]">
                    {/* Logo */}
                    <div className="w-[45px] h-[45px] rounded-[8px] flex items-center justify-center flex-shrink-0 overflow-hidden">
                      {tool.logo_url ? (
                        <img 
                          src={tool.logo_url} 
                          alt={`${tool.name} logo`}
                          className="w-full h-full object-cover rounded-[8px]"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 rounded-[8px] flex items-center justify-center">
                          <span className="text-gray-500 text-lg font-bold">{tool.name.charAt(0)}</span>
                        </div>
                      )}
                    </div>
                    
                    {/* Tool Details */}
                    <div className="flex-1 min-w-0 flex flex-col items-start p-0">
                      {/* Title */}
                      <div className="w-full font-['Inter'] font-semibold text-base leading-[19px] text-[#000000] dark:text-[#000000] mb-1 flex items-center">
                        <span className="truncate">{tool.name}</span>
                      </div>
                      
                      {/* Description */}
                      <div className="w-full font-['Inter'] font-semibold text-base leading-[19px] tracking-[-0.01em] text-[#535961] mb-2 flex items-center">
                        <span className="truncate">{tool.description_tr || 'AI tool description'}</span>
                      </div>
                      
                      {/* Categories */}
                      <div className="w-full flex flex-row items-center p-0 gap-[3px]">
                        {tool.categories.slice(0, 3).map((category, index) => (
                          <span key={category} className="flex items-center">
                            <span className="font-['Inter'] font-normal text-xs leading-[15px] text-[#888E96] whitespace-nowrap">{category}</span>
                            {index < Math.min(tool.categories.length - 1, 2) && (
                              <span className="w-[9px] h-[11.16px] font-['Inter'] font-normal text-[30px] leading-[10px] text-[#888E96] ml-[3px] flex-shrink-0">·</span>
                            )}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Price */}
                    <div className="w-[50px] h-[17px] font-['Inter'] font-semibold text-sm leading-[17px] tracking-[-0.01em] text-[#000000] dark:text-[#000000] flex-shrink-0 flex items-center justify-center mr-3">
                      <span className="whitespace-nowrap">
                        {tool.has_free_plan ? 'Ücretsiz Sürümü Var' : 
                         tool.sales_action === 'price' && tool.prices?.pro ? `$${tool.prices.pro}` : 
                         'Fiyat'}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            // Fallback: Show placeholder message when no related tools found
            <div className="w-full text-center text-gray-500 dark:text-gray-500 py-8">
              <p>Bu kategoriden başka araç bulunamadı.</p>
            </div>
          )}
        </div>
      </div>
      </div>
    </div>
  )
}

