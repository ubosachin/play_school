import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Monitor, Trees, Shield, Utensils } from "lucide-react"

const facilities = [
  {
    icon: Monitor,
    title: "Smart Classrooms",
    color: "text-primary",
  },
  {
    icon: Trees,
    title: "Outdoor Play Area",
    color: "text-success",
  },
  {
    icon: Shield,
    title: "CCTV & Security",
    color: "text-accent",
  },
  {
    icon: Utensils,
    title: "Healthy Meals",
    color: "text-secondary-foreground",
  },
]

const facilityImages = [
  { src: "/modern-preschool-smart-classroom-with-interactive-.jpg", alt: "Smart classroom" },
  { src: "/children-playing-in-colorful-outdoor-playground.jpg", alt: "Outdoor play area" },
  { src: "/clean-and-colorful-preschool-activity-room.jpg", alt: "Activity room" },
  { src: "/healthy-lunch-served-to-preschool-children.jpg", alt: "Healthy meals" },
]

export function FacilitiesSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              World-Class Facilities
            </h2>
            <p className="text-muted-foreground mb-6 sm:mb-8 text-sm sm:text-base text-pretty">
              Our campus is designed with your child's safety, comfort, and learning in mind. Every corner is crafted to
              inspire curiosity and joy.
            </p>

            <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {facilities.map((facility, index) => (
                <div key={index} className="flex items-center gap-2 sm:gap-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-background shadow-md flex items-center justify-center flex-shrink-0">
                    <facility.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${facility.color}`} />
                  </div>
                  <span className="font-medium text-foreground text-sm sm:text-base">{facility.title}</span>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold w-full sm:w-auto"
              asChild
            >
              <Link href="/facilities">Explore Facilities</Link>
            </Button>
          </div>

          <div className="relative mt-6 lg:mt-0">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {facilityImages.map((image, index) => (
                <div
                  key={index}
                  className={`relative rounded-xl sm:rounded-2xl overflow-hidden shadow-lg aspect-[4/3] ${
                    index % 2 === 1 ? "mt-6 sm:mt-8" : ""
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 45vw, (max-width: 1200px) 25vw, 260px"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
