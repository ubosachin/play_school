import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

const programs = [
  {
    name: "Nursery",
    age: "Age 2-3 Years",
    description: "A gentle introduction to school life through play, songs, and sensory activities.",
    color: "bg-primary",
    image: "/toddlers-playing-with-colorful-blocks-in-nursery-c.jpg",
  },
  {
    name: "LKG",
    age: "Age 3-4 Years",
    description: "Building foundational skills in language, numbers, and social interaction.",
    color: "bg-accent",
    image: "/preschool-children-learning-alphabet-with-teacher.jpg",
  },
  {
    name: "UKG",
    age: "Age 4-6 Years",
    description: "Preparing children for primary school with reading, writing, and critical thinking.",
    color: "bg-success",
    image: "/kindergarten-children-reading-books-together.jpg",
  },
]

export function ProgramsSection() {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Our Programs</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Age-appropriate programs designed to nurture every child's unique potential.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 bg-card"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={program.image || "/placeholder.svg"}
                  alt={`${program.name} program at Little Stars`}
                  className="w-full h-full object-cover"
                />
                <div
                  className={`absolute top-4 left-4 px-3 py-1 rounded-full ${program.color} text-white text-sm font-medium`}
                >
                  {program.age}
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="font-display text-2xl font-bold text-card-foreground mb-2">{program.name}</h3>
                <p className="text-muted-foreground mb-4">{program.description}</p>
                <Link
                  href={`/programs#${program.name.toLowerCase()}`}
                  className="inline-flex items-center gap-1 text-primary font-medium hover:gap-2 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold bg-transparent"
            asChild
          >
            <Link href="/programs">View All Programs</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
