# AGENTS.md

## Project Overview

MindRenewalGuide Publications is a Swahili-language editorial landing page for Christian digital books. It combines book promotion, an educational article, and direct WhatsApp ordering in one responsive experience.

## Architecture

The project uses TanStack Start with file-based routing and deploys to Netlify through the official Vite adapter. The current product is intentionally a single-page site and does not use a database, server functions, authentication, or an embedded checkout.

## Key Directories

- `src/routes/` — TanStack Router pages and the root document shell
- `src/styles.css` — global design tokens, layouts, responsive rules, and animation
- `public/` — static browser assets
- `.netlify/` — Netlify-generated task metadata; do not treat it as application source

## Important Files

- `src/routes/index.tsx` owns page copy, book data, article steps, WhatsApp links, and semantic sections.
- `src/routes/__root.tsx` owns HTML language, metadata, global styles, and scripts.
- `src/styles.css` implements the custom editorial design and CSS-rendered book covers.
- `netlify.toml` configures the Netlify build and publish behavior.

## Coding Conventions

- Use TypeScript and functional React components.
- Keep route-level content in the relevant route unless a reusable component is needed in more than one place.
- Use semantic HTML and preserve visible keyboard focus states.
- Define recurring colors and visual constants as CSS custom properties.
- Keep layouts responsive at desktop, tablet, and mobile breakpoints.
- Use Lucide icons rather than emoji or manually drawn interface icons.
- Preserve Swahili copy and correctly encoded WhatsApp messages.

## Non-Obvious Decisions

The book covers are CSS compositions rather than external image files. This keeps the page self-contained, avoids broken asset links, and allows the artwork to respond cleanly across screen sizes. Ordering remains on WhatsApp because the supplied business flow uses M-Pesa confirmation rather than an on-site payment processor.

## Commands

- `pnpm dev` starts the local Vite server.
- `netlify dev --port 8889` runs with Netlify emulation.
- `pnpm build` creates the production build.
