"use client";

import { useEffect, useState, useRef } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function GoTop() {
  const [isVisible, setIsVisible] = useState(false);
  const rafId = useRef(0);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
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

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="cursor-pointer fixed md:bottom-24 bottom-42 right-8 z-50 p-3 rounded-full bg-linear-to-br from-purple-600 to-blue-600 text-white shadow-2xl transition-all duration-300 hover:shadow-purple-500/50 group"
          title="Go to Top"
          aria-label="Go to Top"
        >
          <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
