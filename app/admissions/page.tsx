"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
// import { MobileCTA } from "@/components/mobile-cta"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ClipboardList, Calendar, Users, CheckCircle, FileText, Phone, ArrowRight } from "lucide-react"
import { StarDecoration, CloudDecoration } from "@/components/decorations"

const admissionSteps = [
  {
    icon: ClipboardList,
    step: "Step 1",
    title: "Fill Inquiry Form",
    description: "Submit the online inquiry form with your child's details and your contact information.",
    color: "bg-primary text-primary-foreground",
  },
  {
    icon: Calendar,
    step: "Step 2",
    title: "Schedule a Visit",
    description: "Book a campus tour to see our facilities and meet our teachers in person.",
    color: "bg-accent text-accent-foreground",
  },
  {
    icon: Users,
    step: "Step 3",
    title: "Meet the Teacher",
    description: "Have an interaction session with our teachers to understand our curriculum and approach.",
    color: "bg-success text-success-foreground",
  },
  {
    icon: CheckCircle,
    step: "Step 4",
    title: "Admission Confirmation",
    description: "Complete the documentation and fee payment to confirm your child's admission.",
    color: "bg-secondary text-secondary-foreground",
  },
]

const requiredDocuments = [
  "Birth Certificate (original + photocopy)",
  "4 Passport-size photographs of the child",
  "2 Passport-size photographs of both parents",
  "Aadhaar Card of the child (if available)",
  "Aadhaar Card of parents (photocopy)",
  "Address Proof (Aadhaar/Utility Bill)",
  "Previous school records (if applicable)",
  "Medical records/vaccination certificate",
]

export default function AdmissionsPage() {
  const [formData, setFormData] = useState({
    parentName: "",
    phone: "",
    email: "",
    childName: "",
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
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative py-16 lg:py-24 bg-gradient-to-b from-secondary/20 to-background overflow-hidden">
          <CloudDecoration className="absolute top-8 right-8 w-28 h-14 text-secondary/30" />
          <StarDecoration className="absolute bottom-16 left-12 w-8 h-8 text-primary animate-pulse" />

          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-sm font-medium mb-4">
                Admissions Open for 2026-27
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-6">
                Begin Your Child's Journey
              </h1>
              <p className="text-lg text-muted-foreground text-pretty">
                Take the first step towards giving your child the best early education. Apply now for Nursery, LKG, and
                UKG programs.
              </p>
            </div>
          </div>
        </section>

        {/* Admission Steps */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Admission Process</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Simple and transparent admission process designed for your convenience.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {admissionSteps.map((step, index) => (
                <div key={index} className="relative">
                  <Card className="border-none shadow-lg bg-card h-full">
                    <CardContent className="p-6 text-center">
                      <div
                        className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mx-auto mb-4`}
                      >
                        <step.icon className="w-8 h-8" />
                      </div>
                      <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                        {step.step}
                      </span>
                      <h3 className="font-display text-xl font-bold text-card-foreground mt-2 mb-2">{step.title}</h3>
                      <p className="text-muted-foreground text-sm">{step.description}</p>
                    </CardContent>
                  </Card>
                  {index < admissionSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-6 h-6 text-muted-foreground/30" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Form & Documents Section */}
        <section className="py-16 lg:py-24 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Inquiry Form */}
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-6">Admission Inquiry Form</h2>
                <Card className="border-none shadow-xl bg-card">
                  <CardContent className="p-6 md:p-8">
                    {isSubmitted ? (
                      <div className="text-center py-8">
                        <div className="w-20 h-20 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
                          <CheckCircle className="w-10 h-10 text-success" />
                        </div>
                        <h3 className="font-display text-2xl font-bold text-card-foreground mb-2">
                          Thank You for Your Interest!
                        </h3>
                        <p className="text-muted-foreground mb-6">
                          We have received your inquiry. Our admissions team will contact you within 24-48 hours.
                        </p>
                        <Button onClick={() => setIsSubmitted(false)} variant="outline">
                          Submit Another Inquiry
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

                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            placeholder="your.email@example.com"
                          />
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="childName">Child's Name *</Label>
                            <Input
                              id="childName"
                              value={formData.childName}
                              onChange={(e) => handleChange("childName", e.target.value)}
                              placeholder="Enter child's name"
                              required
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="childAge">Child's Age *</Label>
                            <Select onValueChange={(value) => handleChange("childAge", value)} required>
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
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="program">Program Interested In *</Label>
                          <Select onValueChange={(value) => handleChange("program", value)} required>
                            <SelectTrigger>
                              <SelectValue placeholder="Select program" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="nursery">Nursery (Age 2-3)</SelectItem>
                              <SelectItem value="lkg">LKG (Age 3-4)</SelectItem>
                              <SelectItem value="ukg">UKG (Age 4-6)</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="message">Message (Optional)</Label>
                          <Textarea
                            id="message"
                            value={formData.message}
                            onChange={(e) => handleChange("message", e.target.value)}
                            placeholder="Any specific questions or requirements?"
                            rows={4}
                          />
                        </div>

                        <Button
                          type="submit"
                          className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                          disabled={isSubmitting}
                        >
                          {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Required Documents */}
              <div>
                <h2 className="font-display text-3xl font-bold text-foreground mb-6">Required Documents</h2>
                <Card className="border-none shadow-xl bg-card">
                  <CardContent className="p-6 md:p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                        <FileText className="w-6 h-6 text-accent" />
                      </div>
                      <p className="text-muted-foreground">
                        Please keep the following documents ready for the admission process:
                      </p>
                    </div>
                    <ul className="space-y-3">
                      {requiredDocuments.map((doc, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                          <span className="text-foreground">{doc}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                {/* Quick Contact */}
                <Card className="border-none shadow-xl bg-primary text-primary-foreground mt-6">
                  <CardContent className="p-6 md:p-8">
                    <h3 className="font-display text-xl font-bold mb-4">Need Help with Admissions?</h3>
                    <p className="text-primary-foreground/90 mb-4">
                      Our admissions team is here to answer all your questions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <Button
                        variant="secondary"
                        className="gap-2 bg-secondary text-secondary-foreground font-semibold"
                        asChild
                      >
                        <a href="tel:+919876543210">
                          <Phone className="w-4 h-4" />
                          Call Us
                        </a>
                      </Button>
                      <Button
                        variant="outline"
                        className="gap-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
                        asChild
                      >
                        <Link href="/contact">Visit Contact Page</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-success">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-success-foreground mb-4">
              Ready to Visit Our Campus?
            </h2>
            <p className="text-success-foreground/90 max-w-2xl mx-auto mb-8">
              Schedule a campus tour and see firsthand why Little Stars is the perfect choice for your child's early
              education.
            </p>
            <Button
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 font-semibold gap-2"
              asChild
            >
              <a href="tel:+919876543210">
                <Phone className="w-5 h-5" />
                Call to Schedule: +91 98765 43210
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      {/* <MobileCTA /> */}
    </div>
  )
}
