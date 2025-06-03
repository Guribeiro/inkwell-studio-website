import { AboutSection } from "@/templates/landing-page/sections/about-section";
import { ContactSection } from "@/templates/landing-page/sections/contact-section";
import { HeroSection } from "@/templates/landing-page/sections/hero-section";
import { PortfolioSection } from "@/templates/landing-page/sections/portfolio-section";
import { ServicesSection } from "@/templates/landing-page/sections/services-section";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground dark:bg-dark-background dark:text-dark-foreground">
      <HeroSection />
      <PortfolioSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
    </div>
  )
}