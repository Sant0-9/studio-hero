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
    tags: ["Web", "Design"],
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
    tags: ["Web", "Tools"],
    featured: true,
  },
  {
    slug: "atlas-analytics",
    title: "Atlas Analytics",
    excerpt: "Product design for a data insights platform.",
    summary: "Product UX for data insights and dashboards.",
    coverImage: "/images/placeholder-3.svg",
    hero: "/images/placeholder-3.svg",
    tags: ["Tools", "Design"],
    featured: true,
  },
  {
    slug: "nova-ml-insights",
    title: "Nova ML Insights",
    excerpt: "Lightweight ML insights for customer feedback.",
    summary: "Embeddings-powered feedback clustering and summaries.",
    coverImage: "/images/placeholder-1.svg",
    hero: "/images/placeholder-1.svg",
    tags: ["ML", "Tools"],
  },
  {
    slug: "orbit-web-studio",
    title: "Orbit Web Studio",
    excerpt: "Design system and web app surface.",
    summary: "Accessible design system with motion-safe components.",
    coverImage: "/images/placeholder-2.svg",
    hero: "/images/placeholder-2.svg",
    tags: ["Web"],
  },
  {
    slug: "quartz-build-tools",
    title: "Quartz Build Tools",
    excerpt: "CLI tooling to speed up CI and DX.",
    summary: "Opinionated build pipeline with caching and previews.",
    coverImage: "/images/placeholder-3.svg",
    hero: "/images/placeholder-3.svg",
    tags: ["Tools"],
  },
  {
    slug: "pulse-observability",
    title: "Pulse Observability",
    excerpt: "Unified logs, metrics, and traces.",
    summary: "Real-user monitoring and performance dashboards.",
    coverImage: "/images/placeholder-1.svg",
    hero: "/images/placeholder-1.svg",
    tags: ["Tools", "Web"],
  },
  {
    slug: "helix-ml-studio",
    title: "Helix ML Studio",
    excerpt: "Model experimentation UI and pipelines.",
    summary: "Fine-tuning workflows and evals with guardrails.",
    coverImage: "/images/placeholder-2.svg",
    hero: "/images/placeholder-2.svg",
    tags: ["ML", "Web"],
  },
];

export function getWorkBySlug(slug: string) {
  return work.find((w) => w.slug === slug);
}
