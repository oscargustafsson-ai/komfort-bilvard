import { FadeIn } from "@/components/ui/FadeIn";
import { Brodsmulor } from "@/components/marketing/Brodsmulor";
import { Etikett } from "@/components/marketing/Etikett";
import { Stycke } from "@/components/marketing/Stycke";
import { BlockRutnat, HittaSektion, Knappar } from "@/components/marketing/Sidblock";
import { guiderHubb } from "@/data/guider";
import { sidMetadata } from "@/lib/metadata";

export const metadata = sidMetadata({
  title: guiderHubb.title,
  description: guiderHubb.meta,
  path: "/guider",
});

const smulor = [
  { namn: "Startsida", href: "/" },
  { namn: "Guider", href: "/guider" },
];

/** Hubben /guider. Byggd som /om-oss, text ordagrant från sidpaketet (batch 12). */
export default function GuiderPage() {
  const g = guiderHubb;
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Hero */}
      <section className="pt-40 pb-20 px-8 bg-surface-1">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <Brodsmulor items={smulor} />
            <Etikett className="mb-5">Guider</Etikett>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6">{g.h1}</h1>
            <div className="flex flex-col gap-5 max-w-2xl">
              {g.intro.map((s) => (
                <Stycke key={s.slice(0, 40)} text={s} className="text-white/50 text-lg leading-relaxed font-light" />
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* De fyra guiderna */}
      <section className="py-24 px-8 bg-surface-2 border-t border-gold/10">
        <div className="max-w-6xl mx-auto">
          <BlockRutnat sektioner={g.sektioner} bg="bg-surface-2" />
        </div>
      </section>

      <HittaSektion sektion={g.hitta} bg="bg-surface-1" />

      {/* Har du en fråga om din bil? */}
      <section className="py-24 px-8 bg-surface-2 border-t border-gold/10">
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
