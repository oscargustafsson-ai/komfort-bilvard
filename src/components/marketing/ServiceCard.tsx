"use client";

import { useRef } from "react";
import Link from "next/link";
import type { Tjanst } from "@/data/tjanster";
import { TjanstIkon } from "./tjanstIkoner";

/**
 * Tjänstekort med en guld-"spotlight" som följer muspekaren plus ett mjukt
 * hover-lyft. Pekarens position skrivs till CSS-variabler (--mx/--my) så att
 * glow-lagret kan renderas helt i CSS — ingen re-render per musrörelse.
 */
export function ServiceCard({ s }: { s: Tjanst }) {
  const ref = useRef<HTMLAnchorElement>(null);

  function onMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - r.left}px`);
    el.style.setProperty("--my", `${e.clientY - r.top}px`);
  }

  return (
    <Link
      ref={ref}
      href={`/tjanster/${s.slug}`}
      onMouseMove={onMove}
      className="group relative block h-full overflow-hidden rounded-lg border border-white/15 bg-black/20 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-gold/50 hover:shadow-[0_20px_45px_-12px_rgba(0,0,0,0.65)]"
    >
      {/* Spotlight som följer musen (radial-gradient kring --mx/--my) */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(220px circle at var(--mx, 50%) var(--my, 0%), rgba(201,168,76,0.18), transparent 65%)",
        }}
      />
      {/* Tunn guld-kantglöd vid hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-lg opacity-0 ring-1 ring-inset ring-gold/30 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="relative z-10">
        <div className="mb-6 flex items-center justify-between">
          <span className="flex h-12 w-12 items-center justify-center rounded-lg border border-gold/20 text-gold transition-all duration-300 group-hover:scale-110 group-hover:border-gold/50 group-hover:bg-gold/10 group-hover:shadow-[0_0_18px_-2px_rgba(201,168,76,0.5)]">
            <TjanstIkon slug={s.slug} className="h-6 w-6" />
          </span>
          <span className="font-mono text-xs tracking-widest text-gold/40 transition-colors duration-300 group-hover:text-gold/80">
            {s.num}
          </span>
        </div>
        <h3 className="mb-3 text-xl font-bold tracking-wide transition-colors duration-300 group-hover:text-gold">
          {s.title}
        </h3>
        <p className="mb-6 text-sm leading-relaxed text-white/40 transition-colors duration-300 group-hover:text-white/60">
          {s.shortDesc}
        </p>
        <span className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-widest text-gold/50 transition-all duration-300 group-hover:gap-2 group-hover:text-gold">
          Läs mer →
        </span>
      </div>
    </Link>
  );
}
