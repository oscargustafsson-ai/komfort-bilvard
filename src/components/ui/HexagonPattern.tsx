import { useId } from "react";

interface HexagonPatternProps extends React.SVGProps<SVGSVGElement> {
  /** Radien för varje hexagon (center till hörn). @default 40 */
  radius?: number;
  /** Avstånd i pixlar mellan intilliggande hexagoner. @default 0 */
  gap?: number;
  /** Förskjutning av mönstrets origo i x-led. @default -1 */
  x?: number;
  /** Förskjutning av mönstrets origo i y-led. @default -1 */
  y?: number;
  /** Orientering: flat-top ("horizontal") eller pointy-top ("vertical"). @default "horizontal" */
  direction?: "horizontal" | "vertical";
  /** SVG stroke-dasharray för varje hexagonkontur. @default "0" */
  strokeDasharray?: string;
  className?: string;
}

type HexPoint = readonly [number, number];

/**
 * Normaliserar genererade SVG-tal så att SSR och klient producerar exakt samma
 * markup. Råa Math.cos/Math.sin-resultat skiljer sig på sista decimalen mellan
 * server och browser, vilket annars ger hydration-mismatch.
 */
function fmt(n: number): string {
  return Number(n.toFixed(3)).toString();
}

function hexVertexList(
  cx: number,
  cy: number,
  r: number,
  direction: "horizontal" | "vertical"
): HexPoint[] {
  const startAngle = direction === "horizontal" ? 0 : 30;
  return Array.from({ length: 6 }, (_, i) => {
    const angle = ((startAngle + i * 60) * Math.PI) / 180;
    return [cx + r * Math.cos(angle), cy + r * Math.sin(angle)] as const;
  });
}

function hexPoints(
  cx: number,
  cy: number,
  r: number,
  direction: "horizontal" | "vertical"
): string {
  return hexVertexList(cx, cy, r, direction)
    .map(([px, py]) => `${fmt(px)},${fmt(py)}`)
    .join(" ");
}

function edgeLexKey(a: HexPoint, b: HexPoint): string {
  const [p, q] =
    a[0] < b[0] || (a[0] === b[0] && a[1] <= b[1]) ? [a, b] : [b, a];
  return `${p[0].toFixed(6)},${p[1].toFixed(6)}|${q[0].toFixed(6)},${q[1].toFixed(6)}`;
}

function collectUniqueHexEdges(
  centers: [number, number][],
  r: number,
  direction: "horizontal" | "vertical"
): [HexPoint, HexPoint][] {
  const seen = new Set<string>();
  const edges: [HexPoint, HexPoint][] = [];
  for (const [cx, cy] of centers) {
    const verts = hexVertexList(cx, cy, r, direction);
    for (let i = 0; i < 6; i++) {
      const a = verts[i];
      const b = verts[(i + 1) % 6];
      const key = edgeLexKey(a, b);
      if (!seen.has(key)) {
        seen.add(key);
        edges.push([a, b]);
      }
    }
  }
  return edges;
}

function isSolidStrokeDasharray(strokeDasharray: string): boolean {
  const t = strokeDasharray.trim();
  return t === "" || t === "none" || t === "0";
}

function getHexSpacing(
  r: number,
  direction: "horizontal" | "vertical",
  gap: number
): { colStep: number; rowStep: number; tileW: number; tileH: number } {
  const sqrt3 = Math.sqrt(3);
  if (direction === "horizontal") {
    const colStep = (3 * r) / 2 + (sqrt3 * gap) / 2;
    const rowStep = sqrt3 * r + gap;
    return { colStep, rowStep, tileW: colStep * 2, tileH: rowStep };
  }
  const colStep = sqrt3 * r + gap;
  const rowStep = (3 * r) / 2 + (sqrt3 * gap) / 2;
  return { colStep, rowStep, tileW: colStep, tileH: rowStep * 2 };
}

function getTileGeometry(
  r: number,
  direction: "horizontal" | "vertical",
  gap: number
): { tileW: number; tileH: number; centers: [number, number][] } {
  const { colStep, rowStep, tileW, tileH } = getHexSpacing(r, direction, gap);

  const canonical: [number, number][] =
    direction === "horizontal"
      ? [
          [colStep / 2, rowStep / 2],
          [(colStep * 3) / 2, rowStep],
        ]
      : [
          [colStep / 2, rowStep / 2],
          [colStep, (rowStep * 3) / 2],
        ];

  const centers: [number, number][] = [];
  for (const [cx, cy] of canonical) {
    centers.push([cx, cy]);
    if (cy - r < 0) centers.push([cx, cy + tileH]);
    if (cy + r > tileH) centers.push([cx, cy - tileH]);
    if (cx - r < 0) centers.push([cx + tileW, cy]);
    if (cx + r > tileW) centers.push([cx - tileW, cy]);
    if (cy - r < 0 && cx - r < 0) centers.push([cx + tileW, cy + tileH]);
    if (cy - r < 0 && cx + r > tileW) centers.push([cx - tileW, cy + tileH]);
    if (cy + r > tileH && cx - r < 0) centers.push([cx + tileW, cy - tileH]);
    if (cy + r > tileH && cx + r > tileW) centers.push([cx - tileW, cy - tileH]);
  }

  return { tileW, tileH, centers };
}

export function HexagonPattern({
  radius = 40,
  gap = 0,
  x = -1,
  y = -1,
  strokeDasharray = "0",
  direction = "horizontal",
  className = "",
  ...props
}: HexagonPatternProps) {
  const id = useId();

  const { tileW, tileH, centers } = getTileGeometry(radius, direction, gap);
  const solidStroke = isSolidStrokeDasharray(strokeDasharray);
  const dashedEdges = solidStroke
    ? null
    : collectUniqueHexEdges(centers, radius, direction);

  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={fmt(tileW)}
          height={fmt(tileH)}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          {solidStroke
            ? centers.map(([cx, cy]) => (
                <polygon
                  className="fill-none"
                  key={`${cx}-${cy}`}
                  points={hexPoints(cx, cy, radius, direction)}
                  strokeDasharray={strokeDasharray}
                />
              ))
            : dashedEdges?.map(([a, b]) => (
                <line
                  className="fill-none"
                  key={edgeLexKey(a, b)}
                  x1={fmt(a[0])}
                  x2={fmt(b[0])}
                  y1={fmt(a[1])}
                  y2={fmt(b[1])}
                  strokeDasharray={strokeDasharray}
                />
              ))}
        </pattern>
      </defs>

      <rect width="100%" height="100%" fill={`url(#${id})`} stroke="none" />
    </svg>
  );
}
