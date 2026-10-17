/**
 * Prissidans text (/priser). Ordagrant från batcher/batch-07.md (sida 1/3).
 * Prislistorna kommer från prissidan i priser.ts (samma id). Inga belopp här.
 */
import type { Sektion, Fraga } from "./startsida";

export type PrisavsnittText = { id: string; h2: string; stycke: string; kortlank: { text: string; href: string } };

export const priserSida = {
  title: "Priser på bilvård i Örebro | Prislista för biltvätt, rekond och polering",
  meta: "Alla priser hos KOM-fort Bilvård i Örebro på ett ställe: biltvätt, bilrekond, invändig rekond, polering, lackskydd och tillägg. Inklusive moms. Ring 076-035 38 08.",
  h1: "Priser på bilvård i Örebro",
  intro: [
    "Här har vi samlat alla priser hos KOM-fort Bilvård, från en enkel handtvätt till ett komplett paket med lackkorrigering och keramiskt lackskydd. Alla priser är inklusive moms. För tvätt, helrekond och polering beror priset på bilens storlek, och tilläggen bokar du tillsammans med den tjänst de hör till.",
    "Vad som ingår i varje behandling läser du under [våra tjänster](/tjanster). Vill du veta vad just din bil kostar med tillägg kan du räkna fram ett uppskattat pris på [bokningssidan](/boka), där du också skickar din förfrågan. Svar på frågor om bokning och behandlingar hittar du under [vanliga frågor](/vanliga-fragor).",
  ],
  avsnitt: [
    { id: "biltvatt", h2: "Biltvätt", stycke: "Utsidan, insidan eller både och: all tvätt görs för hand med tvåhinkmetoden, aldrig i en automattvätt. Asfalts- och saltborttagning, flygrostborttagning och motortvätt bokar du som tillägg.", kortlank: { text: "Mer om biltvätt", href: "/tjanster/biltvatt" } },
    { id: "rekond", h2: "Bilrekond och helrekond", stycke: "Helrekonden är det vi säljer mest av: hela bilen, ut- och invändigt, och lacken får en lackförsegling som håller i 12 månader. Till den kan du lägga motortvätt, glasförsegling, kemtvätt av sätena och antingen lätt polering eller 1-stegspolering. Hur det kan se ut efteråt ser du under [före och efter](/fore-och-efter).", kortlank: { text: "Mer om bilrekond", href: "/tjanster/rekonditionering" } },
    { id: "invandig-rekond", h2: "Invändig rekond", stycke: "Hela kupén görs ren, från dammsugning och rengöring av säten och mattor till alla ytor och glasen på insidan. Lädersäten får läderserum, och kemtvätt av sätena kan du lägga till.", kortlank: { text: "Mer om invändig rekond", href: "/tjanster/invandig-rekond" } },
    { id: "kemtvatt", h2: "Kemtvätt av säten", stycke: "Med våtdammsugaren tar vi bort fläckar långt ner i tyget. Priset räknas per säte, och tar du alla fyra ingår mittsätet. Sätena behöver torka efteråt, så bilen står gärna kvar hos oss över natten.", kortlank: { text: "Mer om kemtvätt av bilklädsel", href: "/tjanster/invandig-rekond/kemtvatt-kladsel" } },
    { id: "polering", h2: "Polering", stycke: "Polering med vax i ett till tre steg. Ju fler steg lacken behöver, desto högre pris, och för pickup och van tillkommer ett tillägg en gång per jobb, även med lackskydd.", kortlank: { text: "Mer om polering", href: "/tjanster/polering" } },
    { id: "lackskydd", h2: "Lackskydd och komplett paket", stycke: "Keramiskt lackskydd läggs alltid på efter en polering och bokas som tillägg till den, med 2, 3 eller 5 års hållbarhet. Det kompletta paketet har både lackkorrigering och 3 års lackskydd.", kortlank: { text: "Mer om lackskydd", href: "/tjanster/lackskydd" } },
    { id: "glasforsegling", h2: "Glasförsegling", stycke: "Ett keramiskt skydd för vindrutan och sidorutorna fram och bak, som håller i 2 år. Bakrutan kan du lägga till, och du kan boka glasförseglingen för sig eller tillsammans med en helrekond.", kortlank: { text: "Mer om glasförsegling", href: "/tjanster/lackskydd/glasforsegling" } },
    { id: "stralkastarpolering", h2: "Strålkastarpolering", stycke: "Vi våtslipar och polerar strålkastarna och avslutar med ett UV-skydd. Priset gäller båda strålkastarna.", kortlank: { text: "Mer om strålkastarpolering", href: "/tjanster/polering/stralkastarpolering" } },
    { id: "repor", h2: "Repor och stenskott", stycke: "Priset för en enstaka repa eller ett stenskott sätts efter storlek och tid. Har lacken många repor behövs minst en 1-stegspolering.", kortlank: { text: "Mer om repborttagning", href: "/tjanster/polering/repborttagning" } },
    { id: "hamtning", h2: "Hämtning och lämning av bil", stycke: "Vi kan hämta bilen hos dig och lämna tillbaka den när behandlingen tar mer än ett par timmar. Inom centrala Örebro kostar det ett fast belopp. Kör vi utanför Örebro tillkommer en startavgift och ett belopp per mil.", kortlank: { text: "Mer om hämtning och lämning", href: "/tjanster/hamtning-och-lamning" } },
    { id: "presentkort", h2: "Presentkort", stycke: "Ett presentkort hos oss räcker till vilken tjänst som helst, och du väljer själv hur mycket det ska vara på. Det betalas via Zettle och skickas till mottagarens e-post.", kortlank: { text: "Mer om presentkort", href: "/presentkort" } },
  ] satisfies PrisavsnittText[],
  faq: {
    h2: "Vanliga frågor om priserna",
    fragor: [
      { q: "Ingår moms i priserna?", a: "Ja, alla priser på sidan är inklusive moms." },
      { q: "Vad räknas som liten bil?", a: "Till exempel Polo, Golf och Clio. Sedan och SUV, 7-sitsiga bilar och pickup eller van har egna priser för helrekonden." },
      { q: "Kostar det mer för pickup och van?", a: "Ja. Pickup och van har egna priser för tvätt och helrekond, och för polering och det kompletta paketet tillkommer ett tillägg. På poleringen räknas tillägget en gång per jobb, även med lackskydd." },
      { q: "Vad avgör slutpriset?", a: "Bilens storlek och skick och de tillägg du väljer. Därför har listorna priser per bilstorlek, och ett uppskattat pris för din bil får du när du väljer tjänst och tillägg på bokningssidan." },
    ] satisfies Fraga[],
  },
  hitta: {
    h2: "Hitta till oss",
    stycken: ["Alla behandlingar görs i vår lokal på Lindtorpsvägen 10 i Södra Lindhult, nära E20 avfart 110 Adolfsberg."],
  } satisfies Sektion,
};
