import { FadeIn } from "@/components/ui/FadeIn";
import { Brodsmulor } from "@/components/marketing/Brodsmulor";
import { Etikett } from "@/components/marketing/Etikett";
import { Stycke, rikText } from "@/components/marketing/Stycke";
import { integritetspolicy } from "@/data/integritetspolicy";
import { sidMetadata } from "@/lib/metadata";

export const metadata = sidMetadata({
  title: integritetspolicy.title,
  description: integritetspolicy.meta,
  path: "/integritetspolicy",
});

const smulor = [
  { namn: "Startsida", href: "/" },
  { namn: "Integritetspolicy", href: "/integritetspolicy" },
];

/** Funktionssida i en spalt: ingen karta, inga frågor, inga knappar, ingen prisruta. */
export default function IntegritetspolicyPage() {
  const ip = integritetspolicy;
  return (
    <main className="min-h-screen overflow-x-hidden">
      <section className="pt-40 pb-20 px-8 bg-surface-1">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <Brodsmulor items={smulor} />
            <Etikett className="mb-5">KOM-fort Bilvård AB</Etikett>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6">{ip.h1}</h1>
            <Stycke text={ip.intro} className="text-white/50 text-lg max-w-2xl leading-relaxed font-light" />
          </FadeIn>
        </div>
      </section>

      <section className="py-24 px-8 bg-surface-2 border-t border-gold/10">
        <div className="max-w-3xl mx-auto flex flex-col gap-14">
          {ip.avsnitt.map((a, i) => (
            <FadeIn key={a.h2} delay={Math.min(i, 3) * 0.05}>
              <h2 className="text-2xl md:text-3xl font-black tracking-tighter mb-5">{a.h2}</h2>
              <div className="flex flex-col gap-4">
                {a.delar.map((d, j) =>
                  d.typ === "p" ? (
                    <Stycke key={j} text={d.text} />
                  ) : (
                    <ul key={j} className="flex flex-col gap-2 pl-5 list-disc marker:text-gold text-white/60 leading-relaxed">
                      {d.punkter.map((pkt) => (
                        <li key={pkt.slice(0, 40)}>{rikText(pkt)}</li>
                      ))}
                    </ul>
                  )
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </main>
  );
}
