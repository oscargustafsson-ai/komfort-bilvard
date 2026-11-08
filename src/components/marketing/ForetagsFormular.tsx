"use client";

import { useActionState, startTransition } from "react";
import Link from "next/link";
import { submitForetag } from "@/app/actions";
import { foretagsval } from "@/data/foretagsformular";

/**
 * Skickar formuläret via useActionState utan <form action>, som i Kontakt.tsx.
 * React 19 nollställer annars fälten när servern svarat, även vid fel.
 */
function skickaUtanNollstallning(action: (fd: FormData) => void) {
  return (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    startTransition(() => action(fd));
  };
}

/** Samma fältstil som formuläret i Kontakt.tsx. */
const falt = "bg-white/5 border border-white/10 text-white px-5 py-4 text-sm placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors";

/**
 * Företagsformuläret på /tjanster/foretag (batch 12b). Byggt som formuläret i
 * Kontakt.tsx. Valen kommer från foretagsformular.ts, som serveråtgärden också läser.
 */
export default function ForetagsFormular() {
  const [state, action, pending] = useActionState(submitForetag, null);

  if (state?.success) {
    return (
      <div className="border border-gold/30 bg-gold/5 p-8 text-center h-full flex flex-col items-center justify-center">
        <p className="text-gold font-mono tracking-widest text-sm uppercase mb-2">Tack!</p>
        <p className="text-white/60 text-sm">Vi hör av oss inom kort.</p>
      </div>
    );
  }

  return (
    <form onSubmit={skickaUtanNollstallning(action)} className="flex flex-col gap-4">
      <input name="foretag" type="text" placeholder="Företagets namn" aria-label="Företagets namn" required className={falt} />
      <input name="name" type="text" placeholder="Ditt namn" aria-label="Ditt namn" required className={falt} />
      <input name="phone" type="tel" placeholder="Telefonnummer" aria-label="Telefonnummer" required className={falt} />
      <input name="email" type="email" placeholder="E-post" aria-label="E-post" className={falt} />

      {/* Valen, grupp för grupp. Hela etiketten går att trycka på. */}
      <fieldset className="flex flex-col gap-2 pt-2">
        <legend className="text-white/70 text-sm mb-3">Vad behöver ni?</legend>
        {foretagsval.map((g) => (
          <div key={g.grupp}>
            <p className="text-gold/60 text-[10px] tracking-[0.35em] uppercase font-mono mb-1">{g.grupp}</p>
            {g.val.map((v) => (
              <label key={v} className="flex items-center gap-3 text-white/80 text-sm py-3 cursor-pointer">
                <input type="checkbox" name="val" value={v} className="accent-[#C9A84C] w-4 h-4" />
                {v}
              </label>
            ))}
          </div>
        ))}
      </fieldset>

      <div className="flex flex-col gap-2">
        <label htmlFor="foretag-bilar" className="text-white/70 text-sm">Hur många bilar?</label>
        <input id="foretag-bilar" name="bilar" type="number" min={1} max={999} placeholder="Antal bilar" required className={falt} />
      </div>

      <textarea name="message" placeholder="Meddelande..." aria-label="Meddelande..." rows={4} className={`${falt} resize-none`} />
      {state?.error && <p className="text-red-400 text-sm font-mono">{state.error}</p>}
      <button
        type="submit"
        disabled={pending}
        className="grain relative overflow-hidden bg-gold text-black px-8 py-3 font-bold tracking-widest uppercase text-sm rounded-lg transition-all disabled:opacity-50 after:absolute after:inset-0 after:bg-white/20 after:translate-x-[-100%] hover:after:translate-x-0 after:transition-transform after:duration-300"
      >
        {pending ? "Skickar..." : "Skicka förfrågan →"}
      </button>
      <p className="text-white/25 text-xs font-mono leading-relaxed">
        Läs i vår <Link href="/integritetspolicy" className="text-gold/70 underline underline-offset-4 hover:text-gold transition-colors">integritetspolicy</Link> hur vi hanterar dina uppgifter.
      </p>
    </form>
  );
}
