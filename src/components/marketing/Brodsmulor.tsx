import Link from "next/link";
import { JsonLd, brodsmulorSchema } from "./JsonLd";

export type Brodsmula = { namn: string; href: string };

/**
 * Synliga brödsmulor + BreadcrumbList-schema. Används på alla sidor utom
 * startsidan. Sista posten är sidan själv och visas utan länk.
 */
export function Brodsmulor({ items }: { items: Brodsmula[] }) {
  return (
    <>
      <JsonLd data={brodsmulorSchema(items)} />
      <nav aria-label="Brödsmulor" className="mb-10">
        <ol className="flex flex-wrap items-center gap-2 text-xs tracking-widest uppercase font-mono text-gold/60">
          {items.map((it, i) => {
            const sista = i === items.length - 1;
            return (
              <li key={it.href} className="flex items-center gap-2">
                {i > 0 && (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-3 h-3 text-white/30" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                  </svg>
                )}
                {sista ? (
                  <span aria-current="page" className="text-white/50">{it.namn}</span>
                ) : (
                  <Link href={it.href} className="hover:text-gold transition-colors">{it.namn}</Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
