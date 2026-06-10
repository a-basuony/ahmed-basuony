"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  MessageSquareText,
  Star,
} from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

const testimonials = [
  {
    name: "Faiza Abou Zaher",
    role: "Client",
    image: "/images/testimonials/faiza-abou-saher.png",
  },
  {
    name: "Rashad Al Rifai",
    role: "Client",
    image: "/images/testimonials/Rashad-al-rifai.png",
  },
  {
    name: "Shimaa Metwaly",
    role: "Client",
    image: "/images/testimonials/Shimaa-metwaly.png",
  },
  {
    name: "Youssef Boukhary",
    role: "Client",
    image: "/images/testimonials/Youssef-Boukhary.png",
  },
  {
    name: "Abnoub Talaat",
    role: "Client",
    image: "/images/testimonials/abnoub-talaat.png",
  },
  {
    name: "Eman Osama Mensiy",
    role: "Client",
    image: "/images/testimonials/eman-osama-mensiy.png",
  },
  {
    name: "Hanan Sayed",
    role: "Client",
    image: "/images/testimonials/hanan-sayed.png",
  },
  {
    name: "Hoda Yousry",
    role: "Client",
    image: "/images/testimonials/hoda-yousry.png",
  },
  {
    name: "Kirolls Nadi Ebrahim",
    role: "Client",
    image: "/images/testimonials/kirolls-nadi-ebrahim.png",
  },
  {
    name: "Mohamed Sameer",
    role: "Client",
    image: "/images/testimonials/mohamed-sameer.png",
  },
  {
    name: "Reda Salem",
    role: "Client",
    image: "/images/testimonials/reda-salem.png",
  },
  {
    name: "Wafaa Hamdy",
    role: "Client",
    image: "/images/testimonials/wafaa-hamdy.png",
  },
  {
    name: "Faize Abou Zaher",
    role: "Client",
    image: "/images/testimonials/Faize-Abou-zaher.png",
  },
] as const;

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const containerRef = useRef<HTMLElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const shouldReduceMotion = useReducedMotion();

  const testimonialCount = testimonials.length;

  const particles = useMemo(
    () =>
      Array.from({ length: 10 }, (_, index) => ({
        id: index,
        left: `${(index * 41) % 100}%`,
        top: `${(index * 59) % 100}%`,
        duration: 3 + (index % 4) * 0.65,
        delay: (index % 5) * 0.25,
      })),
    [],
  );

  const getCardStep = useCallback(() => {
    const container = scrollContainerRef.current;
    const firstCard = container?.querySelector<HTMLElement>(
      "[data-testimonial-card]",
    );

    if (!container || !firstCard) return 420;

    const gap = Number.parseFloat(getComputedStyle(container).columnGap || "24");
    return firstCard.offsetWidth + gap;
  }, []);

  const checkScrollPosition = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const { scrollLeft, scrollWidth, clientWidth } = container;
    const maxScrollLeft = scrollWidth - clientWidth;
    const cardStep = getCardStep();
    const index = Math.round(scrollLeft / cardStep);

    setIsAtStart(scrollLeft <= 8);
    setIsAtEnd(scrollLeft >= maxScrollLeft - 8);
    setCurrentIndex(Math.min(Math.max(index, 0), testimonialCount - 1));
  }, [getCardStep, testimonialCount]);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        checkScrollPosition();
        rafRef.current = 0;
      });
    };

    const timer = window.setTimeout(checkScrollPosition, 100);
    container.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", checkScrollPosition);

    return () => {
      container.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkScrollPosition);
      window.clearTimeout(timer);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [checkScrollPosition]);

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current;
    if (!container) return;

    container.scrollBy({
      left: direction === "left" ? -getCardStep() : getCardStep(),
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  };

  const scrollToIndex = (index: number) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    container.scrollTo({
      left: getCardStep() * index,
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  };

  return (
    <section
      id="testimonials"
      ref={containerRef}
      className="relative overflow-hidden bg-background py-20 md:py-28"
      aria-labelledby="testimonials-title"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgb(var(--brand-primary-rgb)_/_0.10),transparent_30%),radial-gradient(circle_at_82%_78%,rgb(var(--brand-accent-rgb)_/_0.10),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgb(var(--brand-primary-rgb)_/_0.045)_1px,transparent_1px),linear-gradient(90deg,rgb(var(--brand-primary-rgb)_/_0.045)_1px,transparent_1px)] bg-size-[72px_72px] opacity-45" />

      {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="pointer-events-none absolute h-1.5 w-1.5 rounded-full bg-primary/25"
            style={{ left: particle.left, top: particle.top }}
            animate={
              shouldReduceMotion
                ? { y: 0, opacity: 0.25 }
                : {
                    y: [0, -20, 0],
                    opacity: [0.15, 0.45, 0.15],
                  }
            }
            transition={{
              duration: particle.duration,
              delay: particle.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          className="mb-12 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="max-w-3xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Testimonials
            </p>
            <h2
              id="testimonials-title"
              className="text-4xl font-black tracking-tight text-foreground md:text-5xl"
            >
              Real comments captured from clients and collaborators.
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              These are screenshot-based recommendations, so the layout keeps
              the original comments clear, readable, and easy to inspect.
            </p>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-sm font-semibold text-primary shadow-sm backdrop-blur">
            <MessageSquareText className="h-4 w-4" aria-hidden="true" />
            {testimonialCount} comments
          </div>
        </motion.div>

        <div className="relative">
          <button
            type="button"
            onClick={() => scroll("left")}
            disabled={isAtStart}
            className="absolute left-0 top-1/2 z-20 hidden size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-lg transition disabled:cursor-not-allowed disabled:opacity-35 hover:border-primary/40 hover:text-primary md:flex"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => scroll("right")}
            disabled={isAtEnd}
            className="absolute right-0 top-1/2 z-20 hidden size-11 translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-lg transition disabled:cursor-not-allowed disabled:opacity-35 hover:border-primary/40 hover:text-primary md:flex"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            <AnimatePresence initial={false}>
              {testimonials.map((testimonial, index) => (
                <motion.article
                  key={testimonial.name}
                  data-testimonial-card
                  className="group relative w-[min(86vw,30rem)] shrink-0 snap-start overflow-hidden rounded-3xl border border-border bg-card shadow-lg shadow-primary/5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
                  initial={shouldReduceMotion ? false : { opacity: 0, x: 32 }}
                  whileInView={
                    shouldReduceMotion ? undefined : { opacity: 1, x: 0 }
                  }
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.4, delay: (index % 4) * 0.05 }}
                >
                  <div className="flex items-center justify-between gap-3 border-b border-border bg-background/65 px-4 py-3">
                    <div className="min-w-0">
                      <h3 className="truncate text-sm font-bold text-foreground">
                        {testimonial.name}
                      </h3>
                      <p className="text-xs font-medium text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                    <div
                      className="flex shrink-0 items-center gap-0.5 text-amber-400"
                      aria-label="Five star recommendation"
                    >
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star
                          key={starIndex}
                          className="h-3.5 w-3.5 fill-current"
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                  </div>

                  <div className="relative bg-muted/35 p-2.5">
                    <div className="relative mx-auto flex min-h-[13rem] items-center justify-center overflow-hidden rounded-2xl bg-background sm:min-h-[14rem]">
                      <Image
                        src={testimonial.image}
                        alt={`Screenshot of a testimonial comment from ${testimonial.name}`}
                        width={760}
                        height={520}
                        sizes="(max-width: 768px) 86vw, 30rem"
                        className="h-auto max-h-[22rem] w-full object-contain sm:max-h-[24rem]"
                      />
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scroll("left")}
                disabled={isAtStart}
                className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition disabled:cursor-not-allowed disabled:opacity-35 hover:border-primary/40 hover:text-primary md:hidden"
                aria-label="Previous testimonial"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                disabled={isAtEnd}
                className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition disabled:cursor-not-allowed disabled:opacity-35 hover:border-primary/40 hover:text-primary md:hidden"
                aria-label="Next testimonial"
              >
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <div className="flex flex-1 justify-center gap-2">
              {testimonials.map((testimonial, index) => (
                <button
                  key={testimonial.name}
                  type="button"
                  onClick={() => scrollToIndex(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    currentIndex === index
                      ? "w-7 bg-primary"
                      : "w-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                  aria-current={currentIndex === index ? "true" : undefined}
                />
              ))}
            </div>

            <p className="hidden min-w-24 justify-end text-right text-sm font-medium text-muted-foreground sm:flex">
              {currentIndex + 1} / {testimonialCount}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
