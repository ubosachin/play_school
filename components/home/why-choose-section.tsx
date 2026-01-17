import { Shield, GraduationCap, Gamepad2, Sparkles } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Shield,
    title: "Safe Campus",
    description: "24/7 CCTV surveillance, secure entry points, and trained security staff ensure your child's safety.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: GraduationCap,
    title: "Trained Teachers",
    description: "Our certified educators use proven methods to nurture curiosity and love for learning.",
    color: "bg-success/10 text-success",
  },
  {
    icon: Gamepad2,
    title: "Fun Learning Activities",
    description: "Play-based curriculum with music, art, storytelling, and interactive games.",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Sparkles,
    title: "Clean & Hygienic",
    description: "Daily sanitization, clean facilities, and healthy meals to keep children healthy and happy.",
    color: "bg-secondary/10 text-secondary-foreground",
  },
]

export function WhyChooseSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Little Stars?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            We provide the perfect foundation for your child's growth with our holistic approach to early childhood
            education.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow bg-card">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 rounded-2xl ${feature.color} flex items-center justify-center mx-auto mb-4`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="font-display text-xl font-bold text-card-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
