# WALORA Timepieces

A luxury single-page website for WALORA Timepieces by Abdullah — a premium watch brand with a dark, gold-accented aesthetic inspired by world-class horology brands.

## Run & Operate

- `pnpm --filter @workspace/walora run dev` — run the WALORA frontend (Vite)
- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, Tailwind CSS, framer-motion
- API: Express 5 (minimal, no DB for this site)
- Fonts: Cormorant Garamond (headings), Montserrat (body)

## Where things live

- `artifacts/walora/` — the WALORA luxury website
- `artifacts/walora/src/pages/` — page components
- `attached_assets/` — brand logo files (W icon + full WALORA TIMEPIECES logo)

## Product

A rich, single-page luxury watch brand website featuring:
- Cinematic 2.5-second welcome splash with the WALORA logo
- Full-viewport hero with "View Available Timepieces" CTA
- Available Timepieces section with 4 watch collections
- Brand story, craftsmanship pillars, heritage, testimonials
- Contact/enquiry form
- Dark obsidian + champagne gold theme throughout

## User preferences

- Dark theme, elegant and professional (Rolex-level quality)
- Gold accent color (#C9A84C)
- No emojis in the UI

## Gotchas

- Logo assets imported via `@assets/` alias pointing to `attached_assets/`
- Google Fonts @import must be the VERY FIRST line in index.css
- The `@assets` alias is configured in `vite.config.ts`
