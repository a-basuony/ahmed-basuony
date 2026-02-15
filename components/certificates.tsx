"use client";

import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useState, useRef } from "react";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import Image from "next/image";

export default function Certificates() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState<boolean>(false);
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const certificates = [
    {
      title: "Full-Stack Development Diploma",
      issuer: "YAT",
      date: "Oct 2020",
      description:
        "Hands-on training in Full-Stack development using modern web technologies",
      link: "https://drive.google.com/file/d/1ei8J4ZojIV4tvOXlTm0y6Un5pujaeNWZ/view?usp=sharing",
      color: "from-pink-500 to-teal-500", // First color for item 1
      icon: "🖥️",
      image: "/images/yat.png",
    },
    {
      title: "Introduction to Computer Science",
      issuer: "CS50",
      date: "Jun 2021",
      description:
        "Fundamental concepts of computer science with practical exercises",
      link: "https://drive.google.com/file/d/1xUH1EmXhZnTFXR46C72FnQtJrWh-Gr40/view?usp=sharing",
      color: "from-pink-500 to-teal-500", // First color for item 2
      icon: "💡",
      image: "/images/cs50.png",
    },
    {
      title: "Foundations of Computer Science",
      issuer: "Coursera",
      date: "Sep 2022",
      description:
        "Comprehensive training in computer science fundamentals with practical projects",
      link: "https://drive.google.com/file/d/1LBqm1yl18qW3NI3TF8emlEItcGSGvS_X/view?usp=sharing",
      color: "from-red-500 to-teal-500", // Second color for item 3
      icon: "💻",
      image: "/images/coursera.png",
    },
    {
      title: "Full-Stack Development Advanced",
      issuer: "YAT",
      date: "Nov 2021",
      description:
        "Advanced Full-Stack training with hands-on projects and modern frameworks",
      link: "https://drive.google.com/file/d/1PlYaDwwJ_NNdhq1-CSnZ_r9SXJCK44jA/view?usp=sharing",
      color: "from-red-500 to-teal-500", // Second color for item 4
      icon: "🖥️",
      image: "/images/yat2.png",
    },
    {
      title: "Web Development Bootcamp",
      issuer: "Egypt FWD",
      date: "Feb 2022",
      description:
        "Hands-on web development projects using HTML, CSS, JS, Web Development Diploma and modern frameworks",
      link: "https://drive.google.com/file/d/1lv9VW-1HRpYtQW_tR9XSTj1FpVPcZ-Lm/view?usp=sharing",
      color: "from-pink-500 to-teal-500", // First color for item 5
      icon: "🌐",
      image: "/images/fwd.png",
    },
    {
      title: "Git & GitHub",
      issuer: "Almadrsa",
      date: "May 2022",
      description:
        "Practical training on version control using Git and GitHub workflows",
      link: "https://drive.google.com/file/d/1HeDI07qKS3vEhJfSq9_tto2vrWb5bXpO/view?usp=sharing",
      color: "from-pink-500 to-teal-500", // First color for item 6
      icon: "🔧",
      image: "/images/git,github.png",
    },
    {
      title: "HTML, CSS, and JavaScript",
      issuer: "Udemy",
      date: "Jul 2022",
      description:
        "Hands-on training in web fundamentals: HTML, CSS, and JavaScript projects",
      link: "https://drive.google.com/file/d/19sfneSztnMgBrHyBnYeJGg0YS6GlJw6h/view?usp=sharing",
      color: "from-red-500 to-teal-500", // Second color for item 7
      icon: "📄",
      image: "/images/html,css.jpg",
    },
    {
      title: "JavaScript Advanced",
      issuer: "Udemy",
      date: "Sep 2022",
      description:
        "Advanced JavaScript topics including ES6+, DOM manipulation, and projects",
      link: "https://drive.google.com/file/d/1wxSuSC-z5CxGglQcU11Ihkpn80I8CSdt/view?usp=sharing",
      color: "from-red-500 to-teal-500", // Second color for item 8
      icon: "⚡",
      image: "/images/jsguide.jpg",
    },
    {
      title: "Programming Foundations: Beyond the Fundamentals",
      issuer: "LinkedIn",
      date: "Dec 2022",
      description:
        "Professional training in programming fundamentals with hands-on exercises",
      link: "https://drive.google.com/file/d/1FsKK06DAzPp9m-mAxu4UNs6Ly5Os7Ajf/view?usp=sharing",
      color: "from-pink-500 to-teal-500", // First color for item 9
      icon: "📘",
      image: "/images/linkedin2.png",
    },
    {
      title: "Node.js, Express, MongoDB The Complete BootCamp",
      issuer: "Udemy",
      date: "Jan 2023",
      description:
        "Hands-on Node.js, Express, MongoDB The Complete BootCamp training: building backend applications and RESTful APIs",
      link: "https://drive.google.com/file/d/1dtiJcckVph5PrVG7M37VpvYIMPxPQFGO/view?usp=sharing",
      color: "from-pink-500 to-teal-500", // First color for item 10
      icon: "🟢",
      image: "/images/node-udemy.jpg",
    },
    {
      title: "React & TypeScript The Practical Guide",
      issuer: "Udemy",
      date: "Mar 2023",
      description:
        "Building scalable React applications with TypeScript and modern best practices",
      link: "https://drive.google.com/file/d/1oWci0ZNXg3InZY1H5GUEDTbWz1JP3JVQ/view?usp=sharing",
      color: "from-red-500 to-teal-500", // Second color for item 11
      icon: "⚛️",
      image: "/images/react-typescript.jpg",
    },
    {
      title: "React The Complete Guide",
      issuer: "Udemy",
      date: "Apr 2023",
      description:
        "Comprehensive React training including hooks, context, and projects",
      link: "https://drive.google.com/file/d/1jN6kYsxfai-jR9fxdOgvskHFiuN49zFW/view?usp=sharing",
      color: "from-red-500 to-teal-500", // Second color for item 12
      icon: "⚛️",
      image: "/images/react-guide.jpg",
    },
    {
      title: "React Native Development & The Practical Guide",
      issuer: "Udemy",
      date: "May 2023",
      description:
        "Hands-on mobile development with React Native and Expo projects",
      link: "https://drive.google.com/file/d/1R9yogXoI9j0uy6mQZ_orz9xyEiyQADe2/view?usp=sharing",
      color: "from-pink-500 to-teal-500", // First color for item 13
      icon: "📱",
      image: "/images/react-native.jpg",
    },
    {
      title:
        "Node.js Advanced & The Complete Guide (MVC, REST API, JWT, MongoDB, GraphQL)",
      issuer: "Udemy",
      date: "Jun 2023",
      description:
        "Advanced Node.js topics including Express, middleware, and API best practices",
      link: "https://drive.google.com/file/d/1ZDmV5y-_2hkJfR53lozHGrhPvDETOfxt/view?usp=sharing",
      color: "from-pink-500 to-teal-500", // First color for item 14
      icon: "🟢",
      image: "/images/nodejs.jpg",
    },
    {
      title: "Programming Fundamentals",
      issuer: "LinkedIn",
      date: "Aug 2023",
      description:
        "Hands-on training in programming fundamentals with exercises and projects",
      link: "https://drive.google.com/file/d/1aYoK7-quhpPKpIjfte3amdgQ9UNTIexA/view?usp=sharing",
      color: "from-red-500 to-teal-500", // Second color for item 15
      icon: "💻",
      image: "/images/linkedin1.png",
    },
  ];

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  // Filter certificates based on showAll state
  const displayedCertificates = showAll
    ? certificates
    : certificates.slice(0, 2);
  const remainingCount = certificates.length - 2;

  // Toggle handler with smooth scroll
  const toggleShowAll = () => {
    if (showAll) {
      // Scroll to top of section when collapsing
      containerRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setShowAll(!showAll);
  };

  return (
    <section
      id="certificates"
      ref={containerRef}
      className="min-h-screen py-32 px-4 md:px-8 relative overflow-hidden bg-linear-to-b from-background via-background/95 to-background"
    >
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_2px,transparent_2px),linear-gradient(90deg,rgba(139,92,246,0.03)_2px,transparent_2px)] bg-[size:80px_80px]" />

      {/* Floating Orbs */}
      <motion.div
        style={{ y }}
        className="absolute top-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-[150px] opacity-10"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-80, 80]) }}
        className="absolute bottom-20 left-10 w-80 h-80 bg-pink-500 rounded-full blur-[120px] opacity-10"
      />

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-purple-400/20 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="mb-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <span className="bg-linear-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
              Certificates
            </span>
          </motion.h2>

          <motion.div
            className="w-24 h-1.5 bg-linear-to-r from-purple-500 to-pink-500 rounded-full mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          />

          <motion.p
            className="text-muted-foreground mt-6 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            Professional certifications from leading tech institutions
          </motion.p>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <AnimatePresence mode="sync">
            {displayedCertificates.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                className="group relative"
              >
                {/* Card Glow Effect */}
                <motion.div
                  className={`absolute -inset-1 bg-linear-to-r ${cert.color} rounded-3xl blur-xl opacity-20 group-hover:opacity-50 transition-opacity duration-500`}
                  animate={{
                    scale: hoveredIndex === index ? 1.05 : 1,
                  }}
                />

                {/* Main Card */}
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-card/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-border group-hover:border-purple-500/50 shadow-xl group-hover:shadow-2xl group-hover:shadow-purple-500/20 transition-all duration-500"
                >
                  {/* Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    {/* Gradient Overlay */}
                    <motion.div
                      className={`absolute inset-0 bg-linear-to-br ${cert.color} opacity-60 mix-blend-multiply z-10`}
                      animate={{
                        opacity: hoveredIndex === index ? 0.7 : 0.6,
                      }}
                    />

                    {/* Background Image */}
                    {/* Background Image */}
                    <motion.div
                      className="relative w-full h-full"
                      animate={{
                        scale: hoveredIndex === index ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <Image
                        src={cert.image}
                        alt={cert.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </motion.div>

                    {/* Trophy Icon */}
                    <motion.div
                      className="absolute top-4 right-4 w-16 h-16 bg-white/10 backdrop-blur-lg rounded-2xl flex items-center justify-center border border-white/20 z-20"
                      animate={{
                        rotate:
                          hoveredIndex === index ? [0, -10, 10, -10, 0] : 0,
                        scale: hoveredIndex === index ? 1.1 : 1,
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <EmojiEventsIcon className="text-amber-400 text-3xl" />
                    </motion.div>

                    {/* Floating Emoji */}
                    <motion.div
                      className="absolute top-4 left-4 text-4xl z-20"
                      animate={{
                        y: hoveredIndex === index ? [0, -10, 0] : 0,
                        rotate: hoveredIndex === index ? [0, 10, -10, 0] : 0,
                      }}
                      transition={{
                        duration: 2,
                        repeat: hoveredIndex === index ? Infinity : 0,
                      }}
                    >
                      {cert.icon}
                    </motion.div>

                    {/* Shine Effect */}
                    <motion.div
                      className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full z-20"
                      animate={{
                        x: hoveredIndex === index ? "200%" : "-100%",
                      }}
                      transition={{ duration: 0.8 }}
                    />

                    {/* Date Badge */}
                    <motion.div
                      className="absolute bottom-4 left-4 z-20"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 + 0.3 }}
                      viewport={{ once: true }}
                    >
                      <span
                        className={`px-4 py-2 bg-linear-to-r ${cert.color} text-white text-sm font-bold rounded-full shadow-lg`}
                      >
                        {cert.date}
                      </span>
                    </motion.div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 space-y-4">
                    {/* Title & Issuer */}
                    <div>
                      <motion.h3 className="text-2xl font-bold text-foreground group-hover:text-transparent group-hover:bg-linear-to-r group-hover:bg-clip-text group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300 mb-2">
                        {cert.title}
                      </motion.h3>
                      <motion.p className="text-purple-400 font-semibold flex items-center gap-2">
                        <motion.span
                          className="w-2 h-2 rounded-full bg-purple-500"
                          animate={{
                            scale: hoveredIndex === index ? [1, 1.5, 1] : 1,
                            opacity: hoveredIndex === index ? [1, 0.5, 1] : 1,
                          }}
                          transition={{
                            duration: 1,
                            repeat: hoveredIndex === index ? Infinity : 0,
                          }}
                        />
                        {cert.issuer}
                      </motion.p>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {cert.description}
                    </p>

                    {/* Action Button */}
                    <motion.a
                      href={cert.link}
                      target="_blank"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`group/btn flex items-center justify-center gap-3 w-full py-3.5 rounded-xl bg-linear-to-r ${cert.color} text-white font-semibold shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden`}
                    >
                      <motion.span
                        className="absolute inset-0 bg-white/20"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.5 }}
                      />
                      <span className="relative z-10">View Certificate</span>
                      <motion.span
                        className="relative z-10 text-xl"
                        animate={{
                          x: hoveredIndex === index ? [0, 5, 0] : 0,
                        }}
                        transition={{
                          duration: 0.5,
                          repeat: hoveredIndex === index ? Infinity : 0,
                        }}
                      >
                        ↗
                      </motion.span>
                    </motion.a>
                  </div>

                  {/* Corner Decoration */}
                  <motion.div
                    className={`absolute -bottom-10 -right-10 w-40 h-40 bg-linear-to-br ${cert.color} opacity-10 blur-3xl rounded-full`}
                    animate={{
                      scale: hoveredIndex === index ? 1.5 : 1,
                      opacity: hoveredIndex === index ? 0.2 : 0.1,
                    }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Show More/Less Button */}
        <motion.div
          className="mt-12 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={toggleShowAll}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-linear-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 overflow-hidden"
            aria-label={
              showAll
                ? "Show less certificates"
                : `Show more certificates (${remainingCount} more)`
            }
            aria-expanded={showAll}
          >
            {/* Button shine effect */}
            <motion.div
              className="absolute inset-0 bg-linear-to-r from-transparent via-white/30 to-transparent -translate-x-full"
              whileHover={{
                x: "200%",
                transition: { duration: 0.6 },
              }}
            />

            <span className="relative z-10 flex items-center gap-2">
              {showAll ? (
                <>
                  Show Less
                  <motion.span
                    animate={{ y: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    ↑
                  </motion.span>
                </>
              ) : (
                <>
                  Show More ({remainingCount} more)
                  <motion.span
                    animate={{ y: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    ↓
                  </motion.span>
                </>
              )}
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
