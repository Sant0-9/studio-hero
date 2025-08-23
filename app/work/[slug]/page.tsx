import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getWorkBySlug, work } from "@/lib/content";
import { CaseStudy } from "@/components/case-study/CaseStudy";
// Import client component; Next will split client bundle automatically
import { PinnedShowcase } from "@/src/components/pinned-showcase";

export async function generateStaticParams() {
  return work.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const item = getWorkBySlug(slug);
  return {
    title: item ? item.title : "Work",
    description: item ? item.excerpt : "Case study",
  };
}

export default async function WorkDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = getWorkBySlug(slug);
  if (!item) {
    return <main className="container mx-auto px-4 py-16">Not found</main>;
  }
  return (
    <main className="container mx-auto px-4 py-16">
      <Link href="/work" className="text-sm text-gray-600 underline">Back to all work</Link>
      <h1 className="mt-4 text-3xl md:text-4xl font-semibold">{item.title}</h1>
      <p className="mt-2 text-base text-gray-600 max-w-2xl">{item.excerpt}</p>

      {item.caseStudy ? (
        <div className="mt-10">
          <CaseStudy item={item.caseStudy} />
          {/* One pinned section with GSAP ScrollTrigger (respects reduced motion) */}
          <div className="mt-16">
            <PinnedShowcase />
          </div>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {(item.images ?? [{ src: item.coverImage, alt: item.title, width: 1600, height: 900 }]).map((img) => (
            <div key={img.src} className="overflow-hidden rounded-lg border">
              <Image src={img.src} alt={img.alt} width={img.width} height={img.height} className="w-full h-auto object-cover" />
            </div>
          ))}
        </div>
      )}
    </main>
  );
}
