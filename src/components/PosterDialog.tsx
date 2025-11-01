"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import type { Poster } from "@/types/poster"

export function PosterDialog({
  poster,
  open,
  onOpenChange,
}: {
  poster: Poster | null
  open: boolean
  onOpenChange: (v: boolean) => void
}) {
  if (!poster) return null

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="
          sm:max-w-6xl w-[95vw] p-0
          md:grid md:grid-cols-2
          bg-background text-foreground border border-border shadow-lg
          overflow-y-auto max-h-[90vh]
        "
      >
        {/* LEFT */}
        <div className="flex flex-col items-center justify-center gap-6 bg-muted/20 p-6 md:p-10">
          <div className="relative w-full max-w-sm aspect-3/4 overflow-hidden rounded-md border border-border bg-background">
            <Image
              src={poster.imageUrl}
              alt={poster.title}
              fill
              className="object-contain transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>

          <Button
            variant="outline"
            className="
              w-full text-sm font-medium uppercase tracking-wider
              border border-foreground text-foreground
              hover:bg-foreground hover:text-background transition-all
            "
            onClick={() => alert(`Ordering ${poster.title}...`)}
          >
            Order Print
          </Button>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col p-8 space-y-8">
          <DialogHeader className="border-b border-border pb-4">
            <DialogTitle className="text-2xl font-semibold uppercase tracking-wide">
              {poster.title}
            </DialogTitle>
          </DialogHeader>

          {/* Description */}
          <p className="text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
            {poster.description}
          </p>

          {/* Features */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-2 text-foreground">
              Features
            </h3>
            <ul className="list-disc ml-6 text-sm text-muted-foreground space-y-1">
              {poster.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>

          {/* Reviews */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-2 text-foreground">
              Reviews
            </h3>
            <ul className="list-disc ml-6 text-sm text-muted-foreground space-y-1">
              {poster.reviews.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          </div>

          {/* Tagline */}
          <p className="italic text-sm text-muted-foreground border-t border-border pt-4">
            {poster.tagline}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  )
}
