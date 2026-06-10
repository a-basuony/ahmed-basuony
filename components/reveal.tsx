"use client";

import { motion, useReducedMotion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
} & Omit<HTMLMotionProps<"div">, "children" | "className">;

export default function Reveal({
  children,
  delay = 0,
  className,
  ...props
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
      whileInView={
        shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
      }
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
