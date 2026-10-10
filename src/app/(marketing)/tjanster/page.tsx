import { tjanster } from "@/data/tjanster";
import { FadeIn } from "@/components/ui/FadeIn";
import { ServiceCard } from "@/components/marketing/ServiceCard";
import { Etikett } from "@/components/marketing/Etikett";
import { sidMetadata } from "@/lib/metadata";

export const metadata = sidMetadata({
  title: "Våra tjänster - Bilvård i Örebro | KOM-fort Bilvård AB",
  description: "Rekonditionering, polering, keramiskt lackskydd, biltvätt och invändig rekond i Örebro. Professionell bilvård av KOM-fort Bilvård AB. Ring 076-194 35 19.",
  path: "/tjanster",
});

export default function TjansterPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <section className="pt-40 pb-20 px-8 bg-surface-1">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <Etikett>Vad vi erbjuder</Etikett>
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6">VÅRA TJÄNSTER</h1>
            <p className="text-white/50 text-lg max-w-xl leading-relaxed mb-16">
              Professionell bilvård i Örebro. Vi erbjuder allt från en enkel handtvätt till komplett rekonditionering och keramiskt lackskydd.
            </p>
          </FadeIn>

          {/* Rad 1: 3 kort */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            {tjanster.slice(0, 3).map((t, i) => (
              <FadeIn key={t.slug} delay={i * 0.07}>
                <ServiceCard s={t} />
              </FadeIn>
            ))}
          </div>
          {/* Rad 2: 2 centrerade kort */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:w-2/3 md:mx-auto">
            {tjanster.slice(3).map((t, i) => (
              <FadeIn key={t.slug} delay={(i + 3) * 0.07}>
                <ServiceCard s={t} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-8 bg-surface-2 border-t border-gold/10">
        <FadeIn>
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-2">Vet du inte vad du behöver?</h2>
              <p className="text-white/50">Ring oss så hjälper vi dig välja rätt tjänst för din bil.</p>
            </div>
            <a
              href="tel:0761943519"
              className="grain relative overflow-hidden shrink-0 bg-gold text-black px-8 py-3 font-bold tracking-widest uppercase text-sm rounded-lg transition-all after:absolute after:inset-0 after:bg-white/20 after:translate-x-[-100%] hover:after:translate-x-0 after:transition-transform after:duration-300"
            >
              Ring 076-194 35 19
            </a>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
