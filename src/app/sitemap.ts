import type { MetadataRoute } from "next";
import { tjanster } from "@/data/tjanster";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages = ["", "/tjanster", "/presentkort", "/kontakt"].map((path) => ({
    url: `${site.url}${path}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const servicePages = tjanster.map((t) => ({
    url: `${site.url}/tjanster/${t.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticPages, ...servicePages];
}
