/**
 * Central plats för sajtens bas-URL och företagsuppgifter.
 *
 * Skarp domän är www.komfortbil.se. NEXT_PUBLIC_SITE_URL behöver bara sättas
 * när en miljö ska använda en annan adress (t.ex. en förhandsvisning).
 */
const FALLBACK_URL = "https://www.komfortbil.se";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL?.trim() || FALLBACK_URL;

/**
 * True när bas-URL:en pekar på en riktig, publik domän.
 *
 * Tidigare krävdes att NEXT_PUBLIC_SITE_URL var satt, eftersom fallbacken var
 * en påhittad placeholder-domän. Nu är fallbacken den skarpa domänen, så det
 * som avgör är i stället att adressen inte är en förhandsvisning (*.vercel.app)
 * eller lokal utveckling — där ska Google aldrig indexera. Se robots.ts.
 */
export const hasRealDomain =
  !SITE_URL.includes("localhost") && !SITE_URL.includes(".vercel.app");

export const site = {
  url: SITE_URL,
  name: "KOM-FORT Bilvård AB",
  phone: "+46761943519",
  phoneDisplay: "076-194 35 19",
  email: "Komfort802@gmail.com",
  address: {
    street: "Lindtorpsvägen 10",
    postalCode: "702 37",
    city: "Örebro",
    country: "SE",
  },
  geo: { lat: 59.2274, lng: 15.2066 },
  social: [
    "https://www.instagram.com/komfort_bilvard",
    "https://www.facebook.com/people/KOM-fort-Bilvård-AB/61581563706114/",
  ],
} as const;

/**
 * Presentkort via Zettle.
 *
 * Göran aktiverar presentkort i Zettle och skickar sin betallänk. Tills dess
 * är länken tom och sidan visar i stället ett beställningsformulär som mejlar
 * förfrågan till honom (han skapar då presentkortet manuellt i Zettle).
 *
 * NÄR LÄNKEN FINNS: sätt NEXT_PUBLIC_ZETTLE_GIFTCARD_URL i miljövariablerna
 * (Vercel → Settings → Environment Variables) så byter sidan automatiskt till
 * att skicka kunden direkt till Zettle. Ingen kodändring behövs.
 */
const ZETTLE_URL_RAW = process.env.NEXT_PUBLIC_ZETTLE_GIFTCARD_URL?.trim();

/** Bara https-länkar accepteras — skyddar mot felklistrad/osäker konfiguration. */
export const zettleGiftCardUrl =
  ZETTLE_URL_RAW && ZETTLE_URL_RAW.startsWith("https://") ? ZETTLE_URL_RAW : null;

/** True när Zettle-länken är konfigurerad och kunden kan betala direkt. */
export const hasZettleGiftCard = zettleGiftCardUrl !== null;

/** Förvalda belopp på presentkortssidan (kunden kan även ange eget belopp). */
export const giftCardAmounts = [500, 1000, 1500, 2000] as const;

/** Gränser för eget belopp, i kronor. */
export const giftCardLimits = { min: 200, max: 10000 } as const;

/**
 * Värdnamn som ska visa presentkortssidan i stället för startsidan.
 *
 * Sätts via NEXT_PUBLIC_GIFTCARD_HOST, t.ex. "presentkort.komfortbil.se".
 * Peka subdomänen till samma Vercel-projekt (Vercel → Settings → Domains) och
 * sätt variabeln — proxy.ts serverar då /presentkort på subdomänens rot.
 *
 * Flera värdar anges kommaseparerat. `localhost`-varianten finns med så att
 * upplägget går att testa lokalt utan DNS.
 */
export const giftCardHosts: string[] = (process.env.NEXT_PUBLIC_GIFTCARD_HOST ?? "")
  .split(",")
  .map((h) => h.trim().toLowerCase())
  .filter(Boolean);

/** True när en presentkorts-subdomän är konfigurerad. */
export const hasGiftCardHost = giftCardHosts.length > 0;
