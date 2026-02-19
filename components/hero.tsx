"use client";

import { motion } from "framer-motion";
import { Download, ArrowDown } from "lucide-react";
import { socialLinks } from "@/lib/social-links";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

const HeroDynamic = dynamic(() => import("@/components/hero-dynamic"), {
  ssr: false,
});

export default function HeroSection() {
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
      {/* Dynamic Background Elements (Deferred) */}
      <HeroDynamic />

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
            quality={85}
          />
          {/* Gradient overlay for smooth blending with background */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50 via-transparent to-transparent dark:from-slate-950 dark:via-transparent dark:to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50/80 dark:to-slate-900/80" />
        </div>
      </div>

      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content — optimized for LCP */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-block mt-4 animate-fade-in-up">
              <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900/40 border border-purple-300 dark:border-purple-500/50 rounded-full text-purple-700 dark:text-purple-300 text-sm font-medium backdrop-blur-sm">
                ✨ Available for freelance
              </span>
            </div>

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
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl animate-fade-in-up delay-100">
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
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-200">
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
                  href="https://drive.google.com/file/d/1-pNo9ZgmlLwov2GDJ8eKn6dDG_9LMDoP/view?usp=sharing"
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
            </div>

            {/* Social Links */}
            <div className="flex gap-6 animate-fade-in-up delay-300">
              {socialLinks
                .filter((link) => link.name !== "WhatsApp")
                .map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-slate-200 dark:bg-slate-800 backdrop-blur-sm border border-slate-300 dark:border-slate-700 rounded-full flex items-center justify-center hover:bg-purple-600 hover:border-purple-600 dark:hover:bg-purple-500/30 dark:hover:border-purple-500/50 transition-all group"
                  >
                    <span
                      className={`text-xl group-hover:scale-110 transition-transform ${social.textClass}`}
                    >
                      {social.icon}
                    </span>
                  </motion.a>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
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
