'use client'

export default function RaporOlusturmaPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="container mx-auto px-10 py-2">
        {/* Page Header */}
        <div className="flex items-center gap-8 mb-[6px]">
          <h1 className="text-[32px] font-bold text-black">
            Rapor Oluşturma
          </h1>
          <p className="text-lg text-gray-600 max-w-md whitespace-nowrap">
            Yapay Zeka Araçlarıyla Rapor Oluşturma Rehberi
          </p>
        </div>

        {/* Separator Line */}
        <div className="w-full h-px bg-gray-300 mb-12"></div>

        {/* Main Content Layout */}
        <div className="flex relative">
          {/* Left Column - Main Content */}
          <div className="flex-1 max-w-[900px] space-y-8">
            {/* Introduction Section */}
            <section>
              <h2 className="text-[28px] font-semibold text-[#0053E2] mb-6">
                Giriş: Yapay Zeka ile Raporlama
              </h2>
              <p className="text-lg text-black leading-relaxed mb-6">
                Yapay zeka araçları ile raporlar oluşturma sürecinin en kritik noktalarından biri, yapılacak işe en uygun yapay zeka aracını seçmektir. Özellikle derinlemesine bir rapor oluşturmak isteniyorsa, popüler sohbet botları yerine kendi alanında özelleşmiş yapay zeka araçlarını kullanmak mantıklı olacaktır. Yazının devamında, kullanıcı yorumlarına dayanan popüler kullanım senaryoları ve bu senaryolara uygun yapay zeka araçlarını bulabilirsiniz.
              </p>
            </section>

            {/* Students and Academic Users Section */}
            <section>
              <h2 className="text-[28px] font-semibold text-[#0053E2] mb-6">
                Öğrenciler ve Akademik Kullanıcılar İçin
              </h2>

              {/* Notion AI */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-[#0053E2] mb-4">1. Notion AI</h3>
                <p className="text-lg text-black mb-3">
                  Notion Ai Notion'ın entegre AI desteğiyle çalışan, metin üretimi ve bilgi organizasyonuna odaklı güçlü bir asistandır.
                </p>
                <p className="text-lg text-black mb-3">
                  <strong>Ne Yapar:</strong> Rapor taslakları oluşturabilir, notlarınızı toparlayabilir, sunum yapınıza göre içerik önerileri sunabilir.
                </p>
                <p className="text-lg text-black mb-6">
                  <strong>Kullanıcı Yorumu:</strong> Kullanıcılar, özellikle tez yazımı ve proje raporları sırasında Notion AI'nin "auto-structure" özelliği sayesinde karmaşık başlıkları sadeleştirdiklerini ve kaynak toplama sürecini %50 oranında hızlandırdıklarını belirtiyor.
                </p>
              </div>

              {/* Full-width Divider */}
              <div className="w-[calc(100vw-75px)] h-px bg-[#D9D9D9] mb-8 -ml-10"></div>

              {/* Wordtune */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-[#0053E2] mb-4">2. Wordtune</h3>
                <p className="text-lg text-black mb-3">
                  Wordtune yazıları yeniden yazmak, netleştirmek ve akademik dile uygun hale getirmek için kullanılan bir AI destekli editör.
                </p>
                <p className="text-lg text-black mb-3">
                  <strong>Ne Yapar:</strong> Cümlelerinizi daha profesyonel, akıcı veya sade bir hale getirir.
                </p>
                <p className="text-lg text-black mb-6">
                  <strong>Kullanıcı Yorumu:</strong> Öğrenciler, Wordtune'un özellikle İngilizce ödevlerde belirsiz veya zayıf ifadeleri daha net ve etkileyici hale getirmede diğer yapay zeka araçlarına göre daha iyi çalıştığını belirtiyor. Aynı zamanda ücretli planına gerek duymadan bir çok görevi kolayca yerine getirdiği de öne çıkan yorumlar arasında bulunuyor.
                </p>
              </div>

              {/* Full-width Divider */}
              <div className="w-[calc(100vw-75px)] h-px bg-[#D9D9D9] mb-8 -ml-10"></div>

              {/* Origami AI */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-[#0053E2] mb-4">3. Origami AI</h3>
                <p className="text-lg text-black mb-3">
                  Origami Ai kitle analizi ve pazarlama içgörülerini hedefleyen bir raporlama asistanıdır.
                </p>
                <p className="text-lg text-black mb-3">
                  <strong>Ne Yapar:</strong> Verilerinizden anlamlı grafikler ve hedef kitle bazlı analizler üretir.
                </p>
                <p className="text-lg text-black mb-6">
                  <strong>Kullanıcı Yorumu:</strong> İş dünyasına yönelik yüksek lisans programlarında okuyan öğrenciler, pazarlama raporlarında Origami AI'yi kullanarak 15 dakika gibi kısa bir sürede hedef kitleyi yaş, cinsiyet, ilgi alanları gibi demografik özelliklerine göre analiz edebildiklerini ve bu verileri otomatik olarak görselleştirerek grafik haline getirebildiklerini ifade ediyor.
                </p>
              </div>

              {/* Full-width Divider */}
              <div className="w-[calc(100vw-75px)] h-px bg-[#D9D9D9] mb-8 -ml-10"></div>
            </section>

            {/* Corporate Users and Professionals Section */}
            <section>
              <h2 className="text-[28px] font-semibold text-[#0053E2] mb-6">
                Kurumsal Kullanıcılar ve Profesyoneller İçin
              </h2>

              {/* Fireflies.ai */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-[#0053E2] mb-4">4. Fireflies.ai</h3>
                <p className="text-lg text-black mb-3">
                  Fireflies.ai toplantı odaklı bir yapay zeka asistandır.
                </p>
                <p className="text-lg text-black mb-3">
                  <strong>Ne Yapar:</strong> Zoom/Meet gibi görüşmeleri kaydeder, otomatik olarak özetler ve aksiyon maddelerine dönüştürür.
                </p>
                <p className="text-lg text-black mb-6">
                  <strong>Kullanıcı Yorumu:</strong> Farklı departmanlardan profesyoneller, Fireflies sayesinde 1 saat süren toplantıları sadece 3 dakikalık özetlerle takip edebildiklerinden bahsediyor. Ayrıca popüler kurumsal iletişim ve toplantı araçlarıyla (Slack, Teams, Zoom, Google Meet, Webex) entegre çalışabildiği için bu özetleri ekipleriyle zahmetsizce paylaşarak bilgi akışını ciddi ölçüde hızlandırdıklarını belirtiyor.
                </p>
              </div>

              {/* Full-width Divider */}
              <div className="w-[calc(100vw-75px)] h-px bg-[#D9D9D9] mb-8 -ml-10"></div>

              {/* Julius AI */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-[#0053E2] mb-4">5. Julius AI</h3>
                <p className="text-lg text-black mb-3">
                  Julius AI veri analizi ve tablo yorumlamaya odaklı gelişmiş bir AI aracıdır.
                </p>
                <p className="text-lg text-black mb-3">
                  <strong>Ne Yapar:</strong> Excel dosyalarınızı analiz eder, grafik önerileri yapar, bulgulara dayalı özetler çıkarır.
                </p>
                <p className="text-lg text-black mb-6">
                  <strong>Kullanıcı Yorumu:</strong> Birçok kurumsal çalışanın deneyimlerine göre, Julius AI; anket verilerini analiz ederek önemli çıkarımlar yapmayı kolaylaştırıyor. Bu sayede kullanıcılar hem görsel sunumlarda hem de yazılı raporlarda kullanabilecekleri içerikleri zahmetsizce oluşturabiliyor.
                </p>
              </div>

              {/* Full-width Divider */}
              <div className="w-[calc(100vw-75px)] h-px bg-[#D9D9D9] mb-8 -ml-10"></div>

              {/* Lindy */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-[#0053E2] mb-4">6. Lindy</h3>
                <p className="text-lg text-black mb-3">
                  Lindy, günlük görevlerinizi üstlenen, kişisel ve kurumsal görev takibi yapan AI asistandır.
                </p>
                <p className="text-lg text-black mb-3">
                  <strong>Ne Yapar:</strong> Toplantı takvimi oluşturur, e-posta taslakları hazırlar, yapılan işleri günlüğe döker.
                </p>
                <p className="text-lg text-black mb-6">
                  <strong>Kullanıcı Yorumu:</strong> Ofis yöneticileri ve asistanlar, Lindy'nin CEO günlüğü ve "haftalık durum raporu" gibi içerikleri otomatik yazdığını belirtiyor.
                </p>
              </div>

              {/* Full-width Divider */}
              <div className="w-[calc(100vw-75px)] h-px bg-[#D9D9D9] mb-8 -ml-10"></div>

              {/* Artisan AI */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-[#0053E2] mb-4">7. Artisan AI</h3>
                <p className="text-lg text-black mb-3">
                  Artisan Ai insan benzeri yazı üretimi yapan, metin ve içerik oluşturma süreçlerinde yapay zeka tabanlı bir yazar gibi görev yapar.
                </p>
                <p className="text-lg text-black mb-3">
                  <strong>Ne Yapar:</strong> E-posta, blog, kampanya dökümantasyonu ve hatta rapor sunumları üretir.
                </p>
                <p className="text-lg text-black mb-6">
                  <strong>Kullanıcı Yorumu:</strong> Özellikle içerik pazarlama ekipleri, Artisan AI'yi teklif dosyaları ve içerik özetleri hazırlamak için kullanıyor. Kullanıcılar "insan eli değmiş gibi" sonuçlar aldıklarını paylaşıyor.
                </p>
              </div>

              {/* Full-width Divider */}
              <div className="w-[calc(100vw-75px)] h-px bg-[#D9D9D9] mb-8 -ml-10"></div>

              {/* CrewAI */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-[#0053E2] mb-4">8. CrewAI</h3>
                <p className="text-lg text-black mb-3">
                  CrewAI yapay zeka araçlarının görev tabanlı şekilde birlikte çalışmasını sağlayan gelişmiş bir platformdur.
                </p>
                <p className="text-lg text-black mb-3">
                  <strong>Ne Yapar:</strong> Rapor sürecini bölümlere ayırarak her yapay zeka aracına araştırma, görselleştirme, içerik yazımı gibi farklı görevler yaptırabilir.
                </p>
                <p className="text-lg text-black mb-6">
                  <strong>Kullanıcı Yorumu:</strong> Birçok kullanıcı CrewAI'yi "takım içi proje raporu hazırlığı" için kullanıyor ve yapay zeka araçlarına verilmiş özel görev tanımlarıyla tüm süreci otomatikleştiriyor.
                </p>
              </div>

              {/* Full-width Divider */}
              <div className="w-[calc(100vw-75px)] h-px bg-[#D9D9D9] mb-8 -ml-10"></div>

              {/* Shortcut AI */}
              <div className="mb-8">
                <h3 className="text-2xl font-semibold text-[#0053E2] mb-4">9. Shortcut AI</h3>
                <p className="text-lg text-black mb-3">
                  Shortcut AI excel ve veri odaklı çalışan, iş zekâsı temelli önemli bilgileri özetleyen kısa rapor çıktıları üreten bir yapay zeka aracıdır.
                </p>
                <p className="text-lg text-black mb-3">
                  <strong>Ne Yapar:</strong> Verileri yorumlar, grafik önerisi verir, içgörü metinleri üretir.
                </p>
                <p className="text-lg text-black mb-6">
                  <strong>Kullanıcı Yorumu:</strong> Finans ve satış ekipleri Shortcut AI'yi Excel'den direkt KPI(Temel Performans Göstergeleri) raporu üretmek için kullanıyor. Birçok kullanıcı, excel ve yapay zekanın birleşimini rapor hazırlamada mucizevi bir çözüm olarak görüyor.
                </p>
              </div>
            </section>

            {/* Conclusion Section */}
            <section>
              <h2 className="text-[28px] font-semibold text-[#0053E2] mb-6">
                Rapor Hazırlamak Artık Zor Değil
              </h2>
              <p className="text-lg text-black leading-relaxed">
                Görüldüğü üzere, ister öğrenci olun ister kurumsal bir ekipte çalışın, bahsi geçen araçlar rapor hazırlama sürecini çok daha hızlı, verimli ve etkili hale getiriyor. Siz de klasik raporlama yöntemlerini geride bırakıp zaman kazandıran, önemli noktaları öne çıkaran ve modern bir yöntem kullanmak istiyorsanız , Semka.ai'nin önerdiği bu çözümleri denemeye başlayabilirsiniz.
              </p>
            </section>
          </div>

          {/* Right Column - AI Tool Cards */}
          <div className="absolute right-10 top-0">
            {/* Header - Kullanabileceğin Yapay Zekalar */}
            <div className="absolute text-center mb-6 whitespace-nowrap" style={{ top: '200px', right: '0' }}>
              <h3 className="text-xl font-semibold text-black">
                Kullanabileceğin Yapay Zekalar
              </h3>
            </div>

            {/* AI Tool Card - Notion AI - aligned with "1. Notion AI" header */}
            <div className="absolute" style={{ top: '310px', right: '80px' }}>
              <a href="https://www.notion.so/product/ai" target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                <div className="border border-[#0053E2] rounded-[10px] p-3 w-[116px]">
                  <div className="w-[92px] h-[92px] bg-white rounded-[10px] flex items-center justify-center mb-2">
                    <img src="/images/notion-ai-logo.png" alt="Notion AI" className="w-16 h-16 object-contain" />
                  </div>
                  <div className="border-t border-black pt-1">
                    <h4 className="text-lg font-semibold text-center text-black">Notion AI</h4>
                  </div>
                </div>
              </a>
            </div>

            {/* AI Tool Card - Wordtune - aligned with "2. Wordtune" header */}
            <div className="absolute" style={{ top: '642px', right: '80px' }}>
              <a href="https://www.wordtune.com" target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                <div className="border border-[#0053E2] rounded-[10px] p-3 w-[116px]">
                  <div className="w-[92px] h-[92px] bg-white rounded-[10px] flex items-center justify-center mb-2">
                    <img src="/images/wordtune-logo.png" alt="Wordtune" className="w-16 h-16 object-contain" />
                  </div>
                  <div className="border-t border-black pt-1">
                    <h4 className="text-lg font-semibold text-center text-black">Wordtune</h4>
                  </div>
                </div>
              </a>
            </div>

            {/* AI Tool Card - Origami AI - aligned with "3. Origami AI" header */}
            <div className="absolute" style={{ top: '976px', right: '80px' }}>
              <a href="https://www.origamiagents.com/" target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                <div className="border border-[#0053E2] rounded-[10px] p-3 w-[117px]">
                  <div className="w-[92px] h-[92px] bg-white rounded-[10px] flex items-center justify-center mb-2">
                    <img src="/images/origami-ai-logo.png" alt="Origami AI" className="w-16 h-16 object-contain" />
                  </div>
                  <div className="border-t border-black pt-1">
                    <h4 className="text-lg font-semibold text-center text-black">Origami AI</h4>
                  </div>
                </div>
              </a>
            </div>

            {/* AI Tool Card - Fireflies.ai - aligned with "4. Fireflies.ai" header */}
            <div className="absolute" style={{ top: '1347px', right: '80px' }}>
              <a href="https://fireflies.ai" target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                <div className="border border-[#0053E2] rounded-[10px] p-3 w-[116px]">
                  <div className="w-[92px] h-[92px] bg-white rounded-[10px] flex items-center justify-center mb-2">
                    <img src="/images/fireflies-ai-logo.png" alt="Fireflies.ai" className="w-16 h-16 object-contain" />
                  </div>
                  <div className="border-t border-black pt-1">
                    <h4 className="text-lg font-semibold text-center text-black">Fireflies.ai</h4>
                  </div>
                </div>
              </a>
            </div>

            {/* AI Tool Card - Julius AI - aligned with "5. Julius AI" header */}
            <div className="absolute" style={{ top: '1680px', right: '80px' }}>
              <a href="https://julius.ai" target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                <div className="border border-[#0053E2] rounded-[10px] p-3 w-[116px]">
                  <div className="w-[92px] h-[92px] bg-white rounded-[10px] flex items-center justify-center mb-2">
                    <img src="/images/julius-ai-logo.png" alt="Julius AI" className="w-16 h-16 object-contain" />
                  </div>
                  <div className="border-t border-black pt-1">
                    <h4 className="text-lg font-semibold text-center text-black">Julius AI</h4>
                  </div>
                </div>
              </a>
            </div>

            {/* AI Tool Card - Lindy - aligned with "6. Lindy" header */}
            <div className="absolute" style={{ top: '1957px', right: '80px' }}>
              <a href="https://www.lindy.ai" target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
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

            {/* AI Tool Card - Artisan AI - aligned with "7. Artisan AI" header */}
            <div className="absolute" style={{ top: '2206px', right: '80px' }}>
              <a href="https://www.artisan.co" target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                <div className="border border-[#0053E2] rounded-[10px] p-3 w-[116px]">
                  <div className="w-[92px] h-[92px] bg-white rounded-[10px] flex items-center justify-center mb-2">
                    <img src="/images/artisan-ai-logo.png" alt="Artisan AI" className="w-16 h-16 object-contain" />
                  </div>
                  <div className="border-t border-black pt-1">
                    <h4 className="text-lg font-semibold text-center text-black">Artisan AI</h4>
                  </div>
                </div>
              </a>
            </div>

            {/* AI Tool Card - CrewAI - aligned with "8. CrewAI" header */}
            <div className="absolute" style={{ top: '2483px', right: '80px' }}>
              <a href="https://www.crewai.com" target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                <div className="border border-[#0053E2] rounded-[10px] p-3 w-[116px]">
                  <div className="w-[92px] h-[92px] bg-white rounded-[10px] flex items-center justify-center mb-2">
                    <img src="/images/crewai-logo.png" alt="CrewAI" className="w-16 h-16 object-contain" />
                  </div>
                  <div className="border-t border-black pt-1">
                    <h4 className="text-lg font-semibold text-center text-black">CrewAI</h4>
                  </div>
                </div>
              </a>
            </div>

            {/* AI Tool Card - Shortcut AI - aligned with "9. Shortcut AI" header */}
            <div className="absolute" style={{ top: '2760px', right: '80px' }}>
              <a href="https://www.shortcut.com/" target="_blank" rel="noopener noreferrer" className="block hover:opacity-80 transition-opacity">
                <div className="border border-[#0053E2] rounded-[10px] p-3 w-[116px]">
                  <div className="w-[92px] h-[92px] bg-white rounded-[10px] flex items-center justify-center mb-2">
                    <img src="/images/shortcut-ai-logo.png" alt="Shortcut AI" className="w-16 h-16 object-contain" />
                  </div>
                  <div className="border-t border-black pt-1">
                    <h4 className="text-lg font-semibold text-center text-black">ShortcutAI</h4>
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