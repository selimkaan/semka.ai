'use client'

import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star } from 'lucide-react'
import { Agent } from '@/types/agent'

interface AgentCardProps {
  agent: Agent
  viewMode: 'grid' | 'list'
}

export function AgentCard({ agent, viewMode }: AgentCardProps) {
  if (viewMode === 'list') {
    return (
      <Card className="group hover:shadow-lg transition-shadow">
        <div className="flex items-center space-x-4 p-6">
          {/* Icon */}
          <div className="h-12 w-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
            <span className="text-xl">🤖</span>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between mb-2">
              <div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors mb-1">
                  <Link href={`/agents/${agent.slug}`}>
                    {agent.name}
                  </Link>
                </CardTitle>
                <CardDescription className="text-sm mb-2">
                  {agent.provider}
                </CardDescription>
              </div>
              <div className="flex items-center space-x-1 ml-4">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm font-medium">{agent.rating}</span>
              </div>
            </div>
            
            <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
              {agent.shortDescription}
            </p>
            
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-xs">
                {agent.pricing}
              </Badge>
              {agent.categories.slice(0, 3).map((category) => (
                <Badge key={category} variant="outline" className="text-xs">
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </Card>
    )
  }

  // Grid view (default)
  return (
    <Card className="group hover:shadow-lg transition-shadow">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-lg bg-muted flex items-center justify-center">
              <span className="text-lg">🤖</span>
            </div>
            <div>
              <CardTitle className="text-lg group-hover:text-primary transition-colors">
                <Link href={`/agents/${agent.slug}`}>
                  {agent.name}
                </Link>
              </CardTitle>
              <CardDescription className="text-sm">
                {agent.provider}
              </CardDescription>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{agent.rating}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
          {agent.shortDescription}
        </p>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary" className="text-xs">
            {agent.pricing}
          </Badge>
          {agent.categories.slice(0, 2).map((category) => (
            <Badge key={category} variant="outline" className="text-xs">
              {category}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

// New component specifically for the Popular Applications section matching Figma design
export function PopularAppCard({ 
  index, 
  title = "Shortcut", 
  description = "The first superhuman Excel agent",
  categories = ["Ajanlar", "Muhasebe", "Çok Amaçlı"],
  price = "Bedava",
  logoUrl,
  bannerUrl
}: {
  index: number
  title?: string
  description?: string
  categories?: string[]
  price?: string
  logoUrl?: string
  bannerUrl?: string
}) {
  return (
    <Card className="border border-[#E5E7EB] rounded-[10px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] hover:shadow-lg transition-shadow w-[385px] h-[294px] flex-shrink-0">
      <CardContent className="p-0 h-full flex flex-col">
        {/* Top Section - Banner Image from Firebase */}
        <div className="w-[385px] h-[192.24px] bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100 rounded-t-[10px] relative overflow-hidden">
          {/* Banner Image */}
          {bannerUrl ? (
            <img 
              src={bannerUrl} 
              alt={`${title} banner`}
              className="w-full h-full object-cover rounded-t-[10px]"
              onError={(e) => {
                // Fallback to gradient background if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          ) : null}
          
          {/* Background gradient fallback - shown when no banner or banner fails */}
          <div className={`absolute inset-0 ${bannerUrl ? 'opacity-0' : 'opacity-60'} ${
            index === 1 ? 'bg-gradient-to-br from-purple-100 via-blue-50 to-indigo-100' :
            index === 2 ? 'bg-gradient-to-br from-indigo-100 via-blue-50 to-purple-100' :
            index === 3 ? 'bg-gradient-to-br from-blue-100 via-indigo-50 to-purple-100' :
            'bg-gradient-to-br from-emerald-100 via-teal-50 to-cyan-100'
          }`} />
          
          {/* Decorative elements - only show when no banner */}
          {!bannerUrl && (
            <>
              {/* Iridescent Sphere */}
              <div className={`absolute w-16 h-16 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-indigo-600 opacity-60 blur-sm ${
                index === 1 ? 'top-4 left-4' :
                index === 2 ? 'top-6 right-6' :
                index === 3 ? 'top-8 left-8' :
                'top-6 left-6'
              }`} />
              
              {/* Translucent Objects */}
              <div className={`absolute w-12 h-8 bg-gradient-to-br from-purple-400 to-blue-500 opacity-40 rounded-lg transform ${
                index === 1 ? 'bottom-4 right-4 rotate-12' :
                index === 2 ? 'bottom-6 left-6 -rotate-12' :
                index === 3 ? 'bottom-8 right-8 rotate-6' :
                'bottom-4 left-4 -rotate-6'
              }`} />
              
              {/* Data Points */}
              <div className="absolute top-8 right-8 w-2 h-2 bg-gray-600 rounded-full opacity-60" />
              <div className="absolute top-16 right-16 w-1.5 h-1.5 bg-gray-600 rounded-full opacity-40" />
              <div className="absolute top-20 right-6 w-1 h-1 bg-gray-600 rounded-full opacity-50" />
            </>
          )}
        </div>

        {/* Bottom Section - Kart-info - Exact Figma layout structure */}
        <div className="w-[385px] h-[120px] bg-white rounded-b-[10px] flex flex-row justify-center items-start px-[12px] pt-[12px] pb-[20px] gap-[12px]">
          {/* Logo - Now using Firebase data with better fallback */}
          {logoUrl ? (
            <img 
              src={logoUrl} 
              alt={`${title} logo`}
              className="w-[45px] h-[45px] rounded-[8px] object-cover flex-shrink-0"
              onError={(e) => {
                // Fallback to placeholder if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
          ) : null}
          <div className={`w-[45px] h-[45px] rounded-[8px] flex items-center justify-center flex-shrink-0 ${logoUrl ? 'hidden' : ''}`}>
            <img 
              src="/images/cards/logo-placeholder.svg" 
              alt="Logo placeholder"
              className="w-[45px] h-[45px] rounded-[8px]"
            />
          </div>
          
          {/* AI Details - Ai-detay - Adjusted to prevent cutoff */}
          <div className="flex-1 min-w-0 flex flex-col items-start p-0">
            {/* Title - Exact Figma typography and dimensions */}
            <div className="w-full font-['Inter'] font-semibold text-base leading-[19px] text-[#000000] mb-2">
              <span className="block overflow-hidden text-ellipsis whitespace-nowrap">{title}</span>
            </div>
            
            {/* Description - Adjusted width to prevent cutoff */}
            <div className="w-full font-['Inter'] font-semibold text-base leading-[19px] tracking-[-0.01em] text-[#535961] mb-3">
              <span className="block overflow-hidden text-ellipsis whitespace-nowrap max-w-[380px]">{description}</span>
            </div>
            
            {/* Categories - Frame 8 - Adjusted to prevent cutoff */}
            <div className="w-full flex flex-row items-center p-0 gap-[3px]">
              {categories.map((category, idx) => (
                <span key={idx} className="flex items-center">
                  <span className="font-['Inter'] font-normal text-xs leading-[15px] text-[#888E96] whitespace-nowrap">
                    {category}
                  </span>
                  {idx < categories.length - 1 && (
                    <span className="w-[9px] h-[11.16px] font-['Inter'] font-normal text-[30px] leading-[10px] text-[#888E96] ml-[3px] flex-shrink-0">
                      ·
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
          
          {/* Price - Ensured proper positioning */}
          <div className="w-[50px] h-[17px] font-['Inter'] font-semibold text-sm leading-[17px] tracking-[-0.01em] text-[#000000] flex-shrink-0 flex items-center justify-center mr-3">
            <span className="whitespace-nowrap">{price}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
