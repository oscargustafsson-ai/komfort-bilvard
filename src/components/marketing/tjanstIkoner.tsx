import type { SVGProps } from "react";

/**
 * Guld-ikoner per tjänst, mappade på slug. Inline SVG (inga beroenden),
 * ärver färg via `currentColor` och storlek via className.
 */
type IconProps = SVGProps<SVGSVGElement>;

const base = (props: IconProps): IconProps => ({
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  ...props,
});

// Bil – rekonditionering (komplett)
function CarIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M3 13l1.5-4.5A2 2 0 0 1 6.4 7h11.2a2 2 0 0 1 1.9 1.5L21 13" />
      <path d="M3 13h18v4a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H6v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />
      <circle cx="7" cy="16" r="1" />
      <circle cx="17" cy="16" r="1" />
    </svg>
  );
}

// Glans/stjärna – polering
function SparkleIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8z" />
      <path d="M18 16l.7 2 .3.7 2 .8-2 .8-.3.7-.7 2-.7-2-.3-.7-2-.8 2-.8.3-.7z" />
    </svg>
  );
}

// Sköld – lackskydd (keramiskt)
function ShieldIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

// Vattendroppe – biltvätt (handtvätt)
function DropIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3c3 4 5.5 6.8 5.5 10a5.5 5.5 0 0 1-11 0C6.5 9.8 9 7 12 3z" />
      <path d="M9.5 14a2.5 2.5 0 0 0 2.5 2.5" />
    </svg>
  );
}

// Säte – invändig rekond
function SeatIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M7 4h6a2 2 0 0 1 2 2v6H8a2 2 0 0 1-2-2V5a1 1 0 0 1 1-1z" />
      <path d="M6 12h11a2 2 0 0 1 2 2v3H8a2 2 0 0 1-2-2z" />
      <path d="M8 17v3M17 17v3" />
    </svg>
  );
}

const ICONS: Record<string, (p: IconProps) => React.ReactElement> = {
  rekonditionering: CarIcon,
  polering: SparkleIcon,
  lackskydd: ShieldIcon,
  biltvatt: DropIcon,
  "invandig-rekond": SeatIcon,
};

export function TjanstIkon({
  slug,
  ...props
}: { slug: string } & IconProps) {
  const Icon = ICONS[slug] ?? SparkleIcon;
  return <Icon {...props} />;
}
