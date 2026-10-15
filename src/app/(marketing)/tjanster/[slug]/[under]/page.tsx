import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TjanstSidaMall } from "@/components/marketing/TjanstSidaMall";
import { allaTjanstsidor, getTjanstsida, getUndersida, tjanstPath } from "@/data/tjanstsidor";
import { sidMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string; under: string }> };

export async function generateStaticParams() {
  return allaTjanstsidor.filter((t) => t.foralder).map((t) => ({ slug: t.foralder!, under: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug, under } = await params;
  const t = getUndersida(slug, under);
  if (!t) return {};
  return sidMetadata({ title: t.sida.title, description: t.metaDesc, path: tjanstPath(t), ogType: "article" });
}

/** Undersida /tjanster/<förälder>/<slug>. Brödsmulor: Startsida > Tjänster > <förälder> > <sida>. */
export default async function UndersidaPage({ params }: Props) {
  const { slug, under } = await params;
  const t = getUndersida(slug, under);
  const foralder = getTjanstsida(slug);
  if (!t || !foralder) notFound();
  const smulor = [
    { namn: "Startsida", href: "/" },
    { namn: "Tjänster", href: "/tjanster" },
    { namn: foralder.title, href: tjanstPath(foralder) },
    { namn: t.title, href: tjanstPath(t) },
  ];
  return <TjanstSidaMall t={t} smulor={smulor} />;
}
