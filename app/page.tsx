"use client";
import Link from "next/link";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";
import { site, work, services } from "@/lib/content";
import { Stagger, Item, Reveal } from "@/components/animations/Reveal";
import { Marquee } from "@/components/Marquee";
import { Magnetic } from "@/components/Magnetic";
import { Services } from "@/components/Services";

export default function Home() {
  const shouldReduceMotion = useReducedMotion();
  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/70 to-transparent bg-noise" aria-hidden />
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
          Recent work
        </h2>
        <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {work.map((item) => (
            <li key={item.slug} className="group">
              <Link href={`/work/${item.slug}`} className="block focus:outline-none focus-visible:ring-2 rounded-md">
                <Reveal asChild disable={!!shouldReduceMotion}>
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

      <Services items={services} />

      <div className="py-10 border-t">
        <Marquee items={["Craft", "Quality", "Performance", "Accessibility", "Delight"]} />
      </div>
    </main>
  );
}
