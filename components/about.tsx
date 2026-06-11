"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Code2,
  Database,
  Globe2,
  Layers3,
  MapPin,
  Rocket,
  Server,
} from "lucide-react";

const snapshots = [
  {
    label: "Current Location",
    value: "Saudi Arabia",
    icon: MapPin,
  },
  {
    label: "Availability",
    value: "Open to full-time, remote, and freelance roles",
    icon: Globe2,
  },
  {
    label: "Main Stack",
    value: "React, Next.js, Node.js, MongoDB",
    icon: Layers3,
  },
  {
    label: "Target Roles",
    value: "Frontend, Backend, Full Stack MERN",
    icon: Briefcase,
  },
  {
    label: "Work Type",
    value: "SaaS, dashboards, APIs, business platforms",
    icon: Rocket,
  },
  {
    label: "Strongest Projects",
    value: "E-commerce, booking, chat, admin systems",
    icon: Code2,
  },
];

export default function About() {
  return (
    <section
      id="about-details"
      className="relative overflow-hidden bg-background py-20 md:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgb(var(--brand-primary-rgb)_/_0.10),transparent_28%),radial-gradient(circle_at_80%_70%,rgb(var(--brand-accent-rgb)_/_0.10),transparent_28%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              About Me
            </p>

            <h2 className="text-4xl font-black tracking-tight text-foreground md:text-5xl">
              I build complete web products for real business needs.
            </h2>

            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              5+ years building web applications with React, Next.js, Node.js,
              and MongoDB.{" "}
              I am Ahmed Basuony, a Full Stack MERN Developer based in Saudi
              Arabia, focused on building responsive React and Next.js
              interfaces connected to practical Node.js, Express.js, and MongoDB
              backends. I enjoy working on business-focused applications such as
              dashboards, e-commerce platforms, booking systems, admin panels,
              real-time features, and API-connected user workflows.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl border border-border bg-card p-5">
                <Server className="mb-3 h-6 w-6 text-primary" />
                <h3 className="font-bold text-foreground">Backend focus</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  REST APIs, authentication flows, role-based access, MongoDB
                  data modeling, clean service structure, and deployment-ready
                  backend practices.
                </p>
              </div>

              <div className="rounded-3xl border border-border bg-card p-5">
                <Database className="mb-3 h-6 w-6 text-accent" />
                <h3 className="font-bold text-foreground">Frontend focus</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Responsive interfaces, reusable components, dashboard layouts,
                  forms, API states, smooth interactions, and polished user
                  experiences.
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2">
            {snapshots.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="rounded-3xl border border-border bg-card/80 p-5 shadow-lg shadow-primary/5 backdrop-blur"
                >
                  <Icon className="mb-4 h-6 w-6 text-primary" />
                  <p className="text-sm text-muted-foreground">{item.label}</p>
                  <p className="mt-1 font-semibold text-foreground">
                    {item.value}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
