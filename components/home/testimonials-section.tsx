import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Priya Sharma",
    relation: "Mother of Aarav, Nursery",
    content:
      "Little Stars has been a blessing for our family. Aarav loves going to school every day. The teachers are so caring and the environment is perfect for little ones.",
    avatar: "/indian-woman-portrait-smiling.jpg",
  },
  {
    name: "Rahul Gupta",
    relation: "Father of Ananya, LKG",
    content:
      "The transformation in Ananya's confidence and communication skills is remarkable. The play-based learning approach really works wonders!",
    avatar: "/indian-man-professional-portrait.png",
  },
  {
    name: "Meera Patel",
    relation: "Mother of Arjun, UKG",
    content:
      "Safe, hygienic, and filled with love. Arjun has learned so much and made wonderful friends. Highly recommend Little Stars to all parents!",
    avatar: "/indian-woman-portrait-traditional.jpg",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">What Parents Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Hear from our happy families about their experience with Little Stars.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-lg bg-card">
              <CardContent className="p-6">
                <Quote className="w-10 h-10 text-primary/20 mb-4" />
                <p className="text-muted-foreground mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-display font-bold text-card-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.relation}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
