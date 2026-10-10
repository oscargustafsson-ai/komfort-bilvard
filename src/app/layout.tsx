import type { Metadata } from "next";
import { Geist, Geist_Mono, Bebas_Neue, Instrument_Sans } from "next/font/google";
import "./globals.css";

/** Search Console-verifiering (tagg från Oscar 2026-10-10). Ärvs av alla sidor. */
export const metadata: Metadata = {
  verification: {
    google: "tVndElGRwqrXmVPDg6Zk3V15LU2nLVGORBNehqwkXvw",
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="sv"
      className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} ${instrumentSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-surface-1 font-[family-name:var(--font-instrument)]">{children}</body>
    </html>
  );
}
