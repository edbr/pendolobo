import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Ordinacion del Lobo",
  description: "Topical drawings and exquisite writings by J. Lobo",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  )
}
