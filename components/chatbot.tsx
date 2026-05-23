"use client";

import { Bot, Send, Sparkles, User, X } from "lucide-react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { getGeminiResponse } from "../config/gemini";

interface Message {
  text: string;
  sender: "user" | "ai";
  timestamp: string;
}

export default function ChatBot() {
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (event: FormEvent) => {
    event.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      text: inputValue.trim(),
      sender: "user",
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages((prevMessages) => [...prevMessages, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const aiResponseText = await getGeminiResponse(userMessage.text);
      const aiMessage: Message = {
        text: aiResponseText,
        sender: "ai",
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages((prevMessages) => [...prevMessages, aiMessage]);
    } catch (error) {
      console.error("Error fetching Gemini response:", error);
      const errorMessage: Message = {
        text: "Sorry, I couldn't get a response. Please try again later.",
        sender: "ai",
        timestamp: new Date().toLocaleTimeString(),
      };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!mounted) return null;

  return createPortal(
    <>
      <div className="fixed bottom-24 right-5 z-50 group sm:bottom-6 sm:right-6">
        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className={`flex size-12 items-center justify-center rounded-full shadow-xl transition-all duration-300 hover:scale-105 ${
            isOpen
              ? "rotate-90 bg-rose-500"
              : "bg-[linear-gradient(135deg,rgb(var(--brand-primary-rgb)),rgb(var(--brand-accent-rgb)))] hover:shadow-primary/40"
          }`}
          aria-label={isOpen ? "Close chat" : "Open chat"}
        >
          {isOpen ? (
            <X className="size-5 text-white" />
          ) : (
            <div className="relative">
              <Sparkles className="size-5 text-white" />
              <span className="absolute -right-1 -top-1 size-2.5 rounded-full bg-green-400" />
            </div>
          )}
        </button>

        {!isOpen && (
          <div className="pointer-events-none invisible absolute bottom-full right-0 mb-2 whitespace-nowrap rounded-md bg-gray-900 px-2.5 py-1.5 text-xs font-medium text-white opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:opacity-100 dark:bg-gray-800">
            Ask Gemini
            <div className="absolute right-5 top-full -mt-1 border-4 border-transparent border-t-gray-900 dark:border-t-gray-800" />
          </div>
        )}
      </div>

      {isOpen && (
        <div className="fixed bottom-[10.25rem] right-3 z-50 flex h-[min(440px,calc(100vh-11.5rem))] w-[min(350px,calc(100vw-1.5rem))] flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl backdrop-blur-xl transition-all duration-300 animate-in slide-in-from-bottom-3 dark:border-gray-800 dark:bg-gray-900 sm:bottom-[5.25rem] sm:right-6 sm:h-[min(440px,calc(100vh-6rem))]">
          <div className="relative overflow-hidden bg-[linear-gradient(135deg,rgb(var(--brand-primary-rgb)),rgb(var(--brand-accent-rgb)))] p-4 text-primary-foreground">
            <div className="relative flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-full border border-white/25 bg-white/20 shadow-sm backdrop-blur-sm">
                <Bot className="size-5 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="flex items-center gap-2 truncate text-sm font-bold">
                  Ahmed's AI Assistant
                  <Sparkles className="size-3.5 shrink-0" />
                </h3>
                <div className="mt-1 flex items-center gap-2">
                  <span className="size-2 rounded-full bg-green-400 shadow-lg shadow-green-400/50" />
                  <p className="truncate text-xs font-medium text-white/90">
                    Ask me anything about Ahmed!
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto bg-gradient-to-b from-gray-50 to-white p-3.5 dark:from-gray-900 dark:to-gray-950">
            {messages.length === 0 && (
              <div className="flex h-full flex-col items-center justify-center px-4 text-center">
                <div className="mb-3 flex size-12 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgb(var(--brand-primary-rgb)),rgb(var(--brand-accent-rgb)))] shadow-md">
                  <Bot className="size-6 text-white" />
                </div>
                <h4 className="mb-2 text-base font-bold text-gray-800 dark:text-gray-200">
                  Welcome!
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  I'm Ahmed's AI assistant. Ask me anything about his skills,
                  projects, or experience!
                </p>
              </div>
            )}

            {messages.map((message, index) => (
              <div
                key={`${message.timestamp}-${index}`}
                className={`flex gap-2.5 animate-in slide-in-from-bottom-3 duration-500 ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {message.sender === "ai" && (
                  <div className="flex size-7 flex-shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgb(var(--brand-primary-rgb)),rgb(var(--brand-accent-rgb)))] shadow-sm">
                    <Bot className="size-3.5 text-white" />
                  </div>
                )}

                <div
                  className={`max-w-[78%] ${
                    message.sender === "user" ? "order-first" : ""
                  }`}
                >
                  <div
                    className={`rounded-xl px-3 py-2 shadow-sm transition-all duration-300 hover:shadow-md ${
                      message.sender === "user"
                        ? "rounded-br-md bg-[linear-gradient(135deg,rgb(var(--brand-primary-rgb)),rgb(var(--brand-accent-rgb)))] text-primary-foreground"
                        : "rounded-bl-md border border-gray-200 bg-white text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100"
                    }`}
                  >
                    <p className="whitespace-pre-wrap break-words text-sm leading-relaxed">
                      {message.text}
                    </p>
                  </div>
                  <p
                    className={`mt-1 px-1.5 text-[11px] ${
                      message.sender === "user"
                        ? "text-right text-gray-500 dark:text-gray-400"
                        : "text-left text-gray-500 dark:text-gray-400"
                    }`}
                  >
                    {message.timestamp}
                  </p>
                </div>

                {message.sender === "user" && (
                  <div className="flex size-7 flex-shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgb(var(--brand-accent-rgb)),rgb(var(--brand-primary-rgb)))] shadow-sm">
                    <User className="size-3.5 text-white" />
                  </div>
                )}
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start gap-2.5 animate-in slide-in-from-bottom-3">
                <div className="flex size-7 flex-shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,rgb(var(--brand-primary-rgb)),rgb(var(--brand-accent-rgb)))] shadow-sm">
                  <Bot className="size-3.5 text-white" />
                </div>
                <div className="rounded-xl rounded-bl-md border border-gray-200 bg-white px-4 py-2.5 shadow-sm dark:border-gray-700 dark:bg-gray-800">
                  <div className="flex gap-1.5">
                    <div
                      className="size-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    />
                    <div
                      className="size-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    />
                    <div
                      className="size-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-gray-200 bg-white p-3 dark:border-gray-800 dark:bg-gray-900">
            <form onSubmit={handleSendMessage} className="flex items-end gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(event) => setInputValue(event.target.value)}
                  placeholder="Type your message..."
                  disabled={isLoading}
                  className="w-full rounded-lg border-2 border-transparent bg-gray-100 px-3 py-2.5 pr-10 text-sm text-gray-900 shadow-sm transition-all duration-300 placeholder:text-gray-500 focus:border-primary focus:bg-white focus:outline-none disabled:opacity-50 dark:bg-gray-800 dark:text-gray-100 dark:placeholder:text-gray-400 dark:focus:bg-gray-800"
                />
                <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                  <Sparkles className="size-4 text-gray-400 dark:text-gray-500" />
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading || !inputValue.trim()}
                className="group flex size-10 items-center justify-center rounded-lg bg-[linear-gradient(135deg,rgb(var(--brand-primary-rgb)),rgb(var(--brand-accent-rgb)))] font-medium text-primary-foreground transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/40 active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-50"
                aria-label="Send message"
              >
                <Send className="size-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>,
    document.body,
  );
}
