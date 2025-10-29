import { Metadata } from 'next'
import YapayZekaAraclariClient from './yapay-zeka-araclari-client'

interface PageProps {
  params: { slug: string }
  }

  const getCategoryTitle = (slug: string) => {
    const categoryMap: { [key: string]: string } = {
      'altyapi': 'Altyapı',
      'agentlar': 'Agentlar',
      'otomasyon': 'Otomasyon',
      'fotograf-video': 'Fotoğraf & Video',
      'kurumsal': 'Kurumsal',
      'verimlilik': 'Verimlilik',
      'veri': 'Veri',
      'sosyal-medya': 'Sosyal Medya',
      'ses': 'Ses',
      'sohbet-botu': 'Sohbet Botu',
      'yazilim-araclari': 'Yazılım Araçları',
      'kodsuz-yazilim': 'Kodsuz Yazılım',
      'tasarim': 'Tasarım',
      'akademi': 'Akademi'
    }
    return categoryMap[slug] || slug.charAt(0).toUpperCase() + slug.slice(1)
  }

  const getCategorySubtitle = (slug: string) => {
    const subtitleMap: { [key: string]: string } = {
      'altyapi': 'Yapay zeka tabanlı uygulamalı inşa et ve yayınla.',
      'agentlar': 'Akıllı AI ajanları ile işlerinizi otomatikleştirin.',
      'otomasyon': 'İş süreçlerinizi yapay zeka ile otomatikleştirin.',
      'fotograf-video': 'Görsel içerik oluşturma ve düzenleme araçları.',
      'kurumsal': 'Kurumsal ihtiyaçlar için özel AI çözümleri.',
      'verimlilik': 'Verimliliğinizi artıran AI araçları.',
      'veri': 'Veri analizi ve işleme AI araçları.',
      'sosyal-medya': 'Sosyal medya yönetimi için AI araçları.',
      'ses': 'Ses işleme ve analiz AI araçları.',
      'sohbet-botu': 'Akıllı sohbet botları ve müşteri hizmetleri.',
      'yazilim-araclari': 'Yazılım geliştirme için AI araçları.',
      'kodsuz-yazilim': 'Kod yazmadan AI uygulamaları geliştirin.',
      'tasarim': 'Tasarım ve yaratıcılık için AI araçları.',
      'akademi': 'AI eğitimi ve öğrenme kaynakları.'
    }
    return subtitleMap[slug] || 'Yapay zeka araçlarını keşfedin.'
  }

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const categoryTitle = getCategoryTitle(params.slug)
  const categorySubtitle = getCategorySubtitle(params.slug)
  
  return {
    title: `${categoryTitle} Yapay Zeka Araçları | Semka`,
    description: categorySubtitle,
    openGraph: {
      title: `${categoryTitle} Yapay Zeka Araçları | Semka`,
      description: categorySubtitle,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${categoryTitle} Yapay Zeka Araçları | Semka`,
      description: categorySubtitle,
    },
  }
}

export default function CategoryPage({ params }: PageProps) {
  // Pass params to client component
  return <YapayZekaAraclariClient params={params} />
}
