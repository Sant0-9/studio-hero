"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { site, work } from "@/lib/content";
import { PinnedShowcase } from "@/components/pinned-showcase";
import { MicroLottie } from "@/components/micro-lottie";

export default function Home() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-20 md:py-28">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
          {site.name} <MicroLottie />
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-xl">
          {site.tagline}
        </p>
        <div className="mt-8">
          <Link
            href="/work"
            className="inline-flex items-center rounded-md bg-foreground text-background px-4 py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
          >
            View work
          </Link>
        </div>
      </section>

      <section aria-labelledby="recent-work" className="container mx-auto px-4 pb-24">
        <h2 id="recent-work" className="text-2xl md:text-3xl font-semibold">
          Recent work
        </h2>
        <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {work.map((item) => (
            <li key={item.slug} className="group">
              <Link href={`/work/${item.slug}`} className="block focus:outline-none focus-visible:ring-2 rounded-md">
                <motion.div
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                  whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="overflow-hidden rounded-lg border bg-card"
                >
                  <Image
                    src={item.coverImage}
                    alt={`${item.title} cover`}
                    width={800}
                    height={600}
                    className="aspect-[4/3] w-full object-cover transition-transform group-hover:scale-[1.03] motion-safe:will-change-transform"
                  />
                </motion.div>
                <div className="mt-3">
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.excerpt}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <PinnedShowcase />
    </main>
  );
}
