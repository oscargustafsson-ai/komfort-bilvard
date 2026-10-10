import type { Metadata } from "next";
import { sidMetadata } from "@/lib/metadata";
import { Etikett } from "@/components/marketing/Etikett";
import { notFound } from "next/navigation";
import Link from "next/link";
import { tjanster, getTjanstBySlug } from "@/data/tjanster";
import { FadeIn } from "@/components/ui/FadeIn";
import { JsonLd, serviceSchema } from "@/components/marketing/JsonLd";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return tjanster.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const t = getTjanstBySlug(slug);
  if (!t) return {};
  return sidMetadata({
    title: `${t.title} i Örebro | KOM-fort Bilvård AB`,
    description: t.metaDesc,
    path: `/tjanster/${t.slug}`,
    ogType: "article",
  });
}

export default async function TjanstPage({ params }: Props) {
  const { slug } = await params;
  const t = getTjanstBySlug(slug);
  if (!t) notFound();

  return (
    <main className="min-h-screen overflow-x-hidden">

      {serviceSchema(t).map((schema, i) => (
        <JsonLd key={i} data={schema} />
      ))}

      {/* Hero */}
      <section className="pt-40 pb-20 px-8 bg-surface-1 border-b border-gold/10">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <Link href="/tjanster" className="inline-flex items-center gap-2 text-gold/60 text-xs tracking-widest uppercase font-mono mb-10 hover:text-gold transition-colors">
              ← Alla tjänster
            </Link>
            <Etikett className="mb-5">{t.num} KOM-fort Bilvård AB · Örebro</Etikett>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6">{t.hero}</h1>
            <p className="text-white/50 text-lg max-w-2xl leading-relaxed font-light mb-10">{t.intro}</p>

            <div className="inline-flex flex-wrap items-end gap-x-4 gap-y-2 border border-gold/25 bg-gold/5 px-7 py-5">
              <span className="text-white/40 text-xs tracking-widest uppercase font-mono">Fr</span>
              <span className="text-4xl md:text-5xl font-black tracking-tighter text-gold leading-none">{t.pricing.fromPrice}</span>
              <span className="text-white/50 text-sm mb-1">{t.pricing.unit ?? "kr"}</span>
            </div>
            {t.pricing.note && (
              <p className="text-white/40 text-sm mt-3 max-w-md">{t.pricing.note}</p>
            )}
          </FadeIn>
        </div>
      </section>

      {/* Vad ingår */}
      <section className="py-24 px-8 bg-surface-2">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <Etikett>Vad ingår</Etikett>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-12">Vad ingår i {t.title}?</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gold/10">
            {t.included.map((item, i) => (
              <FadeIn key={item.heading} delay={i * 0.07}>
                <div className="bg-surface-2 p-8 hover:bg-surface-1 transition-colors group">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-gold mt-1 shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </span>
                    <h3 className="text-white font-bold text-base group-hover:text-gold transition-colors">{item.heading}</h3>
                  </div>
                  <p className="text-white/40 text-sm leading-relaxed pl-7">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Pris & tillägg */}
      {t.pricing.addons && t.pricing.addons.length > 0 && (
        <section className="py-24 px-8 bg-surface-1 border-t border-gold/10">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-16 items-start">
            <FadeIn>
              <Etikett>Pris</Etikett>
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-6">Grundpris & tillägg</h2>
              <p className="text-white/50 leading-relaxed max-w-md">
                Grundpaketet börjar från <span className="text-gold font-bold">{t.pricing.fromPrice} {t.pricing.unit ?? "kr"}</span>. Vill du ha ett djupare resultat eller längre skydd finns följande tillägg.
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="flex flex-col gap-px bg-gold/10 border border-gold/10">
                {t.pricing.addons.map((addon, i) => (
                  <div key={i} className="bg-surface-1 flex items-center justify-between gap-6 px-6 py-5 hover:bg-surface-2 transition-colors">
                    <span className="text-white/70 text-sm md:text-base">{addon.label}</span>
                    <span className="text-gold font-bold tracking-wide whitespace-nowrap">{addon.price}</span>
                  </div>
                ))}
              </div>
              <p className="text-white/30 text-xs mt-4 font-mono">* Slutpris beror på bilens storlek och skick.</p>
            </FadeIn>
          </div>
        </section>
      )}

      {/* Varför välja oss */}
      <section className="py-24 px-8 bg-surface-2 border-t border-gold/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <Etikett>Varför oss</Etikett>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-8">Varför välja KOM-fort?</h2>
            <ul className="flex flex-col gap-4">
              {t.why.map((w, i) => (
                <li key={i} className="flex items-start gap-3 text-white/70">
                  <span className="text-gold shrink-0 mt-1">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                      <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm3.47 7.22a.75.75 0 0 1 0 1.06l-3.5 3.5a.75.75 0 0 1-1.06 0l-1.5-1.5a.75.75 0 1 1 1.06-1.06l.97.97 2.97-2.97a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
                    </svg>
                  </span>
                  <span className="text-base">{w}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="border border-gold/20 bg-gold/5 p-10 flex flex-col gap-6">
              <p className="text-white/80 text-lg leading-relaxed font-light">
                &ldquo;Vi behandlar varje bil som om det vore vår egen. Kvalitet och noggrannhet är aldrig förhandlingsbart.&rdquo;
              </p>
              <div>
                <p className="text-gold font-bold tracking-wide">KOM-fort Bilvård AB</p>
                <p className="text-white/40 text-sm">Örebro</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-8 bg-surface-1 border-t border-gold/10">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <Etikett>Vanliga frågor</Etikett>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-12">Frågor & Svar</h2>
          </FadeIn>
          <div className="flex flex-col gap-px bg-gold/10">
            {t.faq.map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="bg-surface-2 p-8">
                  <h3 className="text-white font-bold mb-3">{item.q}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{item.a}</p>
                </div>
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
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-2">Redo att boka {t.title.toLowerCase()}?</h2>
              <p className="text-white/50">Ring oss eller skicka en förfrågan - vi svarar snabbt.</p>
            </div>
            <div className="flex gap-4 flex-wrap shrink-0">
              <a
                href="tel:0761943519"
                className="grain relative overflow-hidden bg-gold text-black px-8 py-3 font-bold tracking-widest uppercase text-sm rounded-lg transition-all after:absolute after:inset-0 after:bg-white/20 after:translate-x-[-100%] hover:after:translate-x-0 after:transition-transform after:duration-300"
              >
                Ring 076-194 35 19
              </a>
              <Link
                href="/kontakt"
                className="grain-card relative overflow-hidden border border-white/20 text-white/70 px-8 py-3 tracking-widest uppercase text-sm rounded-lg transition-all hover:border-gold hover:text-gold after:absolute after:inset-0 after:bg-gold/10 after:translate-x-[-100%] hover:after:translate-x-0 after:transition-transform after:duration-300"
              >
                Skicka förfrågan
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

    </main>
  );
}
