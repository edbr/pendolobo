"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"

export function Header() {
  return (
    <header className="fixed top-6 left-1/2 z-50 -translate-x-1/2">
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="
          flex items-center justify-between
          w-[92vw] sm:w-[640px] md:w-[720px] lg:w-[800px]
          px-6 py-3 sm:px-8 sm:py-4
          rounded-full
          border border-border/50
          bg-background/70 backdrop-blur-md
          shadow-[0_4px_40px_rgba(0,0,0,0.05)]
        "
      >
        {/* 🎨 Logo / Title */}
        <Link href="/" className="group relative flex items-center gap-2">
          <Image
            src="https://juanlobo.s3.us-east-2.amazonaws.com/logoBW.png"
            alt="J.Lobo logo"
            width={72}
            height={72}
            className="rounded-sm object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <h1
            className="
            text-xl text-[hsl(var(--olive-foreground))] hover:text-[hsl(var(--olive))]
            transition-colors duration-300
"
          >
            Ordinación del Lobo Desordenado
          </h1>

          {/* underline accent */}
          <span
            className="
              absolute -bottom-1 left-0 w-0 h-px
              bg-foreground/60
              transition-all duration-500 group-hover:w-full
            "
          />
        </Link>

        {/* 🧭 Navigation */}
        <nav className="hidden sm:flex gap-6 text-sm font-medium text-muted-foreground tracking-wide">
          {[
            { name: "About", href: "#about" },
            { name: "Shop", href: "#shop" },
            { name: "Contact", href: "#contact" },
          ].map((link) => (
            <motion.div
              key={link.name}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <Link
                href={link.href}
                className="
                  relative hover:text-foreground transition-colors
                  after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px
                  after:bg-foreground/60
                  hover:after:w-full after:transition-all after:duration-300
                "
              >
                {link.name}
              </Link>
            </motion.div>
          ))}
        </nav>
      </motion.div>
    </header>
  )
}
