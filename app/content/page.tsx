import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StarField from "@/components/StarField";

export default function ContentPage() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />

      <section className="relative overflow-hidden bg-[#03060F] pt-32 pb-24 sm:pt-36 sm:pb-28">
        <StarField />

        <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-4xl sm:text-5xl font-mono uppercase tracking-[0.35em] text-orange-300/90 mb-6">
            तवस्
          </p>
          <h1 className="font-display font-bold text-white text-5xl sm:text-[5.5rem] leading-tight mb-8">
            Content for strategy, systems, and outcomes.
          </h1>
          <p className="mx-auto max-w-3xl text-xl sm:text-2xl text-gray-300 leading-relaxed mb-10">
            TAVAS Labs combines deep systems thinking with digital twin engineering to help organizations make stronger decisions, reduce risk, and scale with confidence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/#why-us"
              className="inline-flex items-center justify-center rounded-full bg-brand-orange px-6 py-3 text-base font-semibold text-white transition hover:bg-brand-orange-light"
            >
              Explore our approach
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3 text-base font-semibold text-white transition hover:border-brand-orange hover:text-brand-orange"
            >
              Engage with the team
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-navy-900 py-24 sm:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid gap-10 lg:grid-cols-3">
          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
            <p className="text-sm uppercase tracking-[0.35em] text-brand-orange/90 mb-4">Design</p>
            <h2 className="text-2xl font-semibold text-white mb-4">Clear architecture.</h2>
            <p className="text-base leading-relaxed text-gray-300">
              We define resilient systems and product pathways that align critical stakeholders, technical scope, and long-term value.
            </p>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
            <p className="text-sm uppercase tracking-[0.35em] text-brand-orange/90 mb-4">Simulate</p>
            <h2 className="text-2xl font-semibold text-white mb-4">Validated behavior.</h2>
            <p className="text-base leading-relaxed text-gray-300">
              Our digital twin workflows uncover hidden dynamics, expose failure modes, and accelerate confident decision-making before deployment.
            </p>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/5 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.25)]">
            <p className="text-sm uppercase tracking-[0.35em] text-brand-orange/90 mb-4">Optimise</p>
            <h2 className="text-2xl font-semibold text-white mb-4">Stronger outcomes.</h2>
            <p className="text-base leading-relaxed text-gray-300">
              We tune systems and processes with AI, simulation, and economics so they perform reliably at scale.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#08101E] py-24 sm:py-28">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-brand-orange/90 mb-4">Why this matters</p>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-white leading-tight mb-6">
            We make complex systems easier to understand, act on, and scale.
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-300 leading-relaxed mb-12">
            This page is a destination for the ideas and practical value that power TAVAS Labs — from digital twin strategy to the measurable performance improvements our clients achieve.
          </p>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-3xl bg-white/5 p-7 text-left text-gray-200">
              <h3 className="font-semibold text-white mb-3">Trusted across sectors</h3>
              <p className="text-sm leading-relaxed text-gray-300">
                We work with governments, universities, and deep-tech leaders to deliver systems that are both innovative and dependable.
              </p>
            </div>
            <div className="rounded-3xl bg-white/5 p-7 text-left text-gray-200">
              <h3 className="font-semibold text-white mb-3">Practically grounded</h3>
              <p className="text-sm leading-relaxed text-gray-300">
                Our content is rooted in outcomes: reduced risk, faster validation, improved cost efficiency, and sustainable technical roadmaps.
              </p>
            </div>
            <div className="rounded-3xl bg-white/5 p-7 text-left text-gray-200">
              <h3 className="font-semibold text-white mb-3">Built for scale</h3>
              <p className="text-sm leading-relaxed text-gray-300">
                We help teams move from prototype thinking to operational systems that endure under real-world constraints.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
