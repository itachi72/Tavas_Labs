"use client";
/* =============================================================================
 * NAVBAR COMPONENT — TAVAS Labs
 * =============================================================================
 *
 * Sticky top navigation bar with:
 *   - Logo (wordmark + tagline)
 *   - Primary nav links
 *   - CTA button
 *   - Glassmorphism effect that activates on scroll
 *   - Mobile hamburger menu
 *
 * CUSTOMIZATION TIPS:
 *   - To change nav links: edit the NAV_LINKS array below
 *   - To change the logo text: edit the <LogoMark> section
 *   - To change the CTA label: edit the last <a> in the desktop nav
 *   - Nav height is 72px, controlled by `--nav-height` in globals.css
 * ============================================================================= */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* --------------------------------------------------------------------------
 * NAV LINKS — Edit this array to add/remove/rename navigation items
 * Each item has: label (display text), href (scroll target anchor)
 * -------------------------------------------------------------------------- */
const NAV_LINKS = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Approach",     href: "#pillars"       },
  { label: "Sectors",      href: "#sectors"       },
  { label: "Why TAVAS",    href: "#why-tavas"     },
];

export default function Navbar() {
  /* Track if user has scrolled past the hero — triggers the glass bg */
  const [scrolled, setScrolled] = useState(false);
  /* Mobile menu open/close state */
  const [mobileOpen, setMobileOpen] = useState(false);

  /* Listen for scroll events to apply glass style after 50px */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Prevent body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    /*
     * The nav uses `fixed` to stick to the top.
     * `z-50` ensures it renders above all content including the hero overlay.
     * The `nav-glass` class (globals.css) adds blur + semi-transparent bg
     * only after the user scrolls.
     */
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "nav-glass" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-[72px] flex items-center justify-between">

        {/* ----------------------------------------------------------------
          * LOGO MARK
          * The name "TAVAS" in large weight + "LABS" separator + sub-tagline
          * To replace with an image logo: swap this block for <Image src="/logo.svg" .../>
          * ---------------------------------------------------------------- */}
        <a href="#" className="flex flex-col justify-center group" aria-label="TAVAS Labs Home">
          <div className="flex items-baseline gap-1.5">
            {/* Main wordmark */}
            <span className="font-display font-700 text-xl tracking-widest text-white">
              TAVAS
            </span>
            {/* Separator dot in orange */}
            <span className="text-brand-orange font-bold text-xl">·</span>
            <span className="font-display font-300 text-xl tracking-widest text-gray-300">
              LABS
            </span>
          </div>
          {/* Sub-tagline under the wordmark — visible only on desktop */}
          <span className="hidden sm:block text-[9px] tracking-[0.2em] text-gray-500 uppercase mt-0.5 group-hover:text-brand-orange transition-colors">
            Electronics · Semiconductors · Digital
          </span>
        </a>

        {/* ----------------------------------------------------------------
          * DESKTOP NAVIGATION LINKS
          * Hidden on mobile (< md breakpoint), shown as horizontal list on desktop
          * ---------------------------------------------------------------- */}
        <ul className="hidden md:flex items-center gap-8" role="list">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`
                  text-sm font-medium text-gray-300
                  hover:text-white transition-colors duration-200
                  relative after:absolute after:bottom-[-4px] after:left-0
                  after:w-0 after:h-[1px] after:bg-brand-orange
                  after:transition-all after:duration-300
                  hover:after:w-full
                `}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* ----------------------------------------------------------------
          * CTA BUTTON (desktop) + HAMBURGER (mobile)
          * ---------------------------------------------------------------- */}
        <div className="flex items-center gap-4">
          {/* "Engage Us" CTA — visible on desktop only */}
          <a
            href="#engage"
            className={`
              hidden md:inline-flex items-center gap-2
              px-5 py-2.5 rounded-lg text-sm font-semibold
              bg-brand-orange text-white
              hover:bg-brand-orange-light transition-all duration-300
              hover:shadow-[0_0_20px_rgba(242,101,34,0.4)]
            `}
          >
            Engage Us
            {/* Arrow icon */}
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          {/* Hamburger button — visible on mobile only */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {/* Animated hamburger → X icon */}
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[9px]" : ""}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* ------------------------------------------------------------------
        * MOBILE MENU DRAWER
        * Slides down from the nav when hamburger is pressed.
        * AnimatePresence lets Framer Motion animate exit transitions.
        * ------------------------------------------------------------------ */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden nav-glass border-t border-white/5"
          >
            <ul className="px-6 py-4 flex flex-col gap-4" role="list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block text-base font-medium text-gray-200 hover:text-brand-orange py-2 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              {/* Mobile CTA */}
              <li>
                <a
                  href="#engage"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center px-5 py-3 rounded-lg text-sm font-semibold bg-brand-orange text-white hover:bg-brand-orange-light transition-colors mt-2"
                >
                  Engage Us
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
