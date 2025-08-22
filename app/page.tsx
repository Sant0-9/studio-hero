"use client";
import Link from "next/link";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { site, work, services } from "@/lib/content";
import { Stagger, Item, Reveal } from "@/components/animations/Reveal";
import { Marquee } from "@/components/Marquee";
import { Magnetic } from "@/components/Magnetic";
import dynamic from "next/dynamic";
import { Services } from "@/components/Services";
import { ProjectCard } from "@/components/cards/ProjectCard";

export default function Home() {
  const HeroBlobs = dynamic(() => import("@/components/animations/HeroBlobs").then((m) => m.HeroBlobs), { ssr: false, loading: () => null });
  const shouldReduceMotion = useReducedMotion();
  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/70 to-transparent bg-noise" aria-hidden />
        {/** Code-split hero blobs animation (motion-safe) */}
        <HeroBlobs />
        <div className="container py-20 md:py-28 relative">
          <Stagger>
            <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">
              {site.name.split(" ").map((word) => (
                <Item asChild key={word}>
                  <span className="inline-block mr-2">{word}</span>
                </Item>
              ))}
            </h1>
            <Item asChild>
              <p className="mt-4 text-lg text-text-med max-w-xl">
                {site.tagline}
              </p>
            </Item>
            <Item asChild>
              <div className="mt-8 flex items-center gap-3">
                <Magnetic>
                  <Link
                    href="/work"
                    data-motion="gentle"
                    className="inline-flex items-center rounded-md bg-black text-white px-4 py-2 text-sm font-medium focus-ring"
                  >
                    See Work
                  </Link>
                </Magnetic>
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-md px-4 py-2 text-sm font-medium border"
                >
                  Contact
                </Link>
              </div>
            </Item>
          </Stagger>
        </div>
      </section>

      <section aria-labelledby="recent-work" className="container mx-auto px-4 pb-24">
        <h2 id="recent-work" className="text-2xl md:text-3xl font-semibold">
          Featured work
        </h2>
        <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {work
            .filter((w) => w.featured)
            .slice(0, 3)
            .map((item) => (
              <li key={item.slug} className="group">
                <Reveal asChild disable={!!shouldReduceMotion}>
                  <div>
                    <ProjectCard
                      slug={item.slug}
                      title={item.title}
                      summary={item.summary ?? item.excerpt}
                      hero={item.hero ?? item.coverImage}
                      tags={item.tags}
                    />
                  </div>
                </Reveal>
              </li>
            ))}
        </ul>
      </section>

      <Services items={services} />

      <div className="py-10 border-t">
        <Marquee items={["Craft", "Quality", "Performance", "Accessibility", "Delight"]} />
      </div>
    </main>
  );
}
