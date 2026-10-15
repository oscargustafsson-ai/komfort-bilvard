import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { TjanstSidaMall } from "@/components/marketing/TjanstSidaMall";
import { allaTjanstsidor, getTjanstsida, tjanstPath } from "@/data/tjanstsidor";
import { sidMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return allaTjanstsidor.filter((t) => !t.foralder).map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const t = getTjanstsida(slug);
  if (!t) return {};
  return sidMetadata({ title: t.sida.title, description: t.metaDesc, path: tjanstPath(t), ogType: "article" });
}

/** Tjänstsida direkt under /tjanster. Brödsmulor: Startsida > Tjänster > <tjänst>. */
export default async function TjanstPage({ params }: Props) {
  const { slug } = await params;
  const t = getTjanstsida(slug);
  if (!t) notFound();
  const smulor = [
    { namn: "Startsida", href: "/" },
    { namn: "Tjänster", href: "/tjanster" },
    { namn: t.title, href: tjanstPath(t) },
  ];
  return <TjanstSidaMall t={t} smulor={smulor} />;
}
