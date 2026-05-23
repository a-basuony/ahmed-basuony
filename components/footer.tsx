import { socialLinks } from "@/lib/social-links";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: "About Me", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Milestones", href: "#milestones" },
    { label: "Certificates", href: "#certificates" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="mb-24 border-t border-border bg-background/50 backdrop-blur-md transition-colors duration-300 sm:mb-0">
      <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
        <div className="mb-12 grid grid-cols-1 gap-10 text-center md:grid-cols-3 md:gap-8 md:text-left">
          <div className="flex flex-col items-center space-y-4 md:items-start">
            <div className="space-y-2">
              <h3 className="bg-linear-to-r from-primary to-accent bg-clip-text text-xl font-bold text-transparent">
                Ahmed Basuony
              </h3>
              <p className="mx-auto max-w-xs text-sm leading-relaxed text-muted-foreground md:mx-0">
                Full Stack MERN Developer building responsive interfaces, REST
                APIs, dashboards, and production-ready web applications.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-foreground">
              Quick Links
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="flex items-center justify-center gap-2 transition-colors hover:text-primary md:justify-start"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center md:items-start">
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-foreground">
              Connect
            </h4>
            <div className="flex flex-wrap justify-center gap-4 md:justify-start">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group flex items-center justify-center rounded-xl p-3 text-xl transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.bgClass}`}
                  aria-label={social.label}
                >
                  <span className={`relative z-20 ${social.textClass}`}>
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="my-8 h-px bg-linear-to-r from-transparent via-border to-transparent" />

        <div className="flex flex-col items-center justify-between gap-3 text-center text-sm text-muted-foreground md:flex-row md:text-left">
          <p>Copyright {currentYear} Ahmed Basuony. All rights reserved.</p>
          <p>Built with Next.js, TypeScript, and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
