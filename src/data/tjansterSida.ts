/**
 * Tjänstehubbens text (/tjanster). Ordagrant från batcher/batch-02.md (sida 4/5).
 * Länkar skrivs som [text](/sökväg) och renderas av Stycke.
 */
import type { Sektion, Fraga } from "./startsida";

export const tjansterSida = {
  title: "Bilvårdstjänster Örebro | Rekond, polering & lackskydd",
  meta: "Alla våra bilvårdstjänster i Örebro: bilrekond, invändig rekond, polering, keramiskt lackskydd och handtvätt. All tvätt görs för hand. Ring 076-194 35 19.",
  h1: "Våra bilvårdstjänster i Örebro",
  intro:
    "Hos KOM-fort Bilvård i Örebro får bilen hjälp med allt från en noggrann handtvätt till en komplett rekond, polering och keramiskt lackskydd. All tvätt görs för hand med pH-neutrala medel och professionella produkter, och vi tar den tid varje bil behöver. Nedan ser du våra bilvårdstjänster och vad som skiljer dem åt, så att du lättare kan välja rätt.",
  tjanster: [
    {
      h2: "Bilrekond",
      stycken: [
        "En [bilrekond](/tjanster/rekonditionering) är vår mest sålda tjänst och omfattar hela bilen. Utsidan tvättas och får en lackförsegling som håller i 12 månader, och i kupén kemtvättar vi säten, mattor och innertak. Räkna med att bilen är hos oss en hel dag. Som tillägg kan du välja polering, glasförsegling och motortvätt. Vill du dessutom ha lackkorrigering och 3 års lackskydd finns vårt kompletta paket.",
      ],
    },
    {
      h2: "Invändig rekond",
      stycken: [
        "En [invändig rekond](/tjanster/invandig-rekond) omfattar hela kupén: dammsugning, kemtvätt av klädsel, mattor och innertak, rengöring av alla ytor och glasputs på insidan. Har bilen lädersäten får de läderserum. Behandlingen tar 2-4 timmar och passar när insidan behöver ett lyft men lacken är i gott skick.",
      ],
    },
    {
      h2: "Polering",
      stycken: [
        "[Polering](/tjanster/polering) tar bort det mesta av repor, swirlmärken och oxidering, så att matt lack blir blank igen. Först mäter vi lacktjockleken, och utifrån den och lackens skick väljer vi hur många steg som behövs, från ett till tre. Efteråt lägger vi alltid på vax, och vill du att resultatet ska hålla längre kan du lägga till lackskydd.",
      ],
    },
    {
      h2: "Lackskydd",
      stycken: [
        "Keramiskt [lackskydd](/tjanster/lackskydd) är vår mest avancerade skyddsbehandling. Det binder kemiskt till lacken, stöter bort vatten, smuts och kemikalier och skyddar mot UV-strålning och oxidering. Lackskyddet läggs på efter en polering, och du väljer mellan 2, 3 och 5 års skydd.",
      ],
    },
    {
      h2: "Biltvätt",
      stycken: [
        "Vår [biltvätt](/tjanster/biltvatt) görs för hand, och du väljer utvändig tvätt, invändig tvätt eller båda. Utsidan blötläggs och avfettas, och sedan tvättar vi den med två hinkar. Hjul och hjulhus tas för sig, och vi torkar med mikrofiberdukar. Till tvätten kan du lägga till asfalts- och saltborttagning, flygrostborttagning och motortvätt. Tvätten passar bra som underhåll mellan rekonderna.",
      ],
    },
  ] satisfies Sektion[],
  hamtning: {
    h2: "Hämtning och lämning av bilen",
    stycken: [
      "Kan du inte ta dig hit själv kan vi hämta bilen hos dig och komma tillbaka med den när jobbet är klart. Läs mer om [hämtning och lämning av bilen](/kontakt) på kontaktsidan.",
    ],
  } satisfies Sektion,
  presentkort: {
    h2: "Presentkort på bilvård",
    stycken: [
      "Vill du ge bort en ren och välvårdad bil? Ett [presentkort](/presentkort) gäller på alla våra tjänster och betalas enkelt via Zettle.",
    ],
  } satisfies Sektion,
  valj: {
    h2: "Så väljer du rätt tjänst",
    stycken: [
      "Vill du bara ha bilen ren räcker en biltvätt. Är det insidan som behöver ett lyft passar invändig rekond, och är lacken matt eller repig är polering rätt val. Vill du ha både insidan och utsidan gjorda på en gång väljer du bilrekond, och vill du att lacken ska hålla sig fin i flera år väljer du polering med lackskydd. Är du osäker kan du ringa 076-194 35 19, så hjälper vi dig att välja. På [bokningssidan](/boka) får du ett uppskattat pris för din bil direkt.",
    ],
  } satisfies Sektion,
  hitta: {
    h2: "Hitta till oss",
    stycken: [
      "Vi finns på Lindtorpsvägen 10 i Södra Lindhult, nära E20 avfart 110 Adolfsberg, och servar hela Örebro samt Kumla och Hallsberg.",
    ],
  } satisfies Sektion,
  faq: {
    h2: "Vanliga frågor om våra tjänster",
    fragor: [
      { q: "Vad är skillnaden mellan bilrekond och invändig rekond?", a: "En bilrekond omfattar hela bilen, både utsidan och insidan. En invändig rekond gäller bara kupén." },
      { q: "Vilka tillägg finns till rekonden?", a: "Motortvätt, glasförsegling med 2 års skydd, lätt polering och 1-stegspolering. Lackskydd läggs på efter en polering och ingår i vårt kompletta paket." },
      { q: "Tvättar ni bilen i automattvätt?", a: "Nej. Vi tvättar alltid för hand, med pH-neutralt schampo och mjuka tvätthandskar." },
    ] satisfies Fraga[],
  },
};
