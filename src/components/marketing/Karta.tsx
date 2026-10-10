import { site } from "@/lib/site";

/**
 * Delad Google-karta. Läggs direkt under sidans H2 som börjar med
 * "Hitta till oss". Inbäddning och länk kommer från site.karta (fakta.md).
 */
export function Karta({ className = "" }: { className?: string }) {
  return (
    <div className={`relative border border-white/8 overflow-hidden ${className}`}>
      <iframe
        title="KOM-fort Bilvård AB på kartan"
        src={site.karta.embed}
        width="100%"
        height="340"
        style={{ border: 0, display: "block", filter: "grayscale(1) invert(0.9) contrast(0.85)" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <a
        href={site.karta.lank}
        target="_blank"
        rel="noreferrer"
        className="absolute bottom-4 left-4 flex items-center gap-2 bg-surface-1/90 backdrop-blur-sm border border-gold/30 px-4 py-2 text-xs font-mono text-gold tracking-widest uppercase hover:bg-gold hover:text-black transition-all duration-300"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-3.5 h-3.5" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
        </svg>
        Visa på karta
      </a>
    </div>
  );
}
