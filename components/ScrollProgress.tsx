"use client";

import { useEffect } from "react";

export function ScrollProgress() {
  useEffect(() => {
    const el = document.getElementById("scroll-progress");
    if (!el) return;
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const p = docHeight > 0 ? Math.min(1, scrollTop / docHeight) : 0;
      el.style.width = `${p * 100}%`;
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);
  return null;
}
