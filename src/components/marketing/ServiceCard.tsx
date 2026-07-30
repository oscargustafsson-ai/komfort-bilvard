"use client";

import { useRef } from "react";
import Link from "next/link";
import type { Tjanst } from "@/data/tjanster";
import { TjanstIkon } from "./tjanstIkoner";

/**
 * Tjänstekort med en dämpad guld-"spotlight" som följer muspekaren plus ett
 * mjukt hover-lyft. Pekarens position skrivs till CSS-variabler (--mx/--my) så
 * att glow-lagret renderas helt i CSS — ingen re-render per musrörelse.
 *
 * Layouten är medvetet enkel: en fristående guld-ikon (ingen ruta), ren
 * typografi och en guld-accentlinje vid foten. Inga indexnummer — tjänsterna
 * är en meny, inte en sekvens.
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
      className="group relative flex h-full flex-col overflow-hidden border border-white/10 bg-white/[0.015] p-8 backdrop-blur-sm transition-[transform,border-color] duration-500 ease-out hover:-translate-y-1 hover:border-gold/40 hover:shadow-[0_24px_50px_-18px_rgba(0,0,0,0.7)]"
    >
      {/* Spotlight som följer musen — dämpad radial-gradient kring --mx/--my */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(160px circle at var(--mx, 50%) var(--my, 0%), rgba(201,168,76,0.10), transparent 62%)",
        }}
      />

      {s.pricing.popular && (
        <span className="absolute top-0 right-0 z-10 bg-gold px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-widest text-black">
          Populärast
        </span>
      )}

      <div className="relative z-10 flex h-full flex-col">
        {/* Fristående guld-ikon — ingen ruta */}
        <TjanstIkon
          slug={s.slug}
          className="mb-7 h-8 w-8 text-gold/80 transition-colors duration-500 group-hover:text-gold"
        />

        {/* Titel */}
        <h3 className="text-xl font-bold tracking-tight text-white transition-colors duration-500 group-hover:text-gold">
          {s.title}
        </h3>

        {/* Beskrivning */}
        <p className="mt-3 text-sm leading-relaxed text-white/55">
          {s.shortDesc}
        </p>

        {/* Pris */}
        <p className="mt-5 font-mono text-xs uppercase tracking-widest text-white/35">
          Fr{" "}
          <span className="text-base normal-case tracking-normal font-bold text-gold">
            {s.pricing.fromPrice}
          </span>{" "}
          {s.pricing.unit ?? "kr"}
        </p>

        {/* Foten: guld-accentstreck + länk, alltid längst ner */}
        <div className="mt-auto pt-7">
          <span className="mb-5 block h-px w-8 bg-gold/30 transition-[width,background-color] duration-500 group-hover:w-14 group-hover:bg-gold/60" />
          <span className="inline-flex items-center gap-2 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-white/45 transition-colors duration-500 group-hover:text-gold">
            Läs mer
            <span className="transition-transform duration-500 group-hover:translate-x-1">
              →
            </span>
          </span>
        </div>
      </div>
    </Link>
  );
}
