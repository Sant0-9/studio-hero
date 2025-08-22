"use client";
import Link from "next/link";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { site, work } from "@/lib/content";
import { Reveal } from "@/components/animations/Reveal";
import { Marquee } from "@/components/Marquee";

export default function Home() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <main className="min-h-screen">
      <section className="container mx-auto px-4 py-20 md:py-28">
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
          {site.name}
        </h1>
        <p className="mt-4 text-lg text-gray-600 max-w-xl">
          {site.tagline}
        </p>
        <div className="mt-8">
          <Link
            href="/work"
            className="inline-flex items-center rounded-md bg-black text-white px-4 py-2 text-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
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
                <Reveal asChild disable={shouldReduceMotion}>
                  <div className="overflow-hidden rounded-lg border">
                    <Image
                      src={item.coverImage}
                      alt={`${item.title} cover`}
                      width={800}
                      height={600}
                      className="aspect-[4/3] w-full object-cover"
                    />
                  </div>
                </Reveal>
                <div className="mt-3">
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.excerpt}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <div className="py-10 border-t">
        <Marquee items={["Craft", "Quality", "Performance", "Accessibility", "Delight"]} />
      </div>
    </main>
  );
}
