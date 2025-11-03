import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Ordinacion del Lobo — Topical Drawings & Exquisite Writings by J. Lobo",
  description:
    "Ordinacion del Lobo presents topical drawings and exquisite writings by J. Lobo — a surreal journey through ink, myth, and rebellion.",
  keywords: [
    "Ordinacion del Lobo",
    "J. Lobo",
    "Pendolobo",
    "art prints",
    "illustration",
    "surrealism",
    "latin art",
    "visual storytelling",
  ],
  icons: {
    icon: "/favicon.ico",
  },
   other: {
    "google-site-verification": "c_3hXDCoF4vmr7phIVJHOhyXLn8jca1NsFYSvHbCVV0",
  },
  openGraph: {
    title: "Ordinacion del Lobo — Drawings & Writings by J. Lobo",
    description:
      "Surreal works exploring myth, satire, and identity through exquisite drawings and prose.",
    url: "https://juanlobo.com",
    siteName: "Ordinacion del Lobo",
    images: [
      {
        url: "https://juanlobo.s3.us-east-2.amazonaws.com/ordinacionLRSun.png",
        width: 1200,
        height: 630,
        alt: "Ordinacion del Lobo artwork",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ordinacion del Lobo — Art & Writings by J. Lobo",
    description:
      "Topical drawings and exquisite writings blending surrealism, myth, and rebellion.",
    images: [
      "https://juanlobo.s3.us-east-2.amazonaws.com/ordinacionLRSun.png",
    ],
    creator: "@pendolobo",
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
