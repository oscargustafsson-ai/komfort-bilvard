import { tjanster } from "@/data/tjanster";
import { FadeIn } from "@/components/ui/FadeIn";
import { ServiceCard } from "@/components/marketing/ServiceCard";
import { JsonLd, faqSchema } from "@/components/marketing/JsonLd";
import { Brodsmulor } from "@/components/marketing/Brodsmulor";
import { Etikett } from "@/components/marketing/Etikett";
import { Stycke } from "@/components/marketing/Stycke";
import { BlockRutnat, MarkeratBlock, TextBlock, HittaSektion, FaqSektion, KnappSektion } from "@/components/marketing/Sidblock";
import { tjansterSida } from "@/data/tjansterSida";
import { sidMetadata } from "@/lib/metadata";

export const metadata = sidMetadata({
  title: tjansterSida.title,
  description: tjansterSida.meta,
  path: "/tjanster",
});

const smulor = [
  { namn: "Startsida", href: "/" },
  { namn: "Tjänster", href: "/tjanster" },
];

export default function TjansterPage() {
  const t = tjansterSida;
  return (
    <main className="min-h-screen overflow-x-hidden">
      <JsonLd data={faqSchema(t.faq.fragor)} />

      {/* Hero + tjänstekorten med priser */}
      <section className="pt-40 pb-20 px-8 bg-surface-1">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <Brodsmulor items={smulor} />
            <Etikett className="mb-5">Vad vi erbjuder</Etikett>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6">{t.h1}</h1>
            <Stycke text={t.intro} className="text-white/50 text-lg max-w-2xl leading-relaxed font-light mb-16" />
          </FadeIn>

          {/* Rad 1: 3 kort */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {tjanster.slice(0, 3).map((s, i) => (
              <FadeIn key={s.slug} delay={i * 0.07}>
                <ServiceCard s={s} />
              </FadeIn>
            ))}
          </div>
          {/* Rad 2: 2 centrerade kort */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:w-2/3 md:mx-auto">
            {tjanster.slice(3).map((s, i) => (
              <FadeIn key={s.slug} delay={(i + 3) * 0.07}>
                <ServiceCard s={s} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Tjänsterna i text */}
      <section className="py-24 px-8 bg-surface-2 border-t border-gold/10">
        <div className="max-w-6xl mx-auto">
          <BlockRutnat sektioner={t.tjanster} bg="bg-surface-2" />
        </div>
      </section>

      {/* Hämtning + presentkort */}
      <section className="py-24 px-8 bg-surface-1 border-t border-gold/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <MarkeratBlock sektion={t.hamtning} />
          <FadeIn delay={0.1}>
            <div className="p-2 md:p-6">
              <TextBlock sektion={t.presentkort} />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Så väljer du rätt tjänst */}
      <section className="py-24 px-8 bg-surface-2 border-t border-gold/10">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <div className="max-w-3xl">
              <TextBlock sektion={t.valj} rubrikClass="text-3xl md:text-4xl font-black tracking-tighter mb-6" />
            </div>
          </FadeIn>
        </div>
      </section>

      <HittaSektion sektion={t.hitta} bg="bg-surface-1" />

      <FaqSektion h2={t.faq.h2} fragor={t.faq.fragor} bg="bg-surface-2" />

      <KnappSektion bg="bg-surface-1" />
    </main>
  );
}
