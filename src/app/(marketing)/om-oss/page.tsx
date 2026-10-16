import { FadeIn } from "@/components/ui/FadeIn";
import { JsonLd, faqSchema } from "@/components/marketing/JsonLd";
import { Brodsmulor } from "@/components/marketing/Brodsmulor";
import { Etikett } from "@/components/marketing/Etikett";
import { Stycke } from "@/components/marketing/Stycke";
import { BlockRutnat, MarkeratBlock, HittaSektion, FaqSektion, Knappar } from "@/components/marketing/Sidblock";
import { omoss } from "@/data/omoss";
import { sidMetadata } from "@/lib/metadata";

export const metadata = sidMetadata({
  title: omoss.title,
  description: omoss.meta,
  path: "/om-oss",
});

const smulor = [
  { namn: "Startsida", href: "/" },
  { namn: "Om oss", href: "/om-oss" },
];

export default function OmOssPage() {
  const o = omoss;
  return (
    <main className="min-h-screen overflow-x-hidden">
      <JsonLd data={faqSchema(o.faq.fragor)} />

      {/* Hero */}
      <section className="pt-40 pb-20 px-8 bg-surface-1">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <Brodsmulor items={smulor} />
            <Etikett className="mb-5">Om oss</Etikett>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6">{o.h1}</h1>
            <div className="flex flex-col gap-5 max-w-2xl">
              {o.intro.map((s) => (
                <Stycke key={s.slice(0, 40)} text={s} className="text-white/50 text-lg leading-relaxed font-light" />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Goran, så arbetar vi, slutkontroll, medan bilen är hos oss, vad vi gör */}
      <section className="py-24 px-8 bg-surface-2 border-t border-gold/10">
        <div className="max-w-6xl mx-auto">
          <BlockRutnat sektioner={o.sektioner} bg="bg-surface-2" />
        </div>
      </section>

      <HittaSektion sektion={o.hitta} bg="bg-surface-1" />

      {/* Företaget */}
      <section className="py-24 px-8 bg-surface-2 border-t border-gold/10">
        <div className="max-w-6xl mx-auto">
          <MarkeratBlock sektion={o.foretaget} />
        </div>
      </section>

      <FaqSektion h2={o.faq.h2} fragor={o.faq.fragor} bg="bg-surface-1" />

      {/* Kontakta oss */}
      <section className="py-24 px-8 bg-surface-2 border-t border-gold/10">
        <FadeIn>
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-2">{o.kontakta.h2}</h2>
              {o.kontakta.stycken.map((s) => (
                <Stycke key={s.slice(0, 40)} text={s} className="text-white/50" />
              ))}
            </div>
            <Knappar className="shrink-0" />
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
