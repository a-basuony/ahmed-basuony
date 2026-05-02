"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/hero";

// Above-the-fold: direct imports for SSR (Hero)
import Sidebar from "@/components/sidebar";
import BottomNavbar from "@/components/Navbar";
import Footer from "@/components/footer";

// Below-the-fold: dynamic imports for code-splitting
const Skills = dynamic(() => import("@/components/skills"));
const Projects = dynamic(() => import("@/components/projects"));
const Certificates = dynamic(() => import("@/components/certificates"));
const Testimonials = dynamic(() => import("@/components/testimonials"));
const Contact = dynamic(() => import("@/components/contact"));
const ChatBot = dynamic(() => import("@/components/chatbot"), { ssr: false });
const GoTop = dynamic(() => import("@/components/go-top"), { ssr: false });

export default function HomeContent() {
  return (
    <div className="flex flex-row min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 relative w-full overflow-x-hidden">
        <div className="w-full">
          <BottomNavbar />
          <Hero />
          <Skills />
          <Projects />
          <Certificates />
          <Testimonials />
          <Contact />
          <Footer />
        </div>
        <GoTop />
        <ChatBot />
      </div>
    </div>
  );
}
