"use client";

import type React from "react";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { SendIcon } from "lucide-react";
import MagneticButton from "@/components/magnetic-button";
import Reveal from "@/components/reveal";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const projectIntents = [
  "Full Stack App",
  "Dashboard",
  "API",
  "Portfolio Website",
  "Maintenance",
];

const isLikelySpam = (message: string) => {
  const urlMatches = message.match(/https?:\/\/|www\./gi) ?? [];
  const repeatedCharacters = /(.)\1{8,}/.test(message);

  return urlMatches.length > 2 || repeatedCharacters;
};

export default function Contact() {
  const shouldReduceMotion = useReducedMotion();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    projectType: projectIntents[0],
    website: "",
  });

  const [isValidEmail, setIsValidEmail] = useState(false);

  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "email") {
      setIsValidEmail(emailRegex.test(value));
    }
  };

  // web3form
  const [result, setResult] = useState(false);

  const handleIntentChange = (intent: string) => {
    setFormData((prev) => ({
      ...prev,
      projectType: intent,
      subject:
        prev.subject && !projectIntents.some((item) => prev.subject.includes(item))
          ? prev.subject
          : `Project inquiry: ${intent}`,
    }));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formData.website) {
      return;
    }

    if (isLikelySpam(formData.message)) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
      return;
    }

    setResult(true);
    const formDataObj = new FormData(event.currentTarget);
    formDataObj.append("access_key", `${process.env.NEXT_PUBLIC_WEBFORMS}`);
    formDataObj.append("project_type", formData.projectType);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataObj,
    });

    const data = await response.json();
    if (data.success) {
      setResult(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        projectType: projectIntents[0],
        website: "",
      });
      setIsValidEmail(false);
      setSubmitStatus("success");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } else {
      setResult(false);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  const contactInfo = [
    {
      // Email (red) - provide bg for icon wrapper
      icon: (
        <span className="relative z-20 text-red-600">
          <EmailIcon />
        </span>
      ),
      bg: "bg-red-100",
      label: "Email",
      value: "ahmedbasuony.dev@gmail.com",
      href: "mailto:ahmedbasuony.dev@gmail.com",
    },
    {
      icon: (
        <span className="relative z-20 text-[#25D366]">
          <WhatsAppIcon />
        </span>
      ),
      bg: "bg-green-100",
      label: "WhatsApp",
      value: "+966 511 861 442",
      href: "https://api.whatsapp.com/send?phone=966511861442",
    },
    {
      // LinkedIn (brand blue)
      icon: (
        <span className="relative z-20 text-[#0A66C2]">
          <LinkedInIcon />
        </span>
      ),
      bg: "bg-blue-100",
      href: "https://www.linkedin.com/in/ahmed-basuony-0654202a4/",
      label: "LinkedIn",
      value: "LinkedIn Profile",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen py-20 px-4 md:px-8 relative bg-background transition-colors duration-300"
    >
      {/* Background - Cyber Network */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Base Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* Floating Connection Points (Nodes) */}
        <motion.div
          animate={{
            scale: shouldReduceMotion ? 1 : [1, 1.2, 1],
            opacity: shouldReduceMotion ? 0.35 : [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[10%] left-[10%] w-32 h-32 bg-primary/70 rounded-full blur-2xl"
        />
        <motion.div
          animate={{
            scale: shouldReduceMotion ? 1 : [1, 1.5, 1],
            opacity: shouldReduceMotion ? 0.25 : [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute top-[5%] right-[10%] w-40 h-40 bg-accent/70 rounded-full blur-3xl"
        />

        {/* Subtle Diagonal Lines (Data Streams) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)] opacity-10 dark:opacity-5" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <Reveal className="mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-semibold text-primary">
            Available for selected projects and roles
          </div>
          <h2 className="mb-4 text-4xl font-bold md:text-5xl">
            <span className="bg-linear-to-r from-accent to-primary bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="max-w-2xl text-muted-foreground">
            Tell me what you want to build. I respond best to messages with a
            clear product goal, stack needs, timeline, or role context.
          </p>
          <div className="mt-5 h-1 w-20 rounded-full bg-linear-to-r from-accent to-primary" />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Reveal key={info.href} delay={index * 0.08}>
                <a
                  href={info.href}
                  className="group relative block overflow-hidden rounded-xl border border-border/50 bg-card p-4 transition-all duration-500 hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 focus:outline-none focus:ring-2 focus:ring-primary/30"
                >
                  <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="flex items-start gap-4">
                    <div
                      className={`relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full ${info.bg} text-lg transition-transform duration-300 hover:rotate-10 hover:scale-110`}
                    >
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-muted-foreground">
                        {info.label}
                      </p>
                      <p className="text-foreground transition-colors group-hover:text-accent">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </a>
              </Reveal>
            ))}
            <Reveal delay={0.24}>
              <div className="rounded-2xl border border-primary/20 bg-primary/10 p-5">
                <p className="text-sm font-semibold text-primary">
                  Best fit inquiries
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Full-stack products, dashboard builds, API work, booking
                  systems, e-commerce flows, and professional portfolio sites.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Contact Form */}
          <Reveal className="lg:col-span-2" delay={0.12}>
          <form
            onSubmit={onSubmit}
            className="rounded-2xl border border-border bg-card p-6 shadow-xl shadow-primary/5"
          >
            <div className="space-y-4">
              <input
                type="text"
                name="website"
                value={formData.website}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <div>
                <label className="mb-3 block text-sm font-medium text-foreground">
                  Project intent
                </label>
                <div className="flex flex-wrap gap-2">
                  {projectIntents.map((intent) => {
                    const isActive = formData.projectType === intent;
                    return (
                      <button
                        key={intent}
                        type="button"
                        onClick={() => handleIntentChange(intent)}
                        className={`rounded-full border px-4 py-2 text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-primary/30 ${
                          isActive
                            ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                            : "border-border bg-background text-muted-foreground hover:border-primary/40 hover:text-primary"
                        }`}
                        aria-pressed={isActive}
                      >
                        {intent}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Name Input */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  placeholder="Your name"
                />
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                  className={`w-full px-4 py-2 rounded-lg bg-input border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-300 ${
                    formData.email
                      ? isValidEmail
                        ? "border-green-500"
                        : "border-red-500"
                      : "border-border"
                  }`}
                  placeholder="your@email.com"
                />
              </div>

              {/* Subject Input */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300"
                  placeholder="Project inquiry"
                />
              </div>

              {/* Message Textarea */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 resize-none"
                  placeholder="Your message here..."
                />
              </div>

              {/* Submit Button */}
              <MagneticButton className="block w-full">
                <button
                  type="submit"
                  disabled={
                    !formData.name ||
                    !isValidEmail ||
                    !formData.subject ||
                    !formData.message
                  }
                  className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 font-semibold text-accent-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-accent/30 focus:outline-none focus:ring-2 focus:ring-accent/30 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:translate-y-0"
                >
                  {result ? (
                    <>
                      <div className="w-4 h-4 border-2 border-accent-foreground border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <span>
                        <SendIcon />
                      </span>
                      Send Message
                    </>
                  )}
                </button>
              </MagneticButton>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div
                  role="status"
                  className="rounded-lg border border-green-500/40 bg-green-500/10 p-3 text-center text-sm text-green-600 animate-fade-in dark:text-green-300"
                >
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {submitStatus === "error" && (
                <div
                  role="alert"
                  className="rounded-lg border border-red-500/40 bg-red-500/10 p-3 text-center text-sm text-red-600 animate-fade-in dark:text-red-300"
                >
                  Error sending message. Please try again.
                </div>
              )}
            </div>
          </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
