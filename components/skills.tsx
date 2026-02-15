"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useMemo } from "react";
import {
  Code as HtmlIcon,
  Palette as CssIcon,
  Brush as SassIcon,
  Layers as BootstrapIcon,
  Waves as TailwindIcon,
  Javascript as JavascriptIcon,
  IntegrationInstructions as TypescriptIcon,
  ChangeHistory as ReactIcon,
  NightsStay as NextIcon,
  PhoneIphone as ReactNativeIcon,
  Widgets as MaterialUIIcon,
  AutoAwesome as ShadcnIcon,
  BarChart as NivoIcon,
  QueryStats as ReactQueryIcon,
  Api as ApiIcon,
  Whatshot as FirebaseIcon,
  AccountCircle as ClerkIcon,
  Payment as PaypalIcon,
  Settings as WebpackIcon,
  FlashOn as ViteIcon,
  CloudUpload as FirebaseHostingIcon,
  ChangeCircle as VercelIcon,
  Public as NetlifyIcon,
  Hub as NodeIcon,
  Terminal as ExpressIcon,
  CloudQueue as ConvexIcon,
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
        title: "Frontend Technologies",
        skills: [
          { name: "HTML5", icon: <HtmlIcon sx={{ color: "#ff5722" }} /> },
          { name: "CSS3", icon: <CssIcon sx={{ color: "#2196f3" }} /> },
          { name: "React.js", icon: <ReactIcon sx={{ color: "#61dafb" }} /> },
          { name: "Next.js", icon: <NextIcon sx={{ color: "#bdbdbd" }} /> },
          {
            name: "TypeScript",
            icon: <TypescriptIcon sx={{ color: "#3178c6" }} />,
          },
          {
            name: "Redux & RTK",
            icon: <ReactIcon sx={{ color: "#764abc" }} />,
          },
        ],
      },
      {
        title: "Backend & Database",
        skills: [
          { name: "Node.js", icon: <NodeIcon sx={{ color: "#339933" }} /> },
          {
            name: "Express.js",
            icon: <ExpressIcon sx={{ color: "#000000" }} />,
          },
          { name: "MongoDB", icon: <NodeIcon sx={{ color: "#47A248" }} /> }, // Using NodeIcon as placeholder if Mongo not avail, or use generic
          { name: "Mongoose", icon: <CodeIcon sx={{ color: "#880000" }} /> },
          { name: "REST APIs", icon: <ApiIcon sx={{ color: "#00e676" }} /> },
          { name: "Socket.io", icon: <ApiIcon sx={{ color: "#010101" }} /> },
        ],
      },
      {
        title: "UI & Styling",
        skills: [
          {
            name: "Tailwind CSS",
            icon: <TailwindIcon sx={{ color: "#06b6d4" }} />,
          },
          {
            name: "Material UI",
            icon: <MaterialUIIcon sx={{ color: "#00b0ff" }} />,
          },
          { name: "ShadCN UI", icon: <ShadcnIcon sx={{ color: "#ab47bc" }} /> },
          {
            name: "Framer Motion",
            icon: <AutoAwesomeIcon sx={{ color: "#FF0055" }} />,
          },
          { name: "Sass", icon: <SassIcon sx={{ color: "#e91e63" }} /> },
        ],
      },
      {
        title: "Tools & DevOps",
        skills: [
          {
            name: "Git & GitHub",
            icon: <GitHubIcon sx={{ color: "#181717" }} />,
          },
          { name: "Docker", icon: <WidgetsIcon sx={{ color: "#2496ed" }} /> },
          { name: "Postman", icon: <LaunchIcon sx={{ color: "#FF6C37" }} /> },
          { name: "Vercel", icon: <VercelIcon sx={{ color: "#eeeeee" }} /> },
          {
            name: "Webpack/Vite",
            icon: <WebpackIcon sx={{ color: "#4fc3f7" }} />,
          },
        ],
      },
      {
        title: "Soft Skills",
        skills: [
          {
            name: "Problem Solving",
            icon: <LightbulbIcon sx={{ color: "#fbc02d" }} />,
          },
          {
            name: "Team Collaboration",
            icon: <GroupsIcon sx={{ color: "#1976d2" }} />,
          },
          { name: "Agile/Scrum", icon: <LoopIcon sx={{ color: "#4caf50" }} /> },
          {
            name: "Time Management",
            icon: <AccessTimeIcon sx={{ color: "#7b1fa2" }} />,
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
      className="relative min-h-screen py-20 md:py-32 overflow-hidden bg-background text-foreground transition-colors duration-500"
    >
      {/* Background - Dot Grid & Animated Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-size-[20px_20px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
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
          className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] -z-10"
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
          className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px] -z-10"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="mb-16 md:mb-24 text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm mb-4 md:mb-6">
            <ShadcnIcon className="text-accent w-3 h-3 md:w-4 md:h-4" />
            <span className="text-xs md:text-sm font-semibold text-accent">
              Technical Proficiency
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 md:mb-6">
            <span className="bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-size-[200%_auto] animate-gradient">
              Skills & Expertise
            </span>
          </h2>
          <div className="w-20 md:w-24 h-1.5 mx-auto bg-linear-to-r from-primary to-accent rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              className="group relative h-full p-6 md:p-8 rounded-3xl border border-border/50 
              bg-card/50 backdrop-blur-xl hover:bg-card/80 transition-all duration-500
              shadow-lg hover:shadow-primary/5 dark:shadow-none flex flex-col"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 rounded-3xl bg-linear-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <h3 className="relative text-xl md:text-2xl font-bold mb-4 md:mb-6 text-foreground group-hover:text-primary transition-colors duration-300">
                {category.title}
              </h3>

              <div className="relative flex flex-wrap gap-2 md:gap-3">
                {category.skills.map((skill, idx) => (
                  <motion.div
                    key={idx}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs md:text-sm font-medium
                    bg-secondary/50 border border-border/50 text-foreground/80
                    hover:bg-primary/10 hover:border-primary/30 hover:text-primary transition-colors duration-300 cursor-default"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <span className="flex items-center justify-center w-4 h-4 md:w-5 md:h-5">
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
