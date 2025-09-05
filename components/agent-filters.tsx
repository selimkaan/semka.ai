'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { X } from 'lucide-react'

interface AgentFiltersProps {
  categories: string[]
  pricingOptions: string[]
  ratingOptions: number[]
  selectedCategory: string
  selectedPricing: string
  selectedRating: string
  onFiltersChange: (filters: Record<string, string>) => void
}

export function AgentFilters({
  categories,
  pricingOptions,
  ratingOptions,
  selectedCategory,
  selectedPricing,
  selectedRating,
  onFiltersChange,
}: AgentFiltersProps) {
  const clearFilters = () => {
    onFiltersChange({
      category: '',
      pricing: '',
      rating: '',
    })
  }

  const hasActiveFilters = selectedCategory || selectedPricing || selectedRating

  return (
    <div className="space-y-6">
      {/* Active Filters */}
      {hasActiveFilters && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium">Active Filters</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={clearFilters}
              className="h-auto p-0 text-xs text-muted-foreground hover:text-foreground"
            >
              Clear all
            </Button>
          </div>
          <div className="flex flex-wrap gap-2">
            {selectedCategory && (
              <Badge variant="secondary" className="text-xs">
                Category: {selectedCategory}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onFiltersChange({ category: '' })}
                  className="h-auto p-0 ml-1 hover:bg-transparent"
                >
                  <X className="h-3 w-3" />
                </Button>
              </Badge>
            )}
            {selectedPricing && (
              <Badge variant="secondary" className="text-xs">
                Pricing: {selectedPricing}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onFiltersChange({ pricing: '' })}
                  className="h-auto p-0 ml-1 hover:bg-transparent"
                >
                  <X className="h-3 w-3" />
                </Button>
              </Badge>
            )}
            {selectedRating && (
              <Badge variant="secondary" className="text-xs">
                Rating: {selectedRating}+
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => onFiltersChange({ rating: '' })}
                  className="h-auto p-0 ml-1 hover:bg-transparent"
                >
                  <X className="h-3 w-3" />
                </Button>
              </Badge>
            )}
          </div>
        </div>
      )}

      <Separator />

      {/* Category Filter */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium">Categories</h3>
        <div className="grid grid-cols-2 gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => onFiltersChange({ category })}
              className="justify-start h-auto p-2 text-xs"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <Separator />

      {/* Pricing Filter */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium">Pricing</h3>
        <div className="space-y-2">
          {pricingOptions.map((pricing) => (
            <Button
              key={pricing}
              variant={selectedPricing === pricing ? 'default' : 'outline'}
              size="sm"
              onClick={() => onFiltersChange({ pricing })}
              className="justify-start h-auto p-2 text-xs w-full"
            >
              {pricing}
            </Button>
          ))}
        </div>
      </div>

      <Separator />

      {/* Rating Filter */}
      <div className="space-y-3">
        <h3 className="text-sm font-medium">Minimum Rating</h3>
        <div className="space-y-2">
          {ratingOptions.map((rating) => (
            <Button
              key={rating}
              variant={selectedRating === rating.toString() ? 'default' : 'outline'}
              size="sm"
              onClick={() => onFiltersChange({ rating: rating.toString() })}
              className="justify-start h-auto p-2 text-xs w-full"
            >
              {rating}+ stars
            </Button>
          ))}
        </div>
      </div>
    </div>
  )
}
