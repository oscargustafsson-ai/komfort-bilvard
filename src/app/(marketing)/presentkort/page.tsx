import Presentkort from "@/components/marketing/Presentkort";
import { FadeIn } from "@/components/ui/FadeIn";
import { JsonLd, faqSchema } from "@/components/marketing/JsonLd";
import { Brodsmulor } from "@/components/marketing/Brodsmulor";
import { Etikett } from "@/components/marketing/Etikett";
import { Stycke } from "@/components/marketing/Stycke";
import { BlockRutnat, HittaSektion, FaqSektion } from "@/components/marketing/Sidblock";
import { presentkortsida } from "@/data/presentkort";
import { sidMetadata } from "@/lib/metadata";

export const metadata = sidMetadata({
  title: presentkortsida.title,
  description: presentkortsida.meta,
  path: "/presentkort",
});

const smulor = [
  { namn: "Startsida", href: "/" },
  { namn: "Presentkort", href: "/presentkort" },
];

const steg = [
  { num: "01", title: "Välj belopp", text: "Bestäm hur mycket presentkortet ska vara värt - eller ange ett eget belopp." },
  { num: "02", title: "Fyll i uppgifter", text: "Ange vem presentkortet är till och vilken mejladress det ska skickas till." },
  { num: "03", title: "Betala via Zettle", text: "Du får en betallänk från Zettle. När betalningen är klar skickas presentkortet till mottagaren." },
];

export default function PresentkortPage() {
  const p = presentkortsida;
  return (
    <main className="min-h-screen overflow-x-hidden">
      <JsonLd data={faqSchema(p.faq.fragor)} />

      {/* Hero */}
      <section className="pt-40 pb-16 px-8 bg-surface-1">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <Brodsmulor items={smulor} />
            <Etikett className="mb-5">Presentkort</Etikett>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6">{p.h1}</h1>
            <div className="flex flex-col gap-5 max-w-2xl mb-8">
              {p.intro.map((s) => (
                <Stycke key={s.slice(0, 40)} text={s} className="text-white/50 text-lg leading-relaxed font-light" />
              ))}
            </div>

            {/* Betalningen sker hos Zettle, sagt tidigt så kunden vet innan hen fyller i något. */}
            <div className="inline-flex items-center gap-3 border border-gold/20 bg-gold/[0.06] px-5 py-3">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4 text-gold shrink-0" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
              </svg>
              <p className="text-white/60 text-sm">
                Betalningen sker tryggt via <span className="text-gold font-semibold">Zettle</span> - vi hanterar aldrig dina kortuppgifter.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Så beställer du: stegen, beloppsvalet och formuläret */}
      <section className="grain-section relative py-20 px-8 bg-surface-2 border-t border-gold/10 overflow-hidden">
        <div className="relative max-w-6xl mx-auto">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-6">{p.bestall.h2}</h2>
            <div className="max-w-3xl mb-12">
              {p.bestall.stycken.map((s) => (
                <Stycke key={s.slice(0, 40)} text={s} />
              ))}
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
            {steg.map((s, i) => (
              <FadeIn key={s.num} delay={i * 0.08}>
                <div className="grain-card relative overflow-hidden h-full p-7 border border-white/8 bg-white/[0.03]">
                  <p className="font-[family-name:var(--font-bebas)] text-5xl text-gold/25 leading-none mb-4">{s.num}</p>
                  <p className="text-white font-bold tracking-tight mb-2">{s.title}</p>
                  <p className="text-white/50 text-sm leading-relaxed">{s.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <Presentkort />
        </div>
      </section>

      {/* Vad gäller, så används, passar många */}
      <section className="py-24 px-8 bg-surface-1 border-t border-gold/10">
        <div className="max-w-6xl mx-auto">
          <BlockRutnat sektioner={p.sektioner} bg="bg-surface-1" />
        </div>
      </section>

      <HittaSektion sektion={p.hitta} bg="bg-surface-2" />

      <FaqSektion h2={p.faq.h2} fragor={p.faq.fragor} bg="bg-surface-1" />
    </main>
  );
}
