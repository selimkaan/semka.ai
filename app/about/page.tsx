import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Star, Users, Zap, Shield, Globe, Heart } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Semka - Discover the Best AI Tools and Agents',
  description: 'Learn about Semka, our mission to help you find and compare the best AI tools, and how we curate our collection.',
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">
          About Semka
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          We're on a mission to help you discover, compare, and choose the perfect AI tools for your needs. 
          Our curated collection brings together the best AI agents, platforms, and tools in one place.
        </p>
      </div>

      {/* Mission Section */}
      <div className="mb-12">
        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground mb-4">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              The AI landscape is vast and constantly evolving. With new tools launching every day, 
              it can be overwhelming to find the right solution for your specific needs. That's where we come in.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We curate, review, and organize AI tools so you can make informed decisions. Whether you're a developer, 
              content creator, business owner, or just curious about AI, we help you navigate the options.
            </p>
          </div>
          <div className="bg-muted/30 rounded-lg p-8 text-center">
            <div className="text-6xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold mb-2">Empowering AI Adoption</h3>
            <p className="text-muted-foreground">
              Making AI accessible to everyone through curated discovery
            </p>
          </div>
        </div>
      </div>

      <Separator className="my-12" />

      {/* What We Do */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8 text-center">
          What We Do
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Curate & Review</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We carefully select and review AI tools to ensure quality and relevance for our users.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Community Driven</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Our platform grows with user feedback and community recommendations.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto mb-4 h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>Stay Updated</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We continuously update our collection with the latest AI tools and platforms.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Separator className="my-12" />

      {/* Our Values */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8 text-center">
          Our Values
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Quality First</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We prioritize quality over quantity, ensuring every tool in our collection meets high standards.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Inclusive</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We believe AI should be accessible to everyone, regardless of technical background or budget.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>User-Centric</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Everything we do is designed with our users in mind, from discovery to decision-making.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <CardTitle>Innovation</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                We embrace the rapid pace of AI innovation and help our users stay ahead of the curve.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <Separator className="my-12" />

      {/* Stats */}
      <div className="mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-foreground mb-8 text-center">
          Platform Statistics
        </h2>
        <div className="grid gap-6 md:grid-cols-4 text-center">
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">20+</div>
            <div className="text-sm text-muted-foreground">AI Tools</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">12</div>
            <div className="text-sm text-muted-foreground">Categories</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">12</div>
            <div className="text-sm text-muted-foreground">Use Cases</div>
          </div>
          <div className="space-y-2">
            <div className="text-3xl font-bold text-primary">Growing</div>
            <div className="text-sm text-muted-foreground">Daily</div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center bg-muted/30 rounded-lg p-8">
        <h2 className="text-2xl font-bold tracking-tight text-foreground mb-4">
          Ready to Discover Amazing AI Tools?
        </h2>
        <p className="text-muted-foreground mb-6">
          Start exploring our curated collection of AI agents and find the perfect tools for your needs.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="/agents"
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            Browse All Agents
          </a>
          <a
            href="/use-cases"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            Explore Use Cases
          </a>
        </div>
      </div>
    </div>
  )
}
