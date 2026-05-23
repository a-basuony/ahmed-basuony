"use client";

import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import { featuredProjects } from "@/data/projects";
import MagneticButton from "@/components/magnetic-button";
import Reveal from "@/components/reveal";

const proofCards = featuredProjects
  .filter((project) => project.githubUrl)
  .slice(0, 6)
  .map((project) => ({
    name: project.title,
    href: project.githubUrl!,
    stack: project.tech.slice(0, 5),
    proves: project.backendHighlight
      ? "Connected frontend, backend/API workflows, and product data flow."
      : "Reusable frontend UI, responsive screens, and dashboard/product interface work.",
    badges: [
      project.backendHighlight ? "API structure" : "Reusable components",
      project.title.toLowerCase().includes("chat")
        ? "Real-time features"
        : project.title.toLowerCase().includes("dashboard")
          ? "Dashboard UI"
          : "Product workflow",
      project.tech.includes("JWT") ? "Auth flow" : null,
    ].filter(Boolean) as string[],
  }));

export default function GitHubProof() {
  return (
    <section id="github-proof" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <Reveal className="mb-12 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Code Proof
          </p>
          <h2 className="text-4xl font-black tracking-tight text-foreground md:text-5xl">
            Repositories that support the project claims.
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            No noisy contribution graph. Just the project repositories and what
            each one is meant to prove.
          </p>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {proofCards.map((repo, index) => (
            <Reveal
              key={repo.name}
              delay={index * 0.05}
              className="rounded-3xl border border-border bg-card p-6 shadow-lg shadow-primary/5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <GitHubIcon />
                </div>
                <MagneticButton className="inline-flex">
                  <a
                    href={repo.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary/30"
                  >
                    GitHub
                    <LaunchIcon sx={{ fontSize: 15 }} />
                  </a>
                </MagneticButton>
              </div>
              <h3 className="text-xl font-bold text-foreground">{repo.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {repo.proves}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {repo.badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
                  >
                    {badge}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {repo.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md bg-secondary px-2 py-1 text-[11px] text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
