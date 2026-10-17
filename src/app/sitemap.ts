import type { MetadataRoute } from "next";
import { allaTjanstsidor, tjanstPath } from "@/data/tjanstsidor";
import { omraden } from "@/data/omraden";
import { site } from "@/lib/site";

/**
 * lastModified = datum då sidan senast ändrades (byggdatum för batchen).
 * Uppdatera datumet för de sidor en batch rör. Sidor som inte nämns får
 * STANDARD_DATUM.
 */
const STANDARD_DATUM = "2026-10-17";
const senastAndrad: Record<string, string> = {
  // Batch 05 (2026-10-16): menyn, footern och kartan ändrades på alla sidor.
  // Batch 06 (2026-10-17): nya sidor, områdeslistan och rättelser. Oförändrade sidor behåller 2026-10-16.
  "/tjanster": "2026-10-16",
  "/presentkort": "2026-10-16",
  "/boka": "2026-10-16",
  "/om-oss": "2026-10-16",
  "/integritetspolicy": "2026-10-16",
  "/tjanster/biltvatt": "2026-10-16",
  "/tjanster/invandig-rekond": "2026-10-16",
  "/tjanster/biltvatt/motortvatt": "2026-10-16",
  "/tjanster/biltvatt/asfalt-och-flygrost": "2026-10-16",
  "/tjanster/polering/repborttagning": "2026-10-16",
  "/tjanster/polering/stralkastarpolering": "2026-10-16",
  "/tjanster/lackskydd/glasforsegling": "2026-10-16",
  "/omraden/marieberg": "2026-10-16",
  "/omraden/adolfsberg": "2026-10-16",
  "/omraden/vivalla": "2026-10-16",
  "/omraden/varberga": "2026-10-16",
  "/omraden/almby": "2026-10-16",
  // Batch 01 (2026-10-10): alla sidor fick nytt schema, canonical och og-taggar.
  // Batch 02 (2026-10-11): allt utom Marieberg och Adolfsberg ändrades.
  // Batch 02b (2026-10-12): nya priser och rättelser.
  // Batch 02c (2026-10-12): nytt telefonnummer i footern på alla sidor.
  // Batch 03 (2026-10-14): öppettider i footern på alla sidor.
};

const datum = (path: string) => new Date(senastAndrad[path] ?? STANDARD_DATUM);

export default function sitemap(): MetadataRoute.Sitemap {
  const statiska = ["", "/tjanster", "/omraden", "/presentkort", "/kontakt", "/boka", "/om-oss", "/integritetspolicy"].map((path) => ({
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
