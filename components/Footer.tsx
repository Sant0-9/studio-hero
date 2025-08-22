import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-24 border-t">
      <div className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-600">© {new Date().getFullYear()} Studio Hero. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="https://github.com" aria-label="GitHub" className="opacity-70 hover:opacity-100">
            <img alt="GitHub" src="/logos/github.svg" width={20} height={20} />
          </Link>
          <Link href="https://twitter.com" aria-label="Twitter" className="opacity-70 hover:opacity-100">
            <img alt="Twitter" src="/logos/twitter.svg" width={20} height={20} />
          </Link>
          <Link href="https://dribbble.com" aria-label="Dribbble" className="opacity-70 hover:opacity-100">
            <img alt="Dribbble" src="/logos/dribbble.svg" width={20} height={20} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
