"use client";

import { useEffect, useRef } from "react";

/**
 * Kort filmloop utan ljud och utan kontroller (batch 07, grundfix 3).
 * Filen ligger i data-src och laddas först när filmen syns (rootMargin 200px).
 * Har besökaren valt minskad rörelse spelas filmen inte, och postern visas.
 */
export function Loop({
  src,
  width,
  height,
  label,
  className = "",
}: {
  src: string;
  width: number;
  height: number;
  label: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const poster = src.replace(/\.[a-z0-9]+$/i, ".jpg");

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            if (!v.getAttribute("src")) v.src = v.dataset.src ?? "";
            v.muted = true;
            v.play().catch(() => {});
          } else if (v.getAttribute("src")) {
            v.pause();
          }
        }
      },
      { rootMargin: "200px" }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <div className={`relative aspect-[4/5] overflow-hidden border border-white/10 bg-surface-2 ${className}`}>
      <video
        ref={ref}
        muted
        loop
        playsInline
        preload="none"
        poster={poster}
        data-src={src}
        aria-label={label}
        width={width}
        height={height}
        className="h-full w-full object-cover"
      />
    </div>
  );
}
