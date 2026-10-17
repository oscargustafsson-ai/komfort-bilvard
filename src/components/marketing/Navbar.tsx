"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

const meny = [
  { label: "Tjänster", href: "/tjanster" },
  { label: "Priser", href: "/priser" },
  { label: "Områden", href: "/omraden" },
  { label: "Presentkort", href: "/presentkort" },
  { label: "Om oss", href: "/om-oss" },
  { label: "Kontakt", href: "/kontakt" },
  { label: "Boka", href: "/boka" },
];

const RING = `Ring ${site.phoneDisplay}`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 ${scrolled ? "bg-surface-1/90 backdrop-blur-md border-gold/10" : "bg-transparent border-transparent"}`}>
      <div className="flex justify-between items-center gap-4 px-8 py-5">
        <Link href="/" className="relative h-10 w-32 overflow-visible">
          <Image
            src="/logo/kom-fort-logga.svg"
            alt="KOM-fort Bilvård"
            width={100}
            height={100}
            className="absolute top-1/2 -translate-y-1/2 left-0"
            priority
          />
        </Link>

        {/* Datormenyn från 1024 px (lg). Under det används mobilmenyn. */}
        {/* Mindre text mellan 1024 och 1279 px så att menyn får plats på en rad (batch 07). */}
        <ul className="hidden lg:flex gap-6 text-xs xl:text-sm text-white/60 tracking-widest uppercase whitespace-nowrap">
          {meny.map((m) => (
            <li key={m.href}>
              <Link href={m.href} className="relative hover:text-gold transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-150 hover:after:w-full">
                {m.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={site.phoneHref}
            className="grain relative overflow-hidden hidden lg:block bg-gold text-black px-5 xl:px-8 py-3 text-sm font-bold tracking-widest uppercase rounded-lg transition-all after:absolute after:inset-0 after:bg-white/20 after:translate-x-[-100%] hover:after:translate-x-0 after:transition-transform after:duration-300 whitespace-nowrap"
          >
            {RING}
          </a>

          {/* På mobil: telefonikon så att det alltid går att ringa direkt. */}
          <a
            href={site.phoneHref}
            aria-label={RING}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-gold/40 text-gold hover:bg-gold hover:text-black transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
          </a>

          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen(!open)}
            aria-label="Öppna meny"
            aria-expanded={open}
          >
            <span className={`block w-6 h-px bg-white transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-6 h-px bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px bg-white transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden fixed inset-0 top-[72px] z-40 bg-surface-1 transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <div className="flex flex-col h-full px-8 pt-12 pb-12 gap-7 overflow-y-auto">
          {meny.map((m) => (
            <Link key={m.href} href={m.href} onClick={() => setOpen(false)} className="text-white/80 tracking-widest uppercase text-lg hover:text-gold transition-colors">
              {m.label}
            </Link>
          ))}
          <a
            href={site.phoneHref}
            className="grain relative overflow-hidden mt-auto bg-gold text-black px-8 py-4 font-bold tracking-widest uppercase text-sm text-center rounded-lg transition-all after:absolute after:inset-0 after:bg-white/20 after:translate-x-[-100%] hover:after:translate-x-0 after:transition-transform after:duration-300"
          >
            {RING}
          </a>
        </div>
      </div>
    </nav>
  );
}
