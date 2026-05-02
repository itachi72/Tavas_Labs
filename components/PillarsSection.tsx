"use client";

import { motion } from "framer-motion";
import NeuralSpace from "./NeuralSpace";

const GOLD = "#C9A84C";

function DesignIcon() {
  return <svg width="32" height="32" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="14" cy="14" r="11"/><path d="M14 3L14 6"/><path d="M14 22L14 25"/><path d="M3 14L6 14"/><path d="M22 14L25 14"/><circle cx="14" cy="14" r="3"/><path d="M14 11L17 6"/></svg>;
}
function SimulateIcon() {
  return <svg width="32" height="32" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="10" height="12" rx="2"/><rect x="15" y="8" width="10" height="12" rx="2" opacity="0.5"/><path d="M13 14L15 14" strokeDasharray="1 1"/></svg>;
}
function OptimiseIcon() {
  return <svg width="32" height="32" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22L10 16L15 18L24 8"/><path d="M20 8L24 8L24 12"/><line x1="4" y1="22" x2="24" y2="22"/><line x1="4" y1="6" x2="4" y2="22"/></svg>;
}
function SustainIcon() {
  return <svg width="32" height="32" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 14A8 8 0 0 1 22 14"/><path d="M22 14A8 8 0 0 1 6 14"/><path d="M22 14L19 11M22 14L25 11"/><path d="M6 14L3 17M6 14L9 17"/></svg>;
}

const PILLARS = [
  {
    number: "01", icon: <DesignIcon />, title: "Design", tagline: "Blueprints for certainty",
    description: "We capture complexity early with systems-first design, converting strategy, constraints, and regulation into resilient digital architectures.",
    capabilities: ["Systems engineering for electronics and mobility", "Requirement traceability and risk mapping", "Architecture decomposition and interface definition", "Cross-disciplinary design validation"],
    accentColor: "#F26522", bgAccent: "rgba(242,101,34,0.12)", borderColor: "rgba(242,101,34,0.35)",
  },
  {
    number: "02", icon: <SimulateIcon />, title: "Simulate", tagline: "Evidence before execution",
    description: "Our DSOS simulations turn ideas into operating realities, validating behavior through digital twins, hybrid models, and scenario-driven testing.",
    capabilities: ["Multi-domain digital twin models", "Performance prediction and anomaly detection", "What-if scenario exploration", "Hardware-in-the-loop and physics-aware simulation"],
    accentColor: "#60A5FA", bgAccent: "rgba(96,165,250,0.10)", borderColor: "rgba(96,165,250,0.30)",
  },
  {
    number: "03", icon: <OptimiseIcon />, title: "Optimise", tagline: "Smarter, faster, leaner",
    description: "We apply AI and optimization science to tune systems for cost, performance, reliability and sustainability across changing conditions.",
    capabilities: ["Multi-objective decision optimisation", "Predictive control and tuning", "Operational efficiency improvement", "Adaptive resource and cost management"],
    accentColor: "#F26522", bgAccent: "rgba(242,101,34,0.12)", borderColor: "rgba(242,101,34,0.35)",
  },
  {
    number: "04", icon: <SustainIcon />, title: "Sustain", tagline: "Built to endure",
    description: "Our DSOS approach embeds resilience, knowledge continuity and governance so systems stay effective long after launch.",
    capabilities: ["Continuous performance monitoring", "Governance and compliance readiness", "Model refresh and lifecycle adaptation", "Institutional knowledge capture"],
    accentColor: "#60A5FA", bgAccent: "rgba(96,165,250,0.10)", borderColor: "rgba(96,165,250,0.30)",
  },
];

function PillarCard({ pillar, index }: { pillar: typeof PILLARS[number]; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group relative rounded-2xl p-6 sm:p-8 flex flex-col cursor-default"
      style={{
        background: "rgba(8, 18, 38, 0.72)",
        border: `1px solid ${pillar.borderColor}`,
        boxShadow: "0 4px 24px rgba(0,0,0,0.35)",
        backdropFilter: "blur(12px)",
      }}
    >
      {/* Faint number watermark */}
      <span
        className="absolute top-4 right-5 font-display font-bold text-6xl select-none pointer-events-none"
        style={{ color: pillar.accentColor, opacity: 0.08 }}
        aria-hidden="true"
      >
        {pillar.number}
      </span>

      <div className="flex items-center gap-4 mb-5">
        <div
          className="w-16 h-16 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
          style={{ background: pillar.bgAccent, border: `1px solid ${pillar.borderColor}`, color: pillar.accentColor }}
        >
          {pillar.icon}
        </div>
        <div className="min-w-0">
          <h3 className="font-display font-bold text-4xl text-white leading-tight">{pillar.title}</h3>
          <p className="text-sm sm:text-base font-mono tracking-widest uppercase mt-1" style={{ color: pillar.accentColor }}>
            {pillar.tagline}
          </p>
        </div>
      </div>

      {/* Description */}
      <p className="text-base leading-relaxed mb-6 text-gray-300">{pillar.description}</p>

      {/* Capabilities */}
      <ul className="space-y-3 mt-auto" role="list">
        {pillar.capabilities.map((cap) => (
          <li key={cap} className="flex items-start gap-2.5 text-base text-gray-300">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-0.5 flex-shrink-0" aria-hidden="true">
              <path d="M4 3l4 4-4 4" stroke={pillar.accentColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {cap}
          </li>
        ))}
      </ul>

      {/* Hover accent line */}
      <div
        className="absolute bottom-0 left-6 right-6 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(90deg, transparent, ${pillar.accentColor}, transparent)` }}
        aria-hidden="true"
      />
    </motion.article>
  );
}

export default function PillarsSection() {
  return (
    <section id="pillars" className="relative py-24 sm:py-32 overflow-hidden" style={{ background: "#080F1E" }}>

      {/* Neural space canvas */}
      <NeuralSpace />

      {/* Nebula colour blooms */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }} aria-hidden="true">
        {/* Blue-violet — top left */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 65% 50% at 15% 25%, rgba(59,80,210,0.20) 0%, transparent 65%)" }} />
        {/* Orange warmth — top right */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 50% 40% at 85% 20%, rgba(242,101,34,0.10) 0%, transparent 60%)" }} />
        {/* Teal — bottom left */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 55% 45% at 10% 80%, rgba(20,160,180,0.10) 0%, transparent 60%)" }} />
        {/* Purple deep-field centre */}
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 60% 55% at 55% 55%, rgba(100,40,180,0.10) 0%, transparent 65%)" }} />
      </div>

      {/* Top fade — blend into section above */}
      <div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(180deg, #1B2E48 0%, transparent 100%)", zIndex: 2 }}
        aria-hidden="true"
      />
      {/* Bottom fade — blend into section below */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(0deg, #14243A 0%, transparent 100%)", zIndex: 2 }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8" style={{ zIndex: 3 }}>

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xl mb-1 tracking-wider" style={{ fontFamily: "'Cinzel', Georgia, serif", color: GOLD }}>
            DSOS · Design · Simulate · Optimise · Sustain
          </p>
          <p className="text-sm font-mono tracking-[0.25em] uppercase text-brand-orange mb-4">
            A structured framework for systems, products and operations
          </p>
          <h2 className="font-display font-bold text-white mb-5 leading-tight" style={{ fontSize: "clamp(2.25rem, 4.2vw, 3.3rem)" }}>
            Four pillars of digital systems success.
            <br />
            <span className="text-gradient-orange">From architecture to enduring operation.</span>
          </h2>
          <p className="text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed text-gray-300">
            The DSOS framework guides every phase of engagement, turning ambiguity into validated choices and delivering systems that can adapt and thrive.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-7">
          {PILLARS.map((pillar, i) => (
            <PillarCard key={pillar.title} pillar={pillar} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-14"
        >
          <a href="#contact" className="inline-flex items-center gap-3 text-4xl font-semibold text-brand-orange hover:text-brand-orange-light transition-colors group">
            See our engagement models
            <svg width="22" height="22" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1" aria-hidden="true">
              <path d="M1 8h14M8 1l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
