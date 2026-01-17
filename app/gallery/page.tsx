"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MobileCTA } from "@/components/mobile-cta"
import { StarDecoration, CloudDecoration } from "@/components/decorations"
import { X } from "lucide-react"

const categories = [
  { id: "all", label: "All" },
  { id: "events", label: "Events" },
  { id: "classrooms", label: "Classrooms" },
  { id: "activities", label: "Activities" },
  { id: "celebrations", label: "Celebrations" },
]

const galleryImages = [
  {
    src: "/children-celebrating-festival-in-preschool.jpg",
    alt: "Annual Day Performance",
    category: "events",
    caption: "Annual Day 2024 - Cultural Performance",
  },
  {
    src: "/preschool-children-learning-alphabet-with-teacher.jpg",
    alt: "Classroom Learning",
    category: "classrooms",
    caption: "Interactive Learning Session",
  },
  {
    src: "/children-doing-art-and-craft-in-preschool.jpg",
    alt: "Art and Craft Activity",
    category: "activities",
    caption: "Creative Art & Craft Workshop",
  },
  {
    src: "/preschool-annual-day-celebration-with-kids-perform.jpg",
    alt: "Annual Day Celebration",
    category: "celebrations",
    caption: "Festival Celebration",
  },
  {
    src: "/children-playing-in-colorful-outdoor-playground.jpg",
    alt: "Outdoor Play",
    category: "activities",
    caption: "Fun in the Playground",
  },
  {
    src: "/preschool-sports-day-children-running-race.jpg",
    alt: "Sports Day",
    category: "events",
    caption: "Annual Sports Day 2024",
  },
  {
    src: "/happy-diverse-children-playing-and-learning-togeth.jpg",
    alt: "Music and Dance Class",
    category: "activities",
    caption: "Music & Dance Session",
  },
  {
    src: "/kindergarten-children-reading-books-together.jpg",
    alt: "Reading Session",
    category: "activities",
    caption: "Story Time Together",
  },
  {
    src: "/modern-preschool-smart-classroom-with-interactive-.jpg",
    alt: "Smart Classroom",
    category: "classrooms",
    caption: "Learning with Technology",
  },
  {
    src: "/clean-and-colorful-preschool-activity-room.jpg",
    alt: "Activity Room",
    category: "classrooms",
    caption: "Colorful Learning Space",
  },
  {
    src: "/toddlers-playing-with-colorful-blocks-in-nursery-c.jpg",
    alt: "Block Play Activity",
    category: "activities",
    caption: "Creative Block Building",
  },
  {
    src: "/teacher-reading-story-to-preschool-children.jpg",
    alt: "Story Reading",
    category: "activities",
    caption: "Teacher Reading Stories",
  },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)

  const filteredImages =
    activeCategory === "all" ? galleryImages : galleryImages.filter((img) => img.category === activeCategory)

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-accent/10 to-background overflow-hidden">
          <CloudDecoration className="absolute top-8 left-8 w-20 sm:w-28 h-10 sm:h-14 text-accent/20 hidden sm:block" />
          <StarDecoration className="absolute bottom-16 right-12 w-6 sm:w-8 h-6 sm:h-8 text-secondary animate-pulse hidden sm:block" />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4 sm:mb-6">
                Our Gallery
              </h1>
              <p className="text-base sm:text-lg text-muted-foreground text-pretty">
                Capturing precious moments of learning, play, and celebration at Little Stars Play School.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="py-6 sm:py-8 border-b border-border sticky top-16 md:top-18 bg-background z-40">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex overflow-x-auto pb-2 sm:pb-0 sm:flex-wrap sm:justify-center gap-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 sm:px-6 py-2 rounded-full font-medium text-sm whitespace-nowrap transition-all flex-shrink-0 ${
                    activeCategory === category.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-12 sm:py-16 lg:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {filteredImages.map((image, index) => (
                <div
                  key={index}
                  className="relative overflow-hidden rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all cursor-pointer group aspect-[4/3]"
                  onClick={() => setSelectedImage(image)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                      <p className="text-background text-xs sm:text-sm font-medium">{image.caption}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-foreground/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-background hover:text-primary transition-colors p-2"
              onClick={() => setSelectedImage(null)}
              aria-label="Close"
            >
              <X className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
            <div className="max-w-4xl w-full" onClick={(e: React.MouseEvent) => e.stopPropagation()}>
              <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 800px"
                />
              </div>
              <p className="text-background text-center mt-4 font-medium text-sm sm:text-base">
                {selectedImage.caption}
              </p>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-24 bg-success">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-success-foreground mb-3 sm:mb-4">
              Want Your Child to Be Part of These Memories?
            </h2>
            <p className="text-success-foreground/90 max-w-2xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base">
              Join the Little Stars family and give your child unforgettable experiences of learning and fun.
            </p>
            <a
              href="/admissions"
              className="inline-flex items-center justify-center px-6 sm:px-8 py-3 bg-foreground text-background font-semibold rounded-lg hover:bg-foreground/90 transition-colors text-sm sm:text-base"
            >
              Apply for Admission
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCTA />
    </div>
  )
}
