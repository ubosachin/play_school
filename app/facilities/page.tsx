import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MobileCTA } from "@/components/mobile-cta"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Monitor, Trees, Shield, Sparkles, Bus, Utensils, Camera, Wind, CheckCircle2 } from "lucide-react"
import { StarDecoration, CloudDecoration } from "@/components/decorations"

export const metadata: Metadata = {
  title: "Our Facilities | Little Stars Play School",
  description:
    "Explore our world-class facilities including smart classrooms, outdoor play areas, CCTV security, and more. Safe and hygienic environment for your child.",
}

const facilities = [
  {
    icon: Monitor,
    title: "Smart Classrooms",
    description:
      "Air-conditioned classrooms equipped with interactive digital boards, age-appropriate furniture, and colorful learning materials to make education engaging and fun.",
    src: "/modern-preschool-smart-classroom-with-interactive-.jpg",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Trees,
    title: "Activity Zone",
    description:
      "A dedicated indoor activity area for music, dance, yoga, and creative play. Padded floors and child-safe equipment ensure worry-free fun.",
    src: "/happy-diverse-children-playing-and-learning-togeth.jpg",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Trees,
    title: "Outdoor Play Area",
    description:
      "A spacious playground with swings, slides, climbing frames, and sandpit. Soft rubber flooring provides a safe surface for active play.",
    src: "/children-playing-in-colorful-outdoor-playground.jpg",
    color: "bg-success/10 text-success",
  },
  {
    icon: Camera,
    title: "CCTV & Security",
    description:
      "24/7 CCTV surveillance across all areas. Secure entry points with visitor management system and trained security personnel.",
    src: "/children-playing-educational-games-in-classroom.jpg",
    color: "bg-destructive/10 text-destructive",
  },
  {
    icon: Wind,
    title: "Healthy Environment",
    description:
      "Well-ventilated spaces with air purifiers, natural lighting, and indoor plants. Regular sanitization ensures a clean and healthy environment.",
    src: "/clean-and-colorful-preschool-activity-room.jpg",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Bus,
    title: "Transport Facility",
    description:
      "Safe and comfortable school transport with GPS tracking, female attendants, and experienced drivers covering all major areas of the city.",
    src: "/colorful-modern-preschool-building-exterior-with-p.jpg",
    color: "bg-secondary/10 text-secondary-foreground",
  },
]

const safetyFeatures = [
  "24/7 CCTV monitoring in all areas",
  "Trained and verified staff with background checks",
  "Child-safe furniture with rounded edges",
  "First-aid trained teachers and medical kit",
  "Fire safety equipment and regular drills",
  "Secure entry with visitor management",
  "GPS-enabled school transport",
  "Emergency contact protocols in place",
]

const hygieneFeatures = [
  "Daily sanitization of all surfaces",
  "Regular deep cleaning of premises",
  "Clean drinking water with RO purifiers",
  "Hygienic washrooms cleaned multiple times",
  "Air purifiers in all classrooms",
  "Healthy, nutritious meals prepared fresh",
  "Strict illness policy to prevent spread",
  "Hand hygiene stations throughout campus",
]

export default function FacilitiesPage() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-primary/10 to-background overflow-hidden">
          <CloudDecoration className="absolute top-8 right-8 w-20 sm:w-28 h-10 sm:h-14 text-primary/20 hidden sm:block" />
          <StarDecoration className="absolute bottom-16 left-12 w-6 sm:w-8 h-6 sm:h-8 text-secondary animate-pulse hidden sm:block" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
                Our Facilities
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground text-pretty">
                A world-class learning environment designed with your child's safety, comfort, and growth in mind.
              </p>
            </div>
          </div>
        </section>

        {/* Facilities Grid */}
        <section className="py-12 sm:py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
              {facilities.map((facility, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow bg-card"
                >
                  <div className="relative h-44 sm:h-48 overflow-hidden">
                    <Image
                      src={facility.src}
                      alt={facility.title}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <CardContent className="p-5 sm:p-6">
                    <div
                      className={`w-11 h-11 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl ${facility.color} flex items-center justify-center mb-3 sm:mb-4`}
                    >
                      <facility.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-card-foreground mb-2">
                      {facility.title}
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm">{facility.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Safety & Hygiene Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-destructive/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Shield className="w-7 h-7 sm:w-8 sm:h-8 text-destructive" />
              </div>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                Safety & Hygiene
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
                Your child's safety and health are our top priorities. Here's how we ensure a secure and hygienic
                environment.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
              {/* Safety */}
              <div className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg">
                <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-card-foreground">Safety Measures</h3>
                </div>
                <ul className="space-y-2 sm:space-y-3">
                  {safetyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hygiene */}
              <div className="bg-card rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-lg">
                <div className="flex items-center gap-3 sm:gap-4 mb-5 sm:mb-6">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-success/10 flex items-center justify-center">
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-success" />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-card-foreground">Hygiene Standards</h3>
                </div>
                <ul className="space-y-2 sm:space-y-3">
                  {hygieneFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-success flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Nutrition Section */}
        <section className="py-12 sm:py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-secondary/20 flex items-center justify-center mb-4 sm:mb-6">
                  <Utensils className="w-7 h-7 sm:w-8 sm:h-8 text-secondary-foreground" />
                </div>
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                  Healthy Nutrition
                </h2>
                <p className="text-muted-foreground mb-5 sm:mb-6 text-sm sm:text-base">
                  We believe that good nutrition is essential for a child's growth and learning. Our in-house kitchen
                  prepares fresh, balanced meals daily.
                </p>
                <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                  <li className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm sm:text-base">
                      Freshly prepared nutritious meals daily
                    </span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm sm:text-base">
                      Balanced diet with fruits, vegetables, and proteins
                    </span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm sm:text-base">
                      Special dietary requirements accommodated
                    </span>
                  </li>
                  <li className="flex items-start gap-2 sm:gap-3">
                    <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm sm:text-base">
                      Clean drinking water with RO purification
                    </span>
                  </li>
                </ul>
              </div>
              <div className="relative">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
                  <Image
                    src="/healthy-meals-preschool-children-eating-lunch-toge.jpg"
                    alt="Children enjoying healthy meals"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-primary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-primary-foreground mb-3 sm:mb-4">
              Want to See Our Facilities?
            </h2>
            <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base">
              Schedule a campus tour and experience our world-class facilities firsthand. See where your child will
              learn, play, and grow.
            </p>
            <Button
              size="lg"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold w-full sm:w-auto"
              asChild
            >
              <Link href="/admissions">Schedule a Campus Tour</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCTA />
    </div>
  )
}
