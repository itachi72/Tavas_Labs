"use client";

import { motion } from "framer-motion";

const SERVICES = [
  {
    tag: "TAVAS NEXUS",
    title: "Consulting",
    subtitle: "Expert AI Advisory",
    desc: "Strategic and technical consulting for governments and industries – from AI strategy to hands-on implementation. Everything from Strategy to Scale.",
    accentColor: "#F26522",
    borderColor: "rgba(242,101,34,0.30)",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="16" />
        <line x1="10" y1="14" x2="14" y2="14" />
      </svg>
    ),
  },
  {
    tag: "AI & DIGITAL SKILLS",
    title: "Training",
    subtitle: "Building Internal Capability",
    desc: "Bespoke training programmes for teams and leaders – building the internal capability to sustain transformation.",
    accentColor: "#60A5FA",
    borderColor: "rgba(96,165,250,0.28)",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
  },
  {
    tag: "INTELLIGENT PLATFORMS",
    title: "Tools & Products",
    subtitle: "Proprietary SaaS & AI tools",
    desc: "Proprietary SaaS tools and AI-powered products built on our four-pillar framework – ready to deploy.",
    accentColor: "#F26522",
    borderColor: "rgba(242,101,34,0.30)",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="9" y="9" width="6" height="6" />
        <path d="M9 9H5M9 15H5M15 9h4M15 15h4M9 5V3M15 5V3M9 21v-2M15 21v-2M5 9H3M5 15H3M21 9h-2M21 15h-2" />
      </svg>
    ),
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof SERVICES)[number];
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6, transition: { duration: 0.25 } }}
      className="group relative rounded-2xl p-6 sm:p-8 flex flex-col cursor-default"
      style={{
        background: "rgba(8,18,38,0.72)",
        border: `1px solid ${service.borderColor}`,
        boxShadow: "0 4px 24px rgba(0,0,0,0.35)",
        backdropFilter: "blur(12px)",
      }}
    >
      {/* Icon box */}
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
        style={{
          background: `${service.accentColor}18`,
          border: `1px solid ${service.borderColor}`,
          color: service.accentColor,
        }}
      >
        {service.icon}
      </div>

      {/* Tag */}
      <p
        className="text-[10px] font-mono tracking-[0.25em] uppercase mb-3"
        style={{ color: service.accentColor }}
      >
        {service.tag}
      </p>

      {/* Title */}
      <h3 className="font-display font-bold text-2xl sm:text-3xl text-white leading-tight mb-1">
        {service.title}
      </h3>

      {/* Subtitle */}
      <p className="text-sm text-gray-400 mb-4">{service.subtitle}</p>

      {/* Description */}
      <p className="text-base leading-relaxed text-gray-300 mb-6 flex-1">{service.desc}</p>

      {/* Know more */}
      <a
        href="#contact"
        className="mt-auto inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 group/btn"
        style={{ color: service.accentColor }}
      >
        Know more
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          className="transition-transform duration-200 group-hover/btn:translate-x-1"
          aria-hidden="true"
        >
          <path
            d="M1 7h12M7 1l6 6-6 6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </a>

      {/* Hover accent line */}
      <div
        className="absolute bottom-0 left-6 right-6 h-px rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, ${service.accentColor}, transparent)`,
        }}
        aria-hidden="true"
      />
    </motion.article>
  );
}

export default function ServiceLinesSection() {
  return (
    <section
      id="services"
      className="relative py-14 sm:py-24 lg:py-32 overflow-hidden"
      style={{ background: "#0E1A2E" }}
    >
      {/* Orange radial bloom — top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "70%",
          height: "50%",
          background:
            "radial-gradient(ellipse 60% 55% at 50% 0%, rgba(242,101,34,0.13) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8" style={{ zIndex: 1 }}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10 sm:mb-16"
        >
          <p className="text-2xl font-mono tracking-[0.3em] uppercase mb-3 text-brand-orange">
            Our Services
          </p>
          <h2
            className="font-display font-bold text-white leading-tight"
            style={{ fontSize: "clamp(1.9rem, 4vw, 3.2rem)" }}
          >
            Three Service Lines —{" "}
            <span className="text-gradient-orange">One Integrated Partner</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
