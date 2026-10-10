import type { Metadata } from "next";
import { site } from "@/lib/site";

type SidMetadata = {
  /** Exakt sidtitel. Ingen mall eller suffix läggs på. */
  title: string;
  description: string;
  /** Sökväg från roten, t.ex. "/omraden/marieberg". Startsidan: "/". */
  path: string;
  ogType?: "website" | "article";
};

/**
 * Metadata för en sida: title, description, självrefererande canonical,
 * og:url och standardbild. Alla sidor går via den här så att inget saknas.
 *
 * openGraph måste anges i sin helhet här, eftersom Next ersätter hela
 * openGraph-objektet när en sida sätter något i det (ingen djup sammanslagning).
 */
export function sidMetadata({ title, description, path, ogType = "website" }: SidMetadata): Metadata {
  const canonical = path === "/" ? "/" : path.replace(/\/$/, "");
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      type: ogType,
      locale: "sv_SE",
      siteName: site.name,
      title,
      description,
      url: canonical,
      images: [{ url: site.ogImage.url, width: site.ogImage.width, height: site.ogImage.height }],
    },
  };
}
