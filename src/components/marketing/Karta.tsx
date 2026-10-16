"use client";

import { useState } from "react";
import { site } from "@/lib/site";

/**
 * Delad Google-karta. Läggs direkt under sidans H2 som börjar med
 * "Hitta till oss". Inbäddning och länk kommer från site.karta (fakta.md).
 *
 * Kartan laddas först när besökaren klickar på "Visa kartan" (batch 05):
 * tills dess har iframe-elementet bara data-src, så Google får ingen
 * förfrågan och kan inte sätta kakor utan samtycke. Valet sparas inte.
 */
export function Karta({ className = "" }: { className?: string }) {
  const [visad, setVisad] = useState(false);
  return (
    <div className={`relative border border-white/8 overflow-hidden bg-surface-3 ${className}`}>
      <iframe
        title="KOM-fort Bilvård AB på kartan"
        src={visad ? site.karta.embed : undefined}
        data-src={site.karta.embed}
        width="100%"
        height="340"
        style={{ border: 0, display: "block", filter: "grayscale(1) invert(0.9) contrast(0.85)" }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      {!visad && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 bg-surface-2 px-8 text-center">
          <p className="text-white/60 text-sm leading-relaxed max-w-md">
            Kartan kommer från Google Maps. Klickar du på Visa kartan får Google din IP-adress och kan spara kakor i din webbläsare.
          </p>
          <button
            type="button"
            onClick={() => setVisad(true)}
            className="grain-card relative overflow-hidden border border-white/20 text-white/70 px-8 py-3 tracking-widest uppercase text-sm rounded-lg transition-all hover:border-gold hover:text-gold after:absolute after:inset-0 after:bg-gold/10 after:translate-x-[-100%] hover:after:translate-x-0 after:transition-transform after:duration-300"
          >
            Visa kartan
          </button>
        </div>
      )}
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
        Öppna i Google Maps
      </a>
    </div>
  );
}
