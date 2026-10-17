import { Bild, type Media } from "./Bild";
import { Loop } from "./Loop";

/**
 * Bildrad på tjänstesidorna (batch 07, grundfix 4): tre rutor i rad på dator,
 * en svepbar rad på mobil (rutorna cirka 75 % av bredden, scroll-snap).
 * Ingen rubrik och ingen text. Bara raden scrollar i sidled, inte sidan.
 */
export function Bildrad({ media }: { media: Media[] }) {
  return (
    <section className="py-16 px-8 bg-surface-2 border-t border-gold/10">
      <div className="max-w-6xl mx-auto">
        <div className="-mx-8 px-8 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2 md:mx-0 md:px-0 md:grid md:grid-cols-3 md:overflow-visible md:pb-0">
          {media.map((m) => (
            <div key={m.src} className="w-[75%] shrink-0 snap-start md:w-auto">
              {m.typ === "film" ? (
                <Loop src={m.src} width={m.width} height={m.height} label={m.text} />
              ) : (
                <Bild src={m.src} width={m.width} height={m.height} alt={m.text} sizes="(min-width: 768px) 370px, 75vw" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
