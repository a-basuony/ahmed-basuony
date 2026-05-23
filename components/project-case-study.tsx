import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";
import Link from "next/link";
import MagneticButton from "@/components/magnetic-button";
import ProjectMockup from "@/components/project-mockup";
import SchemaDiagram from "@/components/schema-diagram";
import type { PortfolioProject } from "@/data/projects";

const workflowSteps = ["UI", "API", "Auth", "Data", "Deploy"];

function DetailList({ title, items }: { title: string; items?: string[] }) {
  if (!items?.length) return null;

  return (
    <section className="rounded-3xl border border-border bg-card p-6 shadow-lg shadow-primary/5">
      <h2 className="mb-4 text-2xl font-bold text-foreground">{title}</h2>
      <ul className="space-y-3 text-muted-foreground">
        {items.map((item) => (
          <li key={item} className="flex gap-3">
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function ProjectCaseStudy({
  project,
}: {
  project: PortfolioProject;
}) {
  const caseStudy = project.caseStudy;

  if (!caseStudy) {
    return null;
  }

  const hasApiDocs =
    Boolean(caseStudy.apiDocsUrl) ||
    Boolean(caseStudy.postmanUrl) ||
    Boolean(caseStudy.swaggerUrl);
  const hasSchema =
    Boolean(caseStudy.databaseModels?.length) ||
    Boolean(caseStudy.schemaHighlights?.length) ||
    Boolean(caseStudy.dataRelationships?.length);

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-border py-20 md:py-28">
        <div className="premium-grid absolute inset-0 opacity-80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_25%,rgb(var(--brand-primary-rgb)_/_0.18),transparent_30%),radial-gradient(circle_at_20%_70%,rgb(var(--brand-accent-rgb)_/_0.12),transparent_32%)]" />

        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
          <Link
            href="/#projects"
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowBackIcon sx={{ fontSize: 18 }} />
            Back to projects
          </Link>

          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Case Study
              </p>
              <h1 className="text-4xl font-black tracking-tight md:text-6xl">
                {project.title}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">
                {project.shortDescription}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-border bg-card/80 px-3 py-1 text-sm text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.demoUrl && (
                  <MagneticButton className="inline-flex">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary/30"
                    >
                      <LaunchIcon sx={{ fontSize: 18 }} />
                      Live Demo
                    </a>
                  </MagneticButton>
                )}
                {project.githubUrl && (
                  <MagneticButton className="inline-flex">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition hover:border-primary/50 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                    >
                      <GitHubIcon sx={{ fontSize: 18 }} />
                      GitHub
                    </a>
                  </MagneticButton>
                )}
              </div>
            </div>

            <ProjectMockup
              src={project.image}
              alt={`${project.title} interface preview`}
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              aspect="hero"
            />
          </div>
        </div>
      </section>

      <nav className="sticky top-0 z-30 border-b border-border bg-background/85 backdrop-blur">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-3 text-sm md:px-6">
          {[
            ["Overview", "#overview"],
            ["Architecture", "#architecture"],
            ["Implementation", "#implementation"],
            ...(hasSchema ? ([["Schema", "#schema"]] as const) : []),
            ...(hasApiDocs ? ([["API Docs", "#api-docs"]] as const) : []),
            ["Gallery", "#gallery"],
            ["Proof", "#proof"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="whitespace-nowrap rounded-full border border-border bg-card px-4 py-2 font-semibold text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
            >
              {label}
            </a>
          ))}
        </div>
      </nav>

      <section
        id="overview"
        className="mx-auto grid max-w-7xl gap-6 px-4 py-14 md:px-6 lg:grid-cols-3"
      >
        <div className="rounded-3xl border border-border bg-card p-6 lg:col-span-2">
          <h2 className="mb-4 text-2xl font-bold">Overview</h2>
          <p className="leading-relaxed text-muted-foreground">
            {caseStudy.overview}
          </p>
        </div>
        <div className="rounded-3xl border border-border bg-primary/10 p-6">
          <h2 className="mb-4 text-2xl font-bold text-primary">My Role</h2>
          <p className="leading-relaxed text-muted-foreground">
            {caseStudy.myRole}
          </p>
        </div>
        <div className="rounded-3xl border border-border bg-card p-6 lg:col-span-2">
          <h2 className="mb-4 text-2xl font-bold">Problem</h2>
          <p className="leading-relaxed text-muted-foreground">
            {caseStudy.problem}
          </p>
        </div>
        <div className="rounded-3xl border border-accent/20 bg-accent/10 p-6">
          <h2 className="mb-4 text-2xl font-bold text-accent">Solution</h2>
          <p className="leading-relaxed text-muted-foreground">
            {caseStudy.solutions[0] ?? project.description}
          </p>
        </div>
        <DetailList title="Target Users" items={caseStudy.targetUsers} />
      </section>

      <section
        id="architecture"
        className="mx-auto max-w-7xl px-4 pb-14 md:px-6"
      >
        <div className="rounded-3xl border border-border bg-card p-6 shadow-xl shadow-primary/5 md:p-8">
          <div className="mb-8 max-w-3xl">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Workflow
            </p>
            <h2 className="text-3xl font-bold text-foreground">
              Product flow from interface to deployment
            </h2>
          </div>
          <div className="grid gap-3 md:grid-cols-5">
            {workflowSteps.map((step, index) => (
              <div
                key={step}
                className="relative rounded-2xl border border-border bg-background/70 p-4"
              >
                <p className="text-sm font-semibold text-primary">
                  0{index + 1}
                </p>
                <p className="mt-2 text-lg font-bold text-foreground">{step}</p>
                {index < workflowSteps.length - 1 && (
                  <span className="absolute -right-2 top-1/2 hidden -translate-y-1/2 text-primary md:block">
                    -&gt;
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="implementation"
        className="mx-auto grid max-w-7xl gap-6 px-4 pb-14 md:px-6 lg:grid-cols-2"
      >
        <DetailList title="Key Features" items={caseStudy.keyFeatures} />
        <DetailList
          title="Frontend Implementation"
          items={caseStudy.frontendImplementation}
        />
        <DetailList
          title="Backend / API Implementation"
          items={caseStudy.backendImplementation}
        />
        <DetailList title="Database Design" items={caseStudy.databaseDesign} />
        <DetailList
          title="Authentication and Security"
          items={caseStudy.authAndSecurity}
        />
        <DetailList title="API Overview" items={caseStudy.apiOverview} />
        <DetailList
          title="Architecture Decisions"
          items={caseStudy.architectureDecisions}
        />
        <DetailList title="Challenges" items={caseStudy.challenges} />
        <DetailList title="Solutions" items={caseStudy.solutions} />
        <DetailList
          title="Deployment Notes"
          items={caseStudy.deploymentNotes}
        />
      </section>

      {hasSchema && (
        <section id="schema" className="mx-auto max-w-7xl px-4 pb-14 md:px-6">
          <SchemaDiagram
            models={caseStudy.databaseModels}
            highlights={caseStudy.schemaHighlights}
            relationships={caseStudy.dataRelationships}
          />
        </section>
      )}

      {hasApiDocs && (
        <section
          id="api-docs"
          className="mx-auto max-w-7xl px-4 pb-14 md:px-6"
        >
          <div className="rounded-3xl border border-border bg-card p-6 shadow-lg shadow-primary/5">
            <h2 className="mb-4 text-2xl font-bold text-foreground">
              API Documentation
            </h2>
            <div className="flex flex-wrap gap-3">
              {caseStudy.apiDocsUrl && (
                <a
                  href={caseStudy.apiDocsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary"
                >
                  API Docs
                </a>
              )}
              {caseStudy.postmanUrl && (
                <a
                  href={caseStudy.postmanUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary"
                >
                  Postman
                </a>
              )}
              {caseStudy.swaggerUrl && (
                <a
                  href={caseStudy.swaggerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary"
                >
                  Swagger
                </a>
              )}
            </div>
          </div>
        </section>
      )}

      <section id="gallery" className="mx-auto max-w-7xl px-4 pb-14 md:px-6">
        <h2 className="mb-6 text-3xl font-bold">Screenshots</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {caseStudy.screenshots.map((screenshot) => (
            <ProjectMockup
              key={screenshot}
              src={screenshot}
              alt={`${project.title} screenshot`}
              sizes="(max-width: 768px) 100vw, 50vw"
              aspect="video"
              overlayLabel="Project Screenshot"
            />
          ))}
        </div>
      </section>

      <section id="proof" className="mx-auto max-w-7xl px-4 pb-20 md:px-6">
        <div className="rounded-3xl border border-primary/20 bg-primary/10 p-6 md:p-8">
          <h2 className="mb-4 text-3xl font-bold text-primary">
            What This Project Proves
          </h2>
          <div className="grid gap-3 md:grid-cols-2">
            {caseStudy.whatThisProjectProves.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-primary/20 bg-background/70 p-4 text-foreground"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
