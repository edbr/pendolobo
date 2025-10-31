"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export function Header() {
  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
        flex items-center justify-between
        px-4 sm:px-8 py-3 sm:py-4
        bg-zinc-950/40 backdrop-blur-md border-b border-amber-500/10
        shadow-[0_0_40px_rgba(255,180,80,0.05)]
      "
    >
      {/* 🎨 Logo / Title */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center"
      >
        <Link href="/" className="group relative">
          <h1
            className="
              font-(--font-unifraktur) text-2xl sm:text-3xl tracking-wide
              bg-linear-to-r from-amber-400 via-rose-500 to-red-500
              bg-clip-text text-transparent
              drop-shadow-[0_0_10px_rgba(255,120,60,0.25)]
              transition-transform duration-300 group-hover:scale-105
            "
          >
            J.Lobo
          </h1>

          {/* underline animation */}
          <span
            className="
              absolute -bottom-1 left-0 w-0 h-px
              bg-linear-to-r from-amber-400 to-red-500
              transition-all duration-500 group-hover:w-full
            "
          />
        </Link>
      </motion.div>

      {/* 🧭 Navigation */}
      <nav className="hidden sm:flex gap-6 text-sm font-medium text-zinc-300 tracking-wide">
        {[
          { name: "About", href: "#about" },
          { name: "Shop", href: "#shop" },
          { name: "Contact", href: "#contact" },
        ].map((link) => (
          <motion.div
            key={link.name}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <Link
              href={link.href}
              className="
                relative hover:text-amber-400 transition-colors
                after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-px
                after:bg-linear-to-r after:from-amber-400 after:to-rose-400
                hover:after:w-full after:transition-all after:duration-300
              "
            >
              {link.name}
            </Link>
          </motion.div>
        ))}
      </nav>
    </header>
  )
}
