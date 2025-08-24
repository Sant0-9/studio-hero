"use client";

import * as React from "react";

// Minimal local theme provider that mimics next-themes API without dependency
// Persists theme to localStorage under 'theme' and toggles 'class' on <html>.

const STORAGE_KEY = "theme";

export type Theme = "dark"; // Force dark-only

type ThemeContextValue = {
  theme?: Theme;
  resolvedTheme?: "light" | "dark";
  setTheme: (theme: Theme | "light" | "dark") => void;
};

const ThemeContext = React.createContext<ThemeContextValue | undefined>(undefined);

function getSystemTheme(): "light" | "dark" {
  if (typeof window === "undefined") return "light";
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyHtmlAttrs(next: "light" | "dark") {
  if (typeof document === "undefined") return;
  const root = document.documentElement;
  root.classList.toggle("dark", next === "dark");
  root.setAttribute("data-theme", next);
}

export function ThemeProvider({
  children,
  attribute = "class",
  defaultTheme = "dark",
  enableSystem = false,
}: {
  children: React.ReactNode;
  attribute?: string; // kept for API compatibility
  defaultTheme?: Theme;
  enableSystem?: boolean;
}) {
  const [theme, setThemeState] = React.useState<Theme>(() => {
    if (typeof window === "undefined") return defaultTheme;
    const stored = window.localStorage.getItem(STORAGE_KEY) as Theme | null;
    return stored ?? defaultTheme;
  });

  const resolvedTheme = "dark" as const;

  React.useEffect(() => {
    if (typeof window === "undefined") return;
    window.localStorage.setItem(STORAGE_KEY, "dark");
    applyHtmlAttrs(resolvedTheme);
  }, [theme, resolvedTheme]);

  // No system syncing in dark-only mode

  const setTheme = React.useCallback((next: Theme | "light" | "dark") => {
    setThemeState(next as Theme);
  }, []);

  const value = React.useMemo<ThemeContextValue>(
    () => ({ theme, resolvedTheme, setTheme }),
    [theme, resolvedTheme, setTheme]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = React.useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
