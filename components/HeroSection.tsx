"use client";
/* =============================================================================
 * HERO SECTION — TAVAS Labs
 * =============================================================================
 *
 * The centrepiece of the homepage. Implements Option B: "Standing Monoliths".
 *
 * VISUAL CONCEPT:
 *   Four ancient stone columns etched with glowing orange circuit traces rise
 *   from the bottom of the viewport. They suggest permanence and weight (like
 *   Stonehenge or temple pillars) but pulse with live-data energy. Each pillar
 *   carries one letter of D · S · O · S (Design · Simulate · Optimise · Sustain).
 *
 * LAYOUT (top → bottom):
 *   ① Eyebrow tag: "Intelligence by Design"
 *   ② Main headline + sub-headline
 *   ③ Company descriptor paragraph
 *   ④ Four Monolith Pillars (the focal piece)
 *   ⑤ Two CTA buttons
 *
 * CUSTOMIZATION:
 *   - HERO_CONTENT   → edit headline, sub-headline, descriptor text
 *   - PILLARS_DATA   → change label, title, description for each pillar
 *   - Pillar colors  → controlled by Tailwind classes on each <MonolithPillar>
 *   - Background     → two radial glow orbs + grid overlay (edit inline styles)
 *   - Scroll prompt  → the animated arrow at the bottom
 * ============================================================================= */

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

/* --------------------------------------------------------------------------
 * HERO CONTENT — all text is extracted here for easy editing
 * -------------------------------------------------------------------------- */
const HERO_CONTENT = {
  eyebrow: "Intelligence by Design",  // Small tag above the headline

  /* Main two-line headline */
  headline_1: "From Ideation",
  headline_2: "to Monetisation",

  /* Tag-line below headline */
  subline: "Design · Simulate · Optimise · Sustain",

  /* Company descriptor paragraph */
  descriptor:
    "The AI companion for Governments, Industries, and Academics navigating the frontier of digital transformation with digital twins.",

  /* CTA button labels */
  cta_primary:   "Begin the Conversation",
  cta_secondary: "Explore Capabilities",
};

/* --------------------------------------------------------------------------
 * PILLARS DATA
 * Each entry maps to one monolith column.
 * - initial: the single letter shown prominently on the pillar face
 * - label:   the full word displayed below the letter
 * - title:   the card title that appears on hover
 * - desc:    two-line description shown on hover
 * - delay:   stagger delay (seconds) for the entrance animation
 * - color:   Tailwind class used for the glow border / accent on this pillar
 * -------------------------------------------------------------------------- */
const PILLARS_DATA = [
  {
    initial:  "D",
    label:    "Design",
    title:    "Design",
    desc:     "AI-driven conceptual design and system architecture for complex engineering challenges.",
    delay:    0.0,
    accentClass: "border-brand-orange/60 hover:border-brand-orange",
  },
  {
    initial:  "S",
    label:    "Simulate",
    title:    "Simulate",
    desc:     "High-fidelity digital twins that mirror real-world behaviour with precision and speed.",
    delay:    0.15,
    accentClass: "border-blue-400/40 hover:border-blue-400",
  },
  {
    initial:  "O",
    label:    "Optimise",
    title:    "Optimise",
    desc:     "Continuous ML-powered optimisation loops that drive efficiency and reduce waste.",
    delay:    0.30,
    accentClass: "border-brand-orange/60 hover:border-brand-orange",
  },
  {
    initial:  "S",
    label:    "Sustain",
    title:    "Sustain",
    desc:     "Long-term operational intelligence ensuring systems evolve with changing demands.",
    delay:    0.45,
    accentClass: "border-blue-400/40 hover:border-blue-400",
  },
];

/* --------------------------------------------------------------------------
 * DESIGN TOKENS for the Sanskrit + Roman pillar aesthetic
 * -------------------------------------------------------------------------- */
const GOLD        = "#C9A84C";
const STONE_DEEP  = "#100D06";   // darkest — pillar core
const STONE_MID   = "#1C1710";   // mid shaft tone
const STONE_WARM  = "#28200E";   // light warm highlight

/* --------------------------------------------------------------------------
 * CAPITAL SVG — ornate Corinthian-meets-lotus column capital
 *
 * Draws a wide trapezoidal abacus + echinus with lotus petal outlines,
 * a central chakra rosette, and an astragal bead row at the base.
 * The SVG uses viewBox="0 0 138 54" and scales to the wrapper width.
 * -------------------------------------------------------------------------- */
function CapitalSVG({ accent, hovered }: { accent: string; hovered: boolean }) {
  const op = (base: number) => (hovered ? Math.min(base * 1.6, 1) : base);
  return (
    <svg
      width="100%" height="54"
      viewBox="0 0 138 54"
      fill="none"
      aria-hidden="true"
      style={{ display: "block" }}
    >
      {/* ── Abacus (flat top slab) ── */}
      <rect x="0" y="0" width="138" height="8" rx="1"
        fill={STONE_WARM}
        stroke={GOLD} strokeWidth="0.6" strokeOpacity={op(0.7)}
      />
      {/* Thin groove on abacus face */}
      <line x1="4" y1="4" x2="134" y2="4"
        stroke={GOLD} strokeWidth="0.35" strokeOpacity={op(0.35)} />

      {/* ── Echinus body — tapers from 138 → ~100 over 38px ── */}
      <path d="M 0 8 L 19 46 L 119 46 L 138 8 Z"
        fill={STONE_MID}
        stroke={GOLD} strokeWidth="0.5" strokeOpacity={op(0.45)} />

      {/* ── Lotus petals across the echinus face (5 petals) ── */}
      {([16, 37, 69, 101, 122] as number[]).map((px, i) => (
        <path key={i}
          d={`M ${px - 9} 46 Q ${px - 5} 28 ${px} 12 Q ${px + 5} 28 ${px + 9} 46`}
          stroke={GOLD} strokeWidth="0.9" strokeOpacity={op(0.45)}
          fill={GOLD} fillOpacity={op(0.06)}
        />
      ))}

      {/* ── Central chakra rosette ── */}
      <circle cx="69" cy="26" r="10"
        stroke={accent} strokeWidth="0.9" strokeOpacity={op(0.5)} />
      {([0, 45, 90, 135, 180, 225, 270, 315] as number[]).map((deg, i) => {
        const r = (deg * Math.PI) / 180;
        return (
          <line key={i}
            x1={69} y1={26}
            x2={69 + 10 * Math.cos(r)} y2={26 + 10 * Math.sin(r)}
            stroke={GOLD} strokeWidth="0.4" strokeOpacity={op(0.4)}
          />
        );
      })}
      <circle cx="69" cy="26" r="4"
        fill={GOLD} fillOpacity={op(0.2)}
        stroke={GOLD} strokeWidth="0.5" strokeOpacity={op(0.6)}
      />
      <circle cx="69" cy="26" r="1.5" fill={GOLD} fillOpacity={op(0.6)} />

      {/* ── Astragal bead row at bottom of echinus ── */}
      {Array.from({ length: 9 }).map((_, i) => (
        <circle key={i}
          cx={26 + i * 11} cy={43} r="1.4"
          fill={GOLD} fillOpacity={op(0.4)}
        />
      ))}

      {/* ── Neck / fillet band connecting echinus to shaft ── */}
      <rect x="19" y="47" width="100" height="3" rx="0.5"
        fill={STONE_WARM}
        stroke={GOLD} strokeWidth="0.4" strokeOpacity={op(0.45)}
      />
      <rect x="19" y="51" width="100" height="2" rx="0.5"
        fill={STONE_MID} strokeOpacity="0"
      />
    </svg>
  );
}

/* --------------------------------------------------------------------------
 * DECORATIVE BAND SVG — Sanskrit-inspired geometric border strip
 *
 * A repeating diamond (yantra) motif with top/bottom border lines.
 * Placed at ~18% and ~82% down the shaft.
 * -------------------------------------------------------------------------- */
function DecorativeBand({ color, hovered }: { color: string; hovered: boolean }) {
  const op = hovered ? 0.55 : 0.28;
  return (
    <svg width="100%" height="13" viewBox="0 0 100 13"
      preserveAspectRatio="none" fill="none" aria-hidden="true"
    >
      <line x1="0" y1="1"  x2="100" y2="1"  stroke={color} strokeWidth="0.5" strokeOpacity={op} />
      <line x1="0" y1="12" x2="100" y2="12" stroke={color} strokeWidth="0.5" strokeOpacity={op} />
      {Array.from({ length: 10 }).map((_, i) => {
        const x = i * 10 + 5;
        return (
          <polygon key={i}
            points={`${x - 3},6.5 ${x},2 ${x + 3},6.5 ${x},11`}
            stroke={color} strokeWidth="0.5" strokeOpacity={op}
            fill={color} fillOpacity={op * 0.15}
          />
        );
      })}
    </svg>
  );
}

/* --------------------------------------------------------------------------
 * LOTUS ROSETTE SVG — central mandala motif on the shaft
 * -------------------------------------------------------------------------- */
function LotusRosette({ color, hovered }: { color: string; hovered: boolean }) {
  const size = 38;
  const cx = size / 2;
  const cy = size / 2;
  const r  = size * 0.38;
  const op = hovered ? 0.7 : 0.35;
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}
      fill="none" aria-hidden="true"
    >
      {/* 8 petals */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * Math.PI * 2) / 8;
        const tipX  = cx + r * Math.cos(angle);
        const tipY  = cy + r * Math.sin(angle);
        const c1x   = cx + r * 0.65 * Math.cos(angle - 0.42);
        const c1y   = cy + r * 0.65 * Math.sin(angle - 0.42);
        const c2x   = cx + r * 0.65 * Math.cos(angle + 0.42);
        const c2y   = cy + r * 0.65 * Math.sin(angle + 0.42);
        return (
          <path key={i}
            d={`M ${cx} ${cy} Q ${c1x} ${c1y} ${tipX} ${tipY} Q ${c2x} ${c2y} ${cx} ${cy} Z`}
            stroke={color} strokeWidth="0.7" strokeOpacity={op}
            fill={color} fillOpacity={op * 0.12}
          />
        );
      })}
      {/* Outer ring */}
      <circle cx={cx} cy={cy} r={r + 2}
        stroke={color} strokeWidth="0.4" strokeOpacity={op * 0.6} />
      {/* Inner hub */}
      <circle cx={cx} cy={cy} r={size * 0.14}
        stroke={color} strokeWidth="0.6" strokeOpacity={op}
        fill={color} fillOpacity={op * 0.18}
      />
      <circle cx={cx} cy={cy} r={size * 0.06}
        fill={color} fillOpacity={op * 0.8}
      />
    </svg>
  );
}

/* --------------------------------------------------------------------------
 * MONOLITH PILLAR — individual column component
 *
 * Structure (top → bottom):
 *   ① CapitalSVG  — ornate Corinthian-lotus capital
 *   ② Shaft       — fluted stone body with Sanskrit decorative bands + letter
 *   ③ Base steps  — three stepped Roman plinth layers
 *   ④ Label       — Cinzel inscriptional font
 * -------------------------------------------------------------------------- */
interface PillarProps {
  pillar: (typeof PILLARS_DATA)[number];
  index:  number;
  inView: boolean;
}

function MonolithPillar({ pillar, index, inView }: PillarProps) {
  const [hovered, setHovered] = useState(false);

  /* Warm glow color: mix accent + gold */
  const glowColor = pillar.accentClass.includes("orange")
    ? "rgba(201,168,76,0.35)"
    : "rgba(59,130,246,0.3)";

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
      {/* ================================================================
        * ① CAPITAL
        * ================================================================ */}
      <div className="w-full h-[54px]">
        <CapitalSVG
          accent={pillar.accentClass.includes("orange") ? "#F26522" : "#3B82F6"}
          hovered={hovered}
        />
      </div>

      {/* ================================================================
        * ② SHAFT — fluted stone body
        * ================================================================ */}
      <div
        className="relative w-[72px] sm:w-[88px] md:w-[100px] h-[240px] sm:h-[290px] md:h-[340px] transition-all duration-700"
        style={{
          /* Fluted shaft: repeating vertical light/dark stripes over warm stone */
          background: `
            repeating-linear-gradient(
              90deg,
              rgba(0,0,0,0.45) 0%,
              rgba(201,168,76,0.05) 14%,
              rgba(0,0,0,0.25) 28%,
              rgba(201,168,76,0.04) 42%,
              rgba(0,0,0,0.45) 56%
            ),
            linear-gradient(180deg, ${STONE_WARM} 0%, ${STONE_MID} 20%, ${STONE_DEEP} 65%, #080604 100%)
          `,
          border: `1px solid ${GOLD}${hovered ? "99" : "44"}`,
          boxShadow: hovered
            ? `0 0 32px 8px ${glowColor}, inset 0 0 20px rgba(201,168,76,0.06)`
            : `0 0 14px 3px ${glowColor.replace("0.35", "0.15")}, inset 0 0 8px rgba(0,0,0,0.4)`,
          transition: "box-shadow 0.6s ease, border-color 0.5s ease",
        }}
      >
        {/* ── Scan line (hover) ── */}
        {hovered && (
          <motion.div
            className="absolute left-0 w-full h-[2px] z-10"
            style={{ background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)` }}
            initial={{ top: "0%", opacity: 0.85 }}
            animate={{ top: "105%", opacity: 0 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            aria-hidden="true"
          />
        )}

        {/* ── Top decorative band ── */}
        <div className="absolute left-0 right-0" style={{ top: "14%" }} aria-hidden="true">
          <DecorativeBand
            color={pillar.accentClass.includes("orange") ? GOLD : "#3B82F6"}
            hovered={hovered}
          />
        </div>

        {/* ── Central lotus rosette ── */}
        <div
          className="absolute left-1/2 -translate-x-1/2 transition-opacity duration-500"
          style={{ top: "50%", transform: "translate(-50%, -50%)", opacity: hovered ? 0.15 : 0.9 }}
          aria-hidden="true"
        >
          <LotusRosette
            color={pillar.accentClass.includes("orange") ? GOLD : "#3B82F6"}
            hovered={hovered}
          />
        </div>

        {/* ── Bottom decorative band ── */}
        <div className="absolute left-0 right-0" style={{ top: "82%" }} aria-hidden="true">
          <DecorativeBand
            color={pillar.accentClass.includes("orange") ? GOLD : "#3B82F6"}
            hovered={hovered}
          />
        </div>

        {/* ── Large inscribed letter (Cinzel — Roman stone carving style) ── */}
        <div
          className="absolute inset-0 flex items-center justify-center transition-all duration-500"
          style={{ opacity: hovered ? 0.1 : 1 }}
        >
          <span
            className="select-none"
            style={{
              fontFamily: "'Cinzel', Georgia, serif",
              fontWeight: 700,
              fontSize: "clamp(3rem, 7vw, 4.5rem)",
              lineHeight: 1,
              background: pillar.accentClass.includes("orange")
                ? `linear-gradient(160deg, ${GOLD} 0%, #F26522 60%, #E8A030 100%)`
                : `linear-gradient(160deg, #93C5FD 0%, #3B82F6 60%, #60A5FA 100%)`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              /* Chiseled stone effect via drop-shadow filter */
              filter: "drop-shadow(1px 2px 3px rgba(0,0,0,0.85)) drop-shadow(-1px -1px 1px rgba(255,220,120,0.12))",
            }}
            aria-hidden="true"
          >
            {pillar.initial}
          </span>
        </div>

        {/* ── Hover reveal: title + description ── */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center px-3 text-center z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.35 }}
        >
          <span
            className="text-sm font-semibold text-white mb-2 leading-tight"
            style={{ fontFamily: "'Cinzel', Georgia, serif", letterSpacing: "0.05em" }}
          >
            {pillar.title}
          </span>
          <p className="text-[10px] sm:text-[11px] text-gray-300 leading-relaxed">
            {pillar.desc}
          </p>
        </motion.div>
      </div>

      {/* ================================================================
        * ③ BASE — three-stepped Roman plinth
        * ================================================================ */}
      {/* Step 1 — matches shaft width */}
      <div
        className="w-[72px] sm:w-[88px] md:w-[100px] h-[8px]"
        style={{
          background: `linear-gradient(180deg, ${STONE_MID} 0%, ${STONE_DEEP} 100%)`,
          borderBottom: `1px solid ${GOLD}${hovered ? "77" : "44"}`,
          borderLeft:   `1px solid ${GOLD}${hovered ? "55" : "33"}`,
          borderRight:  `1px solid ${GOLD}${hovered ? "55" : "33"}`,
          transition: "border-color 0.5s ease",
        }}
        aria-hidden="true"
      />
      {/* Step 2 — wider */}
      <div
        className="w-[84px] sm:w-[100px] md:w-[114px] h-[7px]"
        style={{
          background: `linear-gradient(180deg, ${STONE_DEEP} 0%, #0A0805 100%)`,
          borderBottom: `1px solid ${GOLD}${hovered ? "66" : "33"}`,
          transition: "border-color 0.5s ease",
        }}
        aria-hidden="true"
      />
      {/* Step 3 — plinth (widest) */}
      <div
        className="w-[96px] sm:w-[114px] md:w-[130px] h-[7px]"
        style={{
          background: `linear-gradient(180deg, #0A0805 0%, #060503 100%)`,
          borderBottom: `1px solid ${GOLD}${hovered ? "77" : "44"}`,
          borderLeft:   `1px solid ${GOLD}${hovered ? "44" : "22"}`,
          borderRight:  `1px solid ${GOLD}${hovered ? "44" : "22"}`,
          transition: "border-color 0.5s ease",
        }}
        aria-hidden="true"
      />

      {/* ================================================================
        * ④ LABEL — Cinzel inscriptional font
        * ================================================================ */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: pillar.delay + 0.9 }}
        className="mt-3 text-center"
      >
        <span
          className="text-[10px] sm:text-xs font-semibold tracking-[0.22em] uppercase select-none"
          style={{
            fontFamily: "'Cinzel', Georgia, serif",
            color: hovered ? GOLD : "#9CA3AF",
            transition: "color 0.4s ease",
            letterSpacing: "0.22em",
          }}
        >
          {pillar.label}
        </span>
      </motion.div>

      {/* ── Ground glow beneath plinth ── */}
      <div
        className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-28 h-3 rounded-full pointer-events-none"
        style={{
          background: `radial-gradient(ellipse, ${glowColor} 0%, transparent 70%)`,
          opacity: hovered ? 0.9 : 0.35,
          filter: "blur(5px)",
          transition: "opacity 0.5s ease",
        }}
        aria-hidden="true"
      />
    </motion.div>
  );
}

/* --------------------------------------------------------------------------
 * STYLOBATE SVG — the classical temple floor platform connecting all four pillars
 *
 * Replaces the circuit connector with an architectural base line:
 * a two-rail platform with corner ornaments and a central frieze diamond.
 * -------------------------------------------------------------------------- */
function CircuitConnector({ inView }: { inView: boolean }) {
  const xs = [38, 162, 338, 462];
  return (
    <div
      className="absolute bottom-[54px] left-0 right-0 flex justify-center pointer-events-none"
      aria-hidden="true"
    >
      <svg
        width="500" height="28"
        viewBox="0 0 500 28"
        fill="none"
        className="w-full max-w-md sm:max-w-lg"
      >
        {/* Top rail — traces in on load */}
        <motion.line
          x1="30" y1="8" x2="470" y2="8"
          stroke={GOLD} strokeWidth="0.7" strokeOpacity="0.5"
          strokeDasharray="500"
          initial={{ strokeDashoffset: 500 }}
          animate={inView ? { strokeDashoffset: 0 } : {}}
          transition={{ duration: 1.4, delay: 1.0, ease: "linear" }}
        />
        {/* Bottom rail */}
        <motion.line
          x1="30" y1="20" x2="470" y2="20"
          stroke={GOLD} strokeWidth="0.7" strokeOpacity="0.35"
          strokeDasharray="500"
          initial={{ strokeDashoffset: 500 }}
          animate={inView ? { strokeDashoffset: 0 } : {}}
          transition={{ duration: 1.4, delay: 1.1, ease: "linear" }}
        />

        {/* Vertical drop lines at each pillar base */}
        {xs.map((x, i) => (
          <motion.line
            key={i}
            x1={x} y1={6} x2={x} y2={22}
            stroke={GOLD} strokeWidth="1.2" strokeOpacity="0.65"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.3, delay: 1.1 + i * 0.14 }}
          />
        ))}

        {/* Diamond ornament at each pillar base */}
        {xs.map((x, i) => (
          <motion.polygon
            key={i}
            points={`${x},4 ${x + 5},14 ${x},24 ${x - 5},14`}
            fill={GOLD} fillOpacity="0.18"
            stroke={GOLD} strokeWidth="0.6" strokeOpacity="0.65"
            initial={{ opacity: 0, scale: 0 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.4, delay: 1.25 + i * 0.14 }}
          />
        ))}

        {/* Central frieze ornament between pillars */}
        {[100, 250, 400].map((x, i) => (
          <motion.g key={i}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 1.5 + i * 0.1 }}
          >
            <line x1={x - 8} y1="14" x2={x + 8} y2="14"
              stroke={GOLD} strokeWidth="0.5" strokeOpacity="0.4" />
            <circle cx={x} cy="14" r="2.5"
              fill={GOLD} fillOpacity="0.25"
              stroke={GOLD} strokeWidth="0.5" strokeOpacity="0.5" />
          </motion.g>
        ))}
      </svg>
    </div>
  );
}

/* --------------------------------------------------------------------------
 * HERO SECTION — main export
 * -------------------------------------------------------------------------- */
export default function HeroSection() {
  /*
   * useRef + useInView:
   * - ref is attached to the section element
   * - inView becomes `true` once the section enters the viewport
   * - `once: true` means animations fire only the first time (not on re-scroll)
   * Change `once: false` if you want animations to replay every time.
   */
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-[72px]"
      /*
       * The hero background uses:
       *   1. Dark navy base
       *   2. Two radial gradient "glow orbs" (orange upper-right, blue lower-left)
       *   3. Grid overlay via the bg-grid-overlay Tailwind class
       */
      style={{
        background: "var(--color-navy-950)",
      }}
    >
      {/* ----------------------------------------------------------------
        * BACKGROUND LAYERS
        * ---------------------------------------------------------------- */}

      {/* Layer 1: Upper-right orange glow orb */}
      <div
        className="absolute top-0 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 80% 20%, rgba(242,101,34,0.12) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      {/* Layer 2: Lower-left blue glow orb */}
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 20% 80%, rgba(26,58,112,0.35) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      {/* Layer 3: Subtle tech grid pattern (defined in tailwind.config.ts) */}
      <div
        className="absolute inset-0 bg-grid-overlay opacity-40 pointer-events-none"
        aria-hidden="true"
      />

      {/* Layer 4: Bottom fade — smooth transition into the next section */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: "linear-gradient(0deg, var(--color-navy-900) 0%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      {/* ----------------------------------------------------------------
        * CONTENT WRAPPER — two-column grid on large screens:
        *   left  → headline, descriptor, CTAs
        *   right → four monolith pillars
        * ---------------------------------------------------------------- */}
      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 lg:px-8 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        {/* ============================================================
          * LEFT COLUMN — text content
          * ============================================================ */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">

          {/* ---- EYEBROW TAG ---- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-6 h-[2px] bg-brand-orange" aria-hidden="true" />
            <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-brand-orange uppercase font-mono">
              {HERO_CONTENT.eyebrow}
            </span>
            <div className="w-6 h-[2px] bg-brand-orange" aria-hidden="true" />
          </motion.div>

          {/* ---- MAIN HEADLINE ---- */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display font-bold mb-3 text-white leading-tight"
            style={{ fontSize: "clamp(2.5rem, 5vw, 5rem)" }}
          >
            {HERO_CONTENT.headline_1}
            <br />
            <span className="text-gradient-orange">{HERO_CONTENT.headline_2}</span>
          </motion.h1>

          {/* ---- SUB-LINE: D · S · O · S ---- */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="text-sm sm:text-base font-mono tracking-widest text-gray-400 mb-4"
          >
            {HERO_CONTENT.subline}
          </motion.p>

          {/* ---- DESCRIPTOR PARAGRAPH ---- */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="text-base sm:text-lg text-gray-400 leading-relaxed mb-10 sm:mb-12 max-w-xl"
          >
            {HERO_CONTENT.descriptor}
          </motion.p>

          {/* ---- CTA BUTTONS ---- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex flex-col sm:flex-row gap-4 items-center lg:items-start"
          >
            {/* Primary CTA */}
            <a
              href="#engage"
              className={`
                group inline-flex items-center gap-2.5
                px-8 py-3.5 rounded-lg
                bg-brand-orange text-white font-semibold text-sm sm:text-base
                transition-all duration-300
                hover:bg-brand-orange-light
                hover:shadow-[0_0_30px_rgba(242,101,34,0.5)]
                hover:-translate-y-0.5
              `}
            >
              {HERO_CONTENT.cta_primary}
              <svg
                width="16" height="16" viewBox="0 0 16 16" fill="none"
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              >
                <path d="M1 8h14M8 1l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            {/* Secondary CTA */}
            <a
              href="#capabilities"
              className={`
                group inline-flex items-center gap-2.5
                px-8 py-3.5 rounded-lg
                border border-surface-border text-gray-200 font-semibold text-sm sm:text-base
                transition-all duration-300
                hover:border-brand-orange/50 hover:text-white hover:bg-surface-dark
                hover:-translate-y-0.5
              `}
            >
              {HERO_CONTENT.cta_secondary}
              <svg
                width="16" height="16" viewBox="0 0 16 16" fill="none"
                className="transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              >
                <path d="M1 8h14M8 1l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>
        </div>

        {/* ============================================================
          * RIGHT COLUMN — four monolith pillars
          * ============================================================ */}
        <div
          className="relative flex items-end justify-center gap-1 sm:gap-2"
          role="list"
          aria-label="TAVAS Labs four pillars"
        >
          {PILLARS_DATA.map((pillar, index) => (
            <div key={pillar.label} role="listitem">
              <MonolithPillar
                pillar={pillar}
                index={index}
                inView={inView}
              />
            </div>
          ))}

          {/* Circuit connector line joining all four pillar bases */}
          <CircuitConnector inView={inView} />
        </div>

      </div>

      {/* ----------------------------------------------------------------
        * SCROLL PROMPT — animated down-arrow at the bottom
        * Fades out after user scrolls.
        * ---------------------------------------------------------------- */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 2.0 }}
        aria-hidden="true"
      >
        <span className="text-[10px] tracking-widest uppercase text-gray-500 font-mono">Scroll</span>
        {/* Bouncing chevron */}
        <motion.svg
          width="20" height="20" viewBox="0 0 20 20" fill="none"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M4 7l6 6 6-6" stroke="#F26522" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </motion.svg>
      </motion.div>
    </section>
  );
}
