/**
 * Om oss (/om-oss). Ordagrant från batcher/batch-05.md (sida 4/5).
 */
import type { Sektion, Fraga } from "./startsida";

export const omoss = {
  title: "Om KOM-fort Bilvård | Bilvård i Örebro sedan 2025",
  meta: "KOM-fort Bilvård AB grundades i Örebro 2025 av Goran Ismailovic. Läs om hur vi arbetar, var verkstaden ligger och vad som gäller när du lämnar bilen hos oss.",
  h1: "Om KOM-fort Bilvård i Örebro",
  intro: [
    "KOM-fort Bilvård AB är en bilvårdsfirma i Södra Lindhult i Örebro, grundad av Goran Ismailovic. Verkstaden på Lindtorpsvägen 10 öppnade i augusti 2025, och sedan dess har vi handtvättat bilar, gjort rekonder och polerat lack åt bilägare i Örebro med omnejd.",
    "Tanken bakom företaget är att alla bilar ska få den omsorg de förtjänar, och vi behandlar varje bil som om den vore vår egen. Här berättar vi vem som står bakom, hur vi arbetar och var du hittar oss. Startsidan visar hela vårt utbud av [bilvård i Örebro](/).",
  ],
  sektioner: [
    { h2: "Goran bakom KOM-fort", stycken: ["Goran Ismailovic har tagit hand om bilar sedan tonåren, först familjens bil och sedan andras. I dag har han arbetat med bilvård yrkesmässigt i närmare tre år, och 2025 startade han KOM-fort Bilvård i egen lokal i södra Örebro."] },
    { h2: "Så arbetar vi", stycken: ["Allt tvättas för hand, aldrig i automattvätt. Bilen tvättas med två hinkar och mjuka tvätthandskar, medlen är pH-neutrala och vi torkar med mikrofiberdukar. Innan vi polerar mäter vi lacktjockleken, så att vi vet vad lacken tål, och rengör den med rengöringslera. Vi använder professionella produkter av hög kvalitet. Vi kompromissar aldrig med kvalitet och noggrannhet, och ingen bil behandlas i en fart."] },
    { h2: "Slutkontroll innan du hämtar bilen", stycken: ["När vi är klara går vi igenom hela bilen och fotograferar den, innan du kommer och hämtar den. Hittar vi något vi har missat åtgärdar vi det, så att bilen är färdig på riktigt när du får nycklarna. Bilder från några av våra jobb ser du under [före och efter](/fore-och-efter)."] },
    { h2: "Medan bilen är hos oss", stycken: ["Under en enklare handtvätt kan du vänta på plats. Gör vi en större rekond kan vi köra dig till Marieberg medan bilen behandlas, utan kostnad. Vid större behandlingar kan vi också [hämta bilen hos dig](/tjanster/hamtning-och-lamning) och lämna den igen efteråt."] },
    { h2: "Vad vi gör", stycken: ["Vi gör bilrekond, invändig rekond, polering, keramiskt lackskydd och handtvätt, och till det finns tillägg som motortvätt, kemtvätt av säten och glasförsegling. Allt finns samlat under [våra tjänster](/tjanster). Vill du ge bort bilvård finns [presentkort](/presentkort) som gäller alla tjänster."] },
  ] satisfies Sektion[],
  hitta: {
    h2: "Hitta till oss",
    stycken: ["Du hittar verkstaden på Lindtorpsvägen 10 i Södra Lindhult, som hör till stadsdelen [Adolfsberg](/omraden/adolfsberg). Påfarten till E20 vid avfart 110 ligger cirka 1,2 kilometer bort. Vi har öppet måndag till fredag 08-16 och lördag 10-18. På söndagar har vi stängt."],
  } satisfies Sektion,
  foretaget: {
    h2: "Företaget",
    stycken: ["KOM-fort Bilvård AB har organisationsnummer 559539-8958. Vårt serviceområde är Örebro, Kumla och Hallsberg. Du når oss på 076-035 38 08, på Komfort802@gmail.com eller via [kontaktsidan](/kontakt)."],
  } satisfies Sektion,
  faq: {
    h2: "Vanliga frågor om KOM-fort Bilvård",
    fragor: [
      { q: "Vem driver KOM-fort Bilvård?", a: "Företaget grundades av Goran Ismailovic, som har hållit på med bilvård sedan tonåren." },
      { q: "När har ni öppet?", a: "Måndag till fredag 08-16 och lördag 10-18. Söndagar har vi stängt." },
      { q: "Tvättar ni bilar i automattvätt?", a: "Nej. Alla bilar tvättas för hand." },
      { q: "Hur betalar jag?", a: "Du betalar via Zettle, och presentkort går att använda till alla tjänster." },
      { q: "Kan jag höra av mig via Instagram?", a: "Ja, du kan skicka ett meddelande till oss på Instagram. Du kan också ringa, skicka en förfrågan eller använda bokningssidan." },
    ] satisfies Fraga[],
  },
  kontakta: {
    h2: "Kontakta oss",
    stycken: ["Har du frågor om oss eller om din bil, ring 076-035 38 08 eller skicka en förfrågan. Många svar finns redan under [vanliga frågor om bilvård](/vanliga-fragor)."],
  } satisfies Sektion,
};
