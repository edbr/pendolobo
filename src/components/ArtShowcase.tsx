"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function ArtShowcase() {
  return (
    <section className="w-full bg-muted/30 py-24 border-y border-border px-4 sm:px-8 md:px-16 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-12 md:gap-20 relative">
        
        {/* LEFT — Narrow text column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="col-span-1 max-w-sm bg-background rounded-3xl shadow-[0_0_60px_rgba(0,0,0,0.05)] border border-border p-8 md:p-10 z-10"
        >
          <p className="text-amber-500 text-xs sm:text-sm font-medium uppercase mb-2 tracking-widest">
            Featured Pieces
          </p>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-foreground leading-tight">
            When Art Walks Into the Room
          </h2>

          <p className="text-muted-foreground mb-6 leading-relaxed text-base md:text-lg">
            Each Pendolobo piece carries a story, a myth, and a punchline.
            See how these works hold their own beyond the frame — in the wild,
            in your space, in your daily rituals.
          </p>

          <Button
            variant="default"
            className="rounded-full px-6 md:px-8 py-4 text-sm md:text-base font-medium tracking-wide hover:bg-amber-600 transition-all"
          >
            Explore the Series
          </Button>
        </motion.div>

        {/* RIGHT — Hero visual montage */}
        <div className="relative col-span-3 flex justify-center md:justify-end">
          {/* Background accent glow */}
          <div className="absolute inset-0 bg-gradient from-amber-100/40 via-transparent to-transparent rounded-3xl blur-2xl" />

          <div className="relative flex items-end justify-center gap-6 sm:gap-10 md:gap-14 w-full">
            {/* 1️⃣ Rasputin Canvas Bag */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative w-[35%] sm:w-[32%] md:w-[30%] aspect-4/5 rounded-xl overflow-hidden border border-border shadow-xl rotate-3"
            >
              <Image
                src="https://juanlobo.s3.us-east-2.amazonaws.com/rasputinCanvasBag.png"
                alt="Rasputin Canvas Bag"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* 2️⃣ Ordinacion print — main hero */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative w-[45%] sm:w-[42%] md:w-[40%] aspect-3/4 rounded-xl overflow-hidden border border-border shadow-2xl z-20 -translate-y-4 md:-translate-y-8"
            >
              <Image
                src="https://juanlobo.s3.us-east-2.amazonaws.com/ordinacionLRSun.png"
                alt="Ordinacion print in room"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* 3️⃣ Nomas Jacket */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5 }}
              viewport={{ once: true }}
              className="relative w-[35%] sm:w-[32%] md:w-[30%] aspect-3/4 rounded-xl overflow-hidden border border-border shadow-xl -rotate-2 translate-y-8 md:translate-y-14 z-10"
            >
              <Image
                src="https://juanlobo.s3.us-east-2.amazonaws.com/nomasJacketJean.png"
                alt="Nomas Jacket print in space"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
