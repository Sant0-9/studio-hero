import Link from "next/link";
import { Github, Twitter, Dribbble } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-24 border-t">
      <div className="container py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Studio Hero</p>
        <nav className="flex items-center gap-4" aria-label="Footer Social Links">
          <Link href="https://github.com" aria-label="GitHub" className="opacity-70 hover:opacity-100">
            <Github size={18} />
          </Link>
          <Link href="https://twitter.com" aria-label="Twitter" className="opacity-70 hover:opacity-100">
            <Twitter size={18} />
          </Link>
          <Link href="https://dribbble.com" aria-label="Dribbble" className="opacity-70 hover:opacity-100">
            <Dribbble size={18} />
          </Link>
        </nav>
      </div>
    </footer>
  );
}
