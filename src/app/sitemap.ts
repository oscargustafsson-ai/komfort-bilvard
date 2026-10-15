import type { MetadataRoute } from "next";
import { allaTjanstsidor, tjanstPath } from "@/data/tjanstsidor";
import { omraden } from "@/data/omraden";
import { site } from "@/lib/site";

/**
 * lastModified = datum då sidan senast ändrades (byggdatum för batchen).
 * Uppdatera datumet för de sidor en batch rör. Sidor som inte nämns får
 * STANDARD_DATUM.
 */
const STANDARD_DATUM = "2026-10-15";
const senastAndrad: Record<string, string> = {
  // Batch 03b och 04 (2026-10-15): rättelser och nya sidor, allt utom nedanstående.
  "/omraden": "2026-10-14",
  "/presentkort": "2026-10-14",
  "/tjanster/biltvatt": "2026-10-14",
  // Batch 01 (2026-10-10): alla sidor fick nytt schema, canonical och og-taggar.
  // Batch 02 (2026-10-11): allt utom Marieberg och Adolfsberg ändrades.
  // Batch 02b (2026-10-12): nya priser och rättelser.
  // Batch 02c (2026-10-12): nytt telefonnummer i footern på alla sidor.
  // Batch 03 (2026-10-14): öppettider i footern på alla sidor.
};

const datum = (path: string) => new Date(senastAndrad[path] ?? STANDARD_DATUM);

export default function sitemap(): MetadataRoute.Sitemap {
  const statiska = ["", "/tjanster", "/omraden", "/presentkort", "/kontakt", "/boka"].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: datum(path || "/"),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const tjanstSidor = allaTjanstsidor.map((t) => ({
    url: `${site.url}${tjanstPath(t)}`,
    lastModified: datum(tjanstPath(t)),
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
