"use client"

import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerClose } from "@/components/ui/drawer"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Poster } from "@/types/poster"
import { X } from "lucide-react"

export function PosterDrawer({
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
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="bg-zinc-950/95 text-zinc-100 backdrop-blur-lg border-t border-amber-400/20 sm:max-w-5xl sm:mx-auto sm:rounded-xl sm:h-[85vh] shadow-[0_-10px_60px_rgba(255,191,0,0.2)]">
        <DrawerHeader className="relative">
          <DrawerTitle className="text-2xl font-bold bg-linear-to-r from-amber-300 to-rose-400 bg-clip-text text-transparent">
            {poster.title}
          </DrawerTitle>
          <DrawerClose asChild>
            <button className="absolute right-4 top-4 p-2 rounded-full bg-amber-500/20 hover:bg-amber-400/30">
              <X className="h-5 w-5 text-amber-300" />
            </button>
          </DrawerClose>
        </DrawerHeader>

        <ScrollArea className="px-6 pb-24 sm:pb-8">
          <p className="whitespace-pre-line text-sm text-zinc-300 mb-6 leading-relaxed">
            {poster.description}
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-amber-400 uppercase tracking-wider mb-2">Features</h3>
              <ul className="list-disc ml-6 text-sm text-zinc-300 space-y-1">
                {poster.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-amber-400 uppercase tracking-wider mb-2">Endorsements</h3>
              <ul className="list-disc ml-6 text-sm text-zinc-300 space-y-1">
                {poster.endorsements.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-amber-400 uppercase tracking-wider mb-2">Buyer Reviews</h3>
              <ul className="list-disc ml-6 text-sm text-zinc-300 space-y-1">
                {poster.reviews.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          </div>

          <p className="italic text-center mt-8 text-amber-400/80 border-t border-amber-400/20 pt-4">
            {poster.tagline}
          </p>
        </ScrollArea>

        <div className="sticky bottom-0 left-0 right-0 bg-zinc-900/80 backdrop-blur-md border-t border-amber-400/20 p-4">
          <Button
            className="w-full text-lg font-semibold bg-amber-500 text-black hover:bg-amber-400 hover:shadow-[0_0_25px_rgba(255,191,0,0.4)]"
            onClick={() => alert(`Ordering ${poster.title}...`)}
          >
            ⚡ Order Now
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
