import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
// import { MobileCTA } from "@/components/mobile-cta"
import { Button } from "@/components/ui/button"
import { Clock, BookOpen, Palette, Music, Users, Lightbulb, ArrowRight } from "lucide-react"
import { StarDecoration, CloudDecoration } from "@/components/decorations"

export const metadata: Metadata = {
  title: "Our Programs | Little Stars Play School",
  description:
    "Explore our age-appropriate programs for children aged 2-6 years. Nursery, LKG, and UKG classes designed to nurture every child's unique potential.",
}

const programs = [
  {
    id: "nursery",
    name: "Nursery",
    age: "Age 2-3 Years",
    tagline: "First Steps to Learning",
    description:
      "A gentle introduction to the world of learning through play. Our nursery program focuses on helping toddlers adjust to a school environment while developing basic motor skills, language, and social abilities.",
    src: "/toddlers-playing-with-colorful-blocks-in-nursery-c.jpg",
    color: "bg-primary",
    colorLight: "bg-primary/10",
    textColor: "text-primary",
    timings: "9:00 AM - 12:00 PM",
    outcomes: [
      "Develop fine and gross motor skills",
      "Learn basic vocabulary and communication",
      "Build social skills through group activities",
      "Explore colors, shapes, and textures",
      "Develop independence and self-help skills",
    ],
    activities: [
      { icon: Palette, label: "Art & Craft" },
      { icon: Music, label: "Rhymes & Songs" },
      { icon: Users, label: "Circle Time" },
      { icon: Lightbulb, label: "Sensory Play" },
    ],
  },
  {
    id: "lkg",
    name: "LKG",
    age: "Age 3-4 Years",
    tagline: "Building Foundations",
    description:
      "Our LKG program builds on early learning foundations with a structured yet fun curriculum. Children develop pre-reading and pre-math skills while continuing to explore the world through play and discovery.",
    src: "/preschool-children-learning-alphabet-with-teacher.jpg",
    color: "bg-accent",
    colorLight: "bg-accent/10",
    textColor: "text-accent",
    timings: "9:00 AM - 1:00 PM",
    outcomes: [
      "Recognize letters and basic sight words",
      "Count and recognize numbers up to 50",
      "Develop pre-writing and pencil grip skills",
      "Understand basic concepts of time and seasons",
      "Build confidence through presentations",
    ],
    activities: [
      { icon: BookOpen, label: "Storytime" },
      { icon: Palette, label: "Creative Arts" },
      { icon: Music, label: "Music & Dance" },
      { icon: Users, label: "Group Projects" },
    ],
  },
  {
    id: "ukg",
    name: "UKG",
    age: "Age 4-6 Years",
    tagline: "Ready for School",
    description:
      "Our comprehensive UKG program prepares children for primary school. With a focus on reading, writing, and critical thinking, children develop the academic and social skills needed for a smooth transition to formal education.",
    src: "/kindergarten-children-reading-books-together.jpg",
    color: "bg-success",
    colorLight: "bg-success/10",
    textColor: "text-success",
    timings: "9:00 AM - 2:00 PM",
    outcomes: [
      "Read simple sentences and stories",
      "Write alphabets, numbers, and simple words",
      "Solve basic addition and subtraction",
      "Develop logical thinking and problem-solving",
      "Build strong social and emotional skills",
    ],
    activities: [
      { icon: BookOpen, label: "Reading Corner" },
      { icon: Lightbulb, label: "STEM Activities" },
      { icon: Palette, label: "Art Projects" },
      { icon: Users, label: "Show & Tell" },
    ],
  },
]

export default function ProgramsPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-success/10 to-background overflow-hidden">
          <CloudDecoration className="absolute top-8 left-8 w-20 sm:w-28 h-10 sm:h-14 text-success/20 hidden sm:block" />
          <StarDecoration className="absolute bottom-16 right-12 w-6 sm:w-8 h-6 sm:h-8 text-secondary animate-pulse hidden sm:block" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
                Our Programs
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground text-pretty">
                Age-appropriate programs designed to nurture every child's unique potential through play-based learning
                and structured activities.
              </p>
            </div>
          </div>
        </section>

        {/* Programs List */}
        {programs.map((program, index) => (
          <section
            key={program.id}
            id={program.id}
            className={`py-12 sm:py-16 lg:py-24 ${index % 2 === 1 ? "bg-muted/50" : ""}`}
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className={`relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
                    <Image
                      src={program.src}
                      alt={`${program.name} program at Little Stars`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </div>
                  <div
                    className={`absolute -bottom-3 sm:-bottom-4 ${index % 2 === 1 ? "-left-3 sm:-left-4" : "-right-3 sm:-right-4"} ${program.color} text-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-lg`}
                  >
                    <p className="font-display text-lg sm:text-2xl font-bold">{program.age}</p>
                  </div>
                </div>

                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <span
                    className={`inline-block px-3 sm:px-4 py-1 sm:py-1.5 rounded-full ${program.colorLight} ${program.textColor} text-xs sm:text-sm font-medium mb-3 sm:mb-4`}
                  >
                    {program.tagline}
                  </span>
                  <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                    {program.name}
                  </h2>
                  <p className="text-muted-foreground mb-5 sm:mb-6 text-sm sm:text-base">{program.description}</p>

                  {/* Timings */}
                  <div className="flex items-center gap-3 mb-5 sm:mb-6 p-3 sm:p-4 bg-background rounded-lg sm:rounded-xl border border-border">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-muted flex items-center justify-center">
                      <Clock className={`w-4 h-4 sm:w-5 sm:h-5 ${program.textColor}`} />
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-muted-foreground">School Timings</p>
                      <p className="font-semibold text-foreground text-sm sm:text-base">{program.timings}</p>
                    </div>
                  </div>

                  {/* Activities */}
                  <div className="mb-5 sm:mb-6">
                    <h4 className="font-display font-semibold text-foreground mb-2 sm:mb-3 text-sm sm:text-base">
                      Daily Activities
                    </h4>
                    <div className="grid grid-cols-2 gap-2 sm:gap-3">
                      {program.activities.map((activity, actIndex) => (
                        <div key={actIndex} className="flex items-center gap-2 p-2 sm:p-3 bg-muted rounded-lg">
                          <activity.icon className={`w-4 h-4 sm:w-5 sm:h-5 ${program.textColor}`} />
                          <span className="text-xs sm:text-sm font-medium text-foreground">{activity.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Learning Outcomes */}
                  <div className="mb-5 sm:mb-6">
                    <h4 className="font-display font-semibold text-foreground mb-2 sm:mb-3 text-sm sm:text-base">
                      Learning Outcomes
                    </h4>
                    <ul className="space-y-2">
                      {program.outcomes.map((outcome, outIndex) => (
                        <li key={outIndex} className="flex items-start gap-2 text-muted-foreground text-xs sm:text-sm">
                          <svg
                            className={`w-4 h-4 sm:w-5 sm:h-5 ${program.textColor} flex-shrink-0 mt-0.5`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>{outcome}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button
                    className={`${program.color} text-white hover:opacity-90 font-semibold gap-2 w-full sm:w-auto`}
                    asChild
                  >
                    <Link href="/admissions">
                      Enroll Now <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-secondary-foreground mb-3 sm:mb-4">
              Not Sure Which Program is Right?
            </h2>
            <p className="text-secondary-foreground/80 max-w-2xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base">
              Schedule a visit to our campus and let our counselors help you choose the perfect program for your child.
            </p>
            <Button
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 font-semibold w-full sm:w-auto"
              asChild
            >
              <Link href="/admissions">Schedule a Visit</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      {/* <MobileCTA /> */}
    </div>
  )
}
