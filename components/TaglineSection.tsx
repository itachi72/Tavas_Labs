"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import StarField from "./StarField";

export default function TaglineSection() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="tagline"
      ref={ref}
      className="relative py-32 sm:py-40 overflow-hidden"
      style={{ background: "#03060F" }}   // deep space black
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
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8 text-center">

        {/* Sanskrit eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-sm font-mono tracking-[0.35em] uppercase mb-6"
          style={{ color: "rgba(180,160,100,0.85)" }}
        >
          तवस् · Rigveda · Since the Beginning
        </motion.p>

        {/* Main headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-display font-bold text-white leading-tight mb-8"
          style={{ fontSize: "clamp(2rem, 5vw, 3.6rem)" }}
        >
          Civilizational intelligence.{" "}
          <span className="text-gradient-orange">Ancient wisdom,</span>{" "}
          frontier technology.
        </motion.h2>

        {/* Divider star */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : {}}
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
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base sm:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto"
          style={{ textShadow: "0 0 40px rgba(100,120,200,0.3)" }}
        >
          <span className="text-white font-semibold">TAVAS (तवस्)</span> — from the
          Rigveda, meaning strength, power, and capability. We build AI systems
          that carry the weight of that promise:{" "}
          <span className="text-gradient-orange font-medium">enduring, adaptive, and precise.</span>
        </motion.p>
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
