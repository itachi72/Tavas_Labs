"use client";

import { motion } from "framer-motion";

const GOLD = "#C9A84C";
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

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
    number: "01", icon: <DesignIcon />, title: "Design", tagline: "Concept to Blueprint",
    description: "AI-assisted system architecture and conceptual design that transforms requirements into precise engineering blueprints — before a single prototype is built.",
    capabilities: ["Requirements engineering & gap analysis", "AI-assisted architecture generation", "Cross-domain constraint resolution", "Rapid design-space exploration"],
    accentColor: "#F26522", bgAccent: "rgba(242,101,34,0.10)", borderColor: "rgba(242,101,34,0.3)",
  },
  {
    number: "02", icon: <SimulateIcon />, title: "Simulate", tagline: "Digital Twin Intelligence",
    description: "High-fidelity digital twins that mirror the physical world in real time — enabling engineers and operators to test, predict, and understand system behaviour without risk.",
    capabilities: ["Multi-physics simulation engines", "Real-time digital twin synchronisation", "Scenario stress-testing & failure modes", "Hardware-in-the-loop (HIL) integration"],
    accentColor: "#1D4B7A", bgAccent: "rgba(29,75,122,0.08)", borderColor: "rgba(29,75,122,0.25)",
  },
  {
    number: "03", icon: <OptimiseIcon />, title: "Optimise", tagline: "Intelligent Efficiency",
    description: "Continuous ML-powered optimisation loops that read system telemetry and autonomously tune parameters to maximise performance, reduce cost, and minimise waste.",
    capabilities: ["Reinforcement learning control loops", "Multi-objective Pareto optimisation", "Predictive maintenance scheduling", "Energy and resource efficiency tuning"],
    accentColor: "#F26522", bgAccent: "rgba(242,101,34,0.10)", borderColor: "rgba(242,101,34,0.3)",
  },
  {
    number: "04", icon: <SustainIcon />, title: "Sustain", tagline: "Operational Longevity",
    description: "Long-horizon operational intelligence that ensures systems evolve with changing demands, regulatory environments, and technology landscapes — without starting over.",
    capabilities: ["Adaptive model retraining pipelines", "Regulatory & compliance monitoring", "Knowledge capture & institutional memory", "Lifecycle management dashboards"],
    accentColor: "#1D4B7A", bgAccent: "rgba(29,75,122,0.08)", borderColor: "rgba(29,75,122,0.25)",
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
        background: "rgba(255,255,255,0.82)",
        border: `1px solid ${pillar.borderColor}`,
        boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
        backdropFilter: "blur(4px)",
      }}
    >
      {/* Faint number watermark */}
      <span
        className="absolute top-4 right-5 font-display font-bold text-6xl select-none pointer-events-none"
        style={{ color: pillar.accentColor, opacity: 0.07 }}
        aria-hidden="true"
      >
        {pillar.number}
      </span>

      {/* Icon */}
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
        style={{ background: pillar.bgAccent, border: `1px solid ${pillar.borderColor}`, color: pillar.accentColor }}
      >
        {pillar.icon}
      </div>

      {/* Title + tagline */}
      <h3 className="font-display font-bold text-xl mb-1" style={{ color: "#0B1F3A" }}>{pillar.title}</h3>
      <p className="text-xs font-mono tracking-widest uppercase mb-4" style={{ color: pillar.accentColor }}>
        {pillar.tagline}
      </p>

      {/* Description */}
      <p className="text-sm leading-relaxed mb-6" style={{ color: "#374151" }}>{pillar.description}</p>

      {/* Capabilities */}
      <ul className="space-y-2 mt-auto" role="list">
        {pillar.capabilities.map((cap) => (
          <li key={cap} className="flex items-start gap-2.5 text-sm" style={{ color: "#374151" }}>
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
    <section id="pillars" className="relative py-24 sm:py-32 overflow-hidden" style={{ backgroundColor: "#E8EDF3" }}>

      {/* Circuit board overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${BASE}/navbar-bg.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.22,
          mixBlendMode: "multiply",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-base mb-1 tracking-wider" style={{ fontFamily: "'Cinzel', Georgia, serif", color: GOLD }}>
            तवस् · Tavas
          </p>
          <p className="text-xs font-mono tracking-[0.25em] uppercase text-brand-orange mb-4">
            Strength · Power · Capability — Our Approach
          </p>
          <h2 className="font-display font-bold mb-5 leading-tight" style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)", color: "#0B1F3A" }}>
            Four pillars.
            <br />
            <span className="text-gradient-orange">One seamless lifecycle.</span>
          </h2>
          <p className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: "#4B5563" }}>
            Every engagement follows the same rigorous arc —
            <br />from first principles design through living, self-sustaining intelligent systems.
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
          <a href="#contact" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-orange hover:text-brand-orange-light transition-colors group">
            See our engagement models
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform group-hover:translate-x-1" aria-hidden="true">
              <path d="M1 8h14M8 1l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
