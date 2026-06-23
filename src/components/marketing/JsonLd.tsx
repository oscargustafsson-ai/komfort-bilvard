import { site } from "@/lib/site";
import type { Tjanst } from "@/data/tjanster";

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

/** LocalBusiness-schema för företaget — används på startsidan. */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    name: site.name,
    image: `${site.url}/logo/kom-fort-logga.svg`,
    "@id": site.url,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      postalCode: site.address.postalCode,
      addressLocality: site.address.city,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.lat,
      longitude: site.geo.lng,
    },
    areaServed: { "@type": "City", name: "Örebro" },
    sameAs: site.social,
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
    provider: {
      "@type": "AutoRepair",
      name: site.name,
      telephone: site.phone,
      url: site.url,
    },
    url: `${site.url}/tjanster/${t.slug}`,
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return [service, faq];
}
