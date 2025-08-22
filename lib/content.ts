export const site = {
  name: "Studio Hero",
  description: "A small studio crafting accessible, high-performance products.",
  tagline: "We design and build thoughtful digital products.",
} as const;

export type ServiceItem = {
  key: string;
  title: string;
  description: string;
};

export const services: ServiceItem[] = [
  {
    key: "design",
    title: "Design",
    description:
      "Product, UI, and visual systems that are clear, cohesive, and delightful.",
  },
  {
    key: "web-apps",
    title: "Web Apps",
    description:
      "Accessible, responsive frontends with motion-safe interactions and clean code.",
  },
  {
    key: "backends",
    title: "Backends",
    description:
      "Reliable APIs, auth, and data pipelines built for scale and simplicity.",
  },
  {
    key: "ai",
    title: "AI Enhancers",
    description:
      "Practical AI features that augment UX: search, summarization, and automation.",
  },
  {
    key: "performance",
    title: "Performance",
    description:
      "Lighthouse, Core Web Vitals, and real-user metrics tuned to be fast everywhere.",
  },
  {
    key: "consulting",
    title: "Consulting",
    description:
      "Hands-on guidance, audits, and coaching to unblock teams and ship better.",
  },
];

export type WorkItem = {
  slug: string;
  title: string;
  excerpt: string;
  summary?: string; // short summary for cards
  coverImage: string; // legacy hero image path
  hero?: string; // preferred hero thumb path for cards
  tags?: string[];
  featured?: boolean;
  images?: { src: string; alt: string; width: number; height: number }[];
};

export const work: WorkItem[] = [
  {
    slug: "aurora-brand",
    title: "Aurora Brand",
    excerpt: "Brand refresh and website for an eco-friendly DTC.",
    summary: "Brand launch microsite with motion-safe interactions.",
    coverImage: "/images/placeholder-1.svg",
    hero: "/images/placeholder-1.svg",
    tags: ["Design", "Frontend", "Motion"],
    featured: true,
    images: [
      { src: "/images/placeholder-1.svg", alt: "Aurora mock 1", width: 1600, height: 900 },
      { src: "/images/placeholder-2.svg", alt: "Aurora mock 2", width: 1600, height: 900 },
    ],
  },
  {
    slug: "copper-commerce",
    title: "Copper Commerce",
    excerpt: "Headless storefront with blazing fast performance.",
    summary: "Headless storefront focused on conversion and CLS.",
    coverImage: "/images/placeholder-2.svg",
    hero: "/images/placeholder-2.svg",
    tags: ["Next.js", "a11y", "Tailwind"],
    featured: true,
  },
  {
    slug: "atlas-analytics",
    title: "Atlas Analytics",
    excerpt: "Product design for a data insights platform.",
    summary: "Product UX for data insights and dashboards.",
    coverImage: "/images/placeholder-3.svg",
    hero: "/images/placeholder-3.svg",
    tags: ["Product", "Design"],
    featured: true,
  },
];

export function getWorkBySlug(slug: string) {
  return work.find((w) => w.slug === slug);
}
