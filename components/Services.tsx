import React from "react";
import { cn } from "@/lib/utils";
import type { ServiceItem } from "@/lib/content";

type ServicesProps = {
  items: ServiceItem[];
};

export function Services({ items }: ServicesProps) {
  return (
    <section aria-labelledby="services" className="container mx-auto px-4 py-16">
      <h2 id="services" className="text-2xl md:text-3xl font-semibold">
        Services
      </h2>
      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <li key={item.key} className="group">
            <div
              role="article"
              aria-label={`Service: ${item.title}`}
              tabIndex={0}
              className={cn(
                "rounded-lg border bg-white/50 backdrop-blur-sm",
                "p-5 transition-transform transition-shadow duration-200",
                "hover:-translate-y-0.5 hover:shadow-md hover:rotate-[1deg]",
                "focus-ring focus-visible:-translate-y-0.5 focus-visible:shadow-md focus-visible:rotate-[1deg]"
              )}
            >
              <div className="flex items-start gap-4">
                <span
                  aria-hidden
                  className={cn(
                    "inline-flex size-10 shrink-0 items-center justify-center rounded-md border",
                    "bg-white text-foreground transition-transform duration-200",
                    "group-hover:-translate-y-0.5 group-focus-within:-translate-y-0.5"
                  )}
                >
                  {getServiceIcon(item.key)}
                </span>
                <div>
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <p className="mt-1 text-sm text-text-med">{item.description}</p>
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

function getServiceIcon(key: string) {
  switch (key) {
    case "design":
      return (
        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path d="M3 21l3.75-1.25L20 6.5a2.12 2.12 0 10-3-3L3.75 16.75 3 21z" />
        </svg>
      );
    case "web-apps":
      return (
        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 3 2.5 15 0 18" />
        </svg>
      );
    case "backends":
      return (
        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <ellipse cx="12" cy="5" rx="7" ry="3" />
          <path d="M5 5v6c0 1.66 3.13 3 7 3s7-1.34 7-3V5M5 11v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6" />
        </svg>
      );
    case "ai":
      return (
        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path d="M9 9a3 3 0 116 0v6a3 3 0 11-6 0V9z" />
          <path d="M12 2v3M12 19v3M4.2 6.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M6.3 17.7l-2.1 2.1M19.8 6.2l-2.1 2.1" />
        </svg>
      );
    case "performance":
      return (
        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 12l5-3M7 15a5 5 0 1010 0" />
        </svg>
      );
    case "consulting":
      return (
        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <path d="M3 5h18v10H7l-4 4V5z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth={1.5}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}

export default Services;
