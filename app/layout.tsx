import type React from "react"
import type { Metadata, Viewport } from "next"
import { Nunito, Baloo_2 } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const nunito = Nunito({ subsets: ["latin"] })
const baloo2 = Baloo_2({ subsets: ["latin"], variable: "--font-display" })

export const metadata: Metadata = {
  title: "Little Stars Play School | A Happy Place to Learn, Play & Grow",
  description:
    "Little Stars Play School provides a safe, caring and fun environment for kids aged 2-6 years. Enroll your child today for the best early childhood education.",
  keywords: ["play school", "preschool", "nursery", "LKG", "UKG", "early childhood education", "kids school"],
    generator: 'SATI WORLD BY SACHIN YADAV'
}

export const viewport: Viewport = {
  themeColor: "#4FC3F7",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${nunito.className} ${baloo2.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
