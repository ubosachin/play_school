import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, ArrowRight } from "lucide-react"
import { StarDecoration } from "@/components/decorations"

export function CTASection() {
  return (
    <section className="relative py-16 lg:py-24 bg-primary overflow-hidden">
      {/* Decorations */}
      <StarDecoration className="absolute top-8 left-8 w-8 h-8 text-secondary opacity-50" />
      <StarDecoration className="absolute bottom-8 right-8 w-6 h-6 text-secondary opacity-50" />
      <StarDecoration className="absolute top-1/2 right-1/4 w-10 h-10 text-secondary opacity-30" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
          Ready to Give Your Child the Best Start?
        </h2>
        <p className="text-primary-foreground/90 text-lg max-w-2xl mx-auto mb-8">
          Schedule a visit today and see why Little Stars is the perfect place for your little one to learn, play, and
          grow.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-semibold text-base px-8 gap-2"
            asChild
          >
            <Link href="/admissions">
              Book a Visit <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-semibold text-base gap-2 bg-transparent"
            asChild
          >
            <a href="tel:+919876543210">
              <Phone className="w-5 h-5" />
              +91 98765 43210
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
