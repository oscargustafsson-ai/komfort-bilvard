/**
 * Guiderna (hubben /guider och guiderna /guider/<slug>). Batch 12.
 * Texten är ordagrann från batcher/batch-12.md i arbetsordern (kom-fort-sidbygge).
 * Länkar skrivs som [text](/sökväg) och renderas av Stycke. Ändra aldrig
 * formuleringar här utan ett nytt sidpaket.
 */
import type { Sektion, Fraga } from "./startsida";

export type Guide = {
  slug: string;
  title: string;
  meta: string;
  h1: string;
  intro: string[];
  sektioner: Sektion[];
  /** Kartan läggs direkt under den här sektionens H2. */
  hitta: Sektion;
  /** Saknas på ordlistan. */
  faq?: { h2: string; fragor: Fraga[] };
  kontakta: Sektion;
};

/** Byggdatum för batch 12: datePublished och dateModified i Article-schemat. */
export const GUIDER_DATUM = "2026-11-05";

/** Hubben /guider. Batch 12, sida 1/5. Inga frågor. */
export const guiderHubb: Omit<Guide, "slug" | "faq"> = {
  title: "Guider om bilvård | Svar och förklaringar från KOM-fort Bilvård i Örebro",
  meta: "Hur ofta behöver bilen en rekond, hur lång tid tar den och vilket skydd passar lacken? Våra guider svarar, och ordlistan förklarar orden. KOM-fort Bilvård i Örebro.",
  h1: "Guider om bilvård",
  intro: [
    "Här har vi samlat våra guider om bilvård. De svarar på hur ofta bilen behöver en rekond, hur länge den blir kvar hos oss och vilket skydd lacken ska ha, och i ordlistan förklarar vi orden som återkommer i våra beskrivningar. Allt bygger på hur vi själva arbetar i lokalen i Södra Lindhult, och varje guide slutar med hur du når oss om du vill veta mer.",
    "Guiderna nämner inga priser, eftersom de står samlade i [prislistan](/priser) och ändras där. Vill du veta mer om företaget och vår [bilvård i Örebro](/) finns det på startsidan.",
  ],
  sektioner: [
    { h2: "Hur ofta ska man rekonda bilen?", stycken: ["Vi rekommenderar att bilen får en komplett rekond varje år, gärna efter vintern eller inför sommaren. Lackförseglingen som ingår håller nämligen i 12 månader, så skyddet förnyas ungefär när det behövs. Guiden förklarar varför vi landar i ett år, vad du kan göra själv mellan gångerna och när bilen kan behöva mer än en tvätt, till exempel inför en försäljning. Där står också vad som gäller när fläckar sitter kvar i sätena eller lacken har fått repor. Läs mer under [hur ofta ska man rekonda bilen](/guider/hur-ofta-ska-man-rekonda-bilen)."] },
    { h2: "Hur lång tid tar en rekond?", stycken: ["Runt fem timmar tar en helrekond, medan en utvändig handtvätt är klar på en dryg halvtimme. Guiden visar tiderna för de vanligaste behandlingarna, från tvätt och invändig rekond till polering i flera steg, och vilka tillägg som gör att bilen bör stå kvar över natten. Där står också när vi kan hämta bilen hos dig och när det går bra att stanna och vänta medan vi arbetar. Lämnar du bilen för en större rekond kan du få skjuts till Marieberg, utan kostnad. Läs mer under [hur lång tid tar en rekond](/guider/hur-lang-tid-tar-en-rekond)."] },
    { h2: "Keramiskt lackskydd, vax eller lackförsegling?", stycken: ["Tre sätt att skydda lacken, och den största skillnaden är hur länge de håller. Vax försvinner efter några månader, lackförseglingen i helrekonden räcker ett år och ett keramiskt lackskydd flera år om det sköts rätt. Guiden jämför de tre, förklarar varför rutorna får glasförsegling i stället och ger råd om hur du tvättar bilen efteråt. Där står också att lacken alltid poleras innan ett keramiskt lackskydd läggs på, även på en ny bil. Läs mer under [keramiskt lackskydd, vax eller lackförsegling](/guider/keramiskt-lackskydd-vax-eller-lackforsegling)."] },
    { h2: "Ordlista för bilvård", stycken: ["Rekond, kallavfettning, rengöringslera, våtslipning och tvåhinkmetoden är ord som återkommer när vi beskriver våra tjänster, men alla är inte självklara för den som lämnar in bilen. I ordlistan förklarar vi kort vad orden betyder och vad vi faktiskt gör när de står i en beskrivning. Orden är ordnade efter arbetets gång, från tvätten till poleringen och skyddet. Läs mer i [ordlistan för bilvård](/guider/ordlista)."] },
  ],
  hitta: { h2: "Hitta till oss", stycken: ["Vill du att vi tittar på din bil efter att du har läst en guide finns vi på Lindtorpsvägen 10. Från Västerleden svänger du av vid Adolfsberg, och kartan visar resten av vägen."] },
  kontakta: { h2: "Har du en fråga om din bil?", stycken: ["Hittar du inte det du letar efter i guiderna svarar vi gärna själva. Ring 076-035 38 08 eller skicka en förfrågan. Kortare svar hittar du också bland [vanliga frågor om bilvård](/vanliga-fragor)."] },
};

export const guider: Guide[] = [
  // Batch 12, sida 2/5
  {
    slug: "hur-ofta-ska-man-rekonda-bilen",
    title: "Hur ofta ska man rekonda bilen? | Guide från KOM-fort Bilvård i Örebro",
    meta: "Hur ofta behöver bilen en rekond? Vi rekommenderar en gång om året, gärna efter vintern eller inför sommaren. Så håller du bilen fin mellan gångerna. KOM-fort Bilvård i Örebro.",
    h1: "Hur ofta ska man rekonda bilen?",
    intro: [
      "En gång om året. Så ofta rekommenderar vi en komplett rekond, och helst gör du den efter vintern eller inför sommaren. Mellan rekonderna är en tvätt i månaden en bra tumregel.",
      "Här förklarar vi varför ett år är ett bra intervall, hur du håller bilen fin under tiden och när den behöver mer än en vanlig tvätt. Allt utgår från hur vi gör en [bilrekond](/tjanster/rekonditionering) i vår lokal i Örebro.",
    ],
    sektioner: [
      { h2: "Varför en gång om året?", stycken: ["Lackförseglingen som ingår i en helrekond håller i 12 månader. Med en rekond om året får lacken alltså nytt skydd ungefär när det gamla har gjort sitt. Samtidigt tar vi bort det som fastnat under året: asfalt, flygrost, fågelspill och ingrodd smuts på utsidan, och smuts, fläckar och lukt i kupén.", "Efter vintern kan det sitta asfalt och salt kvar på lacken, och båda löser vi upp med kallavfettning innan lacken förseglas. Inför sommaren passar lika bra. Det viktiga är att det blir ungefär ett år mellan gångerna."] },
      { h2: "Mellan rekonderna", stycken: ["Vid en [handtvätt](/tjanster/biltvatt) blötläggs och avfettas bilen först. Därefter tvättar vi för hand med två hinkar och torkar bilen med mikrofiberdukar. Utvändigt tar tvätten 30-40 minuter, så det går bra att vänta på plats.", "Har bilen keramiskt lackskydd behöver lacken inte avfettas vid varje tvätt. Det räcker ungefär varannan månad, och använd gärna pH-neutrala medel när du tvättar själv."] },
      { h2: "När bilen behöver mer", stycken: ["Sitter det fläckar kvar i klädseln efter rekonden finns [kemtvätt av sätena](/tjanster/invandig-rekond/kemtvatt-kladsel) med våtdammsugare som tillägg. Efteråt rekommenderar vi att bilen står kvar en natt, så att den sista fukten i tyget torkar.", "Luktar det i bilen tar ångmaskinen bort lukt ur tyg och mattor redan under rekonden. Kommer lukten från ett husdjur använder vi enzymatiska medel, och oftast försvinner den då.", "Har lacken blivit matt eller fått repor räcker inte rekonden, eftersom polering inte ingår i den. Då behövs en [polering](/tjanster/polering), och har bilen många små repor krävs minst en 1-stegspolering."] },
      { h2: "Inför försäljning eller återlämning", stycken: ["Ska bilen säljas eller lämnas tillbaka efter ett leasingavtal kan en extra rekond vara bra, även om det inte har gått ett år sedan den förra. En ren bil kan höja andrahandsvärdet, och vid en [rekond inför bilförsäljning](/tjanster/rekonditionering/infor-bilforsaljning) eller en [rekond inför leasingåterlämning](/tjanster/rekonditionering/leasingaterlamning) fotograferar vi hela bilen i slutkontrollen innan du hämtar den."] },
    ],
    hitta: { h2: "Hitta till oss", stycken: ["Rekonden gör vi i vår lokal i Södra Lindhult. Har du bokat en helrekond kan vi [hämta bilen hos dig](/tjanster/hamtning-och-lamning), och när rekonden är gjord lämnar vi tillbaka den."] },
    faq: {
      h2: "Vanliga frågor om hur ofta bilen behöver rekond",
      fragor: [
        { q: "Behöver en ny bil rekond?", a: "En ny bil är ren, men det är optimalt att skydda lacken direkt. Ett [keramiskt lackskydd](/tjanster/lackskydd) får den hos oss efter en polering, precis som en begagnad bil." },
        { q: "Räcker det att tvätta bilen?", a: "Tvätten håller bilen ren mellan gångerna, men lackförseglingen och den grundliga rengöringen av kupén får bilen först vid en rekond. Därför behövs rekonden ändå ungefär en gång om året." },
        { q: "Hur lång tid tar rekonden?", a: "En helrekond tar runt fem timmar. Hur länge andra behandlingar och tillägg tar går vi igenom i guiden om [hur lång tid en rekond tar](/guider/hur-lang-tid-tar-en-rekond)." },
      ],
    },
    kontakta: { h2: "Dags för en rekond?", stycken: ["Ring 076-035 38 08 eller skicka en förfrågan. Ett uppskattat pris för den rekond du väljer ser du direkt på [bokningssidan](/boka)."] },
  },
  // Batch 12, sida 3/5
  {
    slug: "keramiskt-lackskydd-vax-eller-lackforsegling",
    title: "Keramiskt lackskydd, vax eller lackförsegling? | Guide från KOM-fort i Örebro",
    meta: "Vax håller i några månader, lackförseglingen i helrekonden i 12 månader och keramiskt lackskydd i flera år. Så skiljer sig skydden åt, och så sköter du lacken efteråt.",
    h1: "Keramiskt lackskydd, vax eller lackförsegling?",
    intro: [
      "Den stora skillnaden är hur länge skyddet håller. Vaxet försvinner efter några månader, lackförseglingen i vår helrekond sitter i 12 månader och ett keramiskt lackskydd i flera år om det sköts rätt.",
      "Skydden läggs på vid olika tillfällen och passar olika behov. Här jämför vi dem, förklarar varför rutorna får ett eget skydd och ger råd om hur du sköter lacken efteråt.",
    ],
    sektioner: [
      { h2: "Vax", stycken: ["Vax lägger vi på efter en [polering](/tjanster/polering) när du inte har valt lackskydd. Vaxet ligger ovanpå lacken utan att binda till den, och efter några månaders tvättar är det borta. Vår [handtvätt](/tjanster/biltvatt) in- och utvändigt görs dessutom med vaxschampo."] },
      { h2: "Lackförsegling", stycken: ["Lackförseglingen ingår i en [helrekond](/tjanster/rekonditionering) och är det sista vi gör på utsidan, efter tvätt och avfettning och efter att asfalt, flygrost och fågelspill har tagits bort. Den ger lacken en vattenavvisande yta och håller i 12 månader. Vi säljer den inte som en egen behandling, utan den kommer med rekonden.", "Gör du [en rekond om året](/guider/hur-ofta-ska-man-rekonda-bilen) förnyas alltså skyddet ungefär när det tar slut."] },
      { h2: "Keramiskt lackskydd", stycken: ["Längst håller ett [keramiskt lackskydd](/tjanster/lackskydd), som binder kemiskt till lacken. Skiktet blir hårdare än vax och tål repor bättre, det håller borta vatten, smuts och kemikalier och skyddar lacken mot UV-strålning och oxidering. Dessutom blir bilen mycket lättare att hålla ren, och skyddet finns för två, tre eller fem år.", "Lackskyddet läggs alltid på efter en polering. Skiktet härdar i 12 timmar i lokalen innan bilen får köra härifrån, och sedan fortsätter det att härda i minst en vecka."] },
      { h2: "Vilket skydd passar din bil?", stycken: ["Lackförseglingen i helrekonden är ett bra val om du rekondar bilen varje år och vill att skyddet förnyas samtidigt. Keramiskt lackskydd är rätt när lacken ska vara skyddad i flera år, och då poleras den först. Vax blir det när lacken poleras och du inte väljer något lackskydd."] },
      { h2: "Så sköter du lacken efteråt", stycken: ["Tvätta inte bilen under veckan efter ett keramiskt lackskydd, gärna längre, eftersom skiktet fortfarande härdar. Använd sedan pH-neutrala medel. Lacken behöver bara avfettas ungefär varannan månad, inte vid varje tvätt. Tvätta gärna bilen ungefär en gång i månaden, vilket skydd den än har."] },
      { h2: "Rutorna får glasförsegling", stycken: ["Keramiskt lackskydd lägger vi aldrig på rutorna, eftersom de kan bli immiga och torkarna kan lämna en hinna. Där använder vi i stället [glasförsegling](/tjanster/lackskydd/glasforsegling), ett keramiskt skydd som är gjort för glas. Det läggs på vindrutan och rutorna på sidorna, och även bakrutan kan få det."] },
    ],
    hitta: { h2: "Hitta till oss", stycken: ["Polering, lackskydd och rekond gör vi i lokalen på Lindtorpsvägen 10. Där har bilen tak över sig medan lackskyddet härdar."] },
    faq: {
      h2: "Vanliga frågor om lackskydd, vax och lackförsegling",
      fragor: [
        { q: "Kan en ny bil få keramiskt lackskydd?", a: "Ja. Ju tidigare lacken får skyddet, desto bättre, och även en ny bil poleras innan det läggs på." },
        { q: "Behöver lacken poleras före lackskyddet?", a: "Ja. Skyddet kommer alltid efter en polering, och två steg gör vi sällan utan att avsluta med lackskydd." },
        { q: "Kan fälgarna få lackskydd?", a: "Det beror på fälgarnas skick. Behöver de poleras först kan du lägga till det." },
      ],
    },
    kontakta: { h2: "Vill du skydda lacken?", stycken: ["Berätta vilket skydd du funderar på, så hjälper vi dig att välja. Ring 076-035 38 08 eller skicka en förfrågan."] },
  },
  // Batch 12, sida 4/5
  {
    slug: "hur-lang-tid-tar-en-rekond",
    title: "Hur lång tid tar en rekond? | Guide från KOM-fort Bilvård i Örebro",
    meta: "En helrekond tar runt fem timmar och en utvändig handtvätt 30-40 minuter. Så lång tid tar varje behandling hos oss, och så gör du när bilen behöver stanna längre.",
    h1: "Hur lång tid tar en rekond?",
    intro: [
      "En helrekond tar runt fem timmar hos oss. Lägger du till en 1-stegspolering blir det ungefär åtta timmar, och polerar vi i flera steg blir bilen kvar i flera dygn.",
      "Tiderna är ungefärliga och beror på vad just din bil behöver. Här går vi igenom tiderna för de vanligaste behandlingarna, så att du kan planera dagen eller låta oss hämta bilen. Hur ofta bilen behöver en rekond står i guiden om [hur ofta man ska rekonda bilen](/guider/hur-ofta-ska-man-rekonda-bilen).",
    ],
    sektioner: [
      { h2: "Tvätt medan du väntar", stycken: ["Utvändigt tar en handtvätt 30-40 minuter, och den invändiga tvätten ungefär en halvtimme. Vid en enklare [biltvätt](/tjanster/biltvatt) kan du därför vänta på plats, och för de här tvättarna hämtar vi inte bilen, eftersom de går så fort."] },
      { h2: "Rekond på några timmar", stycken: ["Vid en [helrekond](/tjanster/rekonditionering) tar vi hand om både lacken och kupén, och det tar runt fem timmar. En [invändig rekond](/tjanster/invandig-rekond), där bara insidan görs, tar 2-4 timmar. Mer tid än så tar det när bilen ska poleras eller få lackskydd."] },
      { h2: "Polering och lackskydd tar längre", stycken: ["En 1-stegspolering ihop med helrekonden tar runt åtta timmar. Två steg tar ungefär tio timmar, men bilen stannar ändå minst två dygn. Tre steg behövs sällan och tar minst tre dygn. Hur många steg som behövs avgör lackens skick, och lacktjockleken mäter vi alltid först inför en [polering](/tjanster/polering).", "Väljer du [keramiskt lackskydd](/tjanster/lackskydd) efter poleringen behöver skiktet härda 12 timmar i lokalen innan bilen kan lämna oss. Därefter fortsätter skiktet att härda i minst en vecka, och under den veckan ska bilen inte tvättas."] },
      { h2: "Tillägg som påverkar tiden", stycken: ["Efter en [kemtvätt av sätena](/tjanster/invandig-rekond/kemtvatt-kladsel) är vårt råd att bilen står kvar till nästa dag, så att tyget hinner torka helt. En [strålkastarpolering](/tjanster/polering/stralkastarpolering) går fortare och tar mindre än två timmar. Motortvätt och borttagning av asfalt och flygrost gör vi under samma besök som tvätten eller rekonden."] },
      { h2: "När vi hämtar bilen", stycken: ["Tar behandlingen mer än ungefär två timmar kan vi [hämta bilen hos dig](/tjanster/hamtning-och-lamning). När allt är klart kör vi tillbaka den. Det gäller till exempel helrekond, invändig rekond, polering och kemtvätt. För tvättarna och strålkastarpolering hämtar vi inte, men bokar du strålkastarpoleringen ihop med en polering eller helrekond hämtar vi bilen."] },
    ],
    hitta: { h2: "Hitta till oss", stycken: ["Vill du lämna bilen själv finns lokalen på Lindtorpsvägen 10, och kartan nedan visar vägen dit."] },
    faq: {
      h2: "Vanliga frågor om hur lång tid bilvården tar",
      fragor: [
        { q: "Kan jag vänta medan ni arbetar?", a: "Medan vi handtvättar bilen kan du stanna och vänta. Under en större rekond kan vi i stället skjutsa dig till Marieberg utan kostnad." },
        { q: "Måste bilen stå kvar över natten?", a: "Ibland. Vi rekommenderar det efter en kemtvätt av sätena, så att tyget torkar, och ett keramiskt lackskydd ska härda 12 timmar hos oss innan bilen kan köras. Väljer du polering i två eller tre steg stannar bilen i flera dygn." },
        { q: "Varför tar en rekond så lång tid?", a: "Varje steg får ta den tid det behöver. Lacken tvättas, avfettas och förseglas, kupén går vi igenom från mattor till detaljer, och sist tar vi bilder av hela bilen i slutkontrollen." },
      ],
    },
    kontakta: { h2: "Planera in bilen hos oss", stycken: ["Ring 076-035 38 08 eller skicka en förfrågan. Tjänst och tillägg väljer du på [bokningssidan](/boka)."] },
  },
  // Batch 12, sida 5/5
  {
    slug: "ordlista",
    title: "Ordlista för bilvård | Rekond, polering och lackskydd förklarat av KOM-fort i Örebro",
    meta: "Vad är kallavfettning, rengöringslera och våtslipning, och vad skiljer lackförsegling från keramiskt lackskydd? Ordlistan förklarar orden vi använder i Örebro.",
    h1: "Ordlista för bilvård",
    intro: [
      "Bilvård har sina egna ord, och en del av dem är inte självklara. Här förklarar vi de vanligaste, i ungefär den ordning du möter dem hos oss: först tvätten, sedan rekonden och sist polering och skydd.",
      "Förklaringarna utgår från hur vi själva arbetar, så de säger också vad som händer med din bil när ordet står i en beskrivning av en tjänst.",
    ],
    sektioner: [
      { h2: "Tvätt", stycken: ["Handtvätt betyder att hela bilen tvättas för hand och aldrig i en automattvätt. Vid vår [biltvätt](/tjanster/biltvatt) används pH-neutrala medel, och tvätten in- och utvändigt görs med vaxschampo.", "Förblötläggning är det första steget i tvätten och löser upp grovsmuts och insekter innan lacken tvättas.", "Tvåhinkmetoden betyder att tvätthandsken sköljs i en egen hink med rent vatten innan den doppas i tvålvattnet igen.", "pH-neutrala medel är varken sura eller basiska. Vi tvättar med dem, och de är också vad vi rekommenderar för bilar med keramiskt lackskydd.", "Kallavfettning löser upp asfalt, tjära och salt på lacken. Vi använder den också för att ta bort rester när vi polerar.", "Flygrost är metallpartiklar, till exempel från bromsdamm, som har fastnat i lacken och ser ut som små rostprickar. Medlet vi använder vid [asfalts- och flygrostborttagning](/tjanster/biltvatt/asfalt-och-flygrost) blir lila där det verkar."] },
      { h2: "Rekond", stycken: ["Rekond är kort för rekonditionering. Hos oss betyder [bilrekond](/tjanster/rekonditionering) och helrekond samma sak: både utsidan och insidan görs ren under samma besök, och lacken får en lackförsegling.", "En [invändig rekond](/tjanster/invandig-rekond) gör bara insidan ren: dammsugning, klädsel och mattor, alla ytor och rutorna på insidan.", "Ångmaskinen använder vi i kupén, där ångan lossar lukt och fläckar i textilier och mattor. I helrekonden används den i stället för kemtvätt.", "Enzymatiska medel använder vi mot husdjurslukt, och i de flesta fall försvinner lukten.", "Kemtvätt med våtdammsugare tar bort fläckar som sitter kvar i sätenas tyg efter ångan. Den är ett tillägg, [kemtvätt av bilklädsel](/tjanster/invandig-rekond/kemtvatt-kladsel), och efteråt bör bilen stå kvar över natten så att tyget torkar.", "Slutkontrollen är vår sista genomgång av bilen. Hela bilen fotograferas, och en miss som vi hittar rättar vi innan du får nycklarna."] },
      { h2: "Polering och skydd", stycken: ["När vi polerar tar maskinen bort en hårfin hinna av lacken, och med den försvinner det mesta av repor och swirlmärken. Mer om det står under [polering](/tjanster/polering).", "Steg är antalet gånger lacken poleras. En 1-stegspolering räcker ofta när lacken är i gott skick, och vi polerar i högst tre steg.", "Lacktjockleken mäter vi alltid innan vi polerar, eftersom varje steg tar bort lite lack. Då vet vi hur mycket vi kan arbeta med.", "Rengöringslera drar vi över lacken före poleringen, så att inga föroreningar sitter kvar i ytan. På rekonder använder vi den där ytan känns sträv.", "Klarlack är det översta, genomskinliga lagret av lacken. En repa som stannat i klarlacket går oftast att ta bort med [repborttagning](/tjanster/polering/repborttagning), men når den grundfärgen eller plåten behöver bilen lackeras, och det gör vi inte.", "Vax får lacken efter en polering när inget lackskydd är valt. Det skyddar en tid men är borta efter några månader.", "Lackförsegling avslutar arbetet på utsidan i en helrekond. Den gör lacken vattenavvisande och håller i 12 månader.", "[Keramiskt lackskydd](/tjanster/lackskydd) är ett skikt som binder kemiskt till lacken. Du väljer om det ska hålla i två, tre eller fem år.", "[Glasförsegling](/tjanster/lackskydd/glasforsegling) är vårt skydd för rutorna, ett keramiskt skikt gjort för glas. Lackskydd lägger vi aldrig på glas, eftersom rutorna då kan bli immiga.", "Våtslipning är första steget när vi polerar strålkastare. Med den tar vi bort den gula och matta ytan, och sedan poleras plasten klar och får ett UV-skydd. Det görs vid [strålkastarpolering](/tjanster/polering/stralkastarpolering)."] },
    ],
    hitta: { h2: "Hitta till oss", stycken: ["Allt det här gör vi på Lindtorpsvägen 10, ett kort stycke från Västerleden."] },
    kontakta: { h2: "Saknar du ett ord?", stycken: ["Fråga oss, så förklarar vi vad det betyder. Ring 076-035 38 08 eller skicka en förfrågan."] },
  },
];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guider.find((g) => g.slug === slug);
}
