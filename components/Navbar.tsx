"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Why Us",       href: "#why-us"   },
  { label: "Our Services", href: "#pillars"  },
  { label: "Our Clients",  href: "#clients"  },
  { label: "Contact Us",   href: "#contact"  },
];

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);

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
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-shadow duration-500"
      style={{
        /*
         * Grey-silver header (#1C2B3A) that blends seamlessly into the
         * #076098 page background via a gradient at the bottom edge.
         */
        background: "linear-gradient(180deg, #1C2B3A 0%, #1C2B3A 72%, #076098 100%)",
        boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.35)" : "none",
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-[72px] flex items-center justify-between">

        {/* ── LOGO ── */}
        {/*
         * Save the clean TAVAS LABS logo (white-bg PNG) as /public/tavas-logo.png
         * For best results use a transparent-background PNG version.
         */}
        <a href="#" aria-label="TAVAS Labs Home" className="flex-shrink-0">
          <img
            src="/tavas-logo.png"
            alt="TAVAS Labs — Electronics · Semiconductors · Digital"
            className="h-10 w-auto"
            style={{ filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.4))" }}
          />
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
            style={{ background: "#1C2B3A", borderTop: "1px solid rgba(255,255,255,0.08)" }}
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
  );
}
