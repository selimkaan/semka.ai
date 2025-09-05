'use client'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { AgentFilters } from '@/components/agent-filters'

interface FiltersSheetProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  categories: string[]
  pricingOptions: string[]
  ratingOptions: number[]
  selectedCategory: string
  selectedPricing: string
  selectedRating: string
  onFiltersChange: (filters: Record<string, string>) => void
}

export function FiltersSheet({
  open,
  onOpenChange,
  categories,
  pricingOptions,
  ratingOptions,
  selectedCategory,
  selectedPricing,
  selectedRating,
  onFiltersChange,
}: FiltersSheetProps) {
  const handleFiltersChange = (filters: Record<string, string>) => {
    onFiltersChange(filters)
    // Close sheet after filter change on mobile
    onOpenChange(false)
  }

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="w-[300px] sm:w-[400px] overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
          <SheetDescription>
            Refine your search by category, pricing, and rating
          </SheetDescription>
        </SheetHeader>
        <div className="mt-6">
          <AgentFilters
            categories={categories}
            pricingOptions={pricingOptions}
            ratingOptions={ratingOptions}
            selectedCategory={selectedCategory}
            selectedPricing={selectedPricing}
            selectedRating={selectedRating}
            onFiltersChange={handleFiltersChange}
          />
        </div>
      </SheetContent>
    </Sheet>
  )
}
