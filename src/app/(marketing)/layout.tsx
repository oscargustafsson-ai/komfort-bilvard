import type { Metadata } from "next";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import { JsonLd, foretagSchema } from "@/components/marketing/JsonLd";
import { site } from "@/lib/site";

/**
 * Sajtgemensam metadata. Ingen title-mall: varje sida sätter sin exakta titel
 * via sidMetadata() i src/lib/metadata.ts (title, description, canonical, og).
 * Det som står här är bara reserv för sidor som saknar egen metadata.
 */
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "KOM-fort Bilvård AB - Bilvård i Örebro",
  description:
    "Professionell bilvård i Örebro. Rekonditionering, polering, lackskydd och handtvätt. Ring 076-194 35 19.",
  openGraph: {
    type: "website",
    locale: "sv_SE",
    siteName: site.name,
    images: [{ url: site.ogImage.url, width: site.ogImage.width, height: site.ogImage.height }],
  },
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* Företagsschemat, en gång per sida. */}
      <JsonLd data={foretagSchema()} />
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
