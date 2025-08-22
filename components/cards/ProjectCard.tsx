"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  slug: string;
  title: string;
  summary: string;
  hero: string;
  tags?: string[];
}

export function ProjectCard({ slug, title, summary, hero, tags = [] }: ProjectCardProps) {
  return (
    <Link
      href={`/work/${slug}`}
      className={cn(
        "group block rounded-lg border overflow-hidden focus:outline-none",
        "focus-ring"
      )}
    >
      <div className="relative">
        <Image
          src={hero}
          alt={`${title} cover`}
          width={1200}
          height={800}
          className="aspect-[4/3] w-full object-cover"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='16' height='12'><rect width='100%' height='100%' fill='%23f3f4f6'/></svg>"
          priority={false}
        />

        <div
          className={cn(
            "pointer-events-none absolute inset-0",
            "[mask-image:linear-gradient(to_bottom,black,transparent_80%)]"
          )}
        />

        <div
          className={cn(
            "absolute inset-0 flex items-end p-4",
            "transition-all duration-200",
            "opacity-0 translate-y-2",
            "[clip-path:inset(0_0_100%_0)]",
            "group-hover:opacity-100 group-hover:translate-y-0 group-hover:[clip-path:inset(0_0_0_0)]",
            "group-focus-visible:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:[clip-path:inset(0_0_0_0)]"
          )}
          aria-hidden
        >
          <div className="rounded-md bg-black/70 text-white px-3 py-2 backdrop-blur-sm">
            <p className="text-sm font-medium">{title}</p>
            <p className="text-xs text-white/80 mt-0.5">{summary}</p>
            {tags.length > 0 && (
              <ul className="mt-2 flex flex-wrap gap-1.5">
                {tags.map((t) => (
                  <li key={t} className="text-[10px] uppercase tracking-wide text-white/70">
                    {t}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
