"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { PixelImage } from "@/components/ui/PixelImage";
import { Stycke } from "@/components/marketing/Stycke";

const slides = [
  { src: "/bilder/1.png", alt: "Bilvård Örebro" },
  { src: "/bilder/2.png", alt: "Bilrekond Örebro" },
  { src: "/bilder/3.png", alt: "Polering Örebro" },
  { src: "/bilder/4.png", alt: "Lackskydd Örebro" },
];

const FONT_SIZE = 150;
const BASELINE = 122;
const BOX_TOP = -16;
const BOX_HEIGHT = FONT_SIZE + 8;

function HeroLine({ text, delay }: { text: string; delay: number }) {
  const textRef = useRef<SVGTextElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const textEl = textRef.current;
    const svgEl = svgRef.current;
    if (!textEl || !svgEl) return;

    const len = textEl.getComputedTextLength();
    const width = Math.ceil(len + 4);

    svgEl.setAttribute("viewBox", `0 ${BOX_TOP} ${width} ${BOX_HEIGHT}`);
    svgEl.style.width = `${(width / BOX_HEIGHT).toFixed(3)}em`;

    textEl.style.strokeDasharray = String(len + 20);
    textEl.style.strokeDashoffset = String(len + 20);
    textEl.style.animationDelay = `${delay}s`;
    textEl.classList.add("hero-text-animate");
  }, [delay]);

  return (
    <svg
      ref={svgRef}
      height="1em"
      style={{ fontSize: "clamp(62px, 13.2vw, 142px)", overflow: "visible", display: "block" }}
      viewBox={`0 ${BOX_TOP} 640 ${BOX_HEIGHT}`}
      preserveAspectRatio="xMinYMid meet"
      aria-hidden="true"
    >
      <text
        ref={textRef}
        x="0"
        y={BASELINE}
        fontSize={FONT_SIZE}
        fontFamily="var(--font-bebas), sans-serif"
        letterSpacing="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ fill: "transparent" }}
      >
        {text}
      </text>
    </svg>
  );
}

/** Dekorativ, animerad rubrik. Sidans riktiga H1 står som text under den. */
function AnimatedHeroText() {
  return (
    <div
      className="mb-4 text-left"
      aria-hidden="true"
      style={{ display: "flex", flexDirection: "column", gap: "0.02em" }}
    >
      <HeroLine text="Din bilvård" delay={0} />
      <HeroLine text="i Örebro." delay={0.65} />
    </div>
  );
}

type Props = {
  /** Sidans H1, synlig text. */
  rubrik: string;
  /** Introstycken, ordagrant från sidpaketet. */
  intro: string[];
};

export default function Hero({ rubrik, intro }: Props) {
  const [active, setActive] = useState(0);
  // Pixel overlay: visible on load, fades out after reveal completes
  const [pixelFading, setPixelFading] = useState(false);
  const [pixelGone, setPixelGone] = useState(false);

  useEffect(() => {
    // Pixel reveal takes ~1400ms (800 delay + 600 fade). Then fade the overlay out.
    const t1 = setTimeout(() => setPixelFading(true), 1400);
    const t2 = setTimeout(() => setPixelGone(true), 1900);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((cur) => (cur + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="grain-section relative min-h-screen flex items-center overflow-hidden bg-black py-32">

      {/* Right panel */}
      <div
        className="absolute inset-y-0 right-0 w-[60%] md:w-[57%] z-[1] opacity-35 md:opacity-100"
        style={{
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 30%)",
          maskImage: "linear-gradient(to right, transparent 0%, black 30%)",
        }}
      >

        {/* Rounded image container */}
        <div className="absolute inset-14 md:inset-16 lg:inset-20 rounded-2xl overflow-hidden">

          {/* Smooth crossfading slideshow */}
          {slides.map((slide, i) => (
            <div
              key={slide.src}
              className="absolute inset-0"
              style={{
                opacity: active === i ? 1 : 0,
                transition: "opacity 1200ms cubic-bezier(0.4,0,0.2,1)",
              }}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                sizes="57vw"
                className="object-cover"
                priority={i === 0}
              />
            </div>
          ))}

          {/* Pixel reveal overlay: plays once on page load then disappears */}
          {!pixelGone && (
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ opacity: pixelFading ? 0 : 1, transition: "opacity 500ms ease" }}
            >
              <PixelImage
                src={slides[0].src}
                alt=""
                customGrid={{ rows: 6, cols: 9 }}
                className="w-full h-full"
                pixelFadeInDuration={600}
                maxAnimationDelay={800}
              />
            </div>
          )}
        </div>

      </div>

      {/* Section bottom vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />

      {/* Text, left side */}
      <div className="relative z-10 px-8 md:px-20 max-w-2xl">
        <AnimatedHeroText />
        <h1 className="font-[family-name:var(--font-bebas)] text-3xl md:text-4xl tracking-[0.2em] uppercase text-gold mb-6">
          {rubrik}
        </h1>
        <div className="flex flex-col gap-4 max-w-xl mb-8">
          {intro.map((s) => (
            <Stycke key={s.slice(0, 40)} text={s} className="text-white/60 leading-relaxed font-light" />
          ))}
        </div>
        <div className="flex gap-4 flex-wrap">
          <a
            href="tel:0761943519"
            className="grain relative overflow-hidden bg-gold text-black px-10 py-3 font-bold tracking-widest uppercase text-sm rounded-lg transition-all after:absolute after:inset-0 after:bg-white/20 after:translate-x-[-100%] hover:after:translate-x-0 after:transition-transform after:duration-300"
          >
            Ring oss!
          </a>
          <Link
            href="/tjanster"
            className="grain-card relative overflow-hidden border border-white/20 text-white/80 px-10 py-3 font-bold tracking-widest uppercase text-sm rounded-lg transition-all hover:border-gold hover:text-gold after:absolute after:inset-0 after:bg-gold/10 after:translate-x-[-100%] hover:after:translate-x-0 after:transition-transform after:duration-300"
          >
            Våra tjänster
          </Link>
        </div>
      </div>

    </section>
  );
}
