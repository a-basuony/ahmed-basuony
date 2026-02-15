"use client";

import { useState, useEffect, type ReactNode } from "react";

/**
 * Client-side hydration guard.
 * Prevents hydration mismatch by deferring render until the client has mounted.
 */
export default function ClientShell({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return <>{children}</>;
}
