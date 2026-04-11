"use client";
/* =============================================================================
 * SECTORS SECTION — TAVAS Labs
 * =============================================================================
 *
 * Showcases the industry verticals TAVAS Labs serves.
 * Source: PDF sectors pages (Electronics, Semiconductors, Aerospace & Defence,
 * Transportation & Mobility, Energy, Healthcare, etc.)
 *
 * LAYOUT:
 *   - Section header
 *   - Responsive grid of sector tiles (icon + title + status)
 *   - "Coming Soon" badge for sectors still under development (placeholder XX in PDF)
 *
 * CUSTOMIZATION:
 *   - SECTORS → add/remove/edit sector entries
 *   - "coming_soon: true" → renders a greyed-out tile with a "Coming Soon" badge
 *   - Grid columns: change `md:grid-cols-3 lg:grid-cols-4` for different layouts
 * ============================================================================= */

import { motion } from "framer-motion";

/* --------------------------------------------------------------------------
 * SECTOR DATA
 * Based on PDF content. Sectors with "XX" placeholder content are marked
 * coming_soon: true — they render as greyed-out tiles.
 * -------------------------------------------------------------------------- */
const SECTORS = [
  {
    id:          "electronics",
    title:       "Electronics",
    desc:        "PCB design validation, signal integrity simulation, and thermal management for complex electronics systems.",
    icon:        "⬡",   // Replace with an SVG icon component if preferred
    coming_soon: false,
  },
  {
    id:          "semiconductors",
    title:       "Semiconductors",
    desc:        "Process simulation, yield optimisation, and device characterisation for semiconductor fabs.",
    icon:        "◈",
    coming_soon: false,
  },
  {
    id:          "defence",
    title:       "Aerospace & Defence",
    desc:        "Mission planning simulations, platform lifecycle digital twins, and operational readiness analytics.",
    icon:        "△",
    coming_soon: true,   // Placeholder content in PDF — coming soon
  },
  {
    id:          "transport",
    title:       "Transportation & Mobility",
    desc:        "EV powertrain modelling, traffic flow simulation, and smart infrastructure optimisation.",
    icon:        "◎",
    coming_soon: true,   // Placeholder content in PDF — coming soon
  },
  {
    id:          "energy",
    title:       "Energy & Utilities",
    desc:        "Grid stability modelling, renewable integration forecasting, and demand-response optimisation.",
    icon:        "⌬",
    coming_soon: false,
  },
  {
    id:          "government",
    title:       "Government & Public Sector",
    desc:        "Urban planning digital twins, policy simulation, and national infrastructure intelligence.",
    icon:        "◻",
    coming_soon: false,
  },
  {
    id:          "academic",
    title:       "Academia & Research",
    desc:        "Research acceleration tools, grant-cycle simulation environments, and IP commercialisation pathways.",
    icon:        "⊙",
    coming_soon: false,
  },
  {
    id:          "manufacturing",
    title:       "Advanced Manufacturing",
    desc:        "Factory digital twins, quality prediction models, and supply chain resilience simulations.",
    icon:        "⊞",
    coming_soon: false,
  },
];

/* --------------------------------------------------------------------------
 * SECTOR TILE COMPONENT
 * -------------------------------------------------------------------------- */
interface SectorTileProps {
  sector: (typeof SECTORS)[number];
  delay:  number;
}

function SectorTile({ sector, delay }: SectorTileProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className={`
        group relative rounded-xl p-6 transition-all duration-500
        ${sector.coming_soon
          ? "opacity-50 cursor-not-allowed"
          : "cursor-default hover:-translate-y-1 hover:shadow-card-hover"
        }
      `}
      style={{
        background:  "linear-gradient(135deg, var(--color-navy-800) 0%, var(--color-navy-900) 100%)",
        border:      "1px solid var(--color-surface-border)",
      }}
    >
      {/* Coming soon badge */}
      {sector.coming_soon && (
        <span
          className="absolute top-3 right-3 text-[9px] font-mono tracking-widest uppercase px-2 py-0.5 rounded"
          style={{
            background: "rgba(242,101,34,0.1)",
            border:     "1px solid rgba(242,101,34,0.3)",
            color:      "#F26522",
          }}
        >
          Soon
        </span>
      )}

      {/* Icon */}
      <div className="text-2xl mb-4 text-brand-orange" aria-hidden="true">
        {sector.icon}
      </div>

      {/* Title */}
      <h3 className="font-display font-semibold text-base text-white mb-2">
        {sector.title}
      </h3>

      {/* Description */}
      <p className="text-xs text-gray-500 leading-relaxed">
        {sector.desc}
      </p>

      {/* Hover bottom accent line */}
      {!sector.coming_soon && (
        <div
          className="absolute bottom-0 left-4 right-4 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: "linear-gradient(90deg, transparent, #F26522, transparent)" }}
          aria-hidden="true"
        />
      )}
    </motion.div>
  );
}

/* --------------------------------------------------------------------------
 * SECTORS SECTION — main export
 * -------------------------------------------------------------------------- */
export default function SectorsSection() {
  return (
    <section
      id="sectors"
      className="relative py-24 sm:py-32"
      style={{ background: "var(--color-navy-900)" }}
    >
      {/* Decorative background glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(242,101,34,0.05) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* ---- SECTION HEADER ---- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-mono tracking-[0.25em] uppercase text-brand-orange mb-4">
            Sectors We Serve
          </p>
          <h2
            className="font-display font-bold text-white mb-5"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Where{" "}
            <span className="text-gradient-orange">intelligence meets industry</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            From semiconductor fabs to government infrastructure — TAVAS Labs applies
            its four-pillar methodology across the domains that shape civilisation.
          </p>
        </motion.div>

        {/* ---- SECTORS GRID ---- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5">
          {SECTORS.map((sector, i) => (
            <SectorTile key={sector.id} sector={sector} delay={i * 0.07} />
          ))}
        </div>

        {/* ---- SECTOR NOTE ---- */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-xs text-gray-600 mt-8 font-mono"
        >
          Sectors marked "Soon" are in active development. Engage us to join early access.
        </motion.p>
      </div>
    </section>
  );
}
