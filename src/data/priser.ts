/**
 * Alla priser på sajten. En enda källa: tjänstekorten, prisrutorna,
 * prislistorna på tjänstesidorna och bokningssidan läser härifrån.
 * Kundens prislista 2026-10-11 (fakta.md). Inga priser i Service-schemat.
 *
 * Belopp i kronor som tal. `kr()` formaterar med mellanslag som tusenavgränsare.
 */

export type Prisrad = { id: string; label: string; pris: number };

export type Tillagg = {
  id: string;
  label: string;
  pris: number;
  /** Tillägg i samma grupp utesluter varandra (högst ett). */
  grupp?: "polering" | "lackskydd";
};

export type Tjanstpris = {
  id: string;
  namn: string;
  /** Pris per bilstorlek eller per steg. Saknas: ett fast pris i `pris`. */
  val?: { etikett: "Bilstorlek" | "Antal steg"; rader: Prisrad[] };
  pris?: number;
  /** Pristillägg per bilstorlek ovanpå valt pris (polering, kompletta paketet). */
  storlekstillagg?: Prisrad[];
  tillagg: Tillagg[];
  /** Går att välja på /boka. */
  bokningsbar: boolean;
};

const TVATT_TILLAGG: Tillagg[] = [
  { id: "asfalt", label: "Asfalts- och saltborttagning", pris: 99 },
  { id: "flygrost", label: "Flygrostborttagning", pris: 99 },
  { id: "motortvatt", label: "Motortvätt", pris: 399 },
];

const LACKSKYDD_TILLAGG: Tillagg[] = [
  { id: "lackskydd-2", label: "Lackskydd 2 år", pris: 1995, grupp: "lackskydd" },
  { id: "lackskydd-3", label: "Lackskydd 3 år", pris: 2995, grupp: "lackskydd" },
  { id: "lackskydd-5", label: "Lackskydd 5 år", pris: 3795, grupp: "lackskydd" },
];

export const tjanstpriser: Tjanstpris[] = [
  {
    id: "handtvatt-in-ut",
    namn: "Handtvätt in- och utvändigt",
    val: { etikett: "Bilstorlek", rader: [{ id: "vanlig", label: "Vanlig bil", pris: 599 }, { id: "pickup", label: "Pickup/van", pris: 699 }] },
    tillagg: TVATT_TILLAGG,
    bokningsbar: true,
  },
  {
    id: "utvandig-handtvatt",
    namn: "Utvändig handtvätt",
    val: { etikett: "Bilstorlek", rader: [{ id: "vanlig", label: "Vanlig bil", pris: 349 }, { id: "pickup", label: "Pickup/van", pris: 449 }] },
    tillagg: TVATT_TILLAGG,
    bokningsbar: true,
  },
  {
    id: "invandig-tvatt",
    namn: "Invändig tvätt",
    pris: 349,
    tillagg: [],
    bokningsbar: true,
  },
  {
    id: "helrekond",
    namn: "Helrekond med 12 månaders lackförsegling",
    val: {
      etikett: "Bilstorlek",
      rader: [
        { id: "liten", label: "Liten bil (t.ex. Polo, Golf, Clio)", pris: 1195 },
        { id: "sedan-suv", label: "Sedan/SUV", pris: 1595 },
        { id: "7-sits", label: "7-sitsig bil", pris: 1795 },
        { id: "pickup", label: "Pickup/van", pris: 1995 },
      ],
    },
    tillagg: [
      { id: "motortvatt", label: "Motortvätt", pris: 399 },
      { id: "glasforsegling", label: "Glasförsegling 2 år", pris: 499 },
      { id: "latt-polering", label: "Lätt polering", pris: 399, grupp: "polering" },
      { id: "1-stegspolering", label: "1-stegspolering", pris: 1495, grupp: "polering" },
    ],
    bokningsbar: true,
  },
  {
    id: "invandig-rekond",
    namn: "Invändig rekond",
    pris: 1195,
    tillagg: [],
    bokningsbar: true,
  },
  {
    id: "polering",
    namn: "Polering med vax",
    val: {
      etikett: "Antal steg",
      rader: [
        { id: "1", label: "1 steg", pris: 2495 },
        { id: "2", label: "2 steg", pris: 3495 },
        { id: "3", label: "3 steg", pris: 4495 },
      ],
    },
    storlekstillagg: [{ id: "vanlig", label: "Vanlig bil", pris: 0 }, { id: "pickup", label: "Pickup/van", pris: 1000 }],
    tillagg: LACKSKYDD_TILLAGG,
    bokningsbar: true,
  },
  {
    id: "lackskydd",
    namn: "Lackskydd",
    val: {
      etikett: "Bilstorlek",
      rader: LACKSKYDD_TILLAGG.map((t) => ({ id: t.id, label: t.label, pris: t.pris })),
    },
    tillagg: [],
    // Säljs bara som tillägg till polering och i det kompletta paketet.
    bokningsbar: false,
  },
  {
    id: "komplett",
    namn: "Komplett paket med lackkorrigering och 3 års lackskydd",
    pris: 7495,
    storlekstillagg: [{ id: "vanlig", label: "Vanlig bil", pris: 0 }, { id: "pickup", label: "Pickup/van", pris: 1495 }],
    tillagg: [],
    bokningsbar: true,
  },
];

export function getTjanstpris(id: string): Tjanstpris | undefined {
  return tjanstpriser.find((t) => t.id === id);
}

/** "1195" -> "1 195". Tusental med mellanslag, enligt fakta.md. */
export function kr(n: number): string {
  return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

/** Lägsta pris för en tjänst (från-pris på kort och i prisrutor). */
export function franPris(t: Tjanstpris): number {
  if (t.val) return Math.min(...t.val.rader.map((r) => r.pris));
  return t.pris ?? 0;
}

export type Val = {
  tjanst: string;
  /** id i val.rader (bilstorlek eller steg). */
  val?: string;
  /** id i storlekstillagg. */
  storlek?: string;
  tillagg: string[];
};

/**
 * Räknar fram uppskattat pris från datakällan. Används både i webbläsaren
 * (prisväljaren) och på servern (bokningsmejlet), så att summan aldrig
 * kommer från klienten. Returnerar null om valet är ofullständigt.
 */
export function beraknaPris(v: Val): number | null {
  const t = getTjanstpris(v.tjanst);
  if (!t) return null;
  let summa = 0;
  if (t.val) {
    const rad = t.val.rader.find((r) => r.id === v.val);
    if (!rad) return null;
    summa += rad.pris;
  } else {
    summa += t.pris ?? 0;
  }
  if (t.storlekstillagg) {
    const s = t.storlekstillagg.find((r) => r.id === v.storlek);
    if (!s) return null;
    summa += s.pris;
  }
  const valda = new Set(v.tillagg);
  const grupper = new Set<string>();
  for (const x of t.tillagg) {
    if (!valda.has(x.id)) continue;
    if (x.grupp) {
      if (grupper.has(x.grupp)) return null; // högst ett per grupp
      grupper.add(x.grupp);
    }
    summa += x.pris;
  }
  return summa;
}

/** Läsbar sammanfattning av ett val (till mejlet). */
export function beskrivVal(v: Val) {
  const t = getTjanstpris(v.tjanst);
  if (!t) return null;
  const rad = t.val?.rader.find((r) => r.id === v.val);
  const storlek = t.storlekstillagg?.find((r) => r.id === v.storlek);
  const tillagg = t.tillagg.filter((x) => v.tillagg.includes(x.id));
  return {
    tjanst: t.namn,
    valEtikett: t.val?.etikett ?? (t.storlekstillagg ? "Bilstorlek" : null),
    val: rad ? `${rad.label} (${kr(rad.pris)} kr)` : null,
    storlek: storlek ? `${storlek.label}${storlek.pris ? ` (+${kr(storlek.pris)} kr)` : ""}` : null,
    tillagg: tillagg.map((x) => `${x.label} (${kr(x.pris)} kr)`),
  };
}

/* ---------- prislistor på tjänstesidorna (grundfix 2, batch 02b) ---------- */

export type Prisgrupp = { rubrik?: string; rader: { label: string; pris: string }[] };

const rader = (t: Tjanstpris) => (t.val?.rader ?? []).map((r) => ({ label: r.label, pris: `${kr(r.pris)} kr` }));
const tillaggRader = (t: Tjanstpris) => t.tillagg.map((x) => ({ label: x.label, pris: `${kr(x.pris)} kr` }));
const p = (id: string) => getTjanstpris(id)!;

const komplettGrupp = (): Prisgrupp => {
  const k = p("komplett");
  const extra = k.storlekstillagg!.find((s) => s.id === "pickup")!;
  return {
    rubrik: k.namn,
    rader: [
      { label: "Vanlig bil", pris: `${kr(k.pris!)} kr` },
      { label: "Pickup/van", pris: `+${kr(extra.pris)} kr` },
    ],
  };
};

/** Prislista och från-pris per tjänstesida (slug i tjanster.ts). */
export const sidPriser: Record<string, { fran: number; grupper: Prisgrupp[] }> = {
  biltvatt: {
    fran: franPris(p("utvandig-handtvatt")),
    grupper: [
      { rubrik: p("handtvatt-in-ut").namn, rader: rader(p("handtvatt-in-ut")) },
      { rubrik: p("utvandig-handtvatt").namn, rader: rader(p("utvandig-handtvatt")) },
      { rubrik: p("invandig-tvatt").namn, rader: [{ label: p("invandig-tvatt").namn, pris: `${kr(p("invandig-tvatt").pris!)} kr` }] },
      { rubrik: "Tillägg", rader: tillaggRader(p("utvandig-handtvatt")) },
    ],
  },
  rekonditionering: {
    fran: franPris(p("helrekond")),
    grupper: [
      { rader: rader(p("helrekond")) },
      { rubrik: "Tillägg", rader: tillaggRader(p("helrekond")) },
      komplettGrupp(),
    ],
  },
  polering: {
    fran: franPris(p("polering")),
    grupper: [
      {
        rader: [
          ...rader(p("polering")),
          { label: "Pickup/van", pris: `+${kr(p("polering").storlekstillagg!.find((s) => s.id === "pickup")!.pris)} kr` },
        ],
      },
      { rubrik: "Tillägg", rader: tillaggRader(p("polering")) },
    ],
  },
  lackskydd: {
    fran: franPris(p("lackskydd")),
    grupper: [{ rader: rader(p("lackskydd")) }, komplettGrupp()],
  },
  "invandig-rekond": {
    fran: franPris(p("invandig-rekond")),
    grupper: [],
  },
};
