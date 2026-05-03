"use client";

import { motion } from "framer-motion";

const Cs = [
  {
    letter: "C",
    word: "Curiosity",
    color: "#F26522",
    points: [
      "Continuous inquiry into emerging regulations, technologies, market",
      "Data-driven AI Analytics to uncover hidden risks and opportunities",
    ],
  },
  {
    letter: "C",
    word: "Courage",
    color: "#60A5FA",
    points: [
      "Challenge legacy business models and intensive practices",
      "Decisive Insights aligned with value creation with AI & Digital Twin",
    ],
  },
  {
    letter: "C",
    word: "Creativity",
    color: "#F26522",
    points: [
      "Innovative sustainability solutions and circularity",
      "Co-creation of roadmaps tailored to client context – Modular & Scalable",
    ],
  },
  {
    letter: "C",
    word: "Communication",
    color: "#60A5FA",
    points: [
      "Clear translation of strategy into board-level, investor, and stakeholder language",
    ],
  },
  {
    letter: "C",
    word: "Compassion",
    color: "#F26522",
    points: [
      "Policy & Purpose: Human-centric approach balancing profit, planet, and people",
    ],
  },
];

export default function ContentPreviewSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-[#0E1B2F] overflow-hidden">
      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(242,101,34,0.06) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-xs font-mono tracking-[0.28em] uppercase text-brand-orange mb-4">
            Our Strategy
          </p>
          <h2 className="font-display font-bold text-white leading-tight" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
            Driving excellence,{" "}
            <span className="text-gradient-orange">Powering impact</span>
          </h2>
          <p className="mt-4 text-gray-400 text-base tracking-widest uppercase font-mono">
            Our 5C Strategy
          </p>
        </motion.div>

        {/* 5C Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {Cs.map((c, i) => (
            <motion.div
              key={c.word}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.09 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative rounded-2xl p-7 flex flex-col"
              style={{
                background: "rgba(8, 18, 38, 0.70)",
                border: `1px solid ${c.color === "#F26522" ? "rgba(242,101,34,0.28)" : "rgba(96,165,250,0.25)"}`,
                backdropFilter: "blur(10px)",
              }}
            >
              {/* Large letter watermark */}
              <span
                className="absolute top-3 right-5 font-display font-black select-none pointer-events-none"
                style={{ fontSize: "5rem", lineHeight: 1, color: c.color, opacity: 0.07 }}
                aria-hidden="true"
              >
                {c.letter}
              </span>

              {/* Accent dot + word */}
              <div className="flex items-center gap-3 mb-5">
                <span
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ background: c.color, boxShadow: `0 0 8px ${c.color}` }}
                  aria-hidden="true"
                />
                <h3
                  className="font-display font-bold text-white"
                  style={{ fontSize: "clamp(1.2rem, 2vw, 1.5rem)" }}
                >
                  {c.word}
                </h3>
              </div>

              {/* Bullet points */}
              <ul className="space-y-3 mt-auto">
                {c.points.map((pt) => (
                  <li key={pt} className="flex items-start gap-2.5">
                    <svg width="13" height="13" viewBox="0 0 14 14" fill="none" className="mt-0.5 flex-shrink-0" aria-hidden="true">
                      <path d="M4 3l4 4-4 4" stroke={c.color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-sm text-gray-300 leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>

              {/* Hover accent line */}
              <div
                className="absolute bottom-0 left-6 right-6 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ background: `linear-gradient(90deg, transparent, ${c.color}, transparent)` }}
                aria-hidden="true"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
