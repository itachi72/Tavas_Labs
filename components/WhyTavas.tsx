"use client";
/* =============================================================================
 * WHY TAVAS SECTION — TAVAS Labs
 * =============================================================================
 *
 * Differentiators / value propositions section.
 * Answers the question: "Why TAVAS Labs over any other AI firm?"
 *
 * LAYOUT:
 *   - Left column: section header + featured differentiator
 *   - Right column: grid of smaller differentiator cards
 *
 * CUSTOMIZATION:
 *   - DIFFERENTIATORS → edit value proposition points
 *   - FEATURED → the hero differentiator shown larger on the left
 *   - To switch to a symmetric grid: remove the two-column layout and
 *     map all items into a single grid
 * ============================================================================= */

import { motion } from "framer-motion";

/* --------------------------------------------------------------------------
 * FEATURED DIFFERENTIATOR — shown large on the left (desktop)
 * -------------------------------------------------------------------------- */
const FEATURED = {
  label:   "The TAVAS Difference",
  title:   "Built at the intersection of engineering depth and AI breadth.",
  body:
    "Most AI firms start from software. We start from physics. Our models are grounded in first-principles engineering, validated through simulation before deployment — giving our clients confidence that the AI does what the equations say it should.",
  stat:    { value: "10×", label: "faster design iteration vs. traditional simulation" },
};

/* --------------------------------------------------------------------------
 * DIFFERENTIATOR CARDS
 * -------------------------------------------------------------------------- */
const DIFFERENTIATORS = [
  {
    icon: "⊛",
    title: "Domain-first AI",
    desc:  "Our AI is trained on engineering physics, not just generic text data — making it actually useful for technical problems.",
  },
  {
    icon: "⊕",
    title: "Full-lifecycle coverage",
    desc:  "We don't parachute in for a pilot and leave. We stay through Design, Simulate, Optimise, and Sustain.",
  },
  {
    icon: "⊗",
    title: "Government-grade rigour",
    desc:  "Methodologies built to satisfy regulatory scrutiny — DRDO, ISRO, and national lab standards.",
  },
  {
    icon: "⊘",
    title: "India-first perspective",
    desc:  "Understanding of the unique constraints, talent pool, and policy landscape that global firms miss.",
  },
  {
    icon: "⊙",
    title: "Sovereign data",
    desc:  "On-premise deployment options ensure your sensitive data never leaves your infrastructure.",
  },
  {
    icon: "⊚",
    title: "Academic bridge",
    desc:  "Active research partnerships with leading IITs and international universities, keeping our models at the frontier.",
  },
];

/* --------------------------------------------------------------------------
 * WHY TAVAS SECTION — main export
 * -------------------------------------------------------------------------- */
export default function WhyTavas() {
  return (
    <section
      id="why-tavas"
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ background: "var(--color-navy-950)" }}
    >
      {/* Decorative corner glow */}
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 80% 80%, rgba(242,101,34,0.08) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* ---- TWO-COLUMN LAYOUT ---- */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">

          {/* ---- LEFT: FEATURED DIFFERENTIATOR ---- */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-28"  /* Sticky on desktop for cinematic scroll */
          >
            {/* Eyebrow */}
            <p className="text-xs font-mono tracking-[0.25em] uppercase text-brand-orange mb-6">
              {FEATURED.label}
            </p>

            {/* Title */}
            <h2
              className="font-display font-bold text-white mb-6 leading-tight"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}
            >
              {FEATURED.title}
            </h2>

            {/* Orange divider */}
            <div className="w-10 h-0.5 bg-brand-orange mb-6" aria-hidden="true" />

            {/* Body */}
            <p className="text-base text-gray-400 leading-relaxed mb-10">
              {FEATURED.body}
            </p>

            {/* Stat callout */}
            <div
              className="inline-flex flex-col gap-1 px-6 py-5 rounded-xl"
              style={{
                background: "rgba(242,101,34,0.06)",
                border:     "1px solid rgba(242,101,34,0.25)",
              }}
            >
              <span
                className="font-display font-bold text-gradient-orange"
                style={{ fontSize: "2.5rem", lineHeight: 1 }}
              >
                {FEATURED.stat.value}
              </span>
              <span className="text-xs text-gray-400 max-w-[200px] leading-relaxed">
                {FEATURED.stat.label}
              </span>
            </div>
          </motion.div>

          {/* ---- RIGHT: DIFFERENTIATOR CARDS GRID ---- */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {DIFFERENTIATORS.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -3 }}
                className="group p-6 rounded-xl transition-all duration-400"
                style={{
                  background: "linear-gradient(135deg, var(--color-navy-800) 0%, var(--color-navy-900) 100%)",
                  border:     "1px solid var(--color-surface-border)",
                }}
              >
                {/* Icon */}
                <span className="text-xl text-brand-orange block mb-3" aria-hidden="true">
                  {d.icon}
                </span>
                {/* Title */}
                <h3 className="font-display font-semibold text-sm text-white mb-2">
                  {d.title}
                </h3>
                {/* Description */}
                <p className="text-xs text-gray-500 leading-relaxed">
                  {d.desc}
                </p>

                {/* Bottom accent */}
                <div
                  className="mt-4 h-px w-0 group-hover:w-full transition-all duration-500 rounded-full"
                  style={{ background: "linear-gradient(90deg, #F26522, transparent)" }}
                  aria-hidden="true"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
