"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "@/lib/theme-provider";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import BedtimeIcon from "@mui/icons-material/Bedtime";
import SunnyIcon from "@mui/icons-material/Sunny";
import InfoIcon from "@mui/icons-material/Info";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import WorkIcon from "@mui/icons-material/Work";
import BuildIcon from "@mui/icons-material/Build";
import TimelineIcon from "@mui/icons-material/Timeline";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import ContactsIcon from "@mui/icons-material/Contacts";
import { socialLinks } from "@/lib/social-links";

export default function Sidebar() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  // Set isExpanded to false by default on mount
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentTheme = mounted ? theme : "dark";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { label: "About Me", id: "about", icon: <InfoIcon /> },
    { label: "Skills", id: "skills", icon: <FormatListBulletedIcon /> },
    { label: "Services", id: "services", icon: <BuildIcon /> },
    { label: "Projects", id: "projects", icon: <WorkIcon /> },
    { label: "Milestones", id: "milestones", icon: <TimelineIcon /> },
    {
      label: "Certificates",
      id: "certificates",
      icon: <WorkspacePremiumIcon />,
    },
    { label: "Contact", id: "contact", icon: <ContactsIcon /> },
  ];

  return (
    <aside
      className={`hidden sm:flex sticky left-0 top-0 h-screen bg-sidebar text-sidebar-foreground border-r border-sidebar-border p-6 flex-col z-40 overflow-hidden animate-fade-in transition-all duration-300 ${
        isExpanded ? "w-72" : "w-20"
      }`}
    >
      {/* Toggle Button */}
      <button
        type="button"
        onClick={() => setIsExpanded(!isExpanded)}
        className="absolute right-4 top-4 z-10 flex min-h-[44px] min-w-[44px] cursor-pointer items-center justify-center rounded-lg p-2 transition-colors hover:bg-sidebar-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring"
        aria-label={isExpanded ? "Collapse menu" : "Expand menu"}
      >
        {isExpanded ? <CloseIcon /> : <MenuIcon />}
      </button>

      {/* Developer Info */}
      <div
        className={`text-center mb-6 animate-fade-in ${!isExpanded && "mt-12"}`}
      >
        <div className={`mb-4 flex justify-center ${!isExpanded && "mb-0"}`}>
          <div
            className={`relative rounded-full overflow-hidden border-2  glow-effect transition-all duration-300`}
            style={{
              width: isExpanded ? "96px" : "30px",
              height: isExpanded ? "96px" : "30px",
            }}
          >
            <Image
              src="/images/profileImage.webp"
              alt="Ahmed Basuony"
              width={192}
              height={192}
              className="object-cover w-full h-full"
              quality={100}
              priority
            />
          </div>
        </div>
        {isExpanded && (
          <>
            <h2
              className="text-2xl font-bold text-sidebar-foreground mb-2"
              style={{ fontFamily: '"Saira Stencil One", sans-serif' }}
            >
              Ahmed Basuony
            </h2>
            <p className="text-lg text-sidebar-foreground/80">
              Full-Stack Developer
            </p>
            <p className="text-sm mt-1 text-sidebar-foreground/70">
              React | Next.js | Node.js | MongoDB | Express | JavaScript
            </p>
          </>
        )}
      </div>

      {/* Theme Toggle */}
      {isExpanded ? (
        <button
          type="button"
          className="mb-6 flex w-full animate-fade-in cursor-pointer items-center justify-center gap-3 rounded-lg border border-sidebar-primary/20 bg-sidebar-primary/10 p-3 transition-colors hover:bg-sidebar-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring"
          onClick={toggleTheme}
          aria-label={
            currentTheme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"
          }
          style={{ animationDelay: "0.1s" }}
        >
          <div
            className={`w-11 h-6 rounded-full flex items-center relative transition-colors duration-300 ${
              currentTheme === "dark"
                ? "bg-blue-600/30 dark:bg-green-600/30"
                : "bg-gray-300"
            }`}
          >
            <div
              className={`w-5 h-5 absolute transition-all duration-300 flex items-center justify-center ${
                currentTheme === "dark"
                  ? "text-green-400 dark:text-green-500"
                  : "text-yellow-500"
              }`}
              style={{
                transform:
                  currentTheme === "dark" ? "translateX(22px)" : "translateX(2px)",
              }}
            >
              {currentTheme === "dark" ? (
                <BedtimeIcon sx={{ fontSize: 18 }} />
              ) : (
                <SunnyIcon sx={{ fontSize: 18 }} />
              )}
            </div>
          </div>
          <span className="text-xs font-medium text-sidebar-foreground/80">
            {currentTheme === "dark" ? "Dark" : "Light"} Mode
          </span>
        </button>
      ) : (
        <button
          type="button"
          onClick={toggleTheme}
          className={`mb-6 flex cursor-pointer items-center justify-center rounded-lg p-2.5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring ${
            currentTheme === "dark"
              ? "hover:bg-green-500/20 text-green-400"
              : "hover:bg-yellow-500/20 text-yellow-600"
          }`}
          title={
            currentTheme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"
          }
          aria-label={
            currentTheme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"
          }
        >
          <span className="text-xl">
            {currentTheme === "dark" ? <BedtimeIcon /> : <SunnyIcon />}
          </span>
        </button>
      )}

      {/* Navigation */}
      <nav className="flex-1 mb-6">
        {isExpanded && (
          <p className="text-xs font-semibold text-sidebar-foreground/70 uppercase tracking-wider mb-4">
            Navigation
          </p>
        )}
        <div className="space-y-2">
          {navItems.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => scrollToSection(item.id)}
              className={`group relative flex min-h-[44px] w-full animate-fade-in cursor-pointer items-center overflow-hidden rounded-lg px-4 py-3 text-left text-sm font-medium text-sidebar-foreground transition-all duration-300 hover:bg-sidebar-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sidebar-ring dark:text-white ${
                !isExpanded && "flex justify-center px-2"
              }`}
              style={{ animationDelay: `${0.2 + index * 0.1}s` }}
              title={!isExpanded ? item.label : ""}
            >
              {isExpanded ? (
                <>
                  <span className="relative z-10">{item.label}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-sidebar-primary/0 via-sidebar-primary/20 to-sidebar-primary/0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </>
              ) : (
                <span className="text-lg">{item.icon}</span>
              )}
            </button>
          ))}
        </div>
      </nav>

      {/* Social Links */}
      <div
        className="space-y-4 animate-fade-in"
        style={{ animationDelay: "0.5s" }}
      >
        {isExpanded && (
          <p className="text-xs font-semibold text-sidebar-foreground/70 uppercase tracking-wider">
            Connect
          </p>
        )}
        <div className={`flex gap-3 ${!isExpanded && "flex-col"}`}>
          {socialLinks
            .filter(
              (link) => link.name !== "Facebook" && link.name !== "Instagram",
            ) // Exclude Facebook and Instagram
            .map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className=" p-2 rounded-lg bg-sidebar-primary/10 hover:bg-sidebar-primary/20 transition-all duration-300 group hover:scale-110 hover:rotate-5 animate-fade-in text-lg flex items-center justify-center"
                style={{
                  color:
                    currentTheme === "dark"
                      ? `color-mix(in srgb, ${social.color} 80%, white 50%)`
                      : `color-mix(in srgb, ${social.color} 70%, #64748B 30%)`,
                  opacity: currentTheme === "dark" ? 1 : 0.85,
                  animationDelay: `${0.6 + index * 0.1}s`,
                }}
                aria-label={social.label}
                title={social.label}
              >
                {social.icon}
              </a>
            ))}
        </div>
      </div>
    </aside>
  );
}
