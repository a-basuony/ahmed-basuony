import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class", ".dark"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        light: {
          primary: "#6366F1",    // Indigo 500
          secondary: "#64748B",  // Slate 500
          accent: "#4F46E5",     // Indigo 600
          background: "#F8FAFC", // Slate 50
          foreground: "#334155", // Slate 700
          muted: "#94A3B8",      // Slate 400
          border: "#E2E8F0",     // Slate 300
        },
        dark: {
          primary: "#818CF8",    // Indigo 400
          secondary: "#94A3B8",  // Slate 400
          accent: "#818CF8",     // Indigo 400
          background: "#020617", // Slate 950
          foreground: "#F8FAFC", // Slate 50
          muted: "#1E293B",      // Slate 800
          border: "#1E293B",     // Slate 800
        }
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-slower": "float 10s ease-in-out infinite",
        "blink": "blink 1s step-end infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        blink: {
          "from, to": { opacity: "1" },
          "50%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
}

export default config
