'use client'

import Link from 'next/link'

export default function SeslendirmePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Mobile Header (same as main page) */}
      <div className="lg:hidden">
        {/* Main Header */}
        <div className="bg-white border-b border-gray-200 px-5 py-4">
          <div className="flex items-center justify-between">
            <div
              className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => (window.location.href = '/')}
            >
              <img src="/images/semka_logo_sinek_golgeli.png" alt="Semka Logo" className="w-8 h-8" />
              <span className="text-2xl font-semibold text-black">Semka</span>
            </div>
            <button
              onClick={() => {
                const term = prompt('Arama yapmak istediğiniz yapay zeka aracını yazın:')
                if (term && term.trim()) {
                  window.location.href = `/aramasonucu/${encodeURIComponent(term.trim())}`
                }
              }}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <svg className="h-5 w-5 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.3-4.3"/></svg>
            </button>
          </div>
        </div>

        {/* Categories Navigation */}
        <div className="bg-white border-b border-gray-200 px-5 py-0">
          <div className="flex gap-8 overflow-x-auto">
            <button className="text-sm font-medium text-black whitespace-nowrap hover:text-[#0053E2] transition-colors h-[45px]" onClick={() => (window.location.href = '/yapay-zeka-araclari/agentlar')}>Agentlar</button>
            <button className="text-sm text-gray-600 whitespace-nowrap hover:text-[#0053E2] transition-colors h-[45px]" onClick={() => (window.location.href = '/yapay-zeka-araclari/otomasyon')}>Otomasyon</button>
            <button className="text-sm text-gray-600 whitespace-nowrap hover:text-[#0053E2] transition-colors h-[45px]" onClick={() => (window.location.href = '/yapay-zeka-araclari/fotograf-video')}>Fotoğraf & Video</button>
            <button className="text-sm text-gray-600 whitespace-nowrap hover:text-[#0053E2] transition-colors h-[45px]" onClick={() => (window.location.href = '/yapay-zeka-araclari/kurumsal')}>Kurumsal</button>
            <button className="text-sm text-gray-600 whitespace-nowrap hover:text-[#0053E2] transition-colors h-[45px]" onClick={() => (window.location.href = '/yapay-zeka-araclari/altyapi')}>Altyapı</button>
            <button className="text-sm text-gray-600 whitespace-nowrap hover:text-[#0053E2] transition-colors h-[45px]" onClick={() => (window.location.href = '/yapay-zeka-araclari/uretkenlik')}>Üretkenlik</button>
            <button className="text-sm text-gray-600 whitespace-nowrap hover:text-[#0053E2] transition-colors h-[45px]" onClick={() => (window.location.href = '/yapay-zeka-araclari/veri')}>Veri</button>
            <button className="text-sm text-gray-600 whitespace-nowrap hover:text-[#0053E2] transition-colors h-[45px]" onClick={() => (window.location.href = '/yapay-zeka-araclari/sosyal-medya')}>Sosyal Medya</button>
            <button className="text-sm text-gray-600 whitespace-nowrap hover:text-[#0053E2] transition-colors h-[45px]" onClick={() => (window.location.href = '/yapay-zeka-araclari/ses')}>Ses</button>
            <button className="text-sm text-gray-600 whitespace-nowrap hover:text-[#0053E2] transition-colors h-[45px]" onClick={() => (window.location.href = '/yapay-zeka-araclari/sohbet-botu')}>Sohbet Botu</button>
            <button className="text-sm text-gray-600 whitespace-nowrap hover:text-[#0053E2] transition-colors h-[45px]" onClick={() => (window.location.href = '/yapay-zeka-araclari/yazilim-araclari')}>Yazılım Araçları</button>
            <button className="text-sm text-gray-600 whitespace-nowrap hover:text-[#0053E2] transition-colors h-[45px]" onClick={() => (window.location.href = '/yapay-zeka-araclari/kodsuz-yazilim')}>Kodsuz Yazılım</button>
            <button className="text-sm text-gray-600 whitespace-nowrap hover:text-[#0053E2] transition-colors h-[45px]" onClick={() => (window.location.href = '/yapay-zeka-araclari/tasarim')}>Tasarım</button>
            <button className="text-sm text-gray-600 whitespace-nowrap hover:text-[#0053E2] transition-colors h-[45px]" onClick={() => (window.location.href = '/yapay-zeka-araclari/akademi')}>Akademi</button>
          </div>
        </div>
      </div>

      {/* Mobile Content */}
      <div className="lg:hidden">
        {/* Main Content */}
        <div className="container mx-auto px-5 py-2">
          {/* Page Header */}
          <div className="mb-[6px]">
            <h1 className="text-[28px] font-semibold text-black">Seslendirme</h1>
            <p className="mt-1 text-[14px] text-[#535961]">
              Yapay Zeka Araçlarıyla Metinden Seslendirme Rehberi
            </p>
          </div>

          {/* Separator Line */}
          <div className="w-full h-px bg-gray-300 mb-5"></div>

          {/* Introduction Section */}
          <section className="mb-5">
            <h2 className="text-[28px] font-semibold text-[#0053E2] mb-5">
              Giriş: Yapay Zeka ile Seslendirme ve Dublaj
            </h2>
            <p className="text-lg text-black leading-relaxed px-5 mb-5">
              Yapay zeka, hayatımızın her alanında olduğu gibi ses üretimi konusunda da içerik üreticilerden kurumsal şirketlere kadar çok geniş bir alanda kullanılıyor. Doğru yapay zeka araçları seçildiğinde ister YouTube videoları için seslendirme, ister eğitim videolarında çok dilli dublaj, ister müşteri hizmetlerinde gerçek zamanlı sesli asistanlar oluşturmak mümkün.
            </p>
            <p className="text-lg text-black leading-relaxed px-5">
              Yazının devamında, 3 farklı kategoriye kullanıcı yorumlarına dayanan popüler kullanım senaryoları ve bu senaryolara uygun yapay zeka araçlarını bulabilirsiniz.
            </p>
          </section>

          {/* Separator Line */}
          <div className="w-full h-px bg-gray-300 mb-5"></div>

          {/* Content Creation & Social Media Section */}
          <section className="mb-5">
            <h2 className="text-[28px] font-semibold text-[#0053E2] mb-5">
              1. İçerik Üreticiler & Sosyal Medya Kullanıcıları
            </h2>

            {/* Eleven Labs */}
            <div className="mb-5">
              <h3 className="text-2xl font-semibold text-[#0053E2] mb-4">Eleven Labs</h3>
              <p className="text-lg text-black mb-3 px-5">
                Eleven Labs, seslendirmek istediğiniz metni ses dosyasına dönüştüren, ayrıca kendi sesinizi klonlayarak vekar teknolojisi seslendirme yapmanın projelerinizde kullanmanıza imkan sağlayan bir araçtır.
              </p>
              {/* Tool Card */}
              <div className="mb-4 px-5 flex justify-center">
                <a href="https://elevenlabs.io/?utm_source=semka.ai&utm_medium=semka.ai&utm_campaign=semka.ai" target="_blank" rel="noopener noreferrer" className="inline-block">
                  <div className="w-[88px] h-[118px] border border-[#0053E2] rounded-lg p-2 flex flex-col hover:shadow-lg transition-shadow">
                    <div className="w-full h-16 bg-white rounded-[10px] flex items-center justify-center mb-2">
                      <img src="/images/elevenlabs.png" alt="ElevenLabs" className="w-14 h-14 object-contain" />
                    </div>
                    <div className="w-full h-[1px] bg-black mb-2"></div>
                    <span className="text-sm font-semibold text-black text-center mt-auto">ElevenLabs</span>
                  </div>
                </a>
              </div>
              <p className="text-lg text-black mb-3 px-5">
                <strong>Kullanıcı Yorumu:</strong> Birçok kullanıcıdan "doğallığına nisan edilecek ayırt edilemez" yorumu alıyor. Özellikle YouTube ve shorts videolarında kullanıcılar tarafından tercih ediliyor.
              </p>
              <p className="text-lg text-black mb-3 px-5">
                <strong>Öne Çıkan Kullanım Alanları:</strong>
              </p>
              <ul className="list-disc ml-8 mb-3 text-lg text-black space-y-2 px-5">
                <li>Yazılı ses çevirme</li>
                <li>Ses yazıya çevirme</li>
                <li>Sesli farklı dillere çevirme</li>
                <li>Ses klonlama</li>
              </ul>
            </div>

            {/* Play.ht */}
            <div className="mb-5">
              <h3 className="text-2xl font-semibold text-[#0053E2] mb-4">Play.ht</h3>
              <p className="text-lg text-black mb-3 px-5">
                Play.ht, seslendirme alanında diğer yapay zeka araçlarına kıyasla duygusal aktarımı güçlü seslendirmeler sunar, konuşma hızı/tonu ayarlanabilir.
              </p>
              {/* Tool Card */}
              <div className="mb-4 px-5 flex justify-center">
                <a href="https://play.ht/?utm_source=semka.ai&utm_medium=semka.ai&utm_campaign=semka.ai" target="_blank" rel="noopener noreferrer" className="inline-block">
                  <div className="w-[88px] h-[118px] border border-[#0053E2] rounded-lg p-2 flex flex-col hover:shadow-lg transition-shadow">
                    <div className="w-full h-16 bg-white rounded-[10px] flex items-center justify-center mb-2">
                      <img src="/images/playht.svg" alt="Play.HT" className="w-14 h-14 object-contain" />
                    </div>
                    <div className="w-full h-[1px] bg-black mb-2"></div>
                    <span className="text-sm font-semibold text-black text-center mt-auto">Play.HT</span>
                  </div>
                </a>
              </div>
              <p className="text-lg text-black mb-3 px-5">
                <strong>Kullanıcı Yorumu:</strong> Kullanıcılar, ödev veya hikâye seslendirilmelerinde daha duygusal bir ton için Play.ht'yi tercih ettiklerini belirtiyorlar.
              </p>
              <p className="text-lg text-black mb-3 px-5">
                <strong>Öne Çıkan Kullanım Alanları:</strong>
              </p>
              <ul className="list-disc ml-8 mb-3 text-lg text-black space-y-2 px-5">
                <li>Eğitim içeriklerine doğal anlatıcı ses ekleme</li>
                <li>Blogları veya yazılı içerikleri sesli hale getirerek erişilebilirliği artırma</li>
                <li>Yazılı ses çevirme</li>
              </ul>
            </div>

            {/* Captions */}
            <div className="mb-5">
              <h3 className="text-2xl font-semibold text-[#0053E2] mb-4">Captions</h3>
              <p className="text-lg text-black mb-3 px-5">
                Captions, video seslendirmelerini başka dillere çevirme, videoya altyazı ekleme gibi özelliklerle kısa sosyal medya içerikleri üretmende sablayacak bir yapay zeka aracıdır.
              </p>
              {/* Tool Card */}
              <div className="mb-4 px-5 flex justify-center">
                <a href="https://www.captions.ai?utm_source=semka.ai&utm_medium=semka.ai&utm_campaign=semka.ai" target="_blank" rel="noopener noreferrer" className="inline-block">
                  <div className="w-[88px] h-[118px] border border-[#0053E2] rounded-lg p-2 flex flex-col hover:shadow-lg transition-shadow">
                    <div className="w-full h-16 bg-white rounded-[10px] flex items-center justify-center mb-2">
                      <img src="/images/captions.png" alt="Captions" className="w-14 h-14 object-contain" />
                    </div>
                    <div className="w-full h-[1px] bg-black mb-2"></div>
                    <span className="text-sm font-semibold text-black text-center mt-auto">Captions</span>
                  </div>
                </a>
              </div>
              <p className="text-lg text-black mb-3 px-5">
                <strong>Kullanıcı Yorumu:</strong> Youtube için içerik üreten kullanıcılar, özellikle youtube shorts için hazırladıkları içerikleri için hızlı ve pratik olduğunu ama uzun projelerle ilmelerini hissettiriklerini belirtiyorlar.
              </p>
              <p className="text-lg text-black mb-3 px-5">
                <strong>Öne Çıkan Kullanım Alanları:</strong>
              </p>
              <ul className="list-disc ml-8 mb-3 text-lg text-black space-y-2 px-5">
                <li>Youtube Shorts video içeriklerine otomatik altyazı ekleme</li>
                <li>Sosyal medya içeriklerini farklı dillere çevirilerden kurtulma</li>
                <li>Sesli anlatım ve içeren kısa eğitim veya tanıtım videoları hazırlama</li>
              </ul>
            </div>

            {/* Kits AI */}
            <div className="mb-5">
              <h3 className="text-2xl font-semibold text-[#0053E2] mb-4">Kits AI</h3>
              <p className="text-lg text-black mb-3 px-5">
                Kits AI, vokal klonlama ve ses değiştirme odaklı bir yapay zeka aracıdır.
              </p>
              {/* Tool Card */}
              <div className="mb-4 px-5 flex justify-center">
                <a href="https://kits.ai?utm_source=semka.ai&utm_medium=semka.ai&utm_campaign=semka.ai" target="_blank" rel="noopener noreferrer" className="inline-block">
                  <div className="w-[88px] h-[118px] border border-[#0053E2] rounded-lg p-2 flex flex-col hover:shadow-lg transition-shadow">
                    <div className="w-full h-16 bg-white rounded-[10px] flex items-center justify-center mb-2">
                      <img src="/images/kitsai.jpg" alt="Kits AI" className="w-14 h-14 object-contain" />
                    </div>
                    <div className="w-full h-[1px] bg-black mb-2"></div>
                    <span className="text-sm font-semibold text-black text-center mt-auto">Kits AI</span>
                  </div>
                </a>
              </div>
              <p className="text-lg text-black mb-3 px-5">
                <strong>Kullanıcı Yorumu:</strong> Müzisyenler temel ve yardımcı 25-30 dakikalık eğitim kaydıyla etkili sonuç alabildiğini paylaşıyor.
              </p>
              <p className="text-lg text-black mb-3 px-5">
                <strong>Öne Çıkan Kullanım Alanları:</strong>
              </p>
              <ul className="list-disc ml-8 mb-3 text-lg text-black space-y-2 px-5">
                <li>Ses değiştirme</li>
                <li>Ses klonlama</li>
                <li>Ses filmlama</li>
                <li>Ses efektleri ekleme</li>
              </ul>
            </div>
          </section>

          {/* Separator Line */}
          <div className="w-full h-px bg-gray-300 mb-5"></div>

          {/* Corporate & Professional Section */}
          <section className="mb-5">
            <h2 className="text-[28px] font-semibold text-[#0053E2] mb-5">
              2. Kurumsal & Profesyonel Kullanımlar
            </h2>

            {/* Resemble AI */}
            <div className="mb-5">
              <h3 className="text-2xl font-semibold text-[#0053E2] mb-4">Resemble AI</h3>
              <p className="text-lg text-black mb-3 px-5">
                Resemble AI, güvenli ses klonlama, sahte ses tespiti ve profesyonel seslendirme gibi özelliklerle kurumsal çözümler sunuyor.
              </p>
              {/* Tool Card */}
              <div className="mb-4 px-5 flex justify-center">
                <a href="https://www.resemble.ai/?utm_source=semka.ai&utm_medium=semka.ai&utm_campaign=semka.ai" target="_blank" rel="noopener noreferrer" className="inline-block">
                  <div className="w-[88px] h-[118px] border border-[#0053E2] rounded-lg p-2 flex flex-col hover:shadow-lg transition-shadow">
                    <div className="w-full h-16 bg-white rounded-[10px] flex items-center justify-center mb-2">
                      <img src="/images/resemble.png" alt="Resemble AI" className="w-14 h-14 object-contain" />
                    </div>
                    <div className="w-full h-[1px] bg-black mb-2"></div>
                    <span className="text-sm font-semibold text-black text-center mt-auto">Resemble</span>
                  </div>
                </a>
              </div>
              <p className="text-lg text-black mb-3 px-5">
                <strong>Kullanıcı Yorumu:</strong> Medya şirketleri, güvenlik ve telif hassasiyetinde Resemble AI'yı "en güvenilir özüm" diye değerlendiriyor.
              </p>
              <p className="text-lg text-black mb-3 px-5">
                <strong>Öne Çıkan Kullanım Alanları:</strong>
              </p>
              <ul className="list-disc ml-8 mb-3 text-lg text-black space-y-2 px-5">
                <li><strong>Reklam Ajansları:</strong> Marka sesi oluşturma ve aynı sesle çok farklı dilde kampanyalar oluşturmak için tercih edilir.</li>
                <li><strong>Sesli Asistanlar ve Chatbotlar:</strong> Kurumsal müşteri hizmetleri için gerçekçi, güvenilir sesli çeviri sistemleri kurmanıza yardımcı olur.</li>
                <li><strong>Dolandırıcılık Önlemi:</strong> Sahte ses tespiti teknolojisiyle deepfake riskine karşı güvenlik önlemi alınmasına sağlar.</li>
                <li><strong>Kapsamlıcı Teknoloji Çözümleri:</strong> Görme engelli bireyler için sesli yönlendirme sistemlerinde kullanılabilir.</li>
              </ul>
            </div>

            {/* Cartesia */}
            <div className="mb-5">
              <h3 className="text-2xl font-semibold text-[#0053E2] mb-4">Cartesia</h3>
              <p className="text-lg text-black mb-3 px-5">
                Cartesia, 3 saniyede çok kısa bir ses parçası kullanarak bile sesini klonlayabir. Aynı zamanda gerçek zamanlı sesli sohbetler için optimizasyonla geliştirilen bir konuşma teknolojisini sağlamanıza yardımcı olabilecek bir yapay zeka aracıdır.
              </p>
              {/* Tool Card */}
              <div className="mb-4 px-5 flex justify-center">
                <a href="https://cartesia.ai?utm_source=semka.ai&utm_medium=semka.ai&utm_campaign=semka.ai" target="_blank" rel="noopener noreferrer" className="inline-block">
                  <div className="w-[88px] h-[118px] border border-[#0053E2] rounded-lg p-2 flex flex-col hover:shadow-lg transition-shadow">
                    <div className="w-full h-16 bg-white rounded-[10px] flex items-center justify-center mb-2">
                      <img src="/images/cartesia.jpg" alt="Cartesia" className="w-14 h-14 object-contain" />
                    </div>
                    <div className="w-full h-[1px] bg-black mb-2"></div>
                    <span className="text-sm font-semibold text-black text-center mt-auto">Cartesia</span>
                  </div>
                </a>
              </div>
              <p className="text-lg text-black mb-3 px-5">
                <strong>Kullanıcı Yorumu:</strong> Canlı müşteri hizmetleri ve yapay zeka botlarıyla beraber kullanılabiliyor. İngilizce de güçlü, diğer birçok dilde var gelişime açık bir yapay zeka aracı.
              </p>
              <p className="text-lg text-black mb-3 px-5">
                <strong>Öne Çıkan Kullanım Alanları:</strong>
              </p>
              <ul className="list-disc ml-8 mb-3 text-lg text-black space-y-2 px-5">
                <li><strong>Canlı Müşteri Hizmetleri:</strong> Sohbet Botlarına gerçekçe çok yakın bir canlı konuşma özelliği sağlanabilir.</li>
                <li><strong>Dil Teknolojileri Geliştirme:</strong> Farklı dillerde seslendirme imkanına açık altyapısıyla sesli çeviri, alıcam alışım uygulamalar geliştirebilir.</li>
                <li><strong>Kapsamlıcı Teknoloji Çözümleri:</strong> Görme engelli bireyler için sesli yönlendirme sistemlerinde kullanılabilir.</li>
              </ul>
            </div>
          </section>

          {/* Separator Line */}
          <div className="w-full h-px bg-gray-300 mb-5"></div>

          {/* Conclusion Section */}
          <section className="mb-16">
            <p className="text-lg text-black leading-relaxed px-5">
              Özetle, ister sosyal medya içerik üreticisi olun, ister dijital çağında eğitim içerikleri ya da kurumsal müşteri hizmetleri yönetin; bu araçlar seslendirme işlemlerinizi çok daha hızlı, verimli ve profesyonel hale getirebilir. Ses alanında naha fazla yapay zeka aracı incelemek istersen Ses kategorimize göz atabilirsiniz.
            </p>
          </section>
        </div>
      </div>

      {/* Desktop Content */}
      <div className="hidden lg:block">
        {/* Main Content */}
        <div className="container mx-auto px-10 py-2">
          {/* Page Header */}
          <div className="flex items-center gap-8 mb-[6px]">
            <h1 className="text-[32px] font-bold text-black">
              Seslendirme
            </h1>
            <p className="text-lg text-gray-600 max-w-md whitespace-nowrap">
              İstediğin metni yapay zeka ile seslendir
            </p>
          </div>

          {/* Separator Line */}
          <div className="w-full h-px bg-gray-300 mb-12"></div>

          {/* Main Content Layout */}
          <div className="flex relative">
            {/* Left Column - Main Content */}
            <div className="flex-1 max-w-[850px] space-y-8">
              {/* Introduction Section */}
              <section>
                <h2 className="text-[28px] font-semibold text-[#0053E2] mb-6">
                  Giriş: Yapay Zeka ile Seslendirme ve Dublaj
                </h2>
                <p className="text-lg text-black leading-relaxed mb-6">
                  Yapay zeka, hayatımızın her alanında olduğu gibi ses üretimi konusunda da içerik üreticilerden kurumsal şirketlere kadar çok geniş bir alanda kullanılıyor. Doğru yapay zeka araçları seçildiğinde ister YouTube videoları için seslendirme, ister eğitim videolarında çok dilli dublaj, ister müşteri hizmetlerinde gerçek zamanlı sesli asistanlar oluşturmak mümkün.
                </p>
                <p className="text-lg text-black leading-relaxed mb-6">
                  Yazının devamında, 3 farklı kategoriye kullanıcı yorumlarına dayanan popüler kullanım senaryoları ve bu senaryolara uygun yapay zeka araçlarını bulabilirsiniz.
                </p>
              </section>

              {/* Content Creation & Social Media Section */}
              <section>
                <h2 className="text-[28px] font-semibold text-[#0053E2] mb-6">
                  1. İçerik Üreticiler & Sosyal Medya Kullanıcıları
                </h2>

                {/* Eleven Labs */}
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-[#0053E2] mb-4">Eleven Labs</h3>
                  <p className="text-lg text-black mb-3">
                    Eleven Labs, seslendirmek istediğiniz metni ses dosyasına dönüştüren, ayrıca kendi sesinizi klonlayarak vekar teknolojisi seslendirme yapmanın projelerinizde kullanmanıza imkan sağlayan bir araçtır.
                  </p>
                  <p className="text-lg text-black mb-3">
                    <strong>Kullanıcı Yorumu:</strong> Birçok kullanıcıdan "doğallığına nisan edilecek ayırt edilemez" yorumu alıyor. Özellikle YouTube ve shorts videolarında kullanıcılar tarafından tercih ediliyor.
                  </p>
                  <p className="text-lg text-black mb-6">
                    <strong>Öne Çıkan Kullanım Alanları:</strong>
                  </p>
                  <ul className="list-disc ml-6 mb-6 text-lg text-black space-y-2">
                    <li>Yazılı ses çevirme</li>
                    <li>Ses yazıya çevirme</li>
                    <li>Sesli farklı dillere çevirme</li>
                    <li>Ses klonlama</li>
                  </ul>
                </div>

                {/* Full-width Divider */}
                <div className="w-[calc(100vw-75px)] h-px bg-[#D9D9D9] mb-8 -ml-10"></div>

                {/* Play.ht */}
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-[#0053E2] mb-4">Play.ht</h3>
                  <p className="text-lg text-black mb-3">
                    Play.ht, seslendirme alanında diğer yapay zeka araçlarına kıyasla duygusal aktarımı güçlü seslendirmeler sunar, konuşma hızı/tonu ayarlanabilir.
                  </p>
                  <p className="text-lg text-black mb-3">
                    <strong>Kullanıcı Yorumu:</strong> Kullanıcılar, ödev veya hikâye seslendirilmelerinde daha duygusal bir ton için Play.ht'yi tercih ettiklerini belirtiyorlar.
                  </p>
                  <p className="text-lg text-black mb-6">
                    <strong>Öne Çıkan Kullanım Alanları:</strong>
                  </p>
                  <ul className="list-disc ml-6 mb-6 text-lg text-black space-y-2">
                    <li>Eğitim içeriklerine doğal anlatıcı ses ekleme</li>
                    <li>Blogları veya yazılı içerikleri sesli hale getirerek erişilebilirliği artırma</li>
                    <li>Yazılı ses çevirme</li>
                  </ul>
                </div>

                {/* Full-width Divider */}
                <div className="w-[calc(100vw-75px)] h-px bg-[#D9D9D9] mb-8 -ml-10"></div>

                {/* Captions */}
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-[#0053E2] mb-4">Captions</h3>
                  <p className="text-lg text-black mb-3">
                    Captions, video seslendirmelerini başka dillere çevirme, videoya altyazı ekleme gibi özelliklerle kısa sosyal medya içerikleri üretmende sablayacak bir yapay zeka aracıdır.
                  </p>
                  <p className="text-lg text-black mb-3">
                    <strong>Kullanıcı Yorumu:</strong> Youtube için içerik üreten kullanıcılar, özellikle youtube shorts için hazırladıkları içerikleri için hızlı ve pratik olduğunu ama uzun projelerle ilmelerini hissettiriklerini belirtiyorlar.
                  </p>
                  <p className="text-lg text-black mb-6">
                    <strong>Öne Çıkan Kullanım Alanları:</strong>
                  </p>
                  <ul className="list-disc ml-6 mb-6 text-lg text-black space-y-2">
                    <li>Youtube Shorts video içeriklerine otomatik altyazı ekleme</li>
                    <li>Sosyal medya içeriklerini farklı dillere çevirilerden kurtulma</li>
                    <li>Sesli anlatım ve içeren kısa eğitim veya tanıtım videoları hazırlama</li>
                  </ul>
                </div>

                {/* Full-width Divider */}
                <div className="w-[calc(100vw-75px)] h-px bg-[#D9D9D9] mb-8 -ml-10"></div>

                {/* Kits AI */}
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-[#0053E2] mb-4">Kits AI</h3>
                  <p className="text-lg text-black mb-3">
                    Kits AI, vokal klonlama ve ses değiştirme odaklı bir yapay zeka aracıdır.
                  </p>
                  <p className="text-lg text-black mb-3">
                    <strong>Kullanıcı Yorumu:</strong> Müzisyenler temel ve yardımcı 25-30 dakikalık eğitim kaydıyla etkili sonuç alabildiğini paylaşıyor.
                  </p>
                  <p className="text-lg text-black mb-6">
                    <strong>Öne Çıkan Kullanım Alanları:</strong>
                  </p>
                  <ul className="list-disc ml-6 mb-6 text-lg text-black space-y-2">
                    <li>Ses değiştirme</li>
                    <li>Ses klonlama</li>
                    <li>Ses filmlama</li>
                    <li>Ses efektleri ekleme</li>
                  </ul>
                </div>

                {/* Full-width Divider */}
                <div className="w-[calc(100vw-75px)] h-px bg-[#D9D9D9] mb-8 -ml-10"></div>
              </section>

              {/* Corporate & Professional Section */}
              <section>
                <h2 className="text-[28px] font-semibold text-[#0053E2] mb-6">
                  2. Kurumsal & Profesyonel Kullanımlar
                </h2>

                {/* Resemble AI */}
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-[#0053E2] mb-4">Resemble AI</h3>
                  <p className="text-lg text-black mb-3">
                    Resemble AI, güvenli ses klonlama, sahte ses tespiti ve profesyonel seslendirme gibi özelliklerle kurumsal çözümler sunuyor.
                  </p>
                  <p className="text-lg text-black mb-3">
                    <strong>Kullanıcı Yorumu:</strong> Medya şirketleri, güvenlik ve telif hassasiyetinde Resemble AI'yı "en güvenilir özüm" diye değerlendiriyor.
                  </p>
                  <p className="text-lg text-black mb-6">
                    <strong>Öne Çıkan Kullanım Alanları:</strong>
                  </p>
                  <ul className="list-disc ml-6 mb-6 text-lg text-black space-y-2">
                    <li><strong>Reklam Ajansları:</strong> Marka sesi oluşturma ve aynı sesle çok farklı dilde kampanyalar oluşturmak için tercih edilir.</li>
                    <li><strong>Sesli Asistanlar ve Chatbotlar:</strong> Kurumsal müşteri hizmetleri için gerçekçi, güvenilir sesli çeviri sistemleri kurmanıza yardımcı olur.</li>
                    <li><strong>Dolandırıcılık Önlemi:</strong> Sahte ses tespiti teknolojisiyle deepfake riskine karşı güvenlik önlemi alınmasına sağlar.</li>
                    <li><strong>Kapsamlıcı Teknoloji Çözümleri:</strong> Görme engelli bireyler için sesli yönlendirme sistemlerinde kullanılabilir.</li>
                  </ul>
                </div>

                {/* Full-width Divider */}
                <div className="w-[calc(100vw-75px)] h-px bg-[#D9D9D9] mb-8 -ml-10"></div>

                {/* Cartesia */}
                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-[#0053E2] mb-4">Cartesia</h3>
                  <p className="text-lg text-black mb-3">
                    Cartesia, 3 saniyede çok kısa bir ses parçası kullanarak bile sesini klonlayabir. Aynı zamanda gerçek zamanlı sesli sohbetler için optimizasyonla geliştirilen bir konuşma teknolojisini sağlamanıza yardımcı olabilecek bir yapay zeka aracıdır.
                  </p>
                  <p className="text-lg text-black mb-3">
                    <strong>Kullanıcı Yorumu:</strong> Canlı müşteri hizmetleri ve yapay zeka botlarıyla beraber kullanılabiliyor. İngilizce de güçlü, diğer birçok dilde var gelişime açık bir yapay zeka aracı.
                  </p>
                  <p className="text-lg text-black mb-6">
                    <strong>Öne Çıkan Kullanım Alanları:</strong>
                  </p>
                  <ul className="list-disc ml-6 mb-6 text-lg text-black space-y-2">
                    <li><strong>Canlı Müşteri Hizmetleri:</strong> Sohbet Botlarına gerçekçe çok yakın bir canlı konuşma özelliği sağlanabilir.</li>
                    <li><strong>Dil Teknolojileri Geliştirme:</strong> Farklı dillerde seslendirme imkanına açık altyapısıyla sesli çeviri, alıcam alışım uygulamalar geliştirebilir.</li>
                    <li><strong>Kapsamlıcı Teknoloji Çözümleri:</strong> Görme engelli bireyler için sesli yönlendirme sistemlerinde kullanılabilir.</li>
                  </ul>
                </div>

                {/* Full-width Divider */}
                <div className="w-[calc(100vw-75px)] h-px bg-[#D9D9D9] mb-8 -ml-10"></div>
              </section>

              {/* Conclusion Section */}
              <section>
                <p className="text-lg text-black leading-relaxed">
                  Özetle, ister sosyal medya içerik üreticisi olun, ister dijital çağında eğitim içerikleri ya da kurumsal müşteri hizmetleri yönetin; bu araçlar seslendirme işlemlerinizi çok daha hızlı, verimli ve profesyonel hale getirebilir. Ses alanında naha fazla yapay zeka aracı incelemek istersen Ses kategorimize göz atabilirsiniz.
                </p>
              </section>
            </div>

            {/* Right Column - AI Tool Cards */}
            <div className="absolute right-10 top-0">

              {/* AI Tool Card - Eleven Labs - aligned with "Eleven Labs" header */}
              <div className="absolute" style={{ top: '364px', right: '80px' }}>
                <a href="https://elevenlabs.io?utm_source=semka.ai&utm_medium=semka.ai&utm_campaign=semka.ai" target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                  <div className="border border-[#0053E2] rounded-[10px] p-3 w-[116px]">
                    <div className="w-[92px] h-[92px] bg-white rounded-[10px] flex items-center justify-center mb-2">
                      <img src="/images/elevenlabs.png" alt="Eleven Labs" className="w-16 h-16 object-contain" />
                    </div>
                    <div className="border-t border-black pt-1">
                      <h4 className="text-lg font-semibold text-center text-black">Eleven Labs</h4>
                    </div>
                  </div>
                </a>
              </div>

              {/* AI Tool Card - Play.ht - aligned with "Play.ht" header */}
              <div className="absolute" style={{ top: '829px', right: '80px' }}>
                <a href="https://play.ht?utm_source=semka.ai&utm_medium=semka.ai&utm_campaign=semka.ai" target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                  <div className="border border-[#0053E2] rounded-[10px] p-3 w-[116px]">
                    <div className="w-[92px] h-[92px] bg-white rounded-[10px] flex items-center justify-center mb-2">
                      <img src="/images/playht.svg" alt="Play.ht" className="w-16 h-16 object-contain" />
                    </div>
                    <div className="border-t border-black pt-1">
                      <h4 className="text-lg font-semibold text-center text-black">Play.ht</h4>
                    </div>
                  </div>
                </a>
              </div>

              {/* AI Tool Card - Captions - aligned with "Captions" header */}
              <div className="absolute" style={{ top: '1258px', right: '80px' }}>
                <a href="https://www.captions.ai?utm_source=semka.ai&utm_medium=semka.ai&utm_campaign=semka.ai" target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                  <div className="border border-[#0053E2] rounded-[10px] p-3 w-[116px]">
                    <div className="w-[92px] h-[92px] bg-white rounded-[10px] flex items-center justify-center mb-2">
                      <img src="/images/captions.png" alt="Captions" className="w-16 h-16 object-contain" />
                    </div>
                    <div className="border-t border-black pt-1">
                      <h4 className="text-lg font-semibold text-center text-black">Captions</h4>
                    </div>
                  </div>
                </a>
              </div>

              {/* AI Tool Card - Kits AI - aligned with "Kits AI" header */}
              <div className="absolute" style={{ top: '1630px', right: '80px' }}>
                <a href="https://kits.ai?utm_source=semka.ai&utm_medium=semka.ai&utm_campaign=semka.ai" target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                  <div className="border border-[#0053E2] rounded-[10px] p-3 w-[116px]">
                    <div className="w-[92px] h-[92px] bg-white rounded-[10px] flex items-center justify-center mb-2">
                      <img src="/images/kitsai.jpg" alt="Kits AI" className="w-16 h-16 object-contain" />
                    </div>
                    <div className="border-t border-black pt-1">
                      <h4 className="text-lg font-semibold text-center text-black">Kits AI</h4>
                    </div>
                  </div>
                </a>
              </div>

              {/* AI Tool Card - Resemble AI - aligned with "Resemble AI" header */}
              <div className="absolute" style={{ top: '2106px', right: '80px' }}>
                <a href="https://www.resemble.ai?utm_source=semka.ai&utm_medium=semka.ai&utm_campaign=semka.ai" target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                  <div className="border border-[#0053E2] rounded-[10px] p-3 w-[116px]">
                    <div className="w-[92px] h-[92px] bg-white rounded-[10px] flex items-center justify-center mb-2">
                      <img src="/images/resemble.png" alt="Resemble AI" className="w-16 h-16 object-contain" />
                    </div>
                    <div className="border-t border-black pt-1">
                      <h4 className="text-lg font-semibold text-center text-black">Resemble AI</h4>
                    </div>
                  </div>
                </a>
              </div>

              {/* AI Tool Card - Cartesia - aligned with "Cartesia" header */}
              <div className="absolute" style={{ top: '2654px', right: '80px' }}>
                <a href="https://cartesia.ai?utm_source=semka.ai&utm_medium=semka.ai&utm_campaign=semka.ai" target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                  <div className="border border-[#0053E2] rounded-[10px] p-3 w-[116px]">
                    <div className="w-[92px] h-[92px] bg-white rounded-[10px] flex items-center justify-center mb-2">
                      <img src="/images/cartesia.jpg" alt="Cartesia" className="w-16 h-16 object-contain" />
                    </div>
                    <div className="border-t border-black pt-1">
                      <h4 className="text-lg font-semibold text-center text-black">Cartesia</h4>
                    </div>
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