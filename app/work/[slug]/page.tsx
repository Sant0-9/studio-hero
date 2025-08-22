import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getWorkBySlug } from "@/lib/content";
import { CaseStudy } from "@/components/case-study/CaseStudy";

export async function generateStaticParams() {
  return [{ slug: "aurora-brand" }, { slug: "copper-commerce" }];
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const item = getWorkBySlug(params.slug);
  return {
    title: item ? item.title : "Work",
    description: item ? item.excerpt : "Case study",
  };
}

export default function WorkDetail({ params }: { params: { slug: string } }) {
  const item = getWorkBySlug(params.slug);
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
