"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import PageTransition from "@/components/page-transition";

type PageTransitionProviderProps = {
  children: ReactNode;
};

export default function PageTransitionProvider({
  children,
}: PageTransitionProviderProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <PageTransition key={pathname}>{children}</PageTransition>
    </AnimatePresence>
  );
}
