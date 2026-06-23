import type { Metadata } from "next";
import Navbar from "@/components/marketing/Navbar";
import Footer from "@/components/marketing/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "KOM-FORT Bilvård AB – Rekond & Polering i Örebro",
    template: "%s | KOM-FORT Bilvård AB",
  },
  description:
    "Professionell bilvård i Örebro. Rekonditionering, polering, lackskydd och handtvätt. Ring 076-194 35 19.",
  openGraph: {
    type: "website",
    locale: "sv_SE",
    siteName: "KOM-FORT Bilvård AB",
    title: "KOM-FORT Bilvård AB – Rekond & Polering i Örebro",
    description:
      "Professionell bilvård i Örebro. Rekonditionering, polering, lackskydd och handtvätt.",
  },
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
