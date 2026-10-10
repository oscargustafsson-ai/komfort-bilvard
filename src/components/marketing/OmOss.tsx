"use client";

import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";
import { HexagonPattern } from "@/components/ui/HexagonPattern";
import { Stycke } from "@/components/marketing/Stycke";
import { Etikett } from "@/components/marketing/Etikett";

const stats = [
  { num: "100%", label: "Handtvätt" },
  { num: "100%", label: "Skräddarsytt" },
  { num: "Örebro", label: "Södra Lindhult" },
  { num: "2025", label: "Grundat" },
];

type Props = {
  /** H2 exakt enligt sidpaketet. */
  h2: string;
  /** Stycken, ordagrant från sidpaketet. */
  stycken: string[];
};

export default function OmOss({ h2, stycken }: Props) {
  return (
    <section id="om" className="grain-section relative py-32 px-8 bg-polished overflow-hidden">
      <hr className="section-divider absolute top-0 left-0 right-0" />
      <HexagonPattern
        radius={46}
        className="text-gold/[0.04] [mask-image:radial-gradient(70%_70%_at_50%_50%,black,transparent)]"
        stroke="currentColor"
        strokeWidth={1}
      />
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <FadeIn>
          <Etikett>Om oss</Etikett>
          <h2 className="font-[family-name:var(--font-bebas)] text-5xl md:text-6xl tracking-wide mb-8">
            {h2}
          </h2>
          <div className="flex flex-col gap-6 mb-10">
            {stycken.map((s) => (
              <Stycke key={s.slice(0, 40)} text={s} />
            ))}
          </div>
          <Link
            href="/kontakt"
            className="grain relative overflow-hidden bg-gold text-black px-8 py-3 font-bold tracking-widest uppercase text-sm inline-block rounded-lg transition-all after:absolute after:inset-0 after:bg-white/20 after:translate-x-[-100%] hover:after:translate-x-0 after:transition-transform after:duration-300"
          >
            Kontakta oss
          </Link>
        </FadeIn>

        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={0.1 + i * 0.08}>
              <div className="grain-card border border-gold/20 p-8 text-center hover:border-gold/60 transition-colors">
                <p className="text-gold text-3xl font-black mb-2">{s.num}</p>
                <p className="text-white/40 text-xs tracking-widest uppercase">{s.label}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
