# Iron Forge Gym

A dark industrial-themed gym demo website built with **Next.js 16** (App Router), **React 19**, **Tailwind CSS v4**, and **TypeScript 5**.

## Tech Stack

- **Next.js 16.2.10** — App Router, Turbopack, Static Generation
- **React 19.2.4** — Server & Client Components
- **Tailwind CSS v4** — `@theme` design tokens, custom utilities
- **TypeScript 5** — Strict mode
- **Material Symbols Outlined** — Google Fonts icon set

## Pages

| Route | Content |
|-------|---------|
| `/` | Home — Hero with CTAs, About section |
| `/programs` | 5 training programs (Strength, HIIT, Yoga, Cross, Combat) |
| `/trainers` | Trainer profiles (Marcus Thorne, Sarah Malik) |
| `/membership` | 3 pricing tiers (Basic $49, Standard $79, Premium $129) + FAQ |
| `/gallery` | Bento-grid image gallery with "Load More" toggle |
| `/contact` | Contact form + facility info panel + map placeholder |

## Design System

- **Theme**: Dark industrial — obsidian black (`#121317`), electric blue accent (`#3B82F6`)
- **Fonts**: Archivo Narrow (headlines/display), Inter (body/labels)
- Custom Tailwind tokens for colors, typography scale, spacing, and border radius

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run lint` | Run ESLint |
