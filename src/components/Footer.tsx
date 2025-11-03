"use client"

import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer
  className="w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] md:w-[calc(100%-8rem)] mx-auto mt-24 mb-8 rounded-3xl border border-border bg-[hsl(var(--olive))] font-sans">

      {/* Content */}
      <div
        className="
          max-w-[1600px] mx-auto
          px-6 sm:px-10 py-16 md:py-20
          grid grid-cols-1 md:grid-cols-[auto_auto_auto_1fr]
          gap-10 md:gap-20
          text-sm text-foreground/80
          items-start
        "
      >
        {/* Left: Logo */}
        <div className="flex flex-col items-start">
          <Image
            src="https://juanlobo.s3.us-east-2.amazonaws.com/logoColor.png"
            alt="Pendolobo logo"
            width={160}
            height={160}
            unoptimized
            className="object-contain mb-4"
          />
        </div>

        {/* Middle: Works links */}
        <div className="flex flex-col space-y-2">
          <h4 className="font-display text-lg uppercase tracking-wide mb-3 text-foreground">
            Works
          </h4>
          {[
            "Ink & Madness",
            "Mechanical Utopias",
            "Holy Detritus",
            "Obscure Shop",
            "Field Notes",
            "Our Story",
          ].map((label) => (
            <Link
              key={label}
              href="#"
              className="hover:text-amber-600 transition-colors font-display text-base uppercase tracking-wide"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Right: About links */}
        <div className="flex flex-col space-y-2">
          <h4 className="font-display text-lg uppercase tracking-wide mb-3 text-foreground">
            About
          </h4>
          {[
            "Press",
            "Conspiracies",
            "Fragments",
            "Privacy (or lack thereof)",
            "Terms of Absurdity",
            "Contact",
          ].map((label) => (
            <Link
              key={label}
              href="#"
              className="hover:text-amber-600 transition-colors font-display text-base uppercase tracking-wide"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Spacer */}
        <div></div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/50 mt-4 py-6 px-6 sm:px-10 flex flex-col md:flex-row items-center justify-between text-xs text-muted-foreground">
        <h4 className="font-sans text-base mt-2 text-muted-foreground">
          © {new Date().getFullYear()} Pendolobo — All Rights Reserved
        </h4>
        <div className="flex gap-6 mt-3 md:mt-0 font-display uppercase tracking-wider">
          {["Instagram", "TikTok", "Threads", "Substack"].map((social) => (
            <Link
              key={social}
              href="#"
              className="hover:text-amber-600 transition-colors"
            >
              {social}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
