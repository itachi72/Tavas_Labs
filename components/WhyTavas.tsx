"use client";

import { motion } from "framer-motion";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const FEATURED = {
  label:   "Our Approach",
  title:   "DSOS: Design. Simulate. Optimise. Sustain.",
  body:    "We apply a structured DSOS framework to translate complex systems requirements into validated solutions. Every decision is grounded in engineering physics, tested with digital twins, optimised for performance, and designed to be sustained over the long term.",
  stat:    { value: "4", label: "pillars in a single resilient systems lifecycle" },
};

const DIFFERENTIATORS = [
  { icon: "⊛", title: "DSOS-first delivery",             desc: "Our work is shaped by the full DSOS lifecycle: design, simulation, optimisation and sustainment — not isolated pilots." },
  { icon: "⊕", title: "Physics-led intelligence",        desc: "We build models from first principles and validate them with digital twins before they influence mission-critical decisions." },
  { icon: "⊗", title: "Simulation-grade certainty",      desc: "Digital twin scenarios reveal risk early, so decisions are faster, safer and more predictable." },
  { icon: "⊘", title: "Purpose-built for India",         desc: "We blend global engineering standards with local sovereignty, policy, and infrastructure realities." },
  { icon: "⊙", title: "Operational continuity",         desc: "Sustainment is a core design goal: models, data, and governance are built to evolve alongside changing systems." },
  { icon: "⊚", title: "Research-backed delivery",       desc: "Partnerships with premier research institutions keep our techniques practical, frontier-class, and evidence-based." },
];

export default function WhyTavas() {
  return (
    <section
      id="why-us"
      className="relative py-24 sm:py-32 overflow-hidden"
      style={{ backgroundColor: "#E8EDF3" }}
    >
      {/* Circuit board overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url(${BASE}/video/overlay.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.22,
          mixBlendMode: "multiply",
        }}
        aria-hidden="true"
      />

      {/* Top gradient — navy → silver */}
      <div
        className="absolute top-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(180deg, #14243A 0%, #E8EDF3 100%)", zIndex: 1 }}
        aria-hidden="true"
      />
      {/* Bottom gradient — silver → navy */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: "linear-gradient(0deg, #1B2E48 0%, #E8EDF3 100%)", zIndex: 1 }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">

          {/* ── LEFT: FEATURED ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-28"
          >
            <p className="text-xs font-mono tracking-[0.25em] uppercase text-brand-orange mb-6">
              {FEATURED.label}
            </p>

            <h2
              className="font-display font-bold mb-6 leading-tight whitespace-pre-line"
              style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)", color: "#0B1F3A" }}
            >
              {FEATURED.title}
            </h2>

            <div className="w-10 h-0.5 bg-brand-orange mb-6" aria-hidden="true" />

            <p className="text-base leading-relaxed mb-10" style={{ color: "#374151" }}>
              {FEATURED.body}
            </p>

            {/* Stat callout */}
            <div
              className="inline-flex flex-col gap-1 px-6 py-5 rounded-xl"
              style={{
                background: "rgba(255,255,255,0.7)",
                border: "1px solid rgba(242,101,34,0.3)",
                boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
              }}
            >
              <span className="font-display font-bold text-gradient-orange" style={{ fontSize: "2.5rem", lineHeight: 1 }}>
                {FEATURED.stat.value}
              </span>
              <span className="text-xs max-w-[200px] leading-relaxed" style={{ color: "#4B5563" }}>
                {FEATURED.stat.label}
              </span>
            </div>
          </motion.div>

          {/* ── RIGHT: CARDS ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {DIFFERENTIATORS.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -3 }}
                className="group p-6 rounded-xl transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.82)",
                  border: "1px solid rgba(0,0,0,0.08)",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  backdropFilter: "blur(4px)",
                }}
              >
                <span className="text-xl text-brand-orange block mb-3" aria-hidden="true">{d.icon}</span>
                <h3 className="font-display font-semibold text-sm mb-2" style={{ color: "#0B1F3A" }}>{d.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "#4B5563" }}>{d.desc}</p>
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
