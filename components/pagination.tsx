'use client'

import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  itemsPerPage: number
  totalItems: number
}

export function Pagination({ 
  currentPage, 
  totalPages, 
  onPageChange, 
  itemsPerPage, 
  totalItems 
}: PaginationProps) {
  const startItem = (currentPage - 1) * itemsPerPage + 1
  const endItem = Math.min(currentPage * itemsPerPage, totalItems)

  const getVisiblePages = () => {
    const delta = 2
    const range = []
    const rangeWithDots = []

    for (let i = Math.max(2, currentPage - delta); i <= Math.min(totalPages - 1, currentPage + delta); i++) {
      range.push(i)
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, '...')
    } else {
      rangeWithDots.push(1)
    }

    rangeWithDots.push(...range)

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push('...', totalPages)
    } else if (totalPages > 1) {
      rangeWithDots.push(totalPages)
    }

    return rangeWithDots
  }

  if (totalPages <= 1) return null

  return (
    <div className="flex items-center justify-center py-6 bg-white dark:bg-white">
      <div className="flex items-center space-x-1">
        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="h-8 w-8 p-0 rounded-full border-gray-300 dark:border-gray-300 bg-white dark:bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          <ChevronLeft className="h-4 w-4 text-gray-700 dark:text-gray-700" />
        </Button>

        {getVisiblePages().map((page, index) => (
          <div key={index}>
            {page === '...' ? (
              <span className="px-2 py-1 text-sm text-gray-500 dark:text-gray-500">...</span>
            ) : (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onPageChange(page as number)}
                className={`h-8 w-8 p-0 rounded-full text-sm font-medium ${
                  currentPage === page 
                    ? 'bg-black dark:bg-black text-white dark:text-white hover:bg-gray-800 dark:hover:bg-gray-800' 
                    : 'text-gray-700 dark:text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-100 bg-transparent dark:bg-transparent'
                }`}
              >
                {page}
              </Button>
            )}
          </div>
        ))}

        <Button
          variant="outline"
          size="sm"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="h-8 w-8 p-0 rounded-full border-gray-300 dark:border-gray-300 bg-white dark:bg-white hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
        >
          <ChevronRight className="h-4 w-4 text-gray-700 dark:text-gray-700" />
        </Button>
      </div>
    </div>
  )
}