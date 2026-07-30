# Current State — KOM-FORT Bilvård

Living documentation of the codebase. Update this after every change set so context
is not lost between sessions. Written in English on purpose (easier for AI to parse).

Last updated: 2026-07-30 (later same-day update: pricing data + hero hex removal)

---

## Overview

Marketing website for **KOM-FORT Bilvård AB**, a car detailing business in Örebro,
Sweden (rekond / polering / lackskydd / biltvätt). Single-language site (Swedish UI
copy). Dark theme with a gold accent (`--color-gold: #C9A84C`).

## Tech stack

- **Next.js 16.2.6** (App Router, Turbopack) — note: this is a newer Next than common
  training data. Check `node_modules/next/dist/docs/` before using Next APIs. Notably
  `priority` on `<Image>` is **deprecated** in favor of `preload`.
- **React 19.2.4**
- **Tailwind CSS v4** (via `@tailwindcss/postcss`; theme tokens defined in
  `globals.css` under `@theme inline`)
- **motion** (`motion/react`) for scroll/entrance animations
- **resend** for transactional email from the contact form
- TypeScript, ESLint (`eslint-config-next`)

## Project structure

```
src/
  app/
    layout.tsx                 Root layout: fonts (Geist, Bebas Neue, Instrument Sans), <html lang="sv">
    globals.css                Tailwind import + theme tokens + hero text stroke-draw animation
                               + .bg-polished / .bg-polished-alt (gold-tinted radial glows for section depth)
                               + .section-divider (soft gold gradient hairline between sections)
                               + .grain / .grain-section / .grain-card (SVG turbulence noise system)
    actions.ts                 Server action: submitContact() — sends email via Resend
    sitemap.ts                 Generates /sitemap.xml from static pages + tjänster
    robots.ts                  Generates /robots.txt (blocks indexing until real domain set)
    (marketing)/
      layout.tsx               Navbar + Footer wrapper; site-wide metadata (title template, OG, metadataBase)
      page.tsx                 Home: <JsonLd LocalBusiness> + Hero + Tjanster + OmOss
      kontakt/page.tsx         Contact page (renders <Kontakt>)
      tjanster/page.tsx        Services listing — uses <ServiceCard> components
      tjanster/[slug]/page.tsx Per-service page: generateStaticParams + generateMetadata + Service/FAQ JSON-LD
  components/
    marketing/
      Hero.tsx                 PixelImage 2×2 grid, animated SVG headline, CTA buttons (hex background removed)
      Navbar.tsx               Fixed nav, scroll-aware; mobile menu is a full-screen overlay (solid bg, fade, body scroll-lock)
      Footer.tsx               4-column footer; dynamic copyright year; social links
      Tjanster.tsx             Services grid (3 + 2 cards) — renders <ServiceCard>; bg-polished-alt bg
      ServiceCard.tsx          Client card: standalone gold icon, mouse-following gold spotlight, hover lift + accent line
      tjanstIkoner.tsx         Inline SVG gold icons mapped by slug; no deps
      OmOss.tsx                About section + stats grid; bg-polished bg + faint HexagonPattern + section-divider
      Kontakt.tsx              Contact cards + form (useActionState) + Google Maps embed
      JsonLd.tsx               JSON-LD helpers: localBusinessSchema(), serviceSchema()
    ui/
      FadeIn.tsx               motion wrapper: fade+rise on whileInView (once, -80px margin)
      HexagonPattern.tsx       SVG hexagon tiling pattern (numbers normalized via fmt() to avoid hydration mismatch)
      PixelImage.tsx           Pixel-reveal grid effect component
  data/
    tjanster.ts                5 services with full copy, metaDesc, included[], why[], faq[], pricing{fromPrice, unit, note, addons[], popular}
  lib/
    site.ts                    Central config: base URL, business info, geo, social; hasRealDomain flag
  proxy.ts                     Portal-path auth redirect stub (PORTAL_PATHS -> /logga-in)
public/
  bilder/1-4.png               Hero images (1170x1450 portrait): dirty/clean rear + dirty/clean interior
  logo/kom-fort-logga.svg      Logo (renamed: no spaces in filename, crawlable)
  models/                      3D model assets
```

## Key components / behavior

### Hero (`Hero.tsx`)
- Right panel: crossfading image slideshow behind a `PixelImage` reveal overlay on load (no hex/glow background — removed).
- Left side: animated SVG stroke-draw headline, body copy, two CTA buttons.
- `PixelImage` component: `src/components/ui/PixelImage.tsx` — pixel-reveal grid effect.

### Section backgrounds / visual rhythm (home page)
- Home stacks Hero → Tjanster → OmOss. Sections are distinguished by **structure and light**.
- `Tjanster` uses `.bg-polished-alt`; its cards are rendered by `<ServiceCard>`.
- `OmOss` uses `.bg-polished`, plus a faint gold `HexagonPattern` (~4% opacity, radial
  mask fades toward edges) and a top `.section-divider` (soft gold hairline).

### Service cards (`Tjanster.tsx` + `ServiceCard.tsx` + `tjanstIkoner.tsx`)
- Used in two places: the home `Tjanster` section and the `/tjanster` listing page.
- Each card: standalone gold service icon (by slug), title, short desc, growing gold accent line, "Läs mer".
- Hover: card lifts, mouse-following gold spotlight (radial gradient via `--mx/--my` CSS vars,
  set imperatively on mousemove — no React re-render per move), gold accent line grows.
- **Restore point:** simpler pre-icon card design tagged `fore-tjanstekort` (commit 3960bbb).

### Pricing (`data/tjanster.ts` + `[slug]/page.tsx`)
- Each service has a `pricing` object: `fromPrice` (e.g. "2 495"), `unit` (default "kr"),
  optional `note`, optional `addons[]` ({label, price}), optional `popular` flag.
- Prices sourced from a WhatsApp price list (2026-07-27); mapped to closest-fit service —
  not 1:1 literal package names, so treat as approximate/"fr" (från) pricing, not a rigid quote engine.
- Rekonditionering is flagged `popular: true` → renders a "Populärast" gold ribbon on cards.
- Service detail page shows a gold-framed price badge in the hero + a "Grundpris & tillägg"
  section listing `addons` (only rendered if addons exist).
- Overview/home cards show a compact "Fr [price] kr" line (rendered inside `ServiceCard.tsx` —
  verify current `ServiceCard.tsx` includes this if pricing display seems missing after a refactor).

### Grain system (`globals.css`)

Three CSS utility classes using SVG turbulence noise via `::before` pseudo-element:
- `.grain` — strong (opacity 0.18), for gold primary buttons — brushed metal feel
- `.grain-section` — whisper-thin (opacity 0.06), for section backgrounds — cinematic film
- `.grain-card` — medium (opacity 0.10), for bordered cards and ghost buttons

Uses `mix-blend-mode: overlay` so it works on both dark surfaces and gold. Applied to:
- All gold `bg-gold` buttons (Navbar, Hero, OmOss, Kontakt, tjanster pages)
- Ghost/secondary border buttons (Hero, slug page)
- Section `<section>` elements (Hero, Kontakt)
- Stat cards (OmOss), contact cards (Kontakt)
- `::before` chosen deliberately to avoid conflict with Tailwind's `after:` hover slide utility
- Hidden for `prefers-reduced-motion` users

### Contact form (`actions.ts` + `Kontakt.tsx`)
- `submitContact` server action sends email via Resend.
- **Production safety:** if `RESEND_API_KEY` (or `CONTACT_FROM_EMAIL` in prod) is missing,
  it returns an error in production — never a fake "success" (would silently lose leads).
  In development it logs and returns success for convenience.
- Env vars (see `.env.example`): `RESEND_API_KEY`, `CONTACT_TO_EMAIL` (default
  Komfort802@gmail.com), `CONTACT_FROM_EMAIL` (required in prod, verified domain).

### SEO
- `sitemap.ts` + `robots.ts` generated from `lib/site.ts`.
- `robots.ts` returns `Disallow: /` while `hasRealDomain` is false (no
  `NEXT_PUBLIC_SITE_URL`) so the placeholder domain isn't indexed.
- JSON-LD: `AutoRepair`/LocalBusiness on home; `Service` + `FAQPage` per service page.
- Per-service metadata via `generateMetadata` (title uses layout's template, canonical, OG).

## Configuration to do before launch

- Set `NEXT_PUBLIC_SITE_URL` to the real domain (flips robots to allow indexing,
  fixes canonical/sitemap/OG URLs). Currently placeholder `https://komfort-bilvard.se`.
- Set `RESEND_API_KEY` and `CONTACT_FROM_EMAIL` (verified domain) in `.env.local`.
- Consider a real PNG/JPG logo for JSON-LD `image` (currently SVG; schema.org prefers raster).

## Known gaps / ideas (not yet built)

- Before/after drag slider (high impact for detailing — images already exist).
- Reviews / testimonials section (no social proof yet).
- Work gallery / portfolio.
- Contact CTA section on the home page (form currently only on /kontakt).
- Hero scroll indicator; count-up numbers in OmOss stats.

## Hygiene checklist (run after changes)

1. `npx tsc --noEmit` — typecheck
2. `npm run lint` — ESLint (project is currently lint-clean)
3. `npm run build` — catches metadata/sitemap/route errors
4. Verify visually (dev server runs on **port 3001**; port 3000 is the kalendersystem project)
5. Update this file
