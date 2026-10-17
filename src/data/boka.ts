/**
 * Bokningssidans text (/boka). Ordagrant från batcher/batch-02b.md.
 * Etiketterna i prisväljaren står i Bokning.tsx, priserna i priser.ts.
 */
import type { Sektion } from "./startsida";

export const bokasida = {
  title: "Boka bilvård Örebro | Välj tjänst, bilstorlek och tillägg",
  meta: "Boka bilvård hos KOM-fort Bilvård i Örebro. Välj tjänst, bilstorlek och tillägg, se ett uppskattat pris direkt och skicka din förfrågan. Ring 076-035 38 08.",
  h1: "Boka bilvård i Örebro",
  intro:
    "Här väljer du tjänst, bilstorlek och tillägg och ser direkt vad det kostar. Skicka förfrågan, så hör vi av oss inom kort för att bekräfta dag och tid. Vill du hellre prata med oss kan du ringa 076-035 38 08.",
  valjH2: "Välj tjänst och tillägg",
  saGar: {
    h2: "Så går bokningen till",
    stycken: [
      "När vi har fått din förfrågan hör vi av oss och bekräftar dag och tid. Du lämnar bilen hos oss på Lindtorpsvägen 10, eller så kan vi hämta den hos dig. Kryssa i rutan för hämtning, så berättar vi vad som gäller. Hur lång tid det tar beror på tjänsten, och betalningen sker via Zettle. Vill du se alla priser på en gång finns de under [priser](/priser).",
    ],
  } satisfies Sektion,
  hitta: {
    h2: "Hitta till oss",
    stycken: [
      "Vi finns på Lindtorpsvägen 10 i Södra Lindhult, nära E20 avfart 110 Adolfsberg. Kartan visar exakt var vi finns.",
    ],
  } satisfies Sektion,
};
