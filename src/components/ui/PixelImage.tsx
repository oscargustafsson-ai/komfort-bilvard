"use client"

import { useEffect, useMemo, useState } from "react"
import Image from "next/image"

type Grid = { rows: number; cols: number }

const DEFAULT_GRIDS: Record<string, Grid> = {
  "6x4": { rows: 4, cols: 6 },
  "8x8": { rows: 8, cols: 8 },
  "8x3": { rows: 3, cols: 8 },
  "4x6": { rows: 6, cols: 4 },
  "3x8": { rows: 8, cols: 3 },
}

type PredefinedGridKey = keyof typeof DEFAULT_GRIDS

/**
 * Avrundar till 3 decimaler så server och browser producerar samma sträng.
 * Samma konvention som HexagonPattern — annars ger flyttalsprecisionen
 * hydration-mismatch på clipPath/transitionDelay.
 */
function fmt(n: number): string {
  return Number(n.toFixed(3)).toString()
}

/**
 * Deterministisk pseudoslump i [0,1) från rutans index.
 * Ger samma spridda fade-in som Math.random(), men stabilt mellan renders
 * och mellan server och klient (Math.random i render är en oren funktion).
 */
function scatter(index: number) {
  const x = Math.sin(index * 12.9898) * 43758.5453
  return x - Math.floor(x)
}

interface PixelImageProps {
  src: string
  alt?: string
  grid?: PredefinedGridKey
  customGrid?: Grid
  pixelFadeInDuration?: number
  maxAnimationDelay?: number
  className?: string
}

export function PixelImage({
  src,
  alt = "",
  grid = "6x4",
  customGrid,
  pixelFadeInDuration = 900,
  maxAnimationDelay = 1100,
  className = "h-72 w-72 md:h-96 md:w-96",
}: PixelImageProps) {
  const [visible, setVisible] = useState(false)

  const { rows, cols } = useMemo(() => {
    if (customGrid) {
      const { rows, cols } = customGrid
      if (Number.isInteger(rows) && Number.isInteger(cols) && rows >= 1 && cols >= 1 && rows <= 16 && cols <= 16)
        return customGrid
    }
    return DEFAULT_GRIDS[grid] ?? DEFAULT_GRIDS["6x4"]
  }, [customGrid, grid])

  // Fade-in startar efter första målningen. rAF (i stället för setState rakt i
  // effektkroppen) undviker kaskad-renders och låter webbläsaren måla opacity:0 först.
  useEffect(() => {
    const id = requestAnimationFrame(() => setVisible(true))
    return () => cancelAnimationFrame(id)
  }, [])

  const pieces = useMemo(() => {
    return Array.from({ length: rows * cols }, (_, index) => {
      const row = Math.floor(index / cols)
      const col = index % cols
      const x0 = fmt(col * (100 / cols))
      const x1 = fmt((col + 1) * (100 / cols))
      const y0 = fmt(row * (100 / rows))
      const y1 = fmt((row + 1) * (100 / rows))
      const clipPath = `polygon(${x0}% ${y0}%, ${x1}% ${y0}%, ${x1}% ${y1}%, ${x0}% ${y1}%)`
      return { clipPath, delay: fmt(scatter(index) * maxAnimationDelay) }
    })
  }, [rows, cols, maxAnimationDelay])

  return (
    <div className={`relative select-none overflow-hidden ${className}`}>
      {pieces.map((piece, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity ease-out"
          style={{
            clipPath: piece.clipPath,
            opacity: visible ? 1 : 0,
            transitionDelay: `${piece.delay}ms`,
            transitionDuration: `${pixelFadeInDuration}ms`,
          }}
        >
          <Image
            src={src}
            alt={i === 0 ? alt : ""}
            aria-hidden={i > 0}
            draggable={false}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      ))}
    </div>
  )
}
