import Link from "next/link";
import { omraden } from "@/data/omraden";

/**
 * Länkrad med alla stadsdelar (batch 06). Navigering som tjänstekorten, räknas inte
 * in i taket för kontextuella länkar. Läser alla stadsdelar i omraden.ts, så att
 * startsidan, kontaktsidan och /omraden alltid länkar till varje stadsdelssida.
 */
export function Omradeslista({ className = "mt-6" }: { className?: string }) {
  return (
    <nav aria-label="Stadsdelar" className={className}>
      <ul className="flex flex-wrap gap-x-5 gap-y-2 text-xs tracking-widest uppercase font-mono text-gold/70">
        {omraden.map((o) => (
          <li key={o.slug}>
            <Link href={`/omraden/${o.slug}`} className="hover:text-gold transition-colors">
              {o.namn}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
