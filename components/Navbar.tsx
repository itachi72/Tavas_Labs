"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "About Us",    href: "#about"   },
  { label: "Why Us",      href: "#why-us"  },
  { label: "NEXUS",       href: "/nexus"   },
  { label: "Our Clients", href: "#clients" },
  { label: "Contact Us",  href: "#contact" },
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
      {/* ── MAIN HEADER BAR ── */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-shadow duration-500 overflow-hidden"
        style={{
          backgroundColor: "#ffffff",
          boxShadow: scrolled ? "0 2px 20px rgba(0,0,0,0.12)" : "none",
        }}
      >
        <nav className="relative max-w-7xl mx-auto pl-3 pr-4 sm:pr-6 lg:pl-0 lg:pr-8 h-[86px] sm:h-[96px] lg:h-[106px] flex items-center justify-between">

          {/* ── LOGO ── */}
          <a href="#" aria-label="TAVAS Labs Home" className="flex-shrink-0 lg:-ml-[72px]">
            {logoError ? (
              <div className="flex items-center gap-1 h-[62px] sm:h-[69px] lg:h-[77px]">
                <span className="font-display font-bold text-lg tracking-widest text-white">TAVAS</span>
                <span className="text-brand-orange font-bold text-lg">·</span>
                <span className="font-display font-light text-lg tracking-widest text-gray-300">LABS</span>
              </div>
            ) : (
              <div style={{ mixBlendMode: 'multiply' }}>
                <img
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/logo.png`}
                  alt="TAVAS Labs"
                  className="h-[70px] sm:h-[77px] lg:h-[85px] w-auto block"
                  onError={() => setLogoError(true)}
                />
              </div>
            )}
          </a>

          {/* ── DESKTOP LINKS — plain text, no box ── */}
          <ul className="hidden md:flex items-center gap-14" role="list">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative text-[22px] font-semibold text-[#0B1F3A] tracking-widest
                    transition-colors duration-200 hover:text-brand-orange
                    after:absolute after:bottom-[-3px] after:left-0 after:right-0 after:h-[2px]
                    after:rounded-full after:bg-brand-orange after:scale-x-0 after:transition-transform
                    after:duration-200 after:origin-left hover:after:scale-x-100"
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
              className="md:hidden p-2 text-[#0B1F3A] hover:text-brand-orange transition-colors"
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
              style={{ background: "#2F5068", borderTop: "1px solid rgba(255,255,255,0.08)" }}
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

    </>
  );
}
