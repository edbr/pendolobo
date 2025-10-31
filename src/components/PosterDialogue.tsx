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
import { X } from "lucide-react";
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
          sm:max-w-4xl bg-zinc-950/95 text-zinc-100 backdrop-blur-lg
          border border-amber-400/20 shadow-[0_0_60px_rgba(255,191,0,0.25)]
          flex flex-col gap-6 p-0 overflow-hidden
        "
      >
        {/* Header */}
        <DialogHeader className="relative p-6 pb-0">
          <DialogTitle className="text-2xl font-bold bg-linear-to-r from-amber-300 to-rose-400 bg-clip-text text-transparent">
            {poster.title}
          </DialogTitle>

          <DialogClose asChild>
            <button
              className="absolute right-6 top-6 p-2 rounded-full bg-amber-500/20 hover:bg-amber-400/30 transition-colors"
            >
              <X className="h-5 w-5 text-amber-300" />
            </button>
          </DialogClose>
        </DialogHeader>

        {/* Image */}
        <div className="flex justify-center">
          <div className="w-full max-w-md aspect-3/4 rounded-lg overflow-hidden shadow-[0_0_40px_rgba(255,191,0,0.15)]">
            <img
              src={poster.imageUrl}
              alt={poster.title}
              className="object-contain w-full h-full"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="px-6">
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

        {/* Scrollable Description */}
        <ScrollArea className="max-h-[40vh] px-6 pb-8">
          <p className="whitespace-pre-line text-sm text-zinc-300 mb-6 leading-relaxed">
            {poster.description}
          </p>

          <div className="space-y-6">
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
          </div>

          <p className="italic text-center mt-8 text-amber-400/80 border-t border-amber-400/20 pt-4">
            {poster.tagline}
          </p>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
}
