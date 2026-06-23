import type { MetadataRoute } from "next";
import { site, hasRealDomain } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  // Utan riktig domän (placeholder): blockera all indexering så Google inte
  // fångar fel canonical/sitemap innan sajten är live på rätt adress.
  if (!hasRealDomain) {
    return { rules: { userAgent: "*", disallow: "/" } };
  }

  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
