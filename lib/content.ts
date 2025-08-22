export const site = {
  name: "Studio Hero",
  description: "A small studio crafting accessible, high-performance products.",
  tagline: "We design and build thoughtful digital products.",
} as const;

export type WorkItem = {
  slug: string;
  title: string;
  excerpt: string;
  coverImage: string;
  images?: { src: string; alt: string; width: number; height: number }[];
};

export const work: WorkItem[] = [
  {
    slug: "aurora-brand",
    title: "Aurora Brand",
    excerpt: "Brand refresh and website for an eco-friendly DTC.",
    coverImage: "/images/placeholder-1.svg",
    images: [
      { src: "/images/placeholder-1.svg", alt: "Aurora mock 1", width: 1600, height: 900 },
      { src: "/images/placeholder-2.svg", alt: "Aurora mock 2", width: 1600, height: 900 },
    ],
  },
  {
    slug: "copper-commerce",
    title: "Copper Commerce",
    excerpt: "Headless storefront with blazing fast performance.",
    coverImage: "/images/placeholder-2.svg",
  },
  {
    slug: "atlas-analytics",
    title: "Atlas Analytics",
    excerpt: "Product design for a data insights platform.",
    coverImage: "/images/placeholder-3.svg",
  },
];

export function getWorkBySlug(slug: string) {
  return work.find((w) => w.slug === slug);
}
