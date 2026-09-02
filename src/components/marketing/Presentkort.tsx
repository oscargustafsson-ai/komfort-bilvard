"use client";

import { useActionState, useState } from "react";
import { submitGiftCard } from "@/app/actions";
import { FadeIn } from "@/components/ui/FadeIn";
import { HexagonPattern } from "@/components/ui/HexagonPattern";
import { giftCardAmounts, giftCardLimits, zettleGiftCardUrl } from "@/lib/site";

const steg = [
  { num: "01", title: "Välj belopp", text: "Bestäm hur mycket presentkortet ska vara värt — eller ange ett eget belopp." },
  { num: "02", title: "Fyll i uppgifter", text: "Ange vem presentkortet är till och vilken mejladress det ska skickas till." },
  { num: "03", title: "Betala via Zettle", text: "Du får en betallänk från Zettle. När betalningen är klar skickas presentkortet till mottagaren." },
];

export default function Presentkort() {
  const [state, action, pending] = useActionState(submitGiftCard, null);
  const [amount, setAmount] = useState<number>(giftCardAmounts[1]);
  const [custom, setCustom] = useState("");

  // Eget belopp vinner när det är ifyllt och giltigt; annars gäller vald knapp.
  const customNum = Number(custom);
  const customValid =
    custom !== "" &&
    Number.isInteger(customNum) &&
    customNum >= giftCardLimits.min &&
    customNum <= giftCardLimits.max;
  const effectiveAmount = custom !== "" ? (customValid ? customNum : null) : amount;

  return (
    <section className="grain-section relative py-32 px-8 bg-surface-2 border-t border-gold/10 overflow-hidden">
      {/* Samma hexmönster som Om oss, men svagare (0.03 mot 0.04) — syns, utan att ta över. */}
      <HexagonPattern
        radius={46}
        className="text-gold/[0.03] [mask-image:radial-gradient(70%_70%_at_50%_50%,black,transparent)]"
        stroke="currentColor"
        strokeWidth={1}
      />
      <div className="relative max-w-6xl mx-auto">

        <FadeIn>
          <p className="text-gold text-xs tracking-[0.4em] uppercase mb-4 font-mono">— Presentkort</p>
          <h2 className="font-[family-name:var(--font-bebas)] text-6xl md:text-7xl tracking-wide mb-6">
            GE BORT<br />EN NYTVÄTTAD BIL.
          </h2>
          <p className="text-white/50 text-base leading-relaxed max-w-xl mb-8">
            Ett presentkort hos KOM-FORT Bilvård gäller på alla våra tjänster — rekond,
            polering, lackskydd eller en enkel biltvätt. Mottagaren väljer själv.
          </p>

          {/* Betalningen sker hos Zettle — sagt tidigt så kunden vet innan hen fyller i något. */}
          <div className="inline-flex items-center gap-3 border border-gold/20 bg-gold/[0.06] px-5 py-3 mb-16">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-4 h-4 text-gold shrink-0">
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </svg>
            <p className="text-white/60 text-sm">
              Betalningen sker tryggt via <span className="text-gold font-semibold">Zettle</span> — vi hanterar aldrig dina kortuppgifter.
            </p>
          </div>
        </FadeIn>

        {/* Så funkar det */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-20">
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

        {state?.success ? (
          <FadeIn>
            <div className="border border-gold/30 bg-gold/5 p-12 text-center">
              <p className="text-gold font-mono tracking-widest text-sm uppercase mb-3">Tack för din beställning!</p>
              <p className="text-white/60 text-sm max-w-md mx-auto leading-relaxed">
                Vi hör av oss inom kort med en betallänk från Zettle. När betalningen
                är genomförd skickas presentkortet till mottagaren. Har du frågor når du
                oss på 076-194 35 19.
              </p>
            </div>
          </FadeIn>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Beloppsval */}
            <FadeIn>
              <div className="grain-card relative overflow-hidden p-8 border border-white/8 bg-white/[0.03] h-full">
                <p className="text-gold/50 text-[10px] tracking-[0.35em] uppercase font-mono mb-6">Välj belopp</p>

                <div className="grid grid-cols-2 gap-3 mb-6">
                  {giftCardAmounts.map((a) => {
                    const active = custom === "" && amount === a;
                    return (
                      <button
                        key={a}
                        type="button"
                        onClick={() => {
                          setAmount(a);
                          setCustom("");
                        }}
                        aria-pressed={active}
                        className={`grain relative overflow-hidden py-5 rounded-lg border text-lg font-bold tracking-tight transition-all duration-300 ${
                          active
                            ? "border-gold bg-gold text-black"
                            : "border-white/10 bg-white/[0.02] text-white/70 hover:border-gold/50 hover:text-gold"
                        }`}
                      >
                        {a} kr
                      </button>
                    );
                  })}
                </div>

                <label htmlFor="custom-amount" className="block text-white/40 text-xs tracking-widest uppercase font-mono mb-2">
                  Eller eget belopp
                </label>
                <div className="relative">
                  <input
                    id="custom-amount"
                    type="number"
                    inputMode="numeric"
                    min={giftCardLimits.min}
                    max={giftCardLimits.max}
                    step={100}
                    value={custom}
                    onChange={(e) => setCustom(e.target.value)}
                    placeholder={`${giftCardLimits.min}–${giftCardLimits.max}`}
                    className="w-full bg-white/5 border border-white/10 text-white px-5 py-4 pr-12 text-sm placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors"
                  />
                  <span className="absolute right-5 top-1/2 -translate-y-1/2 text-white/30 text-sm pointer-events-none">kr</span>
                </div>
                {custom !== "" && !customValid && (
                  <p className="text-red-400 text-xs font-mono mt-2">
                    Ange ett belopp mellan {giftCardLimits.min} och {giftCardLimits.max} kr.
                  </p>
                )}

                <div className="mt-8 pt-6 border-t border-white/8 flex items-baseline justify-between">
                  <span className="text-white/40 text-xs tracking-widest uppercase font-mono">Summa</span>
                  <span className="font-[family-name:var(--font-bebas)] text-4xl text-gold tracking-wide">
                    {effectiveAmount ? `${effectiveAmount} kr` : "—"}
                  </span>
                </div>
              </div>
            </FadeIn>

            {/* Beställning */}
            <FadeIn delay={0.15}>
              {zettleGiftCardUrl ? (
                /* Zettle-länken är konfigurerad: kunden betalar direkt hos Zettle. */
                <div className="grain-card relative overflow-hidden p-8 border border-white/8 bg-white/[0.03] h-full flex flex-col justify-center text-center">
                  <p className="text-gold/50 text-[10px] tracking-[0.35em] uppercase font-mono mb-4">Beställ direkt</p>
                  <p className="text-white/60 text-sm leading-relaxed mb-8 max-w-sm mx-auto">
                    Du skickas vidare till vår betalsida hos Zettle där du slutför köpet.
                    Presentkortet skickas sedan till mottagarens mejl.
                  </p>
                  <a
                    href={zettleGiftCardUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="grain relative overflow-hidden bg-gold text-black px-8 py-4 font-bold tracking-widest uppercase text-sm rounded-lg transition-all after:absolute after:inset-0 after:bg-white/20 after:translate-x-[-100%] hover:after:translate-x-0 after:transition-transform after:duration-300"
                  >
                    Köp presentkort →
                  </a>
                  <p className="text-white/25 text-xs font-mono mt-5">Betalning sker säkert via Zettle</p>
                </div>
              ) : (
                /* Ingen Zettle-länk än: vi tar emot beställningen via mejl. */
                <form action={action} className="flex flex-col gap-4">
                  <input type="hidden" name="amount" value={effectiveAmount ?? ""} />
                  <input
                    name="buyerName"
                    type="text"
                    placeholder="Ditt namn"
                    required
                    className="bg-white/5 border border-white/10 text-white px-5 py-4 text-sm placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors"
                  />
                  <input
                    name="buyerEmail"
                    type="email"
                    placeholder="Din e-post"
                    required
                    className="bg-white/5 border border-white/10 text-white px-5 py-4 text-sm placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors"
                  />
                  <input
                    name="buyerPhone"
                    type="tel"
                    placeholder="Telefonnummer (valfritt)"
                    className="bg-white/5 border border-white/10 text-white px-5 py-4 text-sm placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors"
                  />
                  <input
                    name="recipient"
                    type="email"
                    placeholder="Mottagarens e-post (valfritt)"
                    className="bg-white/5 border border-white/10 text-white px-5 py-4 text-sm placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors"
                  />
                  <textarea
                    name="greeting"
                    placeholder="Hälsning till mottagaren (valfritt)"
                    rows={3}
                    className="bg-white/5 border border-white/10 text-white px-5 py-4 text-sm placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors resize-none"
                  />
                  {state?.error && (
                    <p className="text-red-400 text-sm font-mono">{state.error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={pending || effectiveAmount === null}
                    className="grain relative overflow-hidden bg-gold text-black px-8 py-4 font-bold tracking-widest uppercase text-sm rounded-lg transition-all disabled:opacity-50 after:absolute after:inset-0 after:bg-white/20 after:translate-x-[-100%] hover:after:translate-x-0 after:transition-transform after:duration-300"
                  >
                    {pending
                      ? "Skickar..."
                      : effectiveAmount
                        ? `Beställ presentkort – ${effectiveAmount} kr →`
                        : "Välj ett belopp först"}
                  </button>
                  <p className="text-white/25 text-xs font-mono leading-relaxed">
                    Ingen betalning sker på den här sidan. Du får en betallänk från
                    Zettle — samma betalsystem vi använder i verkstaden. Vi hanterar
                    aldrig dina kortuppgifter.
                  </p>
                </form>
              )}
            </FadeIn>

          </div>
        )}
      </div>
    </section>
  );
}
