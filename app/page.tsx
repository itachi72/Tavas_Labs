import Navbar                from "@/components/Navbar";
import HeroSection           from "@/components/HeroSection";
import TaglineSection        from "@/components/TaglineSection";
import ContentPreviewSection from "@/components/ContentPreviewSection";
import PillarsSection        from "@/components/PillarsSection";
import EngagementSection     from "@/components/EngagementSection";
import WhyTavas              from "@/components/WhyTavas";
import EngageSection         from "@/components/EngageSection";
import Footer                from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <HeroSection />         {/* Full-screen video hero */}
      <TaglineSection />      {/* "From Ideation to Monetisation" */}
      <ContentPreviewSection />
      <PillarsSection />      {/* Design · Simulate · Optimise · Sustain */}
      <EngagementSection />   {/* Slide 26 — Retained / Projects / Outcome */}
      <WhyTavas />            {/* Why Us */}
      <EngageSection />       {/* Contact Us */}
      <Footer />
    </main>
  );
}
