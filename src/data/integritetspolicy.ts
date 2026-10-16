/**
 * Integritetspolicy (/integritetspolicy). Ordagrant från batcher/batch-05.md (sida 5/5).
 * Ändra inget här utan att Cowork har skrivit det.
 */
export type PolicyDel = { typ: "p"; text: string } | { typ: "lista"; punkter: string[] };
export type PolicyAvsnitt = { h2: string; delar: PolicyDel[] };

const p = (text: string): PolicyDel => ({ typ: "p", text });
const lista = (...punkter: string[]): PolicyDel => ({ typ: "lista", punkter });

export const integritetspolicy = {
  title: "Integritetspolicy | KOM-fort Bilvård AB",
  meta: "Så behandlar KOM-fort Bilvård AB dina personuppgifter när du kontaktar oss, skickar en förfrågan eller beställer ett presentkort, och vilka rättigheter du har.",
  h1: "Integritetspolicy",
  intro: "Här beskriver vi hur KOM-fort Bilvård AB behandlar dina personuppgifter när du hör av dig till oss, skickar en förfrågan eller beställer ett presentkort, och vilka rättigheter du har. Vi samlar bara in de uppgifter vi behöver för att kunna hjälpa dig.",
  avsnitt: [
    {
      h2: "Personuppgiftsansvarig",
      delar: [p("KOM-fort Bilvård AB, organisationsnummer 559539-8958, Lindtorpsvägen 10, 702 37 Örebro, är personuppgiftsansvarig. Har du frågor om hur vi behandlar dina uppgifter kan du ringa 076-035 38 08, mejla Komfort802@gmail.com eller använda [kontaktsidan](/kontakt).")],
    },
    {
      h2: "Vilka uppgifter vi behandlar",
      delar: [
        p("Vi behandlar de uppgifter som du själv lämnar till oss:"),
        lista(
          "Kontaktformuläret: namn, telefonnummer, vilken tjänst det gäller och ditt meddelande.",
          "Bokningssidan: namn, telefonnummer, e-post om du fyller i den, önskad dag, tjänst, bilstorlek och tillägg, om du vill att vi hämtar bilen och ditt meddelande.",
          "Presentkort: ditt namn, din e-post och beloppet, samt telefonnummer, mottagarens e-post och en hälsning om du fyller i dem.",
          "Telefon, sms, e-post, Instagram och Facebook: det du berättar för oss.",
          "När du är kund hos oss: vilka behandlingar bilen har fått, och kvitton och underlag till bokföringen.",
        ),
        p("I kontaktformuläret och på bokningssidan behövs namn och telefonnummer, och för presentkort namn och e-post, för att vi ska kunna svara dig. Övriga fält är frivilliga."),
      ],
    },
    {
      h2: "Varför vi behandlar uppgifterna",
      delar: [
        lista(
          "För att svara på din förfrågan, boka in bilen och utföra tjänsten. Grunden är avtal: uppgifterna behövs för att vi ska kunna ingå och fullgöra avtalet med dig (artikel 6.1 b i dataskyddsförordningen).",
          "För att skicka ett presentkort till mottagaren. Grunden är avtalet med dig som köper presentkortet och, för mottagarens e-post, vårt berättigade intresse av att kunna leverera presentkortet (artikel 6.1 b och f).",
          "För att kunna se vilka behandlingar bilen har fått när du hör av dig igen. Grunden är vårt berättigade intresse av att ge dig rätt råd och service (artikel 6.1 f).",
          "För att följa bokföringslagen när du har betalat. Grunden är en rättslig förpliktelse (artikel 6.1 c).",
          "För att visa kartan när du klickar på Visa kartan. Grunden är ditt samtycke (artikel 6.1 a).",
        ),
        p("Vi använder inte uppgifterna till något annat, vi fattar inga automatiska beslut om dig och vi säljer aldrig dina uppgifter."),
      ],
    },
    {
      h2: "Vilka som får ta del av uppgifterna",
      delar: [
        p("Förfrågningarna läses bara av oss som arbetar med KOM-fort Bilvård. Vi använder också några leverantörer:"),
        lista("Vercel driver webbplatsen.", "Resend skickar meddelandena från formulären till vår e-post.", "Google tillhandahåller vår e-post."),
        p("Betalningar och presentkort hanteras av Zettle, som ansvarar för sin egen behandling enligt Zettles integritetspolicy. Vi ser aldrig dina kortuppgifter. Skriver du till oss på Instagram eller Facebook behandlar Meta uppgifterna enligt sin egen integritetspolicy. Till myndigheter lämnar vi bara ut uppgifter när lagen kräver det."),
      ],
    },
    {
      h2: "Uppgifter utanför EU",
      delar: [p("Vercel, Resend och Google är amerikanska företag, och uppgifterna kan därför behandlas i USA. Företagen är anslutna till EU-U.S. Data Privacy Framework, som EU-kommissionen har bedömt ger ett tillräckligt skydd för personuppgifter.")],
    },
    {
      h2: "Hur länge vi sparar uppgifterna",
      delar: [p("Vi sparar dina uppgifter så länge du är kund hos oss, så att vi kan se vilka behandlingar bilen har fått när du hör av dig igen. Blir en förfrågan ingen bokning raderar vi den när ärendet är avslutat. Vill du att vi raderar dina uppgifter räcker det att du säger till. Kvitton och bokföring sparar vi så länge bokföringslagen kräver, i dag sju år.")],
    },
    {
      h2: "Kakor och kartan",
      delar: [p("Webbplatsen använder inga kakor för statistik eller marknadsföring. Kartan på våra sidor kommer från Google Maps och laddas först när du klickar på Visa kartan. Då får Google din IP-adress och kan spara kakor i din webbläsare enligt Googles integritetspolicy. Klickar du inte laddas ingen karta. Länken Öppna i Google Maps tar dig till Googles egen webbplats.")],
    },
    {
      h2: "När du besöker webbplatsen",
      delar: [p("När du besöker webbplatsen behandlar Vercel tekniska uppgifter som din IP-adress, för att kunna visa sidorna och skydda webbplatsen mot angrepp. Grunden är vårt berättigade intresse av en webbplats som fungerar och är säker (artikel 6.1 f). Uppgifterna sparas en begränsad tid i Vercels loggar.")],
    },
    {
      h2: "Dina rättigheter",
      delar: [
        p("Du har rätt att:"),
        lista(
          "få veta vilka uppgifter vi har om dig och få en kopia av dem",
          "få felaktiga uppgifter rättade",
          "få dina uppgifter raderade, om vi inte måste spara dem enligt lag",
          "begära att vi begränsar behandlingen",
          "invända mot behandling som bygger på vårt berättigade intresse",
          "få ut uppgifter som du har lämnat till oss i ett format som går att flytta till någon annan",
          "när som helst ta tillbaka ett samtycke",
        ),
        p("Hör av dig till oss, så svarar vi inom en månad. Tycker du att vi behandlar dina uppgifter fel kan du klaga hos Integritetsskyddsmyndigheten (IMY), www.imy.se."),
      ],
    },
    {
      h2: "Ändringar i policyn",
      delar: [p("Ändrar vi hur vi behandlar personuppgifter uppdaterar vi den här sidan. Policyn uppdaterades senast i oktober 2026.")],
    },
  ] satisfies PolicyAvsnitt[],
};
