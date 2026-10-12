import Bokning from "@/components/marketing/Bokning";
import { FadeIn } from "@/components/ui/FadeIn";
import { Brodsmulor } from "@/components/marketing/Brodsmulor";
import { Etikett } from "@/components/marketing/Etikett";
import { Stycke } from "@/components/marketing/Stycke";
import { MarkeratBlock, HittaSektion } from "@/components/marketing/Sidblock";
import { bokasida } from "@/data/boka";
import { sidMetadata } from "@/lib/metadata";

export const metadata = sidMetadata({
  title: bokasida.title,
  description: bokasida.meta,
  path: "/boka",
});

const smulor = [
  { namn: "Startsida", href: "/" },
  { namn: "Boka", href: "/boka" },
];

/** Bokningssida: en förfrågan som KOM-fort bekräftar. Ingen betalning, ingen kalender. */
export default function BokaPage() {
  const b = bokasida;
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Hero */}
      <section className="pt-40 pb-16 px-8 bg-surface-1">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <Brodsmulor items={smulor} />
            <Etikett className="mb-5">Boka</Etikett>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6">{b.h1}</h1>
            <Stycke text={b.intro} className="text-white/50 text-lg max-w-2xl leading-relaxed font-light" />
          </FadeIn>
        </div>
      </section>

      {/* Prisväljaren och formuläret */}
      <section className="grain-section py-20 px-8 bg-surface-2 border-t border-gold/10">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-10">{b.valjH2}</h2>
          </FadeIn>
          <FadeIn delay={0.1}>
            <Bokning />
          </FadeIn>
        </div>
      </section>

      {/* Så går bokningen till */}
      <section className="py-24 px-8 bg-surface-1 border-t border-gold/10">
        <div className="max-w-6xl mx-auto">
          <MarkeratBlock sektion={b.saGar} />
        </div>
      </section>

      <HittaSektion sektion={b.hitta} bg="bg-surface-2" />
    </main>
  );
}
