"use client";

import { motion } from "framer-motion";
import { BookOpen, CheckCircle2, Code2, GraduationCap } from "lucide-react";

const milestones = [
  {
    year: "2020-2021",
    title: "Full-stack foundations",
    description:
      "Completed structured web development and computer science training while building HTML, CSS, JavaScript, and early full-stack projects.",
    icon: GraduationCap,
  },
  {
    year: "2022-2023",
    title: "React and backend specialization",
    description:
      "Focused on React, TypeScript, Node.js, Express.js, MongoDB, REST APIs, authentication concepts, and practical portfolio projects.",
    icon: Code2,
  },
  {
    year: "2024-2026",
    title: "Product-style MERN applications",
    description:
      "Built and deployed e-commerce, booking, chat, dashboard, and social-platform projects with stronger frontend/backend integration.",
    icon: CheckCircle2,
  },
];

const learning = [
  "NestJS for larger backend architecture",
  "RBAC and authorization design",
  "Testing with unit, integration, and E2E coverage",
  "GitHub Actions and CI checks",
  "Docker Compose for local full-stack environments",
  "Swagger/OpenAPI documentation",
  "Redis caching basics",
  "OWASP security fundamentals",
];

export default function Milestones() {
  return (
    <section id="milestones" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Milestones
            </p>
            <h2 className="text-4xl font-black tracking-tight text-foreground md:text-5xl">
              Honest progression, focused on stronger product delivery.
            </h2>
            <div className="mt-8 space-y-5">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                return (
                  <motion.article
                    key={milestone.title}
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    className="flex gap-4 rounded-3xl border border-border bg-card p-5 shadow-lg shadow-primary/5"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary">
                        {milestone.year}
                      </p>
                      <h3 className="mt-1 text-xl font-bold text-foreground">
                        {milestone.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {milestone.description}
                      </p>
                    </div>
                  </motion.article>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl border border-border bg-card p-6 shadow-xl shadow-primary/5"
          >
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <BookOpen className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-accent">
                  Currently Learning
                </p>
                <h3 className="text-2xl font-bold text-foreground">
                  2027 readiness roadmap
                </h3>
              </div>
            </div>
            <p className="mb-5 text-sm leading-relaxed text-muted-foreground">
              These are learning priorities, not claimed expertise. They are
              included to show direction without overstating proof.
            </p>
            <div className="grid gap-3">
              {learning.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-border/60 bg-secondary/40 px-4 py-3 text-sm text-foreground"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
