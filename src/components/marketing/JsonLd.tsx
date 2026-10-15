import { site } from "@/lib/site";
import { tjanstPath, type Tjanst } from "@/data/tjanster";

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
 * Innehåll enligt sidregler.md. openingHoursSpecification sedan batch 03
 * (öppettiderna bekräftade 2026-10-14). Aldrig aggregateRating.
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
    // Öppettider bekräftade 2026-10-14 (fakta.md). Söndag stängt, utelämnas.
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "08:00", closes: "16:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "10:00", closes: "18:00" },
    ],
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

/** [text](/sökväg) blir bara text i JSON-LD. På sidan finns länken kvar. */
const utanLankar = (s: string) => s.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

/** FAQPage för de synliga frågorna på sidan. */
export function faqSchema(fragor: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: fragor.map((f) => ({
      "@type": "Question",
      name: utanLankar(f.q),
      acceptedAnswer: { "@type": "Answer", text: utanLankar(f.a) },
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

/** Service- + FAQPage-schema för en enskild tjänstesida. Inga fasta priser (Offer) i schemat. */
export function serviceSchema(t: Tjanst) {
  const service = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${t.title} i Örebro`,
    description: t.metaDesc,
    serviceType: t.title,
    areaServed: { "@type": "City", name: "Örebro" },
    provider: { "@id": FORETAG_ID },
    url: `${site.url}${tjanstPath(t)}`,
  };

  return [service, faqSchema(t.faq)];
}
