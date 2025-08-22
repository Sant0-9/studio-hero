"use client";

import { PageTransitionProvider } from "@/components/animations/PageTransitionProvider";

export function Providers({ children }: { children: React.ReactNode }) {
  return <PageTransitionProvider>{children}</PageTransitionProvider>;
}
