# Current State — KOM-FORT Bilvård

Living documentation of the codebase. Update this after every change set so context
is not lost between sessions. Written in English on purpose (easier for AI to parse).

Last updated: 2026-06-24

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
    actions.ts                 Server action: submitContact() — sends email via Resend
    sitemap.ts                 Generates /sitemap.xml from static pages + tjänster
    robots.ts                  Generates /robots.txt (blocks indexing until real domain set)
    (marketing)/
      layout.tsx               Navbar + Footer wrapper; site-wide metadata (title template, OG, metadataBase)
      page.tsx                 Home: <JsonLd LocalBusiness> + Hero + Tjanster + OmOss
      kontakt/page.tsx         Contact page (renders <Kontakt>)
      tjanster/page.tsx        Services listing
      tjanster/[slug]/page.tsx Per-service page: generateStaticParams + generateMetadata + Service/FAQ JSON-LD
  components/
    marketing/
      Hero.tsx                 Image slideshow hero (see below)
      HeroHexBackground.tsx    Interactive hexagon grid behind hero text (mouse glow)
      Navbar.tsx               Fixed nav, scroll-aware; mobile menu is a full-screen overlay (solid bg, fade, body scroll-lock)
      Footer.tsx               4-column footer; dynamic copyright year; social links
      Tjanster.tsx             Services grid (3 + 2 cards) from data/tjanster
      OmOss.tsx                About section + stats grid
      Kontakt.tsx              Contact cards + form (useActionState) + Google Maps embed
      JsonLd.tsx               JSON-LD helpers: localBusinessSchema(), serviceSchema()
    ui/
      FadeIn.tsx               motion wrapper: fade+rise on whileInView (once, -80px margin)
      HexagonPattern.tsx       SVG hexagon tiling pattern (numbers normalized via fmt() to avoid hydration mismatch)
  data/
    tjanster.ts                5 services with full copy, metaDesc, included[], why[], faq[]
  lib/
    site.ts                    Central config: base URL, business info, geo, social; hasRealDomain flag
  proxy.ts                     Portal-path auth redirect stub (PORTAL_PATHS -> /logga-in)
public/
  bilder/1-4.png               Hero slideshow images (1170x1450 portrait): dirty/clean rear + dirty/clean interior
  logo/kom-fort-logga.svg      Logo (renamed: no spaces in filename, crawlable)
```

## Key components / behavior

### Hero (`Hero.tsx` + `HeroHexBackground.tsx`)
- Right side: image slideshow in natural proportion (container `w-[72%]`, wider than the
  visible field so the left edge fades into black with no hard seam). Crossfade only on
  opacity (GPU-composited). 5s interval, 1.2s fade.
- Slide order: `1.png` (dirty rear) → `2.png` (clean rear) → `3.png` (dirty interior)
  → `4.png` (clean interior). Pair transitions (1→2, 3→4) crossfade; scene cuts
  (2→3, 4→1) dip through black to avoid double-exposure ghosting.
- All four images mounted permanently (no `src` swap mid-animation).
- Left side: black field with a subtle hexagon grid. Mouse movement is tracked on the
  whole `<section>` (not just the hex layer) so the gold glow follows the cursor even
  behind the text; the glow only lights up in the black field, not over the car.
- First image uses `preload` (Next 16 replaced `priority`).

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
