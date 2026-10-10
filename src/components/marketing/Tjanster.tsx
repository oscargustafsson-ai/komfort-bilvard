import { tjanster } from "@/data/tjanster";
import { FadeIn } from "@/components/ui/FadeIn";
import { ServiceCard } from "./ServiceCard";
import { Etikett } from "./Etikett";

export default function Tjanster() {
  return (
    <section id="tjanster" className="grain-section py-32 px-8 bg-polished-alt">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <Etikett>Vad vi erbjuder</Etikett>
          {/* Ingen h2: startsidans rubriker styrs av sidpaketet. Visuell rubrik som p. */}
          <p className="font-[family-name:var(--font-bebas)] text-6xl md:text-8xl tracking-wide mb-16">VÅRA TJÄNSTER</p>
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
