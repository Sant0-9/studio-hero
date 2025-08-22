"use client";

import Lottie, { type LottieComponentProps } from "lottie-react";
import animationData from "@/lib/lottie/hero-dot.json";
import { useReducedMotion } from "framer-motion";

export function MicroLottie() {
  const reduce = useReducedMotion();
  return (
    <div aria-hidden className="inline-block align-middle">
      <Lottie
        animationData={animationData as LottieComponentProps["animationData"]}
        loop={!reduce}
        autoplay={!reduce}
        style={{ width: 24, height: 24 }}
      />
    </div>
  );
}
