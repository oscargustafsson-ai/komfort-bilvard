import { sidPriser, kr } from "./priser";

/**
 * Prisruta i heron. Från-priset kommer från priser.ts (en enda källa);
 * prislistan på sidan läses från sidPriser[slug]. Noten visas bara i prisrutan.
 */
export type Pricing = {
  fromPrice: string;
  unit?: string;
  note?: string;
  popular?: boolean;
};

const fran = (slug: string) => kr(sidPriser[slug].fran);

/** Rubrik + stycken (samma form som i startsida.ts). */
export type Sektion = { h2: string; stycken: string[] };

/**
 * Sida i det nya formatet (från batch 02). Finns `sida` renderar
 * tjanster/[slug]/page.tsx den nya mallen; annars den gamla.
 * All text ordagrann från sidpaketet.
 */
export type TjanstSida = {
  title: string;
  h1: string;
  intro: string[];
  ingarH2: string;
  prisH2: string;
  prisText: string;
  sektioner: Sektion[];
  varforH2: string;
  hitta: Sektion;
  faqH2: string;
  bokaH2: string;
  bokaText: string;
};

export type Tjanst = {
  slug: string;
  num: string;
  title: string;
  shortDesc: string;
  metaDesc: string;
  hero: string;
  intro: string;
  included: { heading: string; text: string }[];
  why: string[];
  faq: { q: string; a: string }[];
  pricing: Pricing;
  sida?: TjanstSida;
};

export const tjanster: Tjanst[] = [
  // Batch 02, sida 5/5. Text ordagrann från batcher/batch-02.md.
  {
    slug: "rekonditionering",
    num: "01",
    title: "Bilrekond",
    shortDesc: "Komplett invändig och utvändig behandling. Din bil återfår nybilskänslan.",
    metaDesc: "Bilrekond i Örebro: handtvätt, 12 månaders lackförsegling och kemtvätt av kupén i en och samma behandling. Vi kan hämta bilen. Ring 076-194 35 19.",
    hero: "Bilrekond Örebro",
    intro: "En bilrekond är vår mest sålda tjänst. Vi tar hand om hela bilen, utvändigt och invändigt, vid ett och samma tillfälle: lacken tvättas och får en lackförsegling som håller i 12 månader, och kupén kemtvättas från mattor till innertak. Resultatet är en bil som känns och luktar ny igen.",
    included: [
      { heading: "Utvändig handtvätt och avfettning", text: "Bilen handtvättas med pH-neutrala medel, och alla ytor avfettas så att lacken är ren inför lackförseglingen." },
      { heading: "Lackförsegling som håller i 12 månader", text: "Vi avslutar med en lackförsegling som skyddar lacken mot smuts, vatten och UV-strålning i 12 månader." },
      { heading: "Hjul och däck", text: "Fälgar och däck rengörs grundligt och behandlas med skyddande produkter." },
      { heading: "Kemtvätt av klädsel, mattor och innertak", text: "Säten, mattor och innertak rengörs med professionell kemtvättsutrustning som lyfter smuts, fläckar och lukt ur tyget." },
      { heading: "Rengöring av alla ytor", text: "Instrumentbräda, dörrsidor, luftventiler och plastdetaljer rengörs och får ett skyddande medel." },
    ],
    why: [
      "Handtvätt, aldrig automattvätt",
      "Professionella produkter och pH-neutrala medel",
      "Vi tar oss tid, ingen bil behandlas i en fart",
      "En rekond kan höja bilens andrahandsvärde",
    ],
    faq: [
      { q: "Hur lång tid tar en bilrekond?", a: "Mellan fyra och åtta timmar, beroende på bilens storlek och skick." },
      { q: "Vad kostar en bilrekond?", a: "Det beror på bilens storlek och skick. Alla priser ser du i prislistan, och på bokningssidan får du ett uppskattat pris för din bil med tillägg." },
      { q: "Ingår polering i rekonden?", a: "Nej, polering är ett tillägg. Du kan välja lätt polering eller 1-stegspolering, och behöver lacken mer passar vår polering med vax i upp till tre steg." },
      { q: "Kan ni hämta bilen?", a: "Ja, vi kan hämta bilen hos dig och köra hem den igen efter rekonden. Säg till när du bokar, så berättar vi vad som gäller." },
    ],
    pricing: {
      fromPrice: fran("rekonditionering"),
      unit: "kr",
      note: "Vår mest sålda tjänst. 12 månaders lackförsegling ingår.",
      popular: true,
    },
    sida: {
      title: "Bilrekond Örebro | Rekond av bil i Örebro",
      h1: "Bilrekond Örebro",
      intro: [
        "En bilrekond är vår mest sålda tjänst. Vi tar hand om hela bilen, utvändigt och invändigt, vid ett och samma tillfälle: lacken tvättas och får en lackförsegling som håller i 12 månader, och kupén kemtvättas från mattor till innertak. Resultatet är en bil som känns och luktar ny igen.",
        "Bilen tvättas alltid för hand, och du kan lämna den hos oss eller låta oss hämta den hos dig. Vill du se allt vi gör, läs om [vår bilvård](/).",
      ],
      ingarH2: "Vad ingår i en bilrekond?",
      prisH2: "Pris och tillägg",
      prisText: "Priset för en bilrekond beror på bilens storlek, från små bilar till pickup och van, och 12 månaders lackförsegling ingår. Som tillägg kan du välja motortvätt, glasförsegling med 2 års skydd och antingen lätt polering eller 1-stegspolering. Vill du ha lackkorrigering och ett [lackskydd](/tjanster/lackskydd) som håller i 3 år finns det i vårt kompletta paket. Alla priser ser du i prislistan, och på [bokningssidan](/boka) får du ett uppskattat pris för din bil.",
      sektioner: [
        {
          h2: "Så går en bilrekond till",
          stycken: [
            "Du bokar genom att ringa eller skicka en förfrågan. Hur lång tid rekonden tar beror på bilens storlek och skick, men räkna med 4-8 timmar, så bilen stannar hos oss hela dagen. Under dagen tvättar och skyddar vi utsidan och går igenom kupén med dammsugning, kemtvätt och rengöring av alla ytor. När vi är klara luftar vi bilen ordentligt, så att du kan köra hem direkt. Har du möjlighet kan du låta dörrar och fönster stå öppna en stund till när du kommer hem.",
          ],
        },
        {
          h2: "När behöver bilen en rekond?",
          stycken: [
            "En gång om året är ett bra intervall, helst efter vintern när salt och smuts från vintervägarna ska bort, eller inför sommaren. Ska bilen säljas passar en rekond inför bilförsäljning, eftersom en ren och fräsch bil kan höja andrahandsvärdet. Har lacken bara tappat glansen kan [polering](/tjanster/polering) räcka, och behöver bara kupén fräschas upp finns [invändig rekond](/tjanster/invandig-rekond).",
          ],
        },
        {
          h2: "Bilrekond för hela Örebro",
          stycken: [
            "Vi gör bilrekond åt bilägare i hela Örebro. I [Adolfsberg](/omraden/adolfsberg) ligger vi själva, och från [Marieberg](/omraden/marieberg) är det bara några kilometer till oss. Från [Vivalla](/omraden/vivalla) tar det runt en kvart via Västerleden. Vi servar även Varberga, Almby, Kumla och Hallsberg.",
          ],
        },
      ],
      varforH2: "Varför välja KOM-fort?",
      hitta: {
        h2: "Hitta till oss",
        stycken: [
          "Vår lokal ligger på Lindtorpsvägen 10 i Södra Lindhult i Adolfsberg. Från E20 avfart 110 Adolfsberg är det bara ett par minuter hit.",
        ],
      },
      faqH2: "Vanliga frågor om bilrekond",
      bokaH2: "Boka bilrekond i Örebro",
      bokaText: "Ring 076-194 35 19 eller skicka en förfrågan, så hör vi av oss och bokar in en dag som passar dig.",
    },
  },
  {
    slug: "polering",
    num: "02",
    title: "Polering",
    shortDesc: "Maskinpolering som tar bort repor och oxidering. Lacken återfår sitt djup och sin glans.",
    metaDesc: "Lackpolering och maskinpolering i Örebro. Vi tar bort repor, swirls och oxidering. KOM-fort Bilvård - ring 076-194 35 19.",
    hero: "Lackpolering i Örebro",
    intro: "Med åren samlar bilens lack på sig repor, swirl-märken och oxidering som gör att lacken ser matt och sliten ut. Vår maskinpolering är den effektivaste metoden för att återställa lacken till ursprungligt skick - utan att måla om. Vi arbetar med professionella maskiner och polermedel anpassade efter just din bils lack.",
    included: [
      { heading: "Lackanalys", text: "Vi mäter lackens tjocklek och bedömer skicket innan vi börjar. På så sätt vet vi exakt vilket polerprogram som ger bäst resultat." },
      { heading: "Tvåstegspolering", text: "Steg 1 tar bort djupare repor och oxidering. Steg 2 förfinar ytan och ger lacken maximalt djup och glans." },
      { heading: "Enstegspolering", text: "För lack i gott skick räcker ofta ett poleringsteg för att ta bort swirl-märken och ge lacken nytt liv." },
      { heading: "Finishing & skydd", text: "Efter polering lägger vi alltid på vax för att bevara resultatet. Vill du skydda lacken längre kan du lägga till lackskydd." },
    ],
    why: [
      "Kostar en bråkdel av en omlackering",
      "Professionella maskiner ger resultat som inte går att uppnå för hand",
      "Resultatet håller längre med rätt eftervård",
    ],
    faq: [
      { q: "Kan alla repor tas bort med polering?", a: "Repor som bara sitter i klarlacket kan i de flesta fall tas bort helt. Repor som gått igenom till grundfärgen eller plåten kräver däremot lackning." },
      { q: "Försvinner lacken av polering?", a: "Polering tar bort ett mycket tunt lager lack. Vi mäter alltid lacktjockleken innan för att säkerställa att det finns marginal. Med professionell polering är det helt säkert." },
      { q: "Hur länge håller resultatet?", a: "Med rätt eftervård håller resultatet länge. Vaxet skyddar lacken i några månader." },
    ],
    pricing: {
      fromPrice: fran("polering"),
      unit: "kr",
      note: "1-stegspolering med vax. Fler steg för djupare resultat.",
    },
  },
  {
    slug: "lackskydd",
    num: "03",
    title: "Lackskydd",
    shortDesc: "Lackskydd som läggs på efter polering. Välj 2, 3 eller 5 års skydd.",
    metaDesc: "Keramiskt lackskydd och lackförsegling i Örebro. Skydda din bil mot väder, smuts och repor. KOM-fort Bilvård - ring 076-194 35 19.",
    hero: "Keramiskt Lackskydd i Örebro",
    intro: "Keramiskt lackskydd är den mest avancerade och långvariga skyddsbehandlingen för din bils lack. Ett keramiskt skikt binder kemiskt till lacken och skapar en hård, hydrofob yta som stöter bort vatten, smuts och kemikalier. Bilen blir betydligt enklare att hålla ren och lacken skyddas mot UV-strålning, oxidering och lätta repor i flera år.",
    included: [
      { heading: "Lackförberedelse", text: "Lacken poleras och avfettas noggrant innan applicering. En ren och slät yta är avgörande för att det keramiska skiktet ska fästa optimalt." },
      { heading: "Keramisk applicering", text: "Vi applicerar det keramiska skiktet för hand med professionell teknik." },
      { heading: "Härdning", text: "Det keramiska skiktet behöver tid att härda. Vi informerar om vad du bör tänka på de första dagarna efter behandlingen." },
      { heading: "Glasbehandling (tillval)", text: "Vi kan även applicera ett hydrofob glasbehandling som gör att vatten perlar bort från rutorna vid körning." },
    ],
    why: [
      "Skyddar lacken i flera år med rätt underhåll",
      "Extremt enkel att hålla ren - smuts fastnar inte",
      "Skyddar mot UV-strålning som annars bryter ned lacken",
      "Kan höja bilens andrahandsvärde",
    ],
    faq: [
      { q: "Vad skiljer keramiskt skydd från vanligt vax?", a: "Vax sitter på ytan och tvättas bort efter några månader. Keramiskt skydd binder kemiskt till lacken och håller i flera år. Det ger även ett hårdare och mer reptåligt skikt." },
      { q: "Behöver bilen förberedas inför keramiskt skydd?", a: "Ja, för bästa resultat bör lacken poleras och avfettas grundligt före applicering. Vi tar hand om hela förberedelsen." },
      { q: "Kan man applicera keramiskt skydd på en ny bil?", a: "Absolut - faktum är att det är optimalt att skydda en ny bil direkt innan lacken hinner samla på sig repor och föroreningar." },
    ],
    pricing: {
      fromPrice: fran("lackskydd"),
      unit: "kr",
      note: "Tillägg till polering. Välj 2, 3 eller 5 års skydd.",
    },
  },
  {
    slug: "biltvatt",
    num: "04",
    title: "Biltvätt",
    shortDesc: "Noggrann handtvätt med professionella produkter. Aldrig automattvättar som repar lacken.",
    metaDesc: "Professionell handtvätt av bil i Örebro. Skonsam tvätt som inte repar lacken. KOM-fort Bilvård - ring 076-194 35 19.",
    hero: "Professionell Biltvätt i Örebro",
    intro: "En professionell handtvätt är något helt annat än en automatisk biltvätt. Automattvättar använder hårda borstar som repar lacken och lämnar swirl-märken. Vi tvättar alltid för hand med mjuka tvätthandskar, pH-neutrala schampon och metoder som skyddar lacken. Varje tvätt utförs med samma omsorg som om det vore vår egen bil.",
    included: [
      { heading: "Förblötläggning & avfettning", text: "Vi börjar med att blötlägga bilen och lösa upp grovsmuts och insekter med skonsamma avfettningsmedel." },
      { heading: "Tvåhinkstvätt", text: "Vi använder tvåhinkmetoden - en hink med tvålvatten och en sköljhink - för att minimera risken att smuts förs tillbaka till lacken." },
      { heading: "Hjul & hjulhus", text: "Hjul och hjulhus tvättas separat med dedikerade produkter för bäst resultat." },
      { heading: "Avtorkning & finish", text: "Bilen torkas med mjuka mikrofiberdukar. Vid in- och utvändig tvätt används vaxschampo." },
    ],
    why: [
      "Skonsammare mot lacken än en automattvätt med borstar",
      "Professionella produkter ger ett resultat du märker",
      "Vi tar oss tid - ingen bil behandlas i en fart",
      "Perfekt som underhåll mellan rekonditioneringar",
    ],
    faq: [
      { q: "Varför är handtvätt bättre än automatisk biltvätt?", a: "Automattvättar har hårda borstar och starka kemikalier som sliter på lacken och skapar repor över tid. Handtvätt med rätt teknik och produkter är alltid skonsamt mot lacken." },
      { q: "Hur ofta bör man tvätta bilen?", a: "Det beror på hur du kör och var du bor. En månatlig tvätt är en bra tumregel för att hålla lacken i gott skick." },
      { q: "Ingår invändig städning?", a: "Det beror på vilken tvätt du väljer. Vi gör utvändig handtvätt, invändig tvätt eller båda, och för en grundligare rengöring finns invändig rekond." },
    ],
    pricing: {
      fromPrice: fran("biltvatt"),
      unit: "kr",
      note: "Utvändig handtvätt för vanlig bil. Alla priser ser du nedan.",
    },
  },
  {
    slug: "invandig-rekond",
    num: "05",
    title: "Invändig Rekond",
    shortDesc: "Kemtvätt av klädsel och mattor, rengöring av alla ytor. Fräscht och rent.",
    metaDesc: "Invändig rekonditionering och kemtvätt av bil i Örebro. Vi tar bort fläckar, lukt och smuts på djupet. KOM-fort Bilvård - ring 076-194 35 19.",
    hero: "Invändig Rekond i Örebro",
    intro: "Bilens interiör tar på sig smuts, fläckar och lukt som vanlig dammsugning inte kan ta bort. Vår invändiga rekonditionering går på djupet - vi kemtvättar klädsel, mattor och tak, rengör alla plastdetaljer och ytor, och behandlar läder om det finns. Resultatet är ett interiör som luktar och känns nytt.",
    included: [
      { heading: "Grundlig dammsugning", text: "Mattor, sätesklyftor och alla svåråtkomliga ställen dammsugits noggrant som första steg." },
      { heading: "Kemtvätt av mattor & klädsel", text: "Med professionell ångtvätts- och kemtvättsutrustning tar vi bort inbyggd smuts, fläckar och bakterier från tyg och heltäckningsmattor." },
      { heading: "Läderbehandling (om aktuellt)", text: "Lädersäten rengörs med pH-neutrala läderrengöringsmedel och behandlas sedan med ett skyddande och mjukgörande läderserum." },
      { heading: "Rengöring av alla ytor", text: "Dashboard, dörrsidor, mittkonsol, luftventiler och alla plastdetaljer rengörs och behandlas med ett skyddande medel som motverkar blekning." },
      { heading: "Glasputsning invändigt", text: "Invändiga rutor putsas med glasrengöringsmedel för maximal sikt och ett rent intryck." },
    ],
    why: [
      "Tar bort lukt från mat, husdjur och fukt",
      "Förlänger livslängden på klädsel och mattor",
      "Professionell utrustning når djupare än hemma",
      "Viktigt för allergikers välmående i bilen",
    ],
    faq: [
      { q: "Kan ni ta bort husdjurslukt?", a: "Ja, i de flesta fall. Vi använder enzymatiska rengöringsmedel som bryter ned luktmolekylerna på djupet, snarare än att bara maskera dem." },
      { q: "Hur lång tid tar invändig rekond?", a: "2-4 timmar beroende på bilens storlek och hur smutsig den är. Vi rekommenderar att du lämnar bilen hos oss för dagen." },
      { q: "Hur länge måste bilen luftas efter kemtvätt?", a: "Vi luftar bilen ordentligt efter behandlingen. Du kan köra hem direkt, men lämna gärna dörrar och fönster öppna ytterligare någon timme om möjligt." },
    ],
    pricing: {
      fromPrice: fran("invandig-rekond"),
      unit: "kr",
      note: "Komplett invändig kemtvätt av klädsel, mattor och alla ytor.",
    },
  },
];

export function getTjanstBySlug(slug: string): Tjanst | undefined {
  return tjanster.find((t) => t.slug === slug);
}
