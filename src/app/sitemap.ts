import type { MetadataRoute } from "next";
import { allaTjanstsidor, tjanstPath } from "@/data/tjanstsidor";
import { omraden } from "@/data/omraden";
import { guider } from "@/data/guider";
import { site } from "@/lib/site";

/**
 * lastModified = datum då sidan senast ändrades (byggdatum för batchen).
 * Uppdatera datumet för de sidor en batch rör. Sidor som inte nämns får
 * STANDARD_DATUM.
 */
const STANDARD_DATUM = "2026-10-17";
const senastAndrad: Record<string, string> = {
  // Batch 12b (2026-11-08): företagsformuläret på Bilvård för företag, integritetspolicyn och R7-R9 på guiderna.
  "/tjanster/foretag": "2026-11-08",
  "/integritetspolicy": "2026-11-08",
  "/guider": "2026-11-08",
  "/guider/hur-ofta-ska-man-rekonda-bilen": "2026-11-08",
  "/guider/hur-lang-tid-tar-en-rekond": "2026-11-08",
  // Batch 12 (2026-11-05): hubben /guider och fyra guider, rättelserna R1-R5 och öppettiderna i R6-R9.
  "/guider/keramiskt-lackskydd-vax-eller-lackforsegling": "2026-11-05",
  "/guider/ordlista": "2026-11-05",
  "/om-oss": "2026-11-05",
  "/priser": "2026-11-05",
  "/tjanster/lackskydd": "2026-11-05",
  "/tjanster/polering": "2026-11-05",
  "/tjanster/polering/repborttagning": "2026-11-05",
  "/vanliga-fragor": "2026-11-05",
  // Batch 11 (2026-11-03): fem nya stadsdelar, områdeslistan, hubben och rättelserna R2-R11.
  "/omraden/lundby": "2026-11-03",
  "/omraden/vasthaga": "2026-11-03",
  "/omraden/markbacken": "2026-11-03",
  "/omraden/sorby": "2026-11-03",
  "/omraden/ormesta": "2026-11-03",
  "/": "2026-11-03",
  "/kontakt": "2026-11-03",
  "/omraden": "2026-11-03",
  "/omraden/vivalla": "2026-11-03",
  "/omraden/rosta": "2026-11-03",
  "/omraden/hjarsta": "2026-11-03",
  "/omraden/sorbyangen": "2026-11-03",
  "/omraden/almby": "2026-11-03",
  "/tjanster/biltvatt/motortvatt": "2026-11-03",
  "/tjanster/polering/stralkastarpolering": "2026-11-03",
  "/tjanster/rekonditionering/leasingaterlamning": "2026-11-03",
  "/tjanster/lackskydd/glasforsegling": "2026-11-03",
  "/tjanster/biltvatt/asfalt-och-flygrost": "2026-11-03",
  // Batch 10 (2026-11-01): fem nya stadsdelar, områdeslistan, hubben och rättelserna R2-R10.
  "/omraden/bjorkhaga": "2026-11-01",
  "/omraden/ladugardsangen": "2026-11-01",
  "/omraden/baronbackarna": "2026-11-01",
  "/omraden/mellringe": "2026-11-01",
  "/omraden/oxhagen": "2026-11-01",
  "/omraden/tybble": "2026-11-01",
  "/tjanster/invandig-rekond/kemtvatt-kladsel": "2026-11-01",
  "/tjanster/biltvatt": "2026-11-01",
  // Batch 09 (2026-11-01): fyra företagssidor, För företag på /tjanster, kontaktformuläret och R2-R7.
  "/tjanster/foretag/firmabilar": "2026-11-01",
  "/tjanster/foretag/bilhandlare": "2026-11-01",
  "/tjanster/foretag/leasingbolag": "2026-11-01",
  "/tjanster": "2026-11-01",
  "/tjanster/hamtning-och-lamning": "2026-11-01",
  "/tjanster/rekonditionering/infor-bilforsaljning": "2026-11-01",
  // Batch 08 (2026-10-24): fem nya stadsdelar, områdeslistan, hubben och rättelserna R2-R10.
  "/omraden/varberga": "2026-10-24",
  "/omraden/lillan": "2026-10-24",
  "/omraden/hovsta": "2026-10-24",
  // Batch 07 (2026-10-17): menyn och footern ändrades på alla sidor, så övriga har det datumet.
  // Tidigare: batch 01 (2026-10-10) till batch 06 och 05b (2026-10-17).
};

const datum = (path: string) => new Date(senastAndrad[path] ?? STANDARD_DATUM);

export default function sitemap(): MetadataRoute.Sitemap {
  const statiska = ["", "/tjanster", "/priser", "/omraden", "/fore-och-efter", "/vanliga-fragor", "/guider", "/presentkort", "/kontakt", "/boka", "/om-oss", "/integritetspolicy"].map((path) => ({
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

  const guideSidor = guider.map((g) => ({
    url: `${site.url}/guider/${g.slug}`,
    lastModified: datum(`/guider/${g.slug}`),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...statiska, ...tjanstSidor, ...omradesSidor, ...guideSidor];
}
