import type { Metadata } from "next";
import Presentkort from "@/components/marketing/Presentkort";

export const metadata: Metadata = {
  title: "Presentkort – KOM-FORT Bilvård AB",
  description:
    "Ge bort ett presentkort på bilvård i Örebro. Gäller på rekond, polering, lackskydd och biltvätt. Välj belopp och beställ direkt.",
  alternates: { canonical: "/presentkort" },
  openGraph: {
    title: "Presentkort – KOM-FORT Bilvård AB",
    description:
      "Ge bort ett presentkort på bilvård i Örebro. Gäller på alla våra tjänster.",
    url: "/presentkort",
  },
};

export default function PresentkortPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Presentkort />
    </main>
  );
}
