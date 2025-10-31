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
          p-0 overflow-hidden
        "
      >


        {/* Mobile: everything scrolls */}
        <div className="block sm:hidden max-h-[85vh] overflow-y-auto p-6 space-y-8">
          <div className="aspect-3/4 w-full rounded-lg overflow-hidden shadow-[0_0_40px_rgba(255,191,0,0.15)]">
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
          >
            ⚡ Order Now
          </Button>

          <div className="space-y-6">
            <h2 className="text-xl font-bold bg-linear-to-r from-amber-300 to-rose-400 bg-clip-text text-transparent">
              {poster.title}
            </h2>

            <p className="text-sm text-zinc-300 whitespace-pre-line leading-relaxed">
              {poster.description}
            </p>

            <Section title="Features" items={poster.features} />
            <Section title="Endorsements" items={poster.endorsements} />
            <Section title="Buyer Reviews" items={poster.reviews} />

            <p className="italic text-center text-amber-400/80 border-t border-amber-400/20 pt-4">
              {poster.tagline}
            </p>
          </div>
        </div>

        {/* Desktop: side-by-side layout */}
        <div className="hidden sm:flex gap-8 p-8">
          {/* Left: image + button */}
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
            >
              ⚡ Order Now
            </Button>
          </div>

          {/* Right: scrollable details */}
          <ScrollArea className="sm:w-1/2 h-[70vh] pr-4">
            <div className="space-y-6">
              <DialogHeader className="pb-2">
                <DialogTitle className="text-2xl font-bold bg-linear-to-r from-amber-300 to-rose-400 bg-clip-text text-transparent">
                  {poster.title}
                </DialogTitle>
              </DialogHeader>

              <p className="text-sm text-zinc-300 whitespace-pre-line leading-relaxed">
                {poster.description}
              </p>

              <Section title="Features" items={poster.features} />
              <Section title="Endorsements" items={poster.endorsements} />
              <Section title="Buyer Reviews" items={poster.reviews} />

              <p className="italic text-center mt-8 text-amber-400/80 border-t border-amber-400/20 pt-4">
                {poster.tagline}
              </p>
            </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
}

/* Reusable section component */
function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="font-semibold text-amber-400 uppercase tracking-wider mb-2">
        {title}
      </h3>
      <ul className="list-disc ml-6 text-sm text-zinc-300 space-y-1">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
