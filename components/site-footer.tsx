import Link from 'next/link'
import Image from 'next/image'
import { X, Linkedin, Instagram } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-9 py-8">
        <div className="flex flex-col items-center gap-8">
          {/* Main Footer Content */}
          <div className="flex items-start justify-between w-full max-w-6xl">
            {/* Left Side - Company Info */}
            <div className="flex flex-col gap-8">
              {/* Logo and Tagline */}
              <div className="flex items-center gap-1">
                <Image
                  src="/images/poker.png"
                  alt="Semka Logo"
                  width={40}
                  height={40}
                  className="rounded-lg"
                />
                <span className="text-2xl font-semibold text-black tracking-tight">
                  Semka
                </span>
              </div>
              <p className="text-sm font-medium text-black">
                Geleceğin çalışma alanı.
              </p>
              <p className="text-sm text-black">
                merhaba@semka.ai
              </p>
              
              {/* Social Media Links */}
              <div className="flex items-center gap-4">
                <Link href="#" className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <X className="h-3 w-3 text-gray-800" />
                </Link>
                <Link href="#" className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Linkedin className="h-3 w-3 text-gray-800" />
                </Link>
                <Link href="#" className="p-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  <Instagram className="h-3 w-3 text-gray-800" />
                </Link>
              </div>
            </div>

            {/* Right Side - Navigation */}
            <div className="flex flex-col gap-8">
              <Link href="/about" className="text-sm font-medium text-black hover:text-primary transition-colors">
                Hakkımızda
              </Link>
              <Link href="/use-cases" className="text-sm font-medium text-black hover:text-primary transition-colors">
                Kullanım Senaryoları
              </Link>
              <Link href="/add-company" className="text-sm font-medium text-black hover:text-primary transition-colors">
                Şirketini ekle
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-sm font-medium text-black">
              ©Semka A.Ş. Tüm hakları saklıdır
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
