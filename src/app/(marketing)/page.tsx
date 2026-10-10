import Link from "next/link";
import Hero from "@/components/marketing/Hero";
import Tjanster from "@/components/marketing/Tjanster";
import OmOss from "@/components/marketing/OmOss";
import { FadeIn } from "@/components/ui/FadeIn";
import { JsonLd, faqSchema } from "@/components/marketing/JsonLd";
import { BlockRutnat, MarkeratBlock, TextBlock, HittaSektion, FaqSektion } from "@/components/marketing/Sidblock";
import { startsida } from "@/data/startsida";
import { sidMetadata } from "@/lib/metadata";

export const metadata = sidMetadata({
  title: startsida.title,
  description: startsida.meta,
  path: "/",
});

export default function Home() {
  const s = startsida;
  return (
    <main className="min-h-screen overflow-x-hidden">
      <JsonLd data={faqSchema(s.faq.fragor)} />

      <Hero rubrik={s.h1} intro={s.intro} />

      {/* Tjänstekorten med priser, direkt efter introt */}
      <Tjanster />

      {/* Tjänsterna i text */}
      <section className="grain-section py-24 px-8 bg-surface-1 border-t border-gold/10">
        <div className="max-w-6xl mx-auto">
          <BlockRutnat sektioner={s.tjanster} bg="bg-surface-1" />
        </div>
      </section>

      {/* Hämtning + hela Örebro */}
      <section className="py-24 px-8 bg-surface-2 border-t border-gold/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <MarkeratBlock sektion={s.hamtning}>
            <Link
              href={s.hamtning.knapp.href}
              className="grain relative overflow-hidden mt-8 inline-block bg-gold text-black px-8 py-3 font-bold tracking-widest uppercase text-sm rounded-lg transition-all after:absolute after:inset-0 after:bg-white/20 after:translate-x-[-100%] hover:after:translate-x-0 after:transition-transform after:duration-300"
            >
              {s.hamtning.knapp.text}
            </Link>
          </MarkeratBlock>
          <FadeIn delay={0.1}>
            <div className="p-2 md:p-6">
              <TextBlock sektion={s.omraden} />
            </div>
          </FadeIn>
        </div>
      </section>

      <OmOss h2={s.om.h2} stycken={s.om.stycken} />

      <HittaSektion sektion={s.hitta} bg="bg-surface-2" />

      <FaqSektion h2={s.faq.h2} fragor={s.faq.fragor} bg="bg-surface-1" />
    </main>
  );
}
