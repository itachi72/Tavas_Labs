"use client";

import { motion } from "framer-motion";
import NeuralSpace from "@/components/NeuralSpace";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// ── SERVICE LINES ──────────────────────────────────────────────────────────────
const SERVICES = [
  {
    number: "01",
    title: "Strategy",
    subtitle: "Direction before deployment",
    desc: "We work alongside leadership to translate business vision into a practical, technology-enabled roadmap — grounded in your operations, not generic frameworks.",
    bullets: ["AI & digital strategy workshops", "Technology gap analysis", "Investment prioritisation", "Regulatory & compliance alignment"],
    accent: "#F26522",
    bgAccent: "rgba(242,101,34,0.10)",
    border: "rgba(242,101,34,0.30)",
  },
  {
    number: "02",
    title: "Implementation",
    subtitle: "From blueprint to live system",
    desc: "Our cross-disciplinary teams deliver end-to-end — from requirements through build, integration, testing and handover — with milestones you can see and verify.",
    bullets: ["Full-cycle project delivery", "Agile sprint management", "Systems integration & testing", "Knowledge transfer & documentation"],
    accent: "#60A5FA",
    bgAccent: "rgba(96,165,250,0.10)",
    border: "rgba(96,165,250,0.28)",
  },
  {
    number: "03",
    title: "Advisory",
    subtitle: "Expert counsel, on demand",
    desc: "A dedicated senior advisor embedded in your decision-making cadence — bringing domain depth in AI, systems engineering, and digital transformation.",
    bullets: ["Monthly strategy sessions", "On-demand expert access", "Board & C-suite briefings", "Priority response SLA"],
    accent: "#F26522",
    bgAccent: "rgba(242,101,34,0.10)",
    border: "rgba(242,101,34,0.30)",
  },
  {
    number: "04",
    title: "Assessment",
    subtitle: "Clarity before commitment",
    desc: "Independent diagnostic of your current systems, data maturity, and organisational readiness — so every investment is backed by evidence, not assumption.",
    bullets: ["AI & data readiness audit", "Technical debt mapping", "Vendor & platform evaluation", "Risk & opportunity scorecard"],
    accent: "#60A5FA",
    bgAccent: "rgba(96,165,250,0.10)",
    border: "rgba(96,165,250,0.28)",
  },
  {
    number: "05",
    title: "Architecture",
    subtitle: "Systems built to last",
    desc: "We design digital and physical architectures that are scalable, secure, and sovereign — balancing global best practice with India's infrastructure and policy realities.",
    bullets: ["Enterprise & cloud architecture", "Edge-to-cloud system design", "Data sovereignty & security", "Interface definition & integration blueprints"],
    accent: "#F26522",
    bgAccent: "rgba(242,101,34,0.10)",
    border: "rgba(242,101,34,0.30)",
  },
  {
    number: "06",
    title: "Change",
    subtitle: "Adoption that sticks",
    desc: "Technology only delivers value when people use it. We design and run change programmes that build capability, drive adoption, and sustain new ways of working.",
    bullets: ["Change impact assessment", "Stakeholder engagement plans", "Training & capability building", "Adoption metrics & feedback loops"],
    accent: "#60A5FA",
    bgAccent: "rgba(96,165,250,0.10)",
    border: "rgba(96,165,250,0.28)",
  },
];

// ── 5-PHASE PROCESS ────────────────────────────────────────────────────────────
const PHASES = [
  {
    step: "01",
    title: "Discover & Diagnose",
    desc: "Structured discovery workshops surface the real problem — not just the stated one. We map systems, stakeholders, constraints, and opportunities before any solution is proposed.",
    color: "#F26522",
  },
  {
    step: "02",
    title: "Strategy & Roadmap",
    desc: "We co-create a prioritised roadmap with clear milestones, business cases, and resource plans — aligned to your organisation's appetite for change and investment.",
    color: "#60A5FA",
  },
  {
    step: "03",
    title: "Pilot & Validate",
    desc: "Before full commitment, we run a scoped pilot. Digital twin simulations and real-world tests generate evidence that derisk the scale-up decision.",
    color: "#C9A84C",
  },
  {
    step: "04",
    title: "Scale & Embed",
    desc: "Full deployment with integrated change management. We embed alongside your team, resolve friction in real time, and ensure the solution becomes part of how you operate.",
    color: "#F26522",
  },
  {
    step: "05",
    title: "Measure & Monetise",
    desc: "Outcome tracking against the metrics agreed at the outset. We surface value, identify optimisation opportunities, and help you turn operational gains into competitive advantage.",
    color: "#60A5FA",
  },
];

// ── WHY NEXUS ──────────────────────────────────────────────────────────────────
const WHY = [
  {
    icon: "⊛",
    title: "AI-Native Expertise",
    desc: "NEXUS practitioners live at the intersection of engineering physics, data science, and systems thinking — not generic IT consultants re-labelled for the AI era.",
  },
  {
    icon: "⊕",
    title: "Speed to Value",
    desc: "Our DSOS-first delivery model compresses the cycle from discovery to demonstrable results — reducing the delay between investment and return.",
  },
  {
    icon: "⊗",
    title: "Outcome Accountability",
    desc: "We structure engagements around measurable outcomes, not billable hours. In our Outcome model, our fee is directly tied to the value we create.",
  },
  {
    icon: "⊘",
    title: "India-Sovereign, Globally Aligned",
    desc: "Deep familiarity with Indian regulatory, infrastructure, and policy environments — combined with global engineering standards and practices.",
  },
  {
    icon: "⊙",
    title: "Research-to-Deployment Pipeline",
    desc: "Partnerships with premier research institutions mean our approaches are frontier-class, peer-validated, and translated into practical deliverables.",
  },
  {
    icon: "⊚",
    title: "Continuity by Design",
    desc: "Every engagement is structured to leave behind documented models, governance frameworks, and trained teams — not dependency on NEXUS forever.",
  },
];

// ── ENGAGEMENT MODELS ──────────────────────────────────────────────────────────
const MODELS = [
  {
    tag: "ADVISORY",
    title: "Retainer",
    subtitle: "Monthly Engagement",
    features: [
      "Dedicated senior advisor",
      "Monthly strategy sessions",
      "On-demand expert access",
      "Monthly roadmap reviews",
      "Priority response SLA",
    ],
    cta: "Enquire",
    featured: false,
  },
  {
    tag: "MOST POPULAR",
    title: "Projects",
    subtitle: "Fixed Scope & Outcome",
    features: [
      "Discover & framing workshop",
      "Defined deliverables & milestones",
      "Cross-pillar team deployed",
      "Implementation & testing",
      "Knowledge transfer included",
      "Post-delivery support",
    ],
    cta: "Get Started",
    featured: true,
  },
  {
    tag: "PARTNERSHIP",
    title: "Outcome",
    subtitle: "Revenue & savings share",
    features: [
      "Fully aligned incentives",
      "TAVAS invests in your success",
      "Long-term embedded team",
      "Metrics-driven accountability",
      "Co-IP development",
    ],
    cta: "Discuss",
    featured: false,
  },
];

// ── TRAINING PROGRAMS ──────────────────────────────────────────────────────────
const TRAINING = [
  { code: "NX-T01", title: "AI for Business Leaders", duration: "2 days", level: "Executive" },
  { code: "NX-T02", title: "Digital Twin Fundamentals", duration: "3 days", level: "Technical" },
  { code: "NX-T03", title: "Systems Engineering Practitioner", duration: "5 days", level: "Practitioner" },
  { code: "NX-T04", title: "Data Strategy & Governance", duration: "2 days", level: "Leadership" },
  { code: "NX-T05", title: "Change Management for Digital Transformation", duration: "3 days", level: "All levels" },
  { code: "NX-T06", title: "DSOS Framework Certification", duration: "4 days", level: "Practitioner" },
];

// ── COMPONENT ──────────────────────────────────────────────────────────────────
export default function NexusPage() {
  return (
    <main className="bg-[#0E1A2E] text-white min-h-screen pt-[72px] sm:pt-[80px] lg:pt-[88px]">

      {/* ═══════════════════════════════════════════════════════ HERO */}
      <section className="relative overflow-hidden py-16 sm:py-24 lg:py-36">
        <NeuralSpace />

        {/* Nebula blooms */}
        <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }} aria-hidden="true">
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 65% 50% at 15% 25%, rgba(59,80,210,0.22) 0%, transparent 65%)" }} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 50% 40% at 85% 20%, rgba(242,101,34,0.12) 0%, transparent 60%)" }} />
          <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse 55% 45% at 10% 80%, rgba(20,160,180,0.10) 0%, transparent 60%)" }} />
        </div>

        {/* Top fade from navbar */}
        <div className="absolute top-0 left-0 right-0 h-24 pointer-events-none" style={{ background: "linear-gradient(180deg, #1F3452 0%, transparent 100%)", zIndex: 2 }} aria-hidden="true" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-mono tracking-[0.28em] uppercase text-brand-orange mb-5"
          >
            TAVAS · Consulting Arm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-display font-bold leading-tight mb-6"
            style={{ fontSize: "clamp(1.9rem, 5.5vw, 4.2rem)" }}
          >
            TAVAS{" "}
            <span className="text-gradient-orange">NEXUS</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10"
          >
            Where Intelligence Connects. TAVAS NEXUS is our dedicated consulting hub — translating the DSOS framework into end-to-end engagements that move organisations from ambiguity to measurable, compounding advantage.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm
                bg-brand-orange text-white hover:bg-brand-orange-light transition-all duration-300
                hover:shadow-[0_0_24px_rgba(242,101,34,0.4)]"
            >
              Start a Conversation
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="#process"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm
                border border-white/20 text-gray-200 hover:border-white/40 hover:text-white transition-all duration-300"
            >
              See How We Work
            </a>
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none" style={{ background: "linear-gradient(0deg, #0E1A2E 0%, transparent 100%)", zIndex: 2 }} aria-hidden="true" />
      </section>

      {/* ═══════════════════════════════════════════════════════ SERVICES */}
      <section id="nexus-services" className="relative py-14 sm:py-24 lg:py-32" style={{ background: "#0E1A2E" }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="text-xs font-mono tracking-[0.25em] uppercase text-brand-orange mb-3">
              Six Service Lines
            </p>
            <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: "clamp(1.7rem, 3.2vw, 2.6rem)" }}>
              What <span className="text-gradient-orange">NEXUS</span> Delivers
            </h2>
            <p className="text-gray-300 text-base max-w-2xl mx-auto leading-relaxed">
              Six integrated service lines — each designed to operate independently or as part of a full DSOS engagement.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((svc, i) => (
              <motion.div
                key={svc.number}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="relative rounded-2xl p-7 flex flex-col cursor-default"
                style={{
                  background: "rgba(8, 18, 38, 0.72)",
                  border: `1px solid ${svc.border}`,
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
                }}
              >
                {/* Watermark number */}
                <span
                  className="absolute top-4 right-5 font-display font-bold text-6xl select-none pointer-events-none"
                  style={{ color: svc.accent, opacity: 0.07 }}
                  aria-hidden="true"
                >
                  {svc.number}
                </span>

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: svc.bgAccent, border: `1px solid ${svc.border}` }}
                >
                  <span className="font-display font-bold text-base" style={{ color: svc.accent }}>
                    {svc.number}
                  </span>
                </div>

                <h3 className="font-display font-bold text-2xl text-white mb-1">{svc.title}</h3>
                <p className="text-xs font-mono tracking-widest uppercase mb-4" style={{ color: svc.accent }}>{svc.subtitle}</p>
                <p className="text-sm text-gray-300 leading-relaxed mb-6 flex-1">{svc.desc}</p>

                <ul className="space-y-2">
                  {svc.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-xs text-gray-400">
                      <svg width="12" height="12" viewBox="0 0 14 14" fill="none" className="mt-0.5 flex-shrink-0" aria-hidden="true">
                        <path d="M4 3l4 4-4 4" stroke={svc.accent} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ 5-PHASE PROCESS */}
      <section id="process" className="relative py-14 sm:py-24 lg:py-32 overflow-hidden" style={{ background: "#0B1628" }}>
        {/* Top fade */}
        <div className="absolute top-0 left-0 right-0 h-20 pointer-events-none" style={{ background: "linear-gradient(180deg, #0E1A2E 0%, transparent 100%)" }} aria-hidden="true" />

        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="text-xs font-mono tracking-[0.25em] uppercase text-brand-orange mb-3">
              How We Work
            </p>
            <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: "clamp(1.7rem, 3.2vw, 2.6rem)" }}>
              Five Phases. <span className="text-gradient-orange">One Connected Journey.</span>
            </h2>
            <p className="text-gray-300 text-base max-w-xl mx-auto leading-relaxed">
              Every NEXUS engagement follows a structured process designed to eliminate ambiguity at each stage before moving to the next.
            </p>
          </motion.div>

          <div className="relative">
            {/* Vertical connector line */}
            <div
              className="absolute left-[27px] top-8 bottom-8 w-px hidden sm:block"
              style={{ background: "linear-gradient(180deg, #F26522, #60A5FA, #C9A84C, #F26522, #60A5FA)" }}
              aria-hidden="true"
            />

            <div className="space-y-8">
              {PHASES.map((phase, i) => (
                <motion.div
                  key={phase.step}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: i * 0.1 }}
                  className="flex gap-6 items-start"
                >
                  {/* Step circle */}
                  <div
                    className="flex-shrink-0 w-14 h-14 rounded-full flex items-center justify-center font-display font-bold text-sm z-10"
                    style={{ background: "rgba(8,18,38,0.9)", border: `2px solid ${phase.color}`, color: phase.color }}
                  >
                    {phase.step}
                  </div>

                  {/* Content */}
                  <div
                    className="flex-1 rounded-xl p-6"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.09)",
                    }}
                  >
                    <h3 className="font-display font-semibold text-lg text-white mb-2">{phase.title}</h3>
                    <p className="text-sm text-gray-300 leading-relaxed">{phase.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none" style={{ background: "linear-gradient(0deg, #0E1A2E 0%, transparent 100%)" }} aria-hidden="true" />
      </section>

      {/* ═══════════════════════════════════════════════════════ WHY NEXUS */}
      <section id="why-nexus" className="relative py-14 sm:py-24 lg:py-32" style={{ backgroundColor: "#E8EDF3" }}>
        {/* Circuit overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `url(${BASE}/video/overlay.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.18,
            mixBlendMode: "multiply",
          }}
          aria-hidden="true"
        />
        {/* Top gradient navy → silver */}
        <div className="absolute top-0 left-0 right-0 h-32 pointer-events-none" style={{ background: "linear-gradient(180deg, #0E1A2E 0%, #E8EDF3 100%)", zIndex: 1 }} aria-hidden="true" />
        {/* Bottom gradient silver → navy */}
        <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none" style={{ background: "linear-gradient(0deg, #0B1628 0%, #E8EDF3 100%)", zIndex: 1 }} aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <p className="text-xs font-mono tracking-[0.25em] uppercase text-brand-orange mb-3">
              Why Choose NEXUS
            </p>
            <h2 className="font-display font-bold mb-4" style={{ fontSize: "clamp(1.7rem, 3.2vw, 2.6rem)", color: "#0B1F3A" }}>
              Built Different. <span className="text-gradient-orange">Accountable for Outcomes.</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {WHY.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -3 }}
                className="group p-6 rounded-xl transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.82)",
                  border: "1px solid rgba(0,0,0,0.08)",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  backdropFilter: "blur(4px)",
                }}
              >
                <span className="text-xl text-brand-orange block mb-3" aria-hidden="true">{item.icon}</span>
                <h3 className="font-display font-semibold text-sm mb-2" style={{ color: "#0B1F3A" }}>{item.title}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "#4B5563" }}>{item.desc}</p>
                <div
                  className="mt-4 h-px w-0 group-hover:w-full transition-all duration-500 rounded-full"
                  style={{ background: "linear-gradient(90deg, #F26522, transparent)" }}
                  aria-hidden="true"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ ENGAGEMENT MODELS */}
      <section id="nexus-engage" className="relative py-14 sm:py-24 lg:py-32 overflow-hidden" style={{ background: "#0E1A2E" }}>
        {/* Orange glow accent */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(242,101,34,0.08) 0%, transparent 70%)" }}
          aria-hidden="true"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <p className="text-xs font-mono tracking-[0.25em] uppercase text-brand-orange mb-3">
              Engagement Model
            </p>
            <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: "clamp(1.7rem, 3.2vw, 2.6rem)" }}>
              Flexible. <span className="text-gradient-orange">Outcome-Focused.</span>
            </h2>
            <p className="text-gray-300 text-base max-w-xl mx-auto leading-relaxed">
              Choose the model that fits your organisation's needs and timeline.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {MODELS.map((model, i) => (
              <motion.div
                key={model.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className={`relative rounded-xl p-5 sm:p-8 flex flex-col ${
                  model.featured ? "ring-2 ring-brand-gold md:scale-[1.04] md:-translate-y-2" : ""
                }`}
                style={{
                  background: model.featured
                    ? "linear-gradient(145deg, #263F5F 0%, #1F3452 100%)"
                    : "rgba(255,255,255,0.05)",
                  border: model.featured ? "1px solid rgba(201,168,76,0.4)" : "1px solid rgba(255,255,255,0.12)",
                  boxShadow: model.featured ? "0 0 40px rgba(201,168,76,0.12)" : "none",
                }}
              >
                {model.featured && (
                  <div
                    className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-5 py-1 rounded-full
                      text-[10px] font-bold tracking-[0.18em] uppercase text-white"
                    style={{ background: "var(--color-gold)" }}
                  >
                    Most Popular
                  </div>
                )}

                <p className="text-[10px] font-mono tracking-[0.22em] uppercase text-brand-orange mb-2">{model.tag}</p>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-1">{model.title}</h3>
                <p className="text-sm text-gray-400 mb-7">{model.subtitle}</p>

                <ul className="space-y-3 flex-1 mb-8">
                  {model.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-gray-300">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="mt-0.5 flex-shrink-0" aria-hidden="true">
                        <path d="M2 7l3.5 3.5L12 3" stroke={model.featured ? "#C9A84C" : "#F26522"} strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className={`text-center py-3.5 px-6 rounded-lg font-semibold text-sm
                    transition-all duration-300 hover:-translate-y-0.5 ${
                    model.featured
                      ? "text-white hover:brightness-110 hover:shadow-[0_0_20px_rgba(201,168,76,0.4)]"
                      : "bg-brand-orange text-white hover:bg-brand-orange-light hover:shadow-[0_0_20px_rgba(242,101,34,0.35)]"
                  }`}
                  style={model.featured ? { background: "var(--color-gold)" } : undefined}
                >
                  {model.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ TRAINING */}
      <section id="nexus-training" className="relative py-14 sm:py-24 lg:py-32" style={{ background: "#0B1628" }}>
        {/* Top fade */}
        <div className="absolute top-0 left-0 right-0 h-20 pointer-events-none" style={{ background: "linear-gradient(180deg, #0E1A2E 0%, transparent 100%)" }} aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-14"
          >
            <p className="text-xs font-mono tracking-[0.25em] uppercase text-brand-orange mb-3">
              Capability Building
            </p>
            <h2 className="font-display font-bold text-white mb-4" style={{ fontSize: "clamp(1.7rem, 3.2vw, 2.6rem)" }}>
              NEXUS <span className="text-gradient-orange">Training Portfolio</span>
            </h2>
            <p className="text-gray-300 text-base max-w-xl mx-auto leading-relaxed">
              Structured programmes that build lasting internal capability — so your teams can operate, adapt and extend the solutions we deliver together.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TRAINING.map((prog, i) => (
              <motion.div
                key={prog.code}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="rounded-xl p-6"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(242,101,34,0.2)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <p className="text-[10px] font-mono tracking-[0.22em] text-brand-orange mb-3">{prog.code}</p>
                <h3 className="font-display font-semibold text-base text-white mb-3 leading-snug">{prog.title}</h3>
                <div className="flex items-center gap-4">
                  <span className="text-xs text-gray-400">
                    <span className="text-gray-500 mr-1">Duration:</span>{prog.duration}
                  </span>
                  <span className="text-xs text-gray-400">
                    <span className="text-gray-500 mr-1">Level:</span>{prog.level}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg font-semibold text-sm
                bg-brand-orange text-white hover:bg-brand-orange-light transition-all duration-300
                hover:shadow-[0_0_24px_rgba(242,101,34,0.4)]"
            >
              Request a Training Programme
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════ CTA STRIP */}
      <section
        className="relative py-20 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #1F3452 0%, #0B1628 100%)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(242,101,34,0.07) 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display font-bold text-white mb-5"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)" }}
          >
            Ready to connect intelligence to outcomes?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-gray-300 text-base mb-8 leading-relaxed"
          >
            Talk to a NEXUS consultant about your specific challenge. No templates, no generic pitches — just a focused conversation about what could change.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-sm
                bg-brand-orange text-white hover:bg-brand-orange-light transition-all duration-300
                hover:shadow-[0_0_28px_rgba(242,101,34,0.45)]"
            >
              Engage NEXUS
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="/"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold text-sm
                border border-white/20 text-gray-200 hover:border-white/40 hover:text-white transition-all duration-300"
            >
              Back to TAVAS Labs
            </a>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
