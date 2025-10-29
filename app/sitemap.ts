import { MetadataRoute } from 'next'
import { getAllAIs } from '@/lib/firebase-data'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://semka.ai'
  
  // Get all AI tools from Firebase
  const tools = await getAllAIs()
  
  // Create sitemap entries for all AI tool detail pages
  const toolPages: MetadataRoute.Sitemap = tools.map((tool) => ({
    url: `${baseUrl}/yapay-zeka/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.9, // High priority for individual tool pages
  }))
  
  // All category slugs
  const categories = [
    'agentlar',
    'otomasyon',
    'fotograf-video',
    'kurumsal',
    'altyapi',
    'verimlilik',
    'veri',
    'sosyal-medya',
    'ses',
    'sohbet-botu',
    'yazilim-araclari',
    'kodsuz-yazilim',
    'tasarim',
    'akademi'
  ]
  
  // Create sitemap entries for all category pages
  const categoryPages: MetadataRoute.Sitemap = categories.map((slug) => ({
    url: `${baseUrl}/yapay-zeka-araclari/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'daily',
    priority: 0.8, // High priority for category pages
  }))
  
  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0, // Highest priority for homepage
    },
    {
      url: `${baseUrl}/use-cases`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/use-cases/gorsel-olusturma`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/use-cases/kod-yazdir`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/use-cases/rapor-olusturma`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/use-cases/seslendirme`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/use-cases/video-creation`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/hakkimizda`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/blog/video-creation-guide`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]
  
  // Combine all pages
  return [
    ...staticPages,
    ...categoryPages,
    ...toolPages,
  ]
}

