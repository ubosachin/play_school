"use client"

import type React from "react"
import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MobileCTA } from "@/components/mobile-cta"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Phone, Mail, Clock, MessageCircle, CheckCircle } from "lucide-react"
import { StarDecoration, CloudDecoration } from "@/components/decorations"

const contactInfo = [
  {
    icon: MapPin,
    title: "Address",
    content: "123 School Lane, Education District,\nYour City, India - 400001",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Phone,
    title: "Phone",
    content: "+91 98765 43210\n+91 98765 43211",
    link: "tel:+919876543210",
    color: "bg-success/10 text-success",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@littlestars.com\nadmissions@littlestars.com",
    link: "mailto:info@littlestars.com",
    color: "bg-accent/10 text-accent",
  },
  {
    icon: Clock,
    title: "Office Hours",
    content: "Monday - Friday: 8:00 AM - 5:00 PM\nSaturday: 9:00 AM - 1:00 PM",
    color: "bg-secondary/10 text-secondary-foreground",
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    parentName: "",
    phone: "",
    childAge: "",
    program: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen w-full overflow-x-hidden">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 bg-gradient-to-b from-primary/10 to-background overflow-hidden">
          <CloudDecoration className="absolute top-8 left-8 w-28 h-14 text-primary/20" />
          <StarDecoration className="absolute bottom-16 right-12 w-8 h-8 text-secondary animate-pulse" />

          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">Contact Us</h1>
              <p className="text-lg text-muted-foreground text-pretty">
                Have questions about admissions or want to learn more? We'd love to hear from you!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <Card key={index} className="border-none shadow-lg bg-card">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-14 h-14 rounded-2xl ${info.color} flex items-center justify-center mx-auto mb-4`}
                    >
                      <info.icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-card-foreground mb-2">{info.title}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-muted-foreground text-sm hover:text-primary transition-colors whitespace-pre-line"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-muted-foreground text-sm whitespace-pre-line">{info.content}</p>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-6">Send Us a Message</h2>
                <Card className="border-none shadow-xl bg-card">
                  <CardContent className="p-6 md:p-8">
                    {isSubmitted ? (
                      <div className="text-center py-8">
                        <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                          <CheckCircle className="w-10 h-10 text-success" />
                        </div>
                        <h3 className="font-display text-2xl font-bold text-card-foreground mb-2">Message Sent!</h3>
                        <p className="text-muted-foreground mb-6">
                          Thank you for reaching out. We'll get back to you within 24 hours.
                        </p>
                        <Button onClick={() => setIsSubmitted(false)} variant="outline">
                          Send Another Message
                        </Button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="parentName">Parent Name *</Label>
                            <Input
                              id="parentName"
                              value={formData.parentName}
                              onChange={(e) => handleChange("parentName", e.target.value)}
                              placeholder="Enter your full name"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number *</Label>
                            <Input
                              id="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => handleChange("phone", e.target.value)}
                              placeholder="+91 98765 43210"
                              required
                            />
                          </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="childAge">Child's Age</Label>
                            <Select onValueChange={(value) => handleChange("childAge", value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select age" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="2">2 Years</SelectItem>
                                <SelectItem value="2.5">2.5 Years</SelectItem>
                                <SelectItem value="3">3 Years</SelectItem>
                                <SelectItem value="3.5">3.5 Years</SelectItem>
                                <SelectItem value="4">4 Years</SelectItem>
                                <SelectItem value="4.5">4.5 Years</SelectItem>
                                <SelectItem value="5">5 Years</SelectItem>
                                <SelectItem value="5.5">5.5 Years</SelectItem>
                                <SelectItem value="6">6 Years</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="program">Program Interested In</Label>
                            <Select onValueChange={(value) => handleChange("program", value)}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select program" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="nursery">Nursery (Age 2-3)</SelectItem>
                                <SelectItem value="lkg">LKG (Age 3-4)</SelectItem>
                                <SelectItem value="ukg">UKG (Age 4-6)</SelectItem>
                                <SelectItem value="general">General Inquiry</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Message *</Label>
                          <Textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) => handleChange("message", e.target.value)}
                            placeholder="How can we help you?"
                            rows={5}
                            required
                          />
                        </div>

                        <Button
                          type="submit"
                          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Map & WhatsApp */}
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-6">Find Us</h2>
                <Card className="border-none shadow-xl bg-card overflow-hidden">
                  <div className="h-80 bg-muted">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.7120811426455!2d72.87726867497591!3d19.076090982132694!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra%2C%20India!5e0!3m2!1sen!2sus!4v1704902400000!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Little Stars Play School Location"
                    />
                  </div>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground text-sm mb-4">
                      Visit us at our campus to experience our facilities and meet our team. We're conveniently located
                      in the heart of the city.
                    </p>
                    <Button variant="outline" className="w-full gap-2 bg-transparent" asChild>
                      <a
                        href="https://www.google.com/maps/dir//Mumbai,+Maharashtra,+India"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MapPin className="w-4 h-4" />
                        Get Directions
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* WhatsApp Card */}
                <Card className="border-none shadow-xl bg-success text-success-foreground mt-6">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-14 h-14 rounded-full bg-success-foreground/20 flex items-center justify-center">
                        <MessageCircle className="w-7 h-7" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-bold">Chat on WhatsApp</h3>
                        <p className="text-success-foreground/80 text-sm">Quick responses, anytime!</p>
                      </div>
                    </div>
                    <p className="text-success-foreground/90 mb-4">
                      Have a quick question? Reach out to us on WhatsApp for instant assistance.
                    </p>
                    <Button
                      className="w-full bg-success-foreground text-success hover:bg-success-foreground/90 font-semibold gap-2"
                      asChild
                    >
                      <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-5 h-5" />
                        Start WhatsApp Chat
                      </a>
                    </Button>
                  </CardContent>
                </Card>
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
