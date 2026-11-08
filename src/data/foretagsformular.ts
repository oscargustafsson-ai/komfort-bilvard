/**
 * Valen i företagsformuläret på /tjanster/foretag (batch 12b). Både formuläret
 * (ForetagsFormular.tsx) och serveråtgärden (submitForetag i actions.ts) läser
 * listan. Nya val läggs bara till här. Ordningen är sidpaketets.
 */
export type ValGrupp = { grupp: string; val: string[] };

export const foretagsval: ValGrupp[] = [
  { grupp: "Däck", val: ["Däckskifte", "Däckhotell"] },
  { grupp: "Underhåll", val: ["Tvätt in- och utvändigt"] },
  { grupp: "Anpassad rekond", val: ["Invändig rekond", "Polering"] },
];

/** Alla val i ordning. Serveråtgärden tar bort val som inte står här. */
export const allaForetagsval = foretagsval.flatMap((g) => g.val);
