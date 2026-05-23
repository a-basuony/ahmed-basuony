"use client";

import { motion } from "framer-motion";
import {
  Gauge,
  LayoutDashboard,
  LockKeyhole,
  MonitorSmartphone,
  ServerCog,
  ShoppingCart,
} from "lucide-react";

const services = [
  {
    title: "Frontend Development",
    description:
      "Responsive React and Next.js interfaces, reusable components, forms, dashboards, and polished UI implementation.",
    icon: MonitorSmartphone,
  },
  {
    title: "Full Stack Web Apps",
    description:
      "MERN applications that connect frontend workflows with REST APIs, authentication, MongoDB data, and deployment.",
    icon: ServerCog,
  },
  {
    title: "Admin Dashboards",
    description:
      "Management interfaces for CRUD workflows, analytics views, filtering, search, and operational screens.",
    icon: LayoutDashboard,
  },
  {
    title: "E-Commerce Platforms",
    description:
      "Catalogs, carts, checkout-oriented flows, product management, and payment integrations where project scope supports it.",
    icon: ShoppingCart,
  },
  {
    title: "Authentication Systems",
    description:
      "Login/register flows, protected UI states, JWT-based patterns, and role-aware UX where supported by the backend.",
    icon: LockKeyhole,
  },
  {
    title: "Performance and Deployment",
    description:
      "Image optimization, lazy loading, SEO metadata, Vercel deployment, environment configuration, and production checks.",
    icon: Gauge,
  },
];

export default function Services() {
  return (
    <section id="services" className="relative bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          className="mb-14 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Services
          </p>
          <h2 className="text-4xl font-black tracking-tight text-foreground md:text-5xl">
            Practical development services for real product needs.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            These are the areas my current projects support. I keep the promise
            specific: clean UI, connected APIs, useful dashboards, and complete
            delivery habits.
          </p>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="rounded-3xl border border-border bg-card p-6 shadow-lg shadow-primary/5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
