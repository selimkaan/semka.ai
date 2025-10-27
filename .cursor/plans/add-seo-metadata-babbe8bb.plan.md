<!-- babbe8bb-ce80-4d37-b031-4bc2c9b776ea 25631053-9227-430f-ba94-08e97c195cad -->
# Add SEO Metadata to AI Detail and Category Pages

## Overview

Convert AI detail pages to server components with dynamic metadata generation and add SEO metadata to category pages. This will make pages properly indexed by Google with Turkish titles like "[Tool name] nedir" and "[Tool name] nasıl kullanılır".

## Changes Required

### 1. AI Detail Page (`app/yapay-zeka/[slug]/page.tsx`)

**Current State:**

- Client component with `'use client'`
- No SEO metadata (title, description empty in source)
- Data fetched client-side with `useEffect`

**Target State:**

- Server component with `generateMetadata` function
- Dynamic titles: `{tool.name} nedir | {tool.name} nasıl kullanılır | Semka`
- Dynamic descriptions using `description_tr` from tool data
- Open Graph tags for social sharing
- Interactive parts extracted to client components

**Key Files:**

- `app/yapay-zeka/[slug]/page.tsx` - Main page (convert to server component)
- New: `components/ai-detail-client.tsx` - Client-side interactive elements

### 2. Category Pages (`app/categories/[slug]/page.tsx` and `app/yapay-zeka-araclari/[slug]/page.tsx`)

**Current State:**

- Client component, no metadata
- Category names mapped from slugs

**Target State:**

- Server component with `generateMetadata`
- Titles: `{Category Name} Yapay Zeka Araçları | Semka`
- Descriptions: Use existing subtitle mappings from `getCategorySubtitle`

**Key Files:**

- `app/categories/[slug]/page.tsx` - Convert to server component
- `app/yapay-zeka-araclari/[slug]/page.tsx` - Convert to server component

## Implementation Approach

### Phase 1: AI Detail Page

1. Create `generateMetadata` function using `getAIProductBySlug`
2. Convert main component to async server component
3. Extract client interactions (buttons, navigation, modals) to separate client component
4. Pass server-fetched data as props to client component
5. Add Open Graph and Twitter meta tags

### Phase 2: Category Pages  

1. Add `generateMetadata` function with category mapping
2. Keep existing filtering logic in client components
3. Add proper meta descriptions based on category

## Technical Details

**Metadata Format for AI Tools:**

```typescript
title: `${agent.name} nedir | ${agent.name} nasıl kullanılır | Semka`
description: agent.description_tr || agent.overview_tr || default text
```

**Metadata Format for Categories:**

```typescript
title: `${categoryTitle} Yapay Zeka Araçları | Semka`
description: getCategorySubtitle(slug)
```

## Files Modified

- `app/yapay-zeka/[slug]/page.tsx` (server component)
- `app/categories/[slug]/page.tsx` (add metadata)
- `app/yapay-zeka-araclari/[slug]/page.tsx` (add metadata)
- `components/ai-detail-client.tsx` (new - client interactions)

### To-dos

- [ ] Convert AI detail page to server component with generateMetadata function
- [ ] Extract interactive elements to client component for AI detail page
- [ ] Add generateMetadata to categories/[slug]/page.tsx
- [ ] Add generateMetadata to yapay-zeka-araclari/[slug]/page.tsx
- [ ] Verify metadata appears in page source for search engines