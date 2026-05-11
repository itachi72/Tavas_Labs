"use client";

import { motion } from "framer-motion";

const INDUSTRIES = [
  {
    icon: "⬡",
    title: "Semiconductor",
    descriptor: "Process simulation & yield optimisation",
  },
  {
    icon: "◈",
    title: "Electronics",
    descriptor: "PCB design, signal integrity & thermal management",
  },
  {
    icon: "◉",
    title: "Telecom",
    descriptor: "Network planning, 5G/6G rollout & infrastructure optimisation",
  },
  {
    icon: "◻",
    title: "Government & Public Sector",
    descriptor: "Digital transformation & sovereign AI",
  },
  {
    icon: "△",
    title: "Aerospace & Defence",
    descriptor: "Mission planning & lifecycle digital twins",
  },
  {
    icon: "◎",
    title: "Transportation & Mobility",
    descriptor: "EV modelling, traffic simulation & smart infrastructure",
  },
  {
    icon: "⊞",
    title: "HiTech",
    descriptor: "R&D acceleration, IP commercialisation & product intelligence",
  },
  {
    icon: "⊕",
    title: "Research Institutions",
    descriptor: "Applied research translation, lab-to-market pathways & academic AI integration",
  },
];

export default function IndustriesSection() {
  return (
    <section
      id="industries"
      className="relative py-14 sm:py-24 lg:py-32 overflow-hidden"
      style={{ background: "#090F1E" }}
    >
      {/* Fade from section above */}
      <div
        className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, #0B1628 0%, transparent 100%)",
          zIndex: 1,
        }}
        aria-hidden="true"
      />

      {/* Fade to section below */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{
          background: "linear-gradient(0deg, #0E1A2E 0%, transparent 100%)",
          zIndex: 1,
        }}
        aria-hidden="true"
      />

      {/* Subtle orange bloom — centre */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 40% at 50% 50%, rgba(242,101,34,0.07) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8" style={{ zIndex: 2 }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-16"
        >
          <p className="text-xs font-mono tracking-[0.3em] uppercase mb-3 text-brand-orange">
            Industries We Transform
          </p>
          <h2
            className="font-display font-bold text-white leading-tight"
            style={{ fontSize: "clamp(1.9rem, 4vw, 3.2rem)" }}
          >
            8 Industries.
            <span className="text-gradient-orange"> Deep Expertise.</span>
          </h2>
        </motion.div>

        {/* Tiles grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
          {INDUSTRIES.map((industry, i) => (
            <motion.div
              key={industry.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group rounded-xl p-5 sm:p-6 flex flex-col cursor-default"
              style={{
                background: "rgba(8,18,38,0.80)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 2px 16px rgba(0,0,0,0.30)",
              }}
            >
              <span
                className="text-4xl sm:text-5xl text-brand-orange mb-3 leading-none"
                aria-hidden="true"
              >
                {industry.icon}
              </span>
              <h3 className="font-semibold text-base sm:text-xl text-white mb-1 leading-snug">
                {industry.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-500 leading-relaxed">{industry.descriptor}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
