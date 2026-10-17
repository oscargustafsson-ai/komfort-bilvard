/**
 * Vanliga frågor (/vanliga-fragor). Ordagrant från batcher/batch-07.md (sida 2/3).
 */
import type { Sektion, Fraga } from "./startsida";

export const vanligaFragor = {
  title: "Vanliga frågor om bilvård i Örebro | Svar om tvätt, rekond och lackskydd",
  meta: "Svar på vanliga frågor om bilvård hos KOM-fort Bilvård i Örebro: hur länge bilen stannar, lukt i bilen, lackskydd, hämtning och skötsel efteråt. Ring 076-035 38 08.",
  h1: "Vanliga frågor om bilvård i Örebro",
  intro:
    "Här har vi samlat frågor vi ofta får om bilvård, från hur länge bilen stannar hos oss till hur du sköter lacken efteråt. Svaren gäller alla våra tjänster. Hittar du inte det du undrar över kan du ringa 076-035 38 08 eller skicka en förfrågan via formuläret på kontaktsidan.",
  avsnitt: [
    {
      h2: "Frågor om bokning och besök",
      fragor: [
        { q: "Hur länge stannar bilen hos er?", a: "Det beror på tjänsten. En utvändig handtvätt tar 30-40 minuter och en helrekond ungefär fem timmar. Med 1-stegspolering tar helrekonden runt åtta timmar, polering i två steg kräver minst två dygn, och efter kemtvätt av sätena rekommenderar vi att bilen står kvar till dagen efter." },
        { q: "Är tiden bokad när jag har skickat en förfrågan?", a: "Inte riktigt än. Vi hör av oss och bekräftar dag och tid, och först då är tiden bokad. På bokningssidan kan du räkna fram ett uppskattat pris innan du skickar förfrågan." },
        { q: "Kan jag vänta medan bilen tvättas?", a: "Ja, vid en enklare handtvätt går det bra att vänta på plats medan vi tvättar. Tar behandlingen längre tid, som en större rekond, kan vi skjutsa dig till Marieberg medan vi arbetar, utan att det kostar något." },
        { q: "För vilka tjänster kan ni hämta bilen?", a: "När behandlingen tar mer än ett par timmar, som en rekond, en polering eller kemtvätt av sätena. Tvättarna och strålkastarpoleringen går fortare, och för dem hämtar vi inte. Läs mer om [hämtning och lämning av bilen](/tjanster/hamtning-och-lamning)." },
        { q: "Hur långt är det till er?", a: "Det beror på var du bor. Från [Mosås](/omraden/mosas) är det drygt sex kilometer längs Mosåsvägen och från [Brickebacken](/omraden/brickebacken) drygt tio minuter med bil. Från [Rynninge](/omraden/rynninge) och [Lillån](/omraden/lillan) tar det ungefär en kvart, båda via Västerleden." },
        { q: "Har ni öppet på lördagar?", a: "Ja, på lördagar har vi öppet 10-18. Måndag till fredag har vi öppet 08-16, och på söndagar har vi stängt." },
      ] satisfies Fraga[],
    },
    {
      h2: "Frågor om behandlingarna",
      fragor: [
        { q: "Vilken rekond ska jag välja?", a: "En [helrekond](/tjanster/rekonditionering) tar hand om hela bilen, utvändigt och invändigt, och lacken får en lackförsegling som håller i 12 månader. Behöver bara kupén fräschas upp räcker en [invändig rekond](/tjanster/invandig-rekond)." },
        { q: "Vad är skillnaden mellan lackförsegling och keramiskt lackskydd?", a: "Lackförseglingen är ett keramiskt vax som ingår i helrekonden och skyddar lacken i 12 månader. Ett keramiskt [lackskydd](/tjanster/lackskydd) läggs på efter en polering, binder kemiskt till lacken och håller i flera år med rätt skötsel." },
        { q: "Har ni luktsanering?", a: "Luktsanering är ingen egen tjänst hos oss, eftersom lukten tas bort i rekonden. Ångmaskinen tar bort lukt och fläckar ur tyg och mattor, och för husdjurslukt använder vi enzymatiska medel, som i de flesta fall får bort den." },
        { q: "Varför ingår inte kemtvätt i helrekonden?", a: "Efter en kemtvätt behöver sätena torka, och bilen står helst kvar över natten. I helrekonden använder vi därför ånga, och kemtvätten finns som tillägg för fläckar som sitter kvar. Läs mer om [kemtvätt av bilklädsel](/tjanster/invandig-rekond/kemtvatt-kladsel)." },
        { q: "Vilka bilar tar ni emot?", a: "Allt från små bilar som Polo, Golf och Clio till sedan, SUV, 7-sitsiga bilar, pickup och van. För tvätt, helrekond och polering beror priset på storleken, och alla priser finns i [prislistan](/priser)." },
        { q: "Vilka medel använder ni?", a: "Professionella produkter av hög kvalitet. Schampon och medel är pH-neutrala, och vi tvättar med mjuka tvätthandskar och tvåhinkmetoden, så att smutsen inte hamnar på lacken igen." },
      ] satisfies Fraga[],
    },
    {
      h2: "Frågor om skötseln efteråt",
      fragor: [
        { q: "Hur ofta behöver bilen tvättas och rekondas?", a: "En handtvätt i månaden är en bra tumregel. En helrekond räcker en gång om året, och den passar bäst efter vintern eller inför sommaren." },
        { q: "Får jag tvätta bilen direkt efter ett lackskydd?", a: "Nej, vänta minst en vecka och gärna längre. Lackskyddet härdar först 12 timmar hos oss och sedan i minst en vecka till. Därefter tvättar du med pH-neutrala medel och avfettar mer sällan än förut, ungefär varannan månad." },
        { q: "Hur länge håller lackförseglingen?", a: "Lackförseglingen i helrekonden håller i 12 månader. Väljer du lätt polering som tillägg håller skyddet i 6 månader i stället för 12. Lätt polering ger bara glans och korrigerar inte lacken." },
        { q: "Vad händer om ni har missat något?", a: "Varje bil får en slutkontroll innan du hämtar den, och då fotograferar vi den. Upptäcker vi något som inte blev som det skulle åtgärdar vi det innan du får tillbaka nycklarna." },
      ] satisfies Fraga[],
    },
  ],
  hitta: {
    h2: "Hitta till oss",
    stycken: ["Alla behandlingar görs i vår lokal i Södra Lindhult i Adolfsberg, på Lindtorpsvägen 10 nära E20 avfart 110."],
  } satisfies Sektion,
};
