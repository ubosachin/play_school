import type { Metadata } from "next"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MobileCTA } from "@/components/mobile-cta"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Heart, BookOpen, Sparkles, Award, Users } from "lucide-react"
import { StarDecoration, CloudDecoration } from "@/components/decorations"

export const metadata: Metadata = {
  title: "About Us | Little Stars Play School",
  description:
    "Learn about Little Stars Play School's mission, values, and dedicated team of educators. We provide a safe, caring environment for children aged 2-6 years.",
}

const values = [
  {
    icon: Shield,
    title: "Safety First",
    description:
      "Your child's safety is our top priority. From secure premises to trained staff, we ensure a protected environment.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Heart,
    title: "Loving Care",
    description: "Every child receives individual attention and affection, making them feel valued and secure.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: BookOpen,
    title: "Joyful Learning",
    description: "We believe learning should be fun. Our play-based approach makes education an exciting adventure.",
    color: "bg-success/10 text-success",
  },
  {
    icon: Sparkles,
    title: "Building Confidence",
    description: "We nurture self-esteem and encourage children to express themselves freely and confidently.",
    color: "bg-secondary/10 text-secondary-foreground",
  },
]

const teachers = [
  {
    name: "Mrs. Sunita Verma",
    role: "Principal & Founder",
    experience: "15+ years in Early Childhood Education",
    query: "indian woman principal educator professional portrait",
  },
  {
    name: "Ms. Anjali Mehta",
    role: "Head Teacher - Nursery",
    experience: "8 years with toddlers",
    query: "young indian female teacher smiling professional portrait",
  },
  {
    name: "Mrs. Priya Nair",
    role: "Senior Teacher - LKG & UKG",
    experience: "10 years in primary education",
    query: "indian woman teacher classroom professional portrait",
  },
]

const promises = [
  "A safe and nurturing environment for your child",
  "Regular updates on your child's progress and activities",
  "Trained and caring teachers who understand children",
  "Clean, hygienic facilities maintained daily",
  "Open communication with parents at all times",
  "Focus on holistic development - mind, body, and spirit",
]

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-accent/10 to-background overflow-hidden">
          <CloudDecoration className="absolute top-8 right-8 w-20 sm:w-28 h-10 sm:h-14 text-accent/20 hidden sm:block" />
          <StarDecoration className="absolute bottom-16 left-12 w-6 sm:w-8 h-6 sm:h-8 text-secondary animate-pulse hidden sm:block" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
                About Little Stars
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground text-pretty">
                Founded with a dream to create a happy learning space for children, Little Stars Play School has been
                nurturing young minds for over 10 years.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section className="py-12 sm:py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div>
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground text-sm sm:text-base">
                  <p>
                    Little Stars Play School was founded in 2014 by Mrs. Sunita Verma, a passionate educator who
                    believed that every child deserves a happy start to their educational journey.
                  </p>
                  <p>
                    What started as a small classroom with just 15 children has grown into a thriving community of over
                    200 happy learners. Our success comes from our unwavering commitment to providing quality early
                    childhood education in a safe, loving environment.
                  </p>
                  <p>
                    Today, we are proud to be one of the most trusted play schools in the city, with a team of dedicated
                    teachers who treat every child as their own.
                  </p>
                </div>
              </div>
              <div className="relative mt-6 lg:mt-0">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
                  <Image
                    src="/colorful-modern-preschool-building-exterior-with-p.jpg"
                    alt="Little Stars Play School building"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-4 sm:-bottom-6 -right-2 sm:-right-6 bg-primary text-primary-foreground p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-lg">
                  <p className="font-display text-2xl sm:text-4xl font-bold">10+</p>
                  <p className="text-xs sm:text-sm">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Award className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
              </div>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
                Our Mission
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground text-pretty">
                To provide a warm, safe, and stimulating environment where children can learn through play, develop
                essential life skills, and build a strong foundation for lifelong learning. We aim to nurture confident,
                curious, and compassionate individuals who are ready to explore the world.
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-12 sm:py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                Our Core Values
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
                These values guide everything we do at Little Stars Play School.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {values.map((value, index) => (
                <Card key={index} className="border-none shadow-lg bg-card">
                  <CardContent className="p-5 sm:p-6 text-center">
                    <div
                      className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl ${value.color} flex items-center justify-center mx-auto mb-3 sm:mb-4`}
                    >
                      <value.icon className="w-7 h-7 sm:w-8 sm:h-8" />
                    </div>
                    <h3 className="font-display text-lg sm:text-xl font-bold text-card-foreground mb-2">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-xs sm:text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Teachers Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Users className="w-7 h-7 sm:w-8 sm:h-8 text-success" />
              </div>
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
                Meet Our Teachers
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
                Our team of qualified and caring educators is dedicated to bringing out the best in every child.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
              {teachers.map((teacher, index) => (
                <Card key={index} className="overflow-hidden border-none shadow-lg bg-card">
                  <div className="relative h-56 sm:h-64 overflow-hidden">
                    <Image
                      src={`/.jpg?key=q6xwk&height=256&width=340&query=${encodeURIComponent(teacher.query)}`}
                      alt={teacher.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                    />
                  </div>
                  <CardContent className="p-5 sm:p-6 text-center">
                    <h3 className="font-display text-lg sm:text-xl font-bold text-card-foreground mb-1">
                      {teacher.name}
                    </h3>
                    <p className="text-primary font-medium mb-2 text-sm sm:text-base">{teacher.role}</p>
                    <p className="text-muted-foreground text-xs sm:text-sm">{teacher.experience}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Promise Section */}
        <section className="py-12 sm:py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              <div className="relative order-2 lg:order-1">
                <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl aspect-[4/3]">
                  <Image
                    src="/teacher-with-diverse-children-learning-together-in.jpg"
                    alt="Teacher with children at Little Stars"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4 sm:mb-6">
                  Our Promise to Parents
                </h2>
                <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base">
                  When you choose Little Stars, you're choosing a partner in your child's early development. Here's what
                  we promise to deliver:
                </p>
                <ul className="space-y-3 sm:space-y-4">
                  {promises.map((promise, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-success flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg
                          className="w-3 h-3 sm:w-4 sm:h-4 text-success-foreground"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-foreground text-sm sm:text-base">{promise}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCTA />
    </div>
  )
}
