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
  /** Texten före priset på kort och i prisrutan. Standard "Fr". */
  prefix?: string;
};

const fran = (slug: string) => kr(sidPriser[slug].fran);

/** Rubrik + stycken (samma form som i startsida.ts). */
export type Sektion = { h2: string; stycken: string[] };

/**
 * Sidans rubriker och text (mallen i tjanster/[slug]/page.tsx).
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
  /** Sista ledet i adressen. Undersidor har dessutom `foralder`. */
  slug: string;
  /** Föräldrasidans slug för undersidor, t.ex. "polering" för /tjanster/polering/repborttagning. */
  foralder?: string;
  num: string;
  title: string;
  /** Kortets text. Bara tjänster med tjänstekort (listan `tjanster`). */
  shortDesc?: string;
  metaDesc: string;
  hero: string;
  intro: string;
  included: { heading: string; text: string }[];
  why: string[];
  faq: { q: string; a: string }[];
  /** Prisrutan i heron. Saknas: ingen prisruta (t.ex. Repborttagning). */
  pricing?: Pricing;
  sida: TjanstSida;
};

/** Sökväg från roten, t.ex. "/tjanster/polering/repborttagning". */
export function tjanstPath(t: Pick<Tjanst, "slug" | "foralder">): string {
  return `/tjanster/${t.foralder ? `${t.foralder}/` : ""}${t.slug}`;
}

/** Nyckel i sidPriser (priser.ts): "polering/repborttagning". */
export function tjanstPrisNyckel(t: Pick<Tjanst, "slug" | "foralder">): string {
  return t.foralder ? `${t.foralder}/${t.slug}` : t.slug;
}

export const tjanster: Tjanst[] = [
  // Batch 02, sida 5/5. Text ordagrann från batcher/batch-02.md.
  {
    slug: "rekonditionering",
    num: "01",
    title: "Bilrekond",
    shortDesc: "Komplett invändig och utvändig behandling. Din bil återfår nybilskänslan.",
    metaDesc: "Bilrekond i Örebro: handtvätt, 12 månaders lackförsegling och rengöring av hela kupén i en och samma behandling. Vi kan hämta bilen. Ring 076-035 38 08.",
    hero: "Bilrekond Örebro",
    intro: "En bilrekond är vår mest sålda tjänst. Vi tar hand om hela bilen, utvändigt och invändigt, vid ett och samma tillfälle: lacken tvättas och får en lackförsegling som håller i 12 månader, och vi går igenom kupén från mattor till instrumentbräda. Resultatet är en bil som känns och luktar ny igen.",
    included: [
      { heading: "Utvändig handtvätt och avfettning", text: "Bilen handtvättas med pH-neutrala medel, och alla ytor avfettas så att lacken är ren inför lackförseglingen." },
      { heading: "Lackförsegling som håller i 12 månader", text: "Vi avslutar med en lackförsegling som skyddar lacken mot smuts, vatten och UV-strålning i 12 månader." },
      { heading: "Hjul och däck", text: "Fälgar och däck rengörs grundligt och behandlas med skyddande produkter." },
      { heading: "Rengöring av klädsel och mattor", text: "Klädsel och mattor rengörs efter hur kupén ser ut, och när det behövs tar vi till rengöringsmedel och ångmaskin mot lukt och fläckar. Innertaket torkar vi bara av försiktigt, eftersom tyget är känsligt." },
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
      { q: "Ingår polering i rekonden?", a: "Nej, polering är ett tillägg. Du kan lägga till en 1-stegspolering, och behöver lacken mer passar vår polering med vax i upp till tre steg." },
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
        "En bilrekond är vår mest sålda tjänst. Vi tar hand om hela bilen, utvändigt och invändigt, vid ett och samma tillfälle: lacken tvättas och får en lackförsegling som håller i 12 månader, och vi går igenom kupén från mattor till instrumentbräda. Resultatet är en bil som känns och luktar ny igen.",
        "Bilen tvättas alltid för hand, och du kan lämna den hos oss eller låta oss hämta den hos dig. Vill du se allt vi gör, läs om [vår bilvård](/).",
      ],
      ingarH2: "Vad ingår i en bilrekond?",
      prisH2: "Pris och tillägg",
      prisText: "Priset för en bilrekond beror på bilens storlek, från små bilar till pickup och van, och 12 månaders lackförsegling ingår. Som tillägg kan du välja motortvätt, [glasförsegling](/tjanster/lackskydd/glasforsegling) med 2 års skydd, 1-stegspolering och kemtvätt av sätena. Vill du ha lackkorrigering och ett [lackskydd](/tjanster/lackskydd) som håller i 3 år finns det i vårt kompletta paket. Alla priser ser du i prislistan, och på [bokningssidan](/boka) får du ett uppskattat pris för din bil.",
      sektioner: [
        {
          h2: "Så går en bilrekond till",
          stycken: [
            "Du bokar genom att ringa eller skicka en förfrågan. Hur lång tid rekonden tar beror på bilens storlek och skick, men räkna med 4-8 timmar, så bilen stannar hos oss hela dagen. Under dagen tvättar och skyddar vi utsidan och går igenom kupén med dammsugning och rengöring av alla ytor. När vi är klara luftar vi bilen ordentligt, så att du kan köra hem direkt. Har du möjlighet kan du låta dörrar och fönster stå öppna en stund till när du kommer hem.",
          ],
        },
        {
          h2: "När behöver bilen en rekond?",
          stycken: [
            "En gång om året är ett bra intervall, helst efter vintern när salt och smuts från vintervägarna ska bort, eller inför sommaren. Ska bilen säljas passar en [rekond inför bilförsäljning](/tjanster/rekonditionering/infor-bilforsaljning), eftersom en ren och fräsch bil kan höja andrahandsvärdet. Ska en leasingbil lämnas tillbaka gäller samma sak, se [rekond inför leasingåterlämning](/tjanster/rekonditionering/leasingaterlamning). Har lacken bara tappat glansen kan polering räcka, och behöver bara kupén fräschas upp finns [invändig rekond](/tjanster/invandig-rekond).",
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
      bokaText: "Ring 076-035 38 08 eller skicka en förfrågan, så hör vi av oss och bokar in en dag som passar dig.",
    },
  },
  // Batch 03, sida 2/5. Text ordagrann från batcher/batch-03.md.
  {
    slug: "polering",
    num: "02",
    title: "Polering",
    shortDesc: "Maskinpolering som tar bort repor och oxidering. Lacken återfår sitt djup och sin glans.",
    metaDesc: "Polering i Örebro: vi mäter lacken, maskinpolerar i ett till tre steg och avslutar med vax. Lackskydd finns som tillägg. Ring 076-035 38 08.",
    hero: "Polering Örebro",
    intro: "Med åren får lacken repor, swirlmärken och oxidering som gör den matt och sliten. Vid en polering tar vi bort ett mycket tunt lager lack, så att det mesta av reporna försvinner och lacken får tillbaka sitt djup och sin glans. Det kostar en bråkdel av en omlackering.",
    included: [
      { heading: "Lackanalys", text: "Vi mäter lacktjockleken och bedömer skicket innan vi börjar, så att vi vet hur mycket lacken tål och vilket program som ger bäst resultat." },
      { heading: "Polering i ett steg", text: "För lack i gott skick räcker ofta ett poleringsteg för att ta bort swirlmärken och ge lacken nytt liv." },
      { heading: "Två eller tre steg", text: "Är lacken mer sliten tar första steget bort djupare repor och oxidering, och nästa steg förfinar ytan för maximalt djup och glans." },
      { heading: "Vax efteråt", text: "Efter polering lägger vi på vax för att bevara resultatet. Vill du skydda lacken längre väljer du lackskydd, som då läggs på i stället för vaxet." },
    ],
    why: [
      "Lacktjockleken mäts alltid före polering",
      "Maskiner och polermedel anpassas efter din bils lack",
      "Kostar en bråkdel av en omlackering",
      "Professionella maskiner och produkter av hög kvalitet",
    ],
    faq: [
      { q: "Kan alla repor tas bort med polering?", a: "Repor som bara sitter i klarlacket går i de flesta fall att ta bort helt. Repor som gått igenom till grundfärgen eller plåten kräver lackering." },
      { q: "Försvinner lacken av polering?", a: "Polering tar bort ett mycket tunt lager lack. Vi mäter alltid lacktjockleken först, så att det finns marginal." },
      { q: "Hur många steg behöver min bil?", a: "För lack i gott skick räcker ofta ett steg. Har lacken djupare repor eller mycket oxidering behövs två eller tre steg, och det ser vi vid lackanalysen." },
      { q: "Hur länge håller resultatet?", a: "Med rätt eftervård håller resultatet länge. Vaxet skyddar lacken i några månader. Vill du ha ett skydd som håller i flera år kan du lägga till lackskydd." },
    ],
    pricing: {
      fromPrice: fran("polering"),
      unit: "kr",
      note: "1-stegspolering med vax. Fler steg för djupare resultat.",
    },
    sida: {
      title: "Polering Örebro | Bilpolering & lackrenovering i Örebro",
      h1: "Polering Örebro",
      intro: [
        "Med åren får lacken repor, swirlmärken och oxidering som gör den matt och sliten. Vid en polering tar vi bort ett mycket tunt lager lack, så att det mesta av reporna försvinner och lacken får tillbaka sitt djup och sin glans. Det kostar en bråkdel av en omlackering.",
        "Vi mäter alltid lacktjockleken först och anpassar maskiner och polermedel efter din bils lack. Efter poleringen lägger vi på vax, och vill du skydda lacken i flera år kan du lägga till [lackskydd](/tjanster/lackskydd). Läs mer om [KOM-fort Bilvård](/) och allt vi gör.",
      ],
      ingarH2: "Vad ingår i en polering?",
      prisH2: "Pris och tillägg",
      prisText: "Priset beror på hur många steg lacken behöver och på bilens storlek. Som tillägg kan du välja lackskydd med 2, 3 eller 5 års skydd. Alla priser står i prislistan, och på [bokningssidan](/boka) räknar du fram ett uppskattat pris för din bil.",
      sektioner: [
        {
          h2: "Så går en polering till",
          stycken: [
            "Du lämnar bilen hos oss, och vi börjar med lackanalysen. Sedan rengör vi lacken med rengöringslera, så att den är fri från föroreningar, och tejpar lister och plast. Därefter maskinpolerar vi i det antal steg vi kommit överens om och tar bort rester med kallavfettning. Sist lägger vi på vax, eller lackskydd om du har valt det. En 1-stegspolering tillsammans med en helrekond tar ungefär åtta timmar. Väljer du två steg stannar bilen hos oss i minst två dygn, och tre steg, som sällan behövs, tar minst tre dygn.",
          ],
        },
        {
          h2: "Repor, swirlmärken och oxidering",
          stycken: [
            "Repor som bara sitter i klarlacket går i de flesta fall att ta bort helt med maskinpolering. Har en repa gått igenom till grundfärgen eller plåten räcker det inte att polera, då behöver ytan lackeras. Swirlmärken, de fina cirkelrepor som syns i solljus, och oxidering som gör lacken matt är däremot precis vad polering är till för. Därför kallas det ibland för lackrenovering, och [repborttagning](/tjanster/polering/repborttagning) är en stor del av jobbet. Även gulnade och matta strålkastare går att polera, och vid en [strålkastarpolering](/tjanster/polering/stralkastarpolering) får de ett skyddande lackskydd efteråt.",
          ],
        },
        {
          h2: "Polering för hela Örebro",
          stycken: [
            "Bilar från hela Örebro poleras hos oss. Från [Marieberg](/omraden/marieberg) är det bara några minuter hit, [Varberga](/omraden/varberga) ligger ungefär tio minuter bort via Västerleden och från [Almby](/omraden/almby) kör du hit på runt en kvart. Från [Rynninge](/omraden/rynninge) i nordöstra Örebro tar det ungefär en kvart via Västerleden. Passar det bättre kan vi också hämta bilen hos dig. Hör av dig, så berättar vi vad som gäller. Vi servar även Adolfsberg, Vivalla, Mosås, Brickebacken, Lillån, Kumla och Hallsberg.",
          ],
        },
      ],
      varforH2: "Varför välja KOM-fort?",
      hitta: {
        h2: "Hitta till oss",
        stycken: ["Du hittar oss på Lindtorpsvägen 10 i Adolfsberg, ett par minuter från E20 avfart 110. Kartan visar exakt var lokalen ligger."],
      },
      faqH2: "Vanliga frågor om polering",
      bokaH2: "Boka polering i Örebro",
      bokaText: "Ring 076-035 38 08 eller skicka en förfrågan, så bokar vi in din bil. På bokningssidan väljer du antal steg och ser ett uppskattat pris.",
    },
  },
  // Batch 03, sida 3/5
  {
    slug: "lackskydd",
    num: "03",
    title: "Lackskydd",
    shortDesc: "Lackskydd som läggs på efter polering. Välj 2, 3 eller 5 års skydd.",
    metaDesc: "Keramiskt lackskydd i Örebro som läggs på efter polering. Välj 2, 3 eller 5 års skydd mot vatten, smuts och UV-strålning. Ring 076-035 38 08.",
    hero: "Lackskydd Örebro",
    intro: "Vårt lackskydd är keramiskt och läggs på lacken efter en polering. Det stöter bort vatten, smuts och kemikalier, skyddar mot UV-strålning och oxidering och gör bilen betydligt enklare att hålla ren. Du väljer mellan 2, 3 och 5 års skydd.",
    included: [
      { heading: "Avfettning efter poleringen", text: "Lackskyddet läggs på efter poleringen, när lacken avfettats noggrant. En ren och slät yta behövs för att skyddet ska fästa." },
      { heading: "Skiktet läggs på för hand", text: "Vi lägger på lackskyddet för hand, med professionella produkter av hög kvalitet." },
      { heading: "Härdning", text: "Skiktet härdar i 12 timmar i vår lokal innan bilen får åka och fortsätter sedan att härda i minst en vecka." },
      { heading: "2, 3 eller 5 års skydd", text: "Du väljer själv hur länge skyddet ska hålla, utifrån hur länge du planerar att ha bilen och hur den används." },
    ],
    why: [
      "Noggrann avfettning före behandlingen",
      "Lackskyddet läggs på för hand",
      "Råd om skötseln efter behandlingen",
      "Kan höja bilens andrahandsvärde",
    ],
    faq: [
      { q: "Kan jag köpa lackskydd utan polering?", a: "Nej, lackskydd är ett tillägg till polering, eftersom skyddet bara fäster bra på en ren och slät yta. Det kompletta paketet innehåller både lackkorrigering och 3 års lackskydd." },
      { q: "Hur länge håller lackskyddet?", a: "Du väljer 2, 3 eller 5 år. Med rätt skötsel skyddar det lacken under hela den tiden." },
      { q: "Kan man lägga lackskydd på en ny bil?", a: "Ja, gärna direkt, innan lacken hunnit samla på sig repor och smuts. Lackskyddet läggs på efter en polering, även på en ny bil." },
      { q: "Hur sköter jag bilen efter behandlingen?", a: "Vänta minst en vecka med första tvätten, gärna längre, eftersom skiktet härdar hela den tiden. Sedan räcker en skonsam handtvätt med pH-neutrala medel, och smuts släpper lättare än förut. Avfetta bilen mer sällan, till exempel varannan månad i stället för varje." },
    ],
    pricing: {
      fromPrice: fran("lackskydd"),
      unit: "kr",
      note: "Tillägg till polering. Välj 2, 3 eller 5 års skydd.",
      prefix: "Tillägg fr",
    },
    sida: {
      title: "Lackskydd Örebro | Keramiskt lackskydd i Örebro",
      h1: "Lackskydd Örebro",
      intro: [
        "Vårt lackskydd är keramiskt och läggs på lacken efter en [polering](/tjanster/polering). Det stöter bort vatten, smuts och kemikalier, skyddar mot UV-strålning och oxidering och gör bilen betydligt enklare att hålla ren. Du väljer mellan 2, 3 och 5 års skydd.",
        "Lackskydd säljs som tillägg till polering, eftersom skyddet aldrig blir bättre än ytan under. Det ingår också i vårt kompletta paket med lackkorrigering och 3 års lackskydd. Rutorna får inget lackskydd, där använder vi [glasförsegling](/tjanster/lackskydd/glasforsegling) i stället. Läs mer om [vår bilvård i Örebro](/).",
      ],
      ingarH2: "Vad ingår i ett lackskydd?",
      prisH2: "Pris och tillägg",
      prisText: "Lackskydd är ett tillägg till polering. Här ser du priserna. Hur länge skyddet ska hålla väljer du själv, och det kompletta paketet med lackkorrigering och 3 års lackskydd har ett eget pris. På [bokningssidan](/boka) lägger du till lackskydd när du väljer polering och ser ett uppskattat pris direkt.",
      sektioner: [
        {
          h2: "Lackskydd eller vax?",
          stycken: [
            "Vax sitter på ytan och tvättas bort efter några månader. Ett lackskydd håller i 2, 3 eller 5 år, beroende på vad du väljer. Ett keramiskt lackskydd binder dessutom kemiskt till lacken och ger ett hårdare och mer reptåligt skikt än vax. Väljer du inget lackskydd avslutar vi poleringen med vax, så lackskyddet är för dig som vill att lacken ska hålla sig fin längre.",
          ],
        },
        {
          h2: "Ny bil eller begagnad?",
          stycken: [
            "Det är optimalt att skydda en ny bil direkt, innan lacken hunnit samla på sig repor och smuts. Även en ny bil poleras först, och på en begagnad bil tar poleringen dessutom bort repor och oxidering, så att skyddet läggs på en fin yta. Vill du ha ett enklare skydd finns lackförsegling, som ingår i vår [bilrekond](/tjanster/rekonditionering) och håller i 12 månader.",
          ],
        },
        {
          h2: "Lackskydd för hela Örebro",
          stycken: [
            "Vi lägger lackskydd på bilar från hela Örebro. Vår lokal ligger i [Adolfsberg](/omraden/adolfsberg). Från [Marieberg](/omraden/marieberg) är det bara några minuter hit och från [Almby](/omraden/almby) tar det runt en kvart. Från [Mosås](/omraden/mosas) söder om stan kör du Mosåsvägen hit på tio minuter. Vi kan också hämta bilen hos dig. Säg till när du bokar, så berättar vi vad som gäller. Vi servar även Vivalla, Varberga, Brickebacken, Rynninge, Lillån, Kumla och Hallsberg.",
          ],
        },
      ],
      varforH2: "Varför välja KOM-fort?",
      hitta: {
        h2: "Hitta till oss",
        stycken: ["Lindtorpsvägen 10 ligger i Södra Lindhult, ett par minuter från E20 avfart 110 Adolfsberg. Kartan visar vägen hit."],
      },
      faqH2: "Vanliga frågor om lackskydd",
      bokaH2: "Boka polering med lackskydd",
      bokaText: "Ring 076-035 38 08 eller skicka en förfrågan och berätta hur länge skyddet ska hålla, så hör vi av oss.",
    },
  },
  // Batch 03, sida 4/5
  {
    slug: "biltvatt",
    num: "04",
    title: "Biltvätt",
    shortDesc: "Noggrann handtvätt med professionella produkter. Aldrig automattvätt.",
    metaDesc: "Biltvätt i Örebro, alltid för hand: utvändig handtvätt, invändig tvätt eller båda, med tvåhinkmetoden och pH-neutrala schampon. Ring 076-035 38 08.",
    hero: "Biltvätt Örebro",
    intro: "Hos oss tvättas bilen alltid för hand, aldrig i automattvätt. Vi använder tvåhinkmetoden, mjuka tvätthandskar och pH-neutrala schampon och torkar bilen med mikrofiberdukar. Det är skonsammare mot lacken än en automattvätt med borstar.",
    included: [
      { heading: "Förblötläggning och avfettning", text: "Vi börjar med att blötlägga bilen, så att grovsmuts och insekter släpper innan vi tvättar." },
      { heading: "Tvåhinkmetoden", text: "En hink med tvålvatten och en sköljhink, så att smuts inte förs tillbaka till lacken." },
      { heading: "Hjul och hjulhus", text: "Hjul och hjulhus tvättas separat med egna produkter." },
      { heading: "Torkning", text: "Bilen torkas med mjuka mikrofiberdukar. Vid in- och utvändig tvätt används vaxschampo." },
    ],
    why: [
      "Alltid för hand, aldrig automattvätt",
      "Tvåhinkmetoden och mjuka tvätthandskar",
      "Professionella produkter och pH-neutrala schampon",
      "Perfekt som underhåll mellan rekonditioneringar",
    ],
    faq: [
      { q: "Varför handtvätt i stället för automattvätt?", a: "För att skona lacken. Med tvåhinkmetoden och mjuka tvätthandskar dras inte sand och grus över lacken, och schampot är pH-neutralt." },
      { q: "Kan ni hämta bilen?", a: "Inte för en tvätt, den går för fort. Vi hämtar bilen för behandlingar som tar mer än ungefär två timmar, till exempel bilrekond, invändig rekond och polering." },
      { q: "Ingår invändig städning?", a: "Det beror på vilken tvätt du väljer. Vi gör utvändig handtvätt, invändig tvätt eller båda, och för en grundligare rengöring finns invändig rekond." },
      { q: "Vad är flygrost?", a: "Små metallpartiklar, bland annat från bromsdamm, som fastnar i lacken och syns som rostfärgade prickar. Vi tar bort dem som ett tillägg till tvätten." },
    ],
    pricing: {
      fromPrice: fran("biltvatt"),
      unit: "kr",
      note: "Utvändig handtvätt för vanlig bil. Alla priser ser du nedan.",
    },
    sida: {
      title: "Biltvätt Örebro | Handtvätt av bil i Örebro",
      h1: "Biltvätt Örebro",
      intro: [
        "Hos oss tvättas bilen alltid för hand, aldrig i automattvätt. Vi använder tvåhinkmetoden, mjuka tvätthandskar och pH-neutrala schampon och torkar bilen med mikrofiberdukar. Det är skonsammare mot lacken än en automattvätt med borstar.",
        "Du väljer utvändig handtvätt, invändig tvätt eller båda, och kan lägga till [motortvätt](/tjanster/biltvatt/motortvatt), asfalts- och saltborttagning eller [flygrostborttagning](/tjanster/biltvatt/asfalt-och-flygrost). Läs mer om vår [bilvård](/).",
      ],
      ingarH2: "Vad ingår i en biltvätt?",
      prisH2: "Pris och tillägg",
      prisText: "Priset beror på vilken tvätt du väljer och på om bilen är en vanlig bil eller en pickup eller van. Tilläggen väljer du till handtvätten. Hela prislistan ser du nedan. Vill du veta vad det kostar för just din bil, välj tvätt och tillägg på [bokningssidan](/boka).",
      sektioner: [
        {
          h2: "Vilken tvätt passar din bil?",
          stycken: [
            "Utvändig handtvätt är för dig som vill ha en ren och blank bil. Invändig tvätt tar hand om kupén, och vill du ha båda gjorda väljer du handtvätt in- och utvändigt. Har bilen asfaltsstänk, vägsalt eller flygrost tar vi bort det som tillägg, och motortvätt gör även motorrummet rent. Behöver kupén mer än en tvätt finns [invändig rekond](/tjanster/invandig-rekond), och vill du ha hela bilen gjord passar en [bilrekond](/tjanster/rekonditionering).",
          ],
        },
        {
          h2: "Därför tvättar vi för hand",
          stycken: [
            "Med tvåhinkmetoden har vi en hink med tvålvatten och en med rent sköljvatten. Tvätthandsken sköljs efter varje del av bilen, så att sand och grus som lossnat inte dras över lacken igen. Hjul och hjulhus, där smutsen sitter hårdast, tvättas för sig med egna produkter. Så skonar vi lacken vid varje tvätt.",
          ],
        },
        {
          h2: "Hur ofta ska bilen tvättas?",
          stycken: [
            "Det beror på hur du kör och var bilen står. På vintern, när vägsaltet ligger på, kan det vara värt att tvätta oftare. Handtvätten är också perfekt som underhåll mellan rekonditioneringarna, så att bilen håller sig fin längre.",
          ],
        },
        {
          h2: "Biltvätt för hela Örebro",
          stycken: [
            "Vi tvättar bilar från hela Örebro. Från [Marieberg](/omraden/marieberg) och handelsområdet är det bara några minuter hit, och [Adolfsberg](/omraden/adolfsberg) är vår egen stadsdel. Från [Vivalla](/omraden/vivalla) tar du Västerleden hit på runt en kvart. Vi servar även Almby, Varberga, Kumla och Hallsberg.",
          ],
        },
      ],
      varforH2: "Varför välja KOM-fort?",
      hitta: {
        h2: "Hitta till oss",
        stycken: ["Vi finns på Lindtorpsvägen 10 i Södra Lindhult, nära E20 avfart 110 Adolfsberg."],
      },
      faqH2: "Vanliga frågor om biltvätt",
      bokaH2: "Boka biltvätt i Örebro",
      bokaText: "Ring 076-035 38 08 eller skicka en förfrågan, så bokar vi in en tid som passar dig.",
    },
  },
  // Batch 03, sida 1/5
  {
    slug: "invandig-rekond",
    num: "05",
    title: "Invändig rekond",
    shortDesc: "Rengöring av klädsel, mattor och alla ytor. Fräscht och rent.",
    metaDesc: "Invändig rekond i Örebro: dammsugning, rengöring av säten, mattor och alla ytor samt invändig glasputs. Kemtvätt finns som tillägg. Ring 076-035 38 08.",
    hero: "Invändig rekond Örebro",
    intro: "Vid en invändig rekond går vi igenom hela kupén. Säten och mattor rengörs, alla ytor görs rena och rutorna putsas på insidan. Behöver tyget mer borstar vi in rengöringsmedel och tar bort lukt och fläckar med ångmaskin, så att bilen känns fräsch igen när du sätter dig i den.",
    included: [
      { heading: "Grundlig dammsugning", text: "Mattor, springor i sätena och svåråtkomliga ställen dammsugs noggrant som första steg." },
      { heading: "Rengöring av klädsel och mattor", text: "Säten och mattor rengörs efter hur kupén ser ut. Vid behov borstar vi in rengöringsmedel och använder ångmaskin mot lukt och fläckar." },
      { heading: "Avtorkning av innertaket", text: "Innertaket torkar vi av försiktigt, eftersom tyget är lätt att skada." },
      { heading: "Läderbehandling", text: "Har bilen lädersäten rengörs de med pH-neutralt läderrengöringsmedel och behandlas sedan med ett skyddande och mjukgörande läderserum." },
      { heading: "Rengöring av alla ytor", text: "Instrumentbräda, dörrsidor, mittkonsol och luftventiler rengörs och får ett skyddande medel." },
      { heading: "Invändig glasputs", text: "Rutorna putsas på insidan för bättre sikt och ett rent intryck." },
    ],
    why: [
      "Tar bort lukt från mat, husdjur och fukt",
      "Ångmaskin när tyget behöver mer",
      "Läderserum när bilen har lädersäten",
      "Vi tar den tid kupén behöver",
    ],
    faq: [
      { q: "Hur lång tid tar en invändig rekond?", a: "Räkna med två till fyra timmar. Ju större bil och ju smutsigare kupé, desto längre tid, så det enklaste är att lämna bilen hos oss över dagen." },
      { q: "Ingår kemtvätt av sätena?", a: "Nej, kemtvätt är ett tillägg. Du kan välja kemtvätt per säte eller för alla fyra säten, och priserna ser du i prislistan." },
      { q: "Kan ni ta bort husdjurslukt?", a: "I de flesta fall, ja. Lukten sitter ofta djupt i tyget, och med enzymatiska medel bryter vi ned den i stället för att bara dölja den." },
      { q: "Hur länge behöver bilen luftas?", a: "Vi luftar bilen ordentligt efter behandlingen, så du kan köra hem direkt. Lämna gärna dörrar och fönster öppna ytterligare någon timme." },
      { q: "Vad är skillnaden mot invändig tvätt?", a: "Invändig tvätt är en enklare rengöring av kupén. Vid en invändig rekond går vi igenom hela kupén noggrant, från mattor och säten till alla ytor och rutor." },
    ],
    pricing: {
      fromPrice: fran("invandig-rekond"),
      unit: "kr",
      note: "Rengöring av hela kupén. Kemtvätt finns som tillägg.",
    },
    sida: {
      title: "Invändig rekond Örebro | Invändig bilrengöring i Örebro",
      h1: "Invändig rekond Örebro",
      intro: [
        "Vid en invändig rekond går vi igenom hela kupén. Säten och mattor rengörs, alla ytor görs rena och rutorna putsas på insidan. Behöver tyget mer borstar vi in rengöringsmedel och tar bort lukt och fläckar med ångmaskin, så att bilen känns fräsch igen när du sätter dig i den.",
        "Sitter fläckarna djupt kan du lägga till kemtvätt av sätena, och har bilen lädersäten får de en behandling med läderserum. Vill du ha både insidan och utsidan gjorda passar en [bilrekond](/tjanster/rekonditionering). Läs mer om [bilvård hos KOM-fort](/).",
      ],
      ingarH2: "Vad ingår i en invändig rekond?",
      prisH2: "Pris för invändig rekond",
      prisText: "Priset ser du i prislistan, och slutpriset beror på bilens storlek och skick. Kemtvätt av sätena finns som tillägg, per säte eller för alla fyra säten. Vill du ha en uppskattning för just din bil kan du skicka en förfrågan på [bokningssidan](/boka).",
      sektioner: [
        {
          h2: "Så går en invändig rekond till",
          stycken: [
            "När du har bokat lämnar du bilen hos oss för dagen. Vi börjar med dammsugning, rengör sedan klädsel, mattor och alla ytor och tar glasputsen sist. Själva arbetet tar 2-4 timmar, beroende på bilens storlek och skick. Innan du hämtar bilen luftar vi kupén ordentligt och går igenom hela bilen en sista gång.",
          ],
        },
        {
          h2: "När behöver kupén en invändig rekond?",
          stycken: [
            "Efter vintern, när grus, salt och väta har följt med in i bilen, eller när kupén luktar mat, husdjur eller fukt. Har sätena fläckar som sitter djupt gör [kemtvätt av bilklädsel](/tjanster/invandig-rekond/kemtvatt-kladsel) mest skillnad, och den kan du lägga till. Då står bilen helst kvar över natten, så att sätena hinner torka. Ska bilen säljas gör en ren kupé stor skillnad, eftersom köparen sätter sig i bilen först av allt. Vid en [rekond inför bilförsäljning](/tjanster/rekonditionering/infor-bilforsaljning) tar vi hand om både kupén och utsidan. Räcker det med en enklare rengöring finns invändig tvätt som en del av vår [biltvätt](/tjanster/biltvatt).",
          ],
        },
        {
          h2: "Invändig rekond i hela Örebro",
          stycken: [
            "Bor du i [Adolfsberg](/omraden/adolfsberg) har du nära, eftersom vår lokal ligger i Södra Lindhult i samma stadsdel. Från [Varberga](/omraden/varberga) tar det ungefär tio minuter via Västerleden, och från [Vivalla](/omraden/vivalla) runt en kvart. Vill du slippa köra kan vi hämta bilen hos dig. Fråga när du bokar, så berättar vi vad som gäller. Vi servar även Marieberg, Almby, Kumla och Hallsberg.",
          ],
        },
      ],
      varforH2: "Varför välja KOM-fort?",
      hitta: {
        h2: "Hitta till oss",
        stycken: ["Vår lokal ligger på Lindtorpsvägen 10 i Södra Lindhult, nära E20 avfart 110 Adolfsberg."],
      },
      faqH2: "Vanliga frågor om invändig rekond",
      bokaH2: "Boka invändig rekond i Örebro",
      bokaText: "Ring 076-035 38 08 eller skicka en förfrågan. Vi hör av oss och bokar in en dag då du kan vara utan bilen.",
    },
  },
];

export function getTjanstBySlug(slug: string): Tjanst | undefined {
  return tjanster.find((t) => t.slug === slug);
}
