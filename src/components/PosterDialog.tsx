"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Poster } from "@/types/poster";

export function PosterDialog({
  poster,
  open,
  onOpenChange,
}: {
  poster: Poster | null;
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  if (!poster) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="
          sm:max-w-5xl bg-zinc-950/95 text-zinc-100 backdrop-blur-lg
          border border-amber-400/20 shadow-[0_0_60px_rgba(255,191,0,0.25)]
          flex flex-col sm:flex-row gap-8 p-6 sm:p-8
          h-[90vh] sm:h-auto sm:max-h-[85vh] overflow-hidden
        ">

        {/* Left: Image + CTA */}
        <div className="flex flex-col items-center sm:w-1/2 space-y-4">
          <div className="relative aspect-3/4 w-full max-w-sm rounded-lg overflow-hidden shadow-[0_0_40px_rgba(255,191,0,0.15)]">
            <img
              src={poster.imageUrl}
              alt={poster.title}
              className="object-contain w-full h-full"
            />
          </div>

          <Button
            className="
              w-full text-lg font-semibold bg-amber-500 text-black
              hover:bg-amber-400 hover:shadow-[0_0_25px_rgba(255,191,0,0.4)]
              transition-all duration-200
            "
            onClick={() => alert(`Ordering ${poster.title}...`)}
          >
            ⚡ Order Now
          </Button>
        </div>

        {/* Right: Scrollable Info */}
        <ScrollArea className="sm:w-1/2 h-[60vh] sm:h-[70vh] pr-4">
          <div className="space-y-6 pb-12">
            {/* Title above description */}
            <DialogHeader className="pb-2">
              <DialogTitle className="text-xl md:text-2xl font-bold bg-linear-to-r from-amber-300 to-rose-400 bg-clip-text text-transparent">
                {poster.title}
              </DialogTitle>
            </DialogHeader>

            <p className="whitespace-pre-line text-sm text-zinc-300 leading-relaxed">
              {poster.description}
            </p>

            <div>
              <h3 className="font-semibold text-amber-400 uppercase tracking-wider mb-2">
                Features
              </h3>
              <ul className="list-disc ml-6 text-sm text-zinc-300 space-y-1">
                {poster.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-amber-400 uppercase tracking-wider mb-2">
                Endorsements
              </h3>
              <ul className="list-disc ml-6 text-sm text-zinc-300 space-y-1">
                {poster.endorsements.map((e) => (
                  <li key={e}>{e}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-amber-400 uppercase tracking-wider mb-2">
                Buyer Reviews
              </h3>
              <ul className="list-disc ml-6 text-sm text-zinc-300 space-y-1">
                {poster.reviews.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>

            <p className="italic text-center mt-8 text-amber-400/80 border-t border-amber-400/20 pt-4">
              {poster.tagline}
            </p>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
