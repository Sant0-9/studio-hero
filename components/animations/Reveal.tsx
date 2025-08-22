"use client";

import { Slot } from "@radix-ui/react-slot";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface RevealProps {
  children: React.ReactNode;
  asChild?: boolean;
  disable?: boolean;
}

export function Reveal({ children, asChild, disable }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const Comp: any = asChild ? Slot : motion.div;

  if (disable) return <>{children}</>;

  return (
    <Comp
      ref={ref}
      initial={{ opacity: 0, y: 8 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </Comp>
  );
}
