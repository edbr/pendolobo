import type { Metadata } from "next"
import { Geist, Geist_Mono, UnifrakturCook } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

// 🕯 Gothic header font
const unifraktur = UnifrakturCook({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-unifraktur",
})

export const metadata: Metadata = {
  title: "Pen do lobo",
  description: "Topical drawings and exquisite writings by J. Lobo",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          ${unifraktur.variable}
          font-sans antialiased
        `}
      >
        {children}
      </body>
    </html>
  )
}
