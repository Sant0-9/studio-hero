export type WorkItem = {
  slug: string;
  title: string;
  excerpt: string;
  year: number;
  coverImage: string; // path under public/
  role: string;
  tags: string[];
  images?: { src: string; alt: string; width: number; height: number }[];
};

export const site = {
  name: 'Studio Hero',
  tagline: 'Design-forward digital experiences.',
  description:
    'Studio Hero is a small studio crafting accessible, high-performance web experiences.',
  social: {
    x: 'https://x.com/placeholder',
    github: 'https://github.com/placeholder',
    linkedin: 'https://www.linkedin.com/company/placeholder/',
  },
};

export const work: WorkItem[] = [
  {
    slug: 'aurora-brand',
    title: 'Aurora Brand Microsite',
    excerpt: 'A fast, animated brand launch microsite with motion-safe interactions.',
    year: 2024,
    coverImage: '/images/aurora.svg',
    role: 'Design & Frontend',
    tags: ['Next.js', 'Tailwind', 'Framer Motion'],
    images: [
      { src: '/images/aurora-detail-1.svg', alt: 'Aurora hero', width: 1600, height: 900 },
      { src: '/images/aurora-detail-2.svg', alt: 'Aurora grid', width: 1600, height: 900 },
    ],
  },
  {
    slug: 'copper-commerce',
    title: 'Copper Commerce',
    excerpt: 'Conversion-focused storefront with accessible components and great CLS.',
    year: 2023,
    coverImage: '/images/copper.svg',
    role: 'Frontend',
    tags: ['Next.js', 'a11y', 'Tailwind'],
  },
];

export function getWorkBySlug(slug: string): WorkItem | undefined {
  return work.find((w) => w.slug === slug);
}
