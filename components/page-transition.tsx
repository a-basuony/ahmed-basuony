"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type PageTransitionProps = {
  children: ReactNode;
};

const transition = {
  duration: 0.32,
  ease: [0.22, 1, 0.36, 1],
} as const;

export default function PageTransition({ children }: PageTransitionProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        shouldReduceMotion
          ? { opacity: 1 }
          : { opacity: 0, y: 10, filter: "blur(4px)" }
      }
      animate={
        shouldReduceMotion
          ? { opacity: 1 }
          : { opacity: 1, y: 0, filter: "blur(0px)" }
      }
      exit={
        shouldReduceMotion
          ? { opacity: 1 }
          : { opacity: 0, y: -8, filter: "blur(3px)" }
      }
      transition={shouldReduceMotion ? { duration: 0 } : transition}
    >
      {children}
    </motion.div>
  );
}
