"use client"

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerClose
} from "@/components/ui/drawer"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Poster } from "@/types/poster"

export function PosterModal({
  poster,
  open,
  onOpenChange
}: {
  poster: Poster | null
  open: boolean
  onOpenChange: (v: boolean) => void
}) {
  if (!poster) return null

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent
        className="
          fixed inset-0 z-50
          flex flex-col md:flex-row
          w-screen h-screen
          bg-black text-foreground
          overflow-hidden
          border border-amber-500/30 
    shadow-[0_0_60px_rgba(255,191,0,0.2)]
        "
      >
        {/* LEFT: Poster + Button */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-linear-to-b from-zinc-900/80 to-black p-6">
          <img
            src={poster.imageUrl}
            alt={poster.title}
            className="rounded-lg h-[75vh] object-contain shadow-[0_0_40px_rgba(255,191,0,0.25)] transition-transform duration-500 hover:scale-[1.02]"
          />
          <Button
            className="mt-6 w-full text-lg font-semibold bg-amber-500 text-black hover:bg-amber-400 hover:shadow-[0_0_25px_rgba(255,191,0,0.4)] transition-all duration-200"
            onClick={() => alert(`Ordering ${poster.title}...`)}
          >
            ⚡ Order Now
          </Button>
        </div>

        {/* RIGHT: Scrollable Text */}
        <div className="relative w-full md:w-1/2 bg-zinc-950/90 backdrop-blur-sm text-zinc-100 overflow-hidden">
          <ScrollArea className="h-full p-8 pr-10">
            <DrawerHeader>
              <DrawerTitle className="text-4xl font-bold mb-6 bg-linear-to-r from-amber-300 to-rose-400 bg-clip-text text-transparent tracking-wide">
                {poster.title}
              </DrawerTitle>
            </DrawerHeader>

            <p className="whitespace-pre-line text-sm text-zinc-300 mb-6 leading-relaxed">
              {poster.description}
            </p>

            {poster.features?.length > 0 && (
              <section className="mb-6">
                <h3 className="font-semibold text-amber-400 uppercase tracking-wider mb-2">
                  Features
                </h3>
                <ul className="list-disc ml-6 text-sm text-zinc-300 space-y-1">
                  {poster.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </section>
            )}

            {poster.endorsements?.length > 0 && (
              <section className="mb-6">
                <h3 className="font-semibold text-amber-400 uppercase tracking-wider mb-2">
                  Endorsements
                </h3>
                <ul className="list-disc ml-6 text-sm text-zinc-300 space-y-1">
                  {poster.endorsements.map((e) => (
                    <li key={e}>{e}</li>
                  ))}
                </ul>
              </section>
            )}

            {poster.reviews?.length > 0 && (
              <section>
                <h3 className="font-semibold text-amber-400 uppercase tracking-wider mb-2">
                  Buyer Reviews
                </h3>
                <ul className="list-disc ml-6 text-sm text-zinc-300 space-y-1">
                  {poster.reviews.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
              </section>
            )}

            {poster.tagline && (
              <p className="italic text-center mt-8 text-amber-400/80 border-t border-amber-400/20 pt-4">
                {poster.tagline}
              </p>
            )}
          </ScrollArea>

          {/* Floating Close Button */}
          <DrawerClose asChild>
            <button
              className="
                absolute top-4 right-6 z-50 
                text-amber-400 hover:text-white 
                text-3xl font-bold
                transition-transform duration-300 
                hover:scale-125
                drop-shadow-[0_0_8px_rgba(255,191,0,0.4)]
              "
              aria-label="Close"
            >
              ✕
            </button>
          </DrawerClose>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
