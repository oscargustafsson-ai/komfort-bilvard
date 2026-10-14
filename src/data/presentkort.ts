/**
 * Presentkortssidans text (/presentkort). Ordagrant från batcher/batch-03.md (sida 5/5).
 * Länkar skrivs som [text](/sökväg) och renderas av Stycke.
 */
import type { Sektion, Fraga } from "./startsida";

export const presentkortsida = {
  title: "Presentkort bilvård Örebro | KOM-fort Bilvård",
  meta: "Ge bort presentkort på bilvård i Örebro. Gäller alla våra tjänster, från biltvätt till bilrekond. Välj belopp, så skickar vi en betallänk från Zettle.",
  h1: "Presentkort på bilvård i Örebro",
  intro: [
    "Ett presentkort hos KOM-fort Bilvård gäller på alla våra tjänster: biltvätt, invändig rekond, bilrekond och polering, med eller utan lackskydd. Mottagaren väljer själv vad bilen behöver och bokar en tid som passar. All tvätt görs för hand, aldrig i automattvätt.",
    "Du väljer belopp och fyller i dina uppgifter, så skickar vi en betallänk från Zettle. När betalningen är klar skickas presentkortet till mottagaren. Läs mer om [KOM-fort Bilvård i Örebro](/).",
  ],
  bestall: {
    h2: "Så beställer du",
    stycken: [
      "Det tar bara några minuter. Välj ett av de färdiga beloppen eller skriv ett eget, fyll i dina uppgifter och skriv gärna en hälsning till mottagaren. Vi hör sedan av oss med betallänken.",
    ],
  } satisfies Sektion,
  sektioner: [
    {
      h2: "Vad gäller presentkortet?",
      stycken: [
        "Presentkortet gäller på alla [våra tjänster](/tjanster). Mottagaren kan välja en handtvätt, en invändig rekond som gör kupén fräsch eller lägga beloppet på en större behandling som en bilrekond eller en polering. Är mottagaren osäker på vad bilen behöver hjälper vi gärna till att välja. Vill du att presentkortet ska räcka till en viss tjänst ser du priserna på respektive tjänstesida.",
      ],
    },
    {
      h2: "Så använder mottagaren presentkortet",
      stycken: [
        "Mottagaren bokar som vanligt, genom att ringa eller skicka en förfrågan på [bokningssidan](/boka), och nämner presentkortet när tiden bokas. Bilen lämnas hos oss på Lindtorpsvägen 10, eller så kan vi hämta den hos mottagaren. Säg till vid bokningen, så berättar vi vad som gäller.",
      ],
    },
    {
      h2: "Ett presentkort som passar många",
      stycken: [
        "Bilvård är en present som de flesta bilägare har nytta av. Den passar den som just har köpt bil, den som inte hinner ta hand om bilen själv eller den som redan har allt. Ett presentkort fungerar som födelsedagspresent, julklapp eller tack till en kollega, en kund eller en vän. Många skjuter upp bilvården, fast bilen behöver den efter vintern eller inför en lång resa. Med ett presentkort blir det av.",
      ],
    },
  ] satisfies Sektion[],
  hitta: {
    h2: "Hitta till oss",
    stycken: [
      "Presentkortet används hos oss på Lindtorpsvägen 10 i Södra Lindhult, nära E20 avfart 110 Adolfsberg. Har du frågor om presentkortet når du oss på [kontaktsidan](/kontakt) eller på 076-035 38 08.",
    ],
  } satisfies Sektion,
  faq: {
    h2: "Vanliga frågor om presentkort",
    fragor: [
      { q: "Hur betalar jag?", a: "Via Zettle, samma betalsystem som vi använder i verkstaden. Vi hanterar aldrig dina kortuppgifter." },
      { q: "Hur får mottagaren presentkortet?", a: "När betalningen är klar skickas presentkortet till mottagarens e-post. Fyller du inte i någon adress till mottagaren skickar vi det till dig." },
      { q: "Vilka tjänster gäller presentkortet på?", a: "Alla våra tjänster, från en enkel biltvätt till en bilrekond eller en polering." },
      { q: "Kan jag välja ett eget belopp?", a: "Ja. Välj ett av de färdiga beloppen eller skriv ett eget i fältet för eget belopp." },
      { q: "Kan jag skriva en hälsning till mottagaren?", a: "Ja, i formuläret finns ett fält för en hälsning till mottagaren." },
    ] satisfies Fraga[],
  },
};
