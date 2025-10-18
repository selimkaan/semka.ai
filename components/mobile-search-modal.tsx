'use client'

import { useState, useEffect, useRef } from 'react'
import { Search, X } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface MobileSearchModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileSearchModal({ isOpen, onClose }: MobileSearchModalProps) {
  const [searchTerm, setSearchTerm] = useState('')
  const [keyboardOpen, setKeyboardOpen] = useState(false)
  const router = useRouter()
  const inputRef = useRef<HTMLInputElement>(null)

  // Focus input when modal opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  // Handle keyboard open/close detection
  useEffect(() => {
    if (!isOpen) return

    const handleResize = () => {
      // Detect if keyboard is open by checking viewport height
      const initialHeight = window.innerHeight
      const currentHeight = window.visualViewport?.height || window.innerHeight
      
      // If viewport height is significantly smaller, keyboard is likely open
      setKeyboardOpen(currentHeight < initialHeight * 0.75)
    }

    // Listen for viewport changes (keyboard open/close)
    if (window.visualViewport) {
      window.visualViewport.addEventListener('resize', handleResize)
    } else {
      window.addEventListener('resize', handleResize)
    }

    return () => {
      if (window.visualViewport) {
        window.visualViewport.removeEventListener('resize', handleResize)
      } else {
        window.removeEventListener('resize', handleResize)
      }
    }
  }, [isOpen])

  // Handle search submission
  const handleSearch = () => {
    if (searchTerm.trim()) {
      router.push(`/aramasonucu/${encodeURIComponent(searchTerm.trim())}`)
      onClose()
      setSearchTerm('')
    }
  }

  // Handle Enter key
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  // Handle Escape key
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose()
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 lg:hidden bg-white">
      {/* Full-screen modal */}
      <div 
        className="flex flex-col transition-all duration-300 ease-in-out"
        style={{ 
          height: keyboardOpen 
            ? `${window.visualViewport?.height || window.innerHeight}px` 
            : '100vh' 
        }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 p-4 border-b border-gray-200 bg-white">
          <Search className="h-5 w-5 text-gray-500" />
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
            onKeyDown={handleKeyDown}
            placeholder="Yapay zeka aracı ara..."
            className="flex-1 text-base outline-none placeholder-gray-500 bg-transparent"
            autoComplete="off"
          />
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded transition-colors"
          >
            <X className="h-5 w-5 text-gray-500" />
          </button>
        </div>
        
        {/* Spacer */}
        <div className="flex-1" />
        
        {/* Bottom Search Button */}
        <div className="p-4 bg-white border-t border-gray-100">
          <button
            onClick={handleSearch}
            disabled={!searchTerm.trim()}
            className="w-full bg-[#0053E2] text-white py-4 px-4 rounded-lg font-medium disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors text-lg"
          >
            Ara
          </button>
        </div>
      </div>
    </div>
  )
}
