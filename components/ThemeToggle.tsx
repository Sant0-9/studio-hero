"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useTheme } from "@/lib/theme";

export function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const current = theme ?? resolvedTheme;
  const isDark = current === "dark";

  const toggle = () => setTheme(isDark ? "light" : "dark");

  const thumbLeft = 4; // px
  const thumbRight = 4; // px

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={isDark}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="relative inline-flex h-7 w-12 items-center rounded-full border px-0 bg-white text-black dark:bg-zinc-900 dark:text-white"
    >
      {reduce ? (
        <span
          className="absolute h-5 w-5 rounded-full bg-black dark:bg-white"
          style={{
            left: isDark ? undefined : thumbLeft,
            right: isDark ? thumbRight : undefined,
          }}
        />
      ) : (
        <motion.span
          layout
          layoutId="theme-thumb"
          transition={{ type: "spring", stiffness: 500, damping: 40, mass: 0.2 }}
          className="absolute h-5 w-5 rounded-full bg-black dark:bg-white"
          style={{
            left: isDark ? undefined : thumbLeft,
            right: isDark ? thumbRight : undefined,
          }}
        />
      )}
      <span className="sr-only">{isDark ? "Dark" : "Light"}</span>
    </button>
  );
}
