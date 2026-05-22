"use client";

import { motion } from "framer-motion";
import StarField from "./StarField";
import RiverOfLight from "./RiverOfLight";

/* ─── font stacks ─────────────────────────────────────────────────────────── */
const SANS  = "'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif";
const DEVAN = "'Noto Serif Devanagari', 'Noto Serif', serif";

export default function TaglineSection() {
  return (
    <section
      id="tagline"
      className="relative py-20 sm:py-32 lg:py-44 overflow-hidden"
      style={{ background: "#0B1524" }}
    >
      {/* ── layer 1: starfield ── */}
      <StarField />

      {/* ── layer 2: nebula blooms ── */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{ background: "radial-gradient(ellipse 70% 55% at 18% 30%, rgba(59,90,210,0.16) 0%, transparent 70%)" }} />
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{ background: "radial-gradient(ellipse 60% 45% at 82% 68%, rgba(242,101,34,0.09) 0%, transparent 65%)" }} />
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true"
        style={{ background: "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(100,50,180,0.09) 0%, transparent 60%)" }} />

      {/* ── layer 3: river of light animation ── */}
      <RiverOfLight />

      {/* ── layer 4: content ── */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-10"
        >
          <h2
            style={{
              fontFamily: SANS,
              fontWeight: 300,
              letterSpacing: "-0.035em",
              lineHeight: 1.12,
              color: "#ffffff",
              fontSize: "clamp(2rem, 5.2vw, 4.2rem)",
              marginBottom: "0.2em",
            }}
          >
            civilizational intelligence
          </h2>
          <p
            style={{
              fontFamily: SANS,
              fontWeight: 300,
              letterSpacing: "-0.02em",
              fontSize: "clamp(1.2rem, 3.2vw, 2.6rem)",
              color: "rgba(255,255,255,0.72)",
              lineHeight: 1.2,
            }}
          >
            <span style={{ color: "#ffffff" }}>ancient wisdom,</span>{" "}
            <span style={{ color: "rgba(255,255,255,0.65)" }}>frontier technology</span>
          </p>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="flex items-center justify-center gap-5 mb-10"
          aria-hidden="true"
        >
          <div className="h-px flex-1 max-w-[96px]"
            style={{ background: "linear-gradient(to right, transparent, rgba(242,101,34,0.45))" }} />
          <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
            <path d="M6 0L7.2 4.8L12 6L7.2 7.2L6 12L4.8 7.2L0 6L4.8 4.8Z"
              fill="#F26522" fillOpacity="0.75"/>
          </svg>
          <div className="h-px flex-1 max-w-[96px]"
            style={{ background: "linear-gradient(to left, transparent, rgba(242,101,34,0.45))" }} />
        </motion.div>

        {/* Sanskrit verse block */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.55 }}
          className="space-y-6"
        >
          {/* Rigveda mantra — Devanagari */}
          <p
            style={{
              fontFamily: DEVAN,
              fontWeight: 500,
              fontSize: "clamp(1.35rem, 3.3vw, 2.55rem)",
              lineHeight: 1.65,
              color: "#F26522",
              letterSpacing: "0.01em",
            }}
          >
            एवा हि मां{" "}
            <span style={{ color: "#ffffff", fontWeight: 600 }}>तवसं</span>
            {" "}वर्धयन्ति दिवश्चिन्मे बृहत उत्तरा धूः।
          </p>

          {/* Reference — clean serif-italic */}
          <p
            style={{
              fontFamily: SANS,
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "clamp(0.9rem, 1.7vw, 1.22rem)",
              color: "rgba(210,225,245,0.70)",
              letterSpacing: "0.04em",
            }}
          >
            Rigveda 10 (mandala).28(sūktas).06(mantra)
          </p>

          {/* Transliteration + translation */}
          <div
            style={{
              fontFamily: SANS,
              fontWeight: 300,
              fontStyle: "italic",
              fontSize: "clamp(0.88rem, 1.65vw, 1.15rem)",
              color: "rgba(200,215,235,0.62)",
              lineHeight: 1.85,
              letterSpacing: "0.01em",
            }}
          >
            <p>
              (Ebaa hi mam{" "}
              <strong style={{ color: "#F26522", fontStyle: "normal", fontWeight: 500 }}>TAVAS</strong>
              m bardhyeanti dibarshichanme brihat Uttara dhuhu)
            </p>
            <p style={{ marginTop: "0.35em" }}>
              thus do they magnify the strength, which is higher than the heavens and make us self reliant!
            </p>
          </div>
        </motion.div>
      </div>

      {/* ── edge fades ── */}
      <div className="absolute top-0 left-0 right-0 h-24 pointer-events-none" aria-hidden="true"
        style={{ background: "linear-gradient(180deg, #090F1E 0%, transparent 100%)" }} />
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none" aria-hidden="true"
        style={{ background: "linear-gradient(0deg, #0E1A2E 0%, transparent 100%)" }} />
    </section>
  );
}
