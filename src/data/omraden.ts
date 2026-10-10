/**
 * Områdessidorna (hubben /omraden och stadsdelssidorna /omraden/<slug>).
 * Texten är ordagrann från batchfilerna i arbetsordern (kom-fort-sidbygge).
 * Länkar skrivs som [text](/sökväg) och renderas av Stycke. Ändra aldrig
 * formuleringar här utan ett nytt sidpaket.
 */
import type { Sektion, Fraga } from "./startsida";

export type Omrade = {
  slug: string;
  namn: string;
  title: string;
  meta: string;
  h1: string;
  intro: string[];
  tjanster: Sektion[];
  hamtning: Sektion;
  /** Kartan läggs direkt under den här sektionens H2. */
  hitta: Sektion;
  faq: { h2: string; fragor: Fraga[] };
};

/** Hubben /omraden. Batch 01, sida 2/5. */
export const omradenHubb = {
  title: "Bilvård i Örebros stadsdelar | Marieberg, Adolfsberg, Vivalla, Varberga och Almby",
  meta: "Vi tar emot bilar från hela Örebro. Se vägen till KOM-fort Bilvård från Marieberg, Adolfsberg, Vivalla, Varberga och Almby, eller låt oss hämta bilen.",
  h1: "Bilvård i Örebros stadsdelar",
  intro:
    "Vår lokal ligger på Lindtorpsvägen 10 i Södra Lindhult, i södra Örebro nära E20. Därifrån når vi hela staden: från vissa stadsdelar har du oss runt hörnet, från andra är det en kvart med bil via Västerleden. Bilen får samma noggranna behandling oavsett var du bor, och all tvätt görs för hand. Alla behandlingar görs i vår lokal, med professionella produkter, oavsett om bilen ska tvättas eller få ett keramiskt lackskydd. Här har vi samlat stadsdelarna vi servar, med vägen till oss och lite om varje område. Hittar du inte din stadsdel tar vi gärna emot bilen ändå.",
  stadsdelar: [
    {
      h2: "Marieberg",
      stycken: [
        "Marieberg ligger strax söder om oss, och Mobacka räknas som en del av stadsdelen. Här finns Örebrotravet, som har funnits sedan 1954, och Mariebergs handelsområde med Marieberg Galleria, som har 2 530 gratis parkeringsplatser. Kommunen bygger nu ut bostadsområdet med villor, radhus och flerbostadshus. Från handelsområdet är det cirka 4 kilometer till oss, ungefär sju minuter med bil. Läs mer om [bilvård i Marieberg](/omraden/marieberg).",
      ],
    },
    {
      h2: "Adolfsberg",
      stycken: [
        "Vi finns själva i Adolfsberg. Järnvägen delar stadsdelen i Övre och Nedre Adolfsberg, och området växte ihop med Örebro 1970. Brunnsparken har varit folkpark sedan 1934, med dansbanan Regnbågen och Parkteatern, och utsågs till Årets Folkpark 1973. Från stadsdelens centrum är det ungefär 2,5 kilometer till vår lokal. Läs mer om [bilvård i Adolfsberg](/omraden/adolfsberg).",
      ],
    },
    {
      h2: "Vivalla",
      stycken: [
        "Vivalla ligger i Örebros nordvästra utkant. Vivalla centrum finns vid Poesigatan, och Citylinjen knyter ihop stadsdelen med centrala Örebro. Området ägs av Örebrobostäder och stod klart 1970. Till oss är det cirka 10 kilometer via Västerleden, runt en kvart med bil. Läs mer om [bilvård i Vivalla](/omraden/vivalla).",
      ],
    },
    {
      h2: "Varberga",
      stycken: [
        "Varberga ligger mellan Oxhagen, Mellringe och Västerleden, på mark som förr hörde till Varberga gård. Husen i rött tegel byggdes 1962-1966, och stadsdelen har ett ombyggt centrum och Varbergaskogens naturreservat runt hörnet. Mellan Varbergaparken och VOX-parken ligger Voxbadet med sin utomhusbassäng. Du når oss via Västerleden från avfart 113 vid Ekersvägen. Det är cirka 8 kilometer, ungefär tio minuter med bil.",
      ],
    },
    {
      h2: "Almby",
      stycken: [
        "Almby i sydöstra Örebro byggdes till stor del på 1920- och 1930-talen och har den medeltida Almby kyrka som riktmärke. Kyrkans äldsta takvirke fälldes redan i början av 1100-talet, och lillklockan från 1200-talet räknas som en av Närkes två äldsta. Almby blev municipalsamhälle 1926 och en del av Örebro stad 1943, och här låg Örebro kartongbruk från 1901 till 2010. Till oss är det cirka 9 kilometer, runt en kvart med bil.",
      ],
    },
  ] satisfies Sektion[],
  lamna: {
    h2: "Lämna bilen för dagen",
    stycken: [
      "En komplett rekond tar normalt 4-8 timmar och en invändig rekond 2-4 timmar, så vi bokar ofta in bilen för hela dagen. Bor du en bit bort kan det därför vara smidigt att lämna bilen hos oss för dagen, eller att låta oss hämta den.",
    ],
  } satisfies Sektion,
  hitta: {
    h2: "Hitta till oss",
    stycken: [
      "Vi servar hela Örebro och även Kumla och Hallsberg. Kommer du på E20 tar du avfart 110 Adolfsberg, så är du nästan framme. Vill du slippa köra kan vi hämta bilen hos dig. Ring 076-194 35 19, så berättar vi vad som gäller och hittar en tid. Läs mer om vår [bilvård i Örebro](/).",
    ],
  } satisfies Sektion,
};

export const omraden: Omrade[] = [
  // Batch 01, sida 3/5
  {
    slug: "marieberg",
    namn: "Marieberg",
    title: "Bilvård Marieberg | Biltvätt & bilrekond nära Marieberg, Örebro",
    meta: "Bilvård för dig i Marieberg: handtvätt, bilrekond, polering och lackskydd, cirka sju minuter från Mariebergs handelsområde. Ring 076-194 35 19.",
    h1: "Bilvård Marieberg",
    intro: [
      "Bor eller jobbar du i Marieberg har du nära till oss. KOM-fort Bilvård ligger på Lindtorpsvägen 10 i Södra Lindhult, strax norr om Marieberg, och från Mariebergs handelsområde tar det ungefär sju minuter med bil. Här får bilen en noggrann handtvätt, en komplett rekond eller ett lackskydd som håller i flera år.",
      "Marieberg hette Närkes Marieberg fram till 1980 och växte ihop med Örebro 2010. En ny trafikplats vid E20 blev klar i slutet av 2025. Runt stadsdelen finns Marieberg Galleria, IKEA, Bauhaus och Örebrotravet, och vid E20 börjar riksväg 51 mot Norrköping. Kör du ofta på de stora lederna märks det på lacken, och där kan vi hjälpa till. Hela vårt utbud hittar du under [bilvård i Örebro](/).",
    ],
    tjanster: [
      {
        h2: "Bilrekond för dig i Marieberg",
        stycken: [
          "Ska bilen säljas, eller behöver den ett lyft efter vintern? En [bilrekond](/tjanster/rekonditionering) ger den nybilskänslan tillbaka. Vi tvättar och avfettar, polerar bort lätta repor i ett steg, skyddar lacken och kemtvättar kupén, så att bilen både ser ut och luktar som ny igen.",
        ],
      },
      {
        h2: "Polering mot repor och swirlmärken",
        stycken: [
          "Parkerar du ofta på stora parkeringar, som vid handelsområdet, blir det lätt små repor från dörrar, kundvagnar och väskor. Med [polering](/tjanster/polering) tar vi bort swirlmärken och ytliga repor i klarlacket, så att lacken får tillbaka sitt djup och sin glans. Vi mäter alltid lacktjockleken innan vi börjar, eftersom polering tar bort ett mycket tunt lager lack. Maskinerna och polermedlen anpassar vi efter just din bils lack.",
        ],
      },
      {
        h2: "Lackskydd mot väg och väder",
        stycken: [
          "Med ett keramiskt [lackskydd](/tjanster/lackskydd) får lacken en hård yta som stöter bort vatten och smuts. Bilen blir lättare att hålla ren mellan tvättarna, och skyddet håller i flera år med rätt skötsel. Kör du E20 eller riksväg 51 varje dag är det ett bra sätt att ta hand om lacken. Det keramiska skiktet är dessutom hårdare än vax och tål lätta repor bättre, vilket är bra för en bil som ofta står på stora parkeringar.",
        ],
      },
      {
        h2: "Handtvätt nära Marieberg",
        stycken: [
          "Letar du efter biltvätt nära Marieberg? Vår [biltvätt](/tjanster/biltvatt) görs alltid för hand med tvåhinkmetoden: en hink med tvålvatten och en med rent sköljvatten, så att smutsen inte förs tillbaka till lacken. Det är skonsammare än en automattvätt med borstar och ett bra underhåll mellan större behandlingar.",
        ],
      },
    ],
    hamtning: {
      h2: "Hämtning och lämning i Marieberg",
      stycken: [
        "Har du fullt upp kan vi hämta bilen hos dig i Marieberg och köra tillbaka den när den är klar. [Hämtning och lämning av bilen](/kontakt) bokar du enklast via formuläret, så berättar vi vad som gäller.",
      ],
    },
    hitta: {
      h2: "Hitta till oss från Marieberg",
      stycken: [
        "Från Mariebergs handelsområde kör du cirka 4 kilometer norrut mot Adolfsberg, och från Örebrotravet är det drygt 5 kilometer. Vår lokal ligger på Lindtorpsvägen 10, nära E20 avfart 110 Adolfsberg. Räkna med ungefär sju minuter från gallerian, beroende på trafiken. Bor du lite längre norrut kan du läsa om vår [bilvård i Adolfsberg](/omraden/adolfsberg).",
      ],
    },
    faq: {
      h2: "Vanliga frågor från Marieberg",
      fragor: [
        { q: "Kan ni ta bort repor från dörrar och kundvagnar?", a: "Ytliga repor i klarlacket går i de flesta fall att polera bort helt. Skador som gått ner till grundfärgen kräver däremot lackering." },
        { q: "Passar en rekond inför en bilförsäljning?", a: "Ja. En rekond lyfter bilens intryck både invändigt och utvändigt och kan höja andrahandsvärdet. Boka gärna i god tid innan bilen ska visas." },
        { q: "Hur lång tid tar en rekond?", a: "En komplett rekond tar normalt 4-8 timmar beroende på bilens storlek och skick. Därför bokar vi in bilen för hela dagen." },
      ],
    },
  },
  // Batch 01, sida 4/5
  {
    slug: "adolfsberg",
    namn: "Adolfsberg",
    title: "Bilvård Adolfsberg | Biltvätt & bilrekond i Adolfsberg, Örebro",
    meta: "KOM-fort Bilvård finns i Adolfsberg, på Lindtorpsvägen 10 i Södra Lindhult. Handtvätt, invändig rekond, polering och keramiskt lackskydd. Ring 076-194 35 19.",
    h1: "Bilvård Adolfsberg",
    intro: [
      "KOM-fort Bilvård ligger i Adolfsberg, på Lindtorpsvägen 10 i Södra Lindhult. Lokalen finns i en fastighet med företagslokaler, granne med ett bostadsområde och hästhagar. Bor du i stadsdelen har du kort väg till oss, och kommer du på E20 kör du av vid avfart 110 Adolfsberg.",
      "Adolfsberg är till stor del villor och radhus, från Brunnsgärdet och Brunnsängen till Lindhult och Parkstaden. Stadsdelen har fått sitt namn efter landshövding Adolf Mörner, som på 1700-talet tog initiativ till hälsobrunnen i det som i dag är Brunnsparken. Centrum är Adolf Mörners plan med ICA Kvantum, och Mosåsvägen går genom området. Grönt finns det gott om, från Sanatorieparkens motionsspår till Hälleboparken. Vi är [KOM-fort Bilvård i Örebro](/), och för oss är Adolfsberg hemmaplan.",
    ],
    tjanster: [
      {
        h2: "Invändig rekond för vardagsbilen",
        stycken: [
          "Bilen som tar dig till jobbet, skolan och träningen samlar på sig smuts, smulor och lukt. Vid en [invändig rekond](/tjanster/invandig-rekond) går vi på djupet med kemtvätt av säten, mattor och innertak. Det tar bort lukt från mat, husdjur och fukt, och husdjurslukt bryter vi i de flesta fall ned med enzymatiska medel. Lädersäten får en egen behandling med läderserum. Räkna med 2-4 timmar.",
        ],
      },
      {
        h2: "Maskinpolering som ger lacken ny glans",
        stycken: [
          "Matt lack, swirlmärken och oxidering går ofta att rätta till utan omlackering. Med [maskinpolering](/tjanster/polering) tar vi bort ytliga repor och ger lacken tillbaka sitt djup och sin glans. Är lacken i gott skick räcker ofta ett steg, medan djupare repor och oxidering kräver två eller tre. Det kostar en bråkdel av en omlackering, och vi avslutar alltid med ett skyddande lager.",
        ],
      },
      {
        h2: "Keramiskt lackskydd",
        stycken: [
          "Ett [keramiskt lackskydd](/tjanster/lackskydd) är det mest långvariga skyddet vi erbjuder. Skiktet gör lacken vattenavvisande och skyddar mot UV-strålning, som annars bryter ned lacken med tiden. Bilen blir dessutom betydligt enklare att hålla ren, eftersom smuts inte fastnar lika lätt. Vi förbereder alltid lacken med polering och avfettning, och har du köpt en ny bil är det bäst att lägga på skyddet direkt.",
        ],
      },
      {
        h2: "Handtvätt nära hemmet",
        stycken: [
          "Vår [handtvätt](/tjanster/biltvatt) tar bort grovsmuts och insekter utan borstar som repar. Vi börjar med blötläggning och skonsam avfettning, och hjul och hjulhus tvättas för sig med egna produkter. Till sist torkar vi bilen för hand och avslutar med snabbvax för extra glans och skydd.",
        ],
      },
    ],
    hamtning: {
      h2: "Hämtning och lämning i Adolfsberg",
      stycken: [
        "Även om vi ligger nära kan det vara skönt att slippa köra. Bor du till exempel i Brunnsgärdet, där bilarna står parkerade längs kanterna av området, kan vi hämta bilen hos dig och lämna den när den är klar. Ring 076-194 35 19 eller skicka en förfrågan om [hämtning och lämning av bilen](/kontakt), så återkommer vi med vad som gäller.",
      ],
    },
    hitta: {
      h2: "Hitta till oss i Adolfsberg",
      stycken: [
        "Från Adolf Mörners plan är det ungefär 2,5 kilometer till Lindtorpsvägen 10, runt fem minuter med bil. Från Adolfsbergs kyrka vid Glomman är det ungefär lika långt. Från Mosåsvägen svänger du in mot Gränsrösevägen, som leder till Lindtorpsvägen. Längre söderut ligger Marieberg. Läs gärna om vår [bilvård i Marieberg](/omraden/marieberg).",
      ],
    },
    faq: {
      h2: "Vanliga frågor från Adolfsberg",
      fragor: [
        { q: "Var i Adolfsberg ligger ni?", a: "På Lindtorpsvägen 10 i Södra Lindhult, nära E20 avfart 110 Adolfsberg." },
        { q: "Kan jag lämna bilen över dagen?", a: "Ja. Vid en komplett rekond bokar vi in bilen för hela dagen, och vid en invändig rekond rekommenderar vi också att du lämnar den hos oss för dagen." },
        { q: "Hur länge ska bilen luftas efter kemtvätt?", a: "Vi luftar bilen ordentligt efter behandlingen. Du kan köra hem direkt, men lämna gärna dörrar och fönster öppna någon timme till om du kan." },
      ],
    },
  },
  // Batch 01, sida 5/5
  {
    slug: "vivalla",
    namn: "Vivalla",
    title: "Bilvård Vivalla | Rekond & handtvätt med hämtning av bil i Vivalla",
    meta: "Bilvård för Vivalla: vi kan hämta och lämna bilen, eller så kör du Västerleden till oss på cirka en kvart. Rekond och handtvätt. Ring 076-194 35 19.",
    h1: "Bilvård Vivalla",
    intro: [
      "Bor du i Vivalla är vi cirka en kvart bort med bil, och större delen av vägen kör du på Västerleden. Vill du slippa köra själv kan vi hämta bilen hos dig. Hos KOM-fort Bilvård tvättas allt för hand, och vi tar hand om allt från en enkel handtvätt till en komplett rekond.",
      "Vivalla byggdes i slutet av 1960-talet runt Vivallaringen, med låga hus i rött tegel, bilfria gårdar och parkeringar nära husen. Namnet är betydligt äldre än så. Byn Vivalla nämns redan 1480, och skalden Lars Wivallius, född här 1605, tog sitt namn efter den. Nordväst om stadsdelen ligger Öknaskogen, naturreservat sedan 2010, där elljusspåret blir skidspår på vintern. Står bilen på en parkering året om tar lacken mer stryk av sol, pollen och vägsalt, och då gör regelbunden [bilvård](/) stor skillnad.",
    ],
    tjanster: [
      {
        h2: "Utvändig rekond som ger lacken nytt liv",
        stycken: [
          "Vid en [utvändig rekond](/tjanster/rekonditionering) handtvättar och avfettar vi bilen, polerar lacken och avslutar med ett skyddande lager. Lacken får tillbaka djup och glans och blir enklare att hålla ren. Vill du ha hela bilen fräsch gör vi en komplett rekond, både ut- och invändigt. Det passar extra bra efter vintern, när vägsalt och grus har satt sig i lacken.",
        ],
      },
      {
        h2: "Repborttagning med maskinpolering",
        stycken: [
          "En repa som bara sitter i klarlacket kan vi oftast polera bort helt. Vid [repborttagning](/tjanster/polering) mäter vi först lacktjockleken och bedömer hur djupt skadan går. Har repan gått ner till grundfärgen eller plåten hjälper inte polering, då behövs lackering.",
        ],
      },
      {
        h2: "Lackförsegling som skyddar mellan tvättarna",
        stycken: [
          "En [lackförsegling](/tjanster/lackskydd) lägger sig som ett skyddande lager över lacken och gör att poleringens resultat håller längre. Med rätt eftervård håller resultatet då i ett till två år. Vill du ha ett skydd som håller i flera år väljer du i stället ett keramiskt lackskydd.",
        ],
      },
      {
        h2: "Ångtvätt av klädsel och mattor",
        stycken: [
          "Vi rengör klädsel och mattor med professionell utrustning för [ångtvätt](/tjanster/invandig-rekond) och kemtvätt. Den tar bort ingrodd smuts, fläckar och bakterier som dammsugaren inte når, så att säten och mattor blir rena på djupet.",
        ],
      },
    ],
    hamtning: {
      h2: "Hämtning och lämning i Vivalla",
      stycken: [
        "Har du inte tid att köra bilen till oss, kan vi hämta den hos dig i Vivalla och lämna den igen när den är klar. Skriv i formuläret att du vill ha [hämtning och lämning av bilen](/kontakt), så hör vi av oss och berättar hur det går till.",
      ],
    },
    hitta: {
      h2: "Hitta till oss från Vivalla",
      stycken: [
        "Från Vivalla centrum vid Poesigatan tar du Hedgatan ut till Västerleden vid avfart 114, som är skyltad Vivalla och Eurostop, och kör söderut. På vägen passerar du avfart 113 mot Varberga. Vid avfart 110 Adolfsberg kör du av, och därifrån är det ett par minuter till Lindtorpsvägen 10. Hela resan är cirka 10 kilometer och tar runt en kvart, beroende på trafiken.",
      ],
    },
    faq: {
      h2: "Vanliga frågor från Vivalla",
      fragor: [
        { q: "Hur lång tid tar en invändig rekond?", a: "Räkna med 2-4 timmar beroende på bilens storlek och hur smutsig den är. Lämna gärna bilen hos oss för dagen." },
        { q: "Kan ni ta bort husdjurslukt?", a: "Ja, i de flesta fall. Vi använder enzymatiska medel som bryter ned lukten på djupet i stället för att bara dölja den." },
        { q: "Hur länge håller ett keramiskt lackskydd?", a: "Med rätt skötsel håller det i flera år. Efter behandlingen går vi igenom vad du bör tänka på de första dagarna, medan skiktet härdar." },
        { q: "Vad kostar en rekond?", a: "Priset beror på bilens storlek och skick. Ring 076-194 35 19, så får du ett pris för just din bil." },
      ],
    },
  },
];

export function getOmradeBySlug(slug: string): Omrade | undefined {
  return omraden.find((o) => o.slug === slug);
}
