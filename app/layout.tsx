/* =============================================================================
 * ROOT LAYOUT — TAVAS Labs
 * =============================================================================
 *
 * This is the shell that wraps every page. It sets:
 *   - The HTML <head> (meta, og-tags, fonts)
 *   - The body element class (dark theme, font family)
 *   - Any providers that wrap the entire app (e.g., animation context)
 *
 * To add a new global font weight, add it to the Google Fonts URL in
 * globals.css (or in a <link> here if you prefer).
 * ============================================================================= */

import type { Metadata } from "next";
import "./globals.css";

/* --------------------------------------------------------------------------
 * SEO + OPEN GRAPH METADATA
 * Edit this object to update page titles, descriptions, and social card data.
 * -------------------------------------------------------------------------- */
export const metadata: Metadata = {
  title: {
    default: "TAVAS Labs — Intelligence by Design",
    template: "%s | TAVAS Labs",  // e.g. "About | TAVAS Labs"
  },
  description:
    "The AI companion for Governments, Industries, and Academics navigating the frontier of digital transformation with digital twins. Design · Simulate · Optimise · Sustain.",
  keywords: [
    "AI consulting",
    "digital twins",
    "digital transformation",
    "simulation",
    "semiconductor",
    "electronics",
    "TAVAS Labs",
    "India",
  ],
  authors: [{ name: "TAVAS Labs" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.tavaslabs.com",
    siteName: "TAVAS Labs",
    title: "TAVAS Labs — Intelligence by Design",
    description:
      "AI-powered digital twin solutions for Governments, Industries, and Academics.",
    /* Replace with an actual OG image at /public/og-image.png */
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "TAVAS Labs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TAVAS Labs — Intelligence by Design",
    description:
      "AI-powered digital twin solutions for Governments, Industries, and Academics.",
    images: ["/og-image.png"],
  },
  /* Favicon — place favicon.ico and apple-touch-icon.png in /public */
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

/* --------------------------------------------------------------------------
 * ROOT LAYOUT COMPONENT
 * -------------------------------------------------------------------------- */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
      /* suppress suppresses React hydration warning for `class` set by browser extensions */
      suppressHydrationWarning
    >
      <head>
        {/*
         * Performance hint: preconnect to Google Fonts CDN before the
         * CSS import fires in globals.css, saving ~150ms on first load.
         */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Noto+Serif+Devanagari:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>

      <body
        /* ----------------------------------------------------------------
         * Body classes:
         * - bg-navy-900     → main dark background
         * - text-gray-100   → default text color
         * - font-sans       → IBM Plex Sans (defined in tailwind.config.ts)
         * - antialiased     → smoother font rendering
         * ---------------------------------------------------------------- */
        className="bg-navy-900 text-gray-100 font-sans antialiased"
      >
        {/*
         * children = the page component rendered by the current route.
         * For the home page, this will be app/page.tsx.
         */}
        {children}
      </body>
    </html>
  );
}
