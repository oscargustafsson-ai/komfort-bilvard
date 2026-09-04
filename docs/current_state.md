# Current State — KOM-FORT Bilvård

Living documentation of the codebase. Update this after every change set so context
is not lost between sessions. Written in English on purpose (easier for AI to parse).

Last updated: 2026-09-02 (gift cards / Zettle, PixelImage fixes, gift-card subdomain)

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
    actions.ts                 Server actions: submitContact(), submitGiftCard() — email via Resend
    sitemap.ts                 Generates /sitemap.xml from static pages + tjänster
    robots.ts                  Generates /robots.txt (blocks indexing until real domain set)
    (marketing)/
      layout.tsx               Navbar + Footer wrapper; site-wide metadata (title template, OG, metadataBase)
      page.tsx                 Home: <JsonLd LocalBusiness> + Hero + Tjanster + OmOss
      kontakt/page.tsx         Contact page (renders <Kontakt>)
      presentkort/page.tsx     Gift card page (renders <Presentkort>)
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
      Presentkort.tsx          Gift cards: amount picker + Zettle link OR order form (see below);
                               HexagonPattern bg at gold/[0.03] — same as OmOss but fainter (0.04)
      JsonLd.tsx               JSON-LD helpers: localBusinessSchema(), serviceSchema()
    ui/
      FadeIn.tsx               motion wrapper: fade+rise on whileInView (once, -80px margin)
      HexagonPattern.tsx       SVG hexagon tiling pattern (numbers normalized via fmt() to avoid hydration mismatch)
      PixelImage.tsx           Grid fade-in image reveal. Uses next/image + deterministic scatter(index)
                               instead of Math.random, and fmt() rounding — all three were needed to
                               keep it lint-clean and free of hydration mismatch.
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

### Gift cards (`Presentkort.tsx` + `lib/site.ts` + `actions.ts`)

Built for a Zettle payment link that **does not exist yet** — Göran must first
enable gift cards in Zettle and send his link. The page is built around that
link so adding it later is a one-line config change, no code edits.

- **Single switch:** `NEXT_PUBLIC_ZETTLE_GIFTCARD_URL` in `lib/site.ts`.
  - **Unset (current state):** page shows an order form. `submitGiftCard` emails
    the order to Göran, who creates the gift card in Zettle manually (~30s of work).
  - **Set:** page instead renders a "Köp presentkort" button straight to Zettle.
  - Only `https://` URLs are accepted; anything else is treated as unset.
- Amounts: `giftCardAmounts` (500/1000/1500/2000) as preset buttons + a free-amount
  field bounded by `giftCardLimits` (200–10000 kr). Free amount wins when filled.
- Amount is re-validated server-side (integer, within limits) — client state is not trusted.
- Order email sets `replyTo` to the buyer so Göran can answer directly.
- Same production-safety rule as the contact form: never a fake "success" in prod.
- **Trust copy:** Zettle is named in four places (badge under the intro, step 03, the line
  under the submit button, and the confirmation) so customers know who handles payment.
  If Göran ever takes payment by Swish/cash instead, this copy must change.

### Gift card subdomain (`proxy.ts` + `lib/site.ts`)

The gift card page can be served as its own subdomain while staying in this
codebase — one deploy, one design system, no duplicated navbar/footer.

- **Config:** `NEXT_PUBLIC_GIFTCARD_HOST` (comma-separated hostnames), e.g.
  `presentkort.komfortbil.se`. Point the subdomain at this same Vercel
  project (Settings → Domains) and set the variable.
- **Behaviour on that host:**
  - `/` → **rewrite** to `/presentkort`, so the address bar stays on the
    subdomain root. That short URL is the point of the whole setup.
  - Static assets (`/logo/`, `/bilder/`, `/images/`, anything with a file
    extension) are served normally — without this the page loses its own logo.
  - Every other path → **redirect** to the main site, including `/presentkort`
    itself, so the same content never lives at two addresses (duplicate content).
- **Live:** `presentkort.komfortbil.se` is configured in Vercel and serving.
- Testable locally: `NEXT_PUBLIC_GIFTCARD_HOST=presentkort.localhost npx next dev -p 3001`
  then open `http://presentkort.localhost:3001/`.

### SEO
- `sitemap.ts` + `robots.ts` generated from `lib/site.ts` (static pages incl. `/presentkort`).
- `robots.ts` returns `Disallow: /` while `hasRealDomain` is false. That flag now
  means "the base URL is not a preview/localhost address" — the fallback is the real
  domain, so production indexes correctly even without `NEXT_PUBLIC_SITE_URL` set.
- JSON-LD: `AutoRepair`/LocalBusiness on home; `Service` + `FAQPage` per service page.
- Per-service metadata via `generateMetadata` (title uses layout's template, canonical, OG).

## Domains

- **Real domain: `komfortbil.se`** (Vercel nameservers). `www.komfortbil.se` is the
  canonical host; the apex 308-redirects to it.
- `presentkort.komfortbil.se` → gift card page (see subdomain section above).
- `komfort-bilvard.se` was never registered — it was only a placeholder in the code
  and has been removed. Do not reintroduce it.

## Configuration to do before launch

- ~~Set `NEXT_PUBLIC_SITE_URL`~~ — done differently: the fallback in `lib/site.ts` is
  now the real domain `https://www.komfortbil.se`, so canonical/sitemap/robots are correct
  out of the box. Only set the variable for a non-standard environment.
- Set `RESEND_API_KEY` and `CONTACT_FROM_EMAIL` (verified domain) in `.env.local`.
- Consider a real PNG/JPG logo for JSON-LD `image` (currently SVG; schema.org prefers raster).
- **Gift cards:** when Göran sends his Zettle link, set `NEXT_PUBLIC_ZETTLE_GIFTCARD_URL`
  (Vercel → Settings → Environment Variables) and redeploy. Nothing else to change.
- ~~Gift card subdomain~~ — done: `presentkort.komfortbil.se` is live. The page's
  canonical URL still points at `/presentkort` on the main domain (intended SEO target).

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
4. Verify visually — `npm run dev`. Prefer **port 3001** (`npx next dev -p 3001`) if the
   kalendersystem project is running on 3000; otherwise 3000 is fine.
5. Update this file
