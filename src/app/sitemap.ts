import type { MetadataRoute } from "next";
import { tjanster } from "@/data/tjanster";
import { omraden } from "@/data/omraden";
import { site } from "@/lib/site";

/**
 * lastModified = datum då sidan senast ändrades (byggdatum för batchen).
 * Uppdatera datumet för de sidor en batch rör. Sidor som inte nämns får
 * STANDARD_DATUM.
 */
const STANDARD_DATUM = "2026-10-10";
const senastAndrad: Record<string, string> = {
  // Batch 01 (2026-10-10): alla sidor fick nytt schema, canonical och og-taggar.
};

const datum = (path: string) => new Date(senastAndrad[path] ?? STANDARD_DATUM);

export default function sitemap(): MetadataRoute.Sitemap {
  const statiska = ["", "/tjanster", "/omraden", "/presentkort", "/kontakt"].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: datum(path || "/"),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const tjanstSidor = tjanster.map((t) => ({
    url: `${site.url}/tjanster/${t.slug}`,
    lastModified: datum(`/tjanster/${t.slug}`),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const omradesSidor = omraden.map((o) => ({
    url: `${site.url}/omraden/${o.slug}`,
    lastModified: datum(`/omraden/${o.slug}`),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...statiska, ...tjanstSidor, ...omradesSidor];
}
