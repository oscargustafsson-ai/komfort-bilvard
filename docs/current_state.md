# Current State — KOM-FORT Bilvård

Living documentation of the codebase. Update this after every change set so context
is not lost between sessions. Written in English on purpose (easier for AI to parse).

Last updated: 2026-10-16 (Batch 05: three more service subpages, /om-oss and /integritetspolicy, map loads only after a click, privacy line under the forms, menu and footer links)

---

## SEO page build (from 2026-10-10)

Pages are now built in batches from a separate work-order folder (`kom-fort-sidbygge`,
outside this repo). The copy there is the single source of truth; do not rewrite copy here.

- **Copy lives in data files, not JSX:** `src/data/startsida.ts` (home) and
  `src/data/omraden.ts` (hub `/omraden` + district pages `/omraden/[slug]`). Paragraphs are
  plain strings with markdown links `[text](/path)`, rendered by `components/marketing/Stycke.tsx`.
- **Metadata:** every page goes through `sidMetadata()` in `src/lib/metadata.ts` (exact title,
  description, self-referencing canonical, og:url, default og:image `/bilder/1.png`). The
  `title.template` in the marketing layout was removed on purpose: titles are exact.
- **Schema:** `foretagSchema()` (AutoWash, `@id` `https://www.komfortbil.se/#foretag`) is
  rendered once per page from `(marketing)/layout.tsx`. Service and district schemas point at it
  via `provider.@id`. District pages: BreadcrumbList + Service + FAQPage. Home: FAQPage.
  `openingHoursSpecification` since batch 03 (hours confirmed), never `aggregateRating`.
- **Shared blocks:** `Karta.tsx` (Google Maps embed, src/link in `site.karta`), `Brodsmulor.tsx`
  (visible breadcrumbs + BreadcrumbList), `Etikett.tsx` (eyebrow label, dash drawn with CSS),
  `Sidblock.tsx` (text grids, highlighted block, "Hitta till oss" with map, FAQ, button row).
- **Name form:** "KOM-fort Bilvård AB" everywhere in text, titles and schema (was KOM-FORT /
  Kom-Fort). The logo image is unchanged.
- **No en/em dashes** (U+2013/U+2014) in visible text on built pages, buttons or shared
  components; only "-". The service data (`tjanster.ts`) still has some in copy that is
  scheduled to be rewritten in later batches.
- **Sitemap:** `sitemap.ts` has a `senastAndrad` map for per-page lastModified; bump the dates
  for pages a batch touches.
- Root layout carries the Google Search Console `verification.google` tag.
- Menu: "Områden" (/omraden) added to navbar (desktop + mobile) and footer.
- **Batch 05:** new subpages motortvatt and asfalt-och-flygrost (under biltvatt) and
  infor-bilforsaljning (under rekonditionering), all in `undersidor.ts`. New pages `/om-oss`
  (`data/omoss.ts`) and `/integritetspolicy` (`data/integritetspolicy.ts`, paragraphs + bullet
  lists, single column, no map/FAQ/buttons). `Karta.tsx` is now a client component that only
  sets the iframe `src` after the visitor clicks "Visa kartan" (`data-src` holds the URL; no
  consent is stored). Menu and footer "Om oss" go to /om-oss (never /#om); the footer bottom row
  links to /integritetspolicy; the forms on /kontakt, /boka and /presentkort show
  "Läs i vår integritetspolicy ...". On /boka the pickup checkbox is hidden for the two hand
  washes, the interior wash and strålkastarpolering (`UTAN_HAMTNING`). `globals.css` lets long
  words in h1-h3 wrap (`overflow-wrap: break-word`, `hyphens: auto` below 640px).
- **Service subpages (batch 04):** service pages without a card live in `src/data/undersidor.ts`
  (`foralder` marks a subpage, e.g. polering/repborttagning). `src/data/tjanstsidor.ts` joins
  them with the five card services for routes and the sitemap. The template is
  `components/marketing/TjanstSidaMall.tsx`, used by `tjanster/[slug]/page.tsx` (three-level
  breadcrumbs) and `tjanster/[slug]/[under]/page.tsx` (four levels). `pricing` is optional (no
  hero price box on Repborttagning); `sidPriser[...]` keys use the path ("polering/repborttagning")
  and may set `fotnot` (null = no footnote). New bookable services on /boka: Kemtvätt av säten
  (per number of seats), Strålkastarpolering, Glasförsegling 2 år (+ bakruta). Hämtning has
  prices in `priser.ts` but is booked with the checkbox on /boka.
- **Kemtvätt and add-ons (batch 03b):** `KEMTVATT_TILLAGG` (four seats, 1 000 kr) is an add-on on
  helrekond and invändig rekond, selectable on /boka. `KEMTVATT_PER_SATE` (250 kr) is only a
  price-list row (customers write single seats in the message). "Lätt polering" no longer
  exists; the only exclusive add-on group left is `lackskydd`. Copy now says the interior is
  cleaned (steam machine when needed), the headliner is only wiped, lackskydd replaces the
  wax after polishing, and the coating cures 12 h in the shop and at least a week before the
  first wash.
- **Service pages (batch 03):** every service in `tjanster.ts` now has `sida` (title, h1, intro,
  section headings, price text, FAQ heading, booking block); `tjanster/[slug]/page.tsx` has one
  template only (`TjanstSida`). The old layout and `pricing.listaText` are gone. Invändig rekond
  has a one-row price list from `sidPriser`.
- **Gift card page (batch 03):** copy in `src/data/presentkort.ts`; `presentkort/page.tsx` renders
  breadcrumbs, h1, intro, Zettle note, "Så beställer du" + the three step boxes, then `<Presentkort>`
  (amount picker + order form + thank-you only), text blocks, map and FAQ (FAQPage JSON-LD).
- **Opening hours (batch 03, confirmed 2026-10-14):** footer line "Mån-fre 08-16, lör 10-18, sön
  stängt" on every page and `openingHoursSpecification` (Mon-Fri 08:00-16:00, Sat 10:00-18:00) in
  `foretagSchema()`. Sunday is omitted.
- **Phone number (batch 02c):** 076-035 38 08 / tel:0760353808 / +46760353808, defined once in
  `src/lib/site.ts` (phoneDisplay, phoneHref, phone) and written out in copy. The old number
  must not reappear anywhere (`grep -r "194 35 19"` and `"761943519"` must be empty).
- **Forms (batch 02c):** Kontakt, Bokning and Presentkort submit through `onSubmit` +
  `startTransition(() => action(formData))` instead of `<form action>`, because React 19 resets
  an action-driven form after the server responds, even on validation errors. Keep that pattern
  for any new form.
- **Lackskydd is an add-on:** `pricing.prefix` ("Tillägg fr") and `pricing.listaText` on the
  lackskydd service drive the card label, the hero price box and the paragraph above its price
  list. Other services use the default "Fr".
- **Prices (batch 02b):** every price lives in `src/data/priser.ts` (customer price list
  2026-10-11). Service cards, hero price boxes, the price lists on service pages (`sidPriser`)
  and the booking page read from it. `beraknaPris()` is the single calculator, used both in the
  browser (price picker) and on the server (`submitBooking` recomputes the sum, never trusting
  the client). No prices in JSON-LD.
- **Booking page `/boka`:** copy in `src/data/boka.ts`, picker + form in
  `components/marketing/Bokning.tsx` (client), server action `submitBooking` in `actions.ts`
  (same Resend flow as the contact form; subject "Ny bokningsförfrågan från <namn>", replyTo
  the customer's email when given). It is a request that KOM-fort confirms: no payment, no
  calendar. Exclusive add-on groups: lätt polering/1-stegspolering, lackskydd 2/3/5 år.
- **Navbar:** desktop menu from `lg` (1024px) with "Boka" last; the gold button says
  "Ring 076-035 38 08"; below `lg` a phone icon link (aria-label) sits next to the burger.
- **Hero:** decorative three-line headline ("Ge din bil / nykänslan / tillbaka.") + subtitle,
  the h1 stays "Bilvård Örebro". Primary button "Boka din behandling" goes to /boka.
- **Service pages (batch 02):** `tjanster/[slug]/page.tsx` has two layouts. If a service in
  `tjanster.ts` has a `sida` object (new format, copy verbatim from a page package) it renders
  `NyTjanstSida` (breadcrumbs, exact H1/H2s, text sections, map, FAQ, booking block). Otherwise
  it renders `GammalTjanstSida`, the previous look. Rekonditionering ("Bilrekond") is on the new
  layout; polering, lackskydd, biltvatt and invandig-rekond stay on the old one until batch 03.
  `serviceSchema()` no longer emits `offers` (from-prices must not appear as fixed prices).
- **Contact page:** copy in `src/data/kontakt.ts`; `Kontakt.tsx` is now only the contact cards +
  form (client component). The page composes hero, cards/form, text blocks, map, FAQ.
- **Services hub:** copy in `src/data/tjansterSida.ts`; the five `ServiceCard`s stay, and the
  card title is a `<p>` (not h3) so heading order on / and /tjanster is H1 then H2.
- Home: the real `<h1>` ("Bilvård Örebro") is visible text in the hero; the animated SVG headline
  is decorative (`aria-hidden`). The "Våra tjänster" heading in `Tjanster.tsx` is a `<p>` so that
  the home page's h2 set matches the page package exactly. On phones the hero image panel is
  dimmed (`opacity-35 md:opacity-100`) so the longer intro text stays readable.

## Overview

Marketing website for **KOM-FORT Bilvård AB**, a car detailing business in Örebro,
Sweden (rekond / polering / lackskydd / biltvätt). Single-language site (Swedish UI
copy). Dark theme with a gold accent (`--color-gold: #C9A84C`).

## Tech stack

- **Next.js 16.3.8** (App Router, Turbopack) — note: this is a newer Next than common
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
    actions.ts                 Server actions: submitContact(), submitBooking(), submitGiftCard(); email via Resend
    sitemap.ts                 Generates /sitemap.xml from static pages + tjänster
    robots.ts                  Generates /robots.txt (Disallow: / only on localhost / *.vercel.app, see SEO)
    (marketing)/
      layout.tsx               Navbar + Footer wrapper; metadataBase, og defaults, company JSON-LD (no title template)
      page.tsx                 Home: Hero (h1 + intro) + Tjanster + text sections + OmOss + map + FAQ (copy from data/startsida.ts)
      omraden/page.tsx         Districts hub (/omraden), copy from data/omraden.ts
      omraden/[slug]/page.tsx  District page: BreadcrumbList + Service + FAQPage JSON-LD
      kontakt/page.tsx         Contact page: hero + <Kontakt> (cards/form) + text blocks + map + FAQ (copy from data/kontakt.ts)
      boka/page.tsx            Booking page: hero + <Bokning> + text + map (copy from data/boka.ts)
      om-oss/page.tsx          About page (copy from data/omoss.ts)
      integritetspolicy/page.tsx Privacy policy (copy from data/integritetspolicy.ts)
      presentkort/page.tsx     Gift card page: hero + "Så beställer du" + steps + <Presentkort> (form) + text + map + FAQ (copy from data/presentkort.ts)
      tjanster/page.tsx        Services hub: H1 + intro + <ServiceCard>s + text sections + map + FAQ (copy from data/tjansterSida.ts)
      tjanster/[slug]/page.tsx Service page (TjanstSidaMall) for services directly under /tjanster
      tjanster/[slug]/[under]/page.tsx Service subpage (TjanstSidaMall), e.g. /tjanster/polering/repborttagning
  components/
    marketing/
      Hero.tsx                 PixelImage 2×2 grid, animated SVG headline, CTA buttons (hex background removed)
      Navbar.tsx               Fixed nav, scroll-aware; mobile menu is a full-screen overlay (solid bg, fade, body scroll-lock)
      Footer.tsx               4-column footer; dynamic copyright year; social links
      Tjanster.tsx             Services grid (3 + 2 cards) — renders <ServiceCard>; bg-polished-alt bg
      ServiceCard.tsx          Client card: standalone gold icon, mouse-following gold spotlight, hover lift + accent line
      tjanstIkoner.tsx         Inline SVG gold icons mapped by slug; no deps
      OmOss.tsx                About section + stats grid; bg-polished bg + faint HexagonPattern + section-divider
      Kontakt.tsx              Contact cards + form (useActionState); map and copy live in the page
      Bokning.tsx              /boka price picker + booking form (client), prices from data/priser.ts
      Presentkort.tsx          Gift cards: amount picker + Zettle link OR order form (see below);
                               HexagonPattern bg at gold/[0.03] — same as OmOss but fainter (0.04)
      JsonLd.tsx               JSON-LD helpers: foretagSchema() (AutoWash), serviceSchema(), omradeSchema(), faqSchema(), brodsmulorSchema()
      Karta.tsx                Shared Google Maps embed, loads only after "Visa kartan" is clicked (client component)
      Brodsmulor.tsx           Breadcrumbs (visible + BreadcrumbList)
      Stycke.tsx               Renders copy strings with [text](/path) links as <Link>
      Etikett.tsx              Eyebrow label (CSS dash)
      Sidblock.tsx             Shared page blocks: text grid, highlighted block, Hitta-till-oss + map, FAQ, buttons
    ui/
      FadeIn.tsx               motion wrapper: fade+rise on whileInView (once, -80px margin)
      HexagonPattern.tsx       SVG hexagon tiling pattern (numbers normalized via fmt() to avoid hydration mismatch)
      PixelImage.tsx           Grid fade-in image reveal. Uses next/image + deterministic scatter(index)
                               instead of Math.random, and fmt() rounding — all three were needed to
                               keep it lint-clean and free of hydration mismatch.
  data/
    priser.ts                  All prices (one source) + beraknaPris() calculator + sidPriser (price lists per service page)
    boka.ts                    Booking page copy
    presentkort.ts             Gift card page copy
    undersidor.ts              Service pages without a card (hämtning, repborttagning, kemtvätt, strålkastarpolering, glasförsegling)
    tjanstsidor.ts             All service pages joined, lookups by slug / parent+slug
    tjanster.ts                5 services with copy, metaDesc, included[], why[], faq[], pricing{fromPrice from priser.ts, note, popular}, optional sida{}
    kontakt.ts                 Contact page copy
    tjansterSida.ts            Services hub copy
    startsida.ts               Home page copy (verbatim from the work-order batch file)
    omraden.ts                 /omraden hub + district pages copy
  lib/
    site.ts                    Central config: base URL, business info, geo, social; hasRealDomain flag
  proxy.ts                     Portal-path auth redirect stub (PORTAL_PATHS -> /logga-in)
public/
  bilder/1-4.png               Hero images (1170x1450 portrait): dirty/clean rear + dirty/clean interior
  logo/kom-fort-logga.svg      Logo (renamed: no spaces in filename, crawlable)
  images/IMG_0857-0877.jpg     17 photos from the initial skeleton commit. Not referenced by any
                               component yet; only allow-listed as static assets in proxy.ts.
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

### Pricing (`data/priser.ts`)
- Customer price list from 2026-10-11. `tjanstpriser[]` holds each service with price per car
  size or step, optional size surcharge (polering, komplett paket) and add-ons; `sidPriser`
  derives the from-price and the price list shown on each service page.
- Cards show "Fr <lowest price> kr"; the hero box shows the from-price plus `pricing.note`.
- Prices are from-prices: never written in body copy, never in JSON-LD.
- Rekonditionering ("Bilrekond") is flagged `popular: true` (gold "Populärast" ribbon).

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
- **Status (2026-10-08): not live yet.** DNS already resolves the subdomain to Vercel's
  IPs, but it is not added to the Vercel project's Domains and `NEXT_PUBLIC_GIFTCARD_HOST`
  is not confirmed set. To finish: add `presentkort.komfortbil.se` in Vercel (Settings →
  Domains), set `NEXT_PUBLIC_GIFTCARD_HOST=presentkort.komfortbil.se`, redeploy.
- Testable locally: `NEXT_PUBLIC_GIFTCARD_HOST=presentkort.localhost npx next dev -p 3001`
  then open `http://presentkort.localhost:3001/`.

### SEO
- `sitemap.ts` + `robots.ts` generated from `lib/site.ts` (static pages incl. `/presentkort`).
- `robots.ts` returns `Disallow: /` while `hasRealDomain` is false. That flag now
  means "the base URL is not a preview/localhost address" — the fallback is the real
  domain, so production indexes correctly even without `NEXT_PUBLIC_SITE_URL` set.
- JSON-LD: `AutoWash` company schema in the marketing layout (every page); `Service` + `FAQPage` per service page; BreadcrumbList + Service + FAQPage per district page; FAQPage on home.
- Per-service metadata via `generateMetadata` (title uses layout's template, canonical, OG).

## Domains

- **Real domain: `komfortbil.se`**, live on Vercel since 2026-10-08. `www.komfortbil.se`
  is the canonical host; the apex 308-redirects to it. Before that date the domain was only
  parked at one.com.
- **DNS:** nameservers are Vercel's (`ns1/ns2.vercel-dns.com`, moved from one.com), so
  records are managed in Vercel's DNS panel (Domains → komfortbil.se), not at one.com.
  Whether the DNS zone sits under the `oscargus` account has not been verified.
- **Hosting:** Vercel project `komfort-bilvard` (account `oscargus`, Hobby) builds from
  `main` of `oscargustafsson-ai/komfort-bilvard`; every push to `main` is published on
  `www.komfortbil.se`. Attached domains: `komfortbil.se` (308 → www), `www.komfortbil.se`
  (production), `komfort-bilvard-eight.vercel.app`.
- `presentkort.komfortbil.se` → intended for the gift card page, not live yet (see the
  subdomain section above).
- `komfort-bilvard.se` was never registered — it was only a placeholder in the code
  and has been removed. Do not reintroduce it.

## Configuration to do before launch

- ~~Set `NEXT_PUBLIC_SITE_URL`~~ — done differently: the fallback in `lib/site.ts` is
  now the real domain `https://www.komfortbil.se`, so canonical/sitemap/robots are correct
  out of the box. Only set the variable for a non-standard environment.
- Set `RESEND_API_KEY` and `CONTACT_FROM_EMAIL` (domain verified in Resend) in `.env.local`
  and for the live site in Vercel → Settings → Environment Variables. Not confirmed set in
  Vercel as of 2026-10-08: test the contact form on www.komfortbil.se (in production a
  missing config returns an error, by design).
- Consider a real PNG/JPG logo for JSON-LD `image` (currently SVG; schema.org prefers raster).
- **Gift cards:** when Göran sends his Zettle link, set `NEXT_PUBLIC_ZETTLE_GIFTCARD_URL`
  (Vercel → Settings → Environment Variables) and redeploy. Nothing else to change.
- **Gift card subdomain:** not live yet, see the subdomain section (add the domain in
  Vercel + set `NEXT_PUBLIC_GIFTCARD_HOST`). The page's canonical URL points at
  `/presentkort` on the main domain (intended SEO target).

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
