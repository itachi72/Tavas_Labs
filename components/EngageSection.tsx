"use client";
/* =============================================================================
 * ENGAGE SECTION — TAVAS Labs
 * =============================================================================
 *
 * The final call-to-action section before the footer.
 * Inspired by the PDF's "Engage Us" section — direct, confident, action-oriented.
 *
 * LAYOUT:
 *   - Full-width dark panel with orange glow accent
 *   - Left: "Begin the Conversation" heading + sub-copy + two CTA paths
 *   - Right: Simple contact card / form teaser
 *
 * CUSTOMIZATION:
 *   - ENGAGE_CONTENT → edit all text
 *   - The form is intentionally minimal (email + submit). You can expand it
 *     with full form fields or wire it to an API route in app/api/contact/route.ts
 *   - To change the background: edit the gradient in the section style prop
 * ============================================================================= */

import { useState } from "react";
import { motion } from "framer-motion";

/* --------------------------------------------------------------------------
 * CONTENT
 * -------------------------------------------------------------------------- */
const ENGAGE_CONTENT = {
  eyebrow:  "Engage Us",
  headline: "Ready to begin\nthe conversation?",
  body:
    "Whether you're a government body, industrial enterprise, or academic institution —\nwe start every engagement with a no-obligation discovery session to map your problem to our methodology.",
  cta_1: { label: "Schedule a Discovery Call", href: "mailto:hello@tavaslabs.com" },
  cta_2: { label: "Download Capability Brief", href: "#" },
  form_placeholder: "your@email.com",
  form_cta:         "Get in touch",
  note:
    "We typically respond within 24 hours. All discussions are covered by NDA on request.",
};

/* --------------------------------------------------------------------------
 * ENGAGE SECTION — main export
 * -------------------------------------------------------------------------- */
export default function EngageSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  /* Minimal form submission handler — replace with a real API call */
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    // TODO: Wire to your API route: POST /api/contact with { email }
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative py-14 sm:py-24 lg:py-32 overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 70% 50% at 50% 50%, rgba(242,101,34,0.10) 0%, transparent 60%),
          var(--color-navy-800)
        `,
      }}
    >
      {/* ---- TOP BORDER RULE ---- */}
      <div className="section-divider mb-0" aria-hidden="true" />

      {/* ---- BACKGROUND CIRCUIT PATTERN (decorative) ---- */}
      <div
        className="absolute inset-0 bg-grid-overlay opacity-15 pointer-events-none"
        aria-hidden="true"
      />

      {/* ---- FOUR TINY PILLAR SILHOUETTES (decorative, background) ---- */}
      {/*
       * Echoes the hero's monolith pillars as subtle background elements.
       * Pure decoration — aria-hidden so screen readers skip them.
       */}
      <div className="absolute inset-0 flex items-end justify-center gap-12 pb-0 pointer-events-none opacity-5" aria-hidden="true">
        {["D","S","O","S"].map((letter, i) => (
          <div
            key={i}
            className="w-16 rounded-t-sm flex items-center justify-center"
            style={{
              height:     `${120 + i * 20}px`,
              background: "linear-gradient(180deg, var(--color-navy-700) 0%, var(--color-navy-900) 100%)",
              border:     "1px solid rgba(242,101,34,0.3)",
            }}
          >
            <span className="font-display font-bold text-3xl text-brand-orange">
              {letter}
            </span>
          </div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* ---- TWO-COLUMN LAYOUT ---- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-14 lg:gap-20 items-center">

          {/* ---- LEFT: HEADING + PATHS ---- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Eyebrow */}
            <p className="text-xs font-mono tracking-[0.25em] uppercase text-brand-orange mb-6">
              {ENGAGE_CONTENT.eyebrow}
            </p>

            {/* Headline — newlines preserved via whitespace-pre-line */}
            <h2
              className="font-display font-bold text-white mb-6 leading-tight whitespace-pre-line"
              style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)" }}
            >
              {ENGAGE_CONTENT.headline}
            </h2>

            {/* Body copy */}
            <p className="text-base text-gray-400 leading-relaxed mb-10 max-w-md whitespace-pre-line">
              {ENGAGE_CONTENT.body}
            </p>

            {/* Two engagement path CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Primary: Schedule a call */}
              <a
                href={ENGAGE_CONTENT.cta_1.href}
                className={`
                  group inline-flex items-center gap-2
                  px-7 py-3.5 rounded-lg text-sm font-semibold
                  bg-brand-orange text-white
                  hover:bg-brand-orange-light transition-all duration-300
                  hover:shadow-[0_0_25px_rgba(242,101,34,0.45)]
                  hover:-translate-y-0.5
                `}
              >
                {ENGAGE_CONTENT.cta_1.label}
                <svg
                  width="14" height="14" viewBox="0 0 14 14" fill="none"
                  className="transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              {/* Secondary: Download brief */}
              <a
                href={ENGAGE_CONTENT.cta_2.href}
                className={`
                  group inline-flex items-center gap-2
                  px-7 py-3.5 rounded-lg text-sm font-semibold
                  border border-surface-border text-gray-300
                  hover:border-brand-orange/40 hover:text-white hover:bg-surface-dark
                  transition-all duration-300
                  hover:-translate-y-0.5
                `}
              >
                {ENGAGE_CONTENT.cta_2.label}
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="transition-transform group-hover:translate-y-0.5" aria-hidden="true">
                  <path d="M7 1v8M3 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M1 12h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </a>
            </div>
          </motion.div>

          {/* ---- RIGHT: EMAIL CAPTURE CARD ---- */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="rounded-2xl p-8 sm:p-10"
            style={{
              background: "linear-gradient(135deg, var(--color-navy-800) 0%, var(--color-navy-900) 100%)",
              border:     "1px solid var(--color-surface-border)",
            }}
          >
            {submitted ? (
              /* ---- SUCCESS STATE ---- */
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ background: "rgba(242,101,34,0.15)", border: "1px solid rgba(242,101,34,0.4)" }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#F26522" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 6 9 17l-5-5"/>
                  </svg>
                </div>
                <h3 className="font-display font-bold text-white text-xl mb-2">Message received</h3>
                <p className="text-gray-400 text-sm">We'll be in touch within 24 hours.</p>
              </motion.div>
            ) : (
              /* ---- FORM STATE ---- */
              <>
                <h3 className="font-display font-bold text-white text-xl mb-2">
                  Leave your email
                </h3>
                <p className="text-sm text-gray-400 mb-7 leading-relaxed">
                  We'll send you a brief on how TAVAS Labs has approached similar
                  challenges in your sector.
                </p>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  {/* Email input */}
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={ENGAGE_CONTENT.form_placeholder}
                    className={`
                      w-full px-4 py-3.5 rounded-lg text-sm text-white
                      bg-navy-950 border border-surface-border
                      placeholder:text-gray-600
                      focus:outline-none focus:border-brand-orange/50
                      transition-colors duration-300
                    `}
                    aria-label="Your email address"
                  />

                  {/* Submit button */}
                  <button
                    type="submit"
                    className={`
                      w-full py-3.5 rounded-lg text-sm font-semibold text-white
                      bg-brand-orange hover:bg-brand-orange-light
                      transition-all duration-300
                      hover:shadow-[0_0_20px_rgba(242,101,34,0.4)]
                    `}
                  >
                    {ENGAGE_CONTENT.form_cta}
                  </button>
                </form>

                {/* Privacy note */}
                <p className="text-[10px] text-gray-600 mt-5 leading-relaxed">
                  {ENGAGE_CONTENT.note}
                </p>
              </>
            )}
          </motion.div>
        </div>
      </div>

      {/* ---- BOTTOM BORDER RULE ---- */}
      <div className="section-divider mt-20" aria-hidden="true" />
    </section>
  );
}
