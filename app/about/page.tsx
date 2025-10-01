export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white pb-[100px]">
      {/* Mobile Header */}
      <div className="lg:hidden">
        {/* Main Header */}
        <div className="bg-white shadow-md px-5 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img src="/images/semka_logo_sinek_golgeli.png" alt="Semka Logo" className="w-9 h-10" />
              <span className="text-3xl font-semibold text-black">Semka</span>
            </div>
            <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
        
        {/* Categories Navigation */}
        <div className="bg-white border-b border-gray-200 px-5 py-3 overflow-x-auto">
          <div className="flex gap-8 min-w-max">
            <button className="text-sm text-gray-600 whitespace-nowrap">Agentlar</button>
            <button className="text-sm text-gray-600 whitespace-nowrap">Otomasyon</button>
            <button className="text-sm text-gray-600 whitespace-nowrap">Görsel & Video</button>
            <button className="text-sm text-gray-600 whitespace-nowrap">Kurumsal</button>
            <button className="text-sm text-gray-600 whitespace-nowrap">Altyapı</button>
            <button className="text-sm text-gray-600 whitespace-nowrap">Üretkenlik</button>
            <button className="text-sm text-gray-600 whitespace-nowrap">Veri</button>
            <button className="text-sm text-gray-600 whitespace-nowrap">Sosyal Medya</button>
            <button className="text-sm text-gray-600 whitespace-nowrap">Ses</button>
            <button className="text-sm text-gray-600 whitespace-nowrap">Sohbet Botu</button>
            <button className="text-sm text-gray-600 whitespace-nowrap">Yazılım Araçları</button>
            <button className="text-sm text-gray-600 whitespace-nowrap">Kodsuz Yazılım</button>
            <button className="text-sm text-gray-600 whitespace-nowrap">Tasarım</button>
            <button className="text-sm text-gray-600 whitespace-nowrap">Akademi</button>
          </div>
        </div>
      </div>

      {/* Desktop Header */}
      <div className="hidden lg:block">
        {/* Header title */}
        <div className="px-5 py-4">
          <div className="flex items-center gap-4 ml-[27px]">
            <h1 className="text-3xl font-semibold text-black">Hakkımızda</h1>
            <span className="text-lg text-gray-600">Biz kimiz?</span>
          </div>
          <div className="w-full h-px bg-[rgba(199,202,208,0.60)] mt-3" />
        </div>
      </div>

      {/* Mobile Header title */}
      <div className="lg:hidden px-5 py-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-semibold text-black">Hakkımızda</h1>
          <span className="text-sm text-[#535961]">Biz kimiz?</span>
        </div>
        <div className="w-full h-px bg-[rgba(199,202,208,0.60)] mt-3 mb-[-16px]" />
      </div>

      {/* Mobile Semka'nın Hikayesi */}
      <div className="lg:hidden px-4 py-6">
        <h2 className="text-base font-semibold text-[#0053E2] mb-4">Semka'nın Hikayesi</h2>
        <p className="text-sm text-black leading-6 mb-4">
          Semka.ai'yi kurarken temel motivasyonumuz, ülkemizde yapay zekânın yalnızca bir teknoloji değil, aynı zamanda günlük yaşamı kolaylaştıran ve iş dünyasına değer katan bir araç olarak anlaşılmasına katkı sağlamaktı.
        </p>
        <p className="text-sm text-black leading-6 mb-4">
          Bu proje, Türkiye'deki insanların yapay zekâyı daha bilinçli şekilde öğrenmesi, anlaması ve kendi hayatlarında uygulayabilmesi amacıyla geliştirildi. Amacımız; bilgiye erişimi kolaylaştırmak, üretkenliği artırmak ve yapay zekâyı herkes için ulaşılabilir hale getirmek.
        </p>
        <p className="text-sm text-black leading-6">
          Semka.ai ile hem bireylerin hem de şirketlerin bu dönüşümün bir parçası olmasını ve ülkemizin yapay zekâ alanında daha güçlü bir konuma gelmesini hedefliyoruz.
        </p>
      </div>

      {/* Mobile Stats */}
      <div className="lg:hidden px-5 py-4">
        <div className="flex gap-7 justify-center">
          <div className="w-[84px] h-[57px] px-3 py-1 rounded-[10px] border border-[#0053E2] flex flex-col justify-center items-center">
            <div className="text-center text-base font-bold text-black leading-tight">1800+</div>
            <div className="text-center text-xs text-black leading-tight">Yapay zeka aracı</div>
          </div>
          <div className="w-[84px] h-[57px] px-3 py-1 rounded-[10px] border border-[#0053E2] flex flex-col justify-center items-center">
            <div className="text-center text-base font-bold text-black leading-tight">14</div>
            <div className="text-center text-xs text-black leading-tight">Kategori</div>
          </div>
          <div className="w-[84px] h-[57px] px-3 py-1 rounded-[10px] border border-[#0053E2] flex flex-col justify-center items-center">
            <div className="text-center text-base font-bold text-black leading-tight">108</div>
            <div className="text-center text-xs text-black leading-tight">Kullanım<br/>Senaryosu</div>
          </div>
        </div>
        
        {/* Divider after Stats boxes */}
        <div className="w-full h-px bg-[#D9D9D9] mt-8 mb-[-16px]"></div>
      </div>

      {/* Mobile Kurucular */}
      <div className="lg:hidden px-4 py-6">
        <h2 className="text-base font-semibold text-[#0053E2] mb-6">Kurucular</h2>
        
        {/* Mehmet */}
        <div className="mb-8">
          <div className="flex justify-center mb-2">
            <img src="/images/mehmet.png" alt="Mehmet Kurt" className="w-36 h-32 rounded-[11px] object-cover" />
          </div>
          <h3 className="text-base font-semibold text-[#0053E2] text-center mb-1">Mehmet Kurt</h3>
          <p className="text-sm text-black leading-6 mb-4">
            Ben Mehmet Kurt, İstanbul Teknik Üniversitesi'nde İşletme Mühendisliği öğrencisiyim. Ortaokul ve lise yıllarımdan itibaren girişimci bir ruhla büyüdüm; farklı fikirler üretmek, denemek ve hayata geçirmek benim için her zaman bir tutku oldu.
          </p>
          <p className="text-sm text-black leading-6 mb-4">
            Üniversite hayatımda ise bu merakımı teknolojiyle, özellikle de yapay zekâ ile birleştirdim. Semka.ai, hem bu yolculuğun bir ürünü hem de ülkemizde insanların yapay zekâyı daha iyi anlayıp kullanabilmeleri için arkadaşım Selim Kaan ile geliştirdiğimiz bir proje.
          </p>
          <p className="text-sm text-black leading-6">
            Kariyer hedefim; yapay zekâ alanında yenilikçi çözümler üretmek ve iş dünyasında katma değer sağlayacak projeler geliştirmek. Semka.ai ise bu vizyonun ilk adımlarından biri.
          </p>
        </div>

        {/* Selim */}
        <div className="mb-8">
          <div className="flex justify-center mb-2">
            <img src="/images/selim.png" alt="Selim Kaan Topaç" className="w-36 h-32 rounded-[15px] object-cover" />
          </div>
          <h3 className="text-base font-semibold text-[#0053E2] text-center mb-1">Selim Kaan Topaç</h3>
          <p className="text-sm text-black leading-6 mb-4">
            Ben Selim Kaan Topaç, bir teknoloji meraklısıyım. Teknolojinin ulaştığı seviyeyi anlamlandırmaya ve gelecekte kullanılabilecek teknolojileri inşa etmeye çalışıyorum.
          </p>
          <p className="text-sm text-black leading-6 mb-4">
            Çocukluğumdan beri ulaşabildiğim her yeni teknolojiye adapte olmaya ve o teknolojiyi kullanmaya çalıştım. Birkaç yıldır işin mutfağındayım ve arkadaşlarımla insanların sorunlarına teknolojik çözümler geliştirmeye çalışıyoruz (çok çalışıyoruz).
          </p>
          <p className="text-sm text-black leading-6 mb-4">
            Bir girişimci olarak bilginin ve bilgiye ulaşmanın çok değerli olduğuna inanıyorum. Bilgiye ulaşmaya verdiğim bu değer, arkadaşım Mehmet ile beraber Semka'yı kurma konusunda en büyük motivasyonlarımdan birisiydi.
          </p>
          <p className="text-sm text-black leading-6">
            Şu anda da İTÜ'de İşletme Mühendisliği'nde okuyorum ve kendimi yapay zeka, ekonomi, siyaset gibi farklı alanlarda geliştirmeye çalışıyorum.
          </p>
        </div>
        
        {/* Divider after Kurucular section */}
        <div className="w-full h-px bg-[#D9D9D9] mb-[-16px]"></div>
      </div>

      {/* Mobile Logonun Anlamı */}
      <div className="lg:hidden px-4 py-6">
        <h2 className="text-base font-semibold text-[#0053E2] mb-4">Logonun Anlamı</h2>
        <div className="flex justify-center mb-6">
          <img src="/images/logo.png" alt="Semka Logo" className="w-36 h-auto" />
        </div>
        <p className="text-sm text-black leading-6 mb-6">
          Semka'nın logosunda yer alan iç içe geçmiş iki sinek (♣), bizim yolculuğumuzun sembolüdür. Sinek, çoğu zaman sıfırdan başlamayı, emeği, mücadeleyi ve çalışkanlığı simgeler. Biz de bu değerleri girişim yolculuğumuzun en temel taşları olarak görüyoruz.
          <br />Aynı zamanda sineğin yonca yaprağını andıran formu, büyüme ve başarı anlamını taşır. Bu da bizim için yalnızca bir başlangıcı değil; emekle yoğrulmuş ve büyüyerek zenginleşen sürecimizi temsil eder.
          <br /><br />Logoda iki sineğin iç içe geçmiş olması, arkadaşlığımızın ve birlikte inşa etme irademizin ifadesidir. Selim ve Mehmet olarak farklı bakış açılarımızı ve enerjimizi aynı motivasyonlarla buluşturup ortak bir değer yaratmayı seçtik.
          <br />Semka logosu, bu yüzden yalnızca bir görsel değil; bizim kim olduğumuzu, nereden geldiğimizi ve nereye gitmek istediğimizi anlatan bir semboldür.
        </p>
        
        {/* Divider after Logonun Anlamı section */}
        <div className="w-full h-px bg-[#D9D9D9] mb-8"></div>
      </div>

      {/* Mobile Footer */}
      <div className="lg:hidden bg-white px-4 py-6 mt-8">
        <div className="flex flex-col gap-3">
          {/* Logo */}
          <div className="flex items-center gap-1">
            <img src="/images/semka_logo_sinek_golgeli.png" alt="Semka Logo" className="w-10 h-10" />
            <span className="text-3xl font-semibold text-black">Semka</span>
          </div>
          <p className="text-sm text-black">Yapay Zeka Rehberiniz</p>
          <p className="text-sm text-black underline">hello@semka.ai</p>
          
          {/* Social Icons */}
          <div className="flex gap-4">
            <div className="w-4 h-4 bg-black rounded"></div>
            <div className="w-4 h-4 bg-black rounded"></div>
            <div className="w-4 h-4 bg-black rounded"></div>
          </div>
          
          {/* Navigation Links */}
          <div className="flex flex-col gap-5">
            <a href="/hakkimizda" className="text-sm text-black">Hakkımızda</a>
            <a href="/use-cases" className="text-sm text-black">Kullanım Senaryoları</a>
            <a href="/success-stories" className="text-sm text-black">Yapay Zeka İle Başarı Hikayeleri</a>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="flex justify-center mt-8">
          <p className="text-xs text-black font-medium">Semka A.Ş. Tüm Hakları Saklıdır</p>
        </div>
        
        {/* iOS Home Indicator */}
        <div className="flex justify-center mt-4">
          <div className="w-32 h-1 bg-black rounded-full"></div>
        </div>
      </div>

      {/* Desktop Content */}
      <div className="hidden lg:block">
        {/* Semka'nın Hikayesi + Stats */}
        <section className="max-w-[1200px] mx-auto px-5 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-[28px] font-semibold text-[#0053E2] mb-4">Semka'nın Hikayesi</h2>
            <p className="text-[18px] text-black leading-7 mb-6">
              Semka.ai'yi kurarken temel motivasyonumuz, ülkemizde yapay zekânın yalnızca bir teknoloji değil, aynı zamanda günlük yaşamı kolaylaştıran ve iş dünyasına değer katan bir araç olarak anlaşılmasına katkı sağlamaktı.
            </p>
            <p className="text-[18px] text-black leading-7 mb-6">
              Bu proje, Türkiye'deki insanların yapay zekâyı daha bilinçli şekilde öğrenmesi, anlaması ve kendi hayatlarında uygulayabilmesi amacıyla geliştirildi. Amacımız; bilgiye erişimi kolaylaştırmak, üretkenliği artırmak ve yapay zekâyı herkes için ulaşılabilir hale getirmek.
            </p>
            <p className="text-[18px] text-black leading-7">
              Semka.ai ile hem bireylerin hem de şirketlerin bu dönüşümün bir parçası olmasını ve ülkemizin yapay zekâ alanında daha güçlü bir konuma gelmesini hedefliyoruz.
            </p>
          </div>

          <div className="flex flex-col gap-6 items-start ml-[262px]">
            <div className="w-[298px] rounded-[10px] border-2 border-[#0053E2] p-3">
              <div className="text-center text-[40px] font-bold text-black">1800+</div>
              <div className="text-[28px] text-black text-center">Yapay zeka aracı</div>
            </div>
            <div className="w-[298px] rounded-[10px] border-2 border-[#0053E2] p-3">
              <div className="text-center text-[40px] font-bold text-black">14</div>
              <div className="text-[28px] text-black text-center">Kategori</div>
            </div>
            <div className="w-[298px] rounded-[10px] border-2 border-[#0053E2] p-3">
              <div className="text-center text-[40px] font-bold text-black">108</div>
              <div className="text-[28px] text-black text-center">Kullanım Senaryosu</div>
            </div>
          </div>
        </section>

        {/* Kurucular */}
        <section className="max-w-[1200px] mx-auto px-5 mt-16">
          <h2 className="text-[28px] font-semibold text-[#0053E2] mb-6">Kurucular</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 relative">
            <div className="flex flex-col gap-4">
              <div className="flex justify-center">
                <img src="/images/selim.png" alt="Selim Kaan Topaç" className="w-[288px] h-[256px] rounded-[30px] object-cover" />
              </div>
              <h3 className="text-[24px] font-semibold text-[#0053E2] text-center">Selim Kaan Topaç</h3>
              <p className="text-[16px] text-black leading-7">
                Ben Selim Kaan Topaç, bir teknoloji meraklısıyım. Teknolojinin ulaştığı seviyeyi anlamlandırmaya ve gelecekte kullanılabilecek teknolojileri inşa etmeye çalışıyorum.
                <br /><br />
                Çocukluğumdan beri ulaşabildiğim her yeni teknolojiye adapte olmaya ve o teknolojiyi kullanmaya çalıştım. Birkaç yıldır işin mutfağındayım ve arkadaşlarımla insanların sorunlarına teknolojik çözümler geliştirmeye çalışıyoruz (çok çalışıyoruz).
                <br /><br />
                Bir girişimci olarak bilginin ve bilgiye ulaşmanın çok değerli olduğuna inanıyorum. Semka'yı hayata geçirmek için en büyük motivasyonlarımdan birisi de insanların yapay zekaya dair bilgilere ulaşabilmelerini sağlayabilmekti.
                <br /><br />
                Şu anda da İTÜ'de İşletme Mühendisliği'nde okuyorum ve kendimi teknoloji, ekonomi, siyaset gibi farklı alanlarda geliştirmeye çalışıyorum.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex justify-center">
                <img src="/images/mehmet.png" alt="Mehmet Kurt" className="w-[288px] h-[256px] rounded-[22px] object-cover" />
              </div>
              <h3 className="text-[24px] font-semibold text-[#0053E2] text-center">Mehmet Kurt</h3>
              <p className="text-[16px] text-black leading-7">
                Ben Mehmet Kurt, İstanbul Teknik Üniversitesi'nde İşletme Mühendisliği öğrencisiyim. Ortaokul ve lise yıllarımdan itibaren girişimci bir ruhla büyüdüm; farklı fikirler üretmek, denemek ve hayata geçirmek benim için her zaman bir tutku oldu.
                <br /><br />
                Üniversite hayatımda ise bu merakımı teknolojiyle, özellikle de yapay zekâ ile birleştirdim. Semka.ai, hem bu yolculuğun bir ürünü hem de ülkemizde insanların yapay zekâyı daha iyi anlayıp kullanabilmeleri için arkadaşım Selim Kaan ile geliştirdiğimiz bir proje.
                <br /><br />
                Kariyer hedefim; yapay zekâ alanında yenilikçi çözümler üretmek ve iş dünyasında katma değer sağlayacak projeler geliştirmek. Semka.ai ise bu vizyonun ilk adımlarından biri.
              </p>
            </div>

            <div className="hidden lg:block absolute left-1/2 top-10 -translate-x-1/2 w-px h-[740px] bg-[#0053E2]/50" />
          </div>
        </section>

        {/* Logonun Anlamı */}
        <section className="max-w-[1200px] mx-auto px-5 mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-[24px] font-semibold text-[#0053E2] mb-4">Logonun Anlamı</h2>
            <p className="text-[18px] text-black leading-7">
              Semka'nın logosunda yer alan iç içe geçmiş iki sinek (♣), bizim yolculuğumuzun sembolüdür. Sinek, çoğu zaman sıfırdan başlamayı, emeği, mücadeleyi ve çalışkanlığı simgeler. Biz de bu değerleri girişim yolculuğumuzun en temel taşları olarak görüyoruz.
              <br />Aynı zamanda sineğin yonca yaprağını andıran formu, büyüme ve başarı anlamını taşır. Bu da bizim için yalnızca bir başlangıcı değil; emekle yoğrulmuş ve büyüyerek zenginleşen sürecimizi temsil eder.
              <br /><br />Logoda iki sineğin iç içe geçmiş olması, arkadaşlığımızın ve birlikte inşa etme irademizin ifadesidir. Selim ve Mehmet olarak farklı bakış açılarımızı ve enerjimizi aynı motivasyonlarla buluşturup ortak bir değer yaratmayı seçtik.
              <br />Semka logosu, bu yüzden yalnızca bir görsel değil; bizim kim olduğumuzu, nereden geldiğimizi ve nereye gitmek istediğimizi anlatan bir semboldür.
            </p>
          </div>
          <div className="flex justify-center lg:justify-start ml-[260px]">
            <img src="/images/logo.png" alt="Semka Logo" className="w-[300px] h-auto" />
          </div>
        </section>
      </div>
    </div>
  )
}
