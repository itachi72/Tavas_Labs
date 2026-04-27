import type { Config } from "tailwindcss";

const config: Config = {
  /* -------------------------------------------------------------------------
   * TAILWIND CONFIGURATION — TAVAS Labs
   *
   * This file defines the design tokens used throughout the site.
   * All colors, fonts, and animations are centralized here so you can
   * tweak the entire visual identity in one place.
   * ------------------------------------------------------------------------- */
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      /* -----------------------------------------------------------------------
       * COLOR PALETTE
       * Source: PDF page 1 branding
       *
       * navy-*   → primary background family (deep navy blues)
       * orange-* → accent / highlight / glow family
       * gray-*   → surface / text family (extends Tailwind defaults)
       * ----------------------------------------------------------------------- */
      colors: {
        navy: {
          950: "#060D1A",
          900: "#0A1628",
          800: "#0F2035",
          700: "#152840",  // PRIMARY — main page background
          600: "#1C3B5C",
          500: "#254E7A",
          400: "#306498",
        },
        brand: {
          orange:  "#F26522",   // Main TAVAS orange — CTAs, highlights
          "orange-light": "#FF8C42",  // Hover / glow version
          "orange-glow":  "#F2652233", // 20% opacity for glow effects
          gold:    "#C9A84C",   // Optional premium accent (use sparingly)
        },
        surface: {
          dark:    "#060D1A",
          mid:     "#0A1628",
          border:  "#1E4060",
          "border-light": "#285880",
        },
      },

      /* -----------------------------------------------------------------------
       * TYPOGRAPHY
       * IBM Plex Sans → clean techy sans-serif (loaded in layout.tsx via Google Fonts)
       * Space Grotesk → optional for display headings
       * ----------------------------------------------------------------------- */
      fontFamily: {
        sans:    ["IBM Plex Sans", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "IBM Plex Sans", "sans-serif"],
        mono:    ["IBM Plex Mono", "monospace"],
        cinzel:  ["Cinzel", "Georgia", "serif"],
      },

      /* -----------------------------------------------------------------------
       * FONT SIZES — extend defaults for large display headings
       * ----------------------------------------------------------------------- */
      fontSize: {
        "display-2xl": ["5rem",   { lineHeight: "1.05", letterSpacing: "-0.03em" }],
        "display-xl":  ["4rem",   { lineHeight: "1.08", letterSpacing: "-0.02em" }],
        "display-lg":  ["3rem",   { lineHeight: "1.1",  letterSpacing: "-0.015em" }],
        "display-md":  ["2.25rem",{ lineHeight: "1.15", letterSpacing: "-0.01em" }],
      },

      /* -----------------------------------------------------------------------
       * CUSTOM ANIMATIONS
       * These are referenced with Tailwind's `animate-*` classes.
       * The actual @keyframes are defined in globals.css.
       * ----------------------------------------------------------------------- */
      animation: {
        "pillar-rise":    "pillarRise 1.2s cubic-bezier(0.16, 1, 0.3, 1) both",
        "circuit-trace":  "circuitTrace 2s linear forwards",
        "glow-pulse":     "glowPulse 3s ease-in-out infinite",
        "fade-up":        "fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both",
        "fade-in":        "fadeIn 0.6s ease both",
        "shimmer":        "shimmer 2.5s linear infinite",
      },

      /* -----------------------------------------------------------------------
       * BOX SHADOWS — custom glows for the monolith pillars
       * ----------------------------------------------------------------------- */
      boxShadow: {
        "pillar-glow":    "0 0 40px 8px rgba(242,101,34,0.25), 0 0 80px 20px rgba(242,101,34,0.1)",
        "pillar-active":  "0 0 60px 15px rgba(242,101,34,0.4), 0 0 120px 40px rgba(242,101,34,0.15)",
        "nav":            "0 1px 0 0 rgba(255,255,255,0.06), 0 4px 20px rgba(0,0,0,0.4)",
        "card":           "0 4px 24px rgba(0,0,0,0.4), 0 1px 0 rgba(255,255,255,0.04) inset",
        "card-hover":     "0 8px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(242,101,34,0.3)",
      },

      /* -----------------------------------------------------------------------
       * BACKGROUND IMAGES — SVG patterns used as CSS bg for texture
       * ----------------------------------------------------------------------- */
      backgroundImage: {
        // Grid overlay for the hero section (subtle tech-grid pattern)
        "grid-overlay": `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%232A5298' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      },

      /* -----------------------------------------------------------------------
       * SPACING ADDITIONS
       * ----------------------------------------------------------------------- */
      spacing: {
        "128": "32rem",
        "144": "36rem",
      },

      /* -----------------------------------------------------------------------
       * BORDER RADIUS
       * ----------------------------------------------------------------------- */
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};

export default config;
