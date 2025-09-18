'use client'

import { useState } from 'react'

export default function ImageCreationPage() {
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null)

  const copyToClipboard = async (text: string, promptId: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedPrompt(promptId)
      setTimeout(() => setCopiedPrompt(null), 2000) // Reset after 2 seconds
    } catch (err) {
      console.error('Failed to copy text: ', err)
    }
  }
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="container mx-auto px-10 py-2">
        {/* Page Header */}
        <div className="flex items-center gap-8 mb-[6px]">
          <h1 className="text-[32px] font-bold text-black">
            Görsel Oluşturma
          </h1>
          <p className="text-lg text-gray-600 max-w-md whitespace-nowrap">
            Yapay Zeka Araçlarıyla Metinden Görsel Oluşturma Rehberi
          </p>
        </div>

        {/* Separator Line */}
        <div className="w-full h-px bg-gray-300 mb-12"></div>

        {/* Step 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
              <h2 className="text-[28px] font-semibold text-[#0053E2] mb-6">
                1. Giriş: Komut (Prompt) Oluşturma Aşaması
            </h2>
              <p className="text-lg text-black leading-relaxed">
              Yapay zekayla görsel üretmeye başlamadan önce şunu bilmelisiniz: Ortaya çıkacak görsellerin kalitesi, tamamen yazacağınız komut'a (prompt) bağlıdır. Prompt ne kadar detaylı ve netse, sonuç o kadar hayal ettiğinize yakın olacaktır.
                <br /><br />
              Bu nedenle görsel üretim sürecine geçmeden önce, çoğu zaman ChatGPT gibi sohbet botlarından yardım almak faydalı olacaktır. Çünkü sohbet botları, hayalinizdeki görseli tarif ederken sizin doğru kelime seçimleri yapmanızı sağlar. Böylece arka plan, kamera açısı ve renk betimlemeleri gibi görselinizin daha kaliteli bir biçimde oluşmasını sağlayacak değişkenlerin kullanacağınız yapay zeka aracına en iyi şekilde aktarılmasına yardımcı olur.
                <br /><br />
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
                    <div className="w-[120px] h-[160px] border border-[#0053E2] rounded-lg p-3 flex flex-col cursor-pointer hover:shadow-lg transition-shadow">
                    <div className="w-full h-20 bg-white rounded-[10px] flex items-center justify-center mb-3">
                      <img src="/images/chatgpt-logo.png" alt="ChatGPT" className="w-16 h-16 object-contain" />
                      </div>
                      <div className="border-t border-gray-800 pt-2 text-center">
                        <h4 className="text-black font-semibold text-sm">Chat GPT</h4>
                      </div>
                    </div>
                  </a>
                  </div>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-[28px] font-semibold text-[#0053E2] mb-6">
                2. Aşama: Görsele Uygun Aracın Seçilmesi
              </h2>
              <p className="text-lg text-black leading-relaxed">
                İkinci aşamada oluşturmak istediğiniz görselin yapısına uygun yapay zeka aracını seçmeniz gerekmektedir. Örnek vermek gerekirse; Gerçekçi bir görsel oluşturmak istiyorsanız Higgsfield gibi bir yapay zeka aracı kullanabilirsiniz. 
                <br /><br />
                Aynı şekilde eğer Anime tarzı bir görsel oluşturmak istiyorsanız Midjourney, Krea gibi yapay zeka araçlarını kullanabilirsiniz. Yazının devamında 4 farklı kategoride öne çıkan yapay zeka araçlarını ve örnek komut örneklerini bulabilirsiniz.
              </p>
              </div>
              
            <div className="flex flex-col items-center">
              <h3 className="text-xl font-semibold text-black mb-8">
                Kullanabileceğin Yapay Zekalar
              </h3>
              <div className="flex gap-[72px]">
                {/* Higgsfield */}
              <div className="flex flex-col items-center">
                  <a href="https://higgsfield.ai/" target="_blank" rel="noopener noreferrer" className="block">
                    <div className="w-[120px] h-[160px] border border-[#0053E2] rounded-lg p-3 flex flex-col cursor-pointer hover:shadow-lg transition-shadow">
                    <div className="w-full h-20 bg-white rounded-[10px] flex items-center justify-center mb-3">
                        <img src="/images/Higgsfield_logo.jpg" alt="Higgsfield" className="w-16 h-16 object-contain" />
                      </div>
                      <div className="border-t border-gray-800 pt-2 text-center">
                        <h4 className="text-black font-semibold text-sm">Higgsfield</h4>
                      </div>
                    </div>
                  </a>
                </div>
                {/* Midjourney */}
                <div className="flex flex-col items-center">
                  <a href="https://www.midjourney.com/" target="_blank" rel="noopener noreferrer" className="block">
                    <div className="w-[120px] h-[160px] border border-[#0053E2] rounded-lg p-3 flex flex-col cursor-pointer hover:shadow-lg transition-shadow">
                      <div className="w-full h-20 bg-white rounded-[10px] flex items-center justify-center mb-3">
                        <img src="/images/Midjourney_logo.jpg" alt="Midjourney" className="w-16 h-16 object-contain" />
                      </div>
                      <div className="border-t border-gray-800 pt-2 text-center">
                        <h4 className="text-black font-semibold text-sm">Midjourney</h4>
                      </div>
                  </div>
                </a>
              </div>
                {/* Krea */}
              <div className="flex flex-col items-center">
                  <a href="https://www.krea.ai/" target="_blank" rel="noopener noreferrer" className="block">
                    <div className="w-[120px] h-[160px] border border-[#0053E2] rounded-lg p-3 flex flex-col cursor-pointer hover:shadow-lg transition-shadow">
                    <div className="w-full h-20 bg-white rounded-[10px] flex items-center justify-center mb-3">
                        <img src="/images/Krea_logo.jpg" alt="Krea" className="w-16 h-16 object-contain" />
                      </div>
                      <div className="border-t border-gray-800 pt-2 text-center">
                        <h4 className="text-black font-semibold text-sm">Krea</h4>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-[1px] bg-gray-400 mb-12"></div>

          {/* Anime Tarzı Görseller */}
          <div className="mb-16">
            <h3 className="text-[24px] font-semibold text-[#0053E2] mb-4 ml-8">Anime Tarzı Görseller</h3>
            <div className="text-[18px] text-black leading-[24px] mb-8 ml-8">
              <p>Anime görsellerinde canlı renkler, çizgi film estetiği ve karakter odaklı sahneler öne çıkar. Midjourney'in --niji modu ve Krea bu iş için en uygun araçlardır.</p>
            </div>

            {/* Komut Examples */}
            <div className="space-y-6">
              <div className="border border-black rounded-lg p-3 ml-[65px] max-w-[1137px] relative">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-[20px] font-medium text-[#0053E2]">Komut 1</h4>
                  <button
                    onClick={() => copyToClipboard("Ultra-detailed anime illustration of a futuristic samurai standing on a neon-lit rooftop, city skyline in the background, glowing katana, vibrant color palette, inspired by Studio Ghibli and Makoto Shinkai, cinematic perspective, dynamic pose, expressive character design, high resolution --niji 5 --ar 16:9 --v 6", "anime-1")}
                    className="px-3 py-1 text-xs bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors"
                  >
                    {copiedPrompt === "anime-1" ? "Kopyalandı!" : "Kopyala"}
                  </button>
                </div>
                <p className="text-[20px] font-medium text-black">Ultra-detailed anime illustration of a futuristic samurai standing on a neon-lit rooftop, city skyline in the background, glowing katana, vibrant color palette, inspired by Studio Ghibli and Makoto Shinkai, cinematic perspective, dynamic pose, expressive character design, high resolution --niji 5 --ar 16:9 --v 6</p>
              </div>
              <div className="text-[18px] text-black leading-[24px] ml-[66px] max-w-[1135px]">
                <p><strong>Açıklama:</strong> Bu prompt, neon ışıklı bir şehirde duran anime tarzı samuray üretir. Arka plan şehir manzarasıdır, samurayın kılıcı parıldar. Poster havasında, dinamik bir illüstrasyon çıkar.</p>
              </div>

              <div className="border border-black rounded-lg p-3 ml-[65px] max-w-[1137px] relative">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-[20px] font-medium text-[#0053E2]">Komut 2</h4>
                  <button
                    onClick={() => copyToClipboard("Cute anime character standing in a classroom holding a book, soft colors, clean lines, cheerful atmosphere, inspired by Makoto Shinkai style", "anime-2")}
                    className="px-3 py-1 text-xs bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors"
                  >
                    {copiedPrompt === "anime-2" ? "Kopyalandı!" : "Kopyala"}
                  </button>
                </div>
                <p className="text-[20px] font-medium text-black">Cute anime character standing in a classroom holding a book, soft colors, clean lines, cheerful atmosphere, inspired by Makoto Shinkai style</p>
              </div>
              <div className="text-[18px] text-black leading-[24px] ml-[66px] max-w-[1135px]">
                <p><strong>Açıklama:</strong> Bu prompt ile sınıfta kitap tutan sevimli anime karakteri oluşur. Atmosfer yumuşak renklerle doludur, çizgiler temizdir, ortam neşelidir. Basit ama etkili anime sahneleri için idealdir.</p>
              </div>

              <div className="border border-black rounded-lg p-3 ml-[65px] max-w-[1137px] relative">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-[20px] font-medium text-[#0053E2]">Komut 3</h4>
                  <button
                    onClick={() => copyToClipboard("Anime girl sitting by the window on a rainy day, wearing headphones, soft pastel colors, cozy atmosphere, reflection of raindrops on glass, cinematic anime frame --niji 5", "anime-3")}
                    className="px-3 py-1 text-xs bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors"
                  >
                    {copiedPrompt === "anime-3" ? "Kopyalandı!" : "Kopyala"}
                  </button>
                </div>
                <p className="text-[20px] font-medium text-black">Anime girl sitting by the window on a rainy day, wearing headphones, soft pastel colors, cozy atmosphere, reflection of raindrops on glass, cinematic anime frame --niji 5</p>
              </div>
              <div className="text-[18px] text-black leading-[24px] ml-[66px] max-w-[1135px]">
                <p><strong>Açıklama:</strong> Yağmurlu bir günde cam kenarında oturup müzik dinleyen anime karakteri oluşur. Ortam huzurlu, renkler pastel, sahne ise melankolik bir hava taşır.</p>
              </div>

              <div className="border border-black rounded-lg p-3 ml-[65px] max-w-[1137px] relative">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-[20px] font-medium text-[#0053E2]">Komut 4</h4>
                  <button
                    onClick={() => copyToClipboard("Epic anime battle scene of two warriors clashing swords under a stormy sky, lightning strikes in the background, dynamic movement, glowing energy effects, inspired by Shonen Jump anime", "anime-4")}
                    className="px-3 py-1 text-xs bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors"
                  >
                    {copiedPrompt === "anime-4" ? "Kopyalandı!" : "Kopyala"}
                  </button>
                </div>
                <p className="text-[20px] font-medium text-black">Epic anime battle scene of two warriors clashing swords under a stormy sky, lightning strikes in the background, dynamic movement, glowing energy effects, inspired by Shonen Jump anime</p>
              </div>
              <div className="text-[18px] text-black leading-[24px] ml-[66px] max-w-[1135px]">
                <p><strong>Açıklama:</strong> Fırtınalı gökyüzünün altında savaşan iki anime savaşçısının dövüş sahnesi üretilir. Arkada şimşekler çakar, enerji efektleri eklenir. Aksiyon dolu shonen anime sahnesi çıkar.</p>
              </div>
            </div>
          </div>

          {/* Gerçekçi / Fotoğrafik Stil */}
          <div className="mb-16">
            <h3 className="text-[24px] font-semibold text-[#0053E2] mb-4 ml-8">Gerçekçi / Fotoğrafik Stil</h3>
            <div className="text-[18px] text-black leading-[24px] mb-8 ml-8">
              <p>Gerçekçi görseller için Luma AI (Dream Machine) ve Higgsfield çok başarılıdır. Amaç, kamerayla çekilmiş gibi görünen sahneler yaratmaktır.</p>
            </div>

            {/* Komut Examples */}
            <div className="space-y-6">
              <div className="border border-black rounded-lg p-3 ml-[65px] max-w-[1137px] relative">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-[20px] font-medium text-[#0053E2]">Komut 1</h4>
                  <button
                    onClick={() => copyToClipboard("A hyper-realistic 8k portrait of an old fisherman with weathered skin, sitting by the sea at sunset, cinematic lighting, wide-angle lens effect, ultra-sharp focus on facial details, shallow depth of field, dramatic warm tones, National Geographic photography style", "realistic-1")}
                    className="px-3 py-1 text-xs bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors"
                  >
                    {copiedPrompt === "realistic-1" ? "Kopyalandı!" : "Kopyala"}
                  </button>
                </div>
                <p className="text-[20px] font-medium text-black">A hyper-realistic 8k portrait of an old fisherman with weathered skin, sitting by the sea at sunset, cinematic lighting, wide-angle lens effect, ultra-sharp focus on facial details, shallow depth of field, dramatic warm tones, National Geographic photography style</p>
              </div>
              <div className="text-[18px] text-black leading-[24px] ml-[66px] max-w-[1135px]">
                <p><strong>Açıklama:</strong> Gün batımında deniz kenarında oturan yaşlı balıkçının fotoğraf gibi gerçekçi portresi çıkar. Yüz hatları detaylıdır, ışık sinematik etki yaratır.</p>
              </div>

              <div className="border border-black rounded-lg p-3 ml-[65px] max-w-[1137px] relative">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-[20px] font-medium text-[#0053E2]">Komut 2</h4>
                  <button
                    onClick={() => copyToClipboard("Photorealistic shot of a sports car drifting on a wet city street at night, neon lights reflecting on the road, cinematic angle, dynamic motion blur, ultra-detailed reflections, high-speed action capture, 8k resolution", "realistic-2")}
                    className="px-3 py-1 text-xs bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors"
                  >
                    {copiedPrompt === "realistic-2" ? "Kopyalandı!" : "Kopyala"}
                  </button>
                </div>
                <p className="text-[20px] font-medium text-black">Photorealistic shot of a sports car drifting on a wet city street at night, neon lights reflecting on the road, cinematic angle, dynamic motion blur, ultra-detailed reflections, high-speed action capture, 8k resolution</p>
              </div>
              <div className="text-[18px] text-black leading-[24px] ml-[66px] max-w-[1135px]">
                <p><strong>Açıklama:</strong> Yağmurlu bir şehirde kayarak ilerleyen spor araba oluşturulur. Neon ışıkların yansıması sahneye canlılık katar, görüntü aksiyonlu bir fotoğraf gibidir.</p>
              </div>

              <div className="border border-black rounded-lg p-3 ml-[65px] max-w-[1137px] relative">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-[20px] font-medium text-[#0053E2]">Komut 3</h4>
                  <button
                    onClick={() => copyToClipboard("Ultra-realistic close-up portrait of a young woman with freckles, natural daylight, minimal makeup, high detail in eyes and hair, shallow depth of field, DSLR photography look", "realistic-3")}
                    className="px-3 py-1 text-xs bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors"
                  >
                    {copiedPrompt === "realistic-3" ? "Kopyalandı!" : "Kopyala"}
                  </button>
                </div>
                <p className="text-[20px] font-medium text-black">Ultra-realistic close-up portrait of a young woman with freckles, natural daylight, minimal makeup, high detail in eyes and hair, shallow depth of field, DSLR photography look</p>
              </div>
              <div className="text-[18px] text-black leading-[24px] ml-[66px] max-w-[1135px]">
                <p><strong>Açıklama:</strong> Doğal ışık altında çekilmiş gibi duran genç bir kadının portresi oluşur. Çiller, göz ve saç detayları ön plana çıkar, DSLR ile çekilmiş profesyonel fotoğraf havası verir.</p>
              </div>

              <div className="border border-black rounded-lg p-3 ml-[65px] max-w-[1137px] relative">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-[20px] font-medium text-[#0053E2]">Komut 4</h4>
                  <button
                    onClick={() => copyToClipboard("Photorealistic landscape of snowy mountains at sunrise, golden light on the peaks, fog in the valley, ultra-detailed nature photography, inspired by National Geographic", "realistic-4")}
                    className="px-3 py-1 text-xs bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors"
                  >
                    {copiedPrompt === "realistic-4" ? "Kopyalandı!" : "Kopyala"}
                  </button>
                </div>
                <p className="text-[20px] font-medium text-black">Photorealistic landscape of snowy mountains at sunrise, golden light on the peaks, fog in the valley, ultra-detailed nature photography, inspired by National Geographic</p>
              </div>
              <div className="text-[18px] text-black leading-[24px] ml-[66px] max-w-[1135px]">
                <p><strong>Açıklama:</strong> Karla kaplı dağların gün doğumunda altın ışıklarla aydınlatıldığı bir manzara ortaya çıkar. Sis vadide yoğunlaşır, sonuç profesyonel doğa fotoğrafı gibidir.</p>
              </div>
            </div>
          </div>

          {/* Sinematik / Film Sahnesi */}
          <div className="mb-16">
            <h3 className="text-[24px] font-semibold text-[#0053E2] mb-4 ml-8">Sinematik / Film Sahnesi</h3>
            <div className="text-[18px] text-black leading-[24px] mb-8 ml-8">
              <p>Film estetiği isteyenler için Luma AI Dream Machine ve Pika en uygun araçlardır. Burada kamera hareketlerini tanımlamak çok önemlidir.</p>
            </div>

            {/* Komut Examples */}
            <div className="space-y-6">
              <div className="border border-black rounded-lg p-3 ml-[65px] max-w-[1137px] relative">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-[20px] font-medium text-[#0053E2]">Komut 1</h4>
                  <button
                    onClick={() => copyToClipboard("A dramatic 360-degree dolly shot of a futuristic city at dawn, skyscrapers piercing through the mist, flying vehicles zooming across the skyline, golden sunlight breaking through clouds, camera slowly circling around the main character standing on a balcony, ultra-cinematic atmosphere, epic science-fiction film aesthetic", "cinematic-1")}
                    className="px-3 py-1 text-xs bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors"
                  >
                    {copiedPrompt === "cinematic-1" ? "Kopyalandı!" : "Kopyala"}
                  </button>
                </div>
                <p className="text-[20px] font-medium text-black">A dramatic 360-degree dolly shot of a futuristic city at dawn, skyscrapers piercing through the mist, flying vehicles zooming across the skyline, golden sunlight breaking through clouds, camera slowly circling around the main character standing on a balcony, ultra-cinematic atmosphere, epic science-fiction film aesthetic</p>
              </div>
              <div className="text-[18px] text-black leading-[24px] ml-[66px] max-w-[1135px]">
                <p><strong>Açıklama:</strong> Geleceğin şehri canlanır, sisler arasından gökdelenler yükselir. Kamera 360 derece döner ve sahne bilim kurgu filmi gibi görünür.</p>
              </div>

              <div className="border border-black rounded-lg p-3 ml-[65px] max-w-[1137px] relative">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-[20px] font-medium text-[#0053E2]">Komut 2</h4>
                  <button
                    onClick={() => copyToClipboard("Cinematic wide-angle shot of a medieval battlefield at sunrise, thousands of soldiers in armor, banners waving in the wind, smoke and fire in the distance, ultra-realistic lighting, dramatic atmosphere, epic scale scene, inspired by Lord of the Rings battle sequences", "cinematic-2")}
                    className="px-3 py-1 text-xs bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors"
                  >
                    {copiedPrompt === "cinematic-2" ? "Kopyalandı!" : "Kopyala"}
                  </button>
                </div>
                <p className="text-[20px] font-medium text-black">Cinematic wide-angle shot of a medieval battlefield at sunrise, thousands of soldiers in armor, banners waving in the wind, smoke and fire in the distance, ultra-realistic lighting, dramatic atmosphere, epic scale scene, inspired by Lord of the Rings battle sequences</p>
              </div>
              <div className="text-[18px] text-black leading-[24px] ml-[66px] max-w-[1135px]">
                <p><strong>Açıklama:</strong> Gün doğumunda devasa bir Orta Çağ savaş alanı oluşturulur. Binlerce asker, duman ve ateş sahneye epik bir hava katar.</p>
              </div>

              <div className="border border-black rounded-lg p-3 ml-[65px] max-w-[1137px] relative">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-[20px] font-medium text-[#0053E2]">Komut 3</h4>
                  <button
                    onClick={() => copyToClipboard("Slow-motion cinematic shot of a glass of red wine falling and shattering on a marble floor, dramatic lighting, ultra-detailed splash effects, captured like a high-speed movie camera", "cinematic-3")}
                    className="px-3 py-1 text-xs bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors"
                  >
                    {copiedPrompt === "cinematic-3" ? "Kopyalandı!" : "Kopyala"}
                  </button>
                </div>
                <p className="text-[20px] font-medium text-black">Slow-motion cinematic shot of a glass of red wine falling and shattering on a marble floor, dramatic lighting, ultra-detailed splash effects, captured like a high-speed movie camera</p>
              </div>
              <div className="text-[18px] text-black leading-[24px] ml-[66px] max-w-[1135px]">
                <p><strong>Açıklama:</strong> Kırmızı şarabın yere düşüp kırıldığı dramatik bir sahne oluşur. Sıçrama efektleri çok detaylıdır, sahne slow motion film çekimi gibidir.</p>
              </div>

              <div className="border border-black rounded-lg p-3 ml-[65px] max-w-[1137px] relative">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-[20px] font-medium text-[#0053E2]">Komut 4</h4>
                  <button
                    onClick={() => copyToClipboard("Cinematic tracking shot through a dense jungle with sunlight filtering through the trees, exotic birds flying past the camera, atmospheric mist, ultra-detailed cinematic jungle scene", "cinematic-4")}
                    className="px-3 py-1 text-xs bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors"
                  >
                    {copiedPrompt === "cinematic-4" ? "Kopyalandı!" : "Kopyala"}
                  </button>
                </div>
                <p className="text-[20px] font-medium text-black">Cinematic tracking shot through a dense jungle with sunlight filtering through the trees, exotic birds flying past the camera, atmospheric mist, ultra-detailed cinematic jungle scene</p>
                  </div>
              <div className="text-[18px] text-black leading-[24px] ml-[66px] max-w-[1135px]">
                <p><strong>Açıklama:</strong> Yoğun bir ormanda ilerleyen kamera efektiyle sinematik bir sahne çıkar. Güneş ışıkları ağaçlardan süzülür, kuşlar kameranın önünden uçar.</p>
              </div>
            </div>
          </div>

          {/* Poster / Tipografi */}
          <div className="mb-16">
            <h3 className="text-[24px] font-semibold text-[#0053E2] mb-4 ml-8">Poster / Tipografi</h3>
            <div className="text-[18px] text-black leading-[24px] mb-8 ml-8">
              <p>Poster tarzı işler için Ideogram en çok kullanılan araçtır. Burada yazı ve görseli birlikte tanımlamak önemlidir.</p>
            </div>

            {/* Komut Examples */}
            <div className="space-y-6">
              <div className="border border-black rounded-lg p-3 ml-[65px] max-w-[1137px] relative">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-[20px] font-medium text-[#0053E2]">Komut 1</h4>
                  <button
                    onClick={() => copyToClipboard("Anime-style movie poster featuring a young hero with glowing eyes, dramatic Japanese typography integrated into the design, vibrant pink and blue neon colors, bold title text in kanji, illustrated background of a futuristic Tokyo, cinematic poster composition, highly detailed artwork", "poster-1")}
                    className="px-3 py-1 text-xs bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors"
                  >
                    {copiedPrompt === "poster-1" ? "Kopyalandı!" : "Kopyala"}
                  </button>
                </div>
                <p className="text-[20px] font-medium text-black">Anime-style movie poster featuring a young hero with glowing eyes, dramatic Japanese typography integrated into the design, vibrant pink and blue neon colors, bold title text in kanji, illustrated background of a futuristic Tokyo, cinematic poster composition, highly detailed artwork</p>
              </div>
              <div className="text-[18px] text-black leading-[24px] ml-[66px] max-w-[1135px]">
                <p><strong>Açıklama:</strong> Neon renkli anime film posteri oluşur. Hem karakter hem Japonca tipografi öne çıkar, afiş havası verir.</p>
              </div>

              <div className="border border-black rounded-lg p-3 ml-[65px] max-w-[1137px] relative">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-[20px] font-medium text-[#0053E2]">Komut 2</h4>
                  <button
                    onClick={() => copyToClipboard("Minimalist poster design for a sci-fi film, dark background with glowing typography, central silhouette of an astronaut floating in space, neon blue title text, high contrast cinematic layout, sleek futuristic style", "poster-2")}
                    className="px-3 py-1 text-xs bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors"
                  >
                    {copiedPrompt === "poster-2" ? "Kopyalandı!" : "Kopyala"}
                  </button>
                </div>
                <p className="text-[20px] font-medium text-black">Minimalist poster design for a sci-fi film, dark background with glowing typography, central silhouette of an astronaut floating in space, neon blue title text, high contrast cinematic layout, sleek futuristic style</p>
              </div>
              <div className="text-[18px] text-black leading-[24px] ml-[66px] max-w-[1135px]">
                <p><strong>Açıklama:</strong> Bilim kurgu filmi için minimalist poster oluşur. Astronot silüeti ortadadır, neon yazılar futuristik bir hava katar.</p>
              </div>

              <div className="border border-black rounded-lg p-3 ml-[65px] max-w-[1137px] relative">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-[20px] font-medium text-[#0053E2]">Komut 3</h4>
                  <button
                    onClick={() => copyToClipboard("Vintage-style poster of a jazz concert, sepia color tones, bold retro typography, illustration of a saxophone player on stage, 1950s design aesthetic, distressed texture for an old-paper feel", "poster-3")}
                    className="px-3 py-1 text-xs bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors"
                  >
                    {copiedPrompt === "poster-3" ? "Kopyalandı!" : "Kopyala"}
                  </button>
                </div>
                <p className="text-[20px] font-medium text-black">Vintage-style poster of a jazz concert, sepia color tones, bold retro typography, illustration of a saxophone player on stage, 1950s design aesthetic, distressed texture for an old-paper feel</p>
              </div>
              <div className="text-[18px] text-black leading-[24px] ml-[66px] max-w-[1135px]">
                <p><strong>Açıklama:</strong> 1950'lerden kalma gibi görünen retro bir caz konseri afişi oluşur. Eski kağıt dokusu, nostaljik bir his verir.</p>
              </div>

              <div className="border border-black rounded-lg p-3 ml-[65px] max-w-[1137px] relative">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="text-[20px] font-medium text-[#0053E2]">Komut 4</h4>
                  <button
                    onClick={() => copyToClipboard("Fantasy book cover design featuring a dragon flying over a castle at night, mystical typography, glowing moon in the background, epic fantasy illustration style, highly detailed artwork", "poster-4")}
                    className="px-3 py-1 text-xs bg-blue-500 hover:bg-blue-600 text-white rounded transition-colors"
                  >
                    {copiedPrompt === "poster-4" ? "Kopyalandı!" : "Kopyala"}
                  </button>
                </div>
                <p className="text-[20px] font-medium text-black">Fantasy book cover design featuring a dragon flying over a castle at night, mystical typography, glowing moon in the background, epic fantasy illustration style, highly detailed artwork</p>
              </div>
              <div className="text-[18px] text-black leading-[24px] ml-[66px] max-w-[1135px]">
                <p><strong>Açıklama:</strong> Ejderha ve şatoyu içeren fantastik bir kitap kapağı afişi çıkar. Tipografi büyülü görünür, sahne epik bir illüstrasyon havası taşır.</p>
            </div>
          </div>
        </div>

          <div className="w-full h-[1px] bg-gray-400 mb-12"></div>

        {/* Conclusion */}
        <div className="text-[18px] text-black leading-[24px] ml-8 mb-16">
          <p>
            Özetle, doğru komutları kullanarak yapay zeka görsel üretim araçlarıyla anime sahnelerinden gerçekçi fotoğraflara, sinematik film sahnelerinden posterlere kadar her şeyi oluşturabilirsiniz. Görsel oluşturma süreçlerinde kullanabileceğiniz daha fazla yapay zeka aracını keşfetmek için Görsel&Video kategorimizi inceleyebilirsiniz.
          </p>
        </div>
      </div>
    </div>
  )
}
