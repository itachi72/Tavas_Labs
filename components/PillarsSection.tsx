"use client";

import { motion } from "framer-motion";
import NeuralSpace from "./NeuralSpace";

const GOLD = "#C9A84C";
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const PILLARS = [
  {
    number: "01", icon: <img src={`${BASE}/design.png`} alt="" style={{ width: 36, height: 36, objectFit: "contain" }} />, title: "Design",
    tagline: "Generative Design, Intelligent CAD workflows, and AI co-creation that compress design cycles",
    description: "Generative Design, Intelligent CAD workflows, and AI co-creation that compress design cycles",
    capabilities: ["GENERATIVE DESIGN", "CAD/CAM", "AI COCREATION", "DESIGN AUTOMATION"],
    accentColor: "#F26522", bgAccent: "rgba(242,101,34,0.12)", borderColor: "rgba(242,101,34,0.35)",
  },
  {
    number: "02", icon: <img src={`${BASE}/simulation.png`} alt="" style={{ width: 36, height: 36, objectFit: "contain" }} />, title: "Simulate",
    tagline: "Virtual Replicas enabling risk-free experimentation, predictive maintenance, and confident decision-making at scale",
    description: "Virtual Replicas enabling risk-free experimentation, predictive maintenance, and confident decision-making at scale",
    capabilities: ["DIGITALTWIN", "CFD/FEA", "REAL TIME MONITORING", "SCENARIO PLANNING", "AI Powered Design", "Simulations & Digital Twins", "Intelligent Optimisation"],
    accentColor: "#60A5FA", bgAccent: "rgba(96,165,250,0.10)", borderColor: "rgba(96,165,250,0.30)",
  },
  {
    number: "03", icon: <img src={`${BASE}/optimisation.png`} alt="" style={{ width: 36, height: 36, objectFit: "contain" }} />, title: "Optimise",
    tagline: "AI algorithms continuously improve operations – from supply chains and energy usages to resource allocation",
    description: "AI algorithms continuously improve operations – from supply chains and energy usages to resource allocation",
    capabilities: ["OPERATION RESEARCH", "ML OPTIMISATION", "PROCESS AUTOMATION", "RESOURCE PLANNING", "Sustainability Intelligence"],
    accentColor: "#F26522", bgAccent: "rgba(242,101,34,0.12)", borderColor: "rgba(242,101,34,0.35)",
  },
  {
    number: "04", icon: <img src={`${BASE}/sustainability.png`} alt="" style={{ width: 36, height: 36, objectFit: "contain" }} />, title: "Sustain",
    tagline: "ESG measurement, carbon modellin, and lifecycle analysis turning gnet-zero from burdens to advantage",
    description: "ESG measurement, carbon modellin, and lifecycle analysis turning gnet-zero from burdens to advantage",
    capabilities: ["CARBON MODELLING", "ESG REPORTING", "LIFECYCLE ANALYSIS", "NETZERO ROADMAP"],
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
    <section id="pillars" className="relative py-24 sm:py-32 overflow-hidden" style={{ background: "#0E1A2E" }}>

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
        style={{ background: "linear-gradient(180deg, #263F5F 0%, transparent 100%)", zIndex: 2 }}
        aria-hidden="true"
      />
      {/* Bottom fade — blend into section below */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(0deg, #1F3452 0%, transparent 100%)", zIndex: 2 }}
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
