import Kontakt from "@/components/marketing/Kontakt";
import { sidMetadata } from "@/lib/metadata";

export const metadata = sidMetadata({
  title: "Kontakta oss - Bilvård i Örebro | KOM-fort Bilvård AB",
  description: "Boka tid eller ställ en fråga. Ring 076-194 35 19 eller skicka ett meddelande. Vi finns på Lindtorpsvägen 10, Örebro.",
  path: "/kontakt",
});

export default function KontaktPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Kontakt />
    </main>
  );
}
