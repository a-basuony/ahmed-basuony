"use client";

import React, { useEffect, useState } from "react";
import LaunchIcon from "@mui/icons-material/Launch";
import GitHubIcon from "@mui/icons-material/GitHub";
import CodeIcon from "@mui/icons-material/Code";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import { getProjects, ProjectData } from "@/lib/firestore";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Projects() {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const [loading, setLoading] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(6);

  // const MERN_PROJECTS: ProjectData[] = [
  //   {
  //     id: "mern-ecommerce",
  //     title: "MERN E-Commerce Pro",
  //     description:
  //       "Full-featured e-commerce platform with comprehensive product management, shopping cart functionality, user authentication, and secure payment processing via Stripe. Includes an admin dashboard for real-time inventory and order tracking.",
  //     tech: [
  //       "MongoDB",
  //       "Express.js",
  //       "React",
  //       "Node.js",
  //       "Redux",
  //       "Stripe",
  //       "MongoDB",
  //     ],
  //     demo: "https://e-commerce-full-stack-mern-wp03fbbzp-ahmed-basuonys-projects.vercel.app/",
  //     code: "https://github.com/a-basuony/E-Commerce-Full-Stack-MERN",
  //     image: "/images/ecommerce.png",
  //   },
  //   {
  //     id: "MERN-Real-Time-Chat",
  //     title: "TaskMaster AI",
  //     description:
  //       "Real-time chat application with features such as user authentication, real-time messaging, and group chat capabilities. Built using MongoDB, Express.js, React, and Node.js.",
  //     tech: [
  //       "MongoDB",
  //       "Express.js",
  //       "React",
  //       "Node.js",
  //       "Socket.io",
  //       "OpenAI API",
  //     ],
  //     demo: "https://dardasha-real-time-chat-frontend.vercel.app/",
  //     code: "https://github.com/a-basuony/Dardasha_real_time_chat_frontend",
  //     image: "/images/chat.png",
  //   },
  //   {
  //     id: "MERN-social",
  //     title: "LinkedIn clone",
  //     description:
  //       "A robust social platform for developers to share knowledge, create profiles, and network. Features include real-time chat, post feeds, Github repository integration, and interactive discussion forums.",
  //     tech: ["MongoDB", "Express.js", "React", "Node.js", "Redux", "JWT"],
  //     demo: "https://linkedin-clone-two-taupe.vercel.app/",
  //     code: "https://github.com/a-basuony/Linkedin_Clone",
  //     image: "/images/linkedin-clone.png",
  //   },
  // ];

  const MERN_PROJECTS: ProjectData[] = [
    {
      id: "mern-ecommerce",
      title: "MERN E-Commerce Pro",
      description:
        "Full-featured e-commerce platform with product management, cart system, authentication, and Stripe payments. Includes admin dashboard.",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "Redux", "Stripe"],
      demo: "https://e-commerce-full-stack-mern-wp03fbbzp-ahmed-basuonys-projects.vercel.app/",
      code: "https://github.com/a-basuony/E-Commerce-Full-Stack-MERN",
      image: "/images/ecommerce.png",
    },

    {
      id: "mern-chat",
      title: "Dardasha Real-time chat",
      description:
        "Dardasha is a real-time chat application with authentication, group chats, video & audio call, share screen.",
      tech: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "Socket.io",
        "OpenAI API",
      ],
      demo: "https://dardasha-real-time-chat-frontend.vercel.app/",
      code: "https://github.com/a-basuony/Dardasha_real_time_chat_frontend",
      image: "/images/chat.png",
    },

    {
      id: "mern-booking",
      title: "Doctor Booking",
      description:
        "Doctor Booking is a full-featured e-commerce platform with product management, cart system, authentication, and Stripe payments. Includes admin dashboard.",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "Redux", "JWT"],
      demo: "https://doctor-booking-team2.vercel.app/",
      code: "https://github.com/a-basuony/doctor-booking",
      image: "/images/booking-doctor.png",
    },

    {
      id: "mern-social",
      title: "LinkedIn Clone",
      description:
        "Social platform for developers with profiles, posts, chat, and GitHub integration.",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "Redux", "JWT"],
      demo: "https://linkedin-clone-two-taupe.vercel.app/",
      code: "https://github.com/a-basuony/Linkedin_Clone",
      image: "/images/linkedin-clone.png",
    },
    {
      id: "mern-happyshop",
      title: "HappyShop",
      description:
        "Full-featured e-commerce platform with product management, cart system, authentication, and Stripe payments. Includes admin dashboard.",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "Redux", "Stripe"],
      demo: "https://happy-shop-frontend-xi.vercel.app/",
      code: "https://github.com/a-basuony/happyShop-frontend",
      image: "/images/happy_shop.png",
    },
    {
      id: "safarni",
      title: "Safarni",
      description:
        "Full-featured travel platform with product management, cart system, authentication, and Stripe payments. Includes admin dashboard.",
      tech: ["MongoDB", "Express.js", "React", "Node.js", "Redux", "Stripe"],
      demo: "https://safarni-wza1.vercel.app/",
      code: "https://github.com/a-basuony/safarni",
      image: "/images/safarni.png",
    },

    // ================= NEW PROJECTS =================

    {
      id: "shoppy-dashboard",
      title: "Shoppy Dashboard",
      description: "Admin dashboard with analytics and management tools.",
      tech: ["React", "Chart.js", "Material UI"],
      demo: "https://shoppy-admin-dashboard.vercel.app/",
      code: "https://github.com/a-basuony/Admin_Dashbord_React",
      image: "/images/shoppy.webp",
    },
    {
      id: "food-order",
      title: "Food Order App",
      description: "Food ordering system with cart functionality.",
      tech: ["React", "Context API"],
      demo: "https://a-basuony.github.io/ReactMeals/",
      code: "https://github.com/a-basuony/FOOD-ORDER",
      image: "/images/reactmeal.png",
    },

    {
      id: "amazon-clone",
      title: "Amazon Clone",
      description: "Amazon e-commerce clone.",
      tech: ["React", "Firebase", "Stripe"],
      demo: "https://a-basuony.github.io/Amazon-Clone/",
      code: "https://github.com/a-basuony/Amazone_Clone_ReactJs",
      image: "/images/amazon.png",
    },

    {
      id: "todo-advanced",
      title: "Advanced Todo App",
      description: "Advanced task management application.",
      tech: ["React", "LocalStorage", "CSS"],
      demo: "https://ad-todo-app.vercel.app/",
      code: "",
      image: "/images/todo.webp",
    },

    {
      id: "tesla-clone",
      title: "Tesla Clone",
      description: "Tesla landing page clone.",
      tech: ["React", "Styled Components"],
      demo: "https://tesla-car-clone.vercel.app",
      code: "",
      image: "/images/tesla.webp",
    },

    {
      id: "google-clone",
      title: "Google Search Clone",
      description: "Google search engine clone.",
      tech: ["React", "API", "Tailwind"],
      demo: "https://google-s-c.vercel.app",
      code: "",
      image: "/images/google.webp",
    },

    {
      id: "kanban-board",
      title: "Kanban Board",
      description: "Task management board (Kanban style).",
      tech: ["JavaScript", "HTML", "CSS"],
      demo: "https://a-basuony.github.io/Kalbonyan-Board/",
      code: "https://github.com/a-basuony/Kalbonyan-Board",
      image: "/images/kanban.png",
    },

    {
      id: "covid-tracker",
      title: "COVID-19 Tracker",
      description: "COVID-19 statistics tracking app.",
      tech: ["React", "API", "Charts"],
      demo: "https://a-basuony.github.io/COVID-19-Tracker/",
      code: "https://github.com/a-basuony/COVID-19-Tracker",
      image: "/images/tracker.png",
    },

    {
      id: "netflix-clone",
      title: "Netflix Clone",
      description: "Netflix UI clone built with React.",
      tech: ["React", "API", "Firebase"],
      demo: "https://a-basuony.github.io/netflix-clone/",
      code: "https://github.com/a-basuony/netflix-clone",
      image: "/images/netflix.png",
    },

    {
      id: "ecommerce-react",
      title: "Ecommerce React App",
      description: "E-commerce product system with Redux.",
      tech: ["React", "Redux"],
      demo: "https://a-basuony.github.io/Commerce-react-app/",
      code: "https://github.com/a-basuony/Commerce-react-app",
      image: "/images/ecommerce-prodect.png",
    },

    {
      id: "mycima",
      title: "MyCima",
      description: "Movie streaming platform.",
      tech: ["React", "API"],
      demo: "https://a-basuony.github.io/MyCima/#/home",
      code: "https://github.com/a-basuony/MyCima",
      image: "/images/mycima.png",
    },

    {
      id: "quiz-app",
      title: "Quiz Application",
      description: "Interactive quiz system.",
      tech: ["JavaScript", "HTML", "CSS"],
      demo: "https://a-basuony.github.io/Quiz-app/",
      code: "https://github.com/a-basuony/Quiz-app",
      image: "/images/quize app.png",
    },

    {
      id: "youtube-clone",
      title: "YouTube Clone",
      description: "Video streaming platform clone built with React.",
      tech: ["React", "API", "CSS"],
      demo: "https://tube-clone.vercel.app",
      code: "",
      image: "/images/youtube.webp",
    },

    {
      id: "disney-clone",
      title: "Disney+ Clone",
      description: "Disney+ streaming platform clone.",
      tech: ["React", "Firebase", "API"],
      demo: "https://disneyplus-clone-185f6.web.app/",
      code: "",
      image: "/images/Disney.webp",
    },

    {
      id: "spotify-clone",
      title: "Spotify Clone",
      description: "Music streaming app clone.",
      tech: ["React", "Spotify API", "CSS"],
      demo: "https://spotify-clone-ali.vercel.app/",
      code: "",
      image: "/images/spotify.webp",
    },

    {
      id: "special-design",
      title: "Special Design",
      description: "HTML/CSS design template.",
      tech: ["HTML", "CSS", "JavaScript"],
      demo: "https://a-basuony.github.io/HTML_CSS__Javascript/",
      code: "https://github.com/a-basuony/HTML_CSS__Javascript",
      image: "/images/special desgin.png",
    },

    {
      id: "crud-app",
      title: "CRUD App",
      description: "CRUD system using vanilla JavaScript.",
      tech: ["JavaScript", "LocalStorage"],
      demo: "https://a-basuony.github.io/CRUD-2/",
      code: "",
      image: "/images/Crud.png",
    },

    {
      id: "kasper-template",
      title: "Kasper Template",
      description: "HTML/CSS website template.",
      tech: ["HTML", "CSS"],
      demo: "https://a-basuony.github.io/html-and-css-templete-two/",
      code: "https://github.com/a-basuony/html-and-css-templete-two",
      image: "/images/kasper.png",
    },

    {
      id: "bondi-template",
      title: "Bondi Template",
      description: "Creative agency landing page.",
      tech: ["HTML", "CSS", "Bootstrap"],
      demo: "https://a-basuony.github.io/Bondi/",
      code: "https://github.com/a-basuony/Bondi",
      image: "/images/bondi.png",
    },

    {
      id: "awesome-ui",
      title: "Awesome UI Project",
      description: "UI/UX portfolio template.",
      tech: ["HTML", "CSS"],
      demo: "https://a-basuony.github.io/html-css-template-three/",
      code: "https://github.com/a-basuony/html-css-template-three",
      image: "/images/AwesomeProject.png",
    },

    {
      id: "awesome-portfolio",
      title: "Awesome Portfolio",
      description: "Personal portfolio template.",
      tech: ["HTML", "CSS"],
      demo: "https://a-basuony.github.io/HTML-And-CSS-Template-One/",
      code: "https://github.com/a-basuony/project-portfolio",
      image: "/images/nice-portfolio.png",
    },

    {
      id: "ecommerce-static",
      title: "Ecommerce Website",
      description: "Static ecommerce website.",
      tech: ["HTML", "CSS", "JavaScript"],
      demo: "https://a-basuony.github.io/ecommerce/",
      code: "",
      image: "/images/ecommerce.png",
    },
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      const data = await getProjects();
      setProjects([...MERN_PROJECTS, ...data]);
      setLoading(false);
    };

    fetchProjects();
  }, []);

  if (loading) {
    return (
      <div className="py-20 flex items-center justify-center min-h-[50vh]">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
          <AutoAwesomeIcon className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-primary animate-pulse" />
        </div>
      </div>
    );
  }
  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6);
  };

  const handleShowLess = () => {
    setVisibleCount(6);
    // Optional: scroll back to top of projects section or just keep position
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="projects"
      className="py-20 md:py-32 relative overflow-hidden bg-background transition-colors duration-500"
    >
      {/* Background - Tech Grid & Circuit Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px] mask-[radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* Moving Circuit Line 1 (Horizontal) */}
        <motion.div
          animate={{
            x: ["-100%", "100%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear",
            delay: 0,
          }}
          className="absolute top-[20%] left-0 w-full h-px bg-linear-to-r from-transparent via-primary/50 to-transparent"
        />

        {/* Moving Circuit Line 2 (Horizontal) */}
        <motion.div
          animate={{
            x: ["100%", "-100%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
          className="absolute top-[60%] left-0 w-full h-px bg-linear-to-r from-transparent via-accent/50 to-transparent"
        />

        {/* Moving Circuit Line 3 (Vertical - Left) */}
        <motion.div
          animate={{
            y: ["-100%", "100%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
            delay: 1,
          }}
          className="absolute left-[10%] top-0 h-full w-px bg-linear-to-b from-transparent via-primary/30 to-transparent hidden md:block"
        />

        {/* Moving Circuit Line 4 (Vertical - Right) */}
        <motion.div
          animate={{
            y: ["100%", "-100%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
            delay: 3,
          }}
          className="absolute right-[10%] top-0 h-full w-px bg-linear-to-b from-transparent via-accent/30 to-transparent hidden md:block"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="text-center mb-16 md:mb-20 space-y-4"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm mb-4">
            <CodeIcon className="text-accent w-3 h-3 md:w-4 md:h-4" />
            <span className="text-xs md:text-sm font-semibold text-accent">
              My Work
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            <span className="bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent bg-size-[200%_auto] animate-gradient">
              Featured Projects
            </span>
          </h2>

          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Explore my latest work and creative solutions
          </p>

          <div className="w-20 md:w-24 h-1.5 mx-auto bg-linear-to-r from-primary to-accent rounded-full mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          <AnimatePresence>
            {projects.slice(0, visibleCount).map((project, index) => (
              <motion.div
                key={project.id}
                className="group relative h-full flex flex-col"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative flex flex-col h-full bg-card border border-border/50 rounded-3xl overflow-hidden hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-500 group-hover:-translate-y-2">
                  {/* Image Container */}
                  <div className="relative h-48 md:h-60 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />

                    <Image
                      src={project.image || "/images/placeholder.png"}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />

                    <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      <div className="px-3 py-1 rounded-full bg-accent/90 backdrop-blur-md text-white text-xs font-bold shadow-lg flex items-center gap-1">
                        <AutoAwesomeIcon sx={{ fontSize: 14 }} />
                        Featured
                      </div>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="flex flex-col grow p-5 md:p-6 space-y-4">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h3>
                      <motion.div
                        className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary"
                        animate={{ rotate: hoveredIndex === index ? 45 : 0 }}
                      >
                        <LaunchIcon sx={{ fontSize: 16 }} />
                      </motion.div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                    <div className="grow" /> {/* Spacer to push content down */}
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 md:px-2.5 py-1 rounded-lg bg-secondary/50 text-secondary-foreground text-[10px] md:text-xs font-medium border border-border/50"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="h-px bg-border/50 my-4" />
                    <div className="flex gap-3 mt-auto">
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:bg-primary/90 transition-all duration-300"
                        >
                          <LaunchIcon sx={{ fontSize: 18 }} />
                          Live Demo
                        </a>
                      )}
                      {project.code && (
                        <a
                          href={project.code}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-secondary text-secondary-foreground border border-border hover:bg-secondary/80 text-sm font-semibold transition-all duration-300"
                        >
                          <GitHubIcon sx={{ fontSize: 18 }} />
                          Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More / Show Less & GitHub Buttons */}
        <motion.div
          className="flex flex-col items-center gap-6 mt-16 md:mt-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {visibleCount < projects.length ? (
            <button
              onClick={handleShowMore}
              className="px-8 py-3 rounded-full bg-primary/10 text-primary font-semibold hover:bg-primary/20 transition-all duration-300 flex items-center gap-2 group cursor-pointer hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
            >
              <span>Show More</span>
              <AutoAwesomeIcon className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            </button>
          ) : (
            projects.length > 6 && (
              <button
                onClick={handleShowLess}
                className="px-8 py-3 rounded-full bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/80 transition-all duration-300 cursor-pointer hover:scale-105 hover:shadow-lg"
              >
                Show Less
              </button>
            )
          )}

          <div className="flex flex-col items-center gap-2">
            <p className="text-muted-foreground text-sm">
              Want to see everything?
            </p>
            <a
              href="https://github.com/a-basuony"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden px-8 py-3 rounded-full bg-card border border-border hover:border-primary/50 transition-colors duration-300"
            >
              <span className="relative flex items-center gap-2 text-foreground font-medium group-hover:text-primary transition-colors">
                <GitHubIcon />
                View All Projects on GitHub
                <LaunchIcon
                  className="transform group-hover:translate-x-1 transition-transform duration-300"
                  sx={{ fontSize: 18 }}
                />
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
