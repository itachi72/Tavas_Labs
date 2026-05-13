"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Cs = [
  {
    word: "Curiosity",
    lines: ["CURIO", "SITY"],
    color: "#F26522",
    side: "right" as const,
    points: [
      "Continuous inquiry into emerging regulations, technologies, market",
      "Data-driven AI Analytics to uncover hidden risks and opportunities",
    ],
  },
  {
    word: "Courage",
    lines: ["COURAGE"],
    color: "#60A5FA",
    side: "right" as const,
    points: [
      "Challenge legacy business models and intensive practices",
      "Decisive Insights aligned with value creation with AI & Digital Twin",
    ],
  },
  {
    word: "Creativity",
    lines: ["CREATI", "VITY"],
    color: "#F26522",
    side: "right" as const,
    points: [
      "Innovative sustainability solutions and circularity",
      "Co-creation of roadmaps tailored to client context – Modular & Scalable",
    ],
  },
  {
    word: "Communication",
    lines: ["COMMUNI", "CATION"],
    color: "#60A5FA",
    side: "left" as const,
    points: [
      "Clear translation of strategy into board-level, investor, and stakeholder language",
    ],
  },
  {
    word: "Compassion",
    lines: ["COMPAS", "SION"],
    color: "#F26522",
    side: "left" as const,
    points: [
      "Policy & Purpose: Human-centric approach balancing profit, planet, and people",
    ],
  },
];

const W       = 960;
const CX      = W / 2;
const INNER_R = 144;
const OUTER_R = 381;
const GAP     = 4;
const TEXT_R  = (INNER_R + OUTER_R) / 2;   // 262.5
const NODE_R  = 77;

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

/**
 * Arc path for SVG textPath.
 * Upper-half segments (sin(midDeg) ≤ 0): clockwise — text reads left→right on the outside.
 * Lower-half segments (sin(midDeg) > 0): counter-clockwise from endDeg→startDeg — text
 * reads left→right on the outside of the lower arc.
 */
function arcPathD(
  r: number,
  startDeg: number,
  endDeg: number,
  reversed: boolean,
): string {
  const rad = (d: number) => (d * Math.PI) / 180;
  if (reversed) {
    const x1 = CX + r * Math.cos(rad(endDeg));
    const y1 = CX + r * Math.sin(rad(endDeg));
    const x2 = CX + r * Math.cos(rad(startDeg));
    const y2 = CX + r * Math.sin(rad(startDeg));
    return `M ${x1} ${y1} A ${r} ${r} 0 0 0 ${x2} ${y2}`;
  }
  const x1 = CX + r * Math.cos(rad(startDeg));
  const y1 = CX + r * Math.sin(rad(startDeg));
  const x2 = CX + r * Math.cos(rad(endDeg));
  const y2 = CX + r * Math.sin(rad(endDeg));
  return `M ${x1} ${y1} A ${r} ${r} 0 0 1 ${x2} ${y2}`;
}

function WheelSVG({
  active,
  setActive,
  filterId,
}: {
  active: number;
  setActive: (i: number) => void;
  filterId: string;
}) {
  return (
    <svg
      viewBox={`0 0 ${W} ${W}`}
      style={{ width: "100%", height: "auto", overflow: "visible" }}
      role="img"
      aria-label="5C Strategy wheel"
    >
      <defs>
        <filter id={filterId} x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="11" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Decorative rings */}
      <circle cx={CX} cy={CX} r={OUTER_R + 27} fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
      <circle cx={CX} cy={CX} r={INNER_R + 8}  fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />

      {/* Segments */}
      {Cs.map((c, i) => {
        const startDeg  = -90 + i * 72 + GAP;
        const endDeg    = -90 + (i + 1) * 72 - GAP;
        const midDeg    = (startDeg + endDeg) / 2;
        const midRad    = (midDeg * Math.PI) / 180;
        const isActive  = active === i;
        const pushX     = isActive ? 22 * Math.cos(midRad) : 0;
        const pushY     = isActive ? 22 * Math.sin(midRad) : 0;
        // Lower half of circle → reverse arc so text reads left-to-right from outside
        const reversed  = Math.sin(midRad) > 0;
        const textFill  = isActive ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.45)";
        const pmid = `${filterId}-${i}-m`;
        const pout = `${filterId}-${i}-o`;
        const pin  = `${filterId}-${i}-i`;

        return (
          <g key={c.word} onClick={() => setActive(i)} style={{ cursor: "pointer" }}>

            {/* Hidden arc paths used by textPath — NOT translated, stay on true arc */}
            <path id={pmid} d={arcPathD(TEXT_R,      startDeg, endDeg, reversed)} fill="none" stroke="none" />
            {c.lines.length > 1 && (
              <>
                <path id={pout} d={arcPathD(TEXT_R + 24, startDeg, endDeg, reversed)} fill="none" stroke="none" />
                <path id={pin}  d={arcPathD(TEXT_R - 24, startDeg, endDeg, reversed)} fill="none" stroke="none" />
              </>
            )}

            {/* Segment fill — pushes outward when active */}
            <path
              d={donutArc(INNER_R, OUTER_R, startDeg, endDeg)}
              fill={isActive ? c.color : "rgba(255,255,255,0.04)"}
              stroke={c.color}
              strokeWidth={isActive ? 0 : 0.6}
              strokeOpacity={0.3}
              filter={isActive ? `url(#${filterId})` : undefined}
              style={{
                transform: `translate(${pushX}px, ${pushY}px)`,
                transition: "fill 0.3s, transform 0.35s cubic-bezier(0.16,1,0.3,1)",
              }}
            />

            {/* Curved word labels */}
            {c.lines.length === 1 ? (
              <text
                fill={textFill}
                fontSize="39"
                fontFamily="monospace"
                style={{ transition: "fill 0.3s", userSelect: "none" } as React.CSSProperties}
              >
                <textPath href={`#${pmid}`} startOffset="50%" textAnchor="middle">
                  {c.lines[0]}
                </textPath>
              </text>
            ) : (
              <>
                {/* lines[0] on outer arc — seen first from outside */}
                <text
                  fill={textFill}
                  fontSize="36"
                  fontFamily="monospace"
                  style={{ transition: "fill 0.3s", userSelect: "none" } as React.CSSProperties}
                >
                  <textPath href={`#${pout}`} startOffset="50%" textAnchor="middle">
                    {c.lines[0]}
                  </textPath>
                </text>
                {/* lines[1] on inner arc */}
                <text
                  fill={textFill}
                  fontSize="36"
                  fontFamily="monospace"
                  style={{ transition: "fill 0.3s", userSelect: "none" } as React.CSSProperties}
                >
                  <textPath href={`#${pin}`} startOffset="50%" textAnchor="middle">
                    {c.lines[1]}
                  </textPath>
                </text>
              </>
            )}
          </g>
        );
      })}

      {/* Centre hub */}
      <circle cx={CX} cy={CX} r={INNER_R - 3} fill="rgba(8,18,38,0.96)" />
      <circle cx={CX} cy={CX} r={INNER_R - 3} fill="none" stroke="rgba(242,101,34,0.35)" strokeWidth="1" />

      {/* Neural-network icon: 5 spokes + peripheral nodes + centre dot */}
      {[0, 1, 2, 3, 4].map((i) => {
        const a  = (i * 72 - 90) * (Math.PI / 180);
        const nx = CX + NODE_R * Math.cos(a);
        const ny = CX + NODE_R * Math.sin(a);
        const lit = active === i;
        return (
          <g key={`node-${i}`}>
            <line
              x1={CX} y1={CX} x2={nx} y2={ny}
              stroke={lit ? "rgba(242,101,34,0.82)" : "rgba(242,101,34,0.22)"}
              strokeWidth={lit ? 2.4 : 1.5}
              style={{ transition: "stroke 0.3s, stroke-width 0.3s" }}
            />
            <circle
              cx={nx} cy={ny} r={7}
              fill={lit ? "#F26522" : "rgba(242,101,34,0.35)"}
              style={{ transition: "fill 0.3s" }}
            />
          </g>
        );
      })}
      <circle cx={CX} cy={CX} r={19}  fill="#F26522" opacity="0.85" />
      <circle cx={CX} cy={CX} r={10}  fill="rgba(8,18,38,0.95)" />
    </svg>
  );
}

function DescPanel({
  c,
  side,
}: {
  c: (typeof Cs)[0];
  side?: "left" | "right";
}) {
  const xOff = side === "left" ? -22 : side === "right" ? 22 : 0;
  return (
    <motion.div
      initial={{ opacity: 0, x: xOff, y: side ? 0 : 10 }}
      animate={{ opacity: 1, x: 0,    y: 0 }}
      exit={{    opacity: 0, x: xOff, y: side ? 0 : -10 }}
      transition={{ duration: 0.28 }}
      className="rounded-2xl p-6 sm:p-7 w-full"
      style={{
        background:    "rgba(8,18,38,0.72)",
        border:        `1px solid ${c.color}45`,
        backdropFilter: "blur(12px)",
        boxShadow:     `0 0 40px ${c.color}14`,
      }}
    >
      <div className="flex items-center gap-3 mb-5">
        <span
          className="w-3 h-3 rounded-full flex-shrink-0"
          style={{ background: c.color, boxShadow: `0 0 10px ${c.color}` }}
          aria-hidden="true"
        />
        <h3
          className="font-display font-bold text-white"
          style={{ fontSize: "clamp(1.2rem, 2vw, 1.6rem)" }}
        >
          {c.word}
        </h3>
      </div>
      <ul className="space-y-3">
        {c.points.map((pt) => (
          <li key={pt} className="flex items-start gap-3">
            <svg
              width="14" height="14" viewBox="0 0 14 14" fill="none"
              className="mt-0.5 flex-shrink-0"
              aria-hidden="true"
            >
              <path
                d="M4 3l4 4-4 4"
                stroke={c.color}
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-sm text-gray-300 leading-relaxed">{pt}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export default function ContentPreviewSection() {
  const [active, setActive] = useState(0);
  const activeC = Cs[active];

  return (
    <section className="relative py-14 sm:py-24 lg:py-32 bg-[#0E1B2F] overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(242,101,34,0.06) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-14"
        >
          <p className="text-4xl sm:text-5xl font-mono tracking-[0.28em] uppercase text-brand-orange mb-4">
            Our 5C Strategy
          </p>
          <h2
            className="font-display font-bold text-white leading-tight"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
          >
            Driving excellence,{" "}
            <span className="text-gradient-orange">Powering impact</span>
          </h2>
        </motion.div>

        {/* ── DESKTOP: left panel | wheel | right panel ── */}
        <div className="hidden xl:grid xl:grid-cols-[1fr_auto_1fr] items-center gap-4 2xl:gap-10">

          {/* Left panel — Communication & Compassion */}
          <div className="min-h-[260px] flex items-center justify-end">
            <AnimatePresence mode="wait">
              {activeC.side === "left" && (
                <DescPanel key={active} c={activeC} side="left" />
              )}
            </AnimatePresence>
          </div>

          {/* Wheel — always centred */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, rotate: -12 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="flex-shrink-0"
            style={{ width: "840px" }}
          >
            <WheelSVG active={active} setActive={setActive} filterId="sg-dt" />
          </motion.div>

          {/* Right panel — Curiosity, Courage & Creativity */}
          <div className="min-h-[260px] flex items-center justify-start">
            <AnimatePresence mode="wait">
              {activeC.side === "right" && (
                <DescPanel key={active} c={activeC} side="right" />
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ── MOBILE: wheel then description ── */}
        <div className="xl:hidden flex flex-col items-center gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.88, rotate: -12 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="w-full mx-auto"
            style={{ maxWidth: "min(95vw, 780px)" }}
          >
            <WheelSVG active={active} setActive={setActive} filterId="sg-mb" />
          </motion.div>

          <div className="w-full max-w-lg mx-auto">
            <AnimatePresence mode="wait">
              <DescPanel key={active} c={activeC} />
            </AnimatePresence>
          </div>

          {/* Dot selector */}
          <div className="flex items-center justify-center gap-3">
            {Cs.map((c, i) => (
              <button
                key={c.word}
                onClick={() => setActive(i)}
                className="w-2.5 h-2.5 rounded-full transition-all duration-200"
                style={{
                  background:  active === i ? c.color : "rgba(255,255,255,0.2)",
                  boxShadow:   active === i ? `0 0 8px ${c.color}` : "none",
                  transform:   active === i ? "scale(1.3)" : "scale(1)",
                }}
                aria-label={c.word}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
