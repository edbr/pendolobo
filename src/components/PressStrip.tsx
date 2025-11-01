"use client"

const pressNames = [
  "Artforum Delirium",
  "Post-Modern Mechanics",
  "Design & Dystopia",
  "Cultured Collapse",
  "The Gentleman’s Irony"  ,
]

export function PressStrip() {
  return (
    <section className="py-12 border-y border-border bg-muted/30">
      <div
        className="
          max-w-6xl mx-auto px-6
          grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5
          gap-8 items-center justify-items-center
        "
      >
        {pressNames.map((name, i) => (
          <div
            key={i}
            className="
              text-muted-foreground text-center uppercase tracking-wider
              opacity-60 hover:opacity-100 transition-opacity duration-300
              text-sm sm:text-base font-light
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
