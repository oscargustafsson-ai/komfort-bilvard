"use client";

import { useActionState, useState, startTransition } from "react";
import Link from "next/link";
import { submitBooking } from "@/app/actions";
import { tjanstpriser, getTjanstpris, beraknaPris, kr } from "@/data/priser";

const falt =
  "bg-white/5 border border-white/10 text-white px-5 py-4 text-sm placeholder:text-white/30 focus:outline-none focus:border-gold transition-colors w-full";
const valj =
  "bg-surface-1 border border-white/10 text-white/80 px-5 py-4 text-sm focus:outline-none focus:border-gold transition-colors w-full";
const etikett = "block text-gold/70 text-[11px] tracking-[0.3em] uppercase font-mono mb-2";

/** Hämtning erbjuds inte för en snabb tvätt eller strålkastarpolering (Goran 2026-10-16). */
const UTAN_HAMTNING = new Set(["handtvatt-in-ut", "utvandig-handtvatt", "invandig-tvatt", "stralkastarpolering"]);

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
 * Prisväljaren och bokningsformuläret på /boka. Priserna och summan kommer
 * från priser.ts; servern (submitBooking) räknar om summan från samma källa.
 */
export default function Bokning() {
  const [state, action, pending] = useActionState(submitBooking, null);
  const [tjanst, setTjanst] = useState("");
  const [val, setVal] = useState("");
  const [storlek, setStorlek] = useState("");
  const [tillagg, setTillagg] = useState<string[]>([]);

  const t = getTjanstpris(tjanst);
  const pris = t ? beraknaPris({ tjanst, val: val || undefined, storlek: storlek || undefined, tillagg }) : null;

  function byTjanst(id: string) {
    setTjanst(id);
    const ny = getTjanstpris(id);
    setVal(ny?.val ? ny.val.rader[0].id : "");
    setStorlek(ny?.storlekstillagg ? ny.storlekstillagg[0].id : "");
    setTillagg([]);
  }

  function byTillagg(id: string, pa: boolean) {
    if (!t) return;
    const x = t.tillagg.find((a) => a.id === id);
    if (!x) return;
    setTillagg((nu) => {
      // Högst ett tillägg per grupp (lätt polering/1-stegspolering, lackskydd 2/3/5 år).
      const utanGrupp = x.grupp ? nu.filter((v) => t.tillagg.find((a) => a.id === v)?.grupp !== x.grupp) : nu.filter((v) => v !== id);
      return pa ? [...utanGrupp, id] : utanGrupp;
    });
  }

  if (state?.success) {
    return (
      <div className="border border-gold/30 bg-gold/5 p-10 text-center">
        <p className="text-gold font-mono tracking-widest text-sm uppercase mb-2">Tack!</p>
        <p className="text-white/70">Tack! Vi hör av oss inom kort för att bekräfta dag och tid.</p>
      </div>
    );
  }

  return (
    <form onSubmit={skickaUtanNollstallning(action)} className="grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Prisväljaren */}
      <div className="flex flex-col gap-6">
        <div>
          <label htmlFor="tjanst" className={etikett}>Välj tjänst</label>
          <select id="tjanst" name="tjanst" required value={tjanst} onChange={(e) => byTjanst(e.target.value)} className={valj}>
            <option value="">Välj tjänst</option>
            {tjanstpriser.filter((x) => x.bokningsbar).map((x) => (
              <option key={x.id} value={x.id}>{x.namn}</option>
            ))}
          </select>
        </div>

        {t?.val && (
          <div>
            <label htmlFor="val" className={etikett}>{t.val.etikett}</label>
            <select id="val" name="val" value={val} onChange={(e) => setVal(e.target.value)} className={valj}>
              {t.val.rader.map((r) => (
                <option key={r.id} value={r.id}>{`${r.label} (${kr(r.pris)} kr)`}</option>
              ))}
            </select>
          </div>
        )}

        {t?.storlekstillagg && (
          <div>
            <label htmlFor="storlek" className={etikett}>Bilstorlek</label>
            <select id="storlek" name="storlek" value={storlek} onChange={(e) => setStorlek(e.target.value)} className={valj}>
              {t.storlekstillagg.map((r) => (
                <option key={r.id} value={r.id}>{r.pris ? `${r.label} (+${kr(r.pris)} kr)` : r.label}</option>
              ))}
            </select>
          </div>
        )}

        {t && t.tillagg.length > 0 && (
          <fieldset>
            <legend className={etikett}>Tillägg</legend>
            <div className="flex flex-col gap-px bg-gold/10 border border-gold/10">
              {t.tillagg.map((x) => {
                const pa = tillagg.includes(x.id);
                return (
                  <label key={x.id} className={`flex items-center justify-between gap-4 px-5 py-4 cursor-pointer transition-colors ${pa ? "bg-gold/10" : "bg-surface-1 hover:bg-surface-2"}`}>
                    <span className="flex items-center gap-3 text-white/80 text-sm">
                      <input
                        type="checkbox"
                        name="tillagg"
                        value={x.id}
                        checked={pa}
                        onChange={(e) => byTillagg(x.id, e.target.checked)}
                        className="accent-[#C9A84C] w-4 h-4"
                      />
                      {x.label}
                    </span>
                    <span className="text-gold font-bold text-sm whitespace-nowrap">{kr(x.pris)} kr</span>
                  </label>
                );
              })}
            </div>
          </fieldset>
        )}

        <div className="border border-gold/25 bg-gold/5 px-6 py-5">
          <p className="text-white text-xl font-bold tracking-tight">
            Uppskattat pris: {pris === null ? "-" : `${kr(pris)} kr`}
          </p>
          <p className="text-white/40 text-sm mt-2">Slutpriset kan påverkas av bilens skick. Du betalar via Zettle.</p>
        </div>
      </div>

      {/* Kontaktuppgifter */}
      <div className="flex flex-col gap-4">
        <div>
          <label htmlFor="name" className={etikett}>Namn</label>
          <input id="name" name="name" type="text" required autoComplete="name" className={falt} />
        </div>
        <div>
          <label htmlFor="phone" className={etikett}>Telefon</label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" className={falt} />
        </div>
        <div>
          <label htmlFor="email" className={etikett}>E-post</label>
          <input id="email" name="email" type="email" autoComplete="email" className={falt} />
        </div>
        <div>
          <label htmlFor="day" className={etikett}>Önskad dag</label>
          <input id="day" name="day" type="text" className={falt} />
        </div>
        {t && !UTAN_HAMTNING.has(t.id) && (
          <label className="flex items-center gap-3 text-white/80 text-sm py-2 cursor-pointer">
            <input type="checkbox" name="pickup" className="accent-[#C9A84C] w-4 h-4" />
            Jag vill att ni hämtar och lämnar bilen
          </label>
        )}
        <div>
          <label htmlFor="message" className={etikett}>Meddelande</label>
          <textarea id="message" name="message" rows={4} className={`${falt} resize-none`} />
        </div>
        {state?.error && <p className="text-red-400 text-sm font-mono">{state.error}</p>}
        <button
          type="submit"
          disabled={pending}
          className="grain relative overflow-hidden bg-gold text-black px-8 py-4 font-bold tracking-widest uppercase text-sm rounded-lg transition-all disabled:opacity-50 after:absolute after:inset-0 after:bg-white/20 after:translate-x-[-100%] hover:after:translate-x-0 after:transition-transform after:duration-300"
        >
          {pending ? "Skickar..." : "Skicka bokningsförfrågan"}
        </button>
        <p className="text-white/25 text-xs font-mono leading-relaxed">
          Läs i vår <Link href="/integritetspolicy" className="text-gold/70 underline underline-offset-4 hover:text-gold transition-colors">integritetspolicy</Link> hur vi hanterar dina uppgifter.
        </p>
      </div>
    </form>
  );
}
