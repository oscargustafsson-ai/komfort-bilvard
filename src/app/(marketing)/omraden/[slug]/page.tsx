import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/ui/FadeIn";
import { JsonLd, faqSchema, omradeSchema } from "@/components/marketing/JsonLd";
import { Brodsmulor } from "@/components/marketing/Brodsmulor";
import { Etikett } from "@/components/marketing/Etikett";
import { Stycke } from "@/components/marketing/Stycke";
import { BlockRutnat, MarkeratBlock, HittaSektion, FaqSektion, KnappSektion, Knappar } from "@/components/marketing/Sidblock";
import { omraden, getOmradeBySlug } from "@/data/omraden";
import { sidMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return omraden.map((o) => ({ slug: o.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const o = getOmradeBySlug(slug);
  if (!o) return {};
  return sidMetadata({ title: o.title, description: o.meta, path: `/omraden/${o.slug}` });
}

/** Stadsdelssida. Byggd på tjänstesidans mall, text ordagrant från sidpaketet. */
export default async function OmradePage({ params }: Props) {
  const { slug } = await params;
  const o = getOmradeBySlug(slug);
  if (!o) notFound();

  const smulor = [
    { namn: "Startsida", href: "/" },
    { namn: "Områden", href: "/omraden" },
    { namn: o.namn, href: `/omraden/${o.slug}` },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden">
      <JsonLd data={omradeSchema(o)} />
      <JsonLd data={faqSchema(o.faq.fragor)} />

      {/* Hero */}
      <section className="pt-40 pb-20 px-8 bg-surface-1 border-b border-gold/10">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <Brodsmulor items={smulor} />
            <Etikett className="mb-5">KOM-fort Bilvård AB · Örebro</Etikett>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6">{o.h1}</h1>
            <div className="flex flex-col gap-5 max-w-2xl mb-10">
              {o.intro.map((s) => (
                <Stycke key={s.slice(0, 40)} text={s} className="text-white/50 text-lg leading-relaxed font-light" />
              ))}
            </div>
            <Knappar />
          </FadeIn>
        </div>
      </section>

      {/* Tjänsterna för stadsdelen */}
      <section className="py-24 px-8 bg-surface-2">
        <div className="max-w-6xl mx-auto">
          <BlockRutnat sektioner={o.tjanster} bg="bg-surface-2" />
        </div>
      </section>

      {/* Hämtning och lämning */}
      <section className="py-24 px-8 bg-surface-1 border-t border-gold/10">
        <div className="max-w-6xl mx-auto">
          <MarkeratBlock sektion={o.hamtning} />
        </div>
      </section>

      <HittaSektion sektion={o.hitta} bg="bg-surface-2" />

      <FaqSektion h2={o.faq.h2} fragor={o.faq.fragor} bg="bg-surface-1" />

      <KnappSektion bg="bg-surface-2" />
    </main>
  );
}
