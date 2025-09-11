'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function ImageCreationPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-8">
          <Link href="/" className="hover:text-primary">Ana Sayfa</Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/use-cases" className="hover:text-primary">Kullanım Senaryoları</Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-black font-medium">
            Görsel Oluşturma
          </span>
        </div>

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-[40px] font-bold text-black leading-tight mb-4">
            Görsel Oluşturma
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Yapay Zeka Araçlarıyla Metinden Görsel Oluşturma Rehberi
          </p>
        </div>

        {/* Step 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-[28px] font-semibold text-[#00A070] mb-6">
              Giriş: Komut (Prompt) Oluşturma Aşaması
            </h2>
            <p className="text-lg text-black leading-relaxed mb-6">
              Yapay zekayla görsel üretmeye başlamadan önce şunu bilmelisiniz: Ortaya çıkacak görsellerin kalitesi, tamamen yazacağınız komut'a (prompt) bağlıdır. Prompt ne kadar detaylı ve netse, sonuç o kadar hayal ettiğinize yakın olacaktır.
            </p>
            <p className="text-lg text-black leading-relaxed mb-6">
              Bu nedenle görsel üretim sürecine geçmeden önce, çoğu zaman ChatGPT gibi sohbet botlarından yardım almak faydalı olacaktır. Çünkü sohbet botları, hayalinizdeki görseli tarif ederken sizin doğru kelime seçimleri yapmanızı sağlar. Böylece arka plan, kamera açısı ve renk betimlemeleri gibi görselinizin daha kaliteli bir biçimde oluşmasını sağlayacak değişkenlerin kullanacağınız yapay zeka aracına en iyi şekilde aktarılmasına yardımcı olur.
            </p>
            <p className="text-lg text-black leading-relaxed">
              Kısacası: Önce sohbet botlarıyla metin taslağınızı oluşturun, sonra görsel araçlarına yönelin.
            </p>
          </div>
          
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold text-black mb-8">
              Kullanabileceğin Yapay Zekalar
            </h3>
            <div className="flex gap-[72px]">
              {/* ChatGPT */}
              <div className="flex flex-col items-center">
                <a href="https://openai.com/" target="_blank" rel="noopener noreferrer" className="block">
                  <div className="w-[120px] h-[160px] border border-[#00A070] rounded-lg p-3 flex flex-col cursor-pointer hover:shadow-lg transition-shadow">
                    <div className="w-full h-20 bg-white rounded-[10px] flex items-center justify-center mb-3">
                      <img src="/images/chatgpt-logo.png" alt="ChatGPT" className="w-16 h-16 object-contain" />
                    </div>
                    <div className="w-full h-[1px] bg-black mb-3"></div>
                    <span className="text-lg font-semibold text-black text-center mt-auto">Chat GPT</span>
                  </div>
                </a>
              </div>
              
              {/* Jasper */}
              <div className="flex flex-col items-center">
                <a href="https://www.jasper.ai/" target="_blank" rel="noopener noreferrer" className="block">
                  <div className="w-[120px] h-[160px] border border-[#00A070] rounded-lg p-3 flex flex-col cursor-pointer hover:shadow-lg transition-shadow">
                    <div className="w-full h-20 bg-white rounded-[10px] flex items-center justify-center mb-3">
                      <img src="/images/pictory-logo-12f035.png" alt="Jasper" className="w-16 h-16 object-contain" />
                    </div>
                    <div className="w-full h-[1px] bg-black mb-3"></div>
                    <span className="text-lg font-semibold text-black text-center mt-auto">Jasper</span>
                  </div>
                </a>
              </div>
              
              {/* Copy AI */}
              <div className="flex flex-col items-center">
                <a href="https://www.copy.ai/" target="_blank" rel="noopener noreferrer" className="block">
                  <div className="w-[120px] h-[160px] border border-[#00A070] rounded-lg p-3 flex flex-col cursor-pointer hover:shadow-lg transition-shadow">
                    <div className="w-full h-20 bg-white rounded-[10px] flex items-center justify-center mb-3">
                      <img src="/images/copyai-logo.png" alt="Copy AI" className="w-16 h-16 object-contain" />
                    </div>
                    <div className="w-full h-[1px] bg-black mb-3"></div>
                    <span className="text-lg font-semibold text-black text-center mt-auto">Copy AI</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Final Summary */}
        <div className="bg-gray-50 p-8 rounded-lg">
          <p className="text-lg text-black leading-relaxed">
            Özetle, doğru komutları kullanarak yapay zeka görsel üretim araçlarıyla anime sahnelerinden gerçekçi fotoğraflara, sinematik film sahnelerinden posterlere kadar her şeyi oluşturabilirsiniz. Görsel oluşturma süreçlerinde kullanabileceğiniz daha fazla yapay zeka aracını keşfetmek için Görsel&Video kategorimizi inceleyebilirsiniz.
          </p>
        </div>
      </div>
    </div>
  )
}
