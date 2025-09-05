'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from '@/components/ui/command'
import { Search } from 'lucide-react'
import agentsData from '@/data/agents.json'
import categoriesData from '@/data/categories.json'
import useCasesData from '@/data/usecases.json'
import { Agent, Category, UseCase } from '@/types/agent'

export function GlobalSearch() {
  const [open, setOpen] = useState(false)
  const [search, setSearch] = useState('')
  const router = useRouter()

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }

    document.addEventListener('keydown', down)
    return () => document.removeEventListener('keydown', down)
  }, [])

  const handleSelect = (type: string, slug: string) => {
    setOpen(false)
    setSearch('')
    
    switch (type) {
      case 'agent':
        router.push(`/agents/${slug}`)
        break
      case 'category':
        router.push(`/categories/${slug}`)
        break
      case 'usecase':
        router.push(`/agents?useCase=${slug}`)
        break
    }
  }

  // Filter data based on search
  const filteredAgents = agentsData.filter(agent =>
    agent.name.toLowerCase().includes(search.toLowerCase()) ||
    agent.description.toLowerCase().includes(search.toLowerCase()) ||
    agent.categories.some(cat => cat.toLowerCase().includes(search.toLowerCase()))
  ).slice(0, 5) as Agent[]

  const filteredCategories = categoriesData.filter(category =>
    category.name.toLowerCase().includes(search.toLowerCase()) ||
    category.description.toLowerCase().includes(search.toLowerCase())
  ).slice(0, 3) as Category[]

  const filteredUseCases = useCasesData.filter(useCase =>
    useCase.name.toLowerCase().includes(search.toLowerCase()) ||
    useCase.description.toLowerCase().includes(search.toLowerCase())
  ).slice(0, 3) as UseCase[]

  const hasResults = filteredAgents.length > 0 || filteredCategories.length > 0 || filteredUseCases.length > 0

  return (
    <>
      <Button
        variant="outline"
        className="w-full justify-start text-sm text-muted-foreground"
        onClick={() => setOpen(true)}
      >
        <Search className="mr-2 h-4 w-4" />
        Search AI tools...
        <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Search AI tools, categories, and use cases..."
          value={search}
          onValueChange={setSearch}
        />
        <CommandList>
          {!hasResults && search && (
            <CommandEmpty>No results found.</CommandEmpty>
          )}
          
          {filteredAgents.length > 0 && (
            <CommandGroup heading="AI Agents">
              {filteredAgents.map((agent) => (
                <CommandItem
                  key={agent.id}
                  onSelect={() => handleSelect('agent', agent.slug)}
                  className="cursor-pointer"
                >
                  <div className="flex items-center space-x-3 w-full">
                    <div className="h-8 w-8 rounded bg-muted flex items-center justify-center">
                      <span className="text-sm">🤖</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-medium">{agent.name}</div>
                      <div className="text-sm text-muted-foreground truncate">
                        {agent.shortDescription}
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {agent.provider}
                    </div>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          )}

          {filteredCategories.length > 0 && (
            <>
              {filteredAgents.length > 0 && <CommandSeparator />}
              <CommandGroup heading="Categories">
                {filteredCategories.map((category) => (
                  <CommandItem
                    key={category.id}
                    onSelect={() => handleSelect('category', category.slug)}
                    className="cursor-pointer"
                  >
                    <div className="flex items-center space-x-3 w-full">
                      <div className="h-8 w-8 rounded bg-primary/10 flex items-center justify-center text-lg">
                        {category.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium">{category.name}</div>
                        <div className="text-sm text-muted-foreground truncate">
                          {category.description}
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {category.agentCount} tools
                      </div>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </>
          )}

          {filteredUseCases.length > 0 && (
            <>
              {(filteredAgents.length > 0 || filteredCategories.length > 0) && <CommandSeparator />}
              <CommandGroup heading="Use Cases">
                {filteredUseCases.map((useCase) => (
                  <CommandItem
                    key={useCase.id}
                    onSelect={() => handleSelect('usecase', useCase.slug)}
                    className="cursor-pointer"
                  >
                    <div className="flex items-center space-x-3 w-full">
                      <div className="h-8 w-8 rounded bg-primary/10 flex items-center justify-center text-lg">
                        {useCase.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium">{useCase.name}</div>
                        <div className="text-sm text-muted-foreground truncate">
                          {useCase.description}
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {useCase.agentCount} tools
                      </div>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            </>
          )}

          {!search && (
            <CommandGroup heading="Quick Actions">
              <CommandItem onSelect={() => router.push('/agents')}>
                <Search className="mr-2 h-4 w-4" />
                Browse all agents
              </CommandItem>
              <CommandItem onSelect={() => router.push('/use-cases')}>
                <Search className="mr-2 h-4 w-4" />
                Explore use cases
              </CommandItem>
              <CommandItem onSelect={() => router.push('/categories')}>
                <Search className="mr-2 h-4 w-4" />
                View categories
              </CommandItem>
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </>
  )
}
