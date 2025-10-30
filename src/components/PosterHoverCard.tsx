"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Poster } from "@/types/poster"

export function PosterHoverCard({ poster }: { poster: Poster }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className="relative group w-[320px] h-[420px] cursor-pointer overflow-hidden rounded-lg border border-border bg-muted/10 hover:shadow-xl transition-all"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <AnimatePresence>
        {!hovered && (
          <motion.img
            key="image"
            src={poster.imageUrl}
            alt={poster.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="object-cover w-full h-full"
          />
        )}

        {hovered && (
          <motion.div
            key="overlay"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 flex bg-background/90 backdrop-blur-md border border-border rounded-lg overflow-hidden"
          >
            {/* Left side: image */}
            <div className="w-1/2 flex items-center justify-center p-4 bg-gradient from-muted/50 to-background/20">
              <img
                src={poster.imageUrl}
                alt={poster.title}
                className="rounded-md object-contain w-full max-h-[380px]"
              />
            </div>

            {/* Right side: scrollable text */}
            <ScrollArea className="w-1/2 p-4 text-sm text-muted-foreground">
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                {poster.title}
              </h3>
              <p className="whitespace-pre-line mb-3">{poster.description}</p>

              <h4 className="font-semibold mt-2 text-foreground">Features</h4>
              <ul className="list-disc ml-4 mb-3">
                {poster.features.map(f => (
                  <li key={f}>{f}</li>
                ))}
              </ul>

              <h4 className="font-semibold text-foreground">Endorsements</h4>
              <ul className="list-disc ml-4 mb-3">
                {poster.endorsements.map(e => (
                  <li key={e}>{e}</li>
                ))}
              </ul>

              <h4 className="font-semibold text-foreground">Buyer Reviews</h4>
              <ul className="list-disc ml-4 mb-3">
                {poster.reviews.map(r => (
                  <li key={r}>{r}</li>
                ))}
              </ul>

              <p className="italic text-center mt-4 text-foreground">
                {poster.tagline}
              </p>
            </ScrollArea>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
