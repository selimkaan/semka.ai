import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Yapay Zeka Kullanım Senaryoları - Yakında',
  description: 'Yapay zekayı nasıl kullanabileceğinize dair içerikler çok yakında geliyor.',
}

export default function UseCasesPage() {
  return (
    <div className="container mx-auto px-4 py-8 min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
          Yapay zekayı nasıl kullanabileceğinize dair içerikler çok yakında geliyor.
        </h1>
      </div>
    </div>
  )
}
