'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect } from 'react'

// Extend Window interface to include dataLayer
declare global {
  interface Window {
    dataLayer: any[]
  }
}

export function GTMPageView() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Construct full URL with search params
      const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')
      
      // Push page view event to dataLayer
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({
        event: 'page_view',
        page_path: url,
        page_title: document.title,
        page_location: window.location.href
      })
    }
  }, [pathname, searchParams])

  return null
}
