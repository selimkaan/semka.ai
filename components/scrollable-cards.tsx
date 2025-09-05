'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { PopularAppCard } from './agent-card'
import { useRouter } from 'next/navigation'

interface ScrollableCardsProps {
  title: string
  subtitle: string
  cards: Array<{
    index: number
    title: string
    description: string
    categories: string[]
    price: string
    logoUrl?: string
    bannerUrl?: string
  }>
  scrollId: string
}

export default function ScrollableCards({ title, subtitle, cards, scrollId }: ScrollableCardsProps) {
  const router = useRouter()

  const scrollLeft = () => {
    const container = document.querySelector(`[data-scroll="${scrollId}"]`);
    if (container) container.scrollBy({ left: -400, behavior: 'smooth' });
  };

  const scrollRight = () => {
    const container = document.querySelector(`[data-scroll="${scrollId}"]`);
    if (container) container.scrollBy({ left: 400, behavior: 'smooth' });
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section Header - Left Aligned with Navigation Arrows */}
        <div className="flex items-start justify-between mb-12">
          <div>
            <h2 className="text-3xl font-semibold text-black mb-4">
              {title}
            </h2>
            <p className="text-lg text-gray-600">
              {subtitle}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <button 
              onClick={scrollLeft}
              className="w-8 h-8 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-4 h-4 text-gray-600" />
            </button>
            <button 
              onClick={scrollRight}
              className="w-8 h-8 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-4 h-4 text-gray-600" />
            </button>
          </div>
        </div>
        
        {/* Cards Container - Horizontal Scrollable */}
        <div className="relative">
          {cards.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">Henüz içerik yüklenmedi...</p>
            </div>
          ) : (
            <div 
              data-scroll={scrollId}
              className="flex gap-6 pb-4 overflow-x-auto scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {cards.map((card) => (
                <div 
                  key={card.index} 
                  className="group hover:shadow-lg transition-shadow cursor-pointer"
                  onClick={() => {
                    // Convert title to slug format for navigation
                    const slug = card.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
                    router.push(`/yapay-zeka/${slug}`);
                  }}
                >
                  <PopularAppCard 
                    index={card.index}
                    title={card.title}
                    description={card.description}
                    categories={card.categories}
                    price={card.price}
                    logoUrl={card.logoUrl}
                    bannerUrl={card.bannerUrl}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
