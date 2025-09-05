'use client'

import Link from 'next/link'
import { CheckCircle, Share2, Twitter, Linkedin } from 'lucide-react'

export default function ManusAIDetailPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative">
        {/* Background Image with 40px gap from screen edges */}
        <div className="mx-10 h-[260px] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 relative overflow-hidden rounded-t-lg">
          {/* Abstract grid pattern overlay */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMEg2MFY2MEgwVjBaIiBmaWxsPSIjMDAwMDAwIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8cGF0aCBkPSJNMCAwSDYwVjBIMFYwWiIgZmlsbD0iIzAwMDAwMCIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPHBhdGggZD0iTTAgMEg2MFY2MEgwVjBaIiBmaWxsPSIjMDAwMDAwIiBmaWxsLW9wYWNpdHk9IjAuMSIvPgo8cGF0aCBkPSJNMCAwSDYwVjBIMFYwWiIgZmlsbD0iIzAwMDAwMCIgZmlsbC1vcGFjaXR5PSIwLjEiLz4KPC9zdmc+')] opacity-20"></div>
          
          {/* Glowing circular element on right */}
          <div className="absolute right-8 top-8 w-24 h-24 bg-blue-400 rounded-full opacity-60 blur-sm"></div>
        </div>
        
        {/* AI Logo - positioned exactly as per Figma coordinates */}
        <div className="absolute left-[70px] top-[210px] w-[100px] h-[100px] bg-pink-500 rounded-xl flex items-center justify-center">
          <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
            <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-pink-500 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* AI Name - positioned exactly as per Figma coordinates */}
        <h1 className="absolute left-[73.89px] top-[349px] w-[100px] h-[36px] text-[30px] font-bold text-black leading-[36px]">
          Manus
        </h1>
        
        {/* AI Description - positioned exactly as per Figma coordinates */}
        <p className="absolute left-[73.89px] top-[393px] w-[544px] h-[19px] text-base font-medium text-black leading-[19px] tracking-[0.01em] whitespace-nowrap">
          Karmaşık görevleri yapay zeka yapay zeka sohbet botu ile tamamlayın
        </p>
        
        {/* Action Buttons - positioned exactly as per Figma coordinates */}
        <div className="absolute left-[73.2px] top-[432px] w-[277px] h-[27px] flex items-center gap-3">
          <button className="bg-[#00A070] text-white px-4 py-2 rounded-md text-xs font-semibold hover:bg-[#008f63] transition-colors whitespace-nowrap">
            Siteye Git
          </button>
          <button className="bg-white text-[#6A6C72] border border-[rgba(199,202,208,0.6)] px-4 py-2 rounded-md text-xs font-semibold hover:bg-gray-50 transition-colors whitespace-nowrap">
            Agentlar
          </button>
          <button className="bg-white text-[#6A6C72] border border-[rgba(199,202,208,0.6)] px-4 py-2 rounded-md text-xs font-semibold hover:bg-gray-50 transition-colors whitespace-nowrap">
            Çok Amaçlı
          </button>
        </div>
        
        {/* Social Icons - positioned on same line as action buttons, ending at banner's right edge */}
        <div className="absolute right-[40px] top-[432px] w-[80px] h-[16px] flex items-center gap-4 justify-end">
          <button className="w-8 h-8 flex items-center justify-center text-[#343330] hover:text-gray-600 transition-colors">
            <Share2 className="w-5 h-5" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-[#343330] hover:text-gray-600 transition-colors">
            <Twitter className="w-5 h-5" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-[#343330] hover:text-gray-600 transition-colors">
            <Linkedin className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-10 py-16 mt-[214px]">
        {/* About AI Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-black mb-6">
            Yapay Zeka Hakkında
          </h2>
          <p className="text-sm text-black leading-relaxed max-w-[1170px]">
            Manus, Çinli girişim Monica tarafından geliştirilen tamamen otonom bir yapay zeka ajanıdır. 
            Mart 2025'te piyasaya sürülen Manus, sürekli insan rehberliği olmadan karmaşık, çok adımlı 
            görevleri bağımsız olarak yürütmek üzere tasarlanmıştır. Manus, web taraması, veri analizi, 
            içerik oluşturma ve yazılım geliştirme gibi görevleri yerine getirmek için birden fazla yapay 
            zeka modelini ve aracını entegre eder. Bulutta eşzamansız olarak çalışarak, kullanıcıların 
            görevleri devretmesine ve tamamlandığında sonuçları almasına olanak tanır. Manus, OpenAI'nin 
            DeepResearch'ü gibi modelleri geride bırakarak GAIA kıyaslamasında üstün performans göstermiştir. 
            Manus'a erişim şu anda sınırlı ve davetiye gerektiriyor.
          </p>
        </div>

        {/* Pricing Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-black mb-6">
            Fiyatlar
          </h2>
          <div className="flex gap-[85px]">
            <div className="w-[206px] h-[49px] bg-white border-2 border-[rgba(199,202,208,0.6)] rounded-md flex items-center justify-center p-1">
              <span className="text-lg font-semibold text-[#6A6C72]">
                <span className="text-black font-bold">$19</span> / ay
              </span>
            </div>
            <div className="w-[206px] h-[49px] bg-white border-2 border-[rgba(199,202,208,0.6)] rounded-md flex items-center justify-center p-1">
              <span className="text-lg font-semibold text-[#6A6C72]">
                <span className="text-black font-bold">$39</span> / ay
              </span>
            </div>
            <div className="w-[206px] h-[49px] bg-white border-2 border-[rgba(199,202,208,0.6)] rounded-md flex items-center justify-center p-1">
              <span className="text-lg font-semibold text-[#6A6C72]">
                <span className="text-black font-bold">$199</span> / ay
              </span>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-0">
          <h2 className="text-2xl font-semibold text-black mb-6">
            Özellikler ve Kullanım Senaryoları
          </h2>
          <div className="flex flex-col gap-5 max-w-[1162px]">
            <div className="flex items-end gap-[9px]">
              <CheckCircle className="w-4 h-4 text-[#65D46A] flex-shrink-0" />
              <span className="text-sm text-black">Autonomous execution of complex, multi-step tasks</span>
            </div>
            <div className="flex items-end gap-[9px]">
              <CheckCircle className="w-4 h-4 text-[#65D46A] flex-shrink-0" />
              <span className="text-sm text-black">Integration with various AI models and tools</span>
            </div>
            <div className="flex items-end gap-[9px]">
              <CheckCircle className="w-4 h-4 text-[#65D46A] flex-shrink-0" />
              <span className="text-sm text-black">Asynchronous cloud-based operation</span>
            </div>
            <div className="flex items-end gap-[9px]">
              <CheckCircle className="w-4 h-4 text-[#65D46A] flex-shrink-0" />
              <span className="text-sm text-black">High performance on GAIA benchmark</span>
            </div>
            <div className="flex items-end gap-[9px]">
              <CheckCircle className="w-4 h-4 text-[#65D46A] flex-shrink-0" />
              <span className="text-sm text-black">Limited access via invitation system</span>
            </div>
            <div className="flex items-end gap-[9px]">
              <CheckCircle className="w-4 h-4 text-[#65D46A] flex-shrink-0" />
              <span className="text-sm text-black">Developed by Chinese startup Monica</span>
            </div>
            <div className="flex items-end gap-[9px] self-stretch">
              <CheckCircle className="w-4 h-4 text-[#65D46A] flex-shrink-0" />
              <span className="text-sm text-black">Designed for tasks like web browsing, data analysis, and content creation</span>
            </div>
            <div className="flex items-end gap-[9px]">
              <CheckCircle className="w-4 h-4 text-[#65D46A] flex-shrink-0" />
              <span className="text-sm text-black">Operates without continuous human guidance</span>
            </div>
            <div className="flex items-end gap-[9px]">
              <CheckCircle className="w-4 h-4 text-[#65D46A] flex-shrink-0" />
              <span className="text-sm text-black">Launched in March 2025</span>
            </div>
            <div className="flex items-end gap-[9px]">
              <CheckCircle className="w-4 h-4 text-[#65D46A] flex-shrink-0" />
              <span className="text-sm text-black">Surpasses models like OpenAI's DeepResearch</span>
            </div>
          </div>
        </div>
      </div>

      {/* Separator Line */}
      <div className="container mx-auto px-10">
        <div className="w-full h-px bg-[rgba(199,202,208,0.6)] mb-10"></div>
      </div>

      {/* Related AI Section */}
      <div className="container mx-auto px-10 mb-16">
        <h2 className="text-2xl font-semibold text-black mb-8">
          Bu yapay zekaları da beğenebilirsin
        </h2>
        <div className="flex gap-6 overflow-x-auto pb-4">
          {/* AI Card 1 */}
          <div className="border border-[#E5E7EB] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] hover:shadow-lg transition-shadow w-[385px] h-[277px] flex-shrink-0">
            <div className="p-0 h-full flex flex-col">
              {/* Top Section - image 6 - Exact Figma dimensions and properties */}
              <div className="w-[385px] h-[192.24px] bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100 rounded-t-[10px] relative overflow-hidden">
                {/* Placeholder for Figma background image - different style for each card */}
                <div className="absolute inset-0 opacity-60 bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100" />
                
                {/* Iridescent Sphere */}
                <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 opacity-60 blur-sm top-4 left-4" />
                
                {/* Translucent Objects */}
                <div className="absolute w-12 h-8 bg-gradient-to-br from-purple-400 to-blue-500 opacity-40 rounded-lg transform bottom-4 right-4 rotate-12" />
                
                {/* Data Points */}
                <div className="absolute top-8 right-8 w-2 h-2 bg-gray-600 rounded-full opacity-60" />
                <div className="absolute top-16 right-16 w-1.5 h-1.5 bg-gray-600 rounded-full opacity-40" />
                <div className="absolute top-20 right-6 w-1 h-1 bg-gray-600 rounded-full opacity-50" />
              </div>

              {/* Bottom Section - Kart-info - Exact Figma layout structure */}
              <div className="w-[385px] h-[103px] bg-white rounded-b-[10px] flex flex-row justify-center items-start px-[12px] pt-[12px] pb-[20px] gap-[12px]">
                {/* Logo - image 6 - Exact Figma dimensions */}
                <div className="w-[45px] h-[45px] rounded-[8px] flex items-center justify-center flex-shrink-0">
                  <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="45" height="45" rx="8" fill="#22C55E"/>
                    <rect x="12" y="12" width="21" height="21" rx="2" fill="white"/>
                  </svg>
                </div>
                
                {/* AI Details - Ai-detay - Adjusted to prevent cutoff */}
                <div className="flex-1 min-w-0 flex flex-col items-start p-0">
                  {/* Title - Shortcut - Exact Figma typography and dimensions */}
                  <div className="w-full font-['Inter'] font-semibold text-base leading-[19px] text-[#000000] mb-1 flex items-center">
                    <span className="whitespace-nowrap">Shortcut</span>
                  </div>
                  
                  {/* Description - Adjusted width to prevent cutoff */}
                  <div className="w-full font-['Inter'] font-semibold text-base leading-[19px] tracking-[-0.01em] text-[#535961] mb-2 flex items-center">
                    <span className="whitespace-nowrap">The first superhuman Excel agent</span>
                  </div>
                  
                  {/* Categories - Frame 8 - Adjusted to prevent cutoff */}
                  <div className="w-full flex flex-row items-center p-0 gap-[3px]">
                    <span className="flex items-center">
                      <span className="font-['Inter'] font-normal text-xs leading-[15px] text-[#888E96] whitespace-nowrap">Agents</span>
                    </span>
                    <span className="w-[9px] h-[11.16px] font-['Inter'] font-normal text-[30px] leading-[10px] text-[#888E96] ml-[3px] flex-shrink-0">·</span>
                    <span className="flex items-center">
                      <span className="font-['Inter'] font-normal text-xs leading-[15px] text-[#888E96] whitespace-nowrap">Accounting</span>
                    </span>
                    <span className="w-[9px] h-[11.16px] font-['Inter'] font-normal text-[30px] leading-[10px] text-[#888E96] ml-[3px] flex-shrink-0">·</span>
                    <span className="flex items-center">
                      <span className="font-['Inter'] font-normal text-xs leading-[15px] text-[#888E96] whitespace-nowrap">Multipurpose</span>
                    </span>
                  </div>
                </div>
                
                {/* Price - Bedava - Ensured proper positioning */}
                <div className="w-[50px] h-[17px] font-['Inter'] font-semibold text-sm leading-[17px] tracking-[-0.01em] text-[#000000] flex-shrink-0 flex items-center justify-center mr-3">
                  <span className="whitespace-nowrap">Bedava</span>
                </div>
              </div>
            </div>
          </div>

          {/* AI Card 2 */}
          <div className="border border-[#E5E7EB] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] hover:shadow-lg transition-shadow w-[385px] h-[277px] flex-shrink-0">
            <div className="p-0 h-full flex flex-col">
              {/* Top Section - image 6 - Exact Figma dimensions and properties */}
              <div className="w-[385px] h-[192.24px] bg-gradient-to-br from-indigo-100 via-blue-50 to-purple-100 rounded-t-[10px] relative overflow-hidden">
                {/* Placeholder for Figma background image - different style for each card */}
                <div className="absolute inset-0 opacity-60 bg-gradient-to-br from-indigo-100 via-blue-50 to-purple-100" />
                
                {/* Iridescent Sphere */}
                <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 opacity-60 blur-sm top-6 right-6" />
                
                {/* Translucent Objects */}
                <div className="absolute w-12 h-8 bg-gradient-to-br from-purple-400 to-blue-500 opacity-40 rounded-lg transform bottom-6 left-6 -rotate-12" />
                
                {/* Data Points */}
                <div className="absolute top-8 right-8 w-2 h-2 bg-gray-600 rounded-full opacity-60" />
                <div className="absolute top-16 right-16 w-1.5 h-1.5 bg-gray-600 rounded-full opacity-40" />
                <div className="absolute top-20 right-6 w-1 h-1 bg-gray-600 rounded-full opacity-50" />
              </div>

              {/* Bottom Section - Kart-info - Exact Figma layout structure */}
              <div className="w-[385px] h-[103px] bg-white rounded-b-[10px] flex flex-row justify-center items-start px-[12px] pt-[12px] pb-[20px] gap-[12px]">
                {/* Logo - image 6 - Exact Figma dimensions */}
                <div className="w-[45px] h-[45px] rounded-[8px] flex items-center justify-center flex-shrink-0">
                  <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="45" height="45" rx="8" fill="#22C55E"/>
                    <rect x="12" y="12" width="21" height="21" rx="2" fill="white"/>
                  </svg>
                </div>
                
                {/* AI Details - Ai-detay - Adjusted to prevent cutoff */}
                <div className="flex-1 min-w-0 flex flex-col items-start p-0">
                  {/* Title - Shortcut - Exact Figma typography and dimensions */}
                  <div className="w-full font-['Inter'] font-semibold text-base leading-[19px] text-[#000000] mb-1 flex items-center">
                    <span className="whitespace-nowrap">Shortcut</span>
                  </div>
                  
                  {/* Description - Adjusted width to prevent cutoff */}
                  <div className="w-full font-['Inter'] font-semibold text-base leading-[19px] tracking-[-0.01em] text-[#535961] mb-2 flex items-center">
                    <span className="whitespace-nowrap">The first superhuman Excel agent</span>
                  </div>
                  
                  {/* Categories - Frame 8 - Adjusted to prevent cutoff */}
                  <div className="w-full flex flex-row items-center p-0 gap-[3px]">
                    <span className="flex items-center">
                      <span className="font-['Inter'] font-normal text-xs leading-[15px] text-[#888E96] whitespace-nowrap">Agents</span>
                    </span>
                    <span className="w-[9px] h-[11.16px] font-['Inter'] font-normal text-[30px] leading-[10px] text-[#888E96] ml-[3px] flex-shrink-0">·</span>
                    <span className="flex items-center">
                      <span className="font-['Inter'] font-normal text-xs leading-[15px] text-[#888E96] whitespace-nowrap">Accounting</span>
                    </span>
                    <span className="w-[9px] h-[11.16px] font-['Inter'] font-normal text-[30px] leading-[10px] text-[#888E96] ml-[3px] flex-shrink-0">·</span>
                    <span className="flex items-center">
                      <span className="font-['Inter'] font-normal text-xs leading-[15px] text-[#888E96] whitespace-nowrap">Multipurpose</span>
                    </span>
                  </div>
                </div>
                
                {/* Price - Bedava - Ensured proper positioning */}
                <div className="w-[50px] h-[17px] font-['Inter'] font-semibold text-sm leading-[17px] tracking-[-0.01em] text-[#000000] flex-shrink-0 flex items-center justify-center mr-3">
                  <span className="whitespace-nowrap">Bedava</span>
                </div>
              </div>
            </div>
          </div>

          {/* AI Card 3 */}
          <div className="border border-[#E5E7EB] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] hover:shadow-lg transition-shadow w-[385px] h-[277px] flex-shrink-0">
            <div className="p-0 h-full flex flex-col">
              {/* Top Section - image 6 - Exact Figma dimensions and properties */}
              <div className="w-[385px] h-[192.24px] bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100 rounded-t-[10px] relative overflow-hidden">
                {/* Placeholder for Figma background image - different style for each card */}
                <div className="absolute inset-0 opacity-60 bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100" />
                
                {/* Iridescent Sphere */}
                <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 opacity-60 blur-sm top-8 left-8" />
                
                {/* Translucent Objects */}
                <div className="absolute w-12 h-8 bg-gradient-to-br from-purple-400 to-blue-500 opacity-40 rounded-lg transform bottom-8 right-8 rotate-6" />
                
                {/* Data Points */}
                <div className="absolute top-8 right-8 w-2 h-2 bg-gray-600 rounded-full opacity-60" />
                <div className="absolute top-16 right-16 w-1.5 h-1.5 bg-gray-600 rounded-full opacity-40" />
                <div className="absolute top-20 right-6 w-1 h-1 bg-gray-600 rounded-full opacity-50" />
              </div>

              {/* Bottom Section - Kart-info - Exact Figma layout structure */}
              <div className="w-[385px] h-[103px] bg-white rounded-b-[10px] flex flex-row justify-center items-start px-[12px] pt-[12px] pb-[20px] gap-[12px]">
                {/* Logo - image 6 - Exact Figma dimensions */}
                <div className="w-[45px] h-[45px] rounded-[8px] flex items-center justify-center flex-shrink-0">
                  <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="45" height="45" rx="8" fill="#22C55E"/>
                    <rect x="12" y="12" width="21" height="21" rx="2" fill="white"/>
                  </svg>
                </div>
                
                {/* AI Details - Ai-detay - Adjusted to prevent cutoff */}
                <div className="flex-1 min-w-0 flex flex-col items-start p-0">
                  {/* Title - Shortcut - Exact Figma typography and dimensions */}
                  <div className="w-full font-['Inter'] font-semibold text-base leading-[19px] text-[#000000] mb-1 flex items-center">
                    <span className="whitespace-nowrap">Shortcut</span>
                  </div>
                  
                  {/* Description - Adjusted width to prevent cutoff */}
                  <div className="w-full font-['Inter'] font-semibold text-base leading-[19px] tracking-[-0.01em] text-[#535961] mb-2 flex items-center">
                    <span className="whitespace-nowrap">The first superhuman Excel agent</span>
                  </div>
                  
                  {/* Categories - Frame 8 - Adjusted to prevent cutoff */}
                  <div className="w-full flex flex-row items-center p-0 gap-[3px]">
                    <span className="flex items-center">
                      <span className="font-['Inter'] font-normal text-xs leading-[15px] text-[#888E96] whitespace-nowrap">Agents</span>
                    </span>
                    <span className="w-[9px] h-[11.16px] font-['Inter'] font-normal text-[30px] leading-[10px] text-[#888E96] ml-[3px] flex-shrink-0">·</span>
                    <span className="flex items-center">
                      <span className="font-['Inter'] font-normal text-xs leading-[15px] text-[#888E96] whitespace-nowrap">Accounting</span>
                    </span>
                    <span className="w-[9px] h-[11.16px] font-['Inter'] font-normal text-[30px] leading-[10px] text-[#888E96] ml-[3px] flex-shrink-0">·</span>
                    <span className="flex items-center">
                      <span className="font-['Inter'] font-normal text-xs leading-[15px] text-[#888E96] whitespace-nowrap">Multipurpose</span>
                    </span>
                  </div>
                </div>
                
                {/* Price - Bedava - Ensured proper positioning */}
                <div className="w-[50px] h-[17px] font-['Inter'] font-semibold text-sm leading-[17px] tracking-[-0.01em] text-[#000000] flex-shrink-0 flex items-center justify-center mr-3">
                  <span className="whitespace-nowrap">Bedava</span>
                </div>
              </div>
            </div>
          </div>

          {/* AI Card 4 */}
          <div className="border border-[#E5E7EB] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] hover:shadow-lg transition-shadow w-[385px] h-[277px] flex-shrink-0">
            <div className="p-0 h-full flex flex-col">
              {/* Top Section - image 6 - Exact Figma dimensions and properties */}
              <div className="w-[385px] h-[192.24px] bg-gradient-to-br from-emerald-100 via-teal-50 to-cyan-100 rounded-t-[10px] relative overflow-hidden">
                {/* Placeholder for Figma background image - different style for each card */}
                <div className="absolute inset-0 opacity-60 bg-gradient-to-br from-emerald-100 via-teal-50 to-cyan-100" />
                
                {/* Iridescent Sphere */}
                <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 opacity-60 blur-sm top-6 left-6" />
                
                {/* Translucent Objects */}
                <div className="absolute w-12 h-8 bg-gradient-to-br from-purple-400 to-blue-500 opacity-40 rounded-lg transform bottom-4 left-4 -rotate-6" />
                
                {/* Data Points */}
                <div className="absolute top-8 right-8 w-2 h-2 bg-gray-600 rounded-full opacity-60" />
                <div className="absolute top-16 right-16 w-1.5 h-1.5 bg-gray-600 rounded-full opacity-40" />
                <div className="absolute top-20 right-6 w-1 h-1 bg-gray-600 rounded-full opacity-50" />
              </div>

              {/* Bottom Section - Kart-info - Exact Figma layout structure */}
              <div className="w-[385px] h-[103px] bg-white rounded-b-[10px] flex flex-row justify-center items-start px-[12px] pt-[12px] pb-[20px] gap-[12px]">
                {/* Logo - image 6 - Exact Figma dimensions */}
                <div className="w-[45px] h-[45px] rounded-[8px] flex items-center justify-center flex-shrink-0">
                  <svg width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="45" height="45" rx="8" fill="#22C55E"/>
                    <rect x="12" y="12" width="21" height="21" rx="2" fill="white"/>
                  </svg>
                </div>
                
                {/* AI Details - Ai-detay - Adjusted to prevent cutoff */}
                <div className="flex-1 min-w-0 flex flex-col items-start p-0">
                  {/* Title - Shortcut - Exact Figma typography and dimensions */}
                  <div className="w-full font-['Inter'] font-semibold text-base leading-[19px] text-[#000000] mb-1 flex items-center">
                    <span className="whitespace-nowrap">Shortcut</span>
                  </div>
                  
                  {/* Description - Adjusted width to prevent cutoff */}
                  <div className="w-full font-['Inter'] font-semibold text-base leading-[19px] tracking-[-0.01em] text-[#535961] mb-2 flex items-center">
                    <span className="whitespace-nowrap">The first superhuman Excel agent</span>
                  </div>
                  
                  {/* Categories - Frame 8 - Adjusted to prevent cutoff */}
                  <div className="w-full flex flex-row items-center p-0 gap-[3px]">
                    <span className="flex items-center">
                      <span className="font-['Inter'] font-normal text-xs leading-[15px] text-[#888E96] whitespace-nowrap">Agents</span>
                    </span>
                    <span className="w-[9px] h-[11.16px] font-['Inter'] font-normal text-[30px] leading-[10px] text-[#888E96] ml-[3px] flex-shrink-0">·</span>
                    <span className="flex items-center">
                      <span className="font-['Inter'] font-normal text-xs leading-[15px] text-[#888E96] whitespace-nowrap">Accounting</span>
                    </span>
                    <span className="w-[9px] h-[11.16px] font-['Inter'] font-normal text-[30px] leading-[10px] text-[#888E96] ml-[3px] flex-shrink-0">·</span>
                    <span className="flex items-center">
                      <span className="font-['Inter'] font-normal text-xs leading-[15px] text-[#888E96] whitespace-nowrap">Multipurpose</span>
                    </span>
                  </div>
                </div>
                
                {/* Price - Bedava - Ensured proper positioning */}
                <div className="w-[50px] h-[17px] font-['Inter'] font-semibold text-sm leading-[17px] tracking-[-0.01em] text-[#000000] flex-shrink-0 flex items-center justify-center mr-3">
                  <span className="whitespace-nowrap">Bedava</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
