import Image from "next/image";

export type Media = {
  typ: "bild" | "film";
  /** Sökväg i public, t.ex. "/bilder/tjanster/polering-baklucka.jpg" eller "/video/biltvatt-skum.mp4". */
  src: string;
  width: number;
  height: number;
  /** Alt-text (bild) eller etikett i aria-label (film), exakt som i sidpaketet. */
  text: string;
};

/**
 * En bild i 4:5-format med tunn ram som korten (batch 07, grundfix 2).
 * Alt-texten används exakt som den står i sidpaketet, utan tillägg.
 */
export function Bild({
  src,
  width,
  height,
  alt,
  sizes,
  className = "",
}: {
  src: string;
  width: number;
  height: number;
  alt: string;
  sizes: string;
  className?: string;
}) {
  return (
    <div className={`relative aspect-[4/5] overflow-hidden border border-white/10 bg-surface-2 ${className}`}>
      <Image
        src={src}
        width={width}
        height={height}
        alt={alt}
        sizes={sizes}
        loading="lazy"
        className="h-full w-full object-cover"
      />
    </div>
  );
}
