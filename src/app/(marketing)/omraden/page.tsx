import { FadeIn } from "@/components/ui/FadeIn";
import { Brodsmulor } from "@/components/marketing/Brodsmulor";
import { Etikett } from "@/components/marketing/Etikett";
import { Stycke } from "@/components/marketing/Stycke";
import { BlockRutnat, MarkeratBlock, HittaSektion, KnappSektion, Knappar } from "@/components/marketing/Sidblock";
import { omradenHubb } from "@/data/omraden";
import { sidMetadata } from "@/lib/metadata";

export const metadata = sidMetadata({
  title: omradenHubb.title,
  description: omradenHubb.meta,
  path: "/omraden",
});

const smulor = [
  { namn: "Startsida", href: "/" },
  { namn: "Områden", href: "/omraden" },
];

export default function OmradenPage() {
  const h = omradenHubb;
  return (
    <main className="min-h-screen overflow-x-hidden">

      {/* Hero */}
      <section className="pt-40 pb-20 px-8 bg-surface-1 border-b border-gold/10">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <Brodsmulor items={smulor} />
            <Etikett className="mb-5">KOM-fort Bilvård AB · Örebro</Etikett>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6">{h.h1}</h1>
            <Stycke text={h.intro} className="text-white/50 text-lg max-w-2xl leading-relaxed font-light mb-10" />
            <Knappar />
          </FadeIn>
        </div>
      </section>

      {/* Stadsdelarna */}
      <section className="py-24 px-8 bg-surface-2">
        <div className="max-w-6xl mx-auto">
          <BlockRutnat sektioner={h.stadsdelar} bg="bg-surface-2" />
        </div>
      </section>

      {/* Lämna bilen för dagen */}
      <section className="py-24 px-8 bg-surface-1 border-t border-gold/10">
        <div className="max-w-6xl mx-auto">
          <MarkeratBlock sektion={h.lamna} />
        </div>
      </section>

      <HittaSektion sektion={h.hitta} bg="bg-surface-2" />

      <KnappSektion bg="bg-surface-1" />
    </main>
  );
}
