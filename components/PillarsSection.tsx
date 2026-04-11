"use client";
/* =============================================================================
 * PILLARS SECTION — TAVAS Labs
 * =============================================================================
 *
 * Detailed breakdown of the four pillars: Design · Simulate · Optimise · Sustain
 * This section expands on what the hero pillars introduced — providing context,
 * use cases, and capability descriptions for each pillar.
 *
 * LAYOUT:
 *   - Section heading + intro text (centered)
 *   - Four large cards in a 2×2 grid (desktop) or single column (mobile)
 *   - Each card has: number, icon, title, description, bullet capability list
 *
 * CUSTOMIZATION:
 *   - PILLARS_DETAIL → edit all card content here
 *   - Card layout: change `grid-cols-2` to `grid-cols-4` for a single row layout
 *   - Card accent colors: edit `accentColor` on each pillar entry
 *   - To add a 5th pillar: add an entry to PILLARS_DETAIL and adjust grid
 * ============================================================================= */

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

/* --------------------------------------------------------------------------
 * ICON COMPONENTS
 * Simple SVG icons for each pillar — replace with your preferred icon library
 * (e.g., Lucide React, Heroicons, Phosphor) if needed.
 * -------------------------------------------------------------------------- */

function DesignIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Compass/drafting metaphor */}
      <circle cx="14" cy="14" r="11" />
      <path d="M14 3 L14 6" />
      <path d="M14 22 L14 25" />
      <path d="M3 14 L6 14" />
      <path d="M22 14 L25 14" />
      <circle cx="14" cy="14" r="3" />
      <path d="M14 11 L17 6" />
    </svg>
  );
}

function SimulateIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Twin overlapping shapes — digital twin metaphor */}
      <rect x="3" y="8" width="10" height="12" rx="2" />
      <rect x="15" y="8" width="10" height="12" rx="2" opacity="0.5" />
      <path d="M13 14 L15 14" strokeDasharray="1 1" />
    </svg>
  );
}

function OptimiseIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Upward trending graph — optimisation metaphor */}
      <path d="M4 22 L10 16 L15 18 L24 8" />
      <path d="M20 8 L24 8 L24 12" />
      <line x1="4" y1="22" x2="24" y2="22" />
      <line x1="4" y1="6"  x2="4" y2="22" />
    </svg>
  );
}

function SustainIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Circular arrows — sustain / lifecycle metaphor */}
      <path d="M6 14 A8 8 0 0 1 22 14" />
      <path d="M22 14 A8 8 0 0 1 6 14" />
      <path d="M22 14 L19 11 M22 14 L25 11" />
      <path d="M6 14 L3 17 M6 14 L9 17" />
    </svg>
  );
}

/* --------------------------------------------------------------------------
 * PILLARS DETAIL DATA
 * -------------------------------------------------------------------------- */
const PILLARS_DETAIL = [
  {
    number:      "01",
    icon:        <DesignIcon />,
    title:       "Design",
    tagline:     "Concept to Blueprint",
    description:
      "AI-assisted system architecture and conceptual design that transforms requirements into precise engineering blueprints — before a single prototype is built.",
    capabilities: [
      "Requirements engineering & gap analysis",
      "AI-assisted architecture generation",
      "Cross-domain constraint resolution",
      "Rapid design-space exploration",
    ],
    accentColor:    "#F26522",  // orange
    bgAccent:       "rgba(242,101,34,0.05)",
    borderColor:    "rgba(242,101,34,0.2)",
    hoverBorder:    "rgba(242,101,34,0.5)",
  },
  {
    number:      "02",
    icon:        <SimulateIcon />,
    title:       "Simulate",
    tagline:     "Digital Twin Intelligence",
    description:
      "High-fidelity digital twins that mirror the physical world in real time — enabling engineers and operators to test, predict, and understand system behaviour without risk.",
    capabilities: [
      "Multi-physics simulation engines",
      "Real-time digital twin synchronisation",
      "Scenario stress-testing & failure modes",
      "Hardware-in-the-loop (HIL) integration",
    ],
    accentColor:    "#3B82F6",  // blue
    bgAccent:       "rgba(59,130,246,0.05)",
    borderColor:    "rgba(59,130,246,0.2)",
    hoverBorder:    "rgba(59,130,246,0.5)",
  },
  {
    number:      "03",
    icon:        <OptimiseIcon />,
    title:       "Optimise",
    tagline:     "Intelligent Efficiency",
    description:
      "Continuous ML-powered optimisation loops that read system telemetry and autonomously tune parameters to maximise performance, reduce cost, and minimise waste.",
    capabilities: [
      "Reinforcement learning control loops",
      "Multi-objective Pareto optimisation",
      "Predictive maintenance scheduling",
      "Energy and resource efficiency tuning",
    ],
    accentColor:    "#F26522",
    bgAccent:       "rgba(242,101,34,0.05)",
    borderColor:    "rgba(242,101,34,0.2)",
    hoverBorder:    "rgba(242,101,34,0.5)",
  },
  {
    number:      "04",
    icon:        <SustainIcon />,
    title:       "Sustain",
    tagline:     "Operational Longevity",
    description:
      "Long-horizon operational intelligence that ensures systems evolve with changing demands, regulatory environments, and technology landscapes — without starting over.",
    capabilities: [
      "Adaptive model retraining pipelines",
      "Regulatory & compliance monitoring",
      "Knowledge capture & institutional memory",
      "Lifecycle management dashboards",
    ],
    accentColor:    "#3B82F6",
    bgAccent:       "rgba(59,130,246,0.05)",
    borderColor:    "rgba(59,130,246,0.2)",
    hoverBorder:    "rgba(59,130,246,0.5)",
  },
];

/* --------------------------------------------------------------------------
 * PILLAR CARD COMPONENT
 * -------------------------------------------------------------------------- */
interface PillarCardProps {
  pillar: (typeof PILLARS_DETAIL)[number];
  delay:  number;
}

function PillarCard({ pillar, delay }: PillarCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4 }}
      className="group relative rounded-xl p-8 transition-all duration-500 cursor-default"
      style={{
        background:   `linear-gradient(135deg, var(--color-navy-800) 0%, var(--color-navy-900) 100%)`,
        border:       `1px solid ${pillar.borderColor}`,
        /* On hover, border brightens — handled via whileHover state via inline style below */
      }}
    >
      {/* ---- CORNER NUMBER ---- */}
      {/*
       * Large faded number in the background top-right corner.
       * Gives a magazine-layout feel without crowding the content.
       */}
      <span
        className="absolute top-4 right-6 font-display font-bold text-5xl select-none pointer-events-none"
        style={{ color: pillar.accentColor, opacity: 0.1 }}
        aria-hidden="true"
      >
        {pillar.number}
      </span>

      {/* ---- ICON ---- */}
      <div
        className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
        style={{
          background: pillar.bgAccent,
          border:     `1px solid ${pillar.borderColor}`,
          color:      pillar.accentColor,
        }}
      >
        {pillar.icon}
      </div>

      {/* ---- TITLE + TAGLINE ---- */}
      <div className="mb-4">
        <h3 className="font-display font-bold text-xl text-white mb-1">
          {pillar.title}
        </h3>
        <p
          className="text-xs font-mono tracking-widest uppercase"
          style={{ color: pillar.accentColor }}
        >
          {pillar.tagline}
        </p>
      </div>

      {/* ---- DESCRIPTION ---- */}
      <p className="text-sm text-gray-400 leading-relaxed mb-6">
        {pillar.description}
      </p>

      {/* ---- CAPABILITY LIST ---- */}
      <ul className="space-y-2" role="list">
        {pillar.capabilities.map((cap) => (
          <li key={cap} className="flex items-start gap-2.5 text-sm text-gray-400">
            {/* Orange chevron bullet */}
            <svg
              width="14" height="14" viewBox="0 0 14 14" fill="none"
              className="mt-0.5 flex-shrink-0"
              aria-hidden="true"
            >
              <path
                d="M4 3l4 4-4 4"
                stroke={pillar.accentColor}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {cap}
          </li>
        ))}
      </ul>

      {/* ---- BOTTOM GRADIENT ACCENT LINE ---- */}
      {/*
       * A thin gradient line at the bottom of the card that glows on hover.
       * Creates a "lit base" effect echoing the pillar light in the hero.
       */}
      <div
        className="absolute bottom-0 left-6 right-6 h-px rounded-full transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{ background: `linear-gradient(90deg, transparent, ${pillar.accentColor}, transparent)` }}
        aria-hidden="true"
      />
    </motion.article>
  );
}

/* --------------------------------------------------------------------------
 * PILLARS SECTION — main export
 * -------------------------------------------------------------------------- */
export default function PillarsSection() {
  return (
    <section
      id="pillars"
      className="relative py-24 sm:py-32"
      style={{ background: "var(--color-navy-950)" }}
    >
      {/* Subtle background texture */}
      <div
        className="absolute inset-0 bg-grid-overlay opacity-20 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* ---- SECTION HEADER ---- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          {/* Eyebrow */}
          <p className="text-xs font-mono tracking-[0.25em] uppercase text-brand-orange mb-4">
            Our Approach
          </p>

          {/* Section title */}
          <h2
            className="font-display font-bold text-white mb-5 leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Four pillars.{" "}
            <span className="text-gradient-orange">One seamless lifecycle.</span>
          </h2>

          {/* Section sub-description */}
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Every engagement follows the same rigorous arc — from first principles design
            through living, self-sustaining intelligent systems.
          </p>
        </motion.div>

        {/* ---- CARDS GRID ---- */}
        {/*
         * Desktop: 2×2 grid  (grid-cols-2)
         * Mobile:  1 column   (grid-cols-1)
         * To make it 4 columns on xl: add xl:grid-cols-4
         */}
        <div
          id="capabilities"
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {PILLARS_DETAIL.map((pillar, i) => (
            <PillarCard key={pillar.title} pillar={pillar} delay={i * 0.1} />
          ))}
        </div>

        {/* ---- BOTTOM CTA TEASER ---- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-14"
        >
          <a
            href="#engage"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-orange hover:text-brand-orange-light transition-colors group"
          >
            See how we apply this to your sector
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1" aria-hidden="true">
              <path d="M1 8h14M8 1l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
