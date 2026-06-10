"use client";

import * as React from "react";
import { Check, Moon, Palette, RotateCcw, Settings2, Sun } from "lucide-react";
import { createPortal } from "react-dom";
import { cn } from "@/lib/utils";
import { paletteThemes, useTheme } from "@/lib/theme-provider";

export default function ThemeCustomizer() {
  const {
    mode,
    setMode,
    palette,
    setPalette,
    primary,
    accent,
    setCustomColors,
    resetCustomColors,
    mounted,
  } = useTheme();
  const [open, setOpen] = React.useState(false);
  const panelRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  if (!mounted) return null;

  return createPortal(
    <div
      ref={panelRef}
      className="fixed bottom-40 right-5 z-40 sm:bottom-24 sm:right-6"
    >
      <div
        className={cn(
          "glass-panel absolute bottom-full right-0 mb-3 max-h-[min(30rem,calc(100vh-7rem))] w-[min(20rem,calc(100vw-2rem))] origin-bottom-right overflow-y-auto rounded-xl p-3 text-foreground shadow-xl sm:max-h-[calc(100vh-5rem)]",
          "transition-all duration-200 ease-out",
          open
            ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-2 scale-95 opacity-0",
        )}
        aria-hidden={!open}
      >
        <div className="mb-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <Palette className="size-4" aria-hidden="true" />
            </span>
            <div>
              <h2 className="text-sm font-semibold text-foreground">
                Theme Studio
              </h2>
              <p className="text-xs text-muted-foreground">
                Tune the portfolio look
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <section aria-label="Color mode">
            <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Mode
            </div>
            <div className="grid grid-cols-2 gap-1.5 rounded-lg bg-muted/60 p-1">
              <button
                type="button"
                onClick={() => setMode("light")}
                className={cn(
                  "flex items-center justify-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium outline-none transition active:bg-card/80 focus-visible:ring-2 focus-visible:ring-ring/40",
                  mode === "light"
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground",
                )}
                aria-pressed={mode === "light"}
              >
                <Sun className="size-4" aria-hidden="true" />
                Light
              </button>
              <button
                type="button"
                onClick={() => setMode("dark")}
                className={cn(
                  "flex items-center justify-center gap-1.5 rounded-md px-2.5 py-1.5 text-xs font-medium outline-none transition active:bg-card/80 focus-visible:ring-2 focus-visible:ring-ring/40",
                  mode === "dark"
                    ? "bg-card text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground",
                )}
                aria-pressed={mode === "dark"}
              >
                <Moon className="size-4" aria-hidden="true" />
                Dark
              </button>
            </div>
          </section>

          <section aria-label="Premium palettes">
            <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Palettes
            </div>
            <div className="grid grid-cols-2 gap-2">
              {Object.entries(paletteThemes).map(([key, item]) => {
                const active = key === palette;

                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setPalette(key as keyof typeof paletteThemes)}
                    className={cn(
                      "flex items-center justify-between rounded-lg border px-2.5 py-1.5 text-left text-xs outline-none transition active:bg-primary/15 focus-visible:ring-2 focus-visible:ring-ring/40",
                      active
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-border bg-card/60 text-foreground hover:border-primary/50",
                    )}
                    aria-pressed={active}
                  >
                    <span className="flex items-center gap-2">
                      <span
                        className="size-4 rounded-full border border-white/40 shadow-sm"
                        style={{ background: item.swatch }}
                        aria-hidden="true"
                      />
                      {item.label}
                    </span>
                    {active && <Check className="size-4" aria-hidden="true" />}
                  </button>
                );
              })}
            </div>
          </section>

          <section aria-label="Custom colors">
            <div className="mb-2 flex items-center justify-between gap-3">
              <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                Custom
              </div>
              <button
                type="button"
                onClick={resetCustomColors}
                className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1 text-xs font-medium text-muted-foreground outline-none transition-colors hover:bg-muted hover:text-foreground active:bg-muted/80 focus-visible:ring-2 focus-visible:ring-ring/40"
              >
                <RotateCcw className="size-3.5" aria-hidden="true" />
                Reset
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <label className="space-y-2">
                <span className="text-xs text-muted-foreground">Primary</span>
                <span className="flex items-center gap-2 rounded-lg border border-border bg-card/60 p-1.5">
                  <input
                    type="color"
                    value={primary}
                    onChange={(event) =>
                      setCustomColors(event.target.value, accent)
                    }
                    className="size-8 cursor-pointer rounded-md border-0 bg-transparent p-0"
                    aria-label="Primary color"
                  />
                  <span className="font-mono text-xs uppercase text-foreground">
                    {primary}
                  </span>
                </span>
              </label>

              <label className="space-y-2">
                <span className="text-xs text-muted-foreground">Accent</span>
                <span className="flex items-center gap-2 rounded-lg border border-border bg-card/60 p-1.5">
                  <input
                    type="color"
                    value={accent}
                    onChange={(event) =>
                      setCustomColors(primary, event.target.value)
                    }
                    className="size-8 cursor-pointer rounded-md border-0 bg-transparent p-0"
                    aria-label="Accent color"
                  />
                  <span className="font-mono text-xs uppercase text-foreground">
                    {accent}
                  </span>
                </span>
              </label>
            </div>
          </section>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className={cn(
          "flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-xl shadow-primary/20 outline-none transition hover:scale-105 hover:bg-primary/90 active:scale-95 focus-visible:ring-4 focus-visible:ring-ring/35 sm:size-12",
          open && "rotate-45",
        )}
        aria-label={open ? "Close theme customizer" : "Open theme customizer"}
        aria-expanded={open}
      >
        <Settings2 className="size-5" aria-hidden="true" />
      </button>
    </div>,
    document.body,
  );
}
