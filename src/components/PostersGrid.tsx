// src/components/PostersGrid.tsx
"use client"

import { useState } from "react"
import { posters } from "@/data/posters"
import { PosterModal } from "@/components/PosterModal"
import { ThreePoster } from "@/components/ThreePoster"
import { Poster } from "@/types/poster"

export function PostersGrid() {
  const [selected, setSelected] = useState<Poster | null>(null)
  const [open, setOpen] = useState(false)

  return (
    <section className="w-full py-12 px-6 md:px-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {posters.map(p => (
          <div
            key={p.title}
            className="flex justify-center cursor-pointer"
            onClick={() => {
              setSelected(p)
              setOpen(true)
            }}
          >
            <ThreePoster imageUrl={p.imageUrl} />
          </div>
        ))}
      </div>
      <PosterModal poster={selected} open={open} onOpenChange={setOpen} />
    </section>
  )
}
