"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Cs = [
  {
    word: "Curiosity",
    color: "#F26522",
    points: [
      "Continuous inquiry into emerging regulations, technologies, market",
      "Data-driven AI Analytics to uncover hidden risks and opportunities",
    ],
  },
  {
    word: "Courage",
    color: "#60A5FA",
    points: [
      "Challenge legacy business models and intensive practices",
      "Decisive Insights aligned with value creation with AI & Digital Twin",
    ],
  },
  {
    word: "Creativity",
    color: "#F26522",
    points: [
      "Innovative sustainability solutions and circularity",
      "Co-creation of roadmaps tailored to client context – Modular & Scalable",
    ],
  },
  {
    word: "Communication",
    color: "#60A5FA",
    points: [
      "Clear translation of strategy into board-level, investor, and stakeholder language",
    ],
  },
  {
    word: "Compassion",
    color: "#F26522",
    points: [
      "Policy & Purpose: Human-centric approach balancing profit, planet, and people",
    ],
  },
];

const W = 480;
const CX = W / 2;
const INNER_R = 72;
const OUTER_R = 190;
const GAP = 2.5;
const TEXT_R = (INNER_R + OUTER_R) / 2;

function donutArc(r1: number, r2: number, a1Deg: number, a2Deg: number): string {
  const toR = (d: number) => (d * Math.PI) / 180;
  const a1 = toR(a1Deg), a2 = toR(a2Deg);
  const large = a2Deg - a1Deg > 180 ? 1 : 0;
  const ox1 = CX + r2 * Math.cos(a1), oy1 = CX + r2 * Math.sin(a1);
  const ox2 = CX + r2 * Math.cos(a2), oy2 = CX + r2 * Math.sin(a2);
  const ix1 = CX + r1 * Math.cos(a2), iy1 = CX + r1 * Math.sin(a2);
  const ix2 = CX + r1 * Math.cos(a1), iy2 = CX + r1 * Math.sin(a1);
  return `M${ox1} ${oy1} A${r2} ${r2} 0 ${large} 1 ${ox2} ${oy2} L${ix1} ${iy1} A${r1} ${r1} 0 ${large} 0 ${ix2} ${iy2}Z`;
}

export default function ContentPreviewSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative py-24 sm:py-32 bg-[#0E1B2F] overflow-hidden">
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
          className="text-center mb-14"
        >
          <p className="text-2xl font-mono tracking-[0.28em] uppercase text-brand-orange mb-4">
            Our 5C Strategy
          </p>
          <h2 className="font-display font-bold text-white leading-tight" style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}>
            Driving excellence,{" "}
            <span className="text-gradient-orange">Powering impact</span>
          </h2>
        </motion.div>

        {/* Wheel + Detail panel */}
        <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-10 lg:gap-14">

          {/* ── WHEEL ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, rotate: -12 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex-shrink-0 mx-auto"
            style={{ width: W, maxWidth: "min(85vw, 480px)" }}
          >
            <svg
              viewBox={`0 0 ${W} ${W}`}
              style={{ width: "100%", height: "auto", overflow: "visible" }}
              role="img"
              aria-label="5C Strategy wheel"
            >
              <defs>
                <filter id="seg-glow" x="-40%" y="-40%" width="180%" height="180%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Decorative rings */}
              <circle cx={CX} cy={CX} r={OUTER_R + 14} fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
              <circle cx={CX} cy={CX} r={INNER_R + 4} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

              {/* Segments */}
              {Cs.map((c, i) => {
                const startDeg = -90 + i * 72 + GAP;
                const endDeg   = -90 + (i + 1) * 72 - GAP;
                const midDeg   = (startDeg + endDeg) / 2;
                const midRad   = (midDeg * Math.PI) / 180;
                const isActive = active === i;
                const pushX    = isActive ? 11 * Math.cos(midRad) : 0;
                const pushY    = isActive ? 11 * Math.sin(midRad) : 0;
                const tx = CX + TEXT_R * Math.cos(midRad);
                const ty = CX + TEXT_R * Math.sin(midRad);

                return (
                  <g
                    key={c.word}
                    onClick={() => setActive(i)}
                    style={{
                      cursor: "pointer",
                      transform: `translate(${pushX}px, ${pushY}px)`,
                      transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1)",
                    }}
                  >
                    {/* Segment fill */}
                    <path
                      d={donutArc(INNER_R, OUTER_R, startDeg, endDeg)}
                      fill={isActive ? c.color : "rgba(255,255,255,0.04)"}
                      stroke={c.color}
                      strokeWidth={isActive ? 0 : 0.6}
                      strokeOpacity={0.3}
                      filter={isActive ? "url(#seg-glow)" : undefined}
                      style={{ transition: "fill 0.3s" }}
                    />

                    {/* "C" letter */}
                    <text
                      x={tx} y={ty - 16}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill={isActive ? "#ffffff" : c.color}
                      fontSize="38"
                      fontWeight="900"
                      fontFamily="sans-serif"
                      style={{ transition: "fill 0.3s" }}
                    >
                      C
                    </text>

                    {/* Word label */}
                    <text
                      x={tx} y={ty + 18}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill={isActive ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.42)"}
                      fontSize="15"
                      fontFamily="monospace"
                      letterSpacing="1.3"
                      style={{ transition: "fill 0.3s" }}
                    >
                      {c.word.toUpperCase()}
                    </text>
                  </g>
                );
              })}

              {/* Centre hub */}
              <circle cx={CX} cy={CX} r={INNER_R - 3} fill="rgba(8,18,38,0.96)" />
              <circle cx={CX} cy={CX} r={INNER_R - 3} fill="none" stroke="rgba(242,101,34,0.35)" strokeWidth="1" />
              <text
                x={CX} y={CX - 18}
                textAnchor="middle" dominantBaseline="middle"
                fill="#F26522" fontSize="48" fontWeight="900" fontFamily="sans-serif"
              >
                5C
              </text>
              <text
                x={CX} y={CX + 22}
                textAnchor="middle" dominantBaseline="middle"
                fill="rgba(255,255,255,0.32)" fontSize="14" letterSpacing="2.5" fontFamily="monospace"
              >
                STRATEGY
              </text>
            </svg>
          </motion.div>

          {/* ── DETAIL PANEL ── */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.28 }}
                className="rounded-2xl p-7 sm:p-9"
                style={{
                  background: "rgba(8,18,38,0.72)",
                  border: `1px solid ${Cs[active].color}45`,
                  backdropFilter: "blur(12px)",
                  boxShadow: `0 0 40px ${Cs[active].color}14`,
                }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="w-3 h-3 rounded-full flex-shrink-0"
                    style={{ background: Cs[active].color, boxShadow: `0 0 10px ${Cs[active].color}` }}
                    aria-hidden="true"
                  />
                  <h3 className="font-display font-bold text-white" style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}>
                    {Cs[active].word}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {Cs[active].points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-0.5 flex-shrink-0" aria-hidden="true">
                        <path d="M4 3l4 4-4 4" stroke={Cs[active].color} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="text-base text-gray-300 leading-relaxed">{pt}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>

            {/* Segment selector dots for mobile */}
            <div className="flex items-center justify-center gap-3 mt-6 lg:hidden">
              {Cs.map((c, i) => (
                <button
                  key={c.word}
                  onClick={() => setActive(i)}
                  className="w-2.5 h-2.5 rounded-full transition-all duration-200"
                  style={{
                    background: active === i ? c.color : "rgba(255,255,255,0.2)",
                    boxShadow: active === i ? `0 0 8px ${c.color}` : "none",
                    transform: active === i ? "scale(1.3)" : "scale(1)",
                  }}
                  aria-label={c.word}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
