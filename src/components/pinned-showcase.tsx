"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

export function PinnedShowcase() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    let cleanup: (() => void) | undefined;

    let mounted = true;
    (async () => {
      const { gsap } = await import("gsap");
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      if (!mounted) return;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (gsap as any).registerPlugin(ScrollTrigger as unknown as any);
      const el = containerRef.current;
      if (!el) return;
      const pinEl = el.querySelector<HTMLElement>("[data-pin]");
      if (!pinEl) return;

      const ctx = gsap.context(() => {
        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: el,
            start: "top top",
            end: "+=1200",
            pin: pinEl,
            scrub: 0.3,
          },
        });
        tl.fromTo(
          pinEl,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.6 }
        );
      }, el);
      cleanup = () => ctx.revert();

      // Remove will-change after idle
      const timeout = window.setTimeout(() => {
        pinEl?.style.removeProperty("will-change");
      }, 3000);
      cleanup = () => {
        ctx.revert();
        window.clearTimeout(timeout);
      };
    })();

    return () => {
      mounted = false;
      cleanup?.();
    };
  }, [reduce]);

  return (
    <section aria-labelledby="showcase" className="border-t">
      <div ref={containerRef} className="container mx-auto px-4 py-24 md:py-32">
        <h2 id="showcase" className="sr-only">Pinned showcase</h2>
        <div data-pin className="rounded-xl border bg-card p-8 md:p-12 will-change-transform">
          <p className="text-lg md:text-xl text-muted-foreground">
            Smooth, motion-safe scroll experiences using GSAP ScrollTrigger.
          </p>
        </div>
      </div>
    </section>
  );
}
