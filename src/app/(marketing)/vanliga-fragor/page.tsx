import { FadeIn } from "@/components/ui/FadeIn";
import { JsonLd, faqSchema } from "@/components/marketing/JsonLd";
import { Brodsmulor } from "@/components/marketing/Brodsmulor";
import { Etikett } from "@/components/marketing/Etikett";
import { Stycke } from "@/components/marketing/Stycke";
import { HittaSektion, FaqSektion, KnappSektion } from "@/components/marketing/Sidblock";
import { vanligaFragor } from "@/data/vanligaFragor";
import { sidMetadata } from "@/lib/metadata";

export const metadata = sidMetadata({
  title: vanligaFragor.title,
  description: vanligaFragor.meta,
  path: "/vanliga-fragor",
});

const smulor = [
  { namn: "Startsida", href: "/" },
  { namn: "Vanliga frågor", href: "/vanliga-fragor" },
];

/** Vanliga frågor: tre avsnitt i samma utseende som frågorna på tjänstesidorna. FAQPage med alla 16 frågorna. */
export default function VanligaFragorPage() {
  const v = vanligaFragor;
  const allaFragor = v.avsnitt.flatMap((a) => a.fragor);
  return (
    <main className="min-h-screen overflow-x-hidden">
      <JsonLd data={faqSchema(allaFragor)} />

      {/* Hero */}
      <section className="pt-40 pb-20 px-8 bg-surface-1">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <Brodsmulor items={smulor} />
            <Etikett className="mb-5">KOM-fort Bilvård AB · Örebro</Etikett>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6">{v.h1}</h1>
            <Stycke text={v.intro} className="text-white/50 text-lg max-w-2xl leading-relaxed font-light" />
          </FadeIn>
        </div>
      </section>

      {v.avsnitt.map((a, i) => (
        <FaqSektion key={a.h2} h2={a.h2} fragor={a.fragor} bg={i % 2 === 0 ? "bg-surface-2" : "bg-surface-1"} />
      ))}

      <HittaSektion sektion={v.hitta} bg="bg-surface-2" />

      <KnappSektion bg="bg-surface-1" />
    </main>
  );
}
