import type React from "react";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Saira_Stencil_One } from "next/font/google";
import { ThemeProvider } from "@/lib/theme-provider";
import Script from "next/script";
import "./globals.css";

// TODO: After deploying custom domain, update this to https://ahmedbasuony.com
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://ahmed-basuony.vercel.app";

// Font optimization with display swap for maximum performance
const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
  preload: true,
  fallback: ["system-ui", "arial"],
  adjustFontFallback: true,
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
  preload: true,
  fallback: ["Courier New", "monospace"],
  adjustFontFallback: true,
});

const saira = Saira_Stencil_One({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-saira",
  display: "swap",
});

// Viewport configuration for better mobile experience
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),

  title: {
    default: "Ahmed Basuony | MERN Stack Developer Saudi Arabia & Egypt",
    template: "%s | Ahmed Basuony",
  },

  description:
    "Ahmed Basuony (أحمد بسيوني) - Expert MERN Stack Developer specializing in MongoDB, Express.js, React, Node.js, Next.js, and TypeScript. Based in Saudi Arabia and Egypt. Building scalable, high-performance web applications for businesses across the Middle East.",

  keywords: [
    // Primary Name & Brand
    "Ahmed Basuony",
    "أحمد بسيوني",
    "Ahmad Basuony",
    "Ahmad Basuoni",
    "Ahmed Bassuony",
    "أحمد باسيوني",
    "Ahmed Basuoni",
    "Ahmad Basuoni",
    "Ahmed Basuoney",
    "Ahmad Basuoney",
    "Ahmed Basuonie",
    "Ahmed Basuonee",
    "Ahmed Basuny",

    // Core MERN Stack
    "MERN Stack Developer",
    "MongoDB Developer",
    "Express.js Developer",
    "React Developer",
    "Node.js Developer",
    "Full Stack JavaScript Developer",

    // Modern Tech Stack
    "Next.js Developer",
    "TypeScript Developer",
    "Tailwind CSS Developer",
    "React 19",
    "Next.js 15",

    // Location-Specific
    "MERN Developer Saudi Arabia",
    "Web Developer Saudi Arabia",
    "React Developer Riyadh",
    "Node.js Developer Egypt",
    "Full Stack Developer Cairo",
    "Middle East Web Developer",

    // Arabic Professional Terms
    "مطور ويب السعودية",
    "أحمد بسيوني مبرمج",
    "مطور مواقع مصر",

    // Services & Specializations
    "API Development",
    "Database Design MongoDB",
    "RESTful API Developer",
    "E-commerce Development",
    "SaaS Application Developer",
    "Responsive Web Design",
    "Mobile-First Development",

    // Additional Technologies
    "Redux Toolkit",
    "Mongoose ODM",
    "Socket.io",
    "JWT Authentication",
    "Docker",
    "AWS",

    // Professional Status
    "Freelance MERN Developer",
    "Remote Full Stack Developer",
    "Hire MERN Stack Developer",
  ],

  authors: [
    {
      name: "Ahmed Basuony",
      url: SITE_URL,
    },
  ],

  creator: "Ahmed Basuony",
  publisher: "Ahmed Basuony",

  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },

  alternates: {
    canonical: SITE_URL,
  },

  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ar_SA", "ar_EG"],
    url: SITE_URL,
    siteName: "Ahmed Basuony - MERN Stack Developer Portfolio",
    title: "Ahmed Basuony | MERN Stack Developer Saudi Arabia & Egypt",
    description:
      "Expert MERN Stack Developer (MongoDB, Express, React, Node.js) building modern web applications for Saudi Arabia and Egypt. Specializing in Next.js, TypeScript, and scalable backend solutions.",
    images: [
      {
        url: `${SITE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Ahmed Basuony - MERN Stack Developer Portfolio",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    site: "@ahmedbasuony",
    creator: "@ahmedbasuony",
    title: "Ahmed Basuony | MERN Stack Developer",
    description:
      "Building scalable web applications with the MERN Stack (MongoDB, Express, React, Node.js). Specialized in Next.js and TypeScript.",
    images: [`${SITE_URL}/og-image.png`],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      {
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    shortcut: "/favicon.svg",
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },

  manifest: "/site.webmanifest",

  verification: {
    google: "WdJppG3mAkZoon8ptYrXM7OGEllTG3SK7u3T__GSNtk",
  },

  appleWebApp: {
    capable: true,
    title: "Ahmed Basuony",
    statusBarStyle: "black-translucent",
  },

  applicationName: "Ahmed Basuony Portfolio",
  referrer: "origin-when-cross-origin",
  category: "technology",
  classification: "Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Enhanced Person Schema with MERN Stack focus
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${SITE_URL}/#person`,
    name: "Ahmed Basuony",
    alternateName: ["أحمد بسيوني", "Ahmad Basuony", "Ahmed Basuony Developer"],
    url: SITE_URL,
    image: {
      "@type": "ImageObject",
      url: `${SITE_URL}/ahmed.png`,
      width: 800,
      height: 800,
      caption: "Ahmed Basuony - MERN Stack Developer",
    },
    jobTitle: "MERN Stack Developer",
    description:
      "Expert MERN Stack Developer specializing in MongoDB, Express.js, React, Node.js, Next.js, and TypeScript. Building scalable, high-performance web applications for businesses in Saudi Arabia and Egypt.",
    knowsAbout: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "RESTful APIs",
      "Database Design",
      "Mongoose ODM",
      "Redux Toolkit",
      "Tailwind CSS",
      "JWT Authentication",
      "Socket.io",
      "Docker",
      "AWS",
      "Git & GitHub",
      "Web Performance Optimization",
      "SEO",
      "Responsive Design",
      "API Development",
    ],
    knowsLanguage: [
      {
        "@type": "Language",
        name: "English",
        alternateName: "en",
      },
      {
        "@type": "Language",
        name: "Arabic",
        alternateName: "ar",
      },
    ],
    sameAs: [
      "https://github.com/a-basuony",
      "https://www.linkedin.com/in/ahmed-basuony-0654202a4/",
      "https://twitter.com/ahmedbasuony",
      "https://dev.to/ahmedbasuony",
    ],
    address: [
      {
        "@type": "PostalAddress",
        addressLocality: "Riyadh",
        addressRegion: "Riyadh Region",
        addressCountry: "SA",
      },
      {
        "@type": "PostalAddress",
        addressLocality: "Cairo",
        addressRegion: "Cairo Governorate",
        addressCountry: "EG",
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Professional",
      email: "ahmedbasuony.dev@gmail.com",
      telephone: "+201093793161",
      availableLanguage: ["English", "Arabic"],
    },
    hasOccupation: {
      "@type": "Occupation",
      name: "MERN Stack Developer",
      occupationLocation: [
        {
          "@type": "Country",
          name: "Saudi Arabia",
        },
        {
          "@type": "Country",
          name: "Egypt",
        },
      ],
      skills: "MongoDB, Express.js, React, Node.js, Next.js, TypeScript",
    },
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Ahmed Basuony - MERN Stack Developer Portfolio",
    description:
      "Professional portfolio showcasing MERN Stack projects, full-stack web applications, and modern JavaScript development expertise.",
    inLanguage: ["en-US", "ar-SA", "ar-EG"],
    publisher: {
      "@id": `${SITE_URL}/#person`,
    },
  };

  // Professional Service Schema
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Ahmed Basuony - MERN Stack Development Services",
    description:
      "Professional MERN Stack development services including MongoDB database design, Express.js backend development, React frontend development, and Node.js server-side solutions.",
    url: SITE_URL,
    telephone: "+201093793161",
    priceRange: "$$",
    areaServed: [
      {
        "@type": "Country",
        name: "Saudi Arabia",
      },
      {
        "@type": "Country",
        name: "Egypt",
      },
      {
        "@type": "Place",
        name: "Middle East",
      },
      "Worldwide",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "MERN Stack Development Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Full Stack Web Development",
            description: "Complete MERN stack application development",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "API Development",
            description:
              "RESTful API design and development with Node.js and Express",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Database Design",
            description: "MongoDB database architecture and optimization",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Frontend Development",
            description: "Modern React and Next.js application development",
          },
        },
      ],
    },
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${SITE_URL}/#home`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "About",
        item: `${SITE_URL}/#about`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Skills",
        item: `${SITE_URL}/#skills`,
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Projects",
        item: `${SITE_URL}/#projects`,
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Contact",
        item: `${SITE_URL}/#contact`,
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${saira.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        {/* Preconnect to external domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

        {/* Core Meta Tags */}
        <meta name="author" content="Ahmed Basuony" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* Geo Targeting */}
        <meta name="geo.region" content="SA;EG" />
        <meta name="geo.placename" content="Riyadh;Cairo" />
      </head>

      <body
        className="font-sans antialiased bg-background text-foreground min-h-screen overflow-x-hidden"
        suppressHydrationWarning
      >
        <ThemeProvider>
          {/* Skip to main content for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
            aria-label="Skip to main content"
          >
            Skip to main content
          </a>

          <main id="main-content" role="main">
            {children}
          </main>

          {/* JSON-LD Structured Data */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
            key="person-schema"
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
            key="website-schema"
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(professionalServiceSchema),
            }}
            key="service-schema"
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(breadcrumbSchema),
            }}
            key="breadcrumb-schema"
          />
        </ThemeProvider>

        {/* Google Analytics - Only load if GA_ID is configured */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}

        {/* Microsoft Clarity - Only load if Clarity ID is configured */}
        {process.env.NEXT_PUBLIC_CLARITY_ID && (
          <Script id="microsoft-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");
            `}
          </Script>
        )}
      </body>
    </html>
  );
}
