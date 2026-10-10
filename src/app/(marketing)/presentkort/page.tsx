import Presentkort from "@/components/marketing/Presentkort";
import { sidMetadata } from "@/lib/metadata";

export const metadata = sidMetadata({
  title: "Presentkort på bilvård i Örebro | KOM-fort Bilvård AB",
  description:
    "Ge bort ett presentkort på bilvård i Örebro. Gäller på rekond, polering, lackskydd och biltvätt. Välj belopp och beställ direkt.",
  path: "/presentkort",
});

export default function PresentkortPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Presentkort />
    </main>
  );
}
