"use client";

import { motion } from "framer-motion";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const FEATURED = {
  label:   "The TAVAS Difference",
  title:   "Built at the intersection\nof engineering depth and AI breadth.",
  body:    "Most AI firms start from software. We start from physics. Our models are grounded in first-principles engineering, validated through simulation before deployment — giving our clients confidence that the AI does what the equations say it should.",
  stat:    { value: "10×", label: "faster design iteration vs. traditional simulation" },
};

const DIFFERENTIATORS = [
  { icon: "⊛", title: "Domain-first AI",          desc: "Our AI is trained on engineering physics, not just generic text data — making it actually useful for technical problems." },
  { icon: "⊕", title: "Full-lifecycle coverage",  desc: "We don't parachute in for a pilot and leave. We stay through Design, Simulate, Optimise, and Sustain." },
  { icon: "⊗", title: "Government-grade rigour",  desc: "Methodologies built to satisfy regulatory scrutiny — DRDO, ISRO, and national lab standards." },
  { icon: "⊘", title: "India-first perspective",  desc: "Understanding of the unique constraints, talent pool, and policy landscape that global firms miss." },
  { icon: "⊙", title: "Sovereign data",           desc: "On-premise deployment options ensure your sensitive data never leaves your infrastructure." },
  { icon: "⊚", title: "Academic bridge",          desc: "Active research partnerships with leading IITs and international universities, keeping our models at the frontier." },
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
          backgroundImage: `url(${BASE}/navbar-bg.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.22,
          mixBlendMode: "multiply",
        }}
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
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", color: "#0B1F3A" }}
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
