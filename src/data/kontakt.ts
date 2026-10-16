/**
 * Kontaktsidans text. Ordagrant från batcher/batch-02.md (sida 3/5).
 * Länkar skrivs som [text](/sökväg) och renderas av Stycke.
 */
import type { Sektion, Fraga } from "./startsida";

export const kontaktsida = {
  title: "Kontakt | Bilvård Örebro - KOM-fort Bilvård",
  meta: "Kontakta KOM-fort Bilvård i Örebro. Ring 076-035 38 08 eller skicka en förfrågan. Vi finns på Lindtorpsvägen 10 i Adolfsberg och kan hämta bilen hos dig.",
  h1: "Kontakta KOM-fort Bilvård i Örebro",
  intro: [
    "Vill du boka bilvård, få ett pris eller ställa en fråga om bilen? Ring oss på 076-035 38 08 eller skicka en förfrågan i formuläret här på sidan, så hör vi av oss inom kort. Du kan också mejla till Komfort802@gmail.com.",
    "Vi finns på Lindtorpsvägen 10 i Södra Lindhult, i stadsdelen Adolfsberg i södra Örebro. Där handtvättar vi bilar, polerar och skyddar lacken och gör kompletta rekonder, invändigt och utvändigt. Vill du veta mer om oss innan du hör av dig kan du läsa [om KOM-fort Bilvård](/om-oss).",
  ],
  sektioner: [
    {
      h2: "Så bokar du",
      stycken: [
        "Det snabbaste är att ringa, så kan vi prata om vad bilen behöver och hitta en tid direkt. Passar det bättre att skriva går det lika bra med formuläret. Berätta vilken bil du har, vad du vill ha gjort och vilka dagar som passar dig, så blir det lättare för oss att ge dig ett pris och föreslå en tid. Gäller det repor eller fläckar hjälper det om du beskriver var de sitter och hur stora de är. Är du osäker på vad bilen behöver kan du läsa om [alla våra tjänster](/tjanster) eller välja Annat i formuläret och beskriva bilen med egna ord.",
      ],
    },
    {
      h2: "Räkna med en dag för en rekond",
      stycken: [
        "En komplett rekond tar 4-8 timmar, och då blir bilen kvar hos oss över dagen. En invändig rekond tar 2-4 timmar, och även då är det smidigast att lämna bilen för dagen.",
      ],
    },
    {
      h2: "Hämtning och lämning av bilen",
      stycken: [
        "Har du inte möjlighet att lämna bilen själv kan vi hämta den hos dig. När behandlingen är klar får du tillbaka den på samma sätt. Skriv det i meddelandet eller säg det när du ringer, så berättar vi vad som gäller.",
      ],
    },
    {
      h2: "Vi tar emot bilar från hela Örebro",
      stycken: [
        "På våra stadsdelssidor hittar du vägen hit från [Adolfsberg](/omraden/adolfsberg), [Marieberg](/omraden/marieberg), [Vivalla](/omraden/vivalla), [Varberga](/omraden/varberga) och [Almby](/omraden/almby). Kumla och Hallsberg servar vi också.",
      ],
    },
  ] satisfies Sektion[],
  hitta: {
    h2: "Hitta till oss på Lindtorpsvägen 10",
    stycken: [
      "Lokalen ligger i Södra Lindhult i Adolfsberg, i södra Örebro. Kommer du på E20 kör du av vid avfart 110 Adolfsberg, där Västerleden börjar. Från avfarten är det ett par minuter till oss. Kartan visar exakt var vi finns, och i GPS:en anger du Lindtorpsvägen 10, 702 37 Örebro.",
    ],
  } satisfies Sektion,
  betalning: {
    h2: "Betalning och presentkort",
    stycken: [
      "Betalningen sker via Zettle, samma system som vi använder i verkstaden. Vill du ge bort bilvård till någon kan du köpa ett [presentkort](/presentkort). Det gäller på alla tjänster, och beloppet bestämmer du själv. Du får en betallänk från Zettle, och när betalningen är klar skickas presentkortet till mottagaren.",
    ],
  } satisfies Sektion,
  faq: {
    h2: "Vanliga frågor om bokning",
    fragor: [
      { q: "Hur snabbt får jag svar?", a: "Vi hör av oss inom kort efter att du skickat din förfrågan. Vill du ha svar snabbare kan du ringa 076-035 38 08." },
      { q: "Kan jag få ett pris innan jag bokar?", a: "Ja. Berätta vilken bil du har och vad du vill ha gjort, så räknar vi fram ett pris för din bil. Slutpriset beror på bilens storlek och skick." },
      { q: "Vilka tjänster kan jag boka?", a: "Handtvätt, invändig tvätt, helrekond, invändig rekond, polering med vax och vårt kompletta paket med lackskydd. På [bokningssidan](/boka) väljer du tjänst, bilstorlek och tillägg och får ett uppskattat pris direkt." },
    ] satisfies Fraga[],
  },
};
