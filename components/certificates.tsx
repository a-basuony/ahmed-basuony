"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Award,
  Building2,
  Calendar,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

const certificates = [
  {
    title: "Full-Stack Development Diploma",
    issuer: "YAT",
    date: "Oct 2020",
    description:
      "Hands-on training in Full-Stack development using modern web technologies",
    link: "https://drive.google.com/file/d/1ei8J4ZojIV4tvOXlTm0y6Un5pujaeNWZ/view?usp=sharing",
    accent: "from-primary to-accent",
    image: "/images/yat.png",
  },
  {
    title: "Introduction to Computer Science",
    issuer: "CS50",
    date: "Jun 2021",
    description:
      "Fundamental concepts of computer science with practical exercises",
    link: "https://drive.google.com/file/d/1xUH1EmXhZnTFXR46C72FnQtJrWh-Gr40/view?usp=sharing",
    accent: "from-primary to-accent",
    image: "/images/cs50.png",
  },
  {
    title: "Foundations of Computer Science",
    issuer: "Coursera",
    date: "Sep 2022",
    description:
      "Comprehensive training in computer science fundamentals with practical projects",
    link: "https://drive.google.com/file/d/1LBqm1yl18qW3NI3TF8emlEItcGSGvS_X/view?usp=sharing",
    accent: "from-accent to-primary",
    image: "/images/coursera.png",
  },
  {
    title: "Full-Stack Development Advanced",
    issuer: "YAT",
    date: "Nov 2021",
    description:
      "Advanced Full-Stack training with hands-on projects and modern frameworks",
    link: "https://drive.google.com/file/d/1PlYaDwwJ_NNdhq1-CSnZ_r9SXJCK44jA/view?usp=sharing",
    accent: "from-accent to-primary",
    image: "/images/yat2.png",
  },
  {
    title: "Web Development Bootcamp",
    issuer: "Egypt FWD",
    date: "Feb 2022",
    description:
      "Hands-on web development projects using HTML, CSS, JS, Web Development Diploma and modern frameworks",
    link: "https://drive.google.com/file/d/1lv9VW-1HRpYtQW_tR9XSTj1FpVPcZ-Lm/view?usp=sharing",
    accent: "from-primary to-accent",
    image: "/images/fwd.png",
  },
  {
    title: "Git & GitHub",
    issuer: "Almadrsa",
    date: "May 2022",
    description:
      "Practical training on version control using Git and GitHub workflows",
    link: "https://drive.google.com/file/d/1HeDI07qKS3vEhJfSq9_tto2vrWb5bXpO/view?usp=sharing",
    accent: "from-primary to-accent",
    image: "/images/git,github.png",
  },
  {
    title: "HTML, CSS, and JavaScript",
    issuer: "Udemy",
    date: "Jul 2022",
    description:
      "Hands-on training in web fundamentals: HTML, CSS, and JavaScript projects",
    link: "https://drive.google.com/file/d/19sfneSztnMgBrHyBnYeJGg0YS6GlJw6h/view?usp=sharing",
    accent: "from-accent to-primary",
    image: "/images/html,css.jpg",
  },
  {
    title: "JavaScript Advanced",
    issuer: "Udemy",
    date: "Sep 2022",
    description:
      "Advanced JavaScript topics including ES6+, DOM manipulation, and projects",
    link: "https://drive.google.com/file/d/1wxSuSC-z5CxGglQcU11Ihkpn80I8CSdt/view?usp=sharing",
    accent: "from-accent to-primary",
    image: "/images/jsguide.jpg",
  },
  {
    title: "Programming Foundations: Beyond the Fundamentals",
    issuer: "LinkedIn",
    date: "Dec 2022",
    description:
      "Professional training in programming fundamentals with hands-on exercises",
    link: "https://drive.google.com/file/d/1FsKK06DAzPp9m-mAxu4UNs6Ly5Os7Ajf/view?usp=sharing",
    accent: "from-primary to-accent",
    image: "/images/linkedin2.png",
  },
  {
    title: "Node.js, Express, MongoDB The Complete BootCamp",
    issuer: "Udemy",
    date: "Jan 2023",
    description:
      "Hands-on Node.js, Express, MongoDB The Complete BootCamp training: building backend applications and RESTful APIs",
    link: "https://drive.google.com/file/d/1dtiJcckVph5PrVG7M37VpvYIMPxPQFGO/view?usp=sharing",
    accent: "from-primary to-accent",
    image: "/images/node-udemy.jpg",
  },
  {
    title: "React & TypeScript The Practical Guide",
    issuer: "Udemy",
    date: "Mar 2023",
    description:
      "Building scalable React applications with TypeScript and modern best practices",
    link: "https://drive.google.com/file/d/1oWci0ZNXg3InZY1H5GUEDTbWz1JP3JVQ/view?usp=sharing",
    accent: "from-accent to-primary",
    image: "/images/react-typescript.jpg",
  },
  {
    title: "React The Complete Guide",
    issuer: "Udemy",
    date: "Apr 2023",
    description:
      "Comprehensive React training including hooks, context, and projects",
    link: "https://drive.google.com/file/d/1jN6kYsxfai-jR9fxdOgvskHFiuN49zFW/view?usp=sharing",
    accent: "from-accent to-primary",
    image: "/images/react-guide.jpg",
  },
  {
    title: "React Native Development & The Practical Guide",
    issuer: "Udemy",
    date: "May 2023",
    description:
      "Hands-on mobile development with React Native and Expo projects",
    link: "https://drive.google.com/file/d/1R9yogXoI9j0uy6mQZ_orz9xyEiyQADe2/view?usp=sharing",
    accent: "from-primary to-accent",
    image: "/images/react-native.jpg",
  },
  {
    title:
      "Node.js Advanced & The Complete Guide (MVC, REST API, JWT, MongoDB, GraphQL)",
    issuer: "Udemy",
    date: "Jun 2023",
    description:
      "Advanced Node.js topics including Express, middleware, and API best practices",
    link: "https://drive.google.com/file/d/1ZDmV5y-_2hkJfR53lozHGrhPvDETOfxt/view?usp=sharing",
    accent: "from-primary to-accent",
    image: "/images/nodejs.jpg",
  },
  {
    title: "Programming Fundamentals",
    issuer: "LinkedIn",
    date: "Aug 2023",
    description:
      "Hands-on training in programming fundamentals with exercises and projects",
    link: "https://drive.google.com/file/d/1aYoK7-quhpPKpIjfte3amdgQ9UNTIexA/view?usp=sharing",
    accent: "from-accent to-primary",
    image: "/images/linkedin1.png",
  },
] as const;

const INITIAL_VISIBLE_COUNT = 6;
const LOAD_STEP = 6;

export default function Certificates() {
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);
  const containerRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const displayedCertificates = certificates.slice(0, visibleCount);
  const remainingCount = Math.max(certificates.length - visibleCount, 0);

  const showMore = () => {
    setVisibleCount((current) =>
      Math.min(current + LOAD_STEP, certificates.length),
    );
  };

  const showLess = () => {
    setVisibleCount(INITIAL_VISIBLE_COUNT);
    containerRef.current?.scrollIntoView({
      behavior: shouldReduceMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="certificates"
      ref={containerRef}
      className="relative overflow-hidden bg-background py-20 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_15%,rgb(var(--brand-primary-rgb)_/_0.10),transparent_28%),radial-gradient(circle_at_84%_72%,rgb(var(--brand-accent-rgb)_/_0.10),transparent_30%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgb(var(--brand-primary-rgb)_/_0.045)_1px,transparent_1px),linear-gradient(90deg,rgb(var(--brand-primary-rgb)_/_0.045)_1px,transparent_1px)] bg-size-[72px_72px] opacity-50" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          className="mb-14 max-w-3xl"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Certificates
          </p>
          <h2 className="text-4xl font-black tracking-tight text-foreground md:text-5xl">
            Professional learning proof across frontend, backend, and CS.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            A curated record of structured training, practical bootcamps, and
            role-focused courses that support the projects in this portfolio.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {displayedCertificates.map((cert, index) => (
              <motion.article
                key={cert.title}
                layout
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                whileInView={
                  shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
                }
                exit={
                  shouldReduceMotion
                    ? undefined
                    : { opacity: 0, y: 12, transition: { duration: 0.18 } }
                }
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: (index % 6) * 0.04 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-lg shadow-primary/5 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-muted">
                  <Image
                    src={cert.image}
                    alt={`${cert.title} certificate`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${cert.accent} opacity-35 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-45`}
                  />
                  <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/25 bg-black/25 text-white shadow-lg backdrop-blur">
                    <Award className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div className="absolute bottom-4 left-4 rounded-full border border-white/25 bg-black/30 px-3 py-1.5 text-xs font-bold text-white shadow-lg backdrop-blur">
                    {cert.date}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-5">
                  <div className="mb-3 flex flex-wrap items-center gap-2 text-xs font-semibold text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-primary">
                      <Building2 className="h-3.5 w-3.5" aria-hidden="true" />
                      {cert.issuer}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-2.5 py-1">
                      <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                      {cert.date}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold leading-snug text-foreground">
                    {cert.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {cert.description}
                  </p>

                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-5 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r ${cert.accent} px-4 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/15 transition-all duration-300 hover:shadow-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/35`}
                    aria-label={`View ${cert.title} certificate`}
                  >
                    View Certificate
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          className="mt-12 flex flex-wrap justify-center gap-4"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {visibleCount < certificates.length && (
            <button
              type="button"
              onClick={showMore}
              className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:shadow-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/35"
              aria-label={`Show more certificates, ${remainingCount} remaining`}
            >
              Show More ({remainingCount} more)
              <ChevronDown className="h-4 w-4" aria-hidden="true" />
            </button>
          )}

          {visibleCount > INITIAL_VISIBLE_COUNT && (
            <button
              type="button"
              onClick={showLess}
              className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground shadow-sm transition-all hover:border-primary/35 hover:bg-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/25"
              aria-label="Show fewer certificates"
            >
              Show Less
              <ChevronUp className="h-4 w-4" aria-hidden="true" />
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
}
