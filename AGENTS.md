<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

<!-- BEGIN:responsive-plan -->
# Responsive Implementation Plan

## Project Overview
- **Iron Forge** — gym demo website built with Next.js 16 (App Router), React 19, Tailwind CSS v4, TypeScript 5
- Dark industrial theme: obsidian black background, electric blue (#3B82F6) accent
- Fonts: Archivo Narrow (headlines/display), Inter (body/labels)
- Material Symbols Outlined for icons (loaded via Google Fonts `<link>` in layout)

## Design Tokens (globals.css @theme)
- `--text-display-lg: 72px` / line-height 1.1
- `--text-headline-lg: 48px` / line-height 1.2
- `--text-headline-lg-mobile: 32px` / line-height 1.2
- `--text-headline-md: 24px` / line-height 1.3
- `--text-body-lg: 18px` / line-height 1.6
- `--text-body-md: 16px` / line-height 1.5
- `--text-label-bold: 14px` / line-height 1.2
- Spacing: `--spacing-margin-mobile: 16px`, `--spacing-margin-desktop: 48px`
- Section gaps: `--spacing-section-gap-sm: 80px`, `--spacing-section-gap-lg: 120px`
- Container: `--spacing-container-max: 1280px`, gutter: `--spacing-gutter: 24px`
- Radius: `--radius-DEFAULT: 0.125rem`, `--radius-lg: 0.25rem`, `--radius-xl: 0.5rem`, `--radius-full: 0.75rem`

## Responsive Plan (6 Phases)

### Phase 1: Missing CSS Utilities (globals.css)
Add definitions for: `glow-hover`, `electric-glow-hover`, `electric-glow`, `input-dark`, `text-shadow-strong`

### Phase 2: Mobile Hamburger Menu (Header.tsx)
- Convert to `"use client"` component
- Add hamburger button visible below `md` breakpoint (right-aligned via 3-column grid)
- Right-side drawer with nav links + Contact button (slides in via `translate-x`), dark overlay behind it
- "IRON FORGE" text has `whitespace-nowrap` to stay on one line
- Desktop layout unchanged (nav centered)

### Phase 3: Responsive Typography (6 hero files + membership/page.tsx)
- All hero `<h1>`s: `text-headline-lg-mobile md:text-display-lg`
- Membership price tags: `text-headline-md md:text-headline-lg`
- Membership FAQ heading: `text-headline-lg-mobile md:text-headline-lg`

### Phase 4: Responsive Hero Heights (7 files)
- Home hero: `h-[400px] sm:h-[500px] md:h-[600px]`
- Sub-page heroes: `h-[350px] sm:h-[420px] md:h-[500px]`
- About image: `h-[300px] md:h-[450px] lg:h-[600px]`

### Phase 5: About Section Mobile Image (About.tsx)
- Remove `hidden lg:block`, show image on all breakpoints
- Adjust grid gap: `gap-8 lg:gap-16`

### Phase 6: Bug Fixes
- `/memberships` → `/membership` (programs/page.tsx:149)
- `ProgramHero` → `TrainersHero` (TrainersHero.tsx:2)
- `trainers` → `Trainers` (trainers/page.tsx:4)
- `ClassNamees` → `Classes` (membership/page.tsx:63)
- Removed unused `ChangeEvent` import (contact/page.tsx)

### Phase 7: Post-Review Mobile Refinements
- Landing page hero CTAs: `flex-col sm:flex-row` → `flex-row flex-wrap` so buttons stay side by side on mobile
- Membership hero text: added `pt-16 md:pt-0` to keep content below fixed header
- Header nav drawer: changed from slide-down panel to right-side drawer with overlay
- Header logo text: added `whitespace-nowrap` to prevent "IRON FORGE" wrapping

### Phase 8: Final Header & Hero Polish
- Header: `backdrop-blur` isolated to an inner `<div>` so the `<nav>` doesn't become a containing block for its `fixed` overlay/drawer children
- Header mobile layout: uses `flex` (not grid) so hamburger sits at far right edge
- Drawer background: solid `bg-obsidian-black` instead of semi-transparent `bg-background/95` (avoids backdrop-blur issues)
- Hero: `h-[400px]` → `min-h-[500px]` so content never overflows on small screens
- Hero typography: layered breakpoints `text-3xl sm:text-headline-lg-mobile md:text-display-lg` for smooth scaling
- Hero CTAs: `flex-nowrap` + `whitespace-nowrap` with responsive padding/font (`text-xs sm:text-base`, `px-4 sm:px-8`, `py-3 sm:py-4`)

## Files Modified
1. `AGENTS.md` — added responsive plan
2. `app/globals.css` — added missing utility classes
3. `app/components/Header.tsx` — mobile hamburger menu (right-side drawer)
4. `app/components/Hero.tsx` — responsive height + typography + side-by-side CTAs
5. `app/components/About.tsx` — mobile image + responsive height + grid gap
6. `app/trainers/components/TrainersHero.tsx` — responsive height + typography + rename
7. `app/gallery/components/GalleryHero.tsx` — responsive height
8. `app/membership/components/MembershipHero.tsx` — responsive height + typography + top padding
9. `app/contact/components/ContactHero.tsx` — responsive height + typography fix
10. `app/programs/components/ProgramHero.tsx` — responsive height
11. `app/membership/page.tsx` — responsive price/heading typography + typo fix
12. `app/programs/page.tsx` — fix `/memberships` link
13. `app/contact/page.tsx` — removed unused `ChangeEvent` import

## Commands
- `npm run dev` — start dev server
- `npm run build` — production build
- `npm run lint` — eslint
<!-- END:responsive-plan -->
