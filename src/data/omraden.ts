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
  // Batch 08, R1
  title: "Bilvård i Örebros stadsdelar | Från Hovsta i norr till Mosås i söder",
  meta: "Vi tar emot bilar från hela Örebro. Se vägen till KOM-fort Bilvård från fjorton stadsdelar och orter, från Hovsta i norr till Mosås i söder, eller låt oss hämta bilen.",
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
        "Varberga ligger mellan Oxhagen, Mellringe och Västerleden, på mark som förr hörde till Varberga gård. Husen i rött tegel byggdes 1962-1966, och stadsdelen har ett ombyggt centrum och Varbergaskogens naturreservat runt hörnet. Mellan Varbergaparken och VOX-parken ligger Voxbadet med sin utomhusbassäng. Du når oss via Västerleden från avfart 113 vid Ekersvägen. Det är cirka 8 kilometer, ungefär tio minuter med bil. Läs mer om [bilvård i Varberga](/omraden/varberga).",
      ],
    },
    {
      h2: "Almby",
      stycken: [
        "Almby i sydöstra Örebro byggdes till stor del på 1920- och 1930-talen och har den medeltida Almby kyrka som riktmärke. Kyrkans äldsta takvirke fälldes redan i början av 1100-talet, och lillklockan från 1200-talet räknas som en av Närkes två äldsta. Almby blev municipalsamhälle 1926 och en del av Örebro stad 1943, och här låg Örebro kartongbruk från 1901 till 2010. Till oss är det cirka 9 kilometer, runt en kvart med bil. Läs mer om [bilvård i Almby](/omraden/almby).",
      ],
    },
    // Batch 06 (R1)
    {
      h2: "Mosås",
      stycken: ["Mosås är kyrkbyn söder om Örebro, på åsen där Mosjö kyrka har stått sedan 1100-talet, med Närkeslättens åkrar runt omkring och Mosjö golfklubb västerut. Sedan 2010 hör samhället till Örebro tätort. Till oss är det drygt sex kilometer norrut via Mosåsvägen, ungefär tio minuter. Läs mer om vår [bilvård i Mosås](/omraden/mosas)."],
    },
    {
      h2: "Brickebacken",
      stycken: ["Brickebacken byggdes 1969-1973 och ligger högt ovanför förkastningsbranten, cirka fem kilometer sydost om centrum, med omkring 1 800 lägenheter, ett eget centrum och Markaskogen inpå knuten. Glomman tar dig västerut till Adolfsberg på drygt tio minuter. Läs mer om vår [bilvård i Brickebacken](/omraden/brickebacken)."],
    },
    {
      h2: "Rynninge",
      stycken: ["Rynninge i nordöstra Örebro växte fram som egnahemsområde från 1908, invid Lillån och Rynningevikens naturreservat, med Grenadjärstaden och Rynningeåsen som grannar. Via centrum, Södra infartsleden och Västerleden är det knappt tio kilometer hit, ungefär en kvart. Läs mer om vår [bilvård i Rynninge](/omraden/rynninge)."],
    },
    {
      h2: "Lillån",
      stycken: ["Lillån är stadens nordligaste del, fem kilometer norr om centrum vid Riksväg 50, med villor från 1940-talet och framåt, Lillåns torg och Hovsta kyrka från 1100-talet. Riksväg 50 och Västerleden tar dig hit på ungefär en kvart. Läs mer om vår [bilvård i Lillån](/omraden/lillan)."],
    },
    // Batch 08 (R1)
    {
      h2: "Hovsta",
      stycken: ["Hovsta är en egen tätort i Örebro kommun vid Riksväg 50, nio kilometer norr om centrum, med villabebyggelse, omkring 2 700 invånare och Kårsta golfklubb en kilometer västerut. Till oss är det cirka 17 kilometer via Riksväg 50 och Västerleden, runt 20 minuter med bil. Läs mer om vår [bilvård i Hovsta](/omraden/hovsta)."],
    },
    {
      h2: "Tybble",
      stycken: ["Tybble i östra Örebro byggdes i slutet av 1950-talet av Örebrobostäder och har omkring 1 000 bostäder, en del av dem studentbostäder nära Örebro universitet. Stadsdelens centrum ligger vid Tybble torg på Drakenbergsgatan. Till oss är det drygt 9 kilometer via Södra infartsleden och Västerleden, ungefär en kvart med bil. Läs mer om vår [bilvård i Tybble](/omraden/tybble)."],
    },
    {
      h2: "Mellringe",
      stycken: ["Mellringe i västra Örebro gränsar till Varberga och Hjärsta och har både villor, bostadsrätter och hyresrätter, en egen grundskola och Mellringe idrottsplats. Herrgården med anor från 1700-talet står kvar. Till oss är det cirka 9 kilometer via Ekersvägen och Västerleden, drygt tio minuter med bil. Läs mer om vår [bilvård i Mellringe](/omraden/mellringe)."],
    },
    {
      h2: "Oxhagen",
      stycken: ["Oxhagen väster om stadskärnan har omkring 900 lägenheter från 1960-talet och ett centrum vid Tornfalkgatan som förnyades 2019, med ny belysning och en renoverad bro. Varbergaskogen, Karlslunds herrgård och Hästhagen ligger nära. Till oss är det knappt 7 kilometer via Karlslundsgatan och Västerleden, under tio minuter med bil. Läs mer om vår [bilvård i Oxhagen](/omraden/oxhagen)."],
    },
    {
      h2: "Baronbackarna",
      stycken: ["Baronbackarna nordväst om centrum byggdes på 1950-talet med husen samlade kring bilfria gårdar och ett grönområde i mitten. Tillsammans med stjärnhusen i Rosta gjorde området Örebro känt som bostadsbyggandets mönsterstad. I dag finns här knappt 900 lägenheter och ett eget centrum vid Hjalmar Bergmans väg. Till oss är det cirka 10 kilometer via Hedgatan och Västerleden, drygt tio minuter med bil. Läs mer om vår [bilvård i Baronbackarna](/omraden/baronbackarna)."],
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
      "Vi servar hela Örebro och även Kumla och Hallsberg. Kommer du på E20 tar du avfart 110 Adolfsberg, så är du nästan framme. Vill du slippa köra kan vi hämta bilen hos dig. Ring 076-035 38 08, så berättar vi vad som gäller och hittar en tid. Läs mer om vår [bilvård i Örebro](/).",
    ],
  } satisfies Sektion,
};

export const omraden: Omrade[] = [
  // Batch 01, sida 3/5
  {
    slug: "marieberg",
    namn: "Marieberg",
    title: "Bilvård Marieberg | Biltvätt & bilrekond nära Marieberg, Örebro",
    meta: "Bilvård för dig i Marieberg: handtvätt, bilrekond, polering och lackskydd, cirka sju minuter från Mariebergs handelsområde. Ring 076-035 38 08.",
    h1: "Bilvård Marieberg",
    intro: [
      "Bor eller jobbar du i Marieberg har du nära till oss. KOM-fort Bilvård ligger på Lindtorpsvägen 10 i Södra Lindhult, strax norr om Marieberg, och från Mariebergs handelsområde tar det ungefär sju minuter med bil. Här får bilen en noggrann handtvätt, en komplett rekond eller ett lackskydd som håller i flera år.",
      "Marieberg hette Närkes Marieberg fram till 1980 och växte ihop med Örebro 2010. En ny trafikplats vid E20 blev klar i slutet av 2025. Runt stadsdelen finns Marieberg Galleria, IKEA, Bauhaus och Örebrotravet, och vid E20 börjar riksväg 51 mot Norrköping. Kör du ofta på de stora lederna märks det på lacken, och där kan vi hjälpa till. Hela vårt utbud hittar du under [bilvård i Örebro](/).",
    ],
    tjanster: [
      {
        h2: "Bilrekond för dig i Marieberg",
        stycken: [
          "Ska bilen säljas, eller behöver den ett lyft efter vintern? En [bilrekond](/tjanster/rekonditionering) ger den nybilskänslan tillbaka. Vi tvättar och avfettar, lägger på en lackförsegling som håller i 12 månader och rengör kupén, så att bilen både ser ut och luktar som ny igen. Vill du få bort lätta repor kan du lägga till polering.",
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
        "Har du fullt upp kan vi hämta bilen hos dig i Marieberg och köra tillbaka den när den är klar. [Hämtning och lämning av bilen](/tjanster/hamtning-och-lamning) bokar du enklast via formuläret, så berättar vi vad som gäller.",
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
    meta: "KOM-fort Bilvård finns i Adolfsberg, på Lindtorpsvägen 10 i Södra Lindhult. Handtvätt, invändig rekond, polering och keramiskt lackskydd. Ring 076-035 38 08.",
    h1: "Bilvård Adolfsberg",
    intro: [
      "KOM-fort Bilvård ligger i Adolfsberg, på Lindtorpsvägen 10 i Södra Lindhult. Lokalen finns i en fastighet med företagslokaler, granne med ett bostadsområde och hästhagar. Bor du i stadsdelen har du kort väg till oss, och kommer du på E20 kör du av vid avfart 110 Adolfsberg.",
      "Adolfsberg är till stor del villor och radhus, från Brunnsgärdet och Brunnsängen till Lindhult och Parkstaden. Stadsdelen har fått sitt namn efter landshövding Adolf Mörner, som på 1700-talet tog initiativ till hälsobrunnen i det som i dag är Brunnsparken. Centrum är Adolf Mörners plan med ICA Kvantum, och Mosåsvägen går genom området. Grönt finns det gott om, från Sanatorieparkens motionsspår till Hälleboparken. Vi är [KOM-fort Bilvård i Örebro](/), och för oss är Adolfsberg hemmaplan.",
    ],
    tjanster: [
      {
        h2: "Invändig rekond för vardagsbilen",
        stycken: [
          "Bilen som tar dig till jobbet, skolan och träningen samlar på sig smuts, smulor och lukt. Vid en [invändig rekond](/tjanster/invandig-rekond) går vi på djupet med säten, mattor och alla ytor och tar till ångmaskin när tyget behöver mer. Det tar bort lukt från mat, husdjur och fukt, och husdjurslukt bryter vi i de flesta fall ned med enzymatiska medel. Lädersäten får en egen behandling med läderserum. Räkna med 2-4 timmar.",
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
          "Vår [handtvätt](/tjanster/biltvatt) tar bort grovsmuts och insekter utan borstar som repar. Vi börjar med blötläggning och skonsam avfettning, och hjul och hjulhus tvättas för sig med egna produkter. Till sist torkar vi bilen för hand. Väljer du in- och utvändig tvätt använder vi vaxschampo.",
        ],
      },
    ],
    hamtning: {
      h2: "Hämtning och lämning i Adolfsberg",
      stycken: [
        "Även om vi ligger nära kan det vara skönt att slippa köra. Bor du till exempel i Brunnsgärdet, där bilarna står parkerade längs kanterna av området, kan vi hämta bilen hos dig och lämna den när den är klar. Ring 076-035 38 08 eller skicka en förfrågan om [hämtning och lämning av bilen](/tjanster/hamtning-och-lamning), så återkommer vi med vad som gäller.",
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
    meta: "Bilvård för Vivalla: vi kan hämta och lämna bilen, eller så kör du Västerleden till oss på cirka en kvart. Rekond och handtvätt. Ring 076-035 38 08.",
    h1: "Bilvård Vivalla",
    intro: [
      "Bor du i Vivalla är vi cirka en kvart bort med bil, och större delen av vägen kör du på Västerleden. Vill du slippa köra själv kan vi hämta bilen hos dig. Hos KOM-fort Bilvård tvättas allt för hand, och vi tar hand om allt från en enkel handtvätt till en komplett rekond.",
      "Vivalla byggdes i slutet av 1960-talet runt Vivallaringen, med låga hus i rött tegel, bilfria gårdar och parkeringar nära husen. Namnet är betydligt äldre än så. Byn Vivalla nämns redan 1480, och skalden Lars Wivallius, född här 1605, tog sitt namn efter den. Nordväst om stadsdelen ligger Öknaskogen, naturreservat sedan 2010, där elljusspåret blir skidspår på vintern. Står bilen på en parkering året om tar lacken mer stryk av sol, pollen och vägsalt, och då gör regelbunden [bilvård](/) stor skillnad.",
    ],
    tjanster: [
      {
        h2: "Helrekond som ger bilen nytt liv",
        stycken: [
          "Vid en [helrekond](/tjanster/rekonditionering) handtvättar och avfettar vi bilen, lägger på en lackförsegling som håller i 12 månader och går igenom kupén. Vill du ha tillbaka djup och glans i lacken kan du lägga till polering. Det passar extra bra efter vintern, när vägsalt och grus har satt sig i lacken.",
        ],
      },
      {
        h2: "Repborttagning med maskinpolering",
        stycken: [
          "En repa som bara sitter i klarlacket kan vi oftast polera bort helt. Vid [repborttagning](/tjanster/polering/repborttagning) mäter vi först lacktjockleken och bedömer hur djupt skadan går. Har repan gått ner till grundfärgen eller plåten hjälper inte polering, då behövs lackering.",
        ],
      },
      {
        h2: "Lackförsegling som skyddar mellan tvättarna",
        stycken: [
          "En [lackförsegling](/tjanster/lackskydd) lägger sig som ett skyddande lager över lacken och skyddar mot smuts, vatten och UV-strålning. I vår helrekond ingår en lackförsegling som håller i 12 månader. Vill du ha ett skydd som håller i flera år väljer du i stället polering med keramiskt lackskydd.",
        ],
      },
      {
        h2: "Ångtvätt av klädsel och mattor",
        stycken: [
          "Vid en invändig rekond rengör vi klädsel och mattor efter hur kupén ser ut. När tyget behöver mer borstar vi in rengöringsmedel och tar bort lukt och fläckar med [ångtvätt](/tjanster/invandig-rekond), och sitter fläckarna djupt kan du lägga till kemtvätt av sätena.",
        ],
      },
    ],
    hamtning: {
      h2: "Hämtning och lämning i Vivalla",
      stycken: [
        "Har du inte tid att köra bilen till oss, kan vi hämta den hos dig i Vivalla och lämna den igen när den är klar. Skriv i formuläret att du vill ha [hämtning och lämning av bilen](/tjanster/hamtning-och-lamning), så hör vi av oss och berättar hur det går till.",
      ],
    },
    hitta: {
      h2: "Hitta till oss från Vivalla",
      stycken: [
        "Från Vivalla centrum vid Poesigatan tar du Hedgatan ut till Västerleden vid avfart 114, som är skyltad Vivalla och Eurostop, och kör söderut. På vägen passerar du avfart 113 mot [Varberga](/omraden/varberga). Vid avfart 110 Adolfsberg kör du av, och därifrån är det ett par minuter till Lindtorpsvägen 10. Hela resan är cirka 10 kilometer och tar runt en kvart, beroende på trafiken. På andra sidan Västerleden, vid samma avfart, ligger Baronbackarna, som vi beskriver på sidan om [bilvård i Baronbackarna](/omraden/baronbackarna).",
      ],
    },
    faq: {
      h2: "Vanliga frågor från Vivalla",
      fragor: [
        { q: "Hur lång tid tar en invändig rekond?", a: "Räkna med 2-4 timmar beroende på bilens storlek och hur smutsig den är. Lämna gärna bilen hos oss för dagen." },
        { q: "Kan ni ta bort husdjurslukt?", a: "Ja, i de flesta fall. Vi använder enzymatiska medel som bryter ned lukten på djupet i stället för att bara dölja den." },
        { q: "Hur länge håller ett keramiskt lackskydd?", a: "Med rätt skötsel håller det i flera år. Efter behandlingen går vi igenom hur du sköter bilen medan skiktet härdar, och med första tvätten väntar du minst en vecka." },
        { q: "Vad kostar en rekond?", a: "Priset beror på bilens storlek och skick. Ring 076-035 38 08, så får du ett pris för just din bil." },
      ],
    },
  },
  // Batch 02, sida 1/5
  {
    slug: "varberga",
    namn: "Varberga",
    title: "Bilvård Varberga | Biltvätt & rekond för dig i Varberga, Örebro",
    meta: "Från Varberga är du hos oss på ungefär tio minuter via Västerleden. Handtvätt, rekond inför bilförsäljning och lackrenovering. Ring 076-035 38 08.",
    h1: "Bilvård Varberga",
    intro: [
      "Från Varberga kör du Västerleden söderut och är hos oss på ungefär tio minuter. KOM-fort Bilvård ligger på Lindtorpsvägen 10 i Södra Lindhult, nära E20 avfart 110 Adolfsberg. Här handtvättar vi bilar, polerar fram ny glans i matt lack och gör rekond när bilen ska säljas.",
      "Varberga ligger i nordvästra Örebro, mellan Oxhagen, Mellringe, Hjärsta och Västerleden. Vid Varberga centrum finns bland annat livsmedelsbutik, frisör, kiosk med postombud, vårdcentral och folktandvård, och längs Varbergagatan ligger stora parkeringar. Varbergaskogen, naturreservat sedan 2009, är 93 hektar skog mitt inne i staden. Mer om oss och våra tjänster finns hos [KOM-fort Bilvård](/).",
    ],
    tjanster: [
      {
        h2: "Rekond inför bilförsäljning",
        stycken: [
          "Ska bilen säljas är det värt att visa den från dess bästa sida. Vid en [rekond inför bilförsäljning](/tjanster/rekonditionering/infor-bilforsaljning) går vi igenom hela bilen: tvätt och avfettning, en lackförsegling som håller i 12 månader och rengöring av hela kupén. Kemtvätt av sätena finns som tillägg. Har lacken lätta repor kan du lägga till polering. En välvårdad bil gör ett bättre intryck på köparen och kan höja andrahandsvärdet. Behandlingen tar 4-8 timmar, så lägg den gärna några dagar före första visningen.",
        ],
      },
      {
        h2: "Lackrenovering när lacken blivit matt",
        stycken: [
          "Med åren blir lacken matt av repor, swirlmärken och oxidering. Vid [lackrenovering](/tjanster/polering) maskinpolerar vi lacken tills det mesta av skadorna är borta och färgen har fått tillbaka sitt djup. Lacken blir en aning tunnare vid varje polering, så första steget är alltid att mäta lacktjockleken. Lack i gott skick klarar sig ofta med ett poleringssteg. Är den mer sliten väljer vi två eller tre steg. Det blir betydligt billigare än att lackera om bilen.",
        ],
      },
      {
        h2: "Vax eller keramiskt lackskydd?",
        stycken: [
          "Vax ger lacken glans och ett tunt skyddande lager. Vid in- och utvändig handtvätt använder vi vaxschampo, och efter en polering lägger vi på vax om du inte väljer lackskydd. Vaxet ligger ovanpå lacken och är borta efter några månader. Ett [keramiskt lackskydd](/tjanster/lackskydd) binder i stället kemiskt till lacken, bildar ett hårdare skikt och sitter kvar i flera år om bilen sköts rätt. Det läggs på efter en polering och är rätt val om lacken ska hålla sig fin länge.",
        ],
      },
      {
        h2: "Biltvätt för hand",
        stycken: [
          "Borstarna i en automattvätt kan lämna fina repor i lacken. Vår [biltvätt](/tjanster/biltvatt) görs därför helt för hand. Först blötlägger och avfettar vi bilen, så att grovsmuts och insekter släpper, och sedan tvättar vi med pH-neutralt schampo och mjuka tvätthandskar. Fälgar och hjulhus får egna produkter och tvättas separat, och till sist torkar vi bilen med mikrofiberdukar.",
        ],
      },
    ],
    hamtning: {
      h2: "Hämtning och lämning i Varberga",
      stycken: [
        "Har du ont om tid kan vi hämta bilen hos dig i Varberga och komma tillbaka med den när den är färdig. Nämn [hämtning och lämning av bilen](/tjanster/hamtning-och-lamning) i din förfrågan, så berättar vi hur vi kan lösa det.",
      ],
    },
    hitta: {
      h2: "Hitta till oss från Varberga",
      stycken: [
        "Från Varberga centrum tar du Varbergagatan och Ekersvägen ut till Västerleden vid avfart 113 och kör söderut. Följ Västerleden till avfart 110 Adolfsberg och kör av där. Lindtorpsvägen 10 ligger ett par minuter från avfarten. Sträckan från Varbergagatan är cirka 8 kilometer och tar ungefär tio minuter, beroende på trafiken. Längre norrut längs Västerleden, vid avfart 114, ligger Vivalla. Bor du där kan du läsa om vår [bilvård i Vivalla](/omraden/vivalla). Grannstadsdelarna [Mellringe](/omraden/mellringe) och [Oxhagen](/omraden/oxhagen) har också egna sidor hos oss.",
      ],
    },
    faq: {
      h2: "Vanliga frågor från Varberga",
      fragor: [
        { q: "Kan en rekond höja priset när jag säljer bilen?", a: "Den kan göra det. När bilen är ren och välskött både invändigt och utvändigt syns det direkt vid visningen, och det kan höja andrahandsvärdet." },
        { q: "Hur länge sitter vaxet kvar?", a: "Vax tvättas bort efter några månader. Behöver du ett skydd som räcker längre är keramiskt lackskydd rätt val." },
        { q: "Måste lacken poleras före ett lackskydd?", a: "Ja. Lacken poleras och avfettas alltid först, så att skyddet fäster på en ren och slät yta." },
      ],
    },
  },
  // Batch 02, sida 2/5
  {
    slug: "almby",
    namn: "Almby",
    title: "Bilvård Almby | Handtvätt, rekond & lackskydd för dig i Almby, Örebro",
    meta: "Bilvård för Almby: handtvätt, rekond, keramiskt lackskydd och kemtvätt av klädseln, runt en kvart bort med bil. Vi kan hämta bilen. Ring 076-035 38 08.",
    h1: "Bilvård Almby",
    intro: [
      "KOM-fort Bilvård tar emot bilar från Almby i sydöstra Örebro. Vi finns på Lindtorpsvägen 10 i Södra Lindhult, och bilen kan du antingen lämna själv eller låta oss hämta. Hos oss får den en grundlig handtvätt, ett långvarigt lackskydd eller en kemtvätt av klädseln som tar bort smuts och fläckar.",
      "Almby gränsar till Sörby, Ormesta, Tybble och universitetsområdet och består mest av villor och mindre flerfamiljshus. På Almbyplan, nära Ronnie Petersons föräldrahem, står en bronsstaty av racerföraren, gjord av skulptören Richard Brixel. Vid universitetet, granne med Almby, ligger Enbuskabacken, ett av Närkes största forntida gravfält med 160 synliga gravar från vendeltid och vikingatid. På startsidan ser du allt vi erbjuder inom [bilvård i Örebro](/).",
    ],
    tjanster: [
      {
        h2: "Kemtvätt av bilklädsel",
        stycken: [
          "Säten och mattor drar åt sig smuts, spill och lukt som sitter djupt i tyget. Vid [kemtvätt av bilklädsel](/tjanster/invandig-rekond/kemtvatt-kladsel) använder vi våtdammsugare, som suger upp smuts och fläckar ur tyget. Efteråt luftar vi bilen ordentligt, och du kan köra hem direkt.",
        ],
      },
      {
        h2: "Rekond för hela bilen",
        stycken: [
          "Ska hela bilen bli fin, både in- och utvändigt, passar en komplett [rekond](/tjanster/rekonditionering). Den är vår mest sålda tjänst och omfattar handtvätt, avfettning, en lackförsegling som håller i 12 månader och rengöring av hela kupén. Polering finns som tillägg. Räkna med att bilen blir kvar hos oss över dagen, och när du hämtar den har den fått tillbaka nybilskänslan.",
        ],
      },
      {
        h2: "Lackskydd som gör bilen lättare att hålla ren",
        stycken: [
          "Ett keramiskt [lackskydd](/tjanster/lackskydd) gör lacken vattenavvisande, så att vatten och smuts har svårt att fastna. Skiktet skyddar också mot UV-strålning, oxidering och lätta repor, och bilen blir betydligt enklare att hålla ren mellan tvättarna. Innan skyddet läggs på polerar och avfettar vi alltid lacken.",
        ],
      },
      {
        h2: "Handtvätt som tar bort vintersmutsen",
        stycken: [
          "Vägsalt och smuts från vintervägarna sliter på lacken om de får sitta kvar. En [handtvätt](/tjanster/biltvatt) tar bort dem skonsamt: vi blötlägger och avfettar först, tvättar med pH-neutralt schampo och torkar med mjuka mikrofiberdukar. Som tumregel räcker en tvätt i månaden, men under saltsäsongen kan det vara värt att tvätta oftare. Har strålkastarna blivit gula eller matta kan vi polera dem vid en [strålkastarpolering](/tjanster/polering/stralkastarpolering), och efteråt får de ett lackskydd.",
        ],
      },
    ],
    hamtning: {
      h2: "Hämtning och lämning i Almby",
      stycken: [
        "Vi kan hämta bilen hos dig i Almby och ställa tillbaka den när den är färdig. Be om [hämtning och lämning av bilen](/tjanster/hamtning-och-lamning) när du hör av dig, så får du veta vad som gäller.",
      ],
    },
    hitta: {
      h2: "Hitta till oss från Almby",
      stycken: [
        "Från Almby kyrka är det cirka 9 kilometer till Lindtorpsvägen 10, och med bil är du här på runt en kvart, lite beroende på trafiken. Lokalen ligger i Södra Lindhult i stadsdelen Adolfsberg, nära E20 avfart 110 Adolfsberg. På kartan ser du exakt var vi finns, så att du hittar rätt redan första gången. Grannstadsdelen Tybble har en egen sida om [bilvård i Tybble](/omraden/tybble).",
      ],
    },
    faq: {
      h2: "Vanliga frågor från Almby",
      fragor: [
        { q: "Får ni bort fläckar ur tygsätena?", a: "Med kemtvätt lyfter vi smuts och fläckar ur sätena, och du kan välja kemtvätt per säte eller för alla fyra säten. Hur mycket som går bort beror på fläcken." },
        { q: "Hur ofta behöver bilen en rekond?", a: "En komplett rekond en gång om året räcker för de flesta bilar. Passa gärna på efter vintern eller inför sommaren." },
        { q: "Passar lackskydd på en ny bil?", a: "Ja. Det är optimalt att skydda lacken medan bilen är ny, och med rätt skötsel håller skyddet i flera år." },
      ],
    },
  },
  // Batch 06, sida 1/5
  {
    slug: "mosas",
    namn: "Mosås",
    title: "Bilvård Mosås | Biltvätt & rekond för dig i Mosås, Örebro",
    meta: "Från Mosås är du hos oss på tio minuter via Mosåsvägen. Handtvätt, bilrekond och lackskydd för bilar från Mosås och Mosjö. Ring 076-035 38 08.",
    h1: "Bilvård Mosås",
    intro: [
      "Från Mosås är det bara några minuter till oss. Du kör Mosåsvägen norrut genom Adolfsberg, och efter drygt sex kilometer är du framme på Lindtorpsvägen 10 i Södra Lindhult. Här tvättar vi bilen för hand, gör rekond när den ska säljas och lägger lackskydd som håller i flera år.",
      "Mosås är kyrkbyn i gamla Mosjö socken, söder om Örebro och norr om Kumla. Samhället och Mosjö kyrka från 1100-talet ligger på rullstensåsen som löper från Hallsberg genom Kumla och Örebro, med den gamla landsvägen och järnvägen tätt intill. Runt omkring breder Närkeslättens åkrar ut sig, där Mosjön låg innan den torrlades på 1800-talet. Väster om byn ligger Mosjö golfklubb och längre bort E20. Sedan 2010 räknas Mosås som en del av Örebro tätort. Här kan du läsa mer om [KOM-fort Bilvård](/) och hitta [alla stadsdelar vi servar](/omraden).",
    ],
    tjanster: [
      { h2: "Bilrekond när bilen ska vara som ny", stycken: ["En [bilrekond](/tjanster/rekonditionering) är vår mest sålda tjänst. Bilen handtvättas och avfettas, lacken får en lackförsegling som håller i 12 månader och kupén rengörs från mattor till instrumentbräda. En gång om året är ett bra intervall, gärna efter vintern när saltet ska bort från vägarna runt Mosås, eller inför en försäljning. Bilen stannar hos oss över dagen, så lämna den gärna på morgonen."] },
      { h2: "Handtvätt som tar bort damm och vägsmuts", stycken: ["Bor du på slätten vet du hur snabbt bilen blir dammig från åkrarna och grusvägarna, och från E20 följer asfaltsstänk och flygrost med hem. Vår [biltvätt](/tjanster/biltvatt) görs för hand med tvåhinkmetoden, pH-neutralt schampo och mjuka tvätthandskar, så att sand och grus inte dras över lacken. Sitter det tjära eller rostfärgade prickar kvar efter tvätten finns [asfalts- och flygrostborttagning](/tjanster/biltvatt/asfalt-och-flygrost) som tillägg."] },
      { h2: "Lackskydd för pendlingen på E20", stycken: ["Pendlar du dagligen på E20 får lacken ta emot salt, grus och sol året om. Ett keramiskt [lackskydd](/tjanster/lackskydd) binder till lacken och bildar ett hårt skikt som stöter bort vatten och smuts, skyddar mot UV-strålning och gör bilen betydligt enklare att hålla ren. Lacken poleras alltid först, så att skyddet fäster på en ren yta, och med rätt skötsel håller det i flera år."] },
    ],
    hamtning: { h2: "Hämtning och lämning i Mosås", stycken: ["Mosås ligger nära, men vid en rekond eller polering står bilen hos oss hela dagen, och då kan du låta oss hämta den i stället för att köra två vändor. Be om [hämtning och lämning av bilen](/tjanster/hamtning-och-lamning) när du bokar, så säger vi en tid."] },
    hitta: { h2: "Hitta till oss från Mosås", stycken: ["Kör Kumlavägen norrut, som blir Mosåsvägen när du kommer in i Adolfsberg. Fortsätt rakt fram genom Grusgropsrondellen, och ta första avfarten i rondellen vid Karlskogavägen in på Gränsrösevägen. Efter cirka 600 meter svänger du höger in på Lindtorpsvägen. Hela vägen är drygt 6 kilometer och tar ungefär tio minuter. Nordväst om Mosås ligger Mariebergs handelsområde, och bor du åt det hållet kan du läsa om vår [bilvård i Marieberg](/omraden/marieberg)."] },
    faq: {
      h2: "Vanliga frågor från Mosås",
      fragor: [
        { q: "Hur lång tid tar en bilrekond?", a: "Räkna med att bilen är hos oss över dagen. En helrekond tar runt fem timmar, och lägger du till polering tar det längre." },
        { q: "Hämtar ni bilen i Mosås?", a: "Ja, när bilen ska vara hos oss mer än ett par timmar, till exempel vid rekond och polering. Avgiften ser du i prislistan på hämtningssidan." },
        { q: "Får ni bort asfalt och flygrost?", a: "Ja. Som tillägg till handtvätten löser vi upp asfalt och tjära med kallavfettning och tar bort flygrosten med flygrostborttagare. I helrekonden ingår det." },
      ],
    },
  },
  // Batch 06, sida 2/5
  {
    slug: "brickebacken",
    namn: "Brickebacken",
    title: "Bilvård Brickebacken | Invändig rekond & polering för dig i Brickebacken, Örebro",
    meta: "Från Brickebacken kör du Glomman till oss i Adolfsberg på drygt tio minuter. Invändig rekond, kemtvätt av sätena, polering och handtvätt. Ring 076-035 38 08.",
    h1: "Bilvård Brickebacken",
    intro: [
      "Från Brickebacken kör du Glomman västerut till Adolfsberg och är hos oss på drygt tio minuter. KOM-fort Bilvård ligger på Lindtorpsvägen 10 i Södra Lindhult, och här får bilen allt från en invändig rekond till polering och handtvätt.",
      "Brickebacken byggdes 1969-1973 som en del av miljonprogrammet och ligger cirka fem kilometer sydost om Örebro centrum, högt ovanför förkastningsbranten som skiljer området från innerstaden. Här finns omkring 1 800 lägenheter, de flesta i radhuslängor i två våningar, och ett eget centrum med butik, kafé och bibliotek. Namnet kommer från torpet Brickan, som nämns redan på 1630-talet. Österut ligger villaområdet Brickeberg och Markaskogen med sina motionsspår. Mer om oss finns hos [KOM-fort Bilvård](/), och här ser du [alla stadsdelar vi servar](/omraden).",
    ],
    tjanster: [
      { h2: "Invändig rekond för familjebilen", stycken: ["Barn i baksätet, hunden i bagaget och matrester under sätena sätter sina spår. Vid en [invändig rekond](/tjanster/invandig-rekond) dammsuger vi, rengör klädsel, mattor och alla ytor och putsar rutorna på insidan, och där det behövs tar ångmaskinen bort lukt och fläckar. Har sätena fläckar som sitter djupt lägger du till [kemtvätt av bilklädsel](/tjanster/invandig-rekond/kemtvatt-kladsel) med våtdammsugare. Då står bilen helst kvar hos oss över natten, så att sätena hinner torka helt."] },
      { h2: "Polering mot repor från parkeringen", stycken: ["På en parkering med många bilar och kundvagnar får lacken lätt repor och swirlmärken, och med åren blir den matt. Vid en [polering](/tjanster/polering) mäter vi först lacktjockleken, rengör lacken med rengöringslera och maskinpolerar sedan i ett till tre steg tills det mesta av skadorna är borta. Efteråt lägger vi på vax, eller ett keramiskt lackskydd om du vill att resultatet ska hålla i flera år."] },
      { h2: "Handtvätt i stället för automattvätt", stycken: ["Borstarna i en automattvätt lämnar fina repor som syns i solljus. Vår [biltvätt](/tjanster/biltvatt) görs därför helt för hand: bilen blötläggs och avfettas, tvättas med två hinkar och mjuka tvätthandskar och torkas med mikrofiberdukar. Hjul och hjulhus tas för sig med egna produkter. Du väljer utvändig tvätt, invändig tvätt eller båda, och en enklare tvätt kan du vänta på plats under."] },
    ],
    hamtning: { h2: "Hämtning och lämning i Brickebacken", stycken: ["Glomman är ingen lång väg, men en rekond, kemtvätt eller polering tar en dag eller mer, och då hämtar vi gärna bilen i Brickebacken och ställer tillbaka den när den är färdig. Skriv [hämtning och lämning av bilen](/tjanster/hamtning-och-lamning) i din förfrågan, så löser vi det."] },
    hitta: { h2: "Hitta till oss från Brickebacken", stycken: ["Från Saxons väg kör du ut på Gällerstavägen och vidare på Glomman västerut. Vägen går genom Sörbyskogen och fram till rondellen vid Mosåsvägen i Adolfsberg, där du svänger vänster. I nästa rondell tar du av in på Gränsrösevägen, och efter cirka 600 meter ligger Lindtorpsvägen på höger sida. Sträckan är knappt 7 kilometer och tar drygt tio minuter. Närmaste grannstadsdel norrut är Almby, som har en egen sida om vår [bilvård i Almby](/omraden/almby)."] },
    faq: {
      h2: "Vanliga frågor från Brickebacken",
      fragor: [
        { q: "Får ni bort fläckar efter barnen i baksätet?", a: "I de flesta fall, ja. Fläckar som sitter djupt i tyget tar vi med kemtvätt, och då får bilen gärna stå kvar över natten så att sätena torkar." },
        { q: "Hur lång tid tar en polering?", a: "En 1-stegspolering tillsammans med en helrekond tar ungefär åtta timmar. Väljer du två steg stannar bilen hos oss i minst två dygn." },
        { q: "Hämtar ni bilen i Brickebacken?", a: "Ja, så länge det gäller något som tar längre tid än ett par timmar. En snabb tvätt eller en strålkastarpolering hämtar vi inte för." },
      ],
    },
  },
  // Batch 06, sida 3/5
  {
    slug: "rynninge",
    namn: "Rynninge",
    title: "Bilvård Rynninge | Polering, lackskydd & rekond för dig i Rynninge, Örebro",
    meta: "Från Rynninge är du hos oss på en kvart via Södra infartsleden och Västerleden. Polering, repborttagning, keramiskt lackskydd och bilrekond. Ring 076-035 38 08.",
    h1: "Bilvård Rynninge",
    intro: [
      "Från Rynninge i nordöstra Örebro tar det ungefär en kvart att köra till oss. Vägen går genom centrum och ut på Västerleden, och vi finns på Lindtorpsvägen 10 i Södra Lindhult, strax efter avfart 110 Adolfsberg. Hos oss får bilen polering, lackskydd och rekond, och all tvätt görs för hand.",
      "Rynninge ligger invid Lillån och gränsar till Rynningevikens naturreservat, där strandängarna översvämmas om våren och lockar häckande fåglar. Stadsdelen växte fram som egnahemsområde: föreningen bildades 1903, några år efter att SJ:s centrala verkstäder lagts i Örebro, marken köptes 1908 och delades i 233 tomter, och samma höst flyttade de första familjerna in. Rynninge Folkets Park öppnade 1902 och flyttade 1934 till Brunnsparken i Adolfsberg, bara några minuter från vår lokal. Grannar är Grenadjärstaden på det gamla regementsområdet och det nyare Rynningeåsen. Läs mer om [KOM-fort Bilvård](/) och om [stadsdelarna vi servar](/omraden).",
    ],
    tjanster: [
      { h2: "Polering som ger lacken glansen tillbaka", stycken: ["Nära vatten och lövträd får lacken kåda, pollen och fågelspillning på sig, och med åren blir den matt av fina repor och oxidering. Vid en [polering](/tjanster/polering) mäter vi lacktjockleken, rengör lacken med rengöringslera och maskinpolerar i ett till tre steg tills det mesta av repor och swirlmärken är borta. Har bilen bara en enstaka repa från en kundvagn eller en gren kan vi ta bort den med [repborttagning](/tjanster/polering/repborttagning), utan att polera hela bilen."] },
      { h2: "Keramiskt lackskydd som håller i flera år", stycken: ["Efter poleringen kan lacken få ett keramiskt [lackskydd](/tjanster/lackskydd) i stället för vax. Skiktet binder kemiskt till lacken, stöter bort vatten och smuts och skyddar mot UV-strålning och oxidering. Vax är borta efter några månader, medan lackskyddet håller i flera år om bilen sköts rätt. Det härdar i vår lokal innan du får bilen, och sedan väntar du minst en vecka med första tvätten."] },
      { h2: "Bilrekond en gång om året", stycken: ["En [bilrekond](/tjanster/rekonditionering) tar hand om hela bilen: utsidan tvättas och avfettas och får en lackförsegling som håller i 12 månader, och kupén rengörs från golv till instrumentbräda. Många bokar den efter vintern eller inför sommaren, och ska bilen säljas gör den stor skillnad vid visningen. Polering ingår inte men finns som tillägg."] },
    ],
    hamtning: { h2: "Hämtning och lämning i Rynninge", stycken: ["Från Rynninge är det en bit till oss, och ska bilen vara här en hel dag slipper du köra fram och tillbaka två gånger om vi hämtar den. Säg till om [hämtning och lämning av bilen](/tjanster/hamtning-och-lamning) när du bokar rekonden, poleringen eller kemtvätten, så kommer vi överens om en tid."] },
    hitta: { h2: "Hitta till oss från Rynninge", stycken: ["Kör Grenadjärgatan och CV-gatan ner mot Alnängsgatan, över Hamnbron och in på Trädgårdsgatan. Fortsätt på Borgmästargatan och Kungsgatan till Oscariarondellen, och ta Södra infartsleden ut till Västerleden. Följ Västerleden söderut till avfart 110 Adolfsberg, sväng vänster på Karlskogavägen och ta av i rondellen in på Gränsrösevägen. Lindtorpsvägen ligger på höger sida efter cirka 600 meter. Sträckan är knappt tio kilometer och tar ungefär en kvart. Norr om Rynninge, längs samma å, ligger Lillån med en egen sida om vår [bilvård i Lillån](/omraden/lillan)."] },
    faq: {
      h2: "Vanliga frågor från Rynninge",
      fragor: [
        { q: "Hur lång tid tar resan från Rynninge?", a: "Ungefär en kvart via centrum, Södra infartsleden och Västerleden. Vi kan också hämta bilen hos dig." },
        { q: "Kan ni ta bort en enstaka repa?", a: "Ja, om repan bara sitter i klarlacket. Då tar vi bort den utan att polera hela bilen. Går repan ner till plåten behövs lackering, och det gör vi inte." },
        { q: "Hur länge håller ett keramiskt lackskydd?", a: "Flera år med rätt skötsel. Du väljer mellan 2, 3 och 5 års skydd, och det läggs alltid på efter en polering." },
      ],
    },
  },
  // Batch 06, sida 4/5
  {
    slug: "lillan",
    namn: "Lillån",
    title: "Bilvård Lillån | Handtvätt, glasförsegling & rekond för dig i Lillån, Örebro",
    meta: "Från Lillån kör du Riksväg 50 och Västerleden till oss på ungefär en kvart. Handtvätt, glasförsegling och rekond inför försäljning. Ring 076-035 38 08.",
    h1: "Bilvård Lillån",
    intro: [
      "Från Lillån kör du Riksväg 50 söderut, svänger ut på Västerleden och är hos oss på ungefär en kvart. KOM-fort Bilvård ligger på Lindtorpsvägen 10 i Södra Lindhult, nära avfart 110 Adolfsberg. Hit kommer du för handtvätt, glasförsegling och rekond när bilen ska säljas.",
      "Lillån är Örebros nordligaste utlöpare, fem kilometer norr om centrum vid Riksväg 50. Samhället fick sitt namn när järnvägen mellan Örebro och Frövi drogs fram på 1850-talet och hållplatsen döptes efter vattendraget Lillån. Villorna började byggas på allvar på 1940-talet, och vid Lillåns torg finns butik, kiosk, frisör och vårdcentral. I norra delen står Hovsta kyrka, vars äldsta delar är från 1100-talet, och österut finns elljusspår och utegym. Mer om oss hittar du hos [KOM-fort Bilvård](/), och på [områdessidan](/omraden) finns alla stadsdelar.",
    ],
    tjanster: [
      { h2: "Bilrekond inför försäljningen", stycken: ["Byter du bil är det värt att låta den gamla gå igenom en [bilrekond](/tjanster/rekonditionering) först. Lacken tvättas, avfettas och förseglas för 12 månader framåt, och kupén rengörs i sin helhet. En ren och välskött bil ger ett bättre intryck på köparen och kan höja andrahandsvärdet. På sidan om [rekond inför bilförsäljning](/tjanster/rekonditionering/infor-bilforsaljning) läser du hur du planerar in den före fotograferingen och visningen."] },
      { h2: "Glasförsegling för mörka pendlingar", stycken: ["Pendlar du på Riksväg 50 och Västerleden i mörker och regn märker du hur mycket sikten betyder. En [glasförsegling](/tjanster/lackskydd/glasforsegling) är ett keramiskt skydd för rutorna som får vattnet att pärla sig och rinna av, så att du ser bättre när det regnar. Vindrutan och sidorutorna fram och bak ingår, bakrutan är ett tillägg, och skyddet håller i 2 år. Du kan boka glasförseglingen för sig eller lägga till den när bilen ändå är inne för en rekond, och då kostar den mindre."] },
      { h2: "Handtvätt efter vintervägarna", stycken: ["Riksväg 50 saltas och grusas hela vintern, och saltet sliter på lacken om det får sitta kvar. Vår [biltvätt](/tjanster/biltvatt) görs för hand med tvåhinkmetoden och pH-neutralt schampo, så att grus och sand inte dras över lacken. Hjul och hjulhus tvättas separat, och flygrost och asfalt tar vi bort som tillägg. En tvätt i månaden är en bra tumregel, oftare under saltsäsongen. En enklare handtvätt tar 30-40 minuter, så den kan du vänta på plats under."] },
    ],
    hamtning: { h2: "Hämtning och lämning i Lillån", stycken: ["Lillån ligger i andra änden av stan, så när rekonden eller poleringen tar en hel dag är det bekvämt att vi hämtar bilen hos dig och kör tillbaka den efteråt. Kryssa i rutan för [hämtning och lämning av bilen](/tjanster/hamtning-och-lamning) på bokningssidan, eller säg det när du ringer."] },
    hitta: { h2: "Hitta till oss från Lillån", stycken: ["Kör Faluvägen, alltså Riksväg 50, söderut och ta avfarten mot Oslo och Göteborg ut på Västerleden. Följ Västerleden runt staden i åtta kilometer till avfart 110 Adolfsberg. Efter avfarten håller du vänster mot Adolfsberg på Karlskogavägen, kör in på Gränsrösevägen i rondellen och svänger höger in på Lindtorpsvägen efter 600 meter. Sträckan är cirka 12 kilometer och tar ungefär en kvart. Söderut längs ån ligger Rynninge, som har en egen sida om vår [bilvård i Rynninge](/omraden/rynninge). Längre norrut längs Riksväg 50 ligger Hovsta, där vi också har en sida om [bilvård i Hovsta](/omraden/hovsta)."] },
    faq: {
      h2: "Vanliga frågor från Lillån",
      fragor: [
        { q: "Hur långt är det från Lillån?", a: "Cirka 12 kilometer, ungefär en kvart via Riksväg 50 och Västerleden." },
        { q: "Hämtar ni bilen i Lillån?", a: "Ja, vid rekond, polering och annat som tar mer än ett par timmar. Hämtningssidan har prislistan." },
        { q: "Ingår bakrutan i glasförseglingen?", a: "Nej, bakrutan är ett tillägg. Vindrutan och sidorutorna fram och bak ingår." },
      ],
    },
  },
  // Batch 08, sida 1/5
  {
    slug: "hovsta",
    namn: "Hovsta",
    title: "Bilvård Hovsta | Motortvätt, invändig rekond & hämtning för dig i Hovsta, Örebro",
    meta: "Från Hovsta kör du Riksväg 50 och Västerleden till oss på runt 20 minuter. Motortvätt, invändig rekond och rekond inför leasingåterlämning. Ring 076-035 38 08.",
    h1: "Bilvård Hovsta",
    intro: [
      "Från Hovsta norr om Örebro tar du Riksväg 50 och Västerleden ner till oss och är framme på runt 20 minuter. Vår lokal finns på Lindtorpsvägen 10 i Södra Lindhult, strax efter avfart 110 Adolfsberg. Vill du slippa resan kan vi hämta bilen hos dig, och hos oss får den allt från motortvätt till invändig rekond.",
      "Som egen tätort i Örebro kommun ligger Hovsta cirka nio kilometer norr om centrum längs Riksväg 50, med sjön Lången två kilometer västerut. Samhället växte fram som stationssamhälle när Köping-Hults järnväg drogs fram mellan Örebro och Ervalla 1856, och de gamla gårdarna Kumla, Lund, Mellangården och Lillgården blev grunden. På 1970-talet byggdes orten ut, och 1976 invigdes skolan och centrumanläggningen, där det i dag finns frisör, butik och pizzeria. Samma år bildades Hovsta IF. Läs gärna mer om [KOM-fort Bilvård](/), eller se [alla stadsdelar och orter vi servar](/omraden).",
    ],
    tjanster: [
      { h2: "Rekond inför leasingåterlämning", stycken: ["Ska leasingbilen lämnas tillbaka efter några år av pendling på Riksväg 50, lönar det sig att ge den en ordentlig genomgång först. Vid en [rekond inför leasingåterlämning](/tjanster/rekonditionering/leasingaterlamning) tvättar vi bilen för hand, avfettar den, ger lacken 12 månaders lackförsegling och rengör hela kupén. Repor och fläckar kan du ta bort med tillägg, och före överlämningen gör vi en slutkontroll där hela bilen fotograferas. Lägg in rekonden några dagar före återlämningen, så finns det tid för det som behövs."] },
      { h2: "Motortvätt när bilen ändå är inne", stycken: ["[Motortvätt](/tjanster/biltvatt/motortvatt) gör vi som tillägg till handtvätten eller helrekonden, och hittills har vi gjort fler än 100 motortvättar, utan problem. Motorrummet tvättas vid samma besök som resten av bilen, så att du inte behöver boka en extra tid. Själva [biltvätten](/tjanster/biltvatt) gör vi alltid för hand, aldrig i automattvätt."] },
      { h2: "Invändig rekond efter skog och fält", stycken: ["Hunden i bagaget, lera på mattorna och barr i fotutrymmet följer med hem efter promenaderna i skogen och på fälten runt Hovsta. En [invändig rekond](/tjanster/invandig-rekond) börjar med en grundlig dammsugning. Sedan tvättar vi klädseln och mattorna, torkar av instrumentbräda, dörrsidor och övriga ytor och putsar glaset invändigt. Där tyget behöver mer tar ångmaskinen bort smuts och lukt, och mot husdjurslukt använder vi enzymatiska medel, som klarar det i de flesta fall. Lädersäten får läderserum. Räkna med 2-4 timmar."] },
    ],
    hamtning: { h2: "Hämtning och lämning i Hovsta", stycken: ["Hovsta ligger en bra bit norr om stan, och vid en rekond står bilen här större delen av dagen. Då är det smidigt att vi hämtar den hos dig och kör tillbaka den när den är klar, så att du slipper två resor. Du kan lägga till [hämtning och lämning av bilen](/tjanster/hamtning-och-lamning) direkt i förfrågan. Avgiften ser du i [prislistan](/priser)."] },
    hitta: { h2: "Hitta till oss från Hovsta", stycken: ["Kör ut på Riksväg 50 och följ den söderut förbi Lillån. Strax norr om centrum svänger du av mot Oslo och Göteborg och fortsätter på Västerleden i cirka åtta kilometer. Ta avfart 110 Adolfsberg, sväng vänster på Karlskogavägen och fortsätt in på Gränsrösevägen i rondellen. Lindtorpsvägen kommer efter en dryg halvkilometer, på höger sida. Hela sträckan är cirka 17 kilometer och tar runt 20 minuter. Lillån, som du passerar på vägen, har en egen sida om [bilvård i Lillån](/omraden/lillan)."] },
    faq: {
      h2: "Vanliga frågor från Hovsta",
      fragor: [
        { q: "Hur långt är det från Hovsta?", a: "Cirka 17 kilometer. Via Riksväg 50 och Västerleden tar det runt 20 minuter med bil." },
        { q: "Behöver motorn täckas vid motortvätten?", a: "Nej, inte allt. Medlet bildar ett skydd runt elektroniken och kablarna." },
        { q: "Hämtar ni bilen i Hovsta?", a: "Ja, för rekond, polering och andra behandlingar som tar en stor del av dagen. Tiderna bestämmer vi tillsammans med dig." },
      ],
    },
  },
  // Batch 08, sida 2/5
  {
    slug: "tybble",
    namn: "Tybble",
    title: "Bilvård Tybble | Strålkastarpolering, presentkort & rekond för dig i Tybble, Örebro",
    meta: "Från Tybble i östra Örebro är du hos oss på ungefär en kvart. Strålkastarpolering, rekond inför bilförsäljning och presentkort på bilvård. Ring 076-035 38 08.",
    h1: "Bilvård Tybble",
    intro: [
      "Tybble ligger i östra Örebro, och via centrum och Västerleden når du oss på ungefär en kvart. Hos KOM-fort Bilvård på Lindtorpsvägen 10 tvättas allt för hand. Hit kommer du med gulnade strålkastare, med bilen som ska säljas eller med ett presentkort i fickan.",
      "Tybble var förr en by och den södra av Almby sockens två kyrkbyar. Fram till 1943 hörde området till Almby landskommun, och med Tybble menas i dag området väster om Norrköpingsvägen, med Almby, Sörby och Sörbyängen runt omkring. Gården Tybble låg på andra sidan vägen, och en del av dess mark hör i dag till Almby kyrkogård. Härifrån kom författaren Levi Rickson, känd som Jeremias i Tröstlösa, och hans diktarstuga står numera i Wadköping. Vad vi gör inom [bilvård i Örebro](/) ser du på startsidan, och på områdessidan finns [fler stadsdelar](/omraden).",
    ],
    tjanster: [
      { h2: "Strålkastarpolering när plasten har gulnat", stycken: ["Med åren blir strålkastarnas plast gul och matt, och ljuset når inte lika långt i mörkret. Vid en [strålkastarpolering](/tjanster/polering/stralkastarpolering) våtslipar vi plasten, polerar den klar och avslutar med ett UV-skydd, så att strålkastarna håller sig klara längre. Båda strålkastarna ingår. Behandlingen tar kortare tid än en rekond, och därför passar den bra att lägga till när bilen ändå är hos oss."] },
      { h2: "Presentkort på bilvård", stycken: ["Känner du någon som pluggar vid universitetet eller nyss har fått sin första bil? Ett [presentkort](/presentkort) hos oss gäller alla våra tjänster, från en handtvätt till ett keramiskt lackskydd, och beloppet väljer du själv. Presentkortet skickas till mottagarens e-post."] },
      { h2: "Rekond inför bilförsäljning", stycken: ["Ska bilen säljas när studierna är klara eller familjen behöver en större bil, gör en ren bil stor skillnad på bilderna i annonsen och vid visningen. Vid en [rekond inför bilförsäljning](/tjanster/rekonditionering/infor-bilforsaljning) gör vi samma behandling som vid en [bilrekond](/tjanster/rekonditionering): bilen handtvättas, lacken får en lackförsegling för 12 månader framåt och hela kupén rengörs. Det kan höja andrahandsvärdet, och köparen ser direkt att bilen har skötts. Lägg rekonden innan du fotograferar bilen till annonsen."] },
    ],
    hamtning: { h2: "Hämtning och lämning i Tybble", stycken: ["Slipp resan hit: vi kan hämta bilen hos dig i Tybble och köra hem den när den är klar. Det gäller längre behandlingar som rekond och polering. Boka [hämtning och lämning av bilen](/tjanster/hamtning-och-lamning) samtidigt som behandlingen, så ordnar vi en tid som passar."] },
    hitta: { h2: "Hitta till oss från Tybble", stycken: ["Från Tybble torg vid Drakenbergsgatan kör du Rudbecksgatan in mot centrum och fortsätter via Borgmästargatan och Kungsgatan till Oscariarondellen. Där tar du Södra infartsleden västerut till Västerleden och kör söderut till avfart 110 Adolfsberg. Efter avfarten tar Karlskogavägen och Gränsrösevägen dig fram till Lindtorpsvägen 10 på ett par minuter. Sträckan är drygt 9 kilometer och tar ungefär en kvart. Grannstadsdelen Almby har vi skrivit om på sidan om [bilvård i Almby](/omraden/almby)."] },
    faq: {
      h2: "Vanliga frågor från Tybble",
      fragor: [
        { q: "Hämtar ni bilen för en strålkastarpolering?", a: "Inte när den görs för sig, eftersom den går fort. Bokar du den tillsammans med en rekond eller polering hämtar vi bilen." },
        { q: "Kan presentkortet användas flera gånger?", a: "Ja. Saldot räcker till flera besök, tills det är slut." },
        { q: "Hur långt är det från Tybble?", a: "Drygt 9 kilometer, ungefär en kvart via Södra infartsleden och Västerleden." },
      ],
    },
  },
  // Batch 08, sida 3/5
  {
    slug: "mellringe",
    namn: "Mellringe",
    title: "Bilvård Mellringe | Polering, lackskydd & glasförsegling för dig i Mellringe, Örebro",
    meta: "Från Mellringe kör du Ekersvägen och Västerleden till oss på drygt tio minuter. Polering, keramiskt lackskydd och glasförsegling. Ring 076-035 38 08.",
    h1: "Bilvård Mellringe",
    intro: [
      "Från Mellringe i västra Örebro är du hos oss på drygt tio minuter via Ekersvägen och Västerleden. Vi håller till på Lindtorpsvägen 10 i Södra Lindhult, nära Västerledens avfart 110. Här ger vi lacken ny glans med polering, skyddar den med keramiskt lackskydd och förseglar rutorna.",
      "Mellringe var en by redan på 1500-talet. Under 1600-talet ägdes två av gårdarna först av riksdrotsen Per Brahe den yngre och sedan av riksmarsken Jakob De la Gardie. Herrgårdens bottenvåning är från 1700-talet, och byggnaden fick sitt nuvarande utseende 1878. När en rivning diskuterades 1951 lyfte landsantikvarien Bertil Waldén fram byggnadens ålder och värde, och i dag står herrgården kvar, renoverad. Fram till 1937 hörde Mellringe till Längbro landskommun. Mer om företaget finns hos [KOM-fort Bilvård i Örebro](/), och vägen hit från andra delar av stan hittar du under [stadsdelarna i Örebro](/omraden).",
    ],
    tjanster: [
      { h2: "Polering som tar bort repor och swirlmärken", stycken: ["Tvättrepor, swirlmärken och oxidering gör att lacken tappar sin glans med åren. Inför en [polering](/tjanster/polering) rengör vi lacken med rengöringslera, tejpar lister och plast och mäter lacktjockleken. Därefter maskinpolerar vi lacken, i ett, två eller tre steg beroende på skicket, och tar bort det mesta av skadorna. Polering kostar en bråkdel av en omlackering."] },
      { h2: "Keramiskt lackskydd eller komplett paket", stycken: ["Vill du att glansen ska stanna kvar väljer du ett keramiskt [lackskydd](/tjanster/lackskydd), som läggs på direkt efter poleringen. Skiktet är hårdare än vax och tål mer, gör lacken vattenavvisande, och du väljer själv om skyddet ska räcka i 2, 3 eller 5 år. Vill du ha allt på en gång finns ett komplett paket, där lackkorrigering och 3 års lackskydd ingår. Bilen står kvar i vår lokal i 12 timmar medan skiktet härdar, och den första veckan ska den inte tvättas."] },
      { h2: "Glasförsegling för höstregn och snöslask", stycken: ["Höstregn och snöslask gör snabbt vindrutan svår att se igenom. Med [glasförsegling](/tjanster/lackskydd/glasforsegling) får rutorna ett tunt keramiskt skikt som vattnet inte fastnar på: dropparna samlas och rinner av i stället för att lägga sig som en hinna. Glasförseglingen går att boka för sig, men lägger du till den vid en rekond blir den billigare."] },
    ],
    hamtning: { h2: "Hämtning och lämning i Mellringe", stycken: ["En polering med lackskydd tar mer än en dag, eftersom skiktet ska härda i lokalen innan bilen får köra. Därför kan vi hämta bilen hos dig i Mellringe och köra tillbaka den efteråt. Önskar du [hämtning och lämning av bilen](/tjanster/hamtning-och-lamning), skriv det i förfrågan, så bestämmer vi tiderna tillsammans."] },
    hitta: { h2: "Hitta till oss från Mellringe", stycken: ["Från Mellringevägen kör du ut på Ekersvägen och tar andra avfarten i Mellringerondellen. Ekersvägen leder dig till Västerleden vid avfart 113, och där kör du söderut. Efter drygt fem kilometer tar du avfart 110 Adolfsberg, och därifrån är du framme på Lindtorpsvägen 10 efter en dryg kilometer, via Karlskogavägen och Gränsrösevägen. Hela sträckan är cirka 9 kilometer och tar drygt tio minuter. Mellringe gränsar till Varberga, och vägen därifrån beskriver vi på sidan om [bilvård i Varberga](/omraden/varberga)."] },
    faq: {
      h2: "Vanliga frågor från Mellringe",
      fragor: [
        { q: "Hur många steg behöver lacken poleras?", a: "Det beror på lacken. Ofta räcker ett steg, men har lacken många repor kan den behöva två eller tre. Lacktjockleken mäter vi alltid först." },
        { q: "Hur länge håller glasförseglingen?", a: "I 2 år. Vindruta och sidorutor ingår, och bakrutan är ett tillval." },
        { q: "Kan jag se bilder på resultatet?", a: "Ja. Bilder från några av våra jobb finns under [före och efter](/fore-och-efter)." },
      ],
    },
  },
  // Batch 08, sida 4/5
  {
    slug: "oxhagen",
    namn: "Oxhagen",
    title: "Bilvård Oxhagen | Repborttagning, kemtvätt & handtvätt för dig i Oxhagen, Örebro",
    meta: "Från Oxhagen är du hos oss på under tio minuter via Karlslundsgatan och Västerleden. Repborttagning, kemtvätt av sätena och handtvätt. Ring 076-035 38 08.",
    h1: "Bilvård Oxhagen",
    intro: [
      "Oxhagen ligger nära oss: via Karlslundsgatan och Västerleden är du framme på under tio minuter. På Lindtorpsvägen 10 i Södra Lindhult tar vi bort repor och kemtvättar sätena, och en handtvätt kan du vänta på.",
      "Namnet kommer från en oxhage som förr hörde till Karlslunds herrgård. Oxhagen ligger väster om stadskärnan och avgränsas av Västerleden i öster, Karlslundsgatan i söder, Björkhaga, Varberga och Varbergaskogen i norr och Karlslundsskogen och Längbro kyrka i väster. Örebrobostäder byggde området i etapper under 1960-talet, med hus i två och tre våningar kring bilfria gårdar. Väster om Tornfalkgatan ligger radhusen vid Grönsångaregatan, och närmare Björkhaga finns villor. Vill du veta mer om vår [bilvård](/) finns allt på startsidan, och grannarna hittar du bland [Örebros stadsdelar](/omraden).",
    ],
    tjanster: [
      { h2: "Repborttagning efter trånga parkeringar", stycken: ["I ett trångt garage eller på en full parkering räcker det med en dörr eller en cykel för att lacken ska få en repa. En repa som bara gått genom klarlacket brukar vi kunna ta bort helt med [repborttagning](/tjanster/polering/repborttagning), och då behöver inte hela bilen poleras. Vad det kostar beror på hur stor repan är och hur lång tid arbetet tar. Har bilen många små repor är en [polering](/tjanster/polering) i minst ett steg bättre."] },
      { h2: "Kemtvätt av sätena", stycken: ["Spill, smuts och fläckar som trängt djupt in i tygsätena går inte bort med en vanlig dammsugning. Med en [kemtvätt av bilklädsel](/tjanster/invandig-rekond/kemtvatt-kladsel) och en våtdammsugare lyfter vi ut det som sitter djupt i sätena. Du väljer ett säte eller alla fyra, och kemtvätten går också att lägga till en [invändig rekond](/tjanster/invandig-rekond). Efteråt får bilen gärna stanna en natt hos oss, så att den sista fukten hinner torka ur tyget."] },
      { h2: "Handtvätt som du kan vänta på", stycken: ["Bor du så nära som i Oxhagen är det enkelt att svänga förbi för en tvätt. En enklare handtvätt tar cirka 30-40 minuter, och under tiden kan du vänta hos oss. [Biltvätten](/tjanster/biltvatt) görs alltid för hand: förtvätt och avfettning, tvåhinkstvätt med mjuka tvätthandskar, hjul och hjulhus för sig och torkning med mikrofiberdukar."] },
    ],
    hamtning: { h2: "Hämtning och lämning i Oxhagen", stycken: ["En tvätt hinner du vänta på, men en kemtvätt eller rekond tar längre tid. Då kan vi hämta bilen hos dig i Oxhagen och ställa den på plats igen efteråt. Ring eller skriv till oss, så bokar vi in [hämtning och lämning av bilen](/tjanster/hamtning-och-lamning). Avgiften står i [prislistan](/priser)."] },
    hitta: { h2: "Hitta till oss från Oxhagen", stycken: ["Från Tornfalkgatan kör du ut på Karlslundsgatan österut och tar påfarten till Västerleden vid avfart 112. Kör söderut i drygt fyra kilometer till avfart 110 Adolfsberg. Sväng vänster mot Adolfsberg på Karlskogavägen och ta Gränsrösevägen i rondellen, så kommer Lindtorpsvägen på höger hand. Det är knappt 7 kilometer, under tio minuter med bil. Strax norr om Oxhagen ligger Varberga med Varbergaskogen, och hur du kör därifrån står under [bilvård i Varberga](/omraden/varberga)."] },
    faq: {
      h2: "Vanliga frågor från Oxhagen",
      fragor: [
        { q: "Hur vet ni om en repa går att ta bort?", a: "Vi mäter lacktjockleken och ser hur djupt repan går. Är skadan så djup att grundfärgen eller plåten syns, räcker inte polering, och lackering erbjuder vi inte." },
        { q: "Varför ska bilen stå kvar efter kemtvätten?", a: "Sätena är fuktiga efteråt och behöver natten på sig för att torka helt. Det är också skälet till att helrekonden görs med ånga och inte med kemtvätt." },
        { q: "Lagar ni stenskott?", a: "Ja, stenskott lagar vi. Säg till när du bokar, så tittar vi på skadan." },
      ],
    },
  },
  // Batch 08, sida 5/5
  {
    slug: "baronbackarna",
    namn: "Baronbackarna",
    title: "Bilvård Baronbackarna | Lackskydd, bilrekond & invändig rekond för dig i Baronbackarna, Örebro",
    meta: "Från Baronbackarna kör du Hedgatan och Västerleden till oss på drygt tio minuter. Keramiskt lackskydd, bilrekond och invändig rekond. Ring 076-035 38 08.",
    h1: "Bilvård Baronbackarna",
    intro: [
      "Från Baronbackarna nordväst om centrum kör du Hedgatan ut till Västerleden och är hos oss på drygt tio minuter. Lokalen ligger på Lindtorpsvägen 10 i Södra Lindhult. Här får bilen ett keramiskt lackskydd, en bilrekond eller en invändig rekond, och vi tvättar alltid för hand.",
      "Baronbackarna byggdes 1953-1957 efter ritningar av arkitekterna Ekholm och White, som vann en tävling 1950 med förslaget \"Du får leka på våran gård\". Barnfamiljernas behov stod i centrum: innergårdarna med lekplatserna skulle vara bilfria, och skolor och affärer skulle finnas nära. En fjärdedel av lägenheterna var experimentlägenheter med flyttbara väggar och garderober, och området blev en milstolpe i svenskt bostadsbyggande. I dag är Baronbackarna av riksintresse för kulturmiljövården. På kullen mitt i området finns ett gravfält där människor begravdes för 1 000 till 1 600 år sedan. Det mesta om oss står hos [KOM-fort Bilvård](/), och resten av staden finns under [våra områden](/omraden).",
    ],
    tjanster: [
      { h2: "Lackskydd för bilen på parkeringen", stycken: ["Gårdarna i Baronbackarna är bilfria, och bilen står på parkeringen i sol, regn och vägsalt året om. Det sliter på lacken, och därför är ett keramiskt [lackskydd](/tjanster/lackskydd) värt att tänka på. Skyddet läggs på efter en polering och sitter kvar i flera år, medan vax är borta efter några månader. Vatten och smuts får svårare att fästa, och bilen blir lättare att tvätta."] },
      { h2: "Bilrekond efter vintern", stycken: ["När vintern är över sitter salt, grus och vägsmuts kvar både på lacken och i kupén. Vid en [bilrekond](/tjanster/rekonditionering) får hela bilen hjälp på en gång: handtvätt och avfettning, asfalt och flygrost bort, 12 månaders lackförsegling och rengöring av kupén. De flesta bilar klarar sig fint med en rekond om året, och bilen stannar hos oss i ungefär fem timmar."] },
      { h2: "Invändig rekond för hela kupén", stycken: ["Sand från lekplatserna och smulor från utflykterna sätter sina spår i kupén. När bilen är inne för [invändig rekond](/tjanster/invandig-rekond) får mattor och klädsel rengöringsmedel och borste, och ångmaskinen tar vid där smutsen sitter hårt. Alla ytor torkas av och rutorna putsas på insidan. Innertaket är känsligt och får bara en försiktig avtorkning, och sitter fläckarna djupt i sätena kan du lägga till kemtvätt."] },
    ],
    hamtning: { h2: "Hämtning och lämning i Baronbackarna", stycken: ["Vid en rekond står bilen hos oss det mesta av dagen. I stället för att köra fram och tillbaka kan du låta oss hämta den hos dig i Baronbackarna och köra hem den när vi är klara. Nämn [hämtning och lämning av bilen](/tjanster/hamtning-och-lamning) i förfrågan, så hittar vi tider som passar dig."] },
    hitta: { h2: "Hitta till oss från Baronbackarna", stycken: ["Från Hjalmar Bergmans väg kör du ut på Hedgatan och norrut till Västerleden vid avfart 114. Följ Västerleden söderut förbi avfarterna mot Varberga och Oxhagen, och kör av vid avfart 110 Adolfsberg. Därifrån är det bara ett par minuter kvar, via Karlskogavägen och Gränsrösevägen. Sträckan är cirka 10 kilometer och tar drygt tio minuter. På andra sidan trafikplatsen ligger Vivalla, med sin egen sida om [bilvård i Vivalla](/omraden/vivalla)."] },
    faq: {
      h2: "Vanliga frågor från Baronbackarna",
      fragor: [
        { q: "När får bilen åka hem efter lackskyddet?", a: "När skiktet har härdat 12 timmar i vår lokal. Därefter härdar det vidare i minst en vecka, så vänta med första tvätten." },
        { q: "Får ni bort lukt ur kupén?", a: "I de flesta fall. Ångmaskinen tar bort lukt ur tyg och mattor, och husdjurslukt bryter vi ner med enzymatiska medel." },
        { q: "Hämtar ni bilen i Baronbackarna?", a: "Ja, vid de längre behandlingarna. Den som hämtar bilen lämnar vår egen bil hos dig under tiden, utan nycklar." },
      ],
    },
  },
];

export function getOmradeBySlug(slug: string): Omrade | undefined {
  return omraden.find((o) => o.slug === slug);
}
