"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { socialLinks } from "@/lib/social-links";
import MagneticButton from "@/components/magnetic-button";

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
      id="about"
      className="relative flex min-h-screen items-center overflow-hidden bg-background"
    >
      <HeroDynamic />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_35%,rgb(var(--brand-primary-rgb)_/_0.20),transparent_35%),radial-gradient(circle_at_90%_60%,rgb(var(--brand-accent-rgb)_/_0.14),transparent_30%)]" />
      <div className="premium-grid absolute inset-0" />

      <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-0 w-full opacity-40 sm:opacity-60 lg:w-[55%] lg:opacity-40">
        <div className="relative h-full w-full">
          <Image
            src="/images/ahmed33.png"
            alt=""
            fill
            className="block object-cover object-[20%_0%] md:object-[100%_60%] lg:hidden"
            priority
            sizes="70vw"
            quality={85}
          />
          <Image
            src="/images/ahmed.png"
            alt=""
            fill
            className="hidden object-cover object-[100%_0%] lg:block"
            priority
            sizes="55vw"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80" />
        </div>
      </div>

      <div className="container z-10 mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="mt-4 inline-block animate-fade-in-up">
              <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary backdrop-blur-sm">
                Available for freelance and remote roles
              </span>
            </div>

            <div className="space-y-4">
              <h1 className="text-6xl font-bold leading-tight text-foreground lg:text-7xl">
                Hi, I&apos;m{" "}
                <span
                  className="animate-gradient bg-[linear-gradient(90deg,rgb(var(--brand-primary-rgb)),rgb(var(--brand-accent-rgb)),rgb(var(--brand-primary-rgb)))] bg-clip-text bg-size-[200%_auto] text-transparent"
                  style={{ fontFamily: '"Saira Stencil One", sans-serif' }}
                >
                  Ahmed Basuony
                </span>
              </h1>

              <h2 className="text-3xl font-semibold text-primary lg:text-4xl">
                Full-Stack MERN Developer
              </h2>
            </div>

            <p className="max-w-xl animate-fade-in-up text-lg leading-relaxed text-muted-foreground delay-100">
              Full-Stack MERN Developer specializing in{" "}
              <strong className="text-foreground">MongoDB</strong>,{" "}
              <strong className="text-foreground">Express.js</strong>,{" "}
              <strong className="text-foreground">React</strong>, and{" "}
              <strong className="text-foreground">Node.js</strong>. I build
              complete web applications, RESTful APIs, dashboards, and
              production-ready user experiences.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-200">
              <MagneticButton className="inline-flex">
                <a
                  target="_blank"
                  href="https://drive.google.com/file/d/1pDZUrN0vgukGKL-uaD6ttyO30-ajXXN4/view"
                  rel="noopener noreferrer"
                  className="flex cursor-pointer items-center gap-2 rounded-full bg-[linear-gradient(135deg,rgb(var(--brand-primary-rgb)),rgb(var(--brand-accent-rgb)))] px-8 py-4 font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:shadow-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/40"
                >
                  <Download className="h-5 w-5" />
                  Download Resume
                </a>
              </MagneticButton>

              <MagneticButton className="inline-flex">
                <a
                  href="#projects"
                  className="flex cursor-pointer items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-8 py-4 font-semibold text-primary transition-all hover:bg-primary/15 focus:outline-none focus:ring-2 focus:ring-primary/30"
                >
                  View Projects
                </a>
              </MagneticButton>

              <MagneticButton className="inline-flex">
                <button
                  type="button"
                  onClick={scrollToContact}
                  className="flex cursor-pointer items-center gap-2 rounded-full border border-border bg-secondary px-8 py-4 font-semibold text-secondary-foreground backdrop-blur-sm transition-all hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-primary/30"
                >
                  <ArrowDown className="h-5 w-5" />
                  Let&apos;s Talk
                </button>
              </MagneticButton>
            </div>

            <div className="mb-6 flex flex-wrap justify-center gap-3 animate-fade-in-up delay-300 sm:mb-0 sm:justify-start md:gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="group flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/80 backdrop-blur-sm transition-all hover:border-primary/50 hover:bg-primary/10 sm:h-12 sm:w-12"
                >
                  <span
                    className={`text-lg transition-transform group-hover:scale-110 sm:text-xl ${social.textClass}`}
                  >
                    {social.icon}
                  </span>
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 sm:block"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex h-10 w-6 justify-center rounded-full border-2 border-muted-foreground/60 pt-2"
        >
          <motion.div className="h-3 w-1 rounded-full bg-muted-foreground" />
        </motion.div>
      </motion.div>
    </section>
  );
}
