import { FadeIn } from "@/components/ui/FadeIn";
import { JsonLd, serviceSchema } from "@/components/marketing/JsonLd";
import { Brodsmulor, type Brodsmula } from "@/components/marketing/Brodsmulor";
import { Etikett } from "@/components/marketing/Etikett";
import { Stycke } from "@/components/marketing/Stycke";
import { BlockRutnat, HittaSektion, FaqSektion, Knappar } from "@/components/marketing/Sidblock";
import { sidPriser } from "@/data/priser";
import { Prislista } from "@/components/marketing/Prislista";
import { Bildrad } from "@/components/marketing/Bildrad";
import { tjanstPrisNyckel, type Tjanst } from "@/data/tjanster";

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

/** Prisrutan i heron (Fr X kr + not). Sidor utan `pricing` har ingen prisruta. */
function PrisRuta({ t }: { t: Tjanst }) {
  if (!t.pricing) return null;
  return (
    <>
      <div className="inline-flex flex-wrap items-end gap-x-4 gap-y-2 border border-gold/25 bg-gold/5 px-7 py-5">
        <span className="text-white/40 text-xs tracking-widest uppercase font-mono">{t.pricing.prefix ?? "Fr"}</span>
        <span className="text-4xl md:text-5xl font-black tracking-tighter text-gold leading-none">{t.pricing.fromPrice}</span>
        <span className="text-white/50 text-sm mb-1">{t.pricing.unit ?? "kr"}</span>
      </div>
      {t.pricing.note && (
        <p className="text-white/40 text-sm mt-3 max-w-md">{t.pricing.note}</p>
      )}
    </>
  );
}

/**
 * Tjänstesidans mall: rubriker och text läses från t.sida (ordagrant från
 * sidpaketet). Används för tjänstsidor direkt under /tjanster och för undersidor.
 */
export function TjanstSidaMall({ t, smulor }: { t: Tjanst; smulor: Brodsmula[] }) {
  const sida = t.sida;
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
            {t.pricing ? <PrisRuta t={t} /> : <Knappar />}
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
              <FadeIn
                key={item.heading}
                delay={i * 0.07}
                className={t.included.length % 2 === 1 && i === t.included.length - 1 ? "md:col-span-2" : ""}
              >
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
            {sidPriser[tjanstPrisNyckel(t)] && (
              <Prislista grupper={sidPriser[tjanstPrisNyckel(t)].grupper} fotnot={sidPriser[tjanstPrisNyckel(t)].fotnot} />
            )}
          </FadeIn>
        </div>
      </section>

      {/* Löpande avsnitt */}
      <section className="py-24 px-8 bg-surface-2 border-t border-gold/10">
        <div className="max-w-6xl mx-auto">
          <BlockRutnat sektioner={sida.sektioner} bg="bg-surface-2" />
        </div>
      </section>

      {/* Bildrad (batch 07): bara sidor med media */}
      {sida.media && sida.media.length > 0 && <Bildrad media={sida.media} />}

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
