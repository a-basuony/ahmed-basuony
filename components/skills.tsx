"use client";

import { motion } from "framer-motion";
import { useMemo, useRef } from "react";
import {
  Code as HtmlIcon,
  Palette as CssIcon,
  Waves as TailwindIcon,
  IntegrationInstructions as TypescriptIcon,
  ChangeHistory as ReactIcon,
  NightsStay as NextIcon,
  Widgets as MaterialUIIcon,
  AutoAwesome as ShadcnIcon,
  Api as ApiIcon,
  Settings as WebpackIcon,
  ChangeCircle as VercelIcon,
  Hub as NodeIcon,
  Terminal as ExpressIcon,
  Widgets as WidgetsIcon,
  Launch as LaunchIcon,
  Lightbulb as LightbulbIcon,
  Groups as GroupsIcon,
  Loop as LoopIcon,
  AccessTime as AccessTimeIcon,
  GitHub as GitHubIcon,
  Code as CodeIcon,
  AutoAwesome as AutoAwesomeIcon,
} from "@mui/icons-material";

export default function Skills() {
  const skillCategories = useMemo(
    () => [
      {
        title: "Core Frontend Stack",
        skills: [
          { name: "HTML5", icon: <HtmlIcon sx={{ color: "#ff5722" }} /> },
          { name: "CSS3", icon: <CssIcon sx={{ color: "#2196f3" }} /> },
          {
            name: "JavaScript ES6+",
            icon: <CodeIcon sx={{ color: "#f7df1e" }} />,
          },
          {
            name: "TypeScript",
            icon: <TypescriptIcon sx={{ color: "#3178c6" }} />,
          },
          { name: "React.js", icon: <ReactIcon sx={{ color: "#61dafb" }} /> },
          { name: "Next.js", icon: <NextIcon sx={{ color: "#bdbdbd" }} /> },
          {
            name: "React Hooks",
            icon: <LoopIcon sx={{ color: "#61dafb" }} />,
          },
          {
            name: "Redux Toolkit",
            icon: <ReactIcon sx={{ color: "#764abc" }} />,
          },
        ],
      },
      {
        title: "UI, Styling & Experience",
        skills: [
          {
            name: "Tailwind CSS",
            icon: <TailwindIcon sx={{ color: "#06b6d4" }} />,
          },
          {
            name: "ShadCN UI",
            icon: <ShadcnIcon sx={{ color: "#ab47bc" }} />,
          },
          {
            name: "Material UI",
            icon: <MaterialUIIcon sx={{ color: "#00b0ff" }} />,
          },
          {
            name: "Framer Motion",
            icon: <AutoAwesomeIcon sx={{ color: "#ff0055" }} />,
          },
          {
            name: "Responsive Design",
            icon: <WidgetsIcon sx={{ color: "#14b8a6" }} />,
          },
          {
            name: "Forms & Validation",
            icon: <CodeIcon sx={{ color: "#22c55e" }} />,
          },
          {
            name: "Dashboard Layouts",
            icon: <WidgetsIcon sx={{ color: "#8b5cf6" }} />,
          },
        ],
      },
      {
        title: "Backend & APIs",
        skills: [
          { name: "Node.js", icon: <NodeIcon sx={{ color: "#339933" }} /> },
          {
            name: "Express.js",
            icon: <ExpressIcon sx={{ color: "#111827" }} />,
          },
          { name: "REST APIs", icon: <ApiIcon sx={{ color: "#00e676" }} /> },
          {
            name: "JWT Authentication",
            icon: <ApiIcon sx={{ color: "#f97316" }} />,
          },
          {
            name: "RBAC Permissions",
            icon: <CodeIcon sx={{ color: "#a855f7" }} />,
          },
          {
            name: "API Validation",
            icon: <ApiIcon sx={{ color: "#38bdf8" }} />,
          },
          {
            name: "Socket.io",
            icon: <ApiIcon sx={{ color: "#7c3aed" }} />,
          },
        ],
      },
      {
        title: "Databases & Data Modeling",
        skills: [
          { name: "MongoDB", icon: <NodeIcon sx={{ color: "#47a248" }} /> },
          { name: "Mongoose", icon: <CodeIcon sx={{ color: "#880000" }} /> },
          {
            name: "Schema Design",
            icon: <CodeIcon sx={{ color: "#22c55e" }} />,
          },
          {
            name: "Indexes",
            icon: <LaunchIcon sx={{ color: "#f59e0b" }} />,
          },
          {
            name: "Aggregation Pipelines",
            icon: <LoopIcon sx={{ color: "#10b981" }} />,
          },
          {
            name: "Pagination",
            icon: <WidgetsIcon sx={{ color: "#0ea5e9" }} />,
          },
          {
            name: "SQL Fundamentals",
            icon: <WidgetsIcon sx={{ color: "#336791" }} />,
          },
        ],
      },
      {
        title: "Tools & Deployment",
        skills: [
          {
            name: "Git & GitHub",
            icon: <GitHubIcon sx={{ color: "#181717" }} />,
          },
          { name: "Postman", icon: <LaunchIcon sx={{ color: "#ff6c37" }} /> },
          { name: "Docker", icon: <WidgetsIcon sx={{ color: "#2496ed" }} /> },
          { name: "Vercel", icon: <VercelIcon sx={{ color: "#eeeeee" }} /> },
          {
            name: "Environment Variables",
            icon: <WebpackIcon sx={{ color: "#4fc3f7" }} />,
          },
          {
            name: "Production Deployment",
            icon: <LaunchIcon sx={{ color: "#22c55e" }} />,
          },
          {
            name: "Swagger / OpenAPI",
            icon: <ApiIcon sx={{ color: "#85ea2d" }} />,
          },
        ],
      },
      {
        title: "Project Experience",
        skills: [
          {
            name: "E-commerce Systems",
            icon: <LaunchIcon sx={{ color: "#f97316" }} />,
          },
          {
            name: "Admin Dashboards",
            icon: <WidgetsIcon sx={{ color: "#8b5cf6" }} />,
          },
          {
            name: "Booking Workflows",
            icon: <AccessTimeIcon sx={{ color: "#7b1fa2" }} />,
          },
          {
            name: "Chat Features",
            icon: <ApiIcon sx={{ color: "#7c3aed" }} />,
          },
          {
            name: "Business Platforms",
            icon: <WidgetsIcon sx={{ color: "#0ea5e9" }} />,
          },
          {
            name: "Payment Workflows",
            icon: <ApiIcon sx={{ color: "#22c55e" }} />,
          },
          {
            name: "API Documentation",
            icon: <CodeIcon sx={{ color: "#38bdf8" }} />,
          },
        ],
      },
      {
        title: "Currently Expanding",
        skills: [
          {
            name: "NestJS Basics",
            icon: <CodeIcon sx={{ color: "#e0234e" }} />,
          },
          {
            name: "PostgreSQL Basics",
            icon: <WidgetsIcon sx={{ color: "#336791" }} />,
          },
          {
            name: "Redis Basics",
            icon: <WidgetsIcon sx={{ color: "#dc382d" }} />,
          },
          {
            name: "AWS Basics",
            icon: <LaunchIcon sx={{ color: "#ff9900" }} />,
          },
          {
            name: "CI/CD Basics",
            icon: <LoopIcon sx={{ color: "#4caf50" }} />,
          },
          {
            name: "Testing Basics",
            icon: <LightbulbIcon sx={{ color: "#fbc02d" }} />,
          },
          {
            name: "AI-Assisted Development",
            icon: <AutoAwesomeIcon sx={{ color: "#a855f7" }} />,
          },
        ],
      },
      {
        title: "Professional Skills",
        skills: [
          {
            name: "Problem Solving",
            icon: <LightbulbIcon sx={{ color: "#fbc02d" }} />,
          },
          {
            name: "Team Collaboration",
            icon: <GroupsIcon sx={{ color: "#1976d2" }} />,
          },
          {
            name: "Ownership Mindset",
            icon: <LaunchIcon sx={{ color: "#22c55e" }} />,
          },
          {
            name: "Time Management",
            icon: <AccessTimeIcon sx={{ color: "#7b1fa2" }} />,
          },
          {
            name: "Client Communication",
            icon: <GroupsIcon sx={{ color: "#06b6d4" }} />,
          },
          {
            name: "Continuous Learning",
            icon: <AutoAwesomeIcon sx={{ color: "#a855f7" }} />,
          },
        ],
      },
    ],
    [],
  );

  const containerRef = useRef(null);

  return (
    <section
      id="skills"
      ref={containerRef}
      className="relative min-h-screen overflow-hidden bg-background py-20 text-foreground transition-colors duration-500 md:py-32"
    >
      {/* Background - Dot Grid & Animated Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-size-[20px_20px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] dark:bg-[radial-gradient(#ffffff33_1px,transparent_1px)]" />

        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-purple-500/20 blur-[100px]"
        />

        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-blue-500/20 blur-[100px]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6">
        <motion.div
          className="mb-16 text-center md:mb-24"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3 py-1.5 backdrop-blur-sm md:mb-6 md:px-4 md:py-2">
            <ShadcnIcon className="h-3 w-3 text-accent md:h-4 md:w-4" />
            <span className="text-xs font-semibold text-accent md:text-sm">
              Full-Stack Web Stack
            </span>
          </div>

          <h2 className="mb-4 text-4xl font-extrabold tracking-tight md:mb-6 md:text-6xl">
            <span className="animate-gradient bg-linear-to-r from-primary via-accent to-primary bg-clip-text bg-size-[200%_auto] text-transparent">
              Skills & Technologies
            </span>
          </h2>

          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-muted-foreground md:text-base">
            A practical MERN-focused skill set for building responsive
            interfaces, REST APIs, dashboards, business platforms, and
            production-ready web applications.
          </p>

          <div className="mx-auto mt-6 h-1.5 w-20 rounded-full bg-linear-to-r from-primary to-accent md:w-24" />
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              className="group relative flex h-full flex-col rounded-3xl border border-border/50 bg-card/50 p-6 shadow-lg backdrop-blur-xl transition-all duration-500 hover:bg-card/80 hover:shadow-primary/5 dark:shadow-none md:p-8"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 rounded-3xl bg-linear-to-b from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <h3 className="relative mb-4 text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary md:mb-6 md:text-2xl">
                {category.title}
              </h3>

              <div className="relative flex flex-wrap gap-2 md:gap-3">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    className="flex cursor-default items-center gap-2 rounded-xl border border-border/50 bg-secondary/50 px-3 py-1.5 text-xs font-medium text-foreground/80 transition-colors duration-300 hover:border-primary/30 hover:bg-primary/10 hover:text-primary md:text-sm"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <span className="flex h-4 w-4 items-center justify-center md:h-5 md:w-5">
                      {skill.icon}
                    </span>
                    <span className="pt-0.5">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
