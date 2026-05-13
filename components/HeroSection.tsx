"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import HeroParticles from "./HeroParticles";

export default function HeroSection() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ── VIDEO BACKGROUND ── */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        aria-hidden="true"
      >
        <source src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/circuit.mp4`} type="video/mp4" />
      </video>

      {/* ── OVERLAYS ── */}
      {/* Dark tint */}
      <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
      {/* Top gradient — blends navbar into video */}
      <div
        className="absolute top-0 left-0 right-0 h-48 pointer-events-none"
        style={{ background: "linear-gradient(180deg, rgba(0,0,0,0.55) 0%, transparent 100%)" }}
        aria-hidden="true"
      />
      {/* Bottom gradient — blends video into page */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{ background: "linear-gradient(0deg, #2C4A6A 0%, transparent 100%)" }}
        aria-hidden="true"
      />

      {/* ── PARTICLE NETWORK ── */}
      <HeroParticles />

      {/* ── SCAN LINE + DATA STREAM LINES ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 3 }} aria-hidden="true">
        <motion.div
          className="absolute left-0 right-0 h-px"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(100,160,255,0.0) 15%, rgba(242,101,34,0.5) 40%, rgba(100,160,255,0.7) 50%, rgba(242,101,34,0.5) 60%, rgba(100,160,255,0.0) 85%, transparent 100%)",
            boxShadow: "0 0 10px 2px rgba(100,160,255,0.25)",
          }}
          animate={{ y: ["-2%", "102%"] }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear", repeatDelay: 3 }}
        />
        {[15, 38, 62, 85].map((leftPct, i) => (
          <motion.div
            key={i}
            className="absolute top-0 bottom-0 w-px"
            style={{ left: `${leftPct}%`, background: "linear-gradient(180deg, transparent 0%, rgba(100,160,255,0.15) 50%, transparent 100%)" }}
            animate={{ opacity: [0, 0.6, 0] }}
            transition={{ duration: 3 + i * 0.7, repeat: Infinity, ease: "easeInOut", delay: i * 1.1 }}
          />
        ))}
      </div>

      {/* ── CONTENT ── */}
      <div className="relative w-full max-w-6xl mx-auto px-6 text-center pt-[96px] sm:pt-[120px]" style={{ zIndex: 10 }}>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.3 }}
          className="font-display font-bold text-white leading-tight mb-8 sm:mb-12"
          style={{ fontSize: "clamp(1.7rem, 4.725vw, 3.78rem)" }}
        >
          <span style={{ fontSize: '90%' }}>AI and Digital Companion</span>
          <br />
          <span className="text-gradient-white" style={{ fontSize: '80%' }}>
            Governments, Industries, and Academia
          </span>
        </motion.h1>

        {/* Sub-copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.48 }}
          className="text-base sm:text-xl text-gray-300 leading-relaxed mb-10"
        >
          Navigating the frontier of digital transformation with AI-powered digital twins -
          <br />
          turning complex challenges into engineered, intelligent, and sustainable outcomes.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.62 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2.5 px-8 sm:px-12 py-4 sm:py-5 rounded-lg
              bg-brand-orange text-white font-semibold text-base sm:text-xl
              hover:bg-brand-orange-light transition-all duration-300
              hover:shadow-[0_0_30px_rgba(242,101,34,0.5)] hover:-translate-y-0.5"
          >
            Begin the Conversation
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M1 8h14M8 1l7 7-7 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href="#pillars"
            className="inline-flex items-center justify-center gap-2 px-8 sm:px-12 py-4 sm:py-5 rounded-lg
              border border-white/30 text-gray-200 font-semibold text-base sm:text-xl
              hover:border-white/60 hover:text-white transition-all duration-300 hover:-translate-y-0.5"
          >
            Explore Capabilities
          </a>
        </motion.div>

        {/* Scrolling ticker */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="overflow-hidden mt-8"
        >
          <motion.p
            animate={{ x: ["0%", "-100%"] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
            className="text-[19px] sm:text-[22px] font-mono tracking-[0.3em] uppercase whitespace-nowrap"
            style={{ color: "#FFD700" }}
          >
            Ideation to Monetisation&nbsp;•&nbsp;Industrial AI Adoption&nbsp;•&nbsp;Government Transformation&nbsp;•&nbsp;Digital Twin &amp; Simulation&nbsp;•&nbsp;Intelligent Optimisation&nbsp;•&nbsp;Sustainability Intelligence&nbsp;•&nbsp;Capability Mentors&nbsp;&nbsp;&nbsp;&nbsp;Ideation to Monetisation&nbsp;•&nbsp;Industrial AI Adoption&nbsp;•&nbsp;Government Transformation&nbsp;•&nbsp;Digital Twin &amp; Simulation&nbsp;•&nbsp;Intelligent Optimisation&nbsp;•&nbsp;Sustainability Intelligence&nbsp;•&nbsp;Capability Mentors
          </motion.p>
        </motion.div>
      </div>

      {/* ── SCROLL INDICATOR ── */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        style={{ zIndex: 10 }}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ delay: 1.4 }}
        aria-hidden="true"
      >
        <span className="text-[10px] tracking-widest uppercase text-gray-400 font-mono">Scroll</span>
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
