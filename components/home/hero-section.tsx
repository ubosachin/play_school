import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import { CloudDecoration, StarDecoration, BalloonDecoration } from "@/components/decorations"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background py-12 sm:py-16 lg:py-24">
      {/* Decorations - hidden on small screens for cleaner look */}
      <CloudDecoration className="absolute top-8 left-4 w-20 h-10 sm:w-24 sm:h-12 text-primary/20 hidden sm:block" />
      <CloudDecoration className="absolute top-16 right-8 w-24 h-12 sm:w-32 sm:h-16 text-primary/15 hidden sm:block" />
      <StarDecoration className="absolute top-24 left-1/4 w-5 h-5 sm:w-6 sm:h-6 text-secondary animate-pulse hidden md:block" />
      <StarDecoration className="absolute bottom-24 right-1/4 w-6 h-6 sm:w-8 sm:h-8 text-secondary animate-pulse delay-300 hidden md:block" />
      <BalloonDecoration className="absolute top-32 right-16 w-8 h-12 sm:w-10 sm:h-15 text-accent/40 hidden lg:block" />
      <BalloonDecoration className="absolute bottom-16 left-12 w-6 h-10 sm:w-8 sm:h-12 text-success/40 hidden lg:block" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left">
            <span className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-secondary/20 text-secondary-foreground text-xs sm:text-sm font-medium mb-4">
              Admissions Open for 2026-27
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6 text-balance leading-tight">
              A Happy Place to <span className="text-primary">Learn</span>, <span className="text-accent">Play</span> &{" "}
              <span className="text-success">Grow</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0 text-pretty">
              Safe, caring and fun environment for kids aged 2-6 years. Where every child is a shining star!
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold text-base px-6 sm:px-8"
                asChild
              >
                <Link href="/admissions">Book a Visit</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-base bg-transparent"
                asChild
              >
                <a href="tel:+919876543210">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>

          <div className="relative mt-8 lg:mt-0">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl aspect-[4/3]">
              <Image
                src="/happy-diverse-children-playing-and-learning-togeth.jpg"
                alt="Happy children learning and playing at Little Stars Play School"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                priority
              />
            </div>
            {/* Floating badge - repositioned for mobile */}
            <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 bg-background rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-3 sm:p-4 border border-border">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-success/20 flex items-center justify-center">
                  <span className="text-xl sm:text-2xl">🏆</span>
                </div>
                <div>
                  <p className="font-display font-bold text-foreground text-sm sm:text-base">10+ Years</p>
                  <p className="text-xs sm:text-sm text-muted-foreground">of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
