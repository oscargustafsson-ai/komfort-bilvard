import Link from "next/link";
import type { ReactNode } from "react";

const LANK = /\[([^\]]+)\]\(([^)]+)\)/g;

/**
 * Gör om markdown-länkar [text](/sökväg) i en textsträng till Next-länkar.
 * Texten i sidpaketen används ordagrant; bara länkarna översätts.
 */
export function rikText(text: string): ReactNode[] {
  const delar: ReactNode[] = [];
  let senast = 0;
  for (const m of text.matchAll(LANK)) {
    const i = m.index ?? 0;
    if (i > senast) delar.push(text.slice(senast, i));
    delar.push(
      <Link
        key={`${i}-${m[2]}`}
        href={m[2]}
        className="text-gold underline decoration-gold/40 underline-offset-4 transition-colors hover:decoration-gold"
      >
        {m[1]}
      </Link>
    );
    senast = i + m[0].length;
  }
  if (senast < text.length) delar.push(text.slice(senast));
  return delar;
}

/** Ett stycke brödtext med länkar. */
export function Stycke({ text, className = "text-white/60 leading-relaxed" }: { text: string; className?: string }) {
  return <p className={className}>{rikText(text)}</p>;
}
