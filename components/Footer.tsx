"use client";
/* =============================================================================
 * FOOTER — TAVAS Labs
 * =============================================================================
 *
 * Four-column footer with:
 *   - Column 1: Logo + brand tagline + social links
 *   - Column 2: Capabilities / service links
 *   - Column 3: Company / info links
 *   - Column 4: Contact details
 *
 * Bottom bar: copyright + legal links
 *
 * CUSTOMIZATION:
 *   - FOOTER_LINKS → edit each column's items
 *   - SOCIAL_LINKS → add/remove social icons
 *   - CONTACT_INFO → update email, location, website
 * ============================================================================= */

import { motion } from "framer-motion";

/* --------------------------------------------------------------------------
 * FOOTER LINK COLUMNS
 * -------------------------------------------------------------------------- */
const FOOTER_LINKS = [
  {
    heading: "Capabilities",
    links: [
      { label: "Design",    href: "#pillars"  },
      { label: "Simulate",  href: "#pillars"  },
      { label: "Optimise",  href: "#pillars"  },
      { label: "Sustain",   href: "#pillars"  },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About TAVAS Labs",   href: "#"       },
      { label: "Why TAVAS",          href: "#why-tavas" },
      { label: "Sectors",            href: "#sectors" },
      { label: "Careers",            href: "#"        },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Insights",           href: "#"       },
      { label: "Case Studies",       href: "#"       },
      { label: "Whitepapers",        href: "#"       },
      { label: "Download Brief",     href: "#"       },
    ],
  },
];

/* --------------------------------------------------------------------------
 * SOCIAL LINKS — icon SVGs
 * -------------------------------------------------------------------------- */
const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href:  "https://linkedin.com/company/tavas-labs",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href:  "https://twitter.com/tavaslabs",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
];

/* --------------------------------------------------------------------------
 * CONTACT INFO
 * -------------------------------------------------------------------------- */
const CONTACT_INFO = {
  email:   "hello@tavaslabs.com",
  website: "www.tavaslabs.com",
  city:    "India",  // Update with specific city when ready
};

/* --------------------------------------------------------------------------
 * FOOTER — main export
 * -------------------------------------------------------------------------- */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative"
      style={{
        background:   "var(--color-navy-950)",
        borderTop:    "1px solid rgba(255,255,255,0.12)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-10 pb-6 sm:pt-16 sm:pb-8">

        {/* ---- MAIN GRID: Logo + 3 columns ---- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] gap-8 sm:gap-10 mb-10 sm:mb-14">

          {/* ---- COLUMN 1: Brand ---- */}
          <div>
            {/* Logo */}
            <a href="#" className="inline-flex flex-col mb-5" aria-label="TAVAS Labs">
              <div className="flex items-baseline gap-1.5 mb-1">
                <span className="font-display font-bold text-lg tracking-widest text-white">TAVAS </span>
                <span className="text-brand-orange font-bold"></span>
                <span className="font-display font-light text-lg tracking-widest text-gray-400">LABS</span>
              </div>
              <span className="text-[9px] tracking-[0.2em] text-gray-600 uppercase">
                Electronics · Semiconductors · Digital
              </span>
            </a>

            {/* Tagline */}
            <p className="text-sm text-gray-500 leading-relaxed max-w-[240px] mb-6">
              The AI companion for Governments, Industries, and Academics navigating
              digital transformation with digital twins.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    w-9 h-9 flex items-center justify-center rounded-lg
                    text-gray-500 transition-all duration-300
                    hover:text-brand-orange hover:bg-surface-mid
                    border border-surface-border hover:border-brand-orange/30
                  `}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* ---- COLUMNS 2–4: Link lists ---- */}
          {FOOTER_LINKS.map((col) => (
            <div key={col.heading}>
              <h4 className="text-xs font-mono tracking-widest uppercase text-gray-500 mb-5">
                {col.heading}
              </h4>
              <ul className="space-y-3" role="list">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-brand-orange transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ---- CONTACT ROW ---- */}
        <div
          className="flex flex-wrap gap-6 py-6 mb-8"
          style={{ borderTop: "1px solid var(--color-surface-border)", borderBottom: "1px solid var(--color-surface-border)" }}
        >
          {/* Email */}
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-brand-orange transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="1" y="3" width="12" height="9" rx="1"/>
              <path d="M1 4l6 4 6-4"/>
            </svg>
            {CONTACT_INFO.email}
          </a>

          {/* Website */}
          <a
            href={`https://${CONTACT_INFO.website}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-brand-orange transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="7" cy="7" r="6"/>
              <path d="M1 7h12M7 1c-1.5 2-2 4-2 6s.5 4 2 6M7 1c1.5 2 2 4 2 6s-.5 4-2 6"/>
            </svg>
            {CONTACT_INFO.website}
          </a>

          {/* Location */}
          <span className="flex items-center gap-2 text-sm text-gray-400">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 1a4.5 4.5 0 0 1 4.5 4.5C11.5 8.5 7 13 7 13S2.5 8.5 2.5 5.5A4.5 4.5 0 0 1 7 1z"/>
              <circle cx="7" cy="5.5" r="1.5"/>
            </svg>
            {CONTACT_INFO.city}
          </span>
        </div>

        {/* ---- BOTTOM BAR: copyright + legal ---- */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-600">
            © {currentYear} TAVAS Labs. All rights reserved.
          </p>
          <div className="flex gap-6">
            {[
              { label: "Privacy Policy", href: "#" },
              { label: "Terms of Use",   href: "#" },
              { label: "Cookie Policy",  href: "#" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs text-gray-600 hover:text-gray-400 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
