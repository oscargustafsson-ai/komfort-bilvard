/**
 * Alla tjänstsidor: de fem med tjänstekort (tjanster.ts) och de övriga
 * tjänstsidorna och undersidorna (undersidor.ts). Routes och sitemap läser härifrån.
 */
import { tjanster, tjanstPath, type Tjanst } from "./tjanster";
import { undersidor } from "./undersidor";

export { tjanstPath };

export const allaTjanstsidor: Tjanst[] = [...tjanster, ...undersidor];

/** Tjänstsida direkt under /tjanster (utan förälder). */
export function getTjanstsida(slug: string): Tjanst | undefined {
  return allaTjanstsidor.find((t) => !t.foralder && t.slug === slug);
}

/** Undersida /tjanster/<foralder>/<slug>. */
export function getUndersida(foralder: string, slug: string): Tjanst | undefined {
  return allaTjanstsidor.find((t) => t.foralder === foralder && t.slug === slug);
}
