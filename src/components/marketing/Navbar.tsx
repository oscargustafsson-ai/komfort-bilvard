"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

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
      <div className="flex justify-between items-center px-8 py-5">
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

        <ul className="hidden md:flex gap-8 text-sm text-white/60 tracking-widest uppercase">
          <li><Link href="/tjanster" className="relative hover:text-gold transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-150 hover:after:w-full">Tjänster</Link></li>
          <li><Link href="/omraden" className="relative hover:text-gold transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-150 hover:after:w-full">Områden</Link></li>
          <li><Link href="/presentkort" className="relative hover:text-gold transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-150 hover:after:w-full">Presentkort</Link></li>
          <li><Link href="/#om" className="relative hover:text-gold transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-150 hover:after:w-full">Om oss</Link></li>
          <li><Link href="/kontakt" className="relative hover:text-gold transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-150 hover:after:w-full">Kontakt</Link></li>
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="tel:0761943519"
            className="grain relative overflow-hidden hidden md:block bg-gold text-black px-8 py-3 text-sm font-bold tracking-widest uppercase rounded-lg transition-all after:absolute after:inset-0 after:bg-white/20 after:translate-x-[-100%] hover:after:translate-x-0 after:transition-transform after:duration-300"
          >
            Boka nu
          </a>

          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setOpen(!open)}
            aria-label="Öppna meny"
          >
            <span className={`block w-6 h-px bg-white transition-all duration-300 origin-center ${open ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-6 h-px bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px bg-white transition-all duration-300 origin-center ${open ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </div>

      <div
        className={`md:hidden fixed inset-0 top-[72px] z-40 bg-surface-1 transition-opacity duration-300 ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        <div className="flex flex-col h-full px-8 pt-12 pb-12 gap-8">
          <Link href="/tjanster" onClick={() => setOpen(false)} className="text-white/80 tracking-widest uppercase text-lg hover:text-gold transition-colors">Tjänster</Link>
          <Link href="/omraden" onClick={() => setOpen(false)} className="text-white/80 tracking-widest uppercase text-lg hover:text-gold transition-colors">Områden</Link>
          <Link href="/presentkort" onClick={() => setOpen(false)} className="text-white/80 tracking-widest uppercase text-lg hover:text-gold transition-colors">Presentkort</Link>
          <Link href="/#om" onClick={() => setOpen(false)} className="text-white/80 tracking-widest uppercase text-lg hover:text-gold transition-colors">Om oss</Link>
          <Link href="/kontakt" onClick={() => setOpen(false)} className="text-white/80 tracking-widest uppercase text-lg hover:text-gold transition-colors">Kontakt</Link>
          <a
            href="tel:0761943519"
            className="grain relative overflow-hidden mt-auto bg-gold text-black px-8 py-4 font-bold tracking-widest uppercase text-sm text-center rounded-lg transition-all after:absolute after:inset-0 after:bg-white/20 after:translate-x-[-100%] hover:after:translate-x-0 after:transition-transform after:duration-300"
          >
            Ring 076-194 35 19
          </a>
        </div>
      </div>
    </nav>
  );
}
