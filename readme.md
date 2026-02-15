import type React from "react";
import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/lib/theme-provider";
import Script from "next/script";
import "./globals.css";

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
metadataBase: new URL(
// your deployed version url :
process.env.NEXT_PUBLIC_SITE_URL || "https://ahmed-website.vercel.app"
),

title: {
default: "Ahmed Basuony | MERN Stack Developer Saudi Arabia & Egypt",
template: "%s | Ahmed Basuony",
},

// description:
// "Expert MERN Stack Developer with experience building scalable full-stack web applications. Specializing in MongoDB, Express.js, React, Node.js, Next.js, and TypeScript. Creating high-performance, secure, and SEO-optimized digital solutions.",
description:
"Ahmed Basuony (أحمد بسيوني) - Expert MERN Stack Developer specializing in React, Next.js, Node.js, MongoDB, and TypeScript. Based in Saudi Arabia and Egypt. Building scalable web applications for businesses across the Middle East.",

keywords: [
// Primary Name Variations
"Ahmed Basuony",
"أحمد بسيوني",
"Ahmad Basuony",
"Ahmed Basuoni",
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

    // Arabic Professional Titles
    "أحمد بسيوني مبرمج",
    "مطور أحمد بسيوني",
    "أحمد بسيوني السعودية",
    "أحمد بسيوني مصر",

    // Core Tech Stack
    "MERN Stack Developer",
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",

    // Location Focus
    "Saudi Arabia",
    "Egypt",
    "Middle East",
    "Riyadh",
    "Cairo",
    "Frontend Developer Saudi Arabia",
    "Backend Developer Saudi Arabia",
    "Web Developer Saudi Arabia",
    "React Developer Saudi Arabia",
    "MERN Developer Saudi Arabia",

    // Additional Technologies
    "MongoDB",
    "Express.js",
    "Tailwind CSS",
    "Redux Toolkit",
    "React 19",
    "Next.js 15",

    // Services & Professional
    "Freelance Developer",
    "Remote Developer",
    "Web Development",
    "Software Engineer",
    "Hire MERN Developer",

    // Keep the rest of your keywords here (they're fine to keep)
    // Technical Skills
    "UI/UX Developer",
    "Responsive Web Design",

    // Services
    "Freelance Web Developer",
    "Remote Frontend Developer",
    "Website Development Services",
    "Mobile App Development",
    "Web Application Developer",

    // Project Types
    "E-commerce Developer",
    "Dashboard Development",
    "SaaS Application Developer",
    "Custom Web Application Development",

    // Technologies
    "Mongoose",
    "Socket.io",
    "Docker",
    "AWS",
    "Shadcn UI",
    "Framer Motion",

    // Additional Variations
    "ahmedbasuony",
    "ahmed-basuony",
    "a-basuony",
    "Basuony Developer",
    "Ahmed Basuony Dev",

],
authors: [
{
name: "Ahmed Basuony",
// Deployed version here
url: "https://ahmed-website.vercel.app",
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
// Deployed version here
canonical: "https://ahmed-website.vercel.app",
types: {
"application/rss+xml": "https://ahmed-website.vercel.app/rss.xml",
},
},

openGraph: {
type: "website",
locale: "en_US",
alternateLocale: ["ar_SA", "ar_EG"],
// Deployed version here url
url: "https://ahmed-website.vercel.app",
siteName: "Ahmed Basuony - MERN Stack Portfolio",

    title: "Ahmed Basuony | MERN Stack Developer Saudi Arabia & Egypt",
    description:
      "Full-Stack MERN Developer creating modern web applications for Saudi Arabia and Egypt. Expert in React, Next.js, Node.js, and MongoDB.",
    images: [
      {
        url: "https://res.cloudinary.com/dyw1gf4bo/image/upload/v1768505056/Gemini_Generated_Image_mo6pa1mo6pa1mo6p_lqzmen.png",
        width: 1200,
        height: 630,
        alt: "Ahmed Basuony - MERN Stack Developer Portfolio",
        type: "image/png",
      },
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ahmed Basuony - Front-End Developer Portfolio showcasing modern web applications",
        type: "image/png",
      },
      {
        url: "/ahmed.png",
        width: 800,
        height: 800,
        alt: "Ahmed Basuony - Professional Front-End Developer",
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
"Building scalable web applications with the MERN Stack (MongoDB, Express, React, Node.js).",
images: {
url: "https://res.cloudinary.com/dyw1gf4bo/image/upload/v1768505056/Gemini_Generated_Image_mo6pa1mo6pa1mo6p_lqzmen.png",
alt: "Ahmed Basuony Portfolio",
},
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
{ url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
{ url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
{ url: "/favicon.ico", sizes: "any" },
{ url: "/favicon.svg", type: "image/svg+xml" },
],
shortcut: "/favicon.svg",
apple: [
{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
],
other: [
{
rel: "mask-icon",
url: "/safari-pinned-tab.svg",
color: "#5bbad5",
},
],
},

manifest: "/site.webmanifest",

verification: {
google: "WdJppG3mAkZoon8ptYrXM7OGEllTG3SK7u3T\_\_GSNtk",
yandex: "YOUR_YANDEX_CODE",
other: {
"msvalidate.01": "YOUR_BING_CODE",
},
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
// Enhanced Person Schema with maximum SEO juice
const personSchema = {
"@context": "https://schema.org",
"@type": ["Person", "WebSite"],
"@id": "https://ahmed-website.vercel.app/#person",
name: "Ahmed Basuony",
alternateName: "Ahmed Basuony Developer",
url: "https://ahmed-website.vercel.app",
image: {
"@type": "ImageObject",
url: "https://res.cloudinary.com/dyw1gf4bo/image/upload/v1768505056/Gemini_Generated_Image_mo6pa1mo6pa1mo6p_lqzmen.png",
width: 800,
height: 800,
caption: "Ahmed Basuony - Full Stack Developer",
},

    jobTitle: "Full Stack Developer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance / Remote",
    },
    description:
      "Expert Full Stack Developer specializing in React, Next.js, React Native, TypeScript & Tailwind CSS. Building fast, scalable, and accessible web & mobile applications.",
    knowsAbout: [
      {
        "@type": "Thing",
        name: "React.js",
        description: "Expert level proficiency",
      },
      {
        "@type": "Thing",
        name: "Next.js",
        description: "Advanced framework knowledge",
      },
      {
        "@type": "Thing",
        name: "React Native",
        description: "Mobile app development",
      },
      {
        "@type": "Thing",
        name: "TypeScript",
        description: "Type-safe development",
      },
      {
        "@type": "Thing",
        name: "Tailwind CSS",
        description: "Modern styling",
      },
      "react",
      "Next.js",
      "React Native",
      "Tailwind CSS",
      "react-native",
      "TypeScript",
      "JavaScript",
      "HTML5",
      "CSS3",
      "css",
      "CSS",
      "Web Performance",
      "Wordpress",
      "wordpress",
      "SEO Optimization",
      "UI/UX Design",
      "Responsive Design",
      "Web Accessibility",
      "Git & GitHub",
      "RESTful APIs",
      "GraphQL",
      "Node.js",
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
      "https://github.com/ahmedbasuony",
      "https://www.linkedin.com/in/ahmed-basuony-dev/",
      "https://ahmedbasuony.github.io/Ahmed_Basuony_Portfolio/",
      "https://www.facebook.com/ahmed.basuony.3701?locale=ar_AR",
      "https://x.com/ahmed_basuony81609",
      "https://dev.to/ahmedbasuony",
      "https://medium.com/@ahmedbasuony",
      "https://stackoverflow.com/users/29207867/ahmed-basuony",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Cairo",
      addressRegion: "Cairo Governorate",
      addressCountry: "EG",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Professional",
      email: "ahmedbasuony.dev@gmail.com",
      availableLanguage: ["English", "Arabic"],
    },
    hasOccupation: {
      "@type": "Occupation",
      name: "Front-End Developer",
      occupationLocation: {
        "@type": "Country",
        name: "Egypt",
      },
      estimatedSalary: {
        "@type": "MonetaryAmountDistribution",
        name: "Competitive rates",
        currency: "USD",
      },
    },

};

// Website Schema
const websiteSchema = {
"@context": "https://schema.org",
"@type": "WebSite",
"@id": "https://ahmed-website.vercel.app/#website",
url: "https://ahmed-website.vercel.app",
name: "Ahmed Basuony - Front-End Developer Portfolio",
alternateName: "Ahmed Basuony React Developer",
description:
"Professional portfolio showcasing web development projects, React applications, and frontend expertise.",
keywords: [
"Ahmed Basuony",
"React Developer Egypt",
"Frontend Developer Cairo",
"Next.js Developer",
"Web Developer Egypt",
"Freelance Frontend Developer",
"React 19 Developer",
"Next.js 15 Developer",
],
publisher: {
"@id": "https://ahmed-website.vercel.app/#person",
},
inLanguage: "en-US",
potentialAction: {
"@type": "SearchAction",
target: {
"@type": "EntryPoint",
urlTemplate:
"https://ahmed-website.vercel.app/search?q={search_term_string}",
},
"query-input": "required name=search_term_string",
},
};

// Professional Service Schema
const professionalServiceSchema = {
"@context": "https://schema.org",
"@type": "ProfessionalService",
name: "Ahmed Basuony - Front-End Development Services",
image: "https://ahmed-website.vercel.app/images/ahmed.png",
description:
"Professional front-end development services including React, Next.js, and React Native applications",
address: {
"@type": "PostalAddress",
addressCountry: "EG",
},
geo: {
"@type": "GeoCoordinates",
latitude: "30.0444",
longitude: "31.2357",
},
url: "https://ahmed-website.vercel.app",
telephone: "+201093793161",
priceRange: "$$",
openingHoursSpecification: {
"@type": "OpeningHoursSpecification",
dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
opens: "09:00",
closes: "18:00",
},
areaServed: [
{
"@type": "Country",
name: "Egypt",
},
{
"@type": "Country",
name: "United States",
},
{
"@type": "Country",
name: "United Kingdom",
},
"Worldwide",
],
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
item: "https://ahmed-website.vercel.app/#home",
},
{
"@type": "ListItem",
position: 2,
name: "About",
item: "https://ahmed-website.vercel.app/#about",
},
{
"@type": "ListItem",
position: 3,
name: "Skills",
item: "https://ahmed-website.vercel.app/#skills",
},
{
"@type": "ListItem",
position: 4,
name: "Projects",
item: "https://ahmed-website.vercel.app/#projects",
},
{
"@type": "ListItem",
position: 5,
name: "Contact",
item: "https://ahmed-website.vercel.app/#contact",
},
],
};

return (

<html
lang="en"
className={`${geist.variable} ${geistMono.variable} scroll-smooth`}
suppressHydrationWarning >
<head>
{/_ Performance _/}
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
<link rel="dns-prefetch" href="https://fonts.googleapis.com" />
<link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Preload critical assets */}
        <link rel="preload" as="image" href="/ahmed.png" />

        {/* Icons */}
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-TileImage" content="/mstile-144x144.png" />
        <meta name="msapplication-config" content="/browserconfig.xml" />

        {/* Google Verification */}
        <meta
          name="google-site-verification"
          content="WdJppG3mAkZoon8ptYrXM7OGEllTG3SK7u3T__GSNtk"
        />
        <meta
          name="google-site-verification"
          content="e2jaxxJkIU5x1v3Bl0_iodK_aWiOznLFl1mUANYd_Qc"
        />

        {/* SEO Core */}
        <meta name="author" content="Ahmed Basuony" />
        <meta name="copyright" content="Ahmed Basuony" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

        {/* OpenGraph (Facebook + LinkedIn) */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Ahmed Basuony | Front-End Developer Portfolio"
        />
        <meta
          property="og:description"
          content="React & Next.js Front-End Developer building high-performance web applications."
        />
        <meta
          property="og:image"
          content="https://ahmed-website.vercel.app/ahmed.png"
        />
        <meta property="og:url" content="https://ahmed-website.vercel.app" />
        <meta property="og:site_name" content="Ahmed Basuony Portfolio" />

        {/* Twitter SEO */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Ahmed Basuony | Front-End Developer Portfolio"
        />
        <meta
          name="twitter:description"
          content="React & Next.js Front-End Developer building modern web experiences."
        />
        <meta
          name="twitter:image"
          content="https://ahmed-website.vercel.app/ahmed.png"
        />

        {/* Keywords (مهمة جدًا للـ semantic SEO) */}
        <meta
          name="keywords"
          content="
    Ahmed Basuony,
    MERN Stack Developer,
    Full Stack Developer,
    React Developer Egypt,
    Front-End Developer Cairo,
    Next.js Developer,
    Node.js Developer,
    MongoDB Expert,
    TypeScript Developer,
    JavaScript Developer,
    Freelance MERN Developer,
    Web Developer Egypt,
    React 19 Developer,
    Next.js 15 Developer,
    Shadcn UI Developer,
    Tailwind CSS Developer

"
/>

        {/* Geo */}
        <meta name="geo.region" content="EG-C" />
        <meta name="geo.placename" content="Cairo" />
        <meta name="geo.position" content="30.0444;31.2357" />
        <meta name="ICBM" content="30.0444, 31.2357" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://reda-website.vercel.app" />
      </head>

      <body
        className={`font-sans antialiased bg-background text-foreground min-h-screen overflow-x-hidden`}
        suppressHydrationWarning
      >
        <ThemeProvider>
          {/* Skip to main content for accessibility */}
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md"
          >
            Skip to main content
          </a>

          <main id="main-content">{children}</main>

          {/* JSON-LD Schemas - Maximum SEO Power */}
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

        {/* Google Analytics */}
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

        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");

`}
</Script>

</body>
</html>
);
}
#   P o r t f o l i o - f r o n t e n d 
 
 

<motion.div
className="relative"
initial={{ opacity: 0, x: 100 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 1, delay: 0.4 }}
style={{
              transform: `perspective(1000px) rotateY(${
                mousePosition.x
              }deg) rotateX(${-mousePosition.y}deg)`,
            }} >
{/_ Glowing Background _/}
<motion.div
className="absolute inset-0 bg-linear-to-r from-purple-400 to-pink-400 dark:from-purple-500 dark:to-pink-500 rounded-3xl blur-3xl opacity-10 dark:opacity-20"
animate={{
                scale: [1, 1.2, 1],
                opacity: [0.1, 0.2, 0.1],
              }}
transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
/>

```
            {/* Computer Container */}
            <div className="relative bg-linear-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 rounded-2xl p-4 border border-slate-300 dark:border-slate-700 shadow-2xl">
              {/* Screen */}
              <div className="bg-linear-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-black rounded-xl overflow-hidden border border-slate-300 dark:border-slate-700 shadow-inner">
                {/* Screen Header */}
                <div className="bg-slate-200 dark:bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-300 dark:border-slate-700">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 text-center text-xs text-slate-600 dark:text-slate-400 font-medium">
                    ahmedbasuony.dev
                  </div>
                </div>
```

                {/* Screen Content */}
                <div className="relative min-h-[400px] overflow-hidden">

````javascript

                  {/* Gradient overlay for readability */}
                  <div className="absolute inset-0 bg-gradient-to-br from-slate-50/95 via-slate-50/85 to-slate-50/75 dark:from-slate-950/95 dark:via-slate-950/85 dark:to-slate-950/75 z-10" />

                  {/* Content Layer */}
                  <div className="relative z-20 p-6">
                    {/* Code Animation */}
                    <motion.div className="space-y-3 font-mono text-sm">
                      {[
                        {
                          code: "const mernDeveloper = {",
                          color: "text-purple-700 dark:text-purple-400",
                          delay: 0,
                        },
                        {
                          code: '  name: "Ahmed Basuony",',
                          color: "text-blue-700 dark:text-blue-400",
                          delay: 0.1,
                        },
                        {
                          code: '  specialization: "Full-Stack MERN Development",',
                          color: "text-green-700 dark:text-green-400",
                          delay: 0.2,
                        },
                        {
                          code: '  frontend: ["React", "Next.js", "TypeScript", "Tailwind"],',
                          color: "text-cyan-700 dark:text-cyan-400",
                          delay: 0.25,
                        },
                        {
                          code: '  backend: ["Node.js", "Nest.js","Express", "MongoDB", "REST/GraphQL"],',
                          color: "text-amber-700 dark:text-amber-400",
                          delay: 0.3,
                        },
                        {
                          code: '  tools: ["Docker", "Git", "AWS", "Jest", "WebSocket"],',
                          color: "text-orange-700 dark:text-orange-400",
                          delay: 0.35,
                        },
                        {
                          code: '  focus: "Building Performant & Scalable Apps"',
                          color: "text-pink-700 dark:text-pink-400",
                          delay: 0.4,
                        },
                        {
                          code: "}",
                          color: "text-purple-700 dark:text-purple-400",
                          delay: 0.5,
                        },
                      ].map((line, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: line.delay + 1 }}
                          className={line.color}
                        >
                          {line.code}
                          {i === 7 && (
                            <motion.span
                              animate={{ opacity: [1, 0, 1] }}
                              transition={{ duration: 1, repeat: Infinity }}
                              className="inline-block w-2 h-4 bg-purple-600 dark:bg-purple-500 ml-1"
                            />
                          )}
                        </motion.div>
                      ))}
                    </motion.div>

                    {/* Floating Elements */}
                    <motion.div
                      className="absolute top-10 right-10 w-16 h-16 bg-purple-500/20 dark:bg-purple-500/20 rounded-lg backdrop-blur-sm border border-purple-500/40 dark:border-purple-500/30"
                      animate={{
                        y: [0, -20, 0],
                        rotate: [0, 10, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="w-full h-full flex items-center justify-center text-2xl">
                        ⚡
                      </div>
                    </motion.div>

                    <motion.div
                      className="absolute bottom-10 right-20 w-12 h-12 bg-pink-500/20 dark:bg-pink-500/20 rounded-full backdrop-blur-sm border border-pink-500/40 dark:border-pink-500/30"
                      animate={{
                        y: [0, 15, 0],
                        x: [0, 10, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5,
                      }}
                    >
                      <div className="w-full h-full flex items-center justify-center text-xl">
                        🚀
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Orbs */}
            <motion.div
              className="absolute -top-10 -right-10 w-40 h-40 bg-purple-400 dark:bg-purple-500 rounded-full blur-3xl opacity-10 dark:opacity-15"
              animate={{
                scale: [1, 1.3, 1],
                x: [0, 20, 0],
                y: [0, -20, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            <motion.div
              className="absolute -bottom-10 -left-10 w-32 h-32 bg-pink-400 dark:bg-pink-500 rounded-full blur-3xl opacity-10 dark:opacity-15"
              animate={{
                scale: [1, 1.4, 1],
                x: [0, -15, 0],
                y: [0, 15, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
            />
          </motion.div>

          ```
````
#   P o r t f o l i o  
 