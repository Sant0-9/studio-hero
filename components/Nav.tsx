"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Magnetic } from "@/components/Magnetic";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          Studio Hero
        </Link>
        <nav className="flex items-center gap-4">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm ${isActive ? "font-medium" : "text-gray-600 hover:text-gray-900"}`}
              >
                {link.label}
              </Link>
            );
          })}
          <Magnetic>
            <Link
              href="/contact"
              className="ml-2 inline-flex items-center rounded-full bg-black text-white px-3 py-1.5 text-xs font-medium"
            >
              Hire us
            </Link>
          </Magnetic>
        </nav>
      </div>
    </header>
  );
}
