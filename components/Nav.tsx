"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Magnetic } from "@/components/Magnetic";

const links = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b supports-[content-visibility:auto]:[content-visibility:auto]">
      <div className="container h-14 flex items-center justify-between">
        <Link href="/" className="font-semibold tracking-tight">
          Studio Hero
        </Link>
        <nav className="flex items-center gap-4" aria-label="Primary Navigation">
          <div className="relative flex items-center gap-4">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <div key={link.href} className="relative">
                  <Link
                    href={link.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`text-sm px-1 ${isActive ? "font-medium text-black" : "text-gray-600 hover:text-gray-900"}`}
                  >
                    {link.label}
                  </Link>
                  {isActive && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute left-0 right-0 -bottom-1 h-0.5 bg-black"
                    />
                  )}
                </div>
              );
            })}
          </div>
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
