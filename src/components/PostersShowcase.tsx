"use client"

import { useState } from "react"
import Image from "next/image"
import { posters } from "@/data/posters"
import { PosterDialog } from "@/components/PosterDialog"
import type { Poster } from "@/types/poster"

export function PostersShowcase() {
  const [selectedPoster, setSelectedPoster] = useState<Poster | null>(null)
  const [open, setOpen] = useState(false)

  const handleClick = (poster: Poster) => {
    setSelectedPoster(poster)
    setOpen(true)
  }

  return (
    <section className="py-20 px-4 sm:px-8 md:px-12 max-w-7xl mx-auto">
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-10">
        {posters.map((poster) => (
          <div
            key={poster.title}
            onClick={() => handleClick(poster)}
            className="
              group relative overflow-hidden rounded-lg cursor-pointer
              bg-card text-card-foreground border border-border
              transition-base hover:shadow-lg hover:scale-[1.01]
            "
          >
            {/* Poster Image */}
            <div className="relative aspect-3/4 w-full overflow-hidden">
              <Image
                src={poster.imageUrl}
                alt={poster.title}
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Title + Tagline */}
            <div className="p-4 md:p-6 text-center">
              <h3 className="text-lg font-medium text-foreground mb-2 tracking-tight">
                {poster.title}
              </h3>
              <p className="subtext line-clamp-2">{poster.tagline}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Poster Dialog */}
      <PosterDialog
        poster={selectedPoster}
        open={open}
        onOpenChange={(v: boolean) => setOpen(v)}
      />
    </section>
  )
}
