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
    <section className="w-full py-24 px-4 sm:px-8 md:px-16 overflow-hidden bg-background">
      <div
        className="
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
          gap-6 sm:gap-8
        "
      >
        {posters.map((poster) => (
          <div
            key={poster.title}
            onClick={() => handleClick(poster)}
            className="
              group relative cursor-pointer overflow-hidden
              bg-background border border-border rounded-lg
              transition-all duration-300 hover:scale-[1.01] hover:shadow-lg
            "
          >
            {/* Image */}
            <div className="relative aspect-3/4 w-full overflow-hidden">
              <Image
                src={poster.imageUrl}
                alt={poster.title}
                fill
                className="
                  object-cover object-center transition-transform duration-500
                  group-hover:scale-105
                "
              />
            </div>

            {/* Text */}
            <div className="p-4 text-center">
              <h3 className="text-base sm:text-lg font-medium text-foreground uppercase tracking-wide">
                {poster.title}
              </h3>
              <p className="text-sm text-muted-foreground line-clamp-2">
                {poster.tagline}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <PosterDialog
        poster={selectedPoster}
        open={open}
        onOpenChange={setOpen}
      />
    </section>
  )
}
