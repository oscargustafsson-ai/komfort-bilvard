/**
 * Startsidans text. Ordagrant från batcher/batch-01.md (sida 1/5) i
 * arbetsordern. Länkar skrivs som [text](/sökväg) och renderas av Stycke.
 * Ändra aldrig formuleringar här utan ett nytt sidpaket.
 */
export type Sektion = { h2: string; stycken: string[] };
export type Fraga = { q: string; a: string };

export const startsida = {
  title: "Bilvård Örebro | Biltvätt & bilrekond i Örebro",
  meta: "Bilvård i Örebro med handtvätt, bilrekond, polering och keramiskt lackskydd. Vi finns nära E20 avfart 110 Adolfsberg och kan hämta bilen. Ring 076-194 35 19.",
  h1: "Bilvård Örebro",
  intro: [
    "KOM-fort Bilvård tar hand om din bil från första tvätten till färdigt lackskydd. Vår lokal ligger på Lindtorpsvägen 10 i södra Örebro, nära E20 och avfart 110 Adolfsberg. Du lämnar bilen hos oss, eller så kan vi hämta den hos dig.",
    "All tvätt görs för hand, aldrig i automattvätt. Vi använder professionella produkter och pH-neutrala medel som skonar lacken, och vi behandlar varje bil som om den vore vår egen. Så arbetar vi med bilvård i Örebro: noggrant och utan genvägar.",
  ],
  tjanster: [
    {
      h2: "Bilrekond i Örebro",
      stycken: [
        "En rekond är vår mest kompletta behandling och vår mest sålda tjänst. Utvändigt handtvättar och avfettar vi bilen, maskinpolerar lacken i ett steg och lägger på ett skyddande lager. Invändigt kemtvättar vi klädsel, mattor och innertak och rengör alla ytor, från instrumentbrädan till luftventilerna. En komplett rekond tar normalt 4-8 timmar beroende på bilens storlek och skick, så vi bokar in bilen för hela dagen. Vi rekommenderar en rekond en gång om året, gärna efter vintern eller inför sommaren. Läs mer om [vår bilrekond i Örebro](/tjanster/rekonditionering).",
      ],
    },
    {
      h2: "Polering och lackrenovering i Örebro",
      stycken: [
        "Repor, swirlmärken och oxidering gör lacken matt och sliten. Med maskinpolering tar vi bort det mesta av skadorna utan att bilen behöver lackeras om. Innan vi börjar mäter vi lackens tjocklek och bedömer skicket, så att vi vet hur mycket marginal lacken har och vilket polerprogram som passar din bil. Repor som bara sitter i klarlacket går i de flesta fall att ta bort helt, medan skador som gått ner till grundfärgen kräver lackering. Efter poleringen lägger vi alltid på ett skydd som bevarar resultatet. Läs mer om [polering i Örebro](/tjanster/polering).",
      ],
    },
    {
      h2: "Keramiskt lackskydd i Örebro",
      stycken: [
        "Ett keramiskt lackskydd binder kemiskt till lacken och bildar en hård, vattenavvisande yta. Vatten, smuts och kemikalier får svårare att fästa, bilen blir enklare att tvätta och lacken skyddas mot UV-strålning och oxidering. Vax sitter på ytan och tvättas bort efter några månader, medan ett keramiskt skydd håller i flera år med rätt skötsel. Vi polerar och avfettar alltid lacken först, eftersom skyddet aldrig blir bättre än ytan under. Har du en ny bil är det smart att skydda lacken direkt. Läs mer om [lackskydd i Örebro](/tjanster/lackskydd).",
      ],
    },
    {
      h2: "Handtvätt och biltvätt i Örebro",
      stycken: [
        "Automattvättar med hårda borstar sliter på lacken och lämnar repor över tid, och det vill vi att du ska slippa. Hos oss blötlägger och avfettar vi bilen först, tvättar med tvåhinkmetoden och pH-neutralt schampo, rengör hjul och hjulhus separat och torkar med mjuka mikrofiberdukar. En tvätt i månaden är en bra tumregel för att hålla lacken i gott skick, och på vintern gör den extra nytta mot vägsaltet. Läs mer om [biltvätt i Örebro](/tjanster/biltvatt).",
      ],
    },
    {
      h2: "Invändig rekond i Örebro",
      stycken: [
        "Smuts, fläckar och lukt sätter sig djupt i klädsel och mattor, och där räcker dammsugaren inte till. Vid en invändig rekond dammsuger vi grundligt, kemtvättar säten, mattor och innertak och rengör plastytor, dörrsidor och luftventiler. Har bilen lädersäten rengör vi dem med pH-neutralt medel och behandlar dem med läderserum. Lukt från husdjur och mat tar vi i de flesta fall bort med enzymatiska medel, som bryter ned lukten i stället för att dölja den. Räkna med 2-4 timmar. Läs mer om [invändig rekond](/tjanster/invandig-rekond).",
      ],
    },
  ] satisfies Sektion[],
  hamtning: {
    h2: "Vi hämtar och lämnar bilen",
    stycken: [
      "Har du inte tid att köra bilen till oss, kan vi hämta den hos dig och lämna tillbaka den när den är klar. Du slipper ta dig till verkstaden och vänta. Hör av dig, så berättar vi vad som gäller och bokar en tid som passar dig.",
    ],
    knapp: { text: "Boka hämtning", href: "/kontakt" },
  },
  omraden: {
    h2: "Bilvård i hela Örebro",
    stycken: [
      "Vi tar emot bilar från hela Örebro. Bor du i [Adolfsberg](/omraden/adolfsberg) har du oss nästan runt hörnet, och från [Marieberg](/omraden/marieberg) är det ungefär sju minuter norrut. Från [Vivalla](/omraden/vivalla) och Varberga kör du Västerleden söderut till avfart 110, och från Almby i sydöstra Örebro är det runt en kvart med bil. Vi servar även Kumla och Hallsberg.",
    ],
  } satisfies Sektion,
  om: {
    h2: "Om KOM-fort Bilvård",
    stycken: [
      "KOM-fort Bilvård AB grundades av Goran Ismailovic med en enkel vision: att ge varje bil i Örebro den omsorg den förtjänar. Verkstaden öppnade i augusti 2025. Vi tar oss den tid jobbet kräver och stressar aldrig fram ett resultat.",
    ],
  } satisfies Sektion,
  hitta: {
    h2: "Hitta till oss",
    stycken: [
      "Lokalen ligger i Södra Lindhult i Adolfsberg. Kör av vid E20 avfart 110 Adolfsberg, så är du framme efter ett par minuter.",
    ],
  } satisfies Sektion,
  faq: {
    h2: "Vanliga frågor om bilvård i Örebro",
    fragor: [
      { q: "Kan jag ge bort bilvård i present?", a: "Ja. Vi säljer presentkort som gäller på alla våra tjänster, och du väljer själv beloppet." },
      { q: "Hur betalar jag?", a: "Du betalar tryggt via Zettle, samma betalsystem som vi använder i verkstaden." },
      { q: "Hur bokar jag?", a: "Ring 076-194 35 19 eller skicka en förfrågan via kontaktformuläret, så hör vi av oss inom kort." },
    ] satisfies Fraga[],
  },
};
