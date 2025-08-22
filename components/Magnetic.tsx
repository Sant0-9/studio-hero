"use client";

import { useRef } from "react";

interface MagneticProps {
  children: React.ReactNode;
  strength?: number; // pixels
}

export function Magnetic({ children, strength = 12 }: MagneticProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  function handleMouseMove(event: React.MouseEvent<HTMLDivElement>) {
    const element = ref.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const relX = event.clientX - rect.left - rect.width / 2;
    const relY = event.clientY - rect.top - rect.height / 2;
    const moveX = Math.max(-strength, Math.min(strength, relX / 6));
    const moveY = Math.max(-strength, Math.min(strength, relY / 6));
    element.style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
  }

  function handleMouseLeave() {
    const element = ref.current;
    if (!element) return;
    element.style.transform = "translate3d(0, 0, 0)";
    // nothing else; avoid persistent will-change
  }

  return (
    <div ref={ref} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      {children}
    </div>
  );
}
