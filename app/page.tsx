import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
// import { MobileCTA } from "@/components/mobile-cta"
import { HeroSection } from "@/components/home/hero-section"
import { WhyChooseSection } from "@/components/home/why-choose-section"
import { ProgramsSection } from "@/components/home/programs-section"
import { FacilitiesSection } from "@/components/home/facilities-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { GallerySection } from "@/components/home/gallery-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <WhyChooseSection />
        <ProgramsSection />
        <FacilitiesSection />
        <TestimonialsSection />
        <GallerySection />
        <CTASection />
      </main>
      <Footer />
      {/* <MobileCTA /> */}
    </div>
  )
}
