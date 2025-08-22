import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
}

export function ProjectCard({ slug, title, excerpt, image }: ProjectCardProps) {
  return (
    <Link href={`/work/${slug}`} className="block focus:outline-none focus-visible:ring-2 rounded-md">
      <div className="overflow-hidden rounded-lg border">
        <Image src={image} alt={`${title} cover`} width={800} height={600} className="aspect-[4/3] w-full object-cover" />
      </div>
      <div className="mt-3">
        <h3 className="text-lg font-medium">{title}</h3>
        <p className="text-sm text-gray-600">{excerpt}</p>
      </div>
    </Link>
  );
}
