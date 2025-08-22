"use client";

import { Slot } from "@radix-ui/react-slot";
import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";
import { useRef } from "react";

interface RevealProps {
  children: React.ReactNode;
  asChild?: boolean;
  disable?: boolean;
}

export const STAGGER_VARIANTS: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.05,
    },
  },
};

export const ITEM_VARIANTS = (reduced: boolean): Variants => ({
  hidden: reduced ? { opacity: 0 } : { opacity: 0, y: 8 },
  show: reduced
    ? { opacity: 1, transition: { duration: 0 } }
    : { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
});

export function Stagger({ children, asChild }: { children: React.ReactNode; asChild?: boolean }) {
  const Comp = (asChild ? (Slot as unknown as typeof motion.div) : motion.div);
  return (
    <Comp variants={STAGGER_VARIANTS} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-80px" }}>
      {children}
    </Comp>
  );
}

export function Item({ children, asChild }: { children: React.ReactNode; asChild?: boolean }) {
  const reduce = !!useReducedMotion();
  const Comp = (asChild ? (Slot as unknown as typeof motion.span) : motion.span);
  return <Comp variants={ITEM_VARIANTS(reduce)}>{children}</Comp>;
}

export function Reveal({ children, asChild, disable }: RevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = !!useReducedMotion();
  const Comp = (asChild ? (Slot as unknown as typeof motion.div) : motion.div);

  if (disable) return <>{children}</>;

  return (
    <Comp
      ref={ref}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
      animate={inView ? (reduce ? { opacity: 1, transition: { duration: 0 } } : { opacity: 1, y: 0 }) : {}}
      transition={reduce ? undefined : { duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </Comp>
  );
}
