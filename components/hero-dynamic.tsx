"use client";

import { motion } from "framer-motion";
import { useMemo, useState, useEffect } from "react";

export default function HeroDynamic() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const isLowEndDevice =
    typeof navigator !== "undefined" &&
    navigator.hardwareConcurrency &&
    navigator.hardwareConcurrency <= 4;

  // Deterministic seeded PRNG to avoid server/client hydration mismatch
  const particles = useMemo(() => {
    // mulberry32: deterministic 32-bit PRNG
    const seed = (s: number) => {
      return () => {
        s |= 0;
        s = (s + 0x6d2b79f5) | 0;
        let t = Math.imul(s ^ (s >>> 15), 1 | s);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
      };
    };
    const rand = seed(42);
    return Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: rand() * 1000,
      y: rand() * 1000,
      scale: rand() * 1.5,
      targetY: rand() * 1000,
      duration: rand() * 5 + 5,
    }));
  }, []);

  if (!isMounted) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* Animated Background — particles */}
      <div className="absolute inset-0">
        {particles.map((p) => (
          <motion.div
            key={p.id}
            className="absolute w-1 h-1 bg-purple-400/60 dark:bg-purple-500/40 rounded-full will-change-transform"
            initial={{ x: p.x, y: p.y, scale: p.scale }}
            animate={{ y: [null, p.targetY], opacity: [0, 1, 0] }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Floating Skills */}
      {!isLowEndDevice && (
        <div className="absolute inset-0 z-20 pointer-events-none">
          {[
            // Left Frame (Image Support)
            {
              name: "Node.js",
              icon: "📗",
              top: "18%",
              left: "52%",
              delay: 1,
            },
            {
              name: "Next.js",
              icon: "▲",
              top: "35%",
              left: "46%",
              delay: 2,
            },
            {
              name: "MongoDB",
              icon: "🍃",
              top: "52%",
              left: "50%",
              delay: 3,
            },
            { name: "Git", icon: "🔧", top: "72%", left: "45%", delay: 4 },

            // Right Frame (Power Stack)
            {
              name: "React",
              icon: "⚛️",
              top: "12%",
              left: "86%",
              delay: 0,
            },
            {
              name: "TypeScript",
              icon: "TS",
              top: "32%",
              left: "85%",
              delay: 1.5,
            },
            {
              name: "Docker",
              icon: "🐳",
              top: "55%",
              left: "90%",
              delay: 2.5,
            },
            {
              name: "AWS",
              icon: "☁️",
              top: "72%",
              left: "88%",
              delay: 3.5,
            },
          ].map((skill, i) => (
            <motion.div
              key={skill.name}
              className="
      absolute hidden lg:flex items-center gap-2
      px-3 py-2
      bg-purple-500/10 dark:bg-purple-500/20
      backdrop-blur-md
      border border-purple-500/20 dark:border-purple-500/30
      rounded-full shadow-md
      pointer-events-auto cursor-default
      will-change-transform
    "
              style={{
                top: skill.top,
                left: skill.left,
              }}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -10, 0],
              }}
              transition={{
                opacity: { duration: 0.4, delay: 0.3 + i * 0.1 },
                scale: { duration: 0.4, delay: 0.3 + i * 0.1 },
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: skill.delay,
                },
              }}
              whileHover={{
                scale: 1.15,
                boxShadow: "0 0 20px rgba(168,85,247,0.5)",
                backgroundColor: "rgba(168,85,247,0.28)",
                zIndex: 50,
              }}
            >
              <span className="text-lg">{skill.icon}</span>

              <span className="text-xs font-semibold text-slate-700 dark:text-slate-200 whitespace-nowrap">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}
