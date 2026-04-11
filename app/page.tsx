/* =============================================================================
 * HOME PAGE — TAVAS Labs
 * =============================================================================
 *
 * This is the entry point for the "/" route.
 * It assembles all section components in order.
 *
 * SECTION ORDER:
 *   1. <Navbar>          — sticky top navigation
 *   2. <HeroSection>     — four monolith pillars + tagline + CTAs
 *   3. <TaglineSection>  — "The AI companion..." full-width statement
 *   4. <PillarsSection>  — detailed breakdown of the four pillars
 *   5. <SectorsSection>  — industry verticals grid
 *   6. <WhyTavas>        — differentiators / value props
 *   7. <EngageSection>   — call-to-action / contact strip
 *   8. <Footer>          — links, legal, socials
 *
 * To reorder sections: just move the JSX elements.
 * To remove a section: comment it out or delete the line.
 * ============================================================================= */

import Navbar         from "@/components/Navbar";
import HeroSection    from "@/components/HeroSection";
import TaglineSection from "@/components/TaglineSection";
import PillarsSection from "@/components/PillarsSection";
import SectorsSection from "@/components/SectorsSection";
import WhyTavas       from "@/components/WhyTavas";
import EngageSection  from "@/components/EngageSection";
import Footer         from "@/components/Footer";

export default function HomePage() {
  return (
    /*
     * The <main> wrapper uses relative positioning so absolutely-positioned
     * decorative elements (noise overlays, glow orbs) are scoped inside.
     */
    <main className="relative overflow-hidden">
      <Navbar />
      <HeroSection />
      <TaglineSection />
      <PillarsSection />
      <SectorsSection />
      <WhyTavas />
      <EngageSection />
      <Footer />
    </main>
  );
}
