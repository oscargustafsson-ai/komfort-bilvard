/**
 * Tjänstehubbens text (/tjanster). Ordagrant från batcher/batch-02.md (sida 4/5).
 * Länkar skrivs som [text](/sökväg) och renderas av Stycke.
 */
import type { Sektion, Fraga } from "./startsida";
import { sidPriser, getTjanstpris, KEMTVATT_PER_SATE, kr } from "./priser";

/** Kort i avsnitten "Fler tjänster" och "Tilläggstjänster" (batch 05b). Priser ur priser.ts. */
export type Tjanstkort = { namn: string; href?: string; etikett?: string; text: string; prisPrefix?: string; pris?: string; prisSuffix?: string };

const helrekondTillagg = (id: string) => kr(getTjanstpris("helrekond")!.tillagg.find((x) => x.id === id)!.pris);

export const tjansterSida = {
  title: "Bilvårdstjänster Örebro | Rekond, polering & lackskydd",
  meta: "Alla våra bilvårdstjänster i Örebro: bilrekond, invändig rekond, polering, keramiskt lackskydd och handtvätt. All tvätt görs för hand. Ring 076-035 38 08.",
  h1: "Våra bilvårdstjänster i Örebro",
  intro:
    "Hos KOM-fort Bilvård i Örebro får bilen hjälp med allt från en noggrann handtvätt till en komplett rekond, polering och keramiskt lackskydd. All tvätt görs för hand med pH-neutrala medel och professionella produkter, och vi tar den tid varje bil behöver. Nedan ser du våra bilvårdstjänster och vad som skiljer dem åt, så att du lättare kan välja rätt.",
  tjanster: [
    {
      h2: "Bilrekond",
      stycken: [
        "En [bilrekond](/tjanster/rekonditionering) är vår mest sålda tjänst och omfattar hela bilen. Utsidan tvättas och får en lackförsegling som håller i 12 månader, och kupén rengörs från mattor till instrumentbräda. Räkna med att bilen är hos oss en hel dag. Som tillägg kan du välja polering, glasförsegling, motortvätt och kemtvätt av sätena. Vill du dessutom ha lackkorrigering och 3 års lackskydd finns vårt kompletta paket.",
      ],
    },
    {
      h2: "Invändig rekond",
      stycken: [
        "En [invändig rekond](/tjanster/invandig-rekond) omfattar hela kupén: dammsugning, rengöring av klädsel, mattor och alla ytor samt glasputs på insidan. [Kemtvätt av sätena](/tjanster/invandig-rekond/kemtvatt-kladsel) finns som tillägg. Har bilen lädersäten får de läderserum. Behandlingen tar 2-4 timmar och passar när insidan behöver ett lyft men lacken är i gott skick.",
      ],
    },
    {
      h2: "Polering",
      stycken: [
        "[Polering](/tjanster/polering) tar bort det mesta av repor, swirlmärken och oxidering, så att matt lack blir blank igen. Först mäter vi lacktjockleken, och utifrån den och lackens skick väljer vi hur många steg som behövs, från ett till tre. Efteråt lägger vi på vax, och vill du att resultatet ska hålla längre väljer du lackskydd i stället.",
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
  flerTjanster: {
    h2: "Fler tjänster",
    stycken: ["Utöver de fem tjänsterna ovan gör vi rekond inför försäljning och leasingåterlämning, tar bort enstaka repor, polerar strålkastare och har ett komplett paket för lacken. Via namnet på kortet kommer du till sidan om tjänsten."],
    kort: [
      { namn: "Rekond inför bilförsäljning", href: "/tjanster/rekonditionering/infor-bilforsaljning", text: "Helrekond innan bilen ska säljas. Ren lack och en fräsch kupé syns direkt vid visningen och kan höja andrahandsvärdet.", prisPrefix: "Fr", pris: kr(sidPriser["rekonditionering/infor-bilforsaljning"].fran) },
      { namn: "Rekond inför leasingåterlämning", href: "/tjanster/rekonditionering/leasingaterlamning", text: "Helrekond innan leasingbilen ska tillbaka. Repor, fläckar och lukt kan du åtgärda med tillägg innan leasingbolaget går igenom bilen.", prisPrefix: "Fr", pris: kr(sidPriser["rekonditionering/leasingaterlamning"].fran) },
      { namn: "Repborttagning", href: "/tjanster/polering/repborttagning", text: "En enstaka repa i klarlacket tar vi bort på just det stället, utan att hela bilen poleras. Priset sätts efter repans storlek." },
      { namn: "Strålkastarpolering", href: "/tjanster/polering/stralkastarpolering", text: "Gula och matta strålkastare våtslipar vi, polerar och avslutar med ett UV-skydd. Båda strålkastarna ingår i priset.", prisPrefix: "Pris", pris: kr(sidPriser["polering/stralkastarpolering"].fran) },
      { namn: "Komplett paket", href: "/tjanster/lackskydd", text: "Lackkorrigering och keramiskt lackskydd som håller i 3 år, samlat i ett paket när lacken både ska bli fin och skyddas länge.", prisPrefix: "Fr", pris: kr(getTjanstpris("komplett")!.pris!) },
    ] satisfies Tjanstkort[],
  },
  tillaggstjanster: {
    h2: "Tilläggstjänster",
    stycken: ["Tilläggen bokar du tillsammans med en annan tjänst, och på varje kort står vilken tjänst tillägget hör till. Lätt polering och 1-stegspolering väljer du mellan, du kan inte ta båda."],
    kort: [
      { namn: "Lätt polering", etikett: "Tillägg till helrekond", text: "Ger lacken glansen tillbaka. OBS: lätt polering korrigerar inte lacken, så repor och swirlmärken blir kvar, och skyddet håller i 6 månader i stället för 12.", prisPrefix: "Tillägg", pris: helrekondTillagg("latt-polering") },
      { namn: "1-stegspolering", href: "/tjanster/polering", etikett: "Tillägg till helrekond", text: "Tar bort det mesta av fina repor och swirlmärken. Innan vi polerar mäter vi lacktjockleken och rengör lacken med rengöringslera.", prisPrefix: "Tillägg", pris: helrekondTillagg("1-stegspolering") },
      { namn: "Kemtvätt av säten", href: "/tjanster/invandig-rekond/kemtvatt-kladsel", etikett: "Tillägg till helrekond och invändig rekond", text: "Kemtvätt med våtdammsugare lyfter fläckar som sitter djupt i tyget. Efter kemtvätten stannar bilen helst hos oss till dagen efter, eftersom sätena behöver torka.", prisPrefix: "Fr", pris: kr(KEMTVATT_PER_SATE.pris), prisSuffix: "per säte" },
      { namn: "Glasförsegling", href: "/tjanster/lackskydd/glasforsegling", etikett: "Tillägg till helrekond", text: "Keramiskt skydd för vindrutan och sidorutorna i 2 år. Bakrutan är ett tillägg, och glasförseglingen går också att boka för sig.", prisPrefix: "Tillägg", pris: helrekondTillagg("glasforsegling") },
      { namn: "Motortvätt", href: "/tjanster/biltvatt/motortvatt", etikett: "Tillägg till handtvätt och helrekond", text: "Motorrummet blir rent från olja, damm och vägsalt. Medlet vi använder skyddar elektronik och kablar under tvätten.", prisPrefix: "Tillägg", pris: kr(sidPriser["biltvatt/motortvatt"].fran) },
      { namn: "Asfalts- och flygrostborttagning", href: "/tjanster/biltvatt/asfalt-och-flygrost", etikett: "Tillägg till handtvätt", text: "Kallavfettning löser upp asfaltsstänk och tjära, och flygrostborttagaren tar bort de rostfärgade prickarna i lacken. Båda ingår i helrekonden.", prisPrefix: "Tillägg", pris: kr(sidPriser["biltvatt/asfalt-och-flygrost"].fran) },
      { namn: "Keramiskt lackskydd", href: "/tjanster/lackskydd", etikett: "Tillägg till polering", text: "Läggs på efter en polering och skyddar lacken i 2, 3 eller 5 år. Skiktet stöter bort vatten och smuts och gör bilen enklare att hålla ren.", prisPrefix: "Tillägg fr", pris: kr(sidPriser["lackskydd"].fran) },
    ] satisfies Tjanstkort[],
  },
  hamtning: {
    h2: "Hämtning och lämning av bilen",
    stycken: [
      "Kan du inte ta dig hit själv kan vi hämta bilen hos dig och komma tillbaka med den när jobbet är klart. Läs mer om [hämtning och lämning av bilen](/tjanster/hamtning-och-lamning).",
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
      "Vill du bara ha bilen ren räcker en biltvätt. Är det insidan som behöver ett lyft passar invändig rekond, och är lacken matt eller repig är polering rätt val. Vill du ha både insidan och utsidan gjorda på en gång väljer du bilrekond, och vill du att lacken ska hålla sig fin i flera år väljer du polering med lackskydd. Är du osäker kan du ringa 076-035 38 08, så hjälper vi dig att välja. På [bokningssidan](/boka) får du ett uppskattat pris för din bil direkt.",
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
      { q: "Vilka tillägg finns till rekonden?", a: "Motortvätt, glasförsegling med 2 års skydd, lätt polering eller 1-stegspolering och kemtvätt av sätena. Lackskydd läggs på efter en polering och ingår i vårt kompletta paket." },
      { q: "Tvättar ni bilen i automattvätt?", a: "Nej. Vi tvättar alltid för hand, med pH-neutralt schampo och mjuka tvätthandskar." },
    ] satisfies Fraga[],
  },
};
