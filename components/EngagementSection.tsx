"use client";
/* =============================================================================
 * ENGAGEMENT SECTION — TAVAS Labs  (Slide 26)
 * =============================================================================
 * Three engagement models: Retained · Projects (featured) · Outcome
 * Layout mirrors the "Flexible. Outcome-Focused." slide.
 * ============================================================================= */

import { motion } from "framer-motion";

const MODELS = [
  {
    tag:      "ADVISOR",
    title:    "Retained",
    subtitle: "Monthly Engagement",
    features: [
      "Dedicated senior advisor",
      "Monthly strategy sessions",
      "On-demand expert access",
      "Monthly roadmap reviews",
      "Priority response SLA",
    ],
    cta:      "Enquire",
    href:     "#contact",
    featured: false,
  },
  {
    tag:      "MOST POPULAR",
    title:    "Projects",
    subtitle: "Fixed Scope & Outcome",
    features: [
      "Discover & framing workshop",
      "Defined deliverables & milestones",
      "Cross-pillar team deployed",
      "Implementation & testing",
      "Knowledge transfer included",
      "Post-delivery support",
    ],
    cta:      "Get Started",
    href:     "#contact",
    featured: true,
  },
  {
    tag:      "PARTNERSHIP",
    title:    "Outcome",
    subtitle: "Revenue & saving share",
    features: [
      "Fully aligned incentives",
      "TAVAS invests in your success",
      "Long-term embedded team",
      "Metrics-driven accountability",
      "Co-IP development",
    ],
    cta:      "Discuss",
    href:     "#contact",
    featured: false,
  },
];

export default function EngagementSection() {
  return (
    <section
      id="services"
      className="relative py-14 sm:py-24 lg:py-32 overflow-hidden"
      style={{ background: "var(--color-navy-900)" }}
    >
      {/* Subtle PCB grid texture */}
      <div className="absolute inset-0 bg-grid-overlay opacity-10 pointer-events-none" aria-hidden="true" />

      {/* Orange glow accent */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(242,101,34,0.08) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-mono tracking-[0.25em] uppercase text-brand-orange mb-3">
            IT Consulting · TAVAS Nexus · Engagement Model
          </p>
          <p
            className="font-display font-semibold text-white mb-2"
            style={{ fontSize: "clamp(1rem, 1.8vw, 1.4rem)", letterSpacing: "0.04em" }}
          >
            See our engagement models
          </p>
          <h2
            className="font-display font-bold text-white mb-4"
            style={{ fontSize: "clamp(1.5rem, 2.8vw, 2.2rem)" }}
          >
            Flexible.{" "}
            <span className="text-gradient-orange">Outcome-Focused.</span>
          </h2>
          <p className="text-gray-300 text-base max-w-xl mx-auto leading-relaxed">
            Choose the engagement model that fits
            <br />your organisation's needs and timeline.
          </p>
        </motion.div>

        {/* Cards */}
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
              {/* "Most Popular" badge */}
              {model.featured && (
                <div
                  className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-5 py-1 rounded-full
                    text-[10px] font-bold tracking-[0.18em] uppercase text-white"
                  style={{ background: "var(--color-gold)" }}
                >
                  Most Popular
                </div>
              )}

              {/* Tag */}
              <p className="text-[10px] font-mono tracking-[0.22em] uppercase text-brand-orange mb-2">
                {model.tag}
              </p>

              {/* Title */}
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-1">
                {model.title}
              </h3>
              <p className="text-sm text-gray-400 mb-7">{model.subtitle}</p>

              {/* Feature list */}
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

              {/* CTA */}
              <a
                href={model.href}
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
  );
}
