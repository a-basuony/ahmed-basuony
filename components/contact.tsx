"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { SendIcon } from "lucide-react";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
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

    // تحقق من صحة البريد الإلكتروني عند تغييره
    if (name === "email") {
      setIsValidEmail(emailRegex.test(value));
    }
  };

  // web3form
  const [result, setResult] = useState(false);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setResult(true);
    const formDataObj = new FormData(event.currentTarget);
    formDataObj.append("access_key", `${process.env.NEXT_PUBLIC_WEBFORMS}`);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formDataObj,
    });

    const data = await response.json();
    if (data.success) {
      setResult(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
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
      // Phone/WhatsApp (brand green)
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
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.7, 0.3],
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
            scale: [1, 1.5, 1],
            opacity: [0.2, 0.5, 0.2],
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
        <div className="mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-linear-to-r from-accent to-primary bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-accent to-primary rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                className="block group relative p-4 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_-5px_var(--primary)] hover:-translate-y-1 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Subtle gradient background on hover */}
                <div className="absolute inset-0 bg-linear-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-start gap-4">
                  <div
                    className={`w-11 h-11 rounded-full ${info.bg} relative z-10 flex items-center justify-center shrink-0 hover:rotate-10 hover:scale-110 transition-transform duration-300 text-lg`}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground">
                      {info.label}
                    </p>
                    <p className="text-foreground group-hover:text-accent transition-colors">
                      {info.value}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <form
            onSubmit={onSubmit}
            className="lg:col-span-2 p-6 rounded-lg bg-card border border-border animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="space-y-4">
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
              <button
                type="submit"
                disabled={
                  !formData.name ||
                  !isValidEmail ||
                  !formData.subject ||
                  !formData.message
                }
                className="cursor-pointer w-full px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:shadow-lg hover:shadow-accent/50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105"
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

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="p-3 rounded-lg bg-green-500/20 border border-green-500/50 text-green-400 text-sm text-center animate-fade-in">
                  Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {submitStatus === "error" && (
                <div className="p-3 rounded-lg bg-red-500/20 border border-red-500/50 text-red-400 text-sm text-center animate-fade-in">
                  Error sending message. Please try again.
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
