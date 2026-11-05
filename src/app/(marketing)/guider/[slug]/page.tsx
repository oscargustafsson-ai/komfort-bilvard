import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/ui/FadeIn";
import { JsonLd, articleSchema, faqSchema } from "@/components/marketing/JsonLd";
import { Brodsmulor } from "@/components/marketing/Brodsmulor";
import { Etikett } from "@/components/marketing/Etikett";
import { Stycke } from "@/components/marketing/Stycke";
import { BlockRutnat, HittaSektion, FaqSektion, Knappar } from "@/components/marketing/Sidblock";
import { guider, getGuideBySlug, GUIDER_DATUM } from "@/data/guider";
import { sidMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return guider.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const g = getGuideBySlug(slug);
  if (!g) return {};
  return sidMetadata({ title: g.title, description: g.meta, path: `/guider/${g.slug}`, ogType: "article" });
}

/** Guide. Byggd som /om-oss, text ordagrant från sidpaketet (batch 12). */
export default async function GuidePage({ params }: Props) {
  const { slug } = await params;
  const g = getGuideBySlug(slug);
  if (!g) notFound();

  const smulor = [
    { namn: "Startsida", href: "/" },
    { namn: "Guider", href: "/guider" },
    { namn: g.h1, href: `/guider/${g.slug}` },
  ];

  return (
    <main className="min-h-screen overflow-x-hidden">
      <JsonLd data={articleSchema(g, GUIDER_DATUM)} />
      {g.faq && <JsonLd data={faqSchema(g.faq.fragor)} />}

      {/* Hero */}
      <section className="pt-40 pb-20 px-8 bg-surface-1">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <Brodsmulor items={smulor} />
            <Etikett className="mb-5">Guide</Etikett>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6">{g.h1}</h1>
            <div className="flex flex-col gap-5 max-w-2xl">
              {g.intro.map((s) => (
                <Stycke key={s.slice(0, 40)} text={s} className="text-white/50 text-lg leading-relaxed font-light" />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Guidens avsnitt */}
      <section className="py-24 px-8 bg-surface-2 border-t border-gold/10">
        <div className="max-w-6xl mx-auto">
          <BlockRutnat sektioner={g.sektioner} bg="bg-surface-2" />
        </div>
      </section>

      <HittaSektion sektion={g.hitta} bg="bg-surface-1" />

      {/* Frågorna finns på tre av guiderna, inte på ordlistan. */}
      {g.faq && <FaqSektion h2={g.faq.h2} fragor={g.faq.fragor} bg="bg-surface-2" />}

      {/* Kontakta-blocket */}
      <section className={`py-24 px-8 ${g.faq ? "bg-surface-1" : "bg-surface-2"} border-t border-gold/10`}>
        <FadeIn>
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-2">{g.kontakta.h2}</h2>
              {g.kontakta.stycken.map((s) => (
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
