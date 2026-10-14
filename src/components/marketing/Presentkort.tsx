"use client";

import { useActionState, useState, startTransition } from "react";
import { submitGiftCard } from "@/app/actions";
import { FadeIn } from "@/components/ui/FadeIn";
import { HexagonPattern } from "@/components/ui/HexagonPattern";
import { giftCardAmounts, giftCardLimits, zettleGiftCardUrl } from "@/lib/site";


/**
 * Skickar formuläret via useActionState utan <form action>. React 19 nollställer
 * annars fälten när servern svarat, även vid fel. Med onSubmit + startTransition
 * står allt kvar tills förfrågan lyckats.
 */
function skickaUtanNollstallning(action: (fd: FormData) => void) {
  return (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    startTransition(() => action(fd));
  };
}

/**
 * Beloppsval, beställningsformulär och tackruta. Rubriker, text, stegen och
 * Zettle-rutan ligger i src/app/(marketing)/presentkort/page.tsx
 * (text från src/data/presentkort.ts).
 */
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
    <div className="relative">
      <HexagonPattern
        radius={46}
        className="text-gold/[0.03] [mask-image:radial-gradient(70%_70%_at_50%_50%,black,transparent)]"
        stroke="currentColor"
        strokeWidth={1}
      />
      <div className="relative">
        {state?.success ? (
          <FadeIn>
            <div className="border border-gold/30 bg-gold/5 p-12 text-center">
              <p className="text-gold font-mono tracking-widest text-sm uppercase mb-3">Tack för din beställning!</p>
              <p className="text-white/60 text-sm max-w-md mx-auto leading-relaxed">
                Vi hör av oss inom kort med en betallänk från Zettle. När betalningen
                är genomförd skickas presentkortet till mottagaren. Har du frågor når du
                oss på 076-035 38 08.
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
                    placeholder={`${giftCardLimits.min}-${giftCardLimits.max}`}
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
                    {effectiveAmount ? `${effectiveAmount} kr` : "-"}
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
                <form onSubmit={skickaUtanNollstallning(action)} className="flex flex-col gap-4">
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
                        ? `Beställ presentkort - ${effectiveAmount} kr →`
                        : "Välj ett belopp först"}
                  </button>
                  <p className="text-white/25 text-xs font-mono leading-relaxed">
                    Ingen betalning sker på den här sidan. Du får en betallänk från
                    Zettle - samma betalsystem vi använder i verkstaden. Vi hanterar
                    aldrig dina kortuppgifter.
                  </p>
                </form>
              )}
            </FadeIn>

          </div>
        )}
      </div>
    </div>
  );
}
