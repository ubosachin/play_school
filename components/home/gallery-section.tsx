import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const galleryImages = [
  { src: "/children-doing-art-and-craft-in-preschool.jpg", alt: "Art and craft activity" },
  { src: "/preschool-annual-day-celebration-with-kids-perform.jpg", alt: "Annual day celebration" },
  { src: "/children-playing-educational-games-in-classroom.jpg", alt: "Classroom activities" },
  { src: "/preschool-sports-day-children-running-race.jpg", alt: "Sports day" },
  { src: "/children-celebrating-festival-in-preschool.jpg", alt: "Festival celebration" },
  { src: "/teacher-reading-story-to-preschool-children.jpg", alt: "Story time" },
]

export function GallerySection() {
  return (
    <section className="py-12 sm:py-16 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3 sm:mb-4">
            Glimpses of Joy
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base">
            Capturing precious moments of learning, play, and celebration.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-shadow group aspect-[4/3]"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 300px"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10">
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold bg-transparent"
            asChild
          >
            <Link href="/gallery">View Full Gallery</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
