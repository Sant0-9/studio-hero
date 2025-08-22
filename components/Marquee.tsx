"use client";

import { useEffect, useRef } from "react";

interface MarqueeProps {
  items: string[];
  speed?: number; // pixels per second
}

export function Marquee({ items, speed = 60 }: MarqueeProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    let animationFrame: number;
    let offset = 0;

    function tick() {
      offset -= speed / 60;
      track.style.transform = `translateX(${offset}px)`;
      const width = track.scrollWidth / 2;
      if (Math.abs(offset) >= width) offset = 0;
      animationFrame = requestAnimationFrame(tick);
    }

    animationFrame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animationFrame);
  }, [speed]);

  const repeated = [...items, ...items];

  return (
    <div ref={containerRef} className="overflow-hidden">
      <div ref={trackRef} className="flex gap-6 whitespace-nowrap will-change-transform">
        {repeated.map((item, i) => (
          <span key={`${item}-${i}`} className="text-sm uppercase tracking-wider text-gray-500">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
