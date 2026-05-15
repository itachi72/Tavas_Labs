"use client";

import { motion } from "framer-motion";
import StarField from "./StarField";

export default function TaglineSection() {
  return (
    <section
      id="tagline"
      className="relative py-16 sm:py-28 lg:py-40 overflow-hidden"
      style={{ background: "#0E1A2E" }}   // deep space black
    >
      {/* ── STARFIELD ── */}
      <StarField />

      {/* ── NEBULA COLOUR BLOOMS ── */}
      {/* Blue-purple bloom — top left */}
      <div
        className="absolute pointer-events-none"
        style={{
          inset: 0,
          background: "radial-gradient(ellipse 70% 55% at 20% 30%, rgba(59,90,210,0.18) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      {/* Amber/orange bloom — bottom right (TAVAS orange warmth) */}
      <div
        className="absolute pointer-events-none"
        style={{
          inset: 0,
          background: "radial-gradient(ellipse 60% 45% at 80% 70%, rgba(242,101,34,0.10) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />
      {/* Purple deep-field centre */}
      <div
        className="absolute pointer-events-none"
        style={{
          inset: 0,
          background: "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(100,50,180,0.10) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />
      {/* Teal accent — right edge */}
      <div
        className="absolute pointer-events-none"
        style={{
          inset: 0,
          background: "radial-gradient(ellipse 35% 60% at 95% 40%, rgba(20,160,180,0.08) 0%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      {/* ── CONTENT ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">

        {/* Main headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-display font-bold text-white leading-tight mb-8"
        >
          <span style={{ display: "block", fontSize: "clamp(1.7rem, 5.04vw, 4rem)" }}>
            Civilizational intelligence
          </span>
          <span style={{ display: "block", fontSize: "clamp(1.35rem, 4.1vw, 3.25rem)" }}>
            <span className="text-gradient-orange">Ancient wisdom,</span> frontier technology
          </span>
        </motion.h2>

        {/* Divider star */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex items-center justify-center gap-4 mb-8"
          aria-hidden="true"
        >
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-orange-400/50" />
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 0L7.2 4.8L12 6L7.2 7.2L6 12L4.8 7.2L0 6L4.8 4.8Z" fill="#F26522" fillOpacity="0.8"/>
          </svg>
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-orange-400/50" />
        </motion.div>

        {/* Body */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="space-y-4"
          style={{ textShadow: "0 0 40px rgba(100,120,200,0.3)" }}
        >
          {/* Sanskrit verse */}
          <p style={{ color: "#F26522", fontSize: "clamp(1.3rem, 3.2vw, 2.4rem)", lineHeight: 1.5 }}>
            एवा हि मां{" "}
            <span style={{ color: "#60A5FA", fontSize: "clamp(1.55rem, 3.8vw, 2.85rem)", fontWeight: 700 }}>
              तवसं
            </span>
            {" "}वर्धयन्ति दिवश्चिन्मे बृहत उत्तरा धूः।
          </p>

          {/* Reference */}
          <p style={{ color: "rgba(210,225,245,0.85)", fontSize: "clamp(0.85rem, 1.6vw, 1.15rem)", fontStyle: "italic", fontWeight: 600 }}>
            Rigveda 10 (mandala).28(sūktas).06(mantra)
          </p>

          {/* Transliteration + translation */}
          <p style={{ color: "rgba(200,215,235,0.78)", fontSize: "clamp(0.82rem, 1.5vw, 1.1rem)", fontStyle: "italic", lineHeight: 1.75 }}>
            (Ebaa hi mam{" "}
            <strong style={{ color: "#60A5FA", fontStyle: "normal" }}>TAVAS</strong>
            m bardhyeanti dibarshichanme brihat Uttara dhuhu)
            <br />
            Thus do they magnify the strength, which is higher than the heavens and make us self reliant!
          </p>
        </motion.div>
      </div>

      {/* Fade edges into surrounding page */}
      <div
        className="absolute top-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(180deg, var(--color-navy-700) 0%, transparent 100%)" }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: "linear-gradient(0deg, var(--color-navy-800) 0%, transparent 100%)" }}
        aria-hidden="true"
      />
    </section>
  );
}
