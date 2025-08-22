"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useReducedMotion, motion } from "framer-motion";
import type { WorkItem } from "@/lib/content";

export type CaseStudyProps = {
  item: NonNullable<WorkItem["caseStudy"]>;
};

const STEPS = ["Problem", "Approach", "Result", "Tech", "Links"] as const;

export function CaseStudy({ item }: CaseStudyProps) {
  const reduce = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  // IntersectionObserver for section activation
  useEffect(() => {
    if (reduce) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) {
          const idx = Number((visible[0].target as HTMLElement).dataset.index);
          if (!Number.isNaN(idx)) setActiveIndex(idx);
        }
      },
      { root: null, rootMargin: "0px 0px -60% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    sectionRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [reduce]);

  const kpis = item.kpis ?? [];
  return (
    <div className="container mx-auto px-4 py-12 grid gap-8 md:grid-cols-[260px_1fr] [content-visibility:auto] [contain-intrinsic-size:800px]">
      <aside className="relative">
        <div className="md:sticky md:top-24" role="navigation" aria-label="Case study steps">
          <ol className="space-y-1">
            {STEPS.map((label, idx) => {
              const isActive = activeIndex === idx;
              return (
                <li key={label}>
                  <button
                    className="relative w-full text-left px-3 py-2 rounded-md focus-ring"
                    onClick={() => {
                      const target = sectionRefs.current[idx];
                      if (target) target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
                      setActiveIndex(idx);
                    }}
                    aria-current={isActive ? "step" : undefined}
                  >
                    <span className="relative z-10 text-sm">{label}</span>
                    {isActive && (
                      reduce ? (
                        <span className="absolute inset-0 rounded-md bg-black/5" />
                      ) : (
                        <motion.span
                          layoutId="cs-step"
                          className="absolute inset-0 rounded-md bg-black/5"
                          transition={{ type: "spring", stiffness: 500, damping: 40, mass: 0.2 }}
                        />
                      )
                    )}
                  </button>
                </li>
              );
            })}
          </ol>
        </div>
      </aside>

      <section className="space-y-14">
        {/* Problem */}
        <article ref={(el) => { sectionRefs.current[0] = el; }} data-index={0} className="scroll-mt-24">
          <h2 className="text-xl font-semibold">Problem</h2>
          <p className="mt-2 text-text-med max-w-2xl">{item.problem}</p>
        </article>

        {/* Approach */}
        <article ref={(el) => { sectionRefs.current[1] = el; }} data-index={1} className="scroll-mt-24">
          <h2 className="text-xl font-semibold">Approach</h2>
          <p className="mt-2 text-text-med max-w-2xl">{item.approach}</p>
        </article>

        {/* Result with KPI counters */}
        <article ref={(el) => { sectionRefs.current[2] = el; }} data-index={2} className="scroll-mt-24">
          <h2 className="text-xl font-semibold">Result</h2>
          <p className="mt-2 text-text-med max-w-2xl">{item.result}</p>

          {kpis.length > 0 && (
            <ul className="mt-6 grid gap-4 sm:grid-cols-3">
              {kpis.map((kpi) => (
                <li key={kpi.label} className="rounded-lg border p-4">
                  <KpiCounter value={kpi.value} suffix={kpi.suffix} reduce={!!reduce} />
                  <div className="mt-1 text-sm text-text-med">{kpi.label}</div>
                </li>
              ))}
            </ul>
          )}
        </article>

        {/* Tech */}
        <article ref={(el) => { sectionRefs.current[3] = el; }} data-index={3} className="scroll-mt-24">
          <h2 className="text-xl font-semibold">Tech</h2>
          <ul className="mt-2 flex flex-wrap gap-2">
            {item.tech.map((t) => (
              <li key={t} className="rounded-full border px-3 py-1 text-sm">
                {t}
              </li>
            ))}
          </ul>
        </article>

        {/* Links */}
        <article ref={(el) => { sectionRefs.current[4] = el; }} data-index={4} className="scroll-mt-24">
          <h2 className="text-xl font-semibold">Links</h2>
          <ul className="mt-2 flex flex-wrap gap-3">
            {item.links.map((l) => (
              <li key={l.href}>
                <a className="underline" href={l.href} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </article>

        {/* Media gallery - lazy with picture */}
        {item.images?.length ? (
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {item.images.map((img) => (
              <figure key={img.src} className="overflow-hidden rounded-lg border">
                <picture>
                  <source srcSet={`${img.src}`} media="(min-width: 768px)" />
                  <img
                    loading="lazy"
                    src={img.src}
                    alt={img.alt}
                    width={img.width}
                    height={img.height}
                    className="w-full h-auto object-cover"
                  />
                </picture>
                <figcaption className="sr-only">{img.alt}</figcaption>
              </figure>
            ))}
          </div>
        ) : null}
      </section>
    </div>
  );
}

function KpiCounter({ value, suffix, reduce }: { value: number; suffix?: string; reduce: boolean }) {
  const [display, setDisplay] = useState(0);
  useEffect(() => {
    if (reduce) {
      setDisplay(value);
      return;
    }
    let start: number | null = null;
    const duration = 900;
    const step = (ts: number) => {
      if (start === null) start = ts;
      const p = Math.min(1, (ts - start) / duration);
      setDisplay(Math.round(value * easeOutCubic(p)));
      if (p < 1) requestAnimationFrame(step);
    };
    const raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [value, reduce]);

  return (
    <div className="text-2xl font-semibold">
      {display}
      {suffix}
    </div>
  );
}

function easeOutCubic(p: number) {
  return 1 - Math.pow(1 - p, 3);
}

export default CaseStudy;
