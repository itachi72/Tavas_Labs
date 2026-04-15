"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const HEADER_BG = "#2C3A4A";   // grey-silver header colour
const PAGE_BG   = "#076098";   // main page blue

const NAV_LINKS = [
  { label: "Why Us",       href: "#why-us"  },
  { label: "Our Services", href: "#pillars" },
  { label: "Our Clients",  href: "#clients" },
  { label: "Contact Us",   href: "#contact" },
];

export default function Navbar() {
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [logoError,  setLogoError]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* ── MAIN HEADER BAR (72 px tall, grey-silver) ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-shadow duration-500"
        style={{
          background: HEADER_BG,
          boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.4)" : "none",
        }}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-[72px] flex items-center justify-between">

          {/* ── LOGO + "Intelligence by Design" tagline ── */}
          <a href="#" aria-label="TAVAS Labs Home" className="flex-shrink-0 flex flex-col gap-0.5">
            {/* Tagline sits ABOVE the logo */}
            <span className="text-[9px] sm:text-[10px] tracking-[0.22em] uppercase font-mono text-brand-orange leading-none">
              Intelligence by Design
            </span>

            {/* Logo image — falls back to wordmark if file is missing */}
            {logoError ? (
              <div className="flex items-baseline gap-1">
                <span className="font-display font-bold text-lg tracking-widest text-white">TAVAS</span>
                <span className="text-brand-orange font-bold text-lg">·</span>
                <span className="font-display font-light text-lg tracking-widest text-gray-300">LABS</span>
              </div>
            ) : (
              <img
                src="/tavas-logo.png"
                alt="TAVAS Labs"
                className="h-9 w-auto"
                onError={() => setLogoError(true)}
                style={{ filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.35))" }}
              />
            )}
          </a>

          {/* ── DESKTOP LINKS ── */}
          <ul className="hidden md:flex items-center gap-8" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative text-sm font-medium text-gray-200 hover:text-white transition-colors duration-200
                    after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px]
                    after:bg-brand-orange after:transition-all after:duration-300 hover:after:w-full"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* ── CTA + HAMBURGER ── */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold
                bg-brand-orange text-white hover:bg-brand-orange-light transition-all duration-300
                hover:shadow-[0_0_20px_rgba(242,101,34,0.4)]"
            >
              Engage Us
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <div className="w-5 h-4 flex flex-col justify-between">
                <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 ${mobileOpen ? "-rotate-45 -translate-y-[9px]" : ""}`} />
              </div>
            </button>
          </div>
        </nav>

        {/* ── MOBILE DRAWER ── */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              style={{ background: HEADER_BG, borderTop: "1px solid rgba(255,255,255,0.08)" }}
            >
              <ul className="px-6 py-4 flex flex-col gap-1" role="list">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block py-3 text-base font-medium text-gray-200 hover:text-brand-orange
                        border-b border-white/10 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
                <li className="pt-3">
                  <a
                    href="#contact"
                    onClick={() => setMobileOpen(false)}
                    className="block w-full text-center px-5 py-3 rounded-lg text-sm font-semibold
                      bg-brand-orange text-white hover:bg-brand-orange-light transition-colors"
                  >
                    Engage Us
                  </a>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* ── BLEND STRIP ─────────────────────────────────────────────────────
       * Fixed strip just below the header that fades grey-silver → page blue.
       * This creates a seamless visual transition between the header and the
       * rest of the page regardless of which section is visible.
       * ──────────────────────────────────────────────────────────────────── */}
      <div
        className="fixed left-0 right-0 pointer-events-none z-40"
        style={{
          top: "72px",
          height: "36px",
          background: `linear-gradient(180deg, ${HEADER_BG} 0%, ${PAGE_BG} 100%)`,
        }}
        aria-hidden="true"
      />
    </>
  );
}
