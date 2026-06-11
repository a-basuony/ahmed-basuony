"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/hero";

// Above-the-fold: direct imports for SSR (Hero)
import Sidebar from "@/components/sidebar";
import BottomNavbar from "@/components/Navbar";
import Footer from "@/components/footer";
import Reveal from "@/components/reveal";

// Below-the-fold: dynamic imports for code-splitting
const About = dynamic(() => import("@/components/about"));
const FullStackArchitectureVisual = dynamic(
  () => import("@/components/full-stack-architecture-visual"),
);
const Skills = dynamic(() => import("@/components/skills"));
const Services = dynamic(() => import("@/components/services"));
const Projects = dynamic(() => import("@/components/projects"));
const Milestones = dynamic(() => import("@/components/milestones"));
const Certificates = dynamic(() => import("@/components/certificates"));
const Testimonials = dynamic(() => import("@/components/testimonials"));
const Contact = dynamic(() => import("@/components/contact"));
const ChatBot = dynamic(() => import("@/components/chatbot"), { ssr: false });
const GoTop = dynamic(() => import("@/components/go-top"), { ssr: false });
const ThemeCustomizer = dynamic(() => import("@/components/theme-customizer"), {
  ssr: false,
});

export default function HomeContent() {
  return (
    <div className="flex flex-row min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 relative w-full overflow-x-hidden">
        <div className="w-full">
          <BottomNavbar />
          <Hero />
          <Reveal>
            <About />
          </Reveal>
          <Reveal>
            <FullStackArchitectureVisual />
          </Reveal>
          <Reveal>
            <Skills />
          </Reveal>
          <Reveal>
            <Projects />
          </Reveal>
          <Reveal>
            <Services />
          </Reveal>
          <Reveal>
            <Milestones />
          </Reveal>
          <Reveal>
            <Certificates />
          </Reveal>
          <Reveal>
            <Testimonials />
          </Reveal>
          <Reveal>
            <Contact />
          </Reveal>
          <Reveal>
            <Footer />
          </Reveal>
        </div>
        <GoTop />
        <ThemeCustomizer />
        <ChatBot />
      </div>
    </div>
  );
}
