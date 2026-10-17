/**
 * Före och efter (/fore-och-efter). Ordagrant från batcher/batch-07.md (sida 3/3).
 * Bilderna och alt-texterna enligt tabellen "Bilder och filmer".
 */
import type { Sektion } from "./startsida";

export type ForeEfterBild = { src: string; width: number; height: number; alt: string };
export type Par = { h3: string; fore: ForeEfterBild; efter: ForeEfterBild };
export type ParAvsnitt = { h2: string; stycke: string; par: Par[] };

const b = (fil: string, alt: string): ForeEfterBild => ({ src: `/bilder/fore-och-efter/${fil}`, width: 1080, height: 1350, alt });

export const foreOchEfter = {
  title: "Före och efter: bilvård i Örebro | Bilder från rekond och rengöring",
  meta: "Se skillnaden före och efter hos KOM-fort Bilvård i Örebro: smutsiga golvmattor, kupéer och lack som blivit rena igen. Bilder från vår lokal. Ring 076-035 38 08.",
  h1: "Före och efter: bilvård i Örebro",
  intro:
    "Här ser du bilar före och efter att vi har tagit hand om dem i vår lokal på Lindtorpsvägen 10 i Örebro. Bilden till vänster i varje par är tagen innan vi började och bilden till höger när vi var klara. Registreringsskyltarna är suddade. Vill du se allt vi gör kan du läsa om [vår bilvård i Örebro](/).",
  avsnitt: [
    {
      h2: "Kupén i en Porsche Cayenne",
      stycke: "Golvmattorna på både förar- och passagerarsidan var täckta av grus och intorkad smuts. Efteråt är mattorna rena och mönstret i gummit syns igen. Vid en [invändig rekond](/tjanster/invandig-rekond) går vi igenom allt från mattor och säten till paneler och rutor.",
      par: [
        { h3: "Förarplatsen", fore: b("cayenne-forarplats-fore.jpg", "Förarplatsen i en Porsche Cayenne med smutsig golvmatta före rengöringen hos KOM-fort Bilvård i Örebro"), efter: b("cayenne-forarplats-efter.jpg", "Förarplatsen i samma Porsche Cayenne med ren golvmatta efter rengöringen hos KOM-fort Bilvård i Örebro") },
        { h3: "Golvmattan på förarsidan", fore: b("cayenne-golvmatta-fore.jpg", "Golvmatta med grus och intorkad smuts i en Porsche Cayenne före rengöringen hos KOM-fort Bilvård i Örebro"), efter: b("cayenne-golvmatta-efter.jpg", "Samma golvmatta ren efter rengöringen hos KOM-fort Bilvård i Örebro") },
        { h3: "Passagerarplatsen", fore: b("cayenne-passagerarplats-fore.jpg", "Passagerarplatsen i en Porsche Cayenne med smutsig golvmatta före rengöringen hos KOM-fort Bilvård i Örebro"), efter: b("cayenne-passagerarplats-efter.jpg", "Passagerarplatsen i samma Porsche Cayenne efter rengöringen hos KOM-fort Bilvård i Örebro") },
      ],
    },
    {
      h2: "Lacken på en Porsche Cayenne",
      stycke: "Bakpartiet var täckt av ett grått lager vägsmuts, och lacken såg matt ut. Efteråt är lacken ren och blank igen. Vi handtvättar alltid med två hinkar och torkar med mikrofiberdukar, så att smutsen inte förs tillbaka till lacken. Läs mer om vår [biltvätt](/tjanster/biltvatt).",
      par: [
        { h3: "Lacken på bakpartiet", fore: b("cayenne-bakparti-fore.jpg", "Bakpartiet på en grå Porsche Cayenne täckt av vägsmuts före tvätten hos KOM-fort Bilvård i Örebro"), efter: b("cayenne-bakparti-efter.jpg", "Bakpartiet på samma Porsche Cayenne med ren och blank lack hos KOM-fort Bilvård i Örebro") },
      ],
    },
    {
      h2: "En BMW 1-serie invändigt och utvändigt",
      stycke: "Golvet på förarsidan var fullt av smuts och grus, och lacken på bakpartiet var grå av vägdamm. Efteråt är kupén ren och lacken har fått tillbaka sin färg. Ska både kupén och lacken tas om hand vid samma tillfälle passar en [helrekond](/tjanster/rekonditionering).",
      par: [
        { h3: "Förarplatsen i BMW:n", fore: b("bmw-forarplats-fore.jpg", "Smutsigt golv på förarsidan i en BMW 1-serie före rengöringen hos KOM-fort Bilvård i Örebro"), efter: b("bmw-forarplats-efter.jpg", "Förarplatsen i samma BMW efter rengöringen hos KOM-fort Bilvård i Örebro") },
        { h3: "Lacken på BMW:ns bakparti", fore: b("bmw-bakparti-fore.jpg", "Bakpartiet på en grå BMW 1-serie med smutsig lack före tvätten hos KOM-fort Bilvård i Örebro"), efter: b("bmw-bakparti-efter.jpg", "Bakpartiet på samma BMW med ren lack hos KOM-fort Bilvård i Örebro") },
      ],
    },
  ] satisfies ParAvsnitt[],
  rena: {
    h2: "Så blir mattorna och lacken rena",
    stycken: ["Invändigt dammsuger vi först och rengör sedan klädsel och mattor med rengöringsmedel och borste. När det behövs tar vi till ångmaskinen mot lukt och fläckar, och sitter fläckarna djupt i tyget finns [kemtvätt av bilklädsel](/tjanster/invandig-rekond/kemtvatt-kladsel) som tillägg. Utvändigt blötlägger och avfettar vi bilen först, så att grovsmutsen släpper, och tvättar sedan för hand. Vi tar oss tid, och ingen bil behandlas i en fart."],
  } satisfies Sektion,
  fler: {
    h2: "Fler bilder",
    stycken: ["Fler bilder och filmer från lokalen lägger vi ut på vårt Instagram-konto [komfort_bilvard](https://www.instagram.com/komfort_bilvard)."],
  } satisfies Sektion,
  hitta: {
    h2: "Hitta till oss",
    stycken: ["Lokalen ligger på Lindtorpsvägen 10 i Södra Lindhult i Adolfsberg, nära E20 där Västerleden börjar."],
  } satisfies Sektion,
};
