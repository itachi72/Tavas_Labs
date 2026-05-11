import Navbar               from "@/components/Navbar";
import HeroSection          from "@/components/HeroSection";
import TaglineSection       from "@/components/TaglineSection";
import ContentPreviewSection from "@/components/ContentPreviewSection";
import StatsSection         from "@/components/StatsSection";
import PillarsSection       from "@/components/PillarsSection";
import ServiceLinesSection  from "@/components/ServiceLinesSection";
import ThreeSectorsSection  from "@/components/ThreeSectorsSection";
import IndustriesSection    from "@/components/IndustriesSection";
import EngagementSection    from "@/components/EngagementSection";
import WhyTavas             from "@/components/WhyTavas";
import EngageSection        from "@/components/EngageSection";
import Footer               from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="relative overflow-hidden">
      <Navbar />
      <HeroSection />              {/* Full-screen video hero */}
      <TaglineSection />           {/* Civilizational intelligence */}
      <ContentPreviewSection />    {/* 5C Strategy wheel */}
      <StatsSection />             {/* 4 Core Pillars · 3 Sectors · ∞ Possibilities */}
      <PillarsSection />           {/* Design · Simulate · Optimise · Sustain */}
      <ServiceLinesSection />      {/* Consulting · Training · Tools & Products */}
      <ThreeSectorsSection />      {/* Government · Industry · Academia */}
      <IndustriesSection />        {/* 7 Industries */}
      <EngagementSection />        {/* Flexible. Outcome-Focused. */}
      <WhyTavas />                 {/* Why Us / DSOS */}
      <EngageSection />            {/* Contact Us */}
      <Footer />
    </main>
  );
}
