'use client'

import Link from 'next/link'

export default function VideoCreationPage() {
  return (
    <div className="min-h-screen bg-white">




      {/* Main Content */}
      <div className="container mx-auto px-10 py-2">
        {/* Page Header */}
        <div className="flex items-center gap-8 mb-[6px]">
          <h1 className="text-[32px] font-bold text-black">
            Video Oluşturma
          </h1>
          <p className="text-lg text-gray-600 max-w-md whitespace-nowrap">
            Yapay Zeka Araçlarıyla Metinden Video Oluşturma Rehberi
          </p>
        </div>

        {/* Separator Line */}
        <div className="w-full h-px bg-gray-300 mb-12"></div>

        {/* Step 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-[28px] font-semibold text-[#00A070] mb-6">
              1. Adım: Senaryoyu Oluşturun ve Prompt Alın
            </h2>
            <p className="text-lg text-black leading-relaxed">
              Metinden video oluşturma sürecine başlamadan önce, yapay zekanın anlayabileceği şekilde profesyonel bir komut (prompt) hazırlamak gerekir. 
              <br /><br />
              ChatGPT, Jasper ve Copy.ai gibi araçlardan birine giriş yapın ve aklınızdaki fikir veya senaryoyu detaylı bir şekilde açıklayarak İngilizce, profesyonel bir prompt oluşturmasını isteyin. Üretilen metni kopyalayarak bir sonraki adıma geçin.
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold text-black mb-8">
              Kullanabileceğin Yapay Zekalar
            </h3>
            <div className="flex gap-[72px]">
              {/* ChatGPT */}
              <div className="flex flex-col items-center">
                <div className="w-[120px] h-[160px] border border-[#00A070] rounded-lg p-3 flex flex-col">
                  <div className="w-full h-20 bg-white rounded-[10px] flex items-center justify-center mb-3">
                    <img src="/images/chatgpt-logo.png" alt="ChatGPT" className="w-16 h-16 object-contain" />
                  </div>
                  <div className="w-full h-[1px] bg-black mb-3"></div>
                  <span className="text-lg font-semibold text-black text-center mt-auto">Chat GPT</span>
                </div>
              </div>
              
              {/* Jasper */}
              <div className="flex flex-col items-center">
                <div className="w-[120px] h-[160px] border border-[#00A070] rounded-lg p-3 flex flex-col">
                  <div className="w-full h-20 bg-white rounded-[10px] flex items-center justify-center mb-3">
                    <img src="/images/pictory-logo-12f035.png" alt="Jasper" className="w-16 h-16 object-contain" />
                  </div>
                  <div className="w-full h-[1px] bg-black mb-3"></div>
                  <span className="text-lg font-semibold text-black text-center mt-auto">Jasper</span>
                </div>
              </div>
              
              {/* Copy AI */}
              <div className="flex flex-col items-center">
                <div className="w-[120px] h-[160px] border border-[#00A070] rounded-lg p-3 flex flex-col">
                  <div className="w-full h-20 bg-white rounded-[10px] flex items-center justify-center mb-3">
                    <img src="/images/copyai-logo.png" alt="Copy AI" className="w-16 h-16 object-contain" />
                  </div>
                  <div className="w-full h-[1px] bg-black mb-3"></div>
                  <span className="text-lg font-semibold text-black text-center mt-auto">Copy AI</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="w-full h-px bg-gray-300 mb-16"></div>

        {/* Step 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-[28px] font-semibold text-[#00A070] mb-6">
              2. Adım: Metni Videoya Dönüştürün
            </h2>
            <p className="text-lg text-black leading-relaxed">
              Veed.io, Pictory, Descript gibi araçlardan birine giriş yaptıktan sonra oluşturduğunuz promptu ilgili alana yapıştırın. Araç, verdiğiniz metni otomatik olarak bir video taslağına dönüştürecektir.
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold text-black mb-8">
              Kullanabileceğin Yapay Zekalar
            </h3>
            <div className="flex gap-[72px]">
              {/* Veed.io */}
              <div className="flex flex-col items-center">
                <div className="w-[120px] h-[160px] border border-[#00A070] rounded-lg p-3 flex flex-col">
                  <div className="w-full h-20 bg-white rounded-[10px] flex items-center justify-center mb-3">
                    <img src="/images/veed-logo.png" alt="Veed.io" className="w-16 h-16 object-contain" />
                  </div>
                  <div className="w-full h-[1px] bg-black mb-3"></div>
                  <span className="text-lg font-semibold text-black text-center mt-auto">Veed.io</span>
                </div>
              </div>
              
              {/* Pictory */}
              <div className="flex flex-col items-center">
                <div className="w-[120px] h-[160px] border border-[#00A070] rounded-lg p-3 flex flex-col">
                  <div className="w-full h-20 bg-white rounded-[10px] flex items-center justify-center mb-3">
                    <img src="/images/pictory-logo-12f035.png" alt="Pictory" className="w-16 h-16 object-contain" />
                  </div>
                  <div className="w-full h-[1px] bg-black mb-3"></div>
                  <span className="text-lg font-semibold text-black text-center mt-auto">Pictory</span>
                </div>
              </div>
              
              {/* Descript */}
              <div className="flex flex-col items-center">
                <div className="w-[120px] h-[160px] border border-[#00A070] rounded-lg p-3 flex flex-col">
                  <div className="w-full h-20 bg-white rounded-[10px] flex items-center justify-center mb-3">
                    <img src="/images/descript-logo.png" alt="Descript" className="w-16 h-16 object-contain" />
                  </div>
                  <div className="w-full h-[1px] bg-black mb-3"></div>
                  <span className="text-lg font-semibold text-black text-center mt-auto">Descript</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="w-full h-px bg-gray-300 mb-16"></div>

        {/* Step 3 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-[28px] font-semibold text-[#00A070] mb-6">
              3. Adım: Videoyu Düzenleyin
            </h2>
            <p className="text-lg text-black leading-relaxed">
              Videonuz oluştuktan sonra, yine Veed.io, Pictory veya Descript üzerinden düzenlemeler yapabilirsiniz. Sahne geçişleri, görseller, altyazılar ve müzik ekleyerek içeriğinizi zenginleştirebilirsiniz.
              <br /><br />
              İsteğe bağlı olarak, videoyu dışa aktararak CapCut gibi video düzenleme platformlarında daha gelişmiş düzenlemeler yapmanız da mümkün.
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold text-black mb-8">
              Kullanabileceğin Yapay Zekalar
            </h3>
            <div className="flex justify-center">
              {/* CapCut */}
              <div className="flex flex-col items-center">
                <div className="w-[120px] h-[160px] border border-[#00A070] rounded-lg p-3 flex flex-col">
                  <div className="w-full h-20 bg-white rounded-[10px] flex items-center justify-center mb-3">
                    <img src="/images/capcut-logo.png" alt="CapCut" className="w-16 h-16 object-contain" />
                  </div>
                  <div className="w-full h-[1px] bg-black mb-3"></div>
                  <span className="text-lg font-semibold text-black text-center mt-auto">Cap Cut</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
