import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { tjanster, getTjanstBySlug, type Tjanst, type TjanstSida } from "@/data/tjanster";
import { FadeIn } from "@/components/ui/FadeIn";
import { JsonLd, serviceSchema } from "@/components/marketing/JsonLd";
import { Brodsmulor } from "@/components/marketing/Brodsmulor";
import { Etikett } from "@/components/marketing/Etikett";
import { Stycke } from "@/components/marketing/Stycke";
import { BlockRutnat, HittaSektion, FaqSektion, Knappar } from "@/components/marketing/Sidblock";
import { sidMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return tjanster.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const t = getTjanstBySlug(slug);
  if (!t) return {};
  return sidMetadata({
    title: t.sida ? t.sida.title : `${t.title} i Örebro | KOM-fort Bilvård AB`,
    description: t.metaDesc,
    path: `/tjanster/${t.slug}`,
    ogType: "article",
  });
}

/** Citatrutan, samma på alla tjänstesidor. */
function Citat() {
  return (
    <div className="border border-gold/20 bg-gold/5 p-10 flex flex-col gap-6">
      <p className="text-white/80 text-lg leading-relaxed font-light">
        &ldquo;Vi behandlar varje bil som om den vore vår egen. Kvalitet och noggrannhet är aldrig förhandlingsbart.&rdquo;
      </p>
      <div>
        <p className="text-gold font-bold tracking-wide">KOM-fort Bilvård AB</p>
        <p className="text-white/40 text-sm">Örebro</p>
      </div>
    </div>
  );
}

/** Punktlistan "Varför välja KOM-fort?". */
function VarforLista({ punkter }: { punkter: string[] }) {
  return (
    <ul className="flex flex-col gap-4">
      {punkter.map((w, i) => (
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
  );
}

/** Prisrutan i heron (Fr X kr + not). */
function PrisRuta({ t }: { t: Tjanst }) {
  return (
    <>
      <div className="inline-flex flex-wrap items-end gap-x-4 gap-y-2 border border-gold/25 bg-gold/5 px-7 py-5">
        <span className="text-white/40 text-xs tracking-widest uppercase font-mono">Fr</span>
        <span className="text-4xl md:text-5xl font-black tracking-tighter text-gold leading-none">{t.pricing.fromPrice}</span>
        <span className="text-white/50 text-sm mb-1">{t.pricing.unit ?? "kr"}</span>
      </div>
      {t.pricing.note && (
        <p className="text-white/40 text-sm mt-3 max-w-md">{t.pricing.note}</p>
      )}
    </>
  );
}

/** Tilläggslistan med priser. */
function Tillagg({ t }: { t: Tjanst }) {
  if (!t.pricing.addons || t.pricing.addons.length === 0) return null;
  return (
    <>
      <div className="flex flex-col gap-px bg-gold/10 border border-gold/10">
        {t.pricing.addons.map((addon, i) => (
          <div key={i} className="bg-surface-1 flex items-center justify-between gap-6 px-6 py-5 hover:bg-surface-2 transition-colors">
            <span className="text-white/70 text-sm md:text-base">{addon.label}</span>
            <span className="text-gold font-bold tracking-wide whitespace-nowrap">{addon.price}</span>
          </div>
        ))}
      </div>
      <p className="text-white/30 text-xs mt-4 font-mono">* Slutpris beror på bilens storlek och skick.</p>
    </>
  );
}

/**
 * Ny mall (från batch 02): rubriker och text läses från t.sida.
 * Används av de tjänstesidor som skrivits om enligt sidpaket.
 */
function NyTjanstSida({ t, sida }: { t: Tjanst; sida: TjanstSida }) {
  const smulor = [
    { namn: "Startsida", href: "/" },
    { namn: "Tjänster", href: "/tjanster" },
    { namn: t.title, href: `/tjanster/${t.slug}` },
  ];
  return (
    <main className="min-h-screen overflow-x-hidden">
      {serviceSchema(t).map((schema, i) => (
        <JsonLd key={i} data={schema} />
      ))}

      {/* Hero */}
      <section className="pt-40 pb-20 px-8 bg-surface-1 border-b border-gold/10">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <Brodsmulor items={smulor} />
            <Etikett className="mb-5">{t.num} KOM-fort Bilvård AB · Örebro</Etikett>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6">{sida.h1}</h1>
            <div className="flex flex-col gap-5 max-w-2xl mb-10">
              {sida.intro.map((s) => (
                <Stycke key={s.slice(0, 40)} text={s} className="text-white/50 text-lg leading-relaxed font-light" />
              ))}
            </div>
            <PrisRuta t={t} />
          </FadeIn>
        </div>
      </section>

      {/* Vad ingår */}
      <section className="py-24 px-8 bg-surface-2">
        <div className="max-w-6xl mx-auto">
          <FadeIn>
            <Etikett>Vad ingår</Etikett>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-12">{sida.ingarH2}</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gold/10">
            {t.included.map((item, i) => (
              <FadeIn key={item.heading} delay={i * 0.07}>
                <div className="bg-surface-2 p-8 hover:bg-surface-1 transition-colors group h-full">
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

      {/* Pris och tillägg */}
      <section className="py-24 px-8 bg-surface-1 border-t border-gold/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-16 items-start">
          <FadeIn>
            <Etikett>Pris</Etikett>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-6">{sida.prisH2}</h2>
            <Stycke text={sida.prisText} className="text-white/50 leading-relaxed max-w-md" />
          </FadeIn>
          <FadeIn delay={0.1}>
            <Tillagg t={t} />
          </FadeIn>
        </div>
      </section>

      {/* Löpande avsnitt */}
      <section className="py-24 px-8 bg-surface-2 border-t border-gold/10">
        <div className="max-w-6xl mx-auto">
          <BlockRutnat sektioner={sida.sektioner} bg="bg-surface-2" />
        </div>
      </section>

      {/* Varför välja oss */}
      <section className="py-24 px-8 bg-surface-1 border-t border-gold/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <Etikett>Varför oss</Etikett>
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-8">{sida.varforH2}</h2>
            <VarforLista punkter={t.why} />
          </FadeIn>
          <FadeIn delay={0.15}>
            <Citat />
          </FadeIn>
        </div>
      </section>

      <HittaSektion sektion={sida.hitta} bg="bg-surface-2" />

      <FaqSektion h2={sida.faqH2} fragor={t.faq} bg="bg-surface-1" />

      {/* Boka */}
      <section className="py-24 px-8 bg-surface-2 border-t border-gold/10">
        <FadeIn>
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-2">{sida.bokaH2}</h2>
              <Stycke text={sida.bokaText} className="text-white/50" />
            </div>
            <Knappar className="shrink-0" />
          </div>
        </FadeIn>
      </section>
    </main>
  );
}

/** Gammal mall: ser ut och läser som tidigare tills sidan skrivs om i en batch. */
function GammalTjanstSida({ t }: { t: Tjanst }) {
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
            <PrisRuta t={t} />
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
              <Tillagg t={t} />
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
            <VarforLista punkter={t.why} />
          </FadeIn>
          <FadeIn delay={0.15}>
            <Citat />
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
            <Knappar className="shrink-0" />
          </div>
        </FadeIn>
      </section>

    </main>
  );
}

export default async function TjanstPage({ params }: Props) {
  const { slug } = await params;
  const t = getTjanstBySlug(slug);
  if (!t) notFound();
  return t.sida ? <NyTjanstSida t={t} sida={t.sida} /> : <GammalTjanstSida t={t} />;
}
