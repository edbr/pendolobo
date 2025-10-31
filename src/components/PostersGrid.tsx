"use client"

import { useState } from "react"
import { posters } from "@/data/posters"
import { PosterDrawer } from "@/components/PosterDrawer"
import { ThreePoster } from "@/components/ThreePoster"
import type { Poster } from "@/types/poster"

export function PostersGrid() {
  const [selectedPoster, setSelectedPoster] = useState<Poster | null>(null)
  const [open, setOpen] = useState(false)

  const handleClick = (poster: Poster) => {
    setSelectedPoster(poster)
    setOpen(true)
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 justify-items-center">
      {posters.map((poster) => (
        <div
          key={poster.title}
          className="cursor-pointer transition-transform hover:scale-[1.05]"
          onClick={() => handleClick(poster)}
        >
          <ThreePoster imageUrl={poster.imageUrl} />
          <h3 className="mt-4 text-center text-amber-400 text-lg font-semibold">
            {poster.title}
          </h3>
        </div>
      ))}

      {/* 🪟 Drawer */}
      <PosterDrawer
        poster={selectedPoster}
        open={open}
        onOpenChange={(v: boolean) => setOpen(v)}
      />
    </div>
  )
}
