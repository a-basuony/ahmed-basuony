"use client";

import dynamic from "next/dynamic";
import ClientShell from "@/components/client-shell";

// Dynamic imports with ssr: false for all components to match original "client-only" behavior
// but with the benefit of code-splitting (separate chunks)
const Sidebar = dynamic(() => import("@/components/sidebar"), { ssr: false });
const Hero = dynamic(() => import("@/components/hero"), { ssr: false });
const BottomNavbar = dynamic(() => import("@/components/Navbar"), {
  ssr: false,
});
const Skills = dynamic(() => import("@/components/skills"), { ssr: false });
const Projects = dynamic(() => import("@/components/projects"), { ssr: false });
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
    <ClientShell>
      <div className="flex flex-row min-h-screen bg-background">
        <Sidebar />
        <main className="flex-1 relative w-full overflow-x-hidden">
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
        </main>
      </div>
    </ClientShell>
  );
}
