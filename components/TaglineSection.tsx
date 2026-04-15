"use client";
/* =============================================================================
 * TAGLINE SECTION — TAVAS Labs
 * =============================================================================
 *
 * A full-width bold statement section that anchors the brand message.
 * Sits directly below the hero and acts as a "pause" moment —
 * large impactful text, no distractions.
 *
 * VISUAL APPROACH:
 *   - Dark navy background with a subtle orange horizontal rule
 *   - Three-part layout: left stat, center manifesto text, right stat
 *   - Stats can be real data or symbolic markers (from the PDF)
 *
 * CUSTOMIZATION:
 *   - TAGLINE_CONTENT → change manifesto text and stats
 *   - To remove stats: comment out the two side <StatBox> components
 *   - To make the section full-bleed: remove `max-w-7xl` constraint
 * ============================================================================= */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* --------------------------------------------------------------------------
 * CONTENT — edit here
 * -------------------------------------------------------------------------- */
const TAGLINE_CONTENT = {
  /*
   * The central manifesto paragraph.
   * The `highlight` string will be rendered in orange.
   * `before` + `after` wrap around it as normal text.
   */
  before:    "Civilizational intelligence.",
  highlight: " Ancient wisdom,",
  after:     " frontier technology.",

  /* Full descriptor below the manifesto */
  body:
    "TAVAS (तवस्) — from the Rigveda, meaning strength, power, and capability. We build AI systems that carry the weight of that promise: enduring, adaptive, and precise.",

  /* Two metric/stat boxes flanking the manifesto */
  stats: [
    { value: "4",      label: "Core Pillars" },
    { value: "∞",      label: "Design Iterations" },
  ],
};

/* --------------------------------------------------------------------------
 * STAT BOX — small number + label block
 * -------------------------------------------------------------------------- */
function StatBox({ value, label, delay }: { value: string; label: string; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center gap-1"
    >
      {/* Large value */}
      <span
        className="font-display font-bold text-gradient-orange"
        style={{ fontSize: "clamp(3rem, 6vw, 4.5rem)", lineHeight: 1 }}
      >
        {value}
      </span>
      {/* Label below */}
      <span className="text-xs sm:text-sm text-gray-500 tracking-widest uppercase font-mono">
        {label}
      </span>
    </motion.div>
  );
}

/* --------------------------------------------------------------------------
 * TAGLINE SECTION — main export
 * -------------------------------------------------------------------------- */
export default function TaglineSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="tagline"
      ref={ref}
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ background: "var(--color-navy-700)" }}
    >
      {/* Background glow — centered orange bloom */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(242,101,34,0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Orange top border rule */}
      <div className="section-divider mb-0" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* ---- THREE-COLUMN LAYOUT ---- */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-12 items-center">

          {/* Left stat */}
          <div className="hidden md:flex justify-center">
            <StatBox value={TAGLINE_CONTENT.stats[0].value} label={TAGLINE_CONTENT.stats[0].label} delay={0.3} />
          </div>

          {/* Center manifesto — the main text */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            {/* Manifesto headline */}
            <h2
              className="font-display font-bold text-white mb-6 leading-tight"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)" }}
            >
              {TAGLINE_CONTENT.before}
              <span className="text-gradient-orange">{TAGLINE_CONTENT.highlight}</span>
              {TAGLINE_CONTENT.after}
            </h2>

            {/* Orange divider line */}
            <div
              className="mx-auto mb-6 w-16 h-0.5"
              style={{ background: "var(--color-orange)" }}
              aria-hidden="true"
            />

            {/* Body text — etymology + brand promise */}
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-xl mx-auto">
              {TAGLINE_CONTENT.body}
            </p>

            {/* Mobile stats row (shown only on < md screens) */}
            <div className="flex md:hidden justify-center gap-12 mt-10">
              {TAGLINE_CONTENT.stats.map((s, i) => (
                <StatBox key={s.label} value={s.value} label={s.label} delay={0.4 + i * 0.1} />
              ))}
            </div>
          </motion.div>

          {/* Right stat */}
          <div className="hidden md:flex justify-center">
            <StatBox value={TAGLINE_CONTENT.stats[1].value} label={TAGLINE_CONTENT.stats[1].label} delay={0.4} />
          </div>
        </div>
      </div>

      {/* Orange bottom border rule */}
      <div className="section-divider mt-16" aria-hidden="true" />
    </section>
  );
}
