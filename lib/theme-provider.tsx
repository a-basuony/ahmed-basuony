"use client";

import * as React from "react";
import {
  ThemeProvider as NextThemesProvider,
  useTheme as useNextThemes,
} from "next-themes";

export const paletteThemes = {
  violet: {
    label: "Violet",
    primary: "#8b5cf6",
    accent: "#ec4899",
    swatch: "linear-gradient(135deg, #8b5cf6, #ec4899)",
  },
  blue: {
    label: "Blue",
    primary: "#3b82f6",
    accent: "#06b6d4",
    swatch: "linear-gradient(135deg, #3b82f6, #06b6d4)",
  },
  emerald: {
    label: "Emerald",
    primary: "#10b981",
    accent: "#22c55e",
    swatch: "linear-gradient(135deg, #10b981, #22c55e)",
  },
  rose: {
    label: "Rose",
    primary: "#f43f5e",
    accent: "#fb7185",
    swatch: "linear-gradient(135deg, #f43f5e, #fb7185)",
  },
  amber: {
    label: "Amber",
    primary: "#f59e0b",
    accent: "#f97316",
    swatch: "linear-gradient(135deg, #f59e0b, #f97316)",
  },
  cyan: {
    label: "Cyan",
    primary: "#06b6d4",
    accent: "#3b82f6",
    swatch: "linear-gradient(135deg, #06b6d4, #3b82f6)",
  },
} as const;

type Mode = "dark" | "light";
type PaletteKey = keyof typeof paletteThemes;

type ThemeContextValue = {
  mode: Mode;
  setMode: (mode: Mode) => void;
  palette: PaletteKey;
  setPalette: (palette: PaletteKey) => void;
  primary: string;
  accent: string;
  setCustomColors: (primaryHex: string, accentHex: string) => void;
  resetCustomColors: () => void;
  mounted: boolean;
  theme: Mode;
  toggleTheme: () => void;
};

const STORAGE_KEYS = {
  mode: "portfolio-theme-mode",
  palette: "portfolio-theme-palette",
  primary: "portfolio-theme-primary",
  accent: "portfolio-theme-accent",
  customActive: "portfolio-theme-custom-active",
} as const;

const DEFAULT_MODE: Mode = "dark";
const DEFAULT_PALETTE: PaletteKey = "violet";
const HEX_COLOR_RE = /^#([0-9a-f]{3}|[0-9a-f]{6})$/i;

const ThemeContext = React.createContext<ThemeContextValue | null>(null);

export function hexToRgb(hex: string) {
  const normalized = normalizeHex(hex);
  const value = normalized.slice(1);
  const bigint = Number.parseInt(value, 16);

  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255,
  };
}

export function hexToHsl(hex: string) {
  const { r, g, b } = hexToRgb(hex);
  const red = r / 255;
  const green = g / 255;
  const blue = b / 255;
  const max = Math.max(red, green, blue);
  const min = Math.min(red, green, blue);
  const lightness = (max + min) / 2;

  let hue = 0;
  let saturation = 0;

  if (max !== min) {
    const delta = max - min;
    saturation =
      lightness > 0.5 ? delta / (2 - max - min) : delta / (max + min);

    switch (max) {
      case red:
        hue = (green - blue) / delta + (green < blue ? 6 : 0);
        break;
      case green:
        hue = (blue - red) / delta + 2;
        break;
      default:
        hue = (red - green) / delta + 4;
        break;
    }

    hue /= 6;
  }

  return `${Math.round(hue * 360)} ${Math.round(saturation * 100)}% ${Math.round(
    lightness * 100,
  )}%`;
}

export function getReadableForeground(hex: string) {
  const { r, g, b } = hexToRgb(hex);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  return luminance > 0.62 ? "222 47% 11%" : "0 0% 100%";
}

function normalizeHex(hex: string) {
  const trimmed = hex.trim();

  if (!HEX_COLOR_RE.test(trimmed)) {
    return paletteThemes[DEFAULT_PALETTE].primary;
  }

  if (trimmed.length === 4) {
    return `#${trimmed[1]}${trimmed[1]}${trimmed[2]}${trimmed[2]}${trimmed[3]}${trimmed[3]}`.toLowerCase();
  }

  return trimmed.toLowerCase();
}

function isPaletteKey(value: string | null): value is PaletteKey {
  return Boolean(value && value in paletteThemes);
}

function isMode(value: string | null): value is Mode {
  return value === "dark" || value === "light";
}

function setCssColorVariables(primaryHex: string, accentHex: string) {
  const root = document.documentElement;
  const primaryRgb = hexToRgb(primaryHex);
  const accentRgb = hexToRgb(accentHex);

  root.style.setProperty("--primary", hexToHsl(primaryHex));
  root.style.setProperty("--primary-foreground", getReadableForeground(primaryHex));
  root.style.setProperty("--accent", hexToHsl(accentHex));
  root.style.setProperty("--accent-foreground", getReadableForeground(accentHex));
  root.style.setProperty("--ring", hexToHsl(primaryHex));
  root.style.setProperty(
    "--brand-primary-rgb",
    `${primaryRgb.r} ${primaryRgb.g} ${primaryRgb.b}`,
  );
  root.style.setProperty(
    "--brand-accent-rgb",
    `${accentRgb.r} ${accentRgb.g} ${accentRgb.b}`,
  );
}

function ThemeStateProvider({ children }: { children: React.ReactNode }) {
  const { setTheme } = useNextThemes();
  const [mounted, setMounted] = React.useState(false);
  const [mode, setModeState] = React.useState<Mode>(DEFAULT_MODE);
  const [palette, setPaletteState] = React.useState<PaletteKey>(DEFAULT_PALETTE);
  const [primary, setPrimary] = React.useState<string>(
    paletteThemes[DEFAULT_PALETTE].primary,
  );
  const [accent, setAccent] = React.useState<string>(
    paletteThemes[DEFAULT_PALETTE].accent,
  );
  const [customActive, setCustomActive] = React.useState(false);

  React.useEffect(() => {
    const storedMode = localStorage.getItem(STORAGE_KEYS.mode);
    const storedPalette = localStorage.getItem(STORAGE_KEYS.palette);
    const storedPrimary = localStorage.getItem(STORAGE_KEYS.primary);
    const storedAccent = localStorage.getItem(STORAGE_KEYS.accent);
    const storedCustomActive =
      localStorage.getItem(STORAGE_KEYS.customActive) === "true";

    const nextMode = isMode(storedMode) ? storedMode : DEFAULT_MODE;
    const nextPalette = isPaletteKey(storedPalette)
      ? storedPalette
      : DEFAULT_PALETTE;
    const paletteTheme = paletteThemes[nextPalette];
    const nextPrimary =
      storedCustomActive && storedPrimary && HEX_COLOR_RE.test(storedPrimary)
        ? normalizeHex(storedPrimary)
        : paletteTheme.primary;
    const nextAccent =
      storedCustomActive && storedAccent && HEX_COLOR_RE.test(storedAccent)
        ? normalizeHex(storedAccent)
        : paletteTheme.accent;

    setModeState(nextMode);
    setPaletteState(nextPalette);
    setPrimary(nextPrimary);
    setAccent(nextAccent);
    setCustomActive(storedCustomActive);
    setTheme(nextMode);
    setCssColorVariables(nextPrimary, nextAccent);
    setMounted(true);
  }, [setTheme]);

  React.useEffect(() => {
    if (!mounted) return;

    setTheme(mode);
    localStorage.setItem(STORAGE_KEYS.mode, mode);
  }, [mode, mounted, setTheme]);

  React.useEffect(() => {
    if (!mounted) return;

    setCssColorVariables(primary, accent);
    localStorage.setItem(STORAGE_KEYS.palette, palette);
    localStorage.setItem(STORAGE_KEYS.customActive, String(customActive));

    if (customActive) {
      localStorage.setItem(STORAGE_KEYS.primary, primary);
      localStorage.setItem(STORAGE_KEYS.accent, accent);
    } else {
      localStorage.removeItem(STORAGE_KEYS.primary);
      localStorage.removeItem(STORAGE_KEYS.accent);
    }
  }, [accent, customActive, mounted, palette, primary]);

  const setMode = React.useCallback((nextMode: Mode) => {
    setModeState(nextMode);
  }, []);

  const setPalette = React.useCallback((nextPalette: PaletteKey) => {
    const paletteTheme = paletteThemes[nextPalette];

    setPaletteState(nextPalette);
    setPrimary(paletteTheme.primary);
    setAccent(paletteTheme.accent);
    setCustomActive(false);
  }, []);

  const setCustomColors = React.useCallback(
    (primaryHex: string, accentHex: string) => {
      setPrimary(normalizeHex(primaryHex));
      setAccent(normalizeHex(accentHex));
      setCustomActive(true);
    },
    [],
  );

  const resetCustomColors = React.useCallback(() => {
    const paletteTheme = paletteThemes[palette];

    setPrimary(paletteTheme.primary);
    setAccent(paletteTheme.accent);
    setCustomActive(false);
  }, [palette]);

  const toggleTheme = React.useCallback(() => {
    setModeState((current) => (current === "dark" ? "light" : "dark"));
  }, []);

  const value = React.useMemo<ThemeContextValue>(
    () => ({
      mode,
      setMode,
      palette,
      setPalette,
      primary,
      accent,
      setCustomColors,
      resetCustomColors,
      mounted,
      theme: mode,
      toggleTheme,
    }),
    [
      accent,
      mode,
      mounted,
      palette,
      primary,
      resetCustomColors,
      setCustomColors,
      setMode,
      setPalette,
      toggleTheme,
    ],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme={DEFAULT_MODE}
      enableSystem={false}
      disableTransitionOnChange={false}
    >
      <ThemeStateProvider>{children}</ThemeStateProvider>
    </NextThemesProvider>
  );
}

export function useTheme() {
  const context = React.useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
}
