import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Yapay Zeka Araçlarıyla Metinden Video Oluşturma Rehberi | Semka',
  description: 'Metinden video oluşturma sürecinde yapay zeka araçlarını nasıl kullanacağınızı öğrenin. ChatGPT, Veed.io, Pictory ve daha fazlası.',
}

export default function VideoCreationGuidePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="container mx-auto px-10 py-8">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-gray-600">
          <Link href="/" className="hover:text-black transition-colors">
            Ana Sayfa
          </Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-black transition-colors">
            Blog
          </Link>
          <span className="mx-2">/</span>
          <span>Video Oluşturma Rehberi</span>
        </nav>

        {/* Main Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-black mb-4">
            Yapay Zeka Araçlarıyla Metinden Video Oluşturma Rehberi
          </h1>
          <div className="w-full h-px bg-gray-300 opacity-60"></div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Step 1 */}
            <div>
              <h2 className="text-2xl font-semibold text-primary mb-4">
                1. Adım: Senaryoyu Oluşturun ve Prompt Alın
              </h2>
              <p className="text-lg font-semibold text-black leading-relaxed">
                Metinden video oluşturma sürecine başlamadan önce, yapay zekanın anlayabileceği şekilde profesyonel bir komut (prompt) hazırlamak gerekir.
                <br /><br />
                ChatGPT, Jasper ve Copy.ai gibi araçlardan birine giriş yapın ve aklınızdaki fikir veya senaryoyu detaylı bir şekilde açıklayarak İngilizce, profesyonel bir prompt oluşturmasını isteyin. Üretilen metni kopyalayarak bir sonraki adıma geçin.
              </p>
            </div>

            <div className="w-full h-px bg-gray-300"></div>

            {/* Step 2 */}
            <div>
              <h2 className="text-2xl font-semibold text-primary mb-4">
                2. Adım: Metni Videoya Dönüştürün
              </h2>
              <p className="text-lg font-semibold text-black leading-relaxed">
                Veed.io, Pictory, Descript gibi araçlardan birine giriş yaptıktan sonra oluşturduğunuz promptu ilgili alana yapıştırın. Araç, verdiğiniz metni otomatik olarak bir video taslağına dönüştürecektir.
              </p>
            </div>

            <div className="w-full h-px bg-gray-300"></div>

            {/* Step 3 */}
            <div>
              <h2 className="text-2xl font-semibold text-primary mb-4">
                3. Adım: Videoyu Düzenleyin
              </h2>
              <p className="text-lg font-semibold text-black leading-relaxed">
                Videonuz oluştuktan sonra, yine Veed.io, Pictory veya Descript üzerinden düzenlemeler yapabilirsiniz. Sahne geçişleri, görseller, altyazılar ve müzik ekleyerek içeriğinizi zenginleştirebilirsiniz.
                <br /><br />
                İsteğe bağlı olarak, videoyu dışa aktırarak CapCut gibi video düzenleme platformlarında daha gelişmiş düzenlemeler yapmanız da mümkün.
              </p>
            </div>
          </div>

          {/* Right Column - AI Tools */}
          <div className="space-y-8">
            {/* Content Creation Tools */}
            <div className="text-center">
              <h3 className="text-xl font-semibold text-black mb-9">
                Kullanabileceğin Yapay Zekalar
              </h3>
              <div className="flex flex-col gap-9">
                <Card className="border border-primary rounded-lg p-3">
                  <CardContent className="p-0">
                    <div className="flex flex-col items-center gap-2">
                      <Image
                        src="/images/chatgpt-logo.png"
                        alt="ChatGPT"
                        width={92}
                        height={92}
                        className="rounded-lg"
                      />
                      <div className="border-t border-black pt-1">
                        <p className="text-lg font-semibold text-black">Chat GPT</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-primary rounded-lg p-3">
                  <CardContent className="p-0">
                    <div className="flex flex-col items-center gap-2">
                      <Image
                        src="/images/jasper-logo-16b662.png"
                        alt="Jasper"
                        width={84}
                        height={92}
                        className="rounded-lg"
                      />
                      <div className="border-t border-black pt-1">
                        <p className="text-lg font-semibold text-black">Jasper</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-primary rounded-lg p-3">
                  <CardContent className="p-0">
                    <div className="flex flex-col items-center gap-2">
                      <Image
                        src="/images/copyai-logo.png"
                        alt="Copy AI"
                        width={92}
                        height={92}
                        className="rounded-lg"
                      />
                      <div className="border-t border-black pt-1">
                        <p className="text-lg font-semibold text-black">Copy AI</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Video Creation Tools */}
            <div className="text-center">
              <h3 className="text-xl font-semibold text-black mb-9">
                Kullanabileceğin Yapay Zekalar
              </h3>
              <div className="flex gap-18">
                <Card className="border border-primary rounded-lg p-3">
                  <CardContent className="p-0">
                    <div className="flex flex-col items-center gap-2">
                      <Image
                        src="/images/veed-logo.png"
                        alt="Veed.io"
                        width={92}
                        height={92}
                        className="rounded-lg"
                      />
                      <div className="border-t border-black pt-1">
                        <p className="text-lg font-semibold text-black">Veed.io</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-primary rounded-lg p-3">
                  <CardContent className="p-0">
                    <div className="flex flex-col items-center gap-2">
                      <Image
                        src="/images/pictory-logo-12f035.png"
                        alt="Pictory"
                        width={91}
                        height={92}
                        className="rounded-lg"
                      />
                      <div className="border-t border-black pt-1">
                        <p className="text-lg font-semibold text-black">Pictory</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border border-primary rounded-lg p-3">
                  <CardContent className="p-0">
                    <div className="flex flex-col items-center gap-2">
                      <Image
                        src="/images/descript-logo.png"
                        alt="Descript"
                        width={92}
                        height={92}
                        className="rounded-lg"
                      />
                      <div className="border-t border-black pt-1">
                        <p className="text-lg font-semibold text-black">Descript</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Video Editing Tools */}
            <div className="text-center">
              <h3 className="text-xl font-semibold text-black mb-9">
                Kullanabileceğin Yapay Zekalar
              </h3>
              <div className="flex justify-center">
                <Card className="border border-primary rounded-lg p-3">
                  <CardContent className="p-0">
                    <div className="flex flex-col items-center gap-2">
                      <Image
                        src="/images/capcut-logo.png"
                        alt="Cap Cut"
                        width={92}
                        height={92}
                        className="rounded-lg"
                      />
                      <div className="border-t border-black pt-1">
                        <p className="text-lg font-semibold text-black">Cap Cut</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
