import { Metadata } from 'next'
import { getAIProductBySlug, getAllAIs } from '@/lib/firebase-data'
import { AIDetailClient } from '@/components/ai-detail-client'
import { notFound } from 'next/navigation'

interface PageProps {
  params: { slug: string }
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  try {
    const agent = await getAIProductBySlug(params.slug)
    
    if (!agent) {
      return {
        title: 'AI Tool Not Found | Semka',
        description: 'The requested AI tool could not be found.',
      }
    }

    const title = `${agent.name} nedir | ${agent.name} nasıl kullanılır | Semka`
    const description = agent.description_tr || agent.overview_tr || `${agent.name} hakkında detaylı bilgi, özellikleri, fiyatları ve kullanım senaryoları.`
    
    return {
      title,
      description,
      openGraph: {
        title,
        description,
        images: agent.banner_url ? [agent.banner_url] : [],
        type: 'website',
      },
      twitter: {
        card: 'summary_large_image',
        title,
        description,
        images: agent.banner_url ? [agent.banner_url] : [],
      },
    }
  } catch (error) {
    console.error('Error generating metadata:', error)
    return {
      title: 'Semka - Yapay Zeka Rehberi',
      description: 'Yapay zeka araçlarını keşfedin.',
    }
  }
}

export default async function AIDetailPage({ params }: PageProps) {
  try {
    // Fetch the agent data on the server
    const agent = await getAIProductBySlug(params.slug)
    
    if (!agent) {
      notFound()
    }

    // Fetch related tools from the same category
    const relatedTools = []
    if (agent.category_id) {
      const allTools = await getAllAIs()
      const categoryTools = allTools.filter(tool => tool.category_id === agent.category_id)
      relatedTools.push(...categoryTools
        .filter(tool => tool.slug !== agent.slug)
        .slice(0, 4))
    }

    // Pass data to client component
    return <AIDetailClient agent={agent} relatedTools={relatedTools} />
  } catch (error) {
    console.error('Error fetching agent:', error)
    notFound()
  }
}
