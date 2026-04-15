"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

/* ============================================================================
 * DESIGN TOKENS — Sanskrit + Roman pillar aesthetic
 * ============================================================================ */
const GOLD       = "#C9A84C";
const STONE_DEEP = "#100D06";
const STONE_MID  = "#1C1710";
const STONE_WARM = "#28200E";

/* ============================================================================
 * MONOLITH COLUMN DATA  (visual pillars)
 * ============================================================================ */
const PILLARS_DATA = [
  { initial: "D", label: "Design",   title: "Design",   desc: "AI-driven conceptual design and system architecture for complex engineering challenges.", delay: 0.0,  accentClass: "orange" },
  { initial: "S", label: "Simulate", title: "Simulate", desc: "High-fidelity digital twins that mirror real-world behaviour with precision and speed.",  delay: 0.15, accentClass: "blue"   },
  { initial: "O", label: "Optimise", title: "Optimise", desc: "Continuous ML-powered optimisation loops that drive efficiency and reduce waste.",         delay: 0.30, accentClass: "orange" },
  { initial: "S", label: "Sustain",  title: "Sustain",  desc: "Long-term operational intelligence ensuring systems evolve with changing demands.",         delay: 0.45, accentClass: "blue"   },
];

/* ============================================================================
 * CAPITAL SVG — Corinthian-meets-lotus column capital
 * ============================================================================ */
function CapitalSVG({ accent, hovered }: { accent: string; hovered: boolean }) {
  const op = (b: number) => (hovered ? Math.min(b * 1.6, 1) : b);
  return (
    <svg width="100%" height="54" viewBox="0 0 138 54" fill="none" style={{ display: "block" }} aria-hidden="true">
      <rect x="0" y="0" width="138" height="8" rx="1" fill={STONE_WARM} stroke={GOLD} strokeWidth="0.6" strokeOpacity={op(0.7)} />
      <line x1="4" y1="4" x2="134" y2="4" stroke={GOLD} strokeWidth="0.35" strokeOpacity={op(0.35)} />
      <path d="M 0 8 L 19 46 L 119 46 L 138 8 Z" fill={STONE_MID} stroke={GOLD} strokeWidth="0.5" strokeOpacity={op(0.45)} />
      {([16, 37, 69, 101, 122] as number[]).map((px, i) => (
        <path key={i} d={`M ${px-9} 46 Q ${px-5} 28 ${px} 12 Q ${px+5} 28 ${px+9} 46`}
          stroke={GOLD} strokeWidth="0.9" strokeOpacity={op(0.45)} fill={GOLD} fillOpacity={op(0.06)} />
      ))}
      <circle cx="69" cy="26" r="10" stroke={accent} strokeWidth="0.9" strokeOpacity={op(0.5)} />
      {[0,45,90,135,180,225,270,315].map((deg, i) => {
        const r = (deg * Math.PI) / 180;
        return <line key={i} x1={69} y1={26} x2={69+10*Math.cos(r)} y2={26+10*Math.sin(r)} stroke={GOLD} strokeWidth="0.4" strokeOpacity={op(0.4)} />;
      })}
      <circle cx="69" cy="26" r="4" fill={GOLD} fillOpacity={op(0.2)} stroke={GOLD} strokeWidth="0.5" strokeOpacity={op(0.6)} />
      <circle cx="69" cy="26" r="1.5" fill={GOLD} fillOpacity={op(0.6)} />
      {Array.from({ length: 9 }).map((_, i) => (
        <circle key={i} cx={26 + i * 11} cy={43} r="1.4" fill={GOLD} fillOpacity={op(0.4)} />
      ))}
      <rect x="19" y="47" width="100" height="3" rx="0.5" fill={STONE_WARM} stroke={GOLD} strokeWidth="0.4" strokeOpacity={op(0.45)} />
      <rect x="19" y="51" width="100" height="2" rx="0.5" fill={STONE_MID} />
    </svg>
  );
}

/* ============================================================================
 * DECORATIVE BAND — Sanskrit yantra diamond motif
 * ============================================================================ */
function DecorativeBand({ color, hovered }: { color: string; hovered: boolean }) {
  const op = hovered ? 0.55 : 0.28;
  return (
    <svg width="100%" height="13" viewBox="0 0 100 13" preserveAspectRatio="none" fill="none" aria-hidden="true">
      <line x1="0" y1="1"  x2="100" y2="1"  stroke={color} strokeWidth="0.5" strokeOpacity={op} />
      <line x1="0" y1="12" x2="100" y2="12" stroke={color} strokeWidth="0.5" strokeOpacity={op} />
      {Array.from({ length: 10 }).map((_, i) => (
        <polygon key={i} points={`${i*10+2},6.5 ${i*10+5},2 ${i*10+8},6.5 ${i*10+5},11`}
          stroke={color} strokeWidth="0.5" strokeOpacity={op} fill={color} fillOpacity={op * 0.15} />
      ))}
    </svg>
  );
}

/* ============================================================================
 * LOTUS ROSETTE — central mandala on shaft
 * ============================================================================ */
function LotusRosette({ color, hovered }: { color: string; hovered: boolean }) {
  const s = 38, cx = 19, cy = 19, r = 14.4;
  const op = hovered ? 0.7 : 0.35;
  return (
    <svg width={s} height={s} viewBox={`0 0 ${s} ${s}`} fill="none" aria-hidden="true">
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * Math.PI * 2) / 8;
        const tx = cx + r * Math.cos(a), ty = cy + r * Math.sin(a);
        const c1x = cx + r*.65*Math.cos(a-.42), c1y = cy + r*.65*Math.sin(a-.42);
        const c2x = cx + r*.65*Math.cos(a+.42), c2y = cy + r*.65*Math.sin(a+.42);
        return <path key={i} d={`M ${cx} ${cy} Q ${c1x} ${c1y} ${tx} ${ty} Q ${c2x} ${c2y} ${cx} ${cy} Z`}
          stroke={color} strokeWidth="0.7" strokeOpacity={op} fill={color} fillOpacity={op*.12} />;
      })}
      <circle cx={cx} cy={cy} r={r+2} stroke={color} strokeWidth="0.4" strokeOpacity={op*.6} />
      <circle cx={cx} cy={cy} r={5.3} stroke={color} strokeWidth="0.6" strokeOpacity={op} fill={color} fillOpacity={op*.18} />
      <circle cx={cx} cy={cy} r={2.3} fill={color} fillOpacity={op*.8} />
    </svg>
  );
}

/* ============================================================================
 * MONOLITH PILLAR
 * ============================================================================ */
function MonolithPillar({ pillar, inView }: { pillar: typeof PILLARS_DATA[number]; inView: boolean }) {
  const [hovered, setHovered] = useState(false);
  const isOrange = pillar.accentClass === "orange";
  const accent   = isOrange ? "#F26522" : "#3B82F6";
  const glowClr  = isOrange ? "rgba(201,168,76,0.35)" : "rgba(59,130,246,0.3)";

  return (
    <motion.div
      initial={{ opacity: 0, y: 100, scaleY: 0.6 }}
      animate={inView ? { opacity: 1, y: 0, scaleY: 1 } : {}}
      transition={{ duration: 1.2, delay: pillar.delay, ease: [0.16, 1, 0.3, 1] }}
      style={{ transformOrigin: "bottom center" }}
      className="relative flex flex-col items-center gap-0 group w-[104px] sm:w-[122px] md:w-[138px]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Capital */}
      <div className="w-full h-[54px]">
        <CapitalSVG accent={accent} hovered={hovered} />
      </div>

      {/* Shaft */}
      <div
        className="relative w-[72px] sm:w-[88px] md:w-[100px] h-[220px] sm:h-[265px] md:h-[310px] transition-all duration-700"
        style={{
          background: `
            repeating-linear-gradient(90deg,
              rgba(0,0,0,0.45) 0%, rgba(201,168,76,0.05) 14%,
              rgba(0,0,0,0.25) 28%, rgba(201,168,76,0.04) 42%,
              rgba(0,0,0,0.45) 56%
            ),
            linear-gradient(180deg, ${STONE_WARM} 0%, ${STONE_MID} 20%, ${STONE_DEEP} 65%, #080604 100%)
          `,
          border: `1px solid ${GOLD}${hovered ? "99" : "44"}`,
          boxShadow: hovered
            ? `0 0 32px 8px ${glowClr}, inset 0 0 20px rgba(201,168,76,0.06)`
            : `0 0 14px 3px ${glowClr.replace("0.35","0.12")}`,
          transition: "box-shadow 0.6s ease, border-color 0.5s ease",
        }}
      >
        {/* Scan line */}
        {hovered && (
          <motion.div className="absolute left-0 w-full h-[2px] z-10"
            style={{ background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }}
            initial={{ top: "0%", opacity: 0.85 }}
            animate={{ top: "105%", opacity: 0 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            aria-hidden="true"
          />
        )}
        {/* Top band */}
        <div className="absolute left-0 right-0" style={{ top: "14%" }} aria-hidden="true">
          <DecorativeBand color={isOrange ? GOLD : "#3B82F6"} hovered={hovered} />
        </div>
        {/* Lotus rosette */}
        <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-500"
          style={{ top: "50%", opacity: hovered ? 0.12 : 0.9 }} aria-hidden="true">
          <LotusRosette color={isOrange ? GOLD : "#3B82F6"} hovered={hovered} />
        </div>
        {/* Bottom band */}
        <div className="absolute left-0 right-0" style={{ top: "82%" }} aria-hidden="true">
          <DecorativeBand color={isOrange ? GOLD : "#3B82F6"} hovered={hovered} />
        </div>
        {/* Letter */}
        <div className="absolute inset-0 flex items-center justify-center transition-all duration-500"
          style={{ opacity: hovered ? 0.08 : 1 }}>
          <span className="select-none" style={{
            fontFamily: "'Cinzel', Georgia, serif", fontWeight: 700,
            fontSize: "clamp(2.8rem, 6vw, 4rem)", lineHeight: 1,
            background: isOrange
              ? `linear-gradient(160deg, ${GOLD} 0%, #F26522 60%, #E8A030 100%)`
              : `linear-gradient(160deg, #93C5FD 0%, #3B82F6 60%, #60A5FA 100%)`,
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
            filter: "drop-shadow(1px 2px 3px rgba(0,0,0,0.85)) drop-shadow(-1px -1px 1px rgba(255,220,120,0.12))",
          }} aria-hidden="true">{pillar.initial}</span>
        </div>
        {/* Hover reveal */}
        <motion.div className="absolute inset-0 flex flex-col items-center justify-center px-3 text-center z-20"
          initial={{ opacity: 0 }} animate={{ opacity: hovered ? 1 : 0 }} transition={{ duration: 0.35 }}>
          <span className="text-sm font-semibold text-white mb-2 leading-tight"
            style={{ fontFamily: "'Cinzel', Georgia, serif", letterSpacing: "0.05em" }}>
            {pillar.title}
          </span>
          <p className="text-[10px] sm:text-[11px] text-gray-300 leading-relaxed">{pillar.desc}</p>
        </motion.div>
      </div>

      {/* Base steps */}
      {[
        { w: "w-[72px] sm:w-[88px] md:w-[100px]", h: "h-[8px]"  },
        { w: "w-[84px] sm:w-[100px] md:w-[114px]", h: "h-[7px]" },
        { w: "w-[96px] sm:w-[114px] md:w-[130px]", h: "h-[7px]" },
      ].map((step, i) => (
        <div key={i} className={`${step.w} ${step.h}`} aria-hidden="true"
          style={{
            background: `linear-gradient(180deg, ${i===0?STONE_MID:STONE_DEEP} 0%, ${STONE_DEEP} 100%)`,
            borderBottom: `1px solid ${GOLD}${hovered ? (i===1?"66":"77") : (i===1?"33":"44")}`,
            ...(i!==1 ? { borderLeft: `1px solid ${GOLD}${hovered?"44":"22"}`, borderRight: `1px solid ${GOLD}${hovered?"44":"22"}` } : {}),
            transition: "border-color 0.5s ease",
          }}
        />
      ))}

      {/* Label */}
      <motion.div initial={{ opacity: 0, y: 10 }} animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: pillar.delay + 0.9 }} className="mt-3 text-center">
        <span className="text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase select-none"
          style={{ fontFamily: "'Cinzel', Georgia, serif", color: hovered ? GOLD : "#9CA3AF", transition: "color 0.4s ease" }}>
          {pillar.label}
        </span>
      </motion.div>

      {/* Ground glow */}
      <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-28 h-3 rounded-full pointer-events-none"
        style={{ background: `radial-gradient(ellipse, ${glowClr} 0%, transparent 70%)`,
          opacity: hovered ? 0.9 : 0.3, filter: "blur(5px)", transition: "opacity 0.5s ease" }}
        aria-hidden="true" />
    </motion.div>
  );
}

/* ============================================================================
 * STYLOBATE — classical connecting base between pillars
 * ============================================================================ */
function Stylobate({ inView }: { inView: boolean }) {
  const xs = [38, 162, 338, 462];
  return (
    <div className="absolute bottom-[54px] left-0 right-0 flex justify-center pointer-events-none" aria-hidden="true">
      <svg width="500" height="28" viewBox="0 0 500 28" fill="none" className="w-full max-w-md sm:max-w-lg">
        <motion.line x1="30" y1="8" x2="470" y2="8" stroke={GOLD} strokeWidth="0.7" strokeOpacity="0.5"
          strokeDasharray="500" initial={{ strokeDashoffset: 500 }}
          animate={inView ? { strokeDashoffset: 0 } : {}} transition={{ duration: 1.4, delay: 1.0, ease: "linear" }} />
        <motion.line x1="30" y1="20" x2="470" y2="20" stroke={GOLD} strokeWidth="0.7" strokeOpacity="0.35"
          strokeDasharray="500" initial={{ strokeDashoffset: 500 }}
          animate={inView ? { strokeDashoffset: 0 } : {}} transition={{ duration: 1.4, delay: 1.1, ease: "linear" }} />
        {xs.map((x, i) => (
          <motion.line key={i} x1={x} y1={6} x2={x} y2={22} stroke={GOLD} strokeWidth="1.2" strokeOpacity="0.65"
            initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.3, delay: 1.1 + i * 0.14 }} />
        ))}
        {xs.map((x, i) => (
          <motion.polygon key={i} points={`${x},4 ${x+5},14 ${x},24 ${x-5},14`}
            fill={GOLD} fillOpacity="0.18" stroke={GOLD} strokeWidth="0.6" strokeOpacity="0.65"
            initial={{ opacity: 0, scale: 0 }} animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 1.25 + i * 0.14 }} />
        ))}
        {[100, 250, 400].map((x, i) => (
          <motion.g key={i} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 1.5 + i * 0.1 }}>
            <line x1={x-8} y1="14" x2={x+8} y2="14" stroke={GOLD} strokeWidth="0.5" strokeOpacity="0.4" />
            <circle cx={x} cy="14" r="2.5" fill={GOLD} fillOpacity="0.25" stroke={GOLD} strokeWidth="0.5" strokeOpacity="0.5" />
          </motion.g>
        ))}
      </svg>
    </div>
  );
}

/* ============================================================================
 * PILLAR DETAIL CARDS
 * ============================================================================ */
function DesignIcon() {
  return <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="14" cy="14" r="11"/><path d="M14 3L14 6"/><path d="M14 22L14 25"/><path d="M3 14L6 14"/><path d="M22 14L25 14"/><circle cx="14" cy="14" r="3"/><path d="M14 11L17 6"/></svg>;
}
function SimulateIcon() {
  return <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="10" height="12" rx="2"/><rect x="15" y="8" width="10" height="12" rx="2" opacity="0.5"/><path d="M13 14L15 14" strokeDasharray="1 1"/></svg>;
}
function OptimiseIcon() {
  return <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 22L10 16L15 18L24 8"/><path d="M20 8L24 8L24 12"/><line x1="4" y1="22" x2="24" y2="22"/><line x1="4" y1="6" x2="4" y2="22"/></svg>;
}
function SustainIcon() {
  return <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 14A8 8 0 0 1 22 14"/><path d="M22 14A8 8 0 0 1 6 14"/><path d="M22 14L19 11M22 14L25 11"/><path d="M6 14L3 17M6 14L9 17"/></svg>;
}

const PILLARS_DETAIL = [
  { number: "01", icon: <DesignIcon />,   title: "Design",   tagline: "Concept to Blueprint",       description: "AI-assisted system architecture and conceptual design that transforms requirements into precise engineering blueprints — before a single prototype is built.", capabilities: ["Requirements engineering & gap analysis","AI-assisted architecture generation","Cross-domain constraint resolution","Rapid design-space exploration"], accentColor: "#F26522", bgAccent: "rgba(242,101,34,0.07)", borderColor: "rgba(242,101,34,0.2)" },
  { number: "02", icon: <SimulateIcon />, title: "Simulate", tagline: "Digital Twin Intelligence",  description: "High-fidelity digital twins that mirror the physical world in real time — enabling engineers and operators to test, predict, and understand system behaviour without risk.", capabilities: ["Multi-physics simulation engines","Real-time digital twin synchronisation","Scenario stress-testing & failure modes","Hardware-in-the-loop (HIL) integration"], accentColor: "#3B82F6", bgAccent: "rgba(59,130,246,0.07)", borderColor: "rgba(59,130,246,0.2)" },
  { number: "03", icon: <OptimiseIcon />, title: "Optimise", tagline: "Intelligent Efficiency",     description: "Continuous ML-powered optimisation loops that read system telemetry and autonomously tune parameters to maximise performance, reduce cost, and minimise waste.", capabilities: ["Reinforcement learning control loops","Multi-objective Pareto optimisation","Predictive maintenance scheduling","Energy and resource efficiency tuning"], accentColor: "#F26522", bgAccent: "rgba(242,101,34,0.07)", borderColor: "rgba(242,101,34,0.2)" },
  { number: "04", icon: <SustainIcon />,  title: "Sustain",  tagline: "Operational Longevity",      description: "Long-horizon operational intelligence that ensures systems evolve with changing demands, regulatory environments, and technology landscapes — without starting over.", capabilities: ["Adaptive model retraining pipelines","Regulatory & compliance monitoring","Knowledge capture & institutional memory","Lifecycle management dashboards"], accentColor: "#3B82F6", bgAccent: "rgba(59,130,246,0.07)", borderColor: "rgba(59,130,246,0.2)" },
];

function PillarCard({ pillar, delay }: { pillar: typeof PILLARS_DETAIL[number]; delay: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.7, delay, ease: [0.16,1,0.3,1] }}
      whileHover={{ y: -4 }}
      className="group relative rounded-xl p-8 transition-all duration-500 cursor-default"
      style={{ background: `linear-gradient(135deg, var(--color-navy-800) 0%, var(--color-navy-900) 100%)`, border: `1px solid ${pillar.borderColor}` }}
    >
      <span className="absolute top-4 right-6 font-display font-bold text-5xl select-none pointer-events-none"
        style={{ color: pillar.accentColor, opacity: 0.1 }} aria-hidden="true">{pillar.number}</span>
      <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
        style={{ background: pillar.bgAccent, border: `1px solid ${pillar.borderColor}`, color: pillar.accentColor }}>
        {pillar.icon}
      </div>
      <div className="mb-4">
        <h3 className="font-display font-bold text-xl text-white mb-1">{pillar.title}</h3>
        <p className="text-xs font-mono tracking-widest uppercase" style={{ color: pillar.accentColor }}>{pillar.tagline}</p>
      </div>
      <p className="text-sm text-gray-300 leading-relaxed mb-6">{pillar.description}</p>
      <ul className="space-y-2" role="list">
        {pillar.capabilities.map((cap) => (
          <li key={cap} className="flex items-start gap-2.5 text-sm text-gray-300">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-0.5 flex-shrink-0" aria-hidden="true">
              <path d="M4 3l4 4-4 4" stroke={pillar.accentColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            {cap}
          </li>
        ))}
      </ul>
      <div className="absolute bottom-0 left-6 right-6 h-px rounded-full transition-opacity duration-500 opacity-0 group-hover:opacity-100"
        style={{ background: `linear-gradient(90deg, transparent, ${pillar.accentColor}, transparent)` }} aria-hidden="true" />
    </motion.article>
  );
}

/* ============================================================================
 * PILLARS SECTION — main export
 * ============================================================================ */
export default function PillarsSection() {
  const columnsRef = useRef<HTMLDivElement>(null);
  const inView     = useInView(columnsRef, { once: true, margin: "-80px" });

  return (
    <section id="pillars" className="relative py-24 sm:py-32" style={{ background: "var(--color-navy-800)" }}>

      {/* Background: grid texture */}
      <div className="absolute inset-0 bg-grid-overlay opacity-15 pointer-events-none" aria-hidden="true" />

      {/* Background: faint vedic mandala */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04]" aria-hidden="true">
        <svg width="700" height="700" viewBox="0 0 700 700" fill="none">
          {[80,150,220,290,340].map((r, i) => <circle key={i} cx="350" cy="350" r={r} stroke="#C9A84C" strokeWidth="1"/>)}
          {Array.from({length:12}).map((_,i) => {
            const a=(i*30*Math.PI)/180;
            return <line key={i} x1={350} y1={350} x2={350+340*Math.cos(a)} y2={350+340*Math.sin(a)} stroke="#C9A84C" strokeWidth="0.5"/>;
          })}
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Section header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }} className="text-center mb-16">
          <p className="text-base mb-1 tracking-wider"
            style={{ fontFamily: "'Cinzel', Georgia, serif", color: GOLD, opacity: 0.9 }}>
            तवस् · Tavas
          </p>
          <p className="text-xs font-mono tracking-[0.25em] uppercase text-brand-orange mb-4">
            Strength · Power · Capability — Our Approach
          </p>
          <h2 className="font-display font-bold text-white mb-5 leading-tight" style={{ fontSize: "clamp(2rem,4vw,3rem)" }}>
            Four pillars.{" "}<span className="text-gradient-orange">One seamless lifecycle.</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Every engagement follows the same rigorous arc — from first principles design
            through living, self-sustaining intelligent systems.
          </p>
        </motion.div>

        {/* ── MONOLITH COLUMNS ── */}
        <div ref={columnsRef} className="relative flex items-end justify-center gap-6 sm:gap-10 md:gap-16 mb-20">
          {PILLARS_DATA.map((pillar) => (
            <MonolithPillar key={pillar.label} pillar={pillar} inView={inView} />
          ))}
          <Stylobate inView={inView} />
        </div>

        {/* Divider */}
        <div className="section-divider mb-16" aria-hidden="true" />

        {/* ── DETAIL CARDS ── */}
        <div id="capabilities" className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PILLARS_DETAIL.map((pillar, i) => (
            <PillarCard key={pillar.title} pillar={pillar} delay={i * 0.1} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }} className="text-center mt-14">
          <a href="#services" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-orange hover:text-brand-orange-light transition-colors group">
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
