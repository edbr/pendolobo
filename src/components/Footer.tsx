"use client"

import Link from "next/link"

export function Footer() {
  return (
    <footer
      className="
        w-[calc(100%-2rem)] sm:w-[calc(100%-4rem)] md:w-[calc(100%-8rem)]
        mx-auto mt-24 mb-8
        rounded-2rem
      "
    >
      <div
        className="
          max-w-[1800px] mx-auto
          px-6 sm:px-10 py-16 md:py-20
          grid grid-cols-2 md:grid-cols-3 gap-8
          text-sm text-foreground/80
        "
      >
        {/* Left: Logo + tagline */}
        <div className="flex flex-col justify-between">
          <h3 className=" text-3xl tracking-wide text-foreground mb-3">
            Pen do Lobo
          </h3>
          <p className="text-muted-foreground text-lg">
            “Topical drawings and exquisite writings by J. Lobo.”
          </p>
          <p className="text-lg text-muted-foreground mt-6">
            © {new Date().getFullYear()} Pendolobo — All Rights Reserved
          </p>
        </div>

        {/* Middle: Nonsense links */}
        <div className="flex flex-col space-y-2">
          {[
            "Ink & Madness",
            "Mechanical Utopias",
            "Holy Detritus",
            "Obscure Shop",
            "Field Notes",
          ].map((label) => (
            <Link
              key={label}
              href="#"
              className="hover:text-amber-600 transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Right: Secondary links */}
        <div className="flex flex-col space-y-2">
          {[
            "Press",
            "Conspiracies",
            "Fragments",
            "Privacy (or lack thereof)",
            "Terms of Absurdity",
          ].map((label) => (
            <Link
              key={label}
              href="#"
              className="hover:text-amber-600 transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="
          border-t border-border/50
          mt-4 py-6 text-center text-xs text-muted-foreground
        "
      >
        Follow the myth —
        <span className="inline-flex gap-4 ml-4">
          {["Instagram", "TikTok", "Threads", "Substack"].map((social) => (
            <Link
              key={social}
              href="#"
              className="hover:text-amber-600 transition-colors"
            >
              {social}
            </Link>
          ))}
        </span>
      </div>
    </footer>
  )
}
