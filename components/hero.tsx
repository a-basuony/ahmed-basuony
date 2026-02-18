"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { Download, ArrowDown } from "lucide-react";
import { socialLinks } from "@/lib/social-links";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  // Throttle mousemove with RAF to avoid excessive re-renders
  const rafRef = useRef<number>(0);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        setMousePosition({
          x: (e.clientX / window.innerWidth - 0.5) * 20,
          y: (e.clientY / window.innerHeight - 0.5) * 20,
        });
        rafRef.current = 0;
      });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="About Me"
      className="relative min-h-screen overflow-hidden flex items-center bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/20 dark:bg-gradient-to-br dark:from-slate-950 dark:via-purple-950/20 dark:to-slate-900"
    >
      {/* Animated Background — particles memoized to avoid re-creation */}
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

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(139,92,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.08)_1px,transparent_1px)] bg-size-[100px_100px] mask-[radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      {/* Background Image Layer - Right Side */}
      <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[55%] z-0 opacity-40 pointer-events-none">
        <div className="relative w-full h-full">
          <Image
            src="/images/ahmed33.png"
            alt=""
            fill
            className="object-cover object-[100%_0%]"
            priority
            sizes="(max-width: 1024px) 100vw, 55vw"
          />
          {/* Gradient overlay for smooth blending with background */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-transparent to-transparent dark:from-slate-950 dark:via-transparent dark:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50/80 dark:to-slate-900/80" />
        </div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content — no motion wrapper to ensure LCP text is visible on first paint */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-block mt-4"
            >
              <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/40 border border-purple-300 dark:border-purple-500/50 rounded-full text-purple-700 dark:text-purple-300 text-sm font-medium backdrop-blur-sm">
                ✨ Available for freelance
              </span>
            </motion.div>

            {/* Main Heading — static render for instant LCP */}
            <div className="space-y-4">
              <h1 className="text-6xl lg:text-7xl font-bold text-slate-900 dark:text-slate-50 leading-tight">
                Hi, I'm{" "}
                <span
                  className="bg-linear-to-r from-purple-600 via-pink-600 to-purple-600 dark:from-purple-400 dark:via-pink-400 dark:to-purple-400 bg-clip-text text-transparent bg-size-[200%_auto] animate-gradient"
                  style={{ fontFamily: '"Saira Stencil One", sans-serif' }}
                >
                  Ahmed Basuony
                </span>
              </h1>

              <h2 className="text-3xl lg:text-4xl font-semibold text-purple-700 dark:text-purple-300">
                Full-Stack Developer <br></br> (MERN Stack)
              </h2>
            </div>

            {/* Description */}
            <motion.p
              className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              Full-Stack Developer (MERN Stack) specializing in{" "}
              <strong className="text-slate-900 dark:text-slate-50">
                MongoDB
              </strong>
              ,{" "}
              <strong className="text-slate-900 dark:text-slate-50">
                Express.js
              </strong>
              ,{" "}
              <strong className="text-slate-900 dark:text-slate-50">
                React
              </strong>
              , and{" "}
              <strong className="text-slate-900 dark:text-slate-50">
                Node.js
              </strong>
              . I build modern, scalable web applications and RESTful APIs with
              a strong focus on performance, clean architecture, and user
              experience.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {/* Download Resume Button */}
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 25px rgba(168, 85, 247, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer px-8 py-4 bg-linear-to-r from-purple-600 to-pink-600 dark:from-purple-500 dark:to-pink-500 text-white font-semibold rounded-full shadow-lg hover:shadow-purple-500/50 transition-all flex items-center gap-2"
              >
                <Link
                  target="_blank"
                  href="https://drive.google.com/file/d/1zEyfK6jc3fCPZ4fKJPgDhcWT3t1Kb-4Y/view?usp=sharing"
                  className="flex items-center gap-2"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </Link>
              </motion.button>

              {/* Contact Button */}
              <motion.button
                onClick={scrollToContact}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer px-8 py-4 bg-slate-200 dark:bg-slate-800 backdrop-blur-sm border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-slate-100 font-semibold rounded-full hover:bg-slate-300 dark:hover:bg-slate-700 transition-all flex items-center gap-2"
              >
                <ArrowDown className="w-5 h-5" />
                Let's Talk
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              {socialLinks
                .filter((link) => link.name !== "WhatsApp")
                .map((social, i) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-slate-200 dark:bg-slate-800 backdrop-blur-sm border border-slate-300 dark:border-slate-700 rounded-full flex items-center justify-center hover:bg-purple-600 hover:border-purple-600 dark:hover:bg-purple-500/30 dark:hover:border-purple-500/50 transition-all group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + i * 0.1 }}
                  >
                    <span
                      className={`text-xl group-hover:scale-110 transition-transform ${social.textClass}`}
                    >
                      {social.icon}
                    </span>
                  </motion.a>
                ))}
            </motion.div>
          </div>

          {/* Right Content - 3D Computer */}
          {/* Floating Skills (Clean & Professional) */}
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
      </div>

      {/* Scroll Indicator — hidden on mobile to avoid overlapping social links */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden sm:block"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-slate-400 dark:border-slate-600 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1 h-3 bg-slate-600 dark:bg-slate-400 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
