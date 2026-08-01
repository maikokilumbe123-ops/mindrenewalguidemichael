# MindRenewalGuide Publications

A polished Swahili-language marketing site for MindRenewalGuide Publications, a Christian publisher combining biblical teaching with cognitive psychology. The site presents two digital books, a practical faith article, and direct WhatsApp/M-Pesa ordering.

## Technology

- TanStack Start and TanStack Router
- React 19 and TypeScript
- Tailwind CSS 4 with a custom editorial design system
- Lucide icons
- Netlify deployment through the TanStack Start adapter

## Local Development

Install dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

The application is available at `http://localhost:3000` by default. For Netlify platform emulation, use:

```bash
netlify dev --port 8889
```

## Project Structure

- `src/routes/index.tsx` — complete landing page content and book information
- `src/routes/__root.tsx` — document shell and SEO metadata
- `src/styles.css` — responsive visual system, animations, and book artwork
- `public/` — static assets such as the favicon
- `netlify.toml` — Netlify build and deployment configuration

## Ordering Flow

Purchase buttons open pre-filled WhatsApp conversations for the selected title. Payment instructions direct customers to the published M-Pesa number; no payment credentials or customer data are stored by the site.
