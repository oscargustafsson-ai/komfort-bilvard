import { FadeIn } from "@/components/ui/FadeIn";
import { Brodsmulor } from "@/components/marketing/Brodsmulor";
import { Etikett } from "@/components/marketing/Etikett";
import { Stycke } from "@/components/marketing/Stycke";
import { Bild } from "@/components/marketing/Bild";
import { TextBlock, HittaSektion, KnappSektion } from "@/components/marketing/Sidblock";
import { foreOchEfter, type ForeEfterBild } from "@/data/foreOchEfter";
import { sidMetadata } from "@/lib/metadata";

export const metadata = sidMetadata({
  title: foreOchEfter.title,
  description: foreOchEfter.meta,
  path: "/fore-och-efter",
});

const smulor = [
  { namn: "Startsida", href: "/" },
  { namn: "Före och efter", href: "/fore-och-efter" },
];

/** En bild i paret med bildtexten Före eller Efter under (grundfix 5). */
function ParBild({ bild, text }: { bild: ForeEfterBild; text: string }) {
  return (
    <figure>
      <Bild src={bild.src} width={bild.width} height={bild.height} alt={bild.alt} sizes="(min-width: 896px) 430px, 45vw" />
      <figcaption className="mt-3 font-mono text-xs uppercase tracking-[0.3em] text-gold/70">{text}</figcaption>
    </figure>
  );
}

export default function ForeOchEfterPage() {
  const f = foreOchEfter;
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Hero */}
      <section className="pt-40 pb-20 px-8 bg-surface-1">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <Brodsmulor items={smulor} />
            <Etikett className="mb-5">KOM-fort Bilvård AB · Örebro</Etikett>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6">{f.h1}</h1>
            <Stycke text={f.intro} className="text-white/50 text-lg max-w-2xl leading-relaxed font-light" />
          </FadeIn>
        </div>
      </section>

      {/* Tre avsnitt med par: före till vänster, efter till höger, även på mobil */}
      {f.avsnitt.map((a, i) => (
        <section key={a.h2} className={`py-24 px-8 border-t border-gold/10 ${i % 2 === 0 ? "bg-surface-2" : "bg-surface-1"}`}>
          <div className="max-w-4xl mx-auto">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-6">{a.h2}</h2>
              <div className="max-w-3xl mb-12">
                <Stycke text={a.stycke} />
              </div>
            </FadeIn>
            <div className="flex flex-col gap-14">
              {a.par.map((p) => (
                <FadeIn key={p.h3}>
                  <h3 className="text-xl font-bold tracking-tight text-white mb-5">{p.h3}</h3>
                  <div className="grid grid-cols-2 gap-3 md:gap-6">
                    <ParBild bild={p.fore} text="Före" />
                    <ParBild bild={p.efter} text="Efter" />
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Så blir mattorna och lacken rena + Fler bilder */}
      <section className="py-24 px-8 bg-surface-2 border-t border-gold/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <FadeIn>
            <TextBlock sektion={f.rena} />
          </FadeIn>
          <FadeIn delay={0.1}>
            <TextBlock sektion={f.fler} />
          </FadeIn>
        </div>
      </section>

      <HittaSektion sektion={f.hitta} bg="bg-surface-1" />

      <KnappSektion bg="bg-surface-2" />
    </main>
  );
}
