'use client'

import { ChevronLeft, ChevronRight } from 'lucide-react'
import { PopularAppCard } from './agent-card'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

// Mobile AI Card Component
function MobileAICard({ 
  title, 
  description, 
  categories, 
  price, 
  logoUrl, 
  bannerUrl 
}: {
  title: string
  description: string
  categories: string[]
  price: string
  logoUrl?: string
  bannerUrl?: string
}) {
  return (
    <div className="w-[326px] bg-white rounded-[10px] overflow-hidden shadow-sm">
      {/* Banner Image */}
      <div className="w-full h-[163px] bg-gray-200 relative">
        {bannerUrl ? (
          <img
            src={bannerUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
            <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center">
              <span className="text-2xl">🤖</span>
            </div>
          </div>
        )}
      </div>
      
      {/* Card Info */}
      <div className="p-3 pt-3">
        <div className="flex items-start gap-2">
          {/* Logo */}
          <div className="w-[57px] h-[57px] bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
            {logoUrl ? (
              <img
                src={logoUrl}
                alt={`${title} logo`}
                className="w-full h-full rounded-lg object-cover"
              />
            ) : (
              <span className="text-lg">🤖</span>
            )}
          </div>
          
          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-semibold text-black mb-2 line-clamp-1">
              {title}
            </h3>
            <p className="text-sm text-gray-600 mb-2 line-clamp-2">
              {description}
            </p>
            
            {/* Categories */}
            <div className="flex items-center gap-1 text-xs text-gray-500 mb-2">
              {categories.slice(0, 3).map((category, index) => (
                <span key={index}>
                  {category}
                  {index < Math.min(categories.length, 3) - 1 && ' • '}
                </span>
              ))}
            </div>
          </div>
          
          {/* Price */}
          <div className="text-xs font-semibold text-black">
            {price}
          </div>
        </div>
      </div>
    </div>
  )
}

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
    <section className="py-4 lg:py-16 px-5 lg:px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header - Mobile and Desktop Layouts */}
        <div className="flex items-start justify-between mb-4 lg:mb-12">
          <div className="flex-1">
            <h2 className="text-xl lg:text-3xl font-semibold text-black mb-1 lg:mb-4">
              {title}
            </h2>
            <p className="text-sm lg:text-lg text-gray-600">
              {subtitle}
            </p>
          </div>
          {/* Desktop Navigation Arrows */}
          <div className="hidden lg:flex items-center space-x-2">
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
        
        {/* Cards Container - Mobile and Desktop Layouts */}
        <div className="relative">
          {cards.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">Henüz içerik yüklenmedi...</p>
            </div>
          ) : (
            <>
              {/* Mobile Layout - Horizontal Scroll */}
              <div className="lg:hidden">
                <div 
                  data-scroll={scrollId}
                  className="flex gap-6 pb-4 overflow-x-auto scrollbar-hide"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {cards.map((card) => (
                    <div 
                      key={card.index} 
                      className="group hover:shadow-lg transition-shadow cursor-pointer flex-shrink-0"
                      onClick={() => {
                        // Convert title to slug format for navigation
                        const slug = card.title.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
                        router.push(`/yapay-zeka/${slug}`);
                      }}
                    >
                      <MobileAICard 
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
              </div>

              {/* Desktop Layout - Horizontal Scroll */}
              <div className="hidden lg:block">
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
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
