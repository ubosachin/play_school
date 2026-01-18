"use client"

import { Phone, MessageCircle } from "lucide-react"

export function MobileCTA() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 lg:hidden pointer-events-none">
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-success text-success-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform pointer-events-auto"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
      <a
        href="tel:+919876543210"
        className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:scale-110 transition-transform pointer-events-auto"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  )
}
