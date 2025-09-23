'use client'

import Link from 'next/link'

export default function VideoCreationPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Header (exactly reused from main page) */}
      <div className="lg:hidden">
        <div className="bg-white border-b border-gray-200 px-5 py-4">
          <div className="flex items-center justify-between">
            <div
              className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => window.location.href = '/'}
            >
              <img src="/images/semka_logo_sinek_golgeli.png" alt="Semka Logo" className="w-8 h-8" />
              <span className="text-2xl font-semibold text-black">Semka</span>
            </div>
            <button
              onClick={() => {
                const term = prompt('Arama yapmak istediğiniz yapay zeka aracını yazın:');
                if (term && term.trim()) {
                  window.location.href = `/aramasonucu/${encodeURIComponent(term.trim())}`;
                }
              }}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <svg className="h-5 w-5 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.3-4.3"/></svg>
            </button>
          </div>
        </div>

        {/* Categories Navigation (reused) */}
        <div className="bg-white border-b border-gray-200 px-5 py-0">
          <div className="flex gap-8 overflow-x-auto">
            <button className="text-sm font-medium text-black whitespace-nowrap hover:text-[#0053E2] transition-colors h-[45px]" onClick={() => window.location.href = '/yapay-zeka-araclari/agentlar'}>Agentlar</button>
            <button className="text-sm text-gray-600 whitespace-nowrap hover:text-[#0053E2] transition-colors h-[45px]" onClick={() => window.location.href = '/yapay-zeka-araclari/otomasyon'}>Otomasyon</button>
            <button className="text-sm text-gray-600 whitespace-nowrap hover:text-[#0053E2] transition-colors h-[45px]" onClick={() => window.location.href = '/yapay-zeka-araclari/fotograf-video'}>Fotoğraf & Video</button>
            <button className="text-sm text-gray-600 whitespace-nowrap hover:text-[#0053E2] transition-colors h-[45px]" onClick={() => window.location.href = '/yapay-zeka-araclari/kurumsal'}>Kurumsal</button>
            <button className="text-sm text-gray-600 whitespace-nowrap hover:text-[#0053E2] transition-colors h-[45px]" onClick={() => window.location.href = '/yapay-zeka-araclari/altyapi'}>Altyapı</button>
            <button className="text-sm text-gray-600 whitespace-nowrap hover:text-[#0053E2] transition-colors h-[45px]" onClick={() => window.location.href = '/yapay-zeka-araclari/uretkenlik'}>Üretkenlik</button>
            <button className="text-sm text-gray-600 whitespace-nowrap hover:text-[#0053E2] transition-colors h-[45px]" onClick={() => window.location.href = '/yapay-zeka-araclari/veri'}>Veri</button>
            <button className="text-sm text-gray-600 whitespace-nowrap hover:text-[#0053E2] transition-colors h-[45px]" onClick={() => window.location.href = '/yapay-zeka-araclari/sosyal-medya'}>Sosyal Medya</button>
            <button className="text-sm text-gray-600 whitespace-nowrap hover:text-[#0053E2] transition-colors h-[45px]" onClick={() => window.location.href = '/yapay-zeka-araclari/ses'}>Ses</button>
            <button className="text-sm text-gray-600 whitespace-nowrap hover:text-[#0053E2] transition-colors h-[45px]" onClick={() => window.location.href = '/yapay-zeka-araclari/sohbet-botu'}>Sohbet Botu</button>
            <button className="text-sm text-gray-600 whitespace-nowrap hover:text-[#0053E2] transition-colors h-[45px]" onClick={() => window.location.href = '/yapay-zeka-araclari/yazilim-araclari'}>Yazılım Araçları</button>
            <button className="text-sm text-gray-600 whitespace-nowrap hover:text-[#0053E2] transition-colors h-[45px]" onClick={() => window.location.href = '/yapay-zeka-araclari/kodsuz-yazilim'}>Kodsuz Yazılım</button>
            <button className="text-sm text-gray-600 whitespace-nowrap hover:text-[#0053E2] transition-colors h-[45px]" onClick={() => window.location.href = '/yapay-zeka-araclari/tasarim'}>Tasarım</button>
            <button className="text-sm text-gray-600 whitespace-nowrap hover:text-[#0053E2] transition-colors h-[45px]" onClick={() => window.location.href = '/yapay-zeka-araclari/akademi'}>Akademi</button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-10 py-2">
        {/* Page Header */}
        <div className="mb-[6px] lg:flex lg:items-center lg:gap-6">
          <h1 className="text-[28px] lg:text-[32px] font-semibold text-black">Video Oluşturma</h1>
          <p className="mt-1 lg:mt-0 text-[14px] lg:text-lg text-[#535961] max-w-[276.48px] lg:max-w-none">
            Yapay Zeka Araçlarıyla Metinden Video Oluşturma Rehberi
          </p>
        </div>

        {/* Separator Line */}
        <div className="w-full h-px bg-gray-300 mb-5"></div>

        {/* Step 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
          <div>
            <h2 className="text-[28px] font-semibold text-[#0053E2] mb-5">
              1. Adım: Senaryoyu Oluşturun ve Prompt Alın
            </h2>
            <p className="text-lg text-black leading-relaxed">
              Metinden video oluşturma sürecine başlamadan önce, yapay zekanın anlayabileceği şekilde profesyonel bir komut (prompt) hazırlamak gerekir. 
              <br /><br />
              ChatGPT, Jasper ve Copy.ai gibi araçlardan birine giriş yapın ve aklınızdaki fikir veya senaryoyu detaylı bir şekilde açıklayarak İngilizce, profesyonel bir prompt oluşturmasını isteyin. Üretilen metni kopyalayarak bir sonraki adıma geçin.
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold text-black mb-5">
              Kullanabileceğin Yapay Zekalar
            </h3>
            <div className="flex gap-6">
              {/* ChatGPT */}
              <div className="flex flex-col items-center">
                <a href="https://openai.com/" target="_blank" rel="noopener noreferrer" className="block">
                  <div className="w-[96px] h-[128px] border border-[#0053E2] rounded-lg p-2.5 flex flex-col cursor-pointer hover:shadow-lg transition-shadow">
                    <div className="w-full h-16 bg-white rounded-[10px] flex items-center justify-center mb-2">
                      <img src="/images/chatgpt-logo.png" alt="ChatGPT" className="w-16 h-16 object-contain" />
                    </div>
                    <div className="w-full h-[1px] bg-black mb-2"></div>
                    <span className="text-sm font-semibold text-black text-center mt-auto">Chat GPT</span>
                  </div>
                </a>
              </div>
              
              {/* Jasper */}
              <div className="flex flex-col items-center">
                <a href="https://www.jasper.ai/" target="_blank" rel="noopener noreferrer" className="block">
                  <div className="w-[96px] h-[128px] border border-[#0053E2] rounded-lg p-2.5 flex flex-col cursor-pointer hover:shadow-lg transition-shadow">
                    <div className="w-full h-16 bg-white rounded-[10px] flex items-center justify-center mb-2">
                      <img src="/images/pictory-logo-12f035.png" alt="Jasper" className="w-16 h-16 object-contain" />
                    </div>
                    <div className="w-full h-[1px] bg-black mb-2"></div>
                    <span className="text-sm font-semibold text-black text-center mt-auto">Jasper</span>
                  </div>
                </a>
              </div>
              
              {/* Copy AI */}
              <div className="flex flex-col items-center">
                <a href="https://www.copy.ai/" target="_blank" rel="noopener noreferrer" className="block">
                  <div className="w-[96px] h-[128px] border border-[#0053E2] rounded-lg p-2.5 flex flex-col cursor-pointer hover:shadow-lg transition-shadow">
                    <div className="w-full h-16 bg-white rounded-[10px] flex items-center justify-center mb-2">
                      <img src="/images/copyai-logo.png" alt="Copy AI" className="w-16 h-16 object-contain" />
                    </div>
                    <div className="w-full h-[1px] bg-black mb-2"></div>
                    <span className="text-sm font-semibold text-black text-center mt-auto">Copy AI</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="w-full h-px bg-gray-300 mb-5"></div>

        {/* Step 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
          <div>
            <h2 className="text-[28px] font-semibold text-[#0053E2] mb-5">
              2. Adım: Metni Videoya Dönüştürün
            </h2>
            <p className="text-lg text-black leading-relaxed">
              Veed.io, Pictory, Descript gibi araçlardan birine giriş yaptıktan sonra oluşturduğunuz promptu ilgili alana yapıştırın. Araç, verdiğiniz metni otomatik olarak bir video taslağına dönüştürecektir.
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold text-black mb-5">
              Kullanabileceğin Yapay Zekalar
            </h3>
            <div className="flex gap-6">
              {/* Veed.io */}
              <div className="flex flex-col items-center">
                <a href="https://www.veed.io/" target="_blank" rel="noopener noreferrer" className="block">
                  <div className="w-[96px] h-[128px] border border-[#0053E2] rounded-lg p-2.5 flex flex-col cursor-pointer hover:shadow-lg transition-shadow">
                    <div className="w-full h-16 bg-white rounded-[10px] flex items-center justify-center mb-2">
                      <img src="/images/veed-logo.png" alt="Veed.io" className="w-16 h-16 object-contain" />
                    </div>
                    <div className="w-full h-[1px] bg-black mb-2"></div>
                    <span className="text-sm font-semibold text-black text-center mt-auto">Veed.io</span>
                  </div>
                </a>
              </div>
              
              {/* Pictory */}
              <div className="flex flex-col items-center">
                <a href="https://pictory.ai/" target="_blank" rel="noopener noreferrer" className="block">
                  <div className="w-[96px] h-[128px] border border-[#0053E2] rounded-lg p-2.5 flex flex-col cursor-pointer hover:shadow-lg transition-shadow">
                    <div className="w-full h-16 bg-white rounded-[10px] flex items-center justify-center mb-2">
                      <img src="/images/pictory-logo-12f035.png" alt="Pictory" className="w-16 h-16 object-contain" />
                    </div>
                    <div className="w-full h-[1px] bg-black mb-2"></div>
                    <span className="text-sm font-semibold text-black text-center mt-auto">Pictory</span>
                  </div>
                </a>
              </div>
              
              {/* Descript */}
              <div className="flex flex-col items-center">
                <a href="https://www.descript.com/" target="_blank" rel="noopener noreferrer" className="block">
                  <div className="w-[96px] h-[128px] border border-[#0053E2] rounded-lg p-2.5 flex flex-col cursor-pointer hover:shadow-lg transition-shadow">
                    <div className="w-full h-16 bg-white rounded-[10px] flex items-center justify-center mb-2">
                      <img src="/images/descript-logo.png" alt="Descript" className="w-16 h-16 object-contain" />
                    </div>
                    <div className="w-full h-[1px] bg-black mb-2"></div>
                    <span className="text-sm font-semibold text-black text-center mt-auto">Descript</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="w-full h-px bg-gray-300 mb-5"></div>

        {/* Step 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-5">
          <div>
            <h2 className="text-[28px] font-semibold text-[#0053E2] mb-5">
              3. Adım: Videoyu Düzenleyin
            </h2>
            <p className="text-lg text-black leading-relaxed">
              Videonuz oluştuktan sonra, yine Veed.io, Pictory veya Descript üzerinden düzenlemeler yapabilirsiniz. Sahne geçişleri, görseller, altyazılar ve müzik ekleyerek içeriğinizi zenginleştirebilirsiniz.
              <br /><br />
              İsteğe bağlı olarak, videoyu dışa aktararak CapCut gibi video düzenleme platformlarında daha gelişmiş düzenlemeler yapmanız da mümkün.
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold text-black mb-5">
              Kullanabileceğin Yapay Zekalar
            </h3>
            <div className="flex justify-center">
              {/* CapCut */}
              <div className="flex flex-col items-center">
                <a href="https://www.capcut.com/" target="_blank" rel="noopener noreferrer" className="block">
                  <div className="w-[96px] h-[128px] border border-[#0053E2] rounded-lg p-2.5 flex flex-col cursor-pointer hover:shadow-lg transition-shadow">
                    <div className="w-full h-16 bg-white rounded-[10px] flex items-center justify-center mb-2">
                      <img src="/images/capcut-logo.png" alt="CapCut" className="w-16 h-16 object-contain" />
                    </div>
                    <div className="w-full h-[1px] bg-black mb-2"></div>
                    <span className="text-sm font-semibold text-black text-center mt-auto">Cap Cut</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
