# KOM-FORT Bilvård – webbplats

Marknadssajt för **KOM-FORT Bilvård AB**, bilvårdsfirma i Örebro (rekonditionering,
polering, lackskydd, biltvätt, invändig rekond). Skarp domän är
[www.komfortbil.se](https://www.komfortbil.se). Presentkortssidan serveras dessutom på
egen subdomän, `presentkort.komfortbil.se`.

Byggd med Next.js 16 (App Router, Turbopack), React 19, Tailwind CSS v4, `motion` för
animationer och Resend för mejl från formulären. Deployas på Vercel.

> **Obs för AI-assistenter och nya utvecklare:** Next.js-versionen är nyare än det mesta
> träningsmaterial. Läs `node_modules/next/dist/docs/` innan du rör Next-API:er (se `AGENTS.md`).

## Kom igång

```bash
npm ci          # installera beroenden från lockfilen
npm run dev     # startar på http://localhost:3000
```

Är port 3000 upptagen: `npx next dev -p 3001`.

Kopiera `.env.example` till `.env.local` och fyll i det som behövs (se nedan). Utan
`RESEND_API_KEY` loggar formulären bara till konsolen i utveckling och svarar "skickat".
I produktion ger saknad konfiguration ett fel i stället för en falsk bekräftelse.

## Miljövariabler

| Variabel | Krävs | Vad den gör |
| --- | --- | --- |
| `RESEND_API_KEY` | I produktion | API-nyckel för Resend (kontakt- och presentkortsformulär). |
| `CONTACT_FROM_EMAIL` | I produktion | Avsändare, verifierad domän i Resend. |
| `CONTACT_TO_EMAIL` | Nej | Mottagare av förfrågningar. Default `Komfort802@gmail.com`. |
| `NEXT_PUBLIC_ZETTLE_GIFTCARD_URL` | Nej | Zettle-betallänk. Tom: beställningsformulär. Satt: köpknapp rakt till Zettle. |
| `NEXT_PUBLIC_GIFTCARD_HOST` | Nej | Värdnamn som serverar presentkortssidan på sin rot, t.ex. `presentkort.komfortbil.se`. |
| `NEXT_PUBLIC_SITE_URL` | Nej | Bas-URL. Fallback är `https://www.komfortbil.se`; sätt bara för en avvikande miljö. |

Kommentarer till varje variabel finns i `.env.example`.

## Struktur i korthet

```
src/app/(marketing)/   Sidor: start, /tjanster, /tjanster/[slug], /presentkort, /kontakt
src/app/actions.ts     Server actions: submitContact, submitGiftCard (mejl via Resend)
src/app/sitemap.ts     /sitemap.xml – genereras från src/lib/site.ts och tjänsterna
src/app/robots.ts      /robots.txt – blockerar bara localhost och *.vercel.app-previews
src/components/        marketing/ (sektioner och sidor) och ui/ (FadeIn, PixelImage, HexagonPattern)
src/data/tjanster.ts   De fem tjänsterna med copy, FAQ och priser
src/lib/site.ts        Central config: bas-URL, företagsuppgifter, presentkortsinställningar
src/proxy.ts           Presentkorts-subdomän (rewrite/redirect) + stub för framtida portal-auth
public/                Hero-bilder (bilder/), logga (logo/) och foton (images/)
docs/current_state.md  Levande dokumentation av kodbasen – läs den först
```

## Innan du pushar

Kör hygienchecklistan (samma som i `docs/current_state.md`):

```bash
npx tsc --noEmit   # typecheck
npm run lint       # ESLint
npm run build      # fångar metadata-, sitemap- och route-fel
```

Verifiera visuellt med `npm run dev` och uppdatera `docs/current_state.md` när du har ändrat något.
