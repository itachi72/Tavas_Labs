import Link from "next/link";

export default function ContentPreviewSection() {
  return (
    <section className="relative py-20 sm:py-28 bg-[#0E1B2F] overflow-hidden">
      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-brand-orange/90 mb-4">
          Featured content
        </p>
        <h2 className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          A deeper look at our thinking and outcomes.
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-gray-300 leading-relaxed mb-10">
          Explore the ideas and impact behind TAVAS Labs: how we design, simulate, and optimise digital twin solutions for governments, industries, and academia.
        </p>
        <Link
          href="/content"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-orange px-7 py-3 text-base font-semibold text-white shadow-[0_18px_50px_rgba(242,101,34,0.25)] transition hover:bg-brand-orange-light"
        >
          Read the full content page
          <span aria-hidden="true">→</span>
        </Link>
      </div>
    </section>
  );
}
