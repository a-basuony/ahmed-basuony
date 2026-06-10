"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
};

export default function TiltCard({ children, className }: TiltCardProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.article
      layout={!shouldReduceMotion}
      className={className}
      whileHover={shouldReduceMotion ? undefined : { y: -3 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      {children}
    </motion.article>
  );
}
