"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { useState } from "react";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

export default function MagneticButton({
  children,
  className,
  strength = 0.18,
}: MagneticButtonProps) {
  const shouldReduceMotion = useReducedMotion();
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const reset = () => setOffset({ x: 0, y: 0 });

  return (
    <motion.span
      className={className}
      animate={shouldReduceMotion ? undefined : offset}
      transition={{ type: "spring", stiffness: 220, damping: 18, mass: 0.35 }}
      onPointerMove={(event) => {
        if (shouldReduceMotion || event.pointerType !== "mouse") return;

        const rect = event.currentTarget.getBoundingClientRect();
        setOffset({
          x: (event.clientX - rect.left - rect.width / 2) * strength,
          y: (event.clientY - rect.top - rect.height / 2) * strength,
        });
      }}
      onPointerLeave={reset}
      onBlur={reset}
    >
      {children}
    </motion.span>
  );
}

