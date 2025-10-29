'use client'

export default function KodYazdirPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="container mx-auto px-10 py-2">
        {/* Page Header */}
        <div className="flex items-center gap-8 mb-[6px]">
          <h1 className="text-[32px] font-bold text-black">
            Kod Yazdır
          </h1>
          <p className="text-lg text-gray-600 max-w-md whitespace-nowrap">
            Yapay zeka ile uygulama geliştir veya yazılım desteği al
          </p>
        </div>

        {/* Separator Line */}
        <div className="w-full h-px bg-gray-300 mb-12"></div>

        {/* Main Content Layout */}
        <div className="flex relative">
          {/* Left Column - Main Content */}
          <div className="flex-1 max-w-[1000px] space-y-8">
            {/* Introduction Section */}
            <section>
              <h2 className="text-[28px] font-semibold text-[#0053E2] mb-6">
                Yapay Zekayla Kod Bilmeden Web Sitesi Kurun veya Uygulama Geliştirin
              </h2>
              <p className="text-lg text-black leading-relaxed mb-6">
                Değişen dünyayla beraber kabul etmemiz gereken gerçeklerden bir tanesi de artık hayal ettiğiniz web sitesini kurmak için saatlerce kod öğrenmek, karmaşık panellerle uğraşmaya gerek kalmadı. Artık yapay zeka araçları sayesinde kod yazmak nedir bilmeyen kullanıcılar bile birkaç dakikada profesyonel görünümlü web siteleri oluşturabiliyor. İşte Semka.ai'dan erişebileceğiniz yapay zeka araçları ve sağladıkları çözümler:
              </p>
            </section>

            {/* Web Development Tools Section */}
            <section>
              {/* Lovable */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-[#0053E2] mb-4">Lovable</h3>
                <p className="text-lg text-black mb-3">
                  Lovable tek bir komutla tüm isteklerinizi yerine getirebilecek bir web sitesi üretebilir. Açılış sayfası (Landing page), küçük uygulamalar veya küçük çaplı projeler için idealdir.
                </p>
                <p className="text-lg text-black mb-3">
                  <strong>Öne Çıkan Kullanım Alanı:</strong> Startup fikirlerinin ilk örneğinin hazırlanması, kişisel blog kurulması, küçük işletme sayfalarının kurulması gibi alanlarda fark yaratıyor.
                </p>
                <p className="text-lg text-black mb-6">
                  <strong>Kullanıcı Yorumu:</strong>
                </p>
                <p className="text-lg text-black mb-6">
                  5 dakikada açılış sayfası(landing page) hazırdı. Normalde günler sürecek işi neredeyse kahve molasında bitirdim.
                </p>
              </div>

              {/* Full-width Divider */}
              <div className="w-[calc(100vw-75px)] h-px bg-[#D9D9D9] mb-8 -ml-10"></div>

              {/* v0 (Vercel) */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-[#0053E2] mb-4">v0 (Vercel)</h3>
                <p className="text-lg text-black mb-3">
                  v0 verdiğin komut'a(prompt) göre, aralarından seçebilmeniz için size üç farklı modern arayüz önerisi sunar. Şık ve mobil uyumlu siteleri anında kurmanızı sağlayan bir yapay zeka aracıdır.
                </p>
                <p className="text-lg text-black mb-3">
                  <strong>Öne Çıkan Kullanım Alanı:</strong> Tasarımlarınızı hızlıca test edip geliştirmenize ve her cihazla uyumlu çalışabilecek web sayfaları hazırlamanızı sağlar.
                </p>
                <p className="text-lg text-black mb-6">
                  <strong>Kullanıcı Yorumu:</strong>
                </p>
                <p className="text-lg text-black mb-6">
                  "Arayüz seçmek bu kadar kolay olmamıştı. Kod satırı görmeden profesyonel tasarıma sahip oldum."
                </p>
              </div>

              {/* Full-width Divider */}
              <div className="w-[calc(100vw-75px)] h-px bg-[#D9D9D9] mb-8 -ml-10"></div>

              {/* Cursor */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-[#0053E2] mb-4">Cursor</h3>
                <p className="text-lg text-black mb-3">
                  Cursor, Claude ve ChatGPT gibi sohbet botlarıyla entegre çalışan yapay zeka destekli bir kod editörüdür. Kod nedir bilmeyen bir kullanıcı bile yapay zeka araçlarına ürettirdiği komutlarla veya kendi cümleleriyle, projesinde istediği değişimi yaptırabilir.
                </p>
                <p className="text-lg text-black mb-3">
                  <strong>Öne Çıkan Kullanım Alanı:</strong> Cursor ile küçük web uygulamaları geliştirebilir, mevcut projelere yeni işlevler ekleyebilir ve kod hatalarını otomatik olarak düzeltebilirsiniz. Ayrıca yapay zeka desteği sayesinde karmaşık kodları daha anlaşılır hale getirmek, farklı programlama dillerinde örnekler üretmek ve projelerinizi çok daha hızlı tamamlamak konusunda size yardımcı olabilecek bir yapay zeka aracıdır.
                </p>
                <p className="text-lg text-black mb-6">
                  <strong>Kullanıcı Yorumu:</strong>
                </p>
                <p className="text-lg text-black mb-6">
                  "Normalde günlerce uğraşacağım özellikleri bir cümle yazarak ekledim. Kod bilmememe rağmen kendi sitemi çıkardım."
                </p>
              </div>

              {/* Full-width Divider */}
              <div className="w-[calc(100vw-75px)] h-px bg-[#D9D9D9] mb-8 -ml-10"></div>
            </section>

            {/* AI Automation Section */}
            <section>
              <h2 className="text-[28px] font-semibold text-[#0053E2] mb-6">
                AI ile İşinizi Otomatikleştirin
              </h2>
              <p className="text-lg text-black leading-relaxed mb-6">
                Bir web sitesi kurmak kadar iş akışlarını otomatikleştirmek de büyük zaman kazandırır. Otomatik çağrı merkezleri oluşturmak, e-posta gönderme veya proje yönetimi gibi tekrar eden, rutin haline gelmiş tüm işlerinizi yapay zekaya devretmek artık mümkün.
              </p>

              {/* n8n */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-[#0053E2] mb-4">n8n</h3>
                <p className="text-lg text-black mb-3">
                  n8n, kod bilmeden aklınıza gelebilecek her proje için görsel iş akışları kurmanıza izin verir. Gmail, Slack, Google Sheets gibi yüzlerce uygulamayı entegre edebilirsiniz.
                </p>
                <p className="text-lg text-black mb-3">
                  <strong>Öne Çıkan Kullanım Alanı:</strong> n8n ile Gmail'den gelen faturaları otomatik olarak Google Drive'a kaydedip özetlerini Google Sheets'e aktarabilirsiniz. Aynı zamanda sosyal medya içeriklerinizi zamanlayabilir, müşteri formlarından gelen verileri rapora dönüştürebilir ya da kişisel takviminizi otomatik güncelleyebilirsiniz. Böylece hem bireysel kullanıcılar hem de beyaz yaka çalışanlar tekrar eden işleri kolayca otomatize ederek zamandan büyük tasarruf sağlar.
                </p>
                <p className="text-lg text-black mb-6">
                  <strong>Kullanıcı Yorumu:</strong>
                </p>
                <p className="text-lg text-black mb-6">
                  "Freelance işlerimde haftada onlarca saati kurtardım. Tüm süreci sürükle-bırakla kurmak inanılmaz kolay." (Reddit)
                </p>
              </div>

              {/* Full-width Divider */}
              <div className="w-[calc(100vw-75px)] h-px bg-[#D9D9D9] mb-8 -ml-10"></div>

              {/* CrewAI */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-[#0053E2] mb-4">CrewAI</h3>
                <p className="text-lg text-black mb-3">
                  CrewAi farklı yapay zekâ ajanlarını tek bir görev için organize eder. Araştırmadan yazıma kadar süreci bölümlere ayırır.
                </p>
                <p className="text-lg text-black mb-3">
                  <strong>Öne Çıkan Kullanım Alanı:</strong> Araştırma, rapor hazırlığı, içerik üretimi gibi işlerde farklı ai araçlarını farklı sekmelerde görevlendirebilirsiniz.
                </p>
                <p className="text-lg text-black mb-6">
                  <strong>Kullanıcı Yorumu:</strong>
                </p>
                <p className="text-lg text-black mb-6">
                  "Normalde birkaç kişilik ekip işi olan araştırma-rapor sürecini tek başıma birkaç saat içinde bitirdim."
                </p>
              </div>

              {/* Full-width Divider */}
              <div className="w-[calc(100vw-75px)] h-px bg-[#D9D9D9] mb-8 -ml-10"></div>

              {/* Lindy */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-[#0053E2] mb-4">Lindy</h3>
                <p className="text-lg text-black mb-3">
                  Lindy, kişisel ve kurumsal işler için özel yapay zeka asistanları oluşturmanıza izin verir. E-postaları yazar, toplantıları planlar, günlük rapor çıkarır.
                </p>
                <p className="text-lg text-black mb-3">
                  <strong>Öne Çıkan Kullanım Alanı:</strong> E-posta otomasyonu, toplantı notları, haftalık durum raporu.
                </p>
                <p className="text-lg text-black mb-6">
                  <strong>Kullanıcı Yorumu:</strong>
                </p>
                <p className="text-lg text-black mb-6">
                  "E-postaları elle yazmayı bıraktım. Toplantı özetleri ve durum raporlarını Lindy dakikalar içinde hazırlıyor."
                </p>
              </div>

              {/* Full-width Divider */}
              <div className="w-[calc(100vw-75px)] h-px bg-[#D9D9D9] mb-8 -ml-10"></div>
            </section>

            {/* Conclusion Section */}
            <section>
              <p className="text-lg text-black leading-relaxed mb-6">
                Yapay zeka sayesinde artık hem kod bilmeden web sitesi kurmak, hem de tekrarlayan işlerinizi otomatikleştirmek herkes için mümkün.
              </p>
              <p className="text-lg text-black leading-relaxed">
                Semka.ai'da bulunan bu araçlarla ister kişisel projeniz için bir web sitesi açın, ister iş süreçlerinizi tamamen otomatikleştirin. Daha fazla yapay zeka aracı incelemek isterseniz otomasyon,geliştirici araçları ve kodsuz yazılım kategorilerini inceleyebilrsiniz
              </p>
            </section>
          </div>

          {/* Right Column - AI Tool Cards */}
          <div className="absolute right-10 top-0">

            {/* AI Tool Card - Lovable - aligned with "Lovable" header */}
            <div className="absolute" style={{ top: '215px', right: '80px' }}>
              <a href="https://lovable.dev?utm_source=semka.ai&utm_medium=semka.ai&utm_campaign=semka.ai" target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                <div className="border border-[#0053E2] rounded-[10px] p-3 w-[116px]">
                  <div className="w-[92px] h-[92px] bg-white rounded-[10px] flex items-center justify-center mb-2">
                    <img src="/images/lovable-logo.png" alt="Lovable" className="w-16 h-16 object-contain" />
                  </div>
                  <div className="border-t border-black pt-1">
                    <h4 className="text-lg font-semibold text-center text-black">Lovable</h4>
                  </div>
                </div>
              </a>
            </div>

            {/* AI Tool Card - v0 - aligned with "v0 (Vercel)" header */}
            <div className="absolute" style={{ top: '573px', right: '80px' }}>
              <a href="https://v0.dev?utm_source=semka.ai&utm_medium=semka.ai&utm_campaign=semka.ai" target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                <div className="border border-[#0053E2] rounded-[10px] p-3 w-[116px]">
                  <div className="w-[92px] h-[92px] bg-white rounded-[10px] flex items-center justify-center mb-2">
                    <img src="/images/v0-logo.png" alt="v0" className="w-16 h-16 object-contain" />
                  </div>
                  <div className="border-t border-black pt-1">
                    <h4 className="text-lg font-semibold text-center text-black">v0</h4>
                  </div>
                </div>
              </a>
            </div>

            {/* AI Tool Card - Cursor - aligned with "Cursor" header */}
            <div className="absolute" style={{ top: '873px', right: '80px' }}>
              <a href="https://cursor.sh?utm_source=semka.ai&utm_medium=semka.ai&utm_campaign=semka.ai" target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                <div className="border border-[#0053E2] rounded-[10px] p-3 w-[116px]">
                  <div className="w-[92px] h-[92px] bg-white rounded-[10px] flex items-center justify-center mb-2">
                    <img src="/images/cursor-logo.png" alt="Cursor" className="w-16 h-16 object-contain" />
                  </div>
                  <div className="border-t border-black pt-1">
                    <h4 className="text-lg font-semibold text-center text-black">Cursor</h4>
                  </div>
                </div>
              </a>
            </div>

            {/* AI Tool Card - n8n - aligned with "n8n" header */}
            <div className="absolute" style={{ top: '1492px', right: '80px' }}>
              <a href="https://n8n.io?utm_source=semka.ai&utm_medium=semka.ai&utm_campaign=semka.ai" target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                <div className="border border-[#0053E2] rounded-[10px] p-3 w-[116px]">
                  <div className="w-[92px] h-[92px] bg-white rounded-[10px] flex items-center justify-center mb-2">
                    <img src="/images/n8n-logo.png" alt="n8n" className="w-16 h-16 object-contain" />
                  </div>
                  <div className="border-t border-black pt-1">
                    <h4 className="text-lg font-semibold text-center text-black">n8n</h4>
                  </div>
                </div>
              </a>
            </div>

            {/* AI Tool Card - CrewAI - aligned with "CrewAI" header */}
            <div className="absolute" style={{ top: '1909px', right: '80px' }}>
              <a href="https://www.crewai.com?utm_source=semka.ai&utm_medium=semka.ai&utm_campaign=semka.ai" target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                <div className="border border-[#0053E2] rounded-[10px] p-3 w-[116px]">
                  <div className="w-[92px] h-[92px] bg-white rounded-[10px] flex items-center justify-center mb-2">
                    <img src="/images/crewai-logo.png" alt="Crew AI" className="w-16 h-16 object-contain" />
                  </div>
                  <div className="border-t border-black pt-1">
                    <h4 className="text-lg font-semibold text-center text-black">Crew AI</h4>
                  </div>
                </div>
              </a>
            </div>

            {/* AI Tool Card - Lindy - aligned with "Lindy" header */}
            <div className="absolute" style={{ top: '2178px', right: '80px' }}>
              <a href="https://www.lindy.ai?utm_source=semka.ai&utm_medium=semka.ai&utm_campaign=semka.ai" target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                <div className="border border-[#0053E2] rounded-[10px] p-3 w-[116px]">
                  <div className="w-[92px] h-[92px] bg-white rounded-[10px] flex items-center justify-center mb-2">
                    <img src="/images/lindy-logo.png" alt="Lindy" className="w-16 h-16 object-contain" />
                  </div>
                  <div className="border-t border-black pt-1">
                    <h4 className="text-lg font-semibold text-center text-black">Lindy</h4>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
