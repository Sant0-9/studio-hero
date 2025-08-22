"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { work } from "@/lib/content";
import { ProjectCard } from "@/components/cards/ProjectCard";

// metadata cannot be exported from a client component; handled by route defaults

const FILTERS = ["All", "Web", "Tools", "ML"] as const;
type Filter = typeof FILTERS[number];

export default function WorkPage() {
  const [active, setActive] = useState<Filter>("All");
  const reduce = useReducedMotion();

  const items = useMemo(() => {
    if (active === "All") return work;
    return work.filter((w) => (w.tags ?? []).includes(active));
  }, [active]);

  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold">Work</h1>

      <div className="mt-6">
        <nav className="relative inline-flex items-center gap-2 rounded-md border p-1" aria-label="Work filters">
          {FILTERS.map((label) => {
            const isActive = active === label;
            return (
              <button
                key={label}
                className="relative rounded-sm px-3 py-1.5 text-sm text-gray-700 focus-ring"
                aria-current={isActive ? "page" : undefined}
                onClick={() => setActive(label)}
              >
                <span className="relative z-10">{label}</span>
                <AnimatePresence>
                  {isActive && (
                    reduce ? (
                      <span className="absolute inset-x-1 bottom-0 h-0.5 bg-black" />
                    ) : (
                      <motion.span
                        layoutId="filter-underline"
                        className="absolute left-1 right-1 bottom-0 h-0.5 bg-black"
                        transition={{ type: "spring", stiffness: 500, damping: 40, mass: 0.2 }}
                      />
                    )
                  )}
                </AnimatePresence>
              </button>
            );
          })}
        </nav>
      </div>

      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item.slug} className="group">
            <ProjectCard
              slug={item.slug}
              title={item.title}
              summary={item.summary ?? item.excerpt}
              hero={item.hero ?? item.coverImage}
              tags={item.tags}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
