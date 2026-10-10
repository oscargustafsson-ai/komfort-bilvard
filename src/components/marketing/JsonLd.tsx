import { site } from "@/lib/site";
import type { Tjanst } from "@/data/tjanster";

/** Stabilt @id för företaget. Tjänste- och områdesschemat pekar hit via provider. */
export const FORETAG_ID = `${site.url}/#foretag`;

/** Renderar ett JSON-LD-script. Objektet serialiseras säkert till sidan. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify räcker; ingen användardata går in i schemat.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/**
 * Företagsschemat (AutoWash). Ligger i layouten, en gång per sida.
 * Innehåll enligt sidregler.md. openingHoursSpecification läggs till först
 * när öppettiderna är bekräftade i fakta.md. Aldrig aggregateRating.
 */
export function foretagSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoWash",
    "@id": FORETAG_ID,
    name: site.name,
    url: site.url,
    logo: `${site.url}/logo/kom-fort-logga.svg`,
    image: `${site.url}/bilder/1.png`,
    telephone: site.phone,
    email: site.email,
    foundingDate: site.foundingDate,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: site.geo.lat, longitude: site.geo.lng },
    areaServed: [
      { "@type": "City", name: "Örebro" },
      { "@type": "City", name: "Kumla" },
      { "@type": "City", name: "Hallsberg" },
    ],
    sameAs: [...site.social],
  };
}

/** BreadcrumbList. items i ordning, sista är sidan själv. */
export function brodsmulorSchema(items: { namn: string; href: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.namn,
      item: `${site.url}${it.href === "/" ? "" : it.href}`,
    })),
  };
}

/** FAQPage för de synliga frågorna på sidan. */
export function faqSchema(fragor: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: fragor.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Service-schema för en stadsdelssida. */
export function omradeSchema(o: { namn: string; slug: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Bilvård i ${o.namn}`,
    serviceType: "Bilvård",
    areaServed: { "@type": "Place", name: `${o.namn}, Örebro` },
    provider: { "@id": FORETAG_ID },
    url: `${site.url}/omraden/${o.slug}`,
  };
}

/** Service- + FAQPage-schema för en enskild tjänstesida. */
export function serviceSchema(t: Tjanst) {
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${t.title} i Örebro`,
    description: t.metaDesc,
    serviceType: t.title,
    areaServed: { "@type": "City", name: "Örebro" },
    provider: { "@id": FORETAG_ID },
    url: `${site.url}/tjanster/${t.slug}`,
    offers: {
      "@type": "Offer",
      priceCurrency: "SEK",
      price: t.pricing.fromPrice.replace(/\s/g, ""),
      url: `${site.url}/tjanster/${t.slug}`,
    },
  };

  return [service, faqSchema(t.faq)];
}
