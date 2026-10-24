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
  // Batch 08 (2026-10-24): fem nya stadsdelar, områdeslistan, hubben och rättelserna R2-R10.
  "/": "2026-10-24",
  "/kontakt": "2026-10-24",
  "/omraden": "2026-10-24",
  "/omraden/vivalla": "2026-10-24",
  "/omraden/varberga": "2026-10-24",
  "/omraden/almby": "2026-10-24",
  "/omraden/lillan": "2026-10-24",
  "/omraden/hovsta": "2026-10-24",
  "/omraden/tybble": "2026-10-24",
  "/omraden/mellringe": "2026-10-24",
  "/omraden/oxhagen": "2026-10-24",
  "/omraden/baronbackarna": "2026-10-24",
  "/tjanster/polering/repborttagning": "2026-10-24",
  "/tjanster/polering/stralkastarpolering": "2026-10-24",
  "/tjanster/lackskydd/glasforsegling": "2026-10-24",
  "/tjanster/biltvatt/motortvatt": "2026-10-24",
  "/tjanster/biltvatt/asfalt-och-flygrost": "2026-10-24",
  // Batch 07 (2026-10-17): menyn och footern ändrades på alla sidor, så övriga har det datumet.
  // Tidigare: batch 01 (2026-10-10) till batch 06 och 05b (2026-10-17).
};

const datum = (path: string) => new Date(senastAndrad[path] ?? STANDARD_DATUM);

export default function sitemap(): MetadataRoute.Sitemap {
  const statiska = ["", "/tjanster", "/priser", "/omraden", "/fore-och-efter", "/vanliga-fragor", "/presentkort", "/kontakt", "/boka", "/om-oss", "/integritetspolicy"].map((path) => ({
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
