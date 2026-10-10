import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { Stycke } from "./Stycke";
import { Karta } from "./Karta";
import { site } from "@/lib/site";
import type { Sektion, Fraga } from "@/data/startsida";

/** Sajtens två befintliga knappar: ring (tel-länk) och skicka förfrågan (/kontakt). */
export function Knappar({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-4 flex-wrap ${className}`}>
      <a
        href={site.phoneHref}
        className="grain relative overflow-hidden bg-gold text-black px-8 py-3 font-bold tracking-widest uppercase text-sm rounded-lg transition-all after:absolute after:inset-0 after:bg-white/20 after:translate-x-[-100%] hover:after:translate-x-0 after:transition-transform after:duration-300"
      >
        Ring {site.phoneDisplay}
      </a>
      <Link
        href="/kontakt"
        className="grain-card relative overflow-hidden border border-white/20 text-white/70 px-8 py-3 tracking-widest uppercase text-sm rounded-lg transition-all hover:border-gold hover:text-gold after:absolute after:inset-0 after:bg-gold/10 after:translate-x-[-100%] hover:after:translate-x-0 after:transition-transform after:duration-300"
      >
        Skicka förfrågan
      </Link>
    </div>
  );
}

/** Rubrik + stycken, används i rutnät och block. */
export function TextBlock({ sektion, rubrikClass = "text-2xl md:text-3xl font-black tracking-tighter mb-4" }: { sektion: Sektion; rubrikClass?: string }) {
  return (
    <>
      <h2 className={rubrikClass}>{sektion.h2}</h2>
      <div className="flex flex-col gap-4">
        {sektion.stycken.map((s) => (
          <Stycke key={s.slice(0, 40)} text={s} />
        ))}
      </div>
    </>
  );
}

/** Rutnät av textblock (tjänster, stadsdelar). Udda sista block spänner över hela bredden. */
export function BlockRutnat({ sektioner, bg = "bg-surface-2" }: { sektioner: Sektion[]; bg?: "bg-surface-1" | "bg-surface-2" }) {
  const hover = bg === "bg-surface-2" ? "hover:bg-surface-1" : "hover:bg-surface-2";
  const udda = sektioner.length % 2 === 1;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gold/10">
      {sektioner.map((s, i) => (
        <FadeIn
          key={s.h2}
          delay={i * 0.07}
          className={`${bg} ${udda && i === sektioner.length - 1 ? "md:col-span-2" : ""}`}
        >
          <div className={`${bg} ${hover} transition-colors p-8 md:p-10 h-full`}>
            <TextBlock sektion={s} />
          </div>
        </FadeIn>
      ))}
    </div>
  );
}

/** Markerat block med guldram (hämtning, lämna bilen). */
export function MarkeratBlock({ sektion, children }: { sektion: Sektion; children?: React.ReactNode }) {
  return (
    <FadeIn>
      <div className="grain-card border border-gold/25 bg-gold/5 p-8 md:p-12">
        <TextBlock sektion={sektion} />
        {children}
      </div>
    </FadeIn>
  );
}

/** "Hitta till oss"-sektionen: H2, text och kartan direkt under. */
export function HittaSektion({ sektion, bg = "bg-surface-2" }: { sektion: Sektion; bg?: string }) {
  return (
    <section className={`py-24 px-8 ${bg} border-t border-gold/10`}>
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="max-w-3xl mb-10">
            <TextBlock sektion={sektion} rubrikClass="text-3xl md:text-4xl font-black tracking-tighter mb-6" />
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          <Karta />
        </FadeIn>
      </div>
    </section>
  );
}

/** Vanliga frågor: H2 + H3 per fråga. Schemat (FAQPage) läggs av sidan. */
export function FaqSektion({ h2, fragor, bg = "bg-surface-1" }: { h2: string; fragor: Fraga[]; bg?: string }) {
  const kort = bg === "bg-surface-1" ? "bg-surface-2" : "bg-surface-1";
  return (
    <section className={`py-24 px-8 ${bg} border-t border-gold/10`}>
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-12">{h2}</h2>
        </FadeIn>
        <div className="flex flex-col gap-px bg-gold/10">
          {fragor.map((f, i) => (
            <FadeIn key={f.q} delay={i * 0.08}>
              <div className={`${kort} p-8`}>
                <h3 className="text-white font-bold mb-3">{f.q}</h3>
                <Stycke text={f.a} className="text-white/50 text-sm leading-relaxed" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Avslutande uppmaning: bara sajtens befintliga knappar, ingen ny text. */
export function KnappSektion({ bg = "bg-surface-2" }: { bg?: string }) {
  return (
    <section className={`py-20 px-8 ${bg} border-t border-gold/10`}>
      <FadeIn>
        <div className="max-w-6xl mx-auto flex justify-center">
          <Knappar />
        </div>
      </FadeIn>
    </section>
  );
}
