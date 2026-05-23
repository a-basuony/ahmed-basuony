"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useState } from "react";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export default function TiltCard({ children, className, delay = 0 }: TiltCardProps) {
  const shouldReduceMotion = useReducedMotion();
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const reset = () => setRotate({ x: 0, y: 0 });

  return (
    <motion.article
      layout
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 44 }}
      whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.45, ease: "easeOut" }}
      style={{ transformStyle: "preserve-3d" }}
      animate={shouldReduceMotion ? undefined : rotate}
      onPointerMove={(event) => {
        if (shouldReduceMotion || event.pointerType !== "mouse") return;
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        setRotate({
          x: -((y / rect.height - 0.5) * 3),
          y: (x / rect.width - 0.5) * 3,
        });
      }}
      onPointerLeave={reset}
      onBlur={reset}
    >
      {children}
    </motion.article>
  );
}

