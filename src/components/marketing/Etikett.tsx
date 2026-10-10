/**
 * Liten guldetikett ovanför rubriker ("eyebrow"). Strecket är ritat med CSS,
 * så inga streck-tecken hamnar i den synliga texten.
 */
export function Etikett({ children, className = "mb-4" }: { children: React.ReactNode; className?: string }) {
  return (
    <p className={`flex items-center gap-3 font-mono text-xs uppercase tracking-[0.4em] text-gold before:block before:h-px before:w-6 before:shrink-0 before:bg-gold/70 ${className}`}>
      {children}
    </p>
  );
}
