import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { Stycke } from "./Stycke";
import type { Tjanstkort as Kort } from "@/data/tjansterSida";
import type { Sektion } from "@/data/startsida";

/**
 * Avsnitt med kort (batch 05b): H2, ett stycke och ett rutnät med kort i samma
 * stil som tjänstekorten. Kortets namn är H3 och den enda länken. Navigering,
 * räknas inte in i taket för kontextuella länkar.
 */
export function Kortavsnitt({ sektion, kort }: { sektion: Sektion; kort: Kort[] }) {
  return (
    <section className="py-24 px-8 bg-surface-1 border-t border-gold/10">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-4">{sektion.h2}</h2>
          <div className="max-w-3xl mb-12">
            {sektion.stycken.map((s) => (
              <Stycke key={s.slice(0, 40)} text={s} />
            ))}
          </div>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {kort.map((k, i) => (
            <FadeIn key={k.namn} delay={(i % 3) * 0.07}>
              <div className="group relative flex h-full flex-col overflow-hidden border border-white/10 bg-white/[0.015] p-8 backdrop-blur-sm transition-[border-color] duration-500 hover:border-gold/40">
                {k.etikett && (
                  <p className="mb-4 font-mono text-[10px] uppercase tracking-[0.3em] text-gold/60">{k.etikett}</p>
                )}
                <h3 className="text-xl font-bold tracking-tight text-white">
                  {k.href ? (
                    <Link href={k.href} className="transition-colors hover:text-gold">
                      {k.namn}
                    </Link>
                  ) : (
                    k.namn
                  )}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">{k.text}</p>
                {k.pris && (
                  <p className="mt-auto pt-6 font-mono text-xs uppercase tracking-widest text-white/35">
                    {k.prisPrefix ?? "Fr"}{" "}
                    <span className="text-base normal-case tracking-normal font-bold text-gold">{k.pris}</span>{" "}
                    kr{k.prisSuffix ? ` ${k.prisSuffix}` : ""}
                  </p>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
