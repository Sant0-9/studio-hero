"use client";

import { useEffect, useState } from "react";

export function Toaster() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return <div id="toast-root" className="fixed bottom-4 right-4 z-50" aria-live="polite" />;
}
