"use client";

import { useMotionValue, useSpring, useTransform, motion, useReducedMotion } from "framer-motion";
import { useRef } from "react";

interface TiltProps {
  children: React.ReactNode;
  max?: number; // degrees
  scale?: number;
}

export function Tilt({ children, max = 8, scale = 1.02 }: TiltProps) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [max, -max]), { stiffness: 200, damping: 20, mass: 0.1 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-max, max]), { stiffness: 200, damping: 20, mass: 0.1 });

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5; // -0.5..0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  }
  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={reduce ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }}
      whileHover={reduce ? undefined : { scale }}
    >
      {children}
    </motion.div>
  );
}
