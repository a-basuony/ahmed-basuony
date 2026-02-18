"use client";

import dynamic from "next/dynamic";
import Hero from "@/components/hero";

// Above-the-fold: direct imports for SSR (Hero)
// Below-the-fold: dynamic imports for code-splitting
const Sidebar = dynamic(() => import("@/components/sidebar"), {
  ssr: false,
  loading: () => (
    <aside className="hidden sm:flex sticky left-0 top-0 h-screen w-72 bg-sidebar border-r border-sidebar-border p-6 flex-col z-40 animate-pulse" />
  ),
});
const BottomNavbar = dynamic(() => import("@/components/Navbar"), {
  ssr: false,
});
const Skills = dynamic(() => import("@/components/skills"));
const Projects = dynamic(() => import("@/components/projects"));
const Certificates = dynamic(() => import("@/components/certificates"), {
  ssr: false,
});
const Testimonials = dynamic(() => import("@/components/testimonials"), {
  ssr: false,
});
const Contact = dynamic(() => import("@/components/contact"), { ssr: false });
const Footer = dynamic(() => import("@/components/footer"), { ssr: false });
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
