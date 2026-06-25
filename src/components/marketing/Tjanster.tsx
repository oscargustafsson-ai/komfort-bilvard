import { tjanster } from "@/data/tjanster";
import { FadeIn } from "@/components/ui/FadeIn";
import { ServiceCard } from "./ServiceCard";

export default function Tjanster() {
  return (
    <section id="tjanster" className="py-32 px-8 bg-polished-alt">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4 font-mono">— Vad vi erbjuder</p>
          <h2 className="font-[family-name:var(--font-bebas)] text-6xl md:text-8xl tracking-wide mb-16">VÅRA TJÄNSTER</h2>
        </FadeIn>
        {/* Rad 1: 3 kort */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {tjanster.slice(0, 3).map((s, i) => (
            <FadeIn key={s.num} delay={i * 0.07}>
              <ServiceCard s={s} />
            </FadeIn>
          ))}
        </div>
        {/* Rad 2: 2 centrerade kort */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:w-2/3 md:mx-auto">
          {tjanster.slice(3).map((s, i) => (
            <FadeIn key={s.num} delay={(i + 3) * 0.07}>
              <ServiceCard s={s} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
