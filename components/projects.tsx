"use client";

import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CodeIcon from "@mui/icons-material/Code";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { archiveProjects, featuredProjects } from "@/data/projects";
import MagneticButton from "@/components/magnetic-button";
import ProjectMockup from "@/components/project-mockup";
import Reveal from "@/components/reveal";
import TiltCard from "@/components/tilt-card";

export default function Projects() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-background py-20 transition-colors duration-500 md:py-32"
    >
      <div className="pointer-events-none absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        <motion.div
          animate={
            shouldReduceMotion
              ? { x: "0%", opacity: 0.25 }
              : { x: ["-100%", "100%"], opacity: [0, 1, 0] }
          }
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 top-[20%] h-px w-full bg-linear-to-r from-transparent via-primary/50 to-transparent"
        />
        <motion.div
          animate={
            shouldReduceMotion
              ? { x: "0%", opacity: 0.25 }
              : { x: ["100%", "-100%"], opacity: [0, 1, 0] }
          }
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
          className="absolute left-0 top-[60%] h-px w-full bg-linear-to-r from-transparent via-accent/50 to-transparent"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <Reveal className="mb-16 space-y-4 text-center md:mb-20">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1.5 backdrop-blur-sm md:px-4 md:py-2">
            <CodeIcon className="h-3 w-3 text-accent md:h-4 md:w-4" />
            <span className="text-xs font-semibold text-accent md:text-sm">
              Product Proof
            </span>
          </div>

          <h2 className="text-4xl font-extrabold tracking-tight md:text-6xl">
            <span className="animate-gradient bg-linear-to-r from-primary via-accent to-primary bg-clip-text bg-size-[200%_auto] text-transparent">
              Featured Projects
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
            Selected full-stack and frontend products with real workflows,
            responsive interfaces, API integration, dashboards, authentication,
            payments, or real-time features where supported by the project.
          </p>

          <div className="mx-auto mt-6 h-1.5 w-20 rounded-full bg-linear-to-r from-primary to-accent md:w-24" />
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          <AnimatePresence>
            {featuredProjects.map((project) => (
              <TiltCard
                key={project.id}
                className="group relative flex h-full flex-col"
              >
                <div className="absolute -inset-px rounded-3xl bg-[linear-gradient(135deg,rgb(var(--brand-primary-rgb)_/_0.0),rgb(var(--brand-accent-rgb)_/_0.0))] opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30 group-hover:bg-[linear-gradient(135deg,rgb(var(--brand-primary-rgb)_/_0.22),rgb(var(--brand-accent-rgb)_/_0.16))]" />
                <div className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-border/50 bg-card transition-all duration-300 group-hover:border-primary/30 group-hover:shadow-xl group-hover:shadow-primary/10">
                  <div className="p-3">
                    <ProjectMockup
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      aspect="card"
                    />
                  </div>

                  <div className="flex grow flex-col space-y-4 p-5 md:p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-primary">
                          {project.role}
                        </p>
                        <h3 className="text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary md:text-2xl">
                          {project.title}
                        </h3>
                      </div>
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <LaunchIcon sx={{ fontSize: 16 }} />
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.badges.slice(0, 3).map((badge) => (
                        <span
                          key={badge}
                          className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-[11px] font-semibold text-primary"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>

                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {project.shortDescription}
                    </p>

                    <div>
                      <p className="mb-2 text-xs font-semibold text-foreground">
                        Strongest features
                      </p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        {project.features.slice(0, 3).map((feature) => (
                          <li key={feature} className="flex gap-2">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-2xl border border-border/60 bg-secondary/30 p-3 text-xs leading-relaxed text-muted-foreground">
                      <strong className="text-foreground">Frontend:</strong>{" "}
                      {project.frontendHighlight}
                      {project.backendHighlight && (
                        <>
                          <br />
                          <strong className="text-foreground">
                            Backend:
                          </strong>{" "}
                          {project.backendHighlight}
                        </>
                      )}
                    </div>

                    <div className="grow" />

                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-border/50 bg-secondary/50 px-2 py-1 text-[10px] font-medium text-secondary-foreground md:px-2.5 md:text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="my-2 h-px bg-border/50" />

                    <div className="grid gap-3 rounded-2xl border border-border/50 bg-background/60 p-2 sm:grid-cols-2">
                      {project.demoUrl && (
                        <MagneticButton className="inline-flex">
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all duration-300 hover:bg-primary/90 hover:shadow-primary/30 focus:outline-none focus:ring-2 focus:ring-primary/30"
                          >
                            <LaunchIcon sx={{ fontSize: 18 }} />
                            Demo
                          </a>
                        </MagneticButton>
                      )}
                      {project.githubUrl && (
                        <MagneticButton className="inline-flex">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground transition-all duration-300 hover:border-primary/40 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                          >
                            <GitHubIcon sx={{ fontSize: 18 }} />
                            Code
                          </a>
                        </MagneticButton>
                      )}
                      {project.caseStudy && (
                        <MagneticButton className="inline-flex sm:col-span-2">
                          <Link
                            href={`/projects/${project.slug}`}
                            className="flex items-center justify-center gap-2 rounded-xl border border-primary/30 bg-primary/10 px-4 py-2.5 text-sm font-semibold text-primary transition-all duration-300 hover:bg-primary/15 focus:outline-none focus:ring-2 focus:ring-primary/30"
                          >
                            Case Study
                            <LaunchIcon sx={{ fontSize: 16 }} />
                          </Link>
                        </MagneticButton>
                      )}
                    </div>
                  </div>
                </div>
              </TiltCard>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          className="mt-16 rounded-3xl border border-border/60 bg-card/70 p-6 shadow-lg shadow-primary/5 backdrop-blur md:mt-20 md:p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-2 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                <AutoAwesomeIcon sx={{ fontSize: 18 }} />
                More Projects Archive
              </p>
              <h3 className="text-2xl font-bold text-foreground">
                Earlier frontend, clone, and practice projects
              </h3>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-muted-foreground">
                These projects are still useful proof of progression, but the
                homepage now prioritizes stronger full-stack and dashboard work.
              </p>
            </div>
            <a
              href="https://github.com/a-basuony"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              <GitHubIcon />
              View GitHub
            </a>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {archiveProjects.map((project) => (
              <div
                key={project.id}
                className="rounded-2xl border border-border/50 bg-secondary/30 p-4"
              >
                <p className="font-semibold text-foreground">
                  {project.title}
                </p>
                <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
                  {project.shortDescription}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-background px-2 py-1 text-[10px] text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
