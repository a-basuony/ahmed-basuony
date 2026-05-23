"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

export default function GoTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const rafId = useRef(0);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setMounted(true);

    const onScroll = () => {
      if (rafId.current) return;
      rafId.current = requestAnimationFrame(() => {
        setIsVisible(window.pageYOffset > 400);
        rafId.current = 0;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="group fixed bottom-52 right-5 z-40 flex size-11 cursor-pointer items-center justify-center rounded-full bg-[linear-gradient(135deg,rgb(var(--brand-primary-rgb)),rgb(var(--brand-accent-rgb)))] text-primary-foreground shadow-xl shadow-primary/15 transition-all duration-300 hover:shadow-primary/30 sm:bottom-40 sm:right-6 sm:size-12"
          title="Go to Top"
          aria-label="Go to Top"
        >
          <ArrowUp className="size-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
        </motion.button>
      )}
    </AnimatePresence>,
    document.body,
  );
}
