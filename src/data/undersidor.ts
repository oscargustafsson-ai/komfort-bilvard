/**
 * Tjänstsidor utan tjänstekort: Hämtning och lämning av bil (direkt under /tjanster)
 * och undersidorna under Polering, Invändig rekond och Lackskydd.
 * Text ordagrann från batcher/batch-04.md. Priser från priser.ts.
 */
import type { Tjanst } from "./tjanster";
import { sidPriser, kr } from "./priser";

const fran = (nyckel: string) => kr(sidPriser[nyckel].fran);

export const undersidor: Tjanst[] = [
  // Batch 04, sida 1/5
  {
    slug: "hamtning-och-lamning",
    num: "06",
    title: "Hämtning och lämning av bil",
    metaDesc: "Vi kan hämta bilen hos dig i Örebro, ta hand om bilvården i vår lokal och lämna tillbaka bilen när den är klar. Utanför Örebro också. Ring 076-035 38 08.",
    hero: "Hämtning och lämning av bil i Örebro",
    intro: "Hinner du inte köra bilen till oss kommer vi och hämtar den. Den som ska ta hand om bilen hämtar den hos dig, vi gör jobbet i vår lokal och kör sedan tillbaka bilen när den är färdig. Du slipper både köra hit och vänta medan vi arbetar.",
    included: [
      { heading: "Hämtning hos dig", text: "Vi bestämmer en tid tillsammans, och den som ska ta hand om bilen kommer och hämtar den." },
      { heading: "Vår bil står kvar hos dig", text: "Vi kommer i vår egen bil och lämnar den hos dig, utan nycklar, medan din bil är hos oss." },
      { heading: "Arbetet görs i vår lokal", text: "Bilen behandlas i lokalen på Lindtorpsvägen 10, precis som när du lämnar den själv." },
      { heading: "Lämning när bilen är klar", text: "När bilen är färdig och har gått igenom slutkontrollen kör vi tillbaka den till dig." },
    ],
    why: [
      "Du slipper köra och vänta",
      "Tiden bestämmer vi tillsammans med dig",
      "Vår bil står hos dig medan din är hos oss",
      "Slutkontroll innan bilen lämnas tillbaka",
    ],
    faq: [
      { q: "Vad kostar hämtning och lämning?", a: "Inom centrala Örebro är priset fast, och utanför Örebro beror det på avståndet. Priserna står i prislistan, och vi bekräftar alltid priset när vi bokar in dig." },
      { q: "Kan ni göra jobbet hemma hos mig?", a: "Nej. Allt arbete görs i vår lokal, där vi har utrustningen. Det vi erbjuder är att hämta bilen och köra tillbaka den när jobbet är gjort." },
      { q: "Hur går överlämningen till?", a: "Den som hämtar din bil kommer i sin egen bil och låter den stå hos dig, utan nycklar, tills din bil är tillbaka. Du lämnar dina nycklar till oss, och tiderna bestämmer vi tillsammans." },
      { q: "Hämtar ni utanför Örebro?", a: "Ja. Utanför Örebro tar vi en startavgift och en avgift per mil, och priset avrundas till närmaste tiotal. Vi servar bland annat Kumla och Hallsberg." },
      { q: "Hur bokar jag hämtning?", a: "Kryssa i rutan för hämtning på bokningssidan, skriv det i kontaktformuläret eller säg det när du ringer 076-035 38 08." },
    ],
    pricing: {
      fromPrice: fran("hamtning-och-lamning"),
      unit: "kr",
      note: "Inom centrala Örebro. Utanför Örebro enligt prislistan.",
    },
    sida: {
      title: "Hämtning och lämning av bil Örebro | Bilvård med hämtning i Örebro",
      h1: "Hämtning och lämning av bil i Örebro",
      intro: [
        "Hinner du inte köra bilen till oss kommer vi och hämtar den. Den som ska ta hand om bilen hämtar den hos dig, vi gör jobbet i vår lokal och kör sedan tillbaka bilen när den är färdig. Du slipper både köra hit och vänta medan vi arbetar.",
        "Du kan be om hämtning när du bokar en [bilrekond](/tjanster/rekonditionering), en [invändig rekond](/tjanster/invandig-rekond) eller en [polering](/tjanster/polering). Allt arbete görs hos oss, aldrig hemma hos dig. Här finns mer om [KOM-fort Bilvård i Örebro](/).",
      ],
      ingarH2: "Vad ingår i hämtning och lämning?",
      prisH2: "Pris för hämtning och lämning",
      prisText: "Inom centrala Örebro kostar hämtning och lämning ett fast pris. Utanför Örebro tar vi en startavgift och en avgift per mil, och summan avrundas till närmaste tiotal. Priserna ser du i prislistan. På [bokningssidan](/boka) kryssar du i rutan för hämtning, så bekräftar vi priset när vi hör av oss.",
      sektioner: [
        {
          h2: "Så går hämtningen till",
          stycken: ["Du bokar tjänsten som vanligt och berättar att du vill att vi hämtar bilen. Vi kommer överens om en tid, och sedan kommer vi till dig i vår egen bil. Den står kvar hos dig medan vi tar med oss din bil och dina nycklar. När behandlingen är klar går vi igenom bilen och fotograferar den, kör tillbaka den till dig och tar med oss vår egen bil igen."],
        },
        {
          h2: "När passar hämtning bäst?",
          stycken: ["Hämtning erbjuder vi för det mesta vi gör, till exempel bilrekond, invändig rekond, polering och kemtvätt av sätena, i princip allt som tar mer än ett par timmar. En bilrekond tar 4-8 timmar, och en polering i två eller tre steg betyder att bilen stannar i minst två dygn. Då är det skönt att slippa köra fram och tillbaka. Undantagen är en enklare handtvätt, som tar 30-40 minuter och som du kan vänta på plats under, och strålkastarpolering. För dem hämtar vi inte bilen."],
        },
        {
          h2: "Lämnar du hellre bilen själv?",
          stycken: ["Vår lokal ligger på Lindtorpsvägen 10 i Södra Lindhult, och du är alltid välkommen att lämna bilen själv. Under större rekonder kan vi skjutsa dig till Marieberg utan kostnad medan bilen behandlas."],
        },
        {
          h2: "Hämtning i hela Örebro",
          stycken: ["Bor du i [Vivalla](/omraden/vivalla) eller [Almby](/omraden/almby) tar det runt en kvart att köra till oss, och från [Varberga](/omraden/varberga) ungefär tio minuter. Där kan hämtning spara dig en hel del tid. Utanför Örebro hämtar vi också, och då beror priset på avståndet. Vi servar även Marieberg, Adolfsberg, Kumla och Hallsberg."],
        },
      ],
      varforH2: "Varför välja KOM-fort?",
      hitta: {
        h2: "Hitta till oss",
        stycken: ["Vill du hellre komma själv finns vi på Lindtorpsvägen 10, ett par minuter från E20 avfart 110 Adolfsberg."],
      },
      faqH2: "Vanliga frågor om hämtning och lämning",
      bokaH2: "Boka hämtning och lämning i Örebro",
      bokaText: "Ring 076-035 38 08 eller skicka en förfrågan. Skriv var bilen står, så bestämmer vi en tid som passar dig.",
    },
  },
  // Batch 04, sida 2/5
  {
    slug: "repborttagning",
    foralder: "polering",
    num: "02",
    title: "Repborttagning",
    metaDesc: "Repborttagning i Örebro: vi mäter lacken och tar bort repor i klarlacket, ofta utan att hela bilen behöver poleras. Stenskott lagar vi också. Ring 076-035 38 08.",
    hero: "Repborttagning Örebro",
    intro: "En repa i lacken betyder inte alltid att bilen måste lackeras om. Sitter repan bara i klarlacket kan vi i de flesta fall ta bort den helt, och är lacken i övrigt i fint skick tar vi bort repan utan att polera hela bilen.",
    included: [
      { heading: "Lackanalys", text: "Vi mäter lacktjockleken och bedömer hur djupt repan går innan vi börjar." },
      { heading: "Rengöring och tejp", text: "Lacken rengörs med rengöringslera, och lister och plast runt repan tejpas innan vi polerar." },
      { heading: "Polering av repan", text: "Repan poleras bort med maskin. Sitter den bara i klarlacket försvinner den i de flesta fall helt." },
      { heading: "Stenskott", text: "Små skador från stenar på vägen, oftast på fronten och motorhuven, lagar vi också." },
    ],
    why: [
      "Lacktjockleken mäts innan vi börjar",
      "Enstaka repor utan att hela bilen poleras",
      "Lister och plast tejpas före poleringen",
      "Stenskott lagar vi också",
    ],
    faq: [
      { q: "Hur vet jag om repan går att ta bort?", a: "Dra en nagel över repan. Fastnar den inte sitter repan troligen bara i klarlacket, och då går den i de flesta fall att ta bort. Säkert besked får du när vi har mätt lacken." },
      { q: "Måste hela bilen poleras?", a: "Nej, inte om lacken i övrigt är i fint skick. Då tar vi bara bort repan. Har bilen många repor krävs minst en 1-stegspolering av hela lacken." },
      { q: "Vad kostar det att ta bort en repa?", a: "Priset sätts efter repans storlek och hur lång tid det tar. Beskriv repan när du hör av dig, så får du besked om vad det kostar." },
      { q: "Lagar ni stenskott?", a: "Ja. Berätta hur många stenskott det är och var de sitter, så får du veta vad som gäller." },
      { q: "Lackerar ni?", a: "Nej. Har en repa gått ner till grundfärgen eller plåten behöver ytan lackeras, och det ingår inte i det vi gör." },
    ],
    sida: {
      title: "Repborttagning Örebro | Ta bort repor på bilen i Örebro",
      h1: "Repborttagning Örebro",
      intro: [
        "En repa i lacken betyder inte alltid att bilen måste lackeras om. Sitter repan bara i klarlacket kan vi i de flesta fall ta bort den helt, och är lacken i övrigt i fint skick tar vi bort repan utan att polera hela bilen.",
        "Har bilen många fina repor är en [polering](/tjanster/polering) av hela lacken ett bättre val, och stenskott lagar vi också. Se allt vi gör inom [bilvård i Örebro](/).",
      ],
      ingarH2: "Vad ingår i en repborttagning?",
      prisH2: "Pris för repborttagning",
      prisText: "En enstaka repa prissätts efter hur stor den är och hur lång tid jobbet tar, så du får besked om priset när vi vet hur repan ser ut. Har bilen många repor blir en 1-stegspolering ofta det bästa valet, och den hittar du i prislistan.",
      sektioner: [
        {
          h2: "Vilka repor går att ta bort?",
          stycken: ["Lacken består av flera lager, och överst ligger klarlacket. Repor som bara sitter där kan vi oftast ta bort helt. Går repan djupare, ner till grundfärgen eller plåten, hjälper ingen polering. Då måste ytan lackeras, och det gör vi inte. Därför mäter vi alltid lacken först, så att vi vet hur mycket lack det finns att arbeta med och kan ge dig ett rakt besked."],
        },
        {
          h2: "En repa eller hela bilen?",
          stycken: ["En enstaka repa, till exempel från en kundvagn eller en gren, kan vi ta bort utan att polera hela bilen, så länge lacken runt omkring är i fint skick. Har bilen mycket fina repor, så kallade mikrorepor, behövs minst en 1-stegspolering av hela lacken. Vill du skydda lacken efteråt kan du lägga till [lackskydd](/tjanster/lackskydd) när bilen poleras."],
        },
        {
          h2: "Repborttagning i hela Örebro",
          stycken: ["Har bilen fått repor på en stor parkering, som vid handelsområdet i [Marieberg](/omraden/marieberg), har du bara några minuter hit. Vår lokal ligger i [Adolfsberg](/omraden/adolfsberg), och [Vivalla](/omraden/vivalla) ligger runt en kvart bort längs Västerleden. Vill du inte köra själv kan du låta oss [hämta bilen hos dig](/tjanster/hamtning-och-lamning). Vi servar även Almby och Varberga, liksom Kumla och Hallsberg."],
        },
      ],
      varforH2: "Varför välja KOM-fort?",
      hitta: {
        h2: "Hitta till oss",
        stycken: ["Lokalen ligger på Lindtorpsvägen 10 i Södra Lindhult, och från E20 tar du avfart 110 Adolfsberg."],
      },
      faqH2: "Vanliga frågor om repborttagning",
      bokaH2: "Boka repborttagning i Örebro",
      bokaText: "Ring 076-035 38 08 eller skicka en förfrågan och beskriv repan, var den sitter och hur stor den är, så hör vi av oss.",
    },
  },
  // Batch 04, sida 3/5
  {
    slug: "kemtvatt-kladsel",
    foralder: "invandig-rekond",
    num: "05",
    title: "Kemtvätt av bilklädsel",
    metaDesc: "Kemtvätt av bilsäten i Örebro: vi suger upp smuts och fläckar ur tyget med våtdammsugare. Ett säte eller alla fyra, för sig eller med rekond. Ring 076-035 38 08.",
    hero: "Kemtvätt av bilklädsel i Örebro",
    intro: "Spill och fläckar som har sjunkit in i tyget på bilsätena går inte bort med en vanlig dammsugare. Vid kemtvätt suger vi upp smutsen ur tyget med en våtdammsugare, så att sätena blir rena på djupet.",
    included: [
      { heading: "Kemtvätt med våtdammsugare", text: "Smuts och fläckar sugs upp ur tyget med en våtdammsugare, i stället för att bara torkas av på ytan." },
      { heading: "Ett säte eller alla fyra", text: "Du kan kemtvätta ett eller flera säten, och väljer du alla fyra ingår mittsätet." },
      { heading: "Torkning över natten", text: "Vi rekommenderar att bilen står kvar hos oss över natten, så att den sista fukten i sätena hinner torka helt." },
      { heading: "Slutkontroll", text: "Innan du hämtar bilen går vi igenom den och fotograferar den." },
    ],
    why: [
      "Kemtvätt med våtdammsugare",
      "Ett säte eller alla fyra",
      "För sig eller som tillägg till rekond",
      "Sätena torkar över natten hos oss",
    ],
    faq: [
      { q: "Vad kostar kemtvätt av bilsäten?", a: "Du betalar per säte, och för alla fyra säten finns ett fast pris där mittsätet ingår. Priserna ser du i prislistan." },
      { q: "Kan jag boka kemtvätt utan rekond?", a: "Ja. Kemtvätten går att boka för sig, och den finns också som tillägg till helrekond och invändig rekond." },
      { q: "Kemtvättar ni innertaket?", a: "Nej. Taket är klätt med ett tyg som är lätt att skada, så det torkar vi bara av försiktigt." },
      { q: "När kan jag hämta bilen?", a: "Vi rekommenderar att bilen står kvar hos oss över natten, så att den sista fukten i sätena hinner torka helt innan du hämtar den. Säg till när du bokar om du behöver bilen samma dag." },
      { q: "Går alla fläckar bort?", a: "Det beror på vad fläcken består av och hur länge den har suttit. Berätta gärna vad det gäller när du bokar, så vet vi vad vi har att jobba med." },
    ],
    pricing: {
      fromPrice: fran("invandig-rekond/kemtvatt-kladsel"),
      unit: "kr",
      note: "Per säte. Väljer du alla fyra säten ingår mittsätet.",
    },
    sida: {
      title: "Kemtvätt av bilklädsel Örebro | Kemtvätt av bilsäten i Örebro",
      h1: "Kemtvätt av bilklädsel i Örebro",
      intro: [
        "Spill och fläckar som har sjunkit in i tyget på bilsätena går inte bort med en vanlig dammsugare. Vid kemtvätt suger vi upp smutsen ur tyget med en våtdammsugare, så att sätena blir rena på djupet.",
        "Kemtvätten går att boka för sig eller som tillägg till en [invändig rekond](/tjanster/invandig-rekond) eller en [bilrekond](/tjanster/rekonditionering). Läs om allt vi gör hos [KOM-fort Bilvård i Örebro](/).",
      ],
      ingarH2: "Vad ingår i kemtvätt av bilklädsel?",
      prisH2: "Pris för kemtvätt av bilklädsel",
      prisText: "Priserna står i prislistan och är desamma när kemtvätten är ett tillägg till en rekond. På [bokningssidan](/boka) väljer du antal säten och ser ett uppskattat pris direkt.",
      sektioner: [
        {
          h2: "När behöver sätena kemtvätt?",
          stycken: ["När det har spillts kaffe, läsk eller mat, när barnen har ätit i baksätet eller när sätena helt enkelt har blivit grå av smuts med åren. Ska bilen säljas gör rena säten stort intryck på den som provkör. Hur mycket av en fläck som går bort beror på vad den består av och hur länge den har suttit, så berätta gärna vad det gäller när du bokar."],
        },
        {
          h2: "Kemtvätt eller invändig rekond?",
          stycken: ["Vid en invändig rekond rengör vi hela kupén, från mattor och säten till instrumentbräda och rutor, och använder ångmaskin där det behövs. Kemtvätten är ett steg till för säten där fläckarna sitter djupt. Eftersom sätena behöver torka över natten efteråt ingår den inte i helrekonden, där vi använder ånga i stället, utan finns som tillägg. Är det bara sätena som behöver göras kan du boka kemtvätten för sig."],
        },
        {
          h2: "Kemtvätt av bilklädsel i hela Örebro",
          stycken: ["I [Adolfsberg](/omraden/adolfsberg) har du oss i samma stadsdel, och från [Varberga](/omraden/varberga) är du här på ungefär tio minuter. [Almby](/omraden/almby) ligger runt en kvart bort. Passar det bättre kommer vi och [hämtar bilen hos dig](/tjanster/hamtning-och-lamning). Vi servar även Vivalla, Marieberg, Kumla och Hallsberg."],
        },
      ],
      varforH2: "Varför välja KOM-fort?",
      hitta: {
        h2: "Hitta till oss",
        stycken: ["Lindtorpsvägen 10 ligger i Södra Lindhult i Adolfsberg, nära E20 avfart 110, och kartan visar vägen."],
      },
      faqH2: "Vanliga frågor om kemtvätt av bilklädsel",
      bokaH2: "Boka kemtvätt av bilklädsel i Örebro",
      bokaText: "Välj antal säten på bokningssidan eller ring 076-035 38 08, så hittar vi en tid som passar.",
    },
  },
  // Batch 04, sida 4/5
  {
    slug: "stralkastarpolering",
    foralder: "polering",
    num: "02",
    title: "Strålkastarpolering",
    metaDesc: "Strålkastarpolering i Örebro: vi polerar båda strålkastarna och lägger på ett lackskydd, så att de håller sig klara längre. Ring 076-035 38 08.",
    hero: "Strålkastarpolering Örebro",
    intro: "Gula och matta strålkastare får bilen att se äldre ut än den är, och de lyser inte upp vägen lika bra. Vid en strålkastarpolering polerar vi båda strålkastarna så att de blir klara igen, och sedan får de ett skyddande lackskydd.",
    included: [
      { heading: "Båda strålkastarna", text: "Priset gäller alltid båda strålkastarna." },
      { heading: "Våtslipning och polering", text: "Det gula och matta ytskiktet slipas bort med våtslipning, och sedan poleras strålkastarna klara igen." },
      { heading: "Lackskydd", text: "Efter poleringen får strålkastarna ett lackskydd som skyddar mot UV-strålning, så att de inte bleks igen lika snabbt." },
      { heading: "Slutkontroll", text: "Vi går igenom och fotograferar bilen innan du hämtar den." },
    ],
    why: [
      "Båda strålkastarna till ett fast pris",
      "Lackskydd ingår, så att resultatet håller",
      "Slutkontroll med foton innan du hämtar bilen",
      "Våtslipning, polering och UV-skydd",
    ],
    faq: [
      { q: "Vad kostar strålkastarpolering?", a: "Priset är fast och gäller båda strålkastarna, med lackskydd. Du ser det i prislistan." },
      { q: "Varför får strålkastarna lackskydd?", a: "Utan skydd bleks plasten snabbt av solen igen. Lackskyddet gör att strålkastarna håller sig klara längre." },
      { q: "Hjälper polering om det är imma på insidan?", a: "Nej. Polering tar bara hand om ytan på utsidan. Sitter det fukt eller imma inne i strålkastaren hjälper inte polering." },
      { q: "Hur ser jag att det är dags?", a: "När strålkastarna ser gula, matta eller grumliga ut, eller när ljuset känns svagare än det brukar." },
    ],
    pricing: {
      fromPrice: fran("polering/stralkastarpolering"),
      unit: "kr",
      note: "Båda strålkastarna, inklusive lackskydd.",
      prefix: "Pris",
    },
    sida: {
      title: "Strålkastarpolering Örebro | Polering av strålkastare i Örebro",
      h1: "Strålkastarpolering Örebro",
      intro: [
        "Gula och matta strålkastare får bilen att se äldre ut än den är, och de lyser inte upp vägen lika bra. Vid en strålkastarpolering polerar vi båda strålkastarna så att de blir klara igen, och sedan får de ett skyddande lackskydd.",
        "Lackskyddet är det som gör att resultatet håller, eftersom strålkastarna annars snabbt bleks av solen igen. Strålkastarpolering hör till vår [polering](/tjanster/polering), och här kan du läsa om [vår bilvård](/).",
      ],
      ingarH2: "Vad ingår i en strålkastarpolering?",
      prisH2: "Pris för strålkastarpolering",
      prisText: "Strålkastarpoleringen har ett fast pris, och i det ingår båda strålkastarna och lackskyddet. Priset står i prislistan. Vill du boka väljer du strålkastarpolering på [bokningssidan](/boka) och skickar en förfrågan.",
      sektioner: [
        {
          h2: "Varför blir strålkastarna gula?",
          stycken: ["De flesta strålkastare på nyare bilar är gjorda av plast, och från fabriken har plasten ett skyddande ytskikt. Med åren slits det ned av solens UV-strålning och av grus från vägen, och plasten börjar oxidera. Ytan blir först matt och sedan gul, och ljuset sprids i stället för att lysa där det ska. Det sker långsamt, så många märker det först när de jämför med en bil som har klara strålkastare."],
        },
        {
          h2: "Därför behövs lackskyddet",
          stycken: ["Våtslipningen och poleringen tar bort det skadade ytskiktet, men efteråt ligger plasten oskyddad. Utan ett nytt skydd bleks den snabbt av solen igen, och därför ingår alltid ett lackskydd när vi polerar strålkastare. Det är skillnaden mellan ett resultat som håller och ett som snart är borta."],
        },
        {
          h2: "Klara strålkastare under den mörka årstiden",
          stycken: ["Under vinterhalvåret kör de flesta i mörker både till och från jobbet, och då märks det hur mycket strålkastarna betyder. Klara strålkastare gör det lättare att se vägkanten, gående och vilt. Vill du också se bättre när det regnar finns [glasförsegling](/tjanster/lackskydd/glasforsegling) för rutorna."],
        },
        {
          h2: "Strålkastarpolering i hela Örebro",
          stycken: ["Bor du i [Marieberg](/omraden/marieberg) har du bara några minuters bilväg hit, och från [Vivalla](/omraden/vivalla) och [Almby](/omraden/almby) tar det runt en kvart. Strålkastarpoleringen går fort, så för den ensam hämtar vi inte bilen. Bokar du den tillsammans med en polering eller helrekond kan vi [hämta bilen hos dig](/tjanster/hamtning-och-lamning). Vi servar även Adolfsberg, Varberga, Kumla och Hallsberg."],
        },
      ],
      varforH2: "Varför välja KOM-fort?",
      hitta: {
        h2: "Hitta till oss",
        stycken: ["Kör av E20 vid avfart 110 Adolfsberg, så är du snart framme vid Lindtorpsvägen 10 i Södra Lindhult."],
      },
      faqH2: "Vanliga frågor om strålkastarpolering",
      bokaH2: "Boka strålkastarpolering i Örebro",
      bokaText: "Ring 076-035 38 08, skicka en förfrågan eller välj strålkastarpolering på bokningssidan, så bokar vi in en tid.",
    },
  },
  // Batch 04, sida 5/5
  {
    slug: "glasforsegling",
    foralder: "lackskydd",
    num: "03",
    title: "Glasförsegling",
    metaDesc: "Glasförsegling i Örebro: ett keramiskt skydd för vindrutan och sidorutorna som håller i 2 år. Bakrutan som tillägg. Ring 076-035 38 08.",
    hero: "Glasförsegling Örebro",
    intro: "Glasförsegling är ett keramiskt skydd för bilens rutor som håller i 2 år. Den gör glaset vattenavvisande, så att du ser bättre när det regnar.",
    included: [
      { heading: "Vindrutan", text: "Vindrutan, där du har mest nytta av skyddet, ingår alltid." },
      { heading: "Sidorutorna fram och bak", text: "Sidorutorna fram och bak ingår också, så att du ser bra åt sidorna." },
      { heading: "Bakrutan som tillägg", text: "Vill du ha skyddet även på bakrutan lägger du till den." },
      { heading: "2 års skydd", text: "Glasförseglingen ger ett skydd som håller i 2 år." },
    ],
    why: [
      "Keramiskt skydd för rutorna",
      "2 års skydd på vindruta och sidorutor",
      "Bakrutan som tillägg",
      "Lägre pris som tillägg till helrekond",
    ],
    faq: [
      { q: "Hur länge håller glasförseglingen?", a: "Glasförseglingen ger 2 års skydd på rutorna." },
      { q: "Ingår bakrutan?", a: "Nej, bakrutan är ett tillägg. Vindrutan och sidorutorna fram och bak ingår." },
      { q: "Kan jag lägga till glasförsegling på en rekond?", a: "Ja, glasförsegling finns som tillägg till helrekonden, och då kostar den mindre. Priset ser du i prislistan." },
      { q: "Varför lägger ni inte keramiskt lackskydd på rutorna?", a: "På rutorna kan lackskydd göra glaset immigt, och torkarna kan lämna en hinna. Därför får rutorna glasförsegling." },
    ],
    pricing: {
      fromPrice: fran("lackskydd/glasforsegling"),
      unit: "kr",
      note: "Vindruta och sidorutor fram och bak, 2 års skydd.",
    },
    sida: {
      title: "Glasförsegling Örebro | Keramiskt skydd för bilrutor i Örebro",
      h1: "Glasförsegling Örebro",
      intro: [
        "Glasförsegling är ett keramiskt skydd för bilens rutor som håller i 2 år. Den gör glaset vattenavvisande, så att du ser bättre när det regnar.",
        "I glasförseglingen ingår vindrutan och sidorutorna fram och bak, och bakrutan kan du lägga till. Du kan boka den för sig eller lägga till den på en [bilrekond](/tjanster/rekonditionering). Läs mer om [bilvård i Örebro](/).",
      ],
      ingarH2: "Vad ingår i en glasförsegling?",
      prisH2: "Pris för glasförsegling",
      prisText: "Glasförseglingen har ett fast pris för vindrutan och sidorutorna, och bakrutan är ett tillägg. Som tillägg till en helrekond kostar glasförseglingen mindre än när du bokar den för sig. Priserna står i prislistan, och vill du se vad det blir för din bil räknar [bokningssidan](/boka) fram ett uppskattat pris.",
      sektioner: [
        {
          h2: "Varför inte lackskydd på rutorna?",
          stycken: ["Rutorna får inte samma keramiska [lackskydd](/tjanster/lackskydd) som lacken. På glas kan det göra rutorna immiga, och torkarbladen kan lämna en hinna. Därför använder vi glasförsegling på rutorna, som i princip är ett keramiskt skydd för glas."],
        },
        {
          h2: "Bättre sikt i regn",
          stycken: ["När vattnet pärlar sig på rutan rinner det av lättare, särskilt när du kör i högre fart, och sikten blir bättre när det regnar. Smuts fastnar inte lika lätt, så rutorna blir enklare att hålla rena mellan tvättarna."],
        },
        {
          h2: "Glasförsegling och strålkastare",
          stycken: ["Bra sikt handlar också om ljuset. Har strålkastarna blivit gula och matta kan du boka en [strålkastarpolering](/tjanster/polering/stralkastarpolering), där vi polerar dem och lägger på ett lackskydd."],
        },
        {
          h2: "Glasförsegling i hela Örebro",
          stycken: ["I [Adolfsberg](/omraden/adolfsberg) har du nära till oss, och från [Marieberg](/omraden/marieberg) tar det ungefär sju minuter. [Varberga](/omraden/varberga) ligger runt tio minuter norrut längs Västerleden. Har du inte tid att köra kan vi också [hämta bilen hos dig](/tjanster/hamtning-och-lamning). Vi servar även Vivalla, Almby, Kumla och Hallsberg."],
        },
      ],
      varforH2: "Varför välja KOM-fort?",
      hitta: {
        h2: "Hitta till oss",
        stycken: ["Vår lokal på Lindtorpsvägen 10 ligger i Adolfsberg, och kartan visar vägen dit från E20 avfart 110."],
      },
      faqH2: "Vanliga frågor om glasförsegling",
      bokaH2: "Boka glasförsegling i Örebro",
      bokaText: "Välj glasförsegling på bokningssidan eller ring 076-035 38 08, så hör vi av oss.",
    },
  },
  // Batch 05, sida 1/5
  {
    slug: "motortvatt",
    foralder: "biltvatt",
    num: "04",
    title: "Motortvätt",
    metaDesc: "Motortvätt i Örebro som tillägg till handtvätt eller helrekond. Medlet skyddar elektronik och kablar, och vi har gjort över 100 motortvättar. Ring 076-035 38 08.",
    hero: "Motortvätt Örebro",
    intro: "Motortvätt är ett tillägg där vi tvättar bort smuts, damm och vägsalt som har samlats i motorrummet. Medlet vi använder lägger sig runt elektronik och kablar och skyddar dem medan vi arbetar, så att motorrummet kan bli rent utan att allt behöver täckas över.",
    included: [
      { heading: "Rengöring av motorrummet", text: "Smuts, damm och vägsalt som har fastnat runt motorn tvättas bort." },
      { heading: "Skydd för elektroniken", text: "Medlet lägger sig runt elektronik och kablar och skyddar dem medan vi tvättar." },
      { heading: "Vid samma besök", text: "Motortvätten görs när bilen ändå är här för handtvätt eller helrekond." },
      { heading: "Över 100 motortvättar", text: "Vi har gjort över 100 motortvättar utan problem." },
    ],
    why: [
      "Medlet skyddar elektronik och kablar",
      "Över 100 motortvättar utan problem",
      "Motortvätt vid samma besök som tvätten",
      "Samma pris till tvätt och helrekond",
    ],
    faq: [
      { q: "Kan motortvätt skada elektroniken?", a: "Medlet vi använder lägger sig runt elektronik och kablar och skyddar dem. Vi har gjort över 100 motortvättar utan problem." },
      { q: "Kan jag boka motortvätt utan tvätt?", a: "Motortvätten är ett tillägg till handtvätten och helrekonden. Vill du bara tvätta motorn, ring 076-035 38 08 och fråga vad som går." },
      { q: "Ingår motortvätt i helrekonden?", a: "Nej, den är ett tillägg. Du väljer den bland tilläggen när du bokar helrekond." },
      { q: "Hur ofta behöver motorn tvättas?", a: "Inte lika ofta som resten av bilen. Bra tillfällen är efter vintern, när vägsaltet ska bort, och innan bilen ska säljas." },
      { q: "Vad kostar motortvätt?", a: "Motortvätten har ett fast pris som tillägg, och du hittar det i prislistan. På bokningssidan ser du vad det blir tillsammans med tvätten." },
    ],
    pricing: {
      fromPrice: fran("biltvatt/motortvatt"),
      unit: "kr",
      note: "Till handtvätten eller helrekonden.",
      prefix: "Tillägg",
    },
    sida: {
      title: "Motortvätt Örebro | Tvätt av motorrummet i Örebro",
      h1: "Motortvätt Örebro",
      intro: [
        "Motortvätt är ett tillägg där vi tvättar bort smuts, damm och vägsalt som har samlats i motorrummet. Medlet vi använder lägger sig runt elektronik och kablar och skyddar dem medan vi arbetar, så att motorrummet kan bli rent utan att allt behöver täckas över.",
        "Du lägger till motortvätten när du bokar [biltvätt](/tjanster/biltvatt) eller [helrekond](/tjanster/rekonditionering), så blir bilen ren även under huven vid samma besök. Allt vi gör inom [bilvård](/) hittar du på startsidan.",
      ],
      ingarH2: "Vad ingår i en motortvätt?",
      prisH2: "Pris för motortvätt",
      prisText: "Motortvätten har ett fast pris, och det är detsamma oavsett om du lägger den till handtvätten eller till helrekonden. Priset hittar du i prislistan, och på [bokningssidan](/boka) väljer du motortvätt bland tilläggen och ser ett uppskattat pris för hela besöket.",
      sektioner: [
        { h2: "Varför tvätta motorn?", stycken: ["I motorrummet samlas damm, löv, olja och vägsalt, och det märks sällan förrän motorhuven öppnas. När motorrummet är rent är det lättare att upptäcka läckor av olja eller kylarvätska i tid, och den som servar bilen får en renare arbetsplats. Vägsalt som får ligga kvar kan dessutom bidra till rost på metalldelar."] },
        { h2: "Är motortvätt säkert för elektroniken?", stycken: ["Vatten och elektronik är en vanlig oro när det gäller motortvätt, och därför brukar generator, säkringsdosa och luftintag täckas över med plast. Medlet vi använder lägger sig i stället som ett skydd runt elektronik och kablar under tvätten, så vi behöver inte täcka över allt. Vi har gjort över 100 motortvättar, och ingen av dem har gett problem."] },
        { h2: "Motortvätt inför en försäljning", stycken: ["Den som ska köpa en begagnad bil öppnar ofta motorhuven, och ett smutsigt motorrum kan väcka frågor om hur bilen har skötts. Gör du en [rekond inför bilförsäljning](/tjanster/rekonditionering/infor-bilforsaljning) passar motortvätten bra som tillägg. Efter vintern, när saltet har legat på, är det också ett bra tillfälle."] },
        { h2: "Fler tillägg till tvätten", stycken: ["Till handtvätten kan du också lägga till [asfalts- och flygrostborttagning](/tjanster/biltvatt/asfalt-och-flygrost), så att lacken blir fri från asfaltsstänk och små rostprickar. I helrekonden ingår det redan."] },
        { h2: "Motortvätt i hela Örebro", stycken: ["Från [Varberga](/omraden/varberga) är det ungefär tio minuters bilväg till oss, och från [Almby](/omraden/almby) räknar du med runt en kvart. Bokar du helrekond kan vi också [hämta bilen hos dig](/tjanster/hamtning-och-lamning). Vi servar även Marieberg, Adolfsberg, Vivalla, Kumla och Hallsberg."] },
      ],
      varforH2: "Varför välja KOM-fort?",
      hitta: { h2: "Hitta till oss", stycken: ["Vi håller till på Lindtorpsvägen 10 i Södra Lindhult. Närmaste avfart från E20 är nummer 110, Adolfsberg."] },
      faqH2: "Vanliga frågor om motortvätt",
      bokaH2: "Boka motortvätt i Örebro",
      bokaText: "Lägg till motortvätt när du bokar tvätt eller helrekond på bokningssidan, eller ring 076-035 38 08.",
    },
  },
  // Batch 05, sida 2/5
  {
    slug: "asfalt-och-flygrost",
    foralder: "biltvatt",
    num: "04",
    title: "Asfalts- och flygrostborttagning",
    metaDesc: "Flygrostborttagning i Örebro: vi tar bort flygrost, asfaltsstänk, tjära och vägsalt från lacken, som tillägg till handtvätten eller i helrekonden. Ring 076-035 38 08.",
    hero: "Asfalts- och flygrostborttagning i Örebro",
    intro: "Asfaltsstänk, tjära och vägsalt fastnar lätt på lacken, och på en ljus bil syns flygrost som små bruna prickar. Asfalt och flygrost sitter ofta kvar efter en vanlig tvätt. Vi tar bort smutsen med medel som är gjorda för ändamålet, så att lacken blir slät och ren igen.",
    included: [
      { heading: "Kallavfettning", text: "Asfalt, tjära och salt löses upp med kallavfettning." },
      { heading: "Flygrostborttagare", text: "Medlet blir lila där det löser upp flygrost, så det syns var partiklarna har suttit." },
      { heading: "Rengöringslera på rekonder", text: "Känns lacken fortfarande sträv vid en rekond tar vi till rengöringslera." },
      { heading: "Ingår i helrekonden", text: "Vid en helrekond tas asfalt, flygrost och fågelspill alltid bort." },
    ],
    why: [
      "Kallavfettning mot asfalt, tjära och salt",
      "Flygrostborttagare som visar var den verkar",
      "Ingår i helrekonden",
      "Handtvätt med pH-neutrala schampon",
    ],
    faq: [
      { q: "Varför blir flygrostborttagaren lila?", a: "Den färgas lila när den reagerar med järnet i flygrosten. Ju mer lila det blir, desto mer flygrost satt det på lacken." },
      { q: "Skadar flygrost lacken?", a: "Får partiklarna sitta kvar fortsätter de att rosta och kan till slut lämna små märken i lacken. Därför är det bra att ta bort dem i tid." },
      { q: "Hur ofta behöver flygrost tas bort?", a: "Det beror på hur och var du kör. Känns lacken sträv efter tvätten är det dags." },
      { q: "Ingår det i helrekonden?", a: "Ja. I helrekonden tas asfalt och flygrost bort, och känns ytan fortfarande sträv använder vi rengöringslera." },
      { q: "Kan jag lägga till det på en utvändig handtvätt?", a: "Ja, båda tilläggen går att välja till utvändig handtvätt och till handtvätt in- och utvändigt." },
    ],
    pricing: {
      fromPrice: fran("biltvatt/asfalt-och-flygrost"),
      unit: "kr",
      note: "Per tillägg till handtvätten. Ingår i helrekonden.",
      prefix: "Tillägg",
    },
    sida: {
      title: "Asfalts- och flygrostborttagning Örebro | Ta bort flygrost och asfalt i Örebro",
      h1: "Asfalts- och flygrostborttagning i Örebro",
      intro: [
        "Asfaltsstänk, tjära och vägsalt fastnar lätt på lacken, och på en ljus bil syns flygrost som små bruna prickar. Asfalt och flygrost sitter ofta kvar efter en vanlig tvätt. Vi tar bort smutsen med medel som är gjorda för ändamålet, så att lacken blir slät och ren igen.",
        "Asfalts- och saltborttagning och flygrostborttagning är två tillägg till vår [biltvätt](/tjanster/biltvatt), och i en [helrekond](/tjanster/rekonditionering) ingår båda. Läs mer om [bilvård i Örebro](/) hos oss.",
      ],
      ingarH2: "Vad ingår i asfalts- och flygrostborttagning?",
      prisH2: "Pris för asfalts- och flygrostborttagning",
      prisText: "Asfalts- och saltborttagning och flygrostborttagning är två tillägg med var sitt fast pris, och du kan välja ett av dem eller båda. Priserna står i prislistan, och på [bokningssidan](/boka) kryssar du i tilläggen när du väljer tvätt. Vill du ha motorrummet rent också finns [motortvätt](/tjanster/biltvatt/motortvatt) som tillägg.",
      sektioner: [
        { h2: "Vad är flygrost?", stycken: ["Flygrost är små järnpartiklar som slits loss från bland annat bromsar och järnvägsräls och sedan fastnar i lacken. Där börjar de rosta, och på vita och silverfärgade bilar syns det som orangebruna prickar. Partiklarna sitter fast i lacken och släpper inte för schampo, men en flygrostborttagare löser upp dem."] },
        { h2: "Asfalt, tjära och vägsalt", stycken: ["Asfaltsstänk och tjära hamnar mest bakom hjulen och längs bilens nedre del, och de sitter hårt. Vägsaltet från vintervägarna lägger sig som en grå hinna över lacken. Allt det här tar vi bort med kallavfettning, som löser upp asfalt och tjära så att de kan tvättas av."] },
        { h2: "Så känner du om lacken behöver det", stycken: ["Tvätta bilen och dra sedan fingertopparna lätt över lacken, gärna med en tunn plastpåse över handen. Känns ytan sträv sitter det föroreningar kvar, till exempel flygrost. Ska bilen [poleras](/tjanster/polering) rengör vi alltid lacken med rengöringslera först, så att inga partiklar följer med runt under poleringen."] },
        { h2: "Flygrostborttagning i hela Örebro", stycken: ["Från [Vivalla](/omraden/vivalla) är du här på ungefär en kvart via Västerleden, och [Varberga](/omraden/varberga) ligger cirka tio minuter bort. Ingår de i en helrekond kan vi också [hämta bilen hos dig](/tjanster/hamtning-och-lamning). Vi servar även Marieberg, Adolfsberg, Almby, Kumla och Hallsberg."] },
      ],
      varforH2: "Varför välja KOM-fort?",
      hitta: { h2: "Hitta till oss", stycken: ["Lokalen ligger i Adolfsberg, på Lindtorpsvägen 10 nära Trafikplats Adolfsberg vid E20."] },
      faqH2: "Vanliga frågor om flygrost och asfalt",
      bokaH2: "Boka asfalts- och flygrostborttagning i Örebro",
      bokaText: "Välj tvätt och kryssa i tilläggen på bokningssidan. Du kan också ringa 076-035 38 08.",
    },
  },
  // Batch 05, sida 3/5
  {
    slug: "infor-bilforsaljning",
    foralder: "rekonditionering",
    num: "01",
    title: "Rekond inför bilförsäljning",
    metaDesc: "Ska bilen säljas? Vid en rekond inför bilförsäljning i Örebro handtvättar vi bilen, ger lacken 12 månaders lackförsegling och rengör kupén. Ring 076-035 38 08.",
    hero: "Rekond inför bilförsäljning Örebro",
    intro: "När bilen ska säljas är första intrycket viktigt, både på bilderna i annonsen och när köparen kommer och tittar. Vid en rekond inför bilförsäljning får bilen en ren och blank lack och en fräsch kupé, och en välskött bil kan höja andrahandsvärdet.",
    included: [
      { heading: "Handtvätt och lackförsegling", text: "Bilen handtvättas, asfalt och flygrost tas bort och lacken skyddas med 12 månaders lackförsegling." },
      { heading: "Rengöring av kupén", text: "Mattor, säten, paneler och detaljer rengörs, och vid behov tar ångmaskinen bort lukt och fläckar." },
      { heading: "Tillägg efter behov", text: "Polering, kemtvätt av sätena, motortvätt och glasförsegling lägger du till om bilen behöver det." },
      { heading: "Slutkontroll", text: "Vi går igenom och fotograferar hela bilen innan du hämtar den, och hittar vi något åtgärdar vi det." },
    ],
    why: [
      "Helrekond med 12 månaders lackförsegling",
      "Tillägg efter vad bilen behöver",
      "Slutkontroll innan du hämtar bilen",
      "Vi kan hämta bilen hos dig",
    ],
    faq: [
      { q: "Lönar det sig att rekonda bilen före försäljningen?", a: "En ren och välskött bil ger ett bättre första intryck och kan höja andrahandsvärdet. Hur mycket det påverkar priset beror på bilen och på marknaden." },
      { q: "Ingår polering?", a: "Nej, polering är ett tillägg. Är lacken matt eller full av fina repor kan du lägga till en 1-stegspolering." },
      { q: "Kan ni ta bort repor innan försäljningen?", a: "En enstaka repa i klarlacket kan vi ofta ta bort utan att hela lacken behöver poleras, och stenskott lagar vi också. Har bilen många repor är en 1-stegspolering ett bättre val." },
      { q: "Kan ni ta bort lukt från husdjur?", a: "I de flesta fall, ja. Vi använder enzymatiska medel mot lukt från husdjur." },
      { q: "Kan ni hämta bilen hos mig?", a: "Ja. Säg till när du bokar, så kan vi hämta bilen hos dig. Avgiften för hämtningen beror på var du bor." },
    ],
    pricing: {
      fromPrice: fran("rekonditionering/infor-bilforsaljning"),
      unit: "kr",
      note: "Helrekond med 12 månaders lackförsegling.",
    },
    sida: {
      title: "Rekond inför bilförsäljning Örebro | Rekond innan du säljer bilen i Örebro",
      h1: "Rekond inför bilförsäljning Örebro",
      intro: [
        "När bilen ska säljas är första intrycket viktigt, både på bilderna i annonsen och när köparen kommer och tittar. Vid en rekond inför bilförsäljning får bilen en ren och blank lack och en fräsch kupé, och en välskött bil kan höja andrahandsvärdet.",
        "Grunden är vår helrekond, som omfattar både utsidan och kupén. Sedan lägger du till det som just din bil behöver. Läs mer om [bilrekond](/tjanster/rekonditionering) och om [KOM-fort Bilvård i Örebro](/).",
      ],
      ingarH2: "Vad ingår i en rekond inför bilförsäljning?",
      prisH2: "Pris för rekond inför bilförsäljning",
      prisText: "Priset utgår från helrekonden och följer bilens storlek. Tilläggen har fasta priser, och allt står i prislistan. På [bokningssidan](/boka) räknar du fram ett uppskattat pris med helrekond, bilstorlek och tillägg.",
      sektioner: [
        { h2: "Det här märker köparen först", stycken: ["Fläckar på sätena, lukt i kupén, matt lack med repor och gula strålkastare drar ner intrycket, även när bilen är i bra skick tekniskt. Mycket av det går att åtgärda. Kemtvätt hjälper mot fläckar i tyget, [polering](/tjanster/polering) ger lacken glansen tillbaka och vid en strålkastarpolering blir strålkastarna klara igen. Husdjurslukt försvinner i de flesta fall med enzymatiska medel."] },
        { h2: "Helrekond eller invändig rekond?", stycken: ["Ska bilen säljas rekommenderar vi helrekonden, eftersom köparen ser både lacken och kupén. Är utsidan redan i fint skick och det bara är insidan som behöver fräschas upp räcker det med en [invändig rekond](/tjanster/invandig-rekond)."] },
        { h2: "Gör rekonden innan du fotograferar bilen", stycken: ["Boka rekonden innan du tar bilderna till annonsen, så att bilen ser likadan ut på bild som när köparen kommer. En helrekond tar runt fem timmar, och med en 1-stegspolering blir det ungefär åtta. Lägger du till kemtvätt av sätena står bilen helst kvar över natten, så att sätena hinner torka. Med en polering i två steg blir bilen kvar hos oss i minst två dygn, så planera in det i god tid."] },
        { h2: "Rekond inför bilförsäljning i hela Örebro", stycken: ["[Almby](/omraden/almby) ligger runt en kvarts bilresa bort, och från handelsområdet i [Marieberg](/omraden/marieberg) tar det ungefär sju minuter. Vår lokal ligger i [Adolfsberg](/omraden/adolfsberg), så bor du där är det bara några minuter. Vill du slippa köra kan vi [hämta bilen hos dig](/tjanster/hamtning-och-lamning). Kumla, Hallsberg, Vivalla och Varberga servar vi också."] },
      ],
      varforH2: "Varför välja KOM-fort?",
      hitta: { h2: "Hitta till oss", stycken: ["Du hittar lokalen på Lindtorpsvägen 10 i Södra Lindhult. Från E20 svänger du av vid avfart 110 Adolfsberg."] },
      faqH2: "Vanliga frågor om rekond inför bilförsäljning",
      bokaH2: "Boka rekond inför bilförsäljning i Örebro",
      bokaText: "Ring 076-035 38 08 eller skicka en förfrågan och berätta när bilen ska säljas, så hittar vi en tid i god tid före.",
    },
  },
];
