"use client"

import { useEffect, useMemo, useState } from "react"

type Grid = { rows: number; cols: number }

const DEFAULT_GRIDS: Record<string, Grid> = {
  "6x4": { rows: 4, cols: 6 },
  "8x8": { rows: 8, cols: 8 },
  "8x3": { rows: 3, cols: 8 },
  "4x6": { rows: 6, cols: 4 },
  "3x8": { rows: 8, cols: 3 },
}

type PredefinedGridKey = keyof typeof DEFAULT_GRIDS

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

  useEffect(() => { setVisible(true) }, [])

  const pieces = useMemo(() => {
    return Array.from({ length: rows * cols }, (_, index) => {
      const row = Math.floor(index / cols)
      const col = index % cols
      const clipPath = `polygon(
        ${col * (100 / cols)}% ${row * (100 / rows)}%,
        ${(col + 1) * (100 / cols)}% ${row * (100 / rows)}%,
        ${(col + 1) * (100 / cols)}% ${(row + 1) * (100 / rows)}%,
        ${col * (100 / cols)}% ${(row + 1) * (100 / rows)}%
      )`
      return { clipPath, delay: Math.random() * maxAnimationDelay }
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
          <img
            src={src}
            alt={i === 0 ? alt : ""}
            aria-hidden={i > 0}
            draggable={false}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  )
}
