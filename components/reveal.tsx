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
      initial={
        shouldReduceMotion ? false : { opacity: 0, y: 22, filter: "blur(6px)" }
      }
      whileInView={
        shouldReduceMotion
          ? undefined
          : { opacity: 1, y: 0, filter: "blur(0px)" }
      }
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
