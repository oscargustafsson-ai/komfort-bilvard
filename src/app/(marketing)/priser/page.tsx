import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { JsonLd, faqSchema } from "@/components/marketing/JsonLd";
import { Brodsmulor } from "@/components/marketing/Brodsmulor";
import { Etikett } from "@/components/marketing/Etikett";
import { Stycke } from "@/components/marketing/Stycke";
import { Prislista } from "@/components/marketing/Prislista";
import { HittaSektion, FaqSektion, KnappSektion } from "@/components/marketing/Sidblock";
import { priserSida } from "@/data/priserSida";
import { prissidan } from "@/data/priser";
import { sidMetadata } from "@/lib/metadata";

export const metadata = sidMetadata({
  title: priserSida.title,
  description: priserSida.meta,
  path: "/priser",
});

const smulor = [
  { namn: "Startsida", href: "/" },
  { namn: "Priser", href: "/priser" },
];

/** Prissidan. Alla belopp kommer från priser.ts, inga belopp i brödtexten. Inga priser i schemat. */
export default function PriserPage() {
  const ps = priserSida;
  const avsnitt = ps.avsnitt.map((a) => ({ ...a, lista: prissidan.find((x) => x.id === a.id)! }));
  const udda = avsnitt.length % 2 === 1;
  return (
    <main className="min-h-screen overflow-x-hidden">
      <JsonLd data={faqSchema(ps.faq.fragor)} />

      {/* Hero */}
      <section className="pt-40 pb-20 px-8 bg-surface-1">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <Brodsmulor items={smulor} />
            <Etikett className="mb-5">KOM-fort Bilvård AB · Örebro</Etikett>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6">{ps.h1}</h1>
            <div className="flex flex-col gap-5 max-w-2xl">
              {ps.intro.map((s) => (
                <Stycke key={s.slice(0, 40)} text={s} className="text-white/50 text-lg leading-relaxed font-light" />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Prisavsnitten: två per rad på dator, ett på mobil */}
      <section className="py-24 px-8 bg-surface-2 border-t border-gold/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-gold/10">
          {avsnitt.map((a, i) => (
            <FadeIn
              key={a.id}
              delay={(i % 2) * 0.07}
              className={`bg-surface-2 ${udda && i === avsnitt.length - 1 ? "md:col-span-2" : ""}`}
            >
              <div className="bg-surface-2 p-8 md:p-10 h-full flex flex-col">
                <h2 className="text-2xl md:text-3xl font-black tracking-tighter mb-4">{a.h2}</h2>
                <Stycke text={a.stycke} />
                {a.lista.grupper.length > 0 && (
                  <div className="mt-8">
                    <Prislista grupper={a.lista.grupper} fotnot={a.lista.fotnot} />
                  </div>
                )}
                <div className="mt-auto pt-8">
                  <Link
                    href={a.kortlank.href}
                    className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-white/45 transition-colors hover:text-gold"
                  >
                    {a.kortlank.text}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-3.5 h-3.5" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <FaqSektion h2={ps.faq.h2} fragor={ps.faq.fragor} bg="bg-surface-1" />

      <HittaSektion sektion={ps.hitta} bg="bg-surface-2" />

      <KnappSektion bg="bg-surface-1" />
    </main>
  );
}
