/**
 * Central plats för sajtens bas-URL och företagsuppgifter.
 * Sätt NEXT_PUBLIC_SITE_URL per miljö när den riktiga domänen är klar.
 */
const FALLBACK_URL = "https://komfort-bilvard.se";

/**
 * True när bas-URL:en kommer från en riktig env-variabel.
 * Är den false använder vi placeholder-domänen och ska INTE låta Google
 * indexera (fel canonical/sitemap), se robots.ts.
 */
export const hasRealDomain = Boolean(process.env.NEXT_PUBLIC_SITE_URL);

export const site = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? FALLBACK_URL,
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
