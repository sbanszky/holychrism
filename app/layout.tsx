import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Cinzel } from "next/font/google"
import "./globals.css"
import { Suspense } from "react" // Import Suspense

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-cinzel",
  display: "swap",
})

export const metadata: Metadata = {
  title: "The Sacred Codex - Illuminated Manuscript",
  description: "A dark, Masonic-inspired illuminated manuscript with esoteric aesthetics",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} ${cinzel.variable}`}>
        <Suspense fallback={<div>Loading...</div>}>
          {" "}
          {/* Wrap children in Suspense */}
          {children}
        </Suspense>
        <Analytics />
      </body>
    </html>
  )
}
