"use client";

import { useEffect } from "react";

export function ScrollProgress() {
  useEffect(() => {
    const el = document.getElementById("scroll-progress");
    if (!el) return;
    el.style.background =
      "linear-gradient(90deg, rgba(147,51,234,0.9), rgba(59,130,246,0.9))"; // purple->blue
    el.style.boxShadow = "0 0 20px rgba(59,130,246,0.6), 0 0 40px rgba(147,51,234,0.4)";
    el.style.transition = "width 120ms ease-out";
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
