"use client";

import { useRef, useState, useEffect } from "react";
import { HexagonPattern } from "@/components/ui/HexagonPattern";

/**
 * Hexagon-nät i det svarta hero-fältet:
 * - ett väldigt svagt grundmönster syns alltid
 * - ett starkare lager lyser upp lokalt runt muspekaren via en radial mask
 *
 * Musrörelsen spåras på hela <section> (närmaste positionerade föräldern), inte
 * bara på den här diven — annars fångar textblocket ovanpå musen och glöden
 * "dör" vid och bakom texten. Glöden tänds bara i det svarta fältet, inte över
 * faden/bilden.
 */
export function HeroHexBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: -1000, y: -1000 });
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    const section = el?.parentElement;
    if (!el || !section) return;

    const handleMove = (e: MouseEvent) => {
      const sectionRect = section.getBoundingClientRect();
      const fieldRect = el.getBoundingClientRect();
      const relX = e.clientX - sectionRect.left;
      // Tänd bara i det svarta fältet (vänster del), inte över faden/bilden.
      const inField = relX >= 0 && relX <= fieldRect.width;
      setActive(inField);
      if (inField) {
        setPos({ x: e.clientX - fieldRect.left, y: e.clientY - fieldRect.top });
      }
    };

    const handleLeave = () => setActive(false);

    section.addEventListener("mousemove", handleMove);
    section.addEventListener("mouseleave", handleLeave);
    return () => {
      section.removeEventListener("mousemove", handleMove);
      section.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  // Mjuk cirkulär mask centrerad på muspekaren.
  const maskStyle = {
    WebkitMaskImage: `radial-gradient(220px circle at ${pos.x}px ${pos.y}px, black 0%, transparent 70%)`,
    maskImage: `radial-gradient(220px circle at ${pos.x}px ${pos.y}px, black 0%, transparent 70%)`,
    opacity: active ? 1 : 0,
    transition: "opacity 300ms ease",
  } as React.CSSProperties;

  return (
    <div
      ref={ref}
      className="absolute inset-y-0 left-0 w-[55%] overflow-hidden pointer-events-none"
    >
      {/* Grundmönster — väldigt svagt, syns alltid */}
      <HexagonPattern
        radius={26}
        className="stroke-white/[0.05]"
        strokeDasharray="0"
      />

      {/* Glödlager — bara synligt runt musen */}
      <div className="absolute inset-0" style={maskStyle}>
        <HexagonPattern
          radius={26}
          className="stroke-gold/50"
          strokeDasharray="0"
        />
      </div>
    </div>
  );
}
