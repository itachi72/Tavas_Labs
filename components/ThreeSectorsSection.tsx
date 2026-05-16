"use client";

import { motion } from "framer-motion";

const SECTORS = [
  {
    title: "Government & Public Sector",
    subtitle: "Policy to Platform",
    desc: "Partnering with governments to digitise operations, build sovereign AI capability, and deliver citizen-centric services through intelligent infrastructure.",
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
        <path d="M3 22V12M6 22V12M9 22V12M12 22V12M15 22V12M18 22V12M21 22V12" />
        <rect x="2" y="20" width="20" height="2" />
        <path d="M2 12l10-9 10 9" />
      </svg>
    ),
  },
  {
    title: "Industry & Enterprise",
    subtitle: "Factory to Future",
    desc: "Enabling industrial enterprises to adopt AI, simulate operations, and optimise performance across complex, high-stakes environments.",
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
        <path d="M2 20h20" />
        <path d="M2 20V11l5-3v3l5-3v3l5-3V20" />
        <rect x="14" y="13" width="6" height="7" />
      </svg>
    ),
  },
  {
    title: "Academia & Research",
    subtitle: "Discovery to Deployment",
    desc: "Bridging research and real-world application – accelerating the commercialisation of frontier science into scalable, deployable solutions.",
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
        <circle cx="12" cy="12" r="2" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
];

function SectorCard({
  sector,
  index,
}: {
  sector: (typeof SECTORS)[number];
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
        border: `1px solid ${sector.borderColor}`,
        boxShadow: "0 4px 24px rgba(0,0,0,0.35)",
        backdropFilter: "blur(12px)",
      }}
    >
      {/* Icon box */}
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 flex-shrink-0"
        style={{
          background: `${sector.accentColor}18`,
          border: `1px solid ${sector.borderColor}`,
          color: sector.accentColor,
        }}
      >
        {sector.icon}
      </div>

      {/* Title */}
      <h3 className="font-display font-bold text-2xl sm:text-3xl text-white leading-tight mb-1">
        {sector.title}
      </h3>

      {/* Subtitle */}
      <p className="text-sm text-gray-400 mb-4">{sector.subtitle}</p>

      {/* Description */}
      <p className="text-base leading-relaxed text-gray-300 mb-6 flex-1">{sector.desc}</p>

      {/* Know more */}
      <a
        href="#contact"
        className="mt-auto inline-flex items-center gap-2 text-sm font-semibold transition-all duration-200 group/btn"
        style={{ color: sector.accentColor }}
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
          background: `linear-gradient(90deg, transparent, ${sector.accentColor}, transparent)`,
        }}
        aria-hidden="true"
      />
    </motion.article>
  );
}

export default function ThreeSectorsSection() {
  return (
    <section
      id="sectors"
      className="relative py-14 sm:py-24 lg:py-32 overflow-hidden"
      style={{ background: "#0B1628" }}
    >
      {/* Faint blue bloom — top left */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 45% at 15% 20%, rgba(96,165,250,0.10) 0%, transparent 65%)",
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
            Who We Serve
          </p>
          <h2
            className="font-display font-bold text-white leading-tight"
            style={{ fontSize: "clamp(1.9rem, 4vw, 3.2rem)" }}
          >
            Three Sectors.{" "}
            <span className="text-gradient-orange">One Mission.</span>
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SECTORS.map((sector, i) => (
            <SectorCard key={sector.title} sector={sector} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
