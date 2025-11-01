"use client"

const pressNames = [
  "Artforum Delirium",
  "Post-Modern Mechanics",
  "Design & Dystopia",
  "Cultured Collapse",
  "The Gentleman’s Irony",
  "Neo-Bohemian Digest",
  ,
]

export function PressStrip() {
  return (
    <section className="w-full border-y border-border bg-muted/30">
      <div
        className="
          grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6
          gap-y-8 py-12 px-6
          text-center uppercase text-muted-foreground text-sm sm:text-base
          tracking-wider font-light
        "
      >
        {pressNames.map((name, i) => (
          <div
            key={i}
            className="
              opacity-60 hover:opacity-100 transition-opacity duration-300
              flex items-center justify-center
            "
            style={{
              fontFamily: i % 2 === 0 ? "serif" : "sans-serif",
              letterSpacing: i % 3 === 0 ? "0.05em" : "0.15em",
            }}
          >
            {name}
          </div>
        ))}
      </div>
    </section>
  )
}
