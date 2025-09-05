export interface Agent {
  id: string
  slug: string
  name: string
  description: string
  shortDescription: string
  description_tr?: string
  pricing: 'Free' | 'Freemium' | 'Paid' | 'Enterprise'
  price?: string
  models: string[]
  languages: string[]
  categories: string[]
  rating: number
  icon: string
  cover: string
  tags: string[]
  provider: string
  providerUrl: string
  features: string[]
  useCases: string[]
  createdAt: string
  updatedAt: string
}

export interface Category {
  id: string
  slug: string
  name: string
  description: string
  icon: string
  color: string
  agentCount: number
}

export interface UseCase {
  id: string
  slug: string
  name: string
  description: string
  icon: string
  color: string
  agentCount: number
}
