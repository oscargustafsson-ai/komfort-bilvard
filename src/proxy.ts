import { NextRequest, NextResponse } from "next/server";
import { giftCardHosts, site } from "@/lib/site";

const PORTAL_PATHS = ["/dashboard", "/bokningar", "/installningar", "/profil"];

/**
 * Är requesten på presentkorts-subdomänen?
 *
 * Vercel skickar värdnamnet i Host-headern. Vi jämför utan port (localhost:3000)
 * och skiftlägesokänsligt, eftersom värdnamn inte är skiftlägeskänsliga.
 */
function isGiftCardHost(request: NextRequest): boolean {
  const host = request.headers.get("host")?.split(":")[0].toLowerCase();
  return host !== undefined && giftCardHosts.includes(host);
}

/**
 * Statisk fil snarare än en sida? Filer måste serveras från subdomänen själv;
 * bara navigering till andra sidor ska skickas till huvudsajten.
 */
function isAsset(pathname: string): boolean {
  return (
    pathname.startsWith("/logo/") ||
    pathname.startsWith("/bilder/") ||
    pathname.startsWith("/images/") ||
    /\.[a-z0-9]+$/i.test(pathname)
  );
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Presentkorts-subdomänen visar bara presentkortssidan. Roten serverar
  // /presentkort via rewrite (URL:en i adressfältet förblir subdomänens rot),
  // och allt annat skickas till huvudsajten så vi inte får två adresser
  // som visar samma innehåll — dåligt för SEO och förvirrande för kunden.
  if (isGiftCardHost(request)) {
    // Roten visar presentkortssidan. Rewrite (inte redirect) så adressfältet
    // stannar på subdomänens rot — det är den länken vi vill dela.
    if (pathname === "/") {
      return NextResponse.rewrite(new URL("/presentkort", request.url));
    }
    // Statiska filer (logga, bilder, favicon) måste serveras här, annars
    // laddar inte sidan sina egna resurser. Bara riktiga sidor skickas vidare.
    if (!isAsset(pathname)) {
      // Övriga sidor hör hemma på huvudsajten. Annars nås samma innehåll
      // på två adresser (dubbelt innehåll för Google).
      return NextResponse.redirect(new URL(pathname + request.nextUrl.search, site.url));
    }
  }

  const isPortalPath = PORTAL_PATHS.some((p) => pathname.startsWith(p));

  if (isPortalPath) {
    // TODO: Ersätt med riktig auth-check (Clerk, NextAuth eller Supabase Auth)
    const isLoggedIn = false;
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL("/logga-in", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon|api|public).*)"],
};
