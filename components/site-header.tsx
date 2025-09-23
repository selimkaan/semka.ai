'use client'

import Link from 'next/link'
import { useTheme } from 'next-themes'
import { usePathname, useRouter } from 'next/navigation'
import { Moon, Sun, Search, Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { GlobalSearch } from '@/components/global-search'
import Image from 'next/image'

export function SiteHeader() {
  const { setTheme } = useTheme()
  const pathname = usePathname()
  const router = useRouter()
  
  // Function to check if a category is currently active
  const isCategoryActive = (categorySlug: string) => {
    const targetPath = `/yapay-zeka-araclari/${categorySlug}`
    return pathname === targetPath || pathname === `${targetPath}/`
  }

  // Handle search form submission
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const searchTerm = formData.get('search') as string
    if (searchTerm.trim()) {
      router.push(`/aramasonucu/${encodeURIComponent(searchTerm.trim())}`)
    }
  }

  return (
    <header className="w-full bg-white border-b border-gray-200">
      {/* Top Header */}
      <div className="border-b border-gray-200">
        <div className="px-10 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
                     <Image
                       src="/images/semka_logo_sinek_golgeli.png"
                       alt="Semka Logo"
                       width={40}
                       height={40}
                       className="rounded-lg"
                     />
              <span className="text-2xl font-semibold text-black tracking-tight">
                Semka
              </span>
            </Link>

            {/* Search Bar */}
            <div className="flex-1 max-w-md mx-8">
              <form onSubmit={handleSearch}>
                <div className="relative">
                  <Input
                    name="search"
                    placeholder="Yapay zeka ile ne yapmak istersin?"
                    className="pl-3 pr-12 py-1 border border-gray-200 rounded-md text-sm text-gray-500 placeholder:text-gray-500 bg-white dark:bg-white dark:text-gray-500 dark:border-gray-200 dark:placeholder:text-gray-500"
                  />
                  <button 
                    type="submit"
                    className="absolute right-0 top-0 h-full w-12 border-l border-gray-200 dark:border-gray-200 flex items-center justify-center hover:bg-[#0053E2] hover:text-white transition-colors bg-white dark:bg-white"
                  >
                    <Search className="h-4 w-4 text-gray-500 dark:text-gray-500" />
                  </button>
                </div>
              </form>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-6">
              <Link
                href="/use-cases"
                className="text-sm font-semibold text-black hover:text-primary transition-colors"
              >
                Kullanım Senaryoları
              </Link>
              <Link
                href="/about"
                className="text-sm font-semibold text-black hover:text-primary transition-colors"
              >
                Hakkımızda
              </Link>
              <Link
                href="/add-company"
                className="text-sm font-semibold text-black hover:text-primary transition-colors"
              >
                Şirketini Ekle
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Bar */}
      <div className="bg-white shadow-sm">
        <div className="px-10 py-0">
          <div className="flex items-end justify-center gap-4 overflow-x-auto scrollbar-hide">
            <Button
              variant="ghost"
              className={`h-12 px-2 text-sm font-normal text-black whitespace-nowrap flex-shrink-0 relative transition-colors ${
                isCategoryActive('agentlar') 
                  ? 'border-b-[3px] border-[#0053E2] rounded-none' 
                  : ''
              }`}
              asChild
            >
              <Link href="/yapay-zeka-araclari/agentlar">
                Agentlar
              </Link>
            </Button>
            <Button
              variant="ghost"
              className={`h-12 px-2 text-sm font-normal text-black whitespace-nowrap flex-shrink-0 relative transition-colors ${
                isCategoryActive('otomasyon') 
                  ? 'border-b-[3px] border-[#0053E2] rounded-none' 
                  : ''
              }`}
              asChild
            >
              <Link href="/yapay-zeka-araclari/otomasyon">
                Otomasyon
              </Link>
            </Button>
            <Button
              variant="ghost"
              className={`h-12 px-2 text-sm font-normal text-black whitespace-nowrap flex-shrink-0 relative transition-colors ${
                isCategoryActive('fotograf-video') 
                  ? 'border-b-[3px] border-[#0053E2] rounded-none' 
                  : ''
              }`}
              asChild
            >
              <Link href="/yapay-zeka-araclari/fotograf-video">
                Fotoğraf & Video
              </Link>
            </Button>
            <Button
              variant="ghost"
              className={`h-12 px-2 text-sm font-normal text-black whitespace-nowrap flex-shrink-0 relative transition-colors ${
                isCategoryActive('kurumsal') 
                  ? 'border-b-[3px] border-[#0053E2] rounded-none' 
                  : ''
              }`}
              asChild
            >
              <Link href="/yapay-zeka-araclari/kurumsal">
                Kurumsal
              </Link>
            </Button>
            <Button
              variant="ghost"
              className={`h-12 px-2 text-sm font-normal text-black whitespace-nowrap flex-shrink-0 relative transition-colors ${
                isCategoryActive('altyapi') 
                  ? 'border-b-[3px] border-[#0053E2] rounded-none' 
                  : ''
              }`}
              asChild
            >
              <Link href="/yapay-zeka-araclari/altyapi">
                Altyapı
              </Link>
            </Button>
            <Button
              variant="ghost"
              className={`h-12 px-2 text-sm font-normal text-black whitespace-nowrap flex-shrink-0 relative transition-colors ${
                isCategoryActive('verimlilik') 
                  ? 'border-b-[3px] border-[#0053E2] rounded-none' 
                  : ''
              }`}
              asChild
            >
              <Link href="/yapay-zeka-araclari/verimlilik">
                Verimlilik
              </Link>
            </Button>
            <Button
              variant="ghost"
              className={`h-12 px-2 text-sm font-normal text-black whitespace-nowrap flex-shrink-0 relative transition-colors ${
                isCategoryActive('veri') 
                  ? 'border-b-[3px] border-[#0053E2] rounded-none' 
                  : ''
              }`}
              asChild
            >
              <Link href="/yapay-zeka-araclari/veri">
                Veri
              </Link>
            </Button>
            <Button
              variant="ghost"
              className={`h-12 px-2 text-sm font-normal text-black whitespace-nowrap flex-shrink-0 relative transition-colors ${
                isCategoryActive('sosyal-medya') 
                  ? 'border-b-[3px] border-[#0053E2] rounded-none' 
                  : ''
              }`}
              asChild
            >
              <Link href="/yapay-zeka-araclari/sosyal-medya">
                Sosyal Medya
              </Link>
            </Button>
            <Button
              variant="ghost"
              className={`h-12 px-2 text-sm font-normal text-black whitespace-nowrap flex-shrink-0 relative transition-colors ${
                isCategoryActive('ses') 
                  ? 'border-b-[3px] border-[#0053E2] rounded-none' 
                  : ''
              }`}
              asChild
            >
              <Link href="/yapay-zeka-araclari/ses">
                Ses
              </Link>
            </Button>
            <Button
              variant="ghost"
              className={`h-12 px-2 text-sm font-normal text-black whitespace-nowrap flex-shrink-0 relative transition-colors ${
                isCategoryActive('sohbet-botu') 
                  ? 'border-b-[3px] border-[#0053E2] rounded-none' 
                  : ''
              }`}
              asChild
            >
              <Link href="/yapay-zeka-araclari/sohbet-botu">
                Sohbet Botu
              </Link>
            </Button>
            <Button
              variant="ghost"
              className={`h-12 px-2 text-sm font-normal text-black whitespace-nowrap flex-shrink-0 relative transition-colors ${
                isCategoryActive('yazilim-araclari') 
                  ? 'border-b-[3px] border-[#0053E2] rounded-none' 
                  : ''
              }`}
              asChild
            >
              <Link href="/yapay-zeka-araclari/yazilim-araclari">
                Yazılım Araçları
              </Link>
            </Button>
            <Button
              variant="ghost"
              className={`h-12 px-2 text-sm font-normal text-black whitespace-nowrap flex-shrink-0 relative transition-colors ${
                isCategoryActive('kodsuz-yazilim') 
                  ? 'border-b-[3px] border-[#0053E2] rounded-none' 
                  : ''
              }`}
              asChild
            >
              <Link href="/yapay-zeka-araclari/kodsuz-yazilim">
                Kodsuz Yazılım
              </Link>
            </Button>
            <Button
              variant="ghost"
              className={`h-12 px-2 text-sm font-normal text-black whitespace-nowrap flex-shrink-0 relative transition-colors ${
                isCategoryActive('tasarim') 
                  ? 'border-b-[3px] border-[#0053E2] rounded-none' 
                  : ''
              }`}
              asChild
            >
              <Link href="/yapay-zeka-araclari/tasarim">
                Tasarım
              </Link>
            </Button>
            <Button
              variant="ghost"
              className={`h-12 px-2 text-sm font-normal text-black whitespace-nowrap flex-shrink-0 relative transition-colors ${
                isCategoryActive('akademi') 
                  ? 'border-b-[3px] border-[#0053E2] rounded-none' 
                  : ''
              }`}
              asChild
            >
              <Link href="/yapay-zeka-araclari/akademi">
                Akademi
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="lg:hidden border-t border-gray-200">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="sm" className="w-full rounded-none">
              <Menu className="h-5 w-5 mr-2" />
              Menü
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px]">
            <SheetHeader>
              <SheetTitle>Semka Menü</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col space-y-4 mt-6">
              <Link
                href="/use-cases"
                className="text-lg font-medium transition-colors hover:text-primary"
              >
                Kullanım Senaryoları
              </Link>
              <Link
                href="/about"
                className="text-lg font-medium transition-colors hover:text-primary"
              >
                Hakkımızda
              </Link>
              <Link
                href="/add-company"
                className="text-lg font-medium transition-colors hover:text-primary"
              >
                Şirketini Ekle
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
