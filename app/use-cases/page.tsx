import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'
import useCasesData from '@/data/usecases.json'
import { UseCase } from '@/types/agent'

export const metadata: Metadata = {
  title: 'AI Use Cases - Find Tools for Your Specific Needs',
  description: 'Explore AI use cases and find the perfect tools for content creation, image generation, code development, and more.',
}

export default function UseCasesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">
          AI Use Cases
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Find the perfect AI tools for your specific needs and projects. From content creation to code development, 
          we've organized tools by their primary use cases.
        </p>
      </div>

      <Separator className="my-8" />

      {/* Use Cases Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {useCasesData.map((useCase) => (
          <Card key={useCase.id} className="group hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex items-center space-x-3">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-2xl">
                  {useCase.icon}
                </div>
                <div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {useCase.name}
                  </CardTitle>
                  <CardDescription className="text-sm">
                    {useCase.agentCount} tools available
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="mb-4 text-sm text-muted-foreground leading-relaxed">
                {useCase.description}
              </p>
              <div className="flex items-center justify-between">
                <Badge variant="outline" className="text-xs">
                  {useCase.agentCount} tools
                </Badge>
                <Button variant="ghost" size="sm" asChild>
                  <Link href={`/agents?useCase=${useCase.slug}`}>
                    Browse Tools
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA Section */}
      <Separator className="my-12" />
      <div className="text-center">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">
          Can't find what you're looking for?
        </h2>
        <p className="text-muted-foreground mb-6">
          Browse all our AI tools and agents to discover new possibilities
        </p>
        <div className="flex gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/agents">Browse All Agents</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/categories">Explore Categories</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
