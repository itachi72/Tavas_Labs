"use client";

import { motion } from "framer-motion";

const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const SERVICES = [
  {
    tag: "TAVAS NEXUS",
    title: "Consulting",
    subtitle: "Expert AI Advisory",
    desc: "Strategic and technical consulting for governments and industries – from AI strategy to hands-on implementation. Everything from Strategy to Scale.",
    accentColor: "#F26522",
    borderColor: "rgba(242,101,34,0.30)",
    iconFile: "consulting",
    href: "/nexus",
  },
  {
    tag: "AI & DIGITAL SKILLS",
    title: "Training",
    subtitle: "Building Internal Capability",
    desc: "Bespoke training programmes for teams and leaders – building the internal capability to sustain transformation.",
    accentColor: "#60A5FA",
    borderColor: "rgba(96,165,250,0.28)",
    iconFile: "training",
    href: "#contact",
  },
  {
    tag: "INTELLIGENT PLATFORMS",
    title: "Tools & Products",
    subtitle: "Proprietary SaaS & AI tools",
    desc: "Proprietary SaaS tools and AI-powered products built on our four-pillar framework – ready to deploy.",
    accentColor: "#F26522",
    borderColor: "rgba(242,101,34,0.30)",
    iconFile: "tools",
    href: "#contact",
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
      {/* Icon + Tag row */}
      <div className="flex items-center gap-4 mb-5">
        <img
          src={`${BASE}/${service.iconFile}.png`}
          alt=""
          className="w-14 h-14 object-contain flex-shrink-0"
          aria-hidden="true"
        />
        <p
          className="text-gradient-orange font-mono tracking-[0.25em] uppercase leading-tight"
          style={{ fontSize: "25px" }}
        >
          {service.tag}
        </p>
      </div>

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
        href={service.href}
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
