import Link from "next/link";
import Image from "next/image";
import { work } from "@/lib/content";

export const metadata = {
  title: "Work",
} as const;

export default function WorkPage() {
  return (
    <main className="container mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold">All work</h1>
      <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {work.map((item) => (
          <li key={item.slug} className="group">
            <Link href={`/work/${item.slug}`} className="block focus:outline-none focus-visible:ring-2 rounded-md">
              <div className="overflow-hidden rounded-lg border bg-card">
                <Image
                  src={item.coverImage}
                  alt={`${item.title} cover`}
                  width={800}
                  height={600}
                  className="aspect-[4/3] w-full object-cover transition-transform group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-3">
                <h2 className="text-lg font-medium">{item.title}</h2>
                <p className="text-sm text-muted-foreground">{item.excerpt}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
