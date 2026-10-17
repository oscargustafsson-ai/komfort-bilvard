import Kontakt from "@/components/marketing/Kontakt";
import { FadeIn } from "@/components/ui/FadeIn";
import { JsonLd, faqSchema } from "@/components/marketing/JsonLd";
import { Brodsmulor } from "@/components/marketing/Brodsmulor";
import { Etikett } from "@/components/marketing/Etikett";
import { Stycke } from "@/components/marketing/Stycke";
import { BlockRutnat, MarkeratBlock, HittaSektion, FaqSektion } from "@/components/marketing/Sidblock";
import { Omradeslista } from "@/components/marketing/Omradeslista";
import { kontaktsida } from "@/data/kontakt";
import { sidMetadata } from "@/lib/metadata";

export const metadata = sidMetadata({
  title: kontaktsida.title,
  description: kontaktsida.meta,
  path: "/kontakt",
});

const smulor = [
  { namn: "Startsida", href: "/" },
  { namn: "Kontakt", href: "/kontakt" },
];

export default function KontaktPage() {
  const k = kontaktsida;
  return (
    <main className="min-h-screen overflow-x-hidden">
      <JsonLd data={faqSchema(k.faq.fragor)} />

      {/* Hero */}
      <section className="pt-40 pb-20 px-8 bg-surface-1">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <Brodsmulor items={smulor} />
            <Etikett className="mb-5">Kontakta oss</Etikett>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6">{k.h1}</h1>
            <div className="flex flex-col gap-5 max-w-2xl">
              {k.intro.map((s) => (
                <Stycke key={s.slice(0, 40)} text={s} className="text-white/50 text-lg leading-relaxed font-light" />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Kontaktkort + formulär */}
      <Kontakt />

      {/* Så bokar du, rekond tar en dag, hämtning, hela Örebro */}
      <section className="py-24 px-8 bg-surface-1 border-t border-gold/10">
        <div className="max-w-6xl mx-auto">
          <BlockRutnat
            sektioner={k.sektioner}
            bg="bg-surface-1"
            efter={(s) => (s.h2 === "Vi tar emot bilar från hela Örebro" ? <Omradeslista /> : null)}
          />
        </div>
      </section>

      <HittaSektion sektion={k.hitta} bg="bg-surface-2" />

      {/* Betalning och presentkort */}
      <section className="py-24 px-8 bg-surface-1 border-t border-gold/10">
        <div className="max-w-6xl mx-auto">
          <MarkeratBlock sektion={k.betalning} />
        </div>
      </section>

      <FaqSektion h2={k.faq.h2} fragor={k.faq.fragor} bg="bg-surface-2" />
    </main>
  );
}
