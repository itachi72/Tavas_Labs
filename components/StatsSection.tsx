"use client";

import { motion } from "framer-motion";

const STATS = [
  { value: "4", label: "Core Pillars" },
  { value: "3", label: "Sectors Served" },
  { value: "∞", label: "Possibilities" },
];

export default function StatsSection() {
  return (
    <section
      className="relative py-10 sm:py-14 overflow-hidden"
      style={{ background: "#090F1E" }}
    >
      {/* Top orange gradient line */}
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #F26522 30%, #F26522 70%, transparent 100%)",
          opacity: 0.55,
        }}
        aria-hidden="true"
      />

      {/* Bottom orange gradient line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, #F26522 30%, #F26522 70%, transparent 100%)",
          opacity: 0.55,
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-3">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative flex flex-col items-center justify-center text-center px-4 py-2"
            >
              {/* Vertical divider — skip first */}
              {i !== 0 && (
                <div
                  className="absolute left-0 top-1/2 -translate-y-1/2 h-10 w-px"
                  style={{
                    background:
                      "linear-gradient(180deg, transparent, rgba(242,101,34,0.45), transparent)",
                  }}
                  aria-hidden="true"
                />
              )}

              <span
                className="font-display font-black text-gradient-orange leading-none"
                style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
              >
                {stat.value}
              </span>

              <span className="text-xs sm:text-sm font-mono tracking-[0.22em] uppercase text-gray-400 mt-2">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
