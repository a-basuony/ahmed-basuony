"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  Database,
  KeyRound,
  Layers,
  Server,
} from "lucide-react";

const layers = [
  {
    label: "UI Layer",
    detail:
      "Responsive React / Next.js screens, reusable components, and clean user flows.",
    icon: Layers,
  },
  {
    label: "API Layer",
    detail:
      "REST-oriented backend structure for auth, products, bookings, messages, and dashboard data.",
    icon: Server,
  },
  {
    label: "Auth / RBAC",
    detail:
      "Authentication-aware flows and role-based product thinking where supported by project proof.",
    icon: KeyRound,
  },
  {
    label: "Database",
    detail:
      "MongoDB/Mongoose-style model thinking for users, products, orders, messages, and appointments.",
    icon: Database,
  },
  {
    label: "Deployment",
    detail:
      "Public demos, environment-aware builds, SEO metadata, and production-readiness habits.",
    icon: Cloud,
  },
] as const;

const outcomes = [
  "Frontend polish + responsive UX",
  "Backend/API workflow awareness",
  "Data + deployment readiness",
] as const;

export default function FullStackArchitectureVisual() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      aria-labelledby="architecture-map-title"
      className="relative overflow-hidden bg-background py-16 sm:py-20 md:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          className="relative overflow-hidden rounded-3xl border border-border/70 bg-card/80 p-5 shadow-xl shadow-primary/10 backdrop-blur md:p-6"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_82%_8%,rgb(var(--brand-primary-rgb)_/_0.14),transparent_34%),radial-gradient(circle_at_12%_88%,rgb(var(--brand-accent-rgb)_/_0.11),transparent_32%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgb(var(--brand-primary-rgb)_/_0.045)_1px,transparent_1px),linear-gradient(90deg,rgb(var(--brand-primary-rgb)_/_0.045)_1px,transparent_1px)] bg-size-[44px_44px] opacity-60" />

          <div className="relative mb-6 flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Full-Stack Delivery Map
              </p>
              <h3
                id="architecture-map-title"
                className="mt-2 max-w-3xl text-2xl font-black tracking-tight text-foreground md:text-3xl"
              >
                How the portfolio proves complete product thinking.
              </h3>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                This is not a claimed architecture for one single app. It
                summarizes the delivery path shown across the featured projects
                and case studies: UI, APIs, auth-aware flows, data modeling, and
                deployment.
              </p>
            </div>

            <div
              className="hidden shrink-0 gap-1.5 rounded-full border border-border/70 bg-background/60 px-2.5 py-2 shadow-sm backdrop-blur sm:flex"
              aria-hidden="true"
            >
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            </div>
          </div>

          <div className="relative grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {layers.map((layer, index) => {
              const Icon = layer.icon;
              const step = String(index + 1).padStart(2, "0");

              return (
                <motion.div
                  key={layer.label}
                  className="group relative min-h-[12rem] overflow-hidden rounded-2xl border border-border/70 bg-background/75 p-4 shadow-sm transition-colors hover:border-primary/35 hover:bg-background/90"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                  whileInView={
                    shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
                  }
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.35,
                    delay: index * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={shouldReduceMotion ? undefined : { y: -3 }}
                >
                  <div className="pointer-events-none absolute right-3 top-3 text-xs font-black text-primary/20">
                    {step}
                  </div>

                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl border border-primary/15 bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>

                  <p className="text-sm font-bold text-foreground md:text-base">
                    {layer.label}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {layer.detail}
                  </p>

                  {index < layers.length - 1 && (
                    <span
                      className="absolute -right-3 top-1/2 z-10 hidden h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-primary shadow-sm xl:flex"
                      aria-hidden="true"
                    >
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  )}
                </motion.div>
              );
            })}
          </div>

          <div className="relative mt-5 grid gap-3 md:grid-cols-3">
            {outcomes.map((item, index) => (
              <motion.div
                key={item}
                className="flex items-center gap-2 rounded-2xl border border-primary/20 bg-primary/10 px-4 py-3 text-sm font-semibold text-primary"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                whileInView={
                  shouldReduceMotion ? undefined : { opacity: 1, y: 0 }
                }
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.06,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
