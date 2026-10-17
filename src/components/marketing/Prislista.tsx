import { STANDARD_FOTNOT, type Prisgrupp } from "@/data/priser";

/**
 * Prislistan: grupper med rader och en fotnot. Gruppnamnen är p, inte rubriker.
 * fotnot: undefined = standardfotnoten, null = ingen fotnot, text = egen fotnot.
 * Används av tjänstesidorna och /priser (batch 07, grundfix 6).
 */
export function Prislista({ grupper, fotnot }: { grupper: Prisgrupp[]; fotnot?: string | null }) {
  if (grupper.length === 0) return null;
  const text = fotnot === undefined ? STANDARD_FOTNOT : fotnot;
  return (
    <>
      <div className="flex flex-col gap-8">
        {grupper.map((g, gi) => (
          <div key={gi}>
            {g.rubrik && (
              <p className="text-gold/70 text-[11px] tracking-[0.3em] uppercase font-mono mb-3">{g.rubrik}</p>
            )}
            <div className="flex flex-col gap-px bg-gold/10 border border-gold/10">
              {g.rader.map((r) => (
                <div key={r.label} className="bg-surface-1 flex items-center justify-between gap-6 px-6 py-4 hover:bg-surface-2 transition-colors">
                  <span className="text-white/70 text-sm md:text-base">{r.label}</span>
                  <span className="text-gold font-bold tracking-wide whitespace-nowrap">{r.pris}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      {text && <p className="text-white/30 text-xs mt-4 font-mono">{text}</p>}
    </>
  );
}
