"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function ArtShowcase() {
  return (
    <section className="w-full bg-muted/30 py-24 border-y border-border px-4 sm:px-8 md:px-16 overflow-hidden">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-5 items-start md:items-center gap-12 md:gap-2">

        {/* LEFT — Text block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="col-span-2 md:sticky md:top-24 self-start bg-background rounded-3xl shadow-[0_0_60px_rgba(0,0,0,0.05)] border border-border p-8 md:p-10"
        >
          <p className="text-amber-500 text-xs sm:text-sm font-medium uppercase mb-2 tracking-widest">
            Featured Pieces
          </p>

          <h2 className="text-3xl md:text-5xl tracking-tight mb-4 text-foreground">
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

        {/* RIGHT — Image montage */}
        <div className="col-span-3 relative flex flex-wrap justify-center md:justify-end gap-6 sm:gap-8 md:gap-12 w-full">
          {/* Accent glow */}
          <div className="absolute inset-0 bg-linear-to-r rounded-3xl blur-2xl" />

          {/* 1️⃣ Rasputin Canvas Bag */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.1 }}
            viewport={{ once: true }}
            className="relative w-[80%] sm:w-[45%] md:w-[30%] aspect-4/5 rounded-xl overflow-hidden border border-border shadow-xl rotate-3"
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
            className="relative w-[90%] sm:w-[55%] md:w-[40%] aspect-3/4 rounded-xl overflow-hidden border border-border shadow-2xl z-20 -translate-y-3 md:-translate-y-8"
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
            className="relative w-[90%] sm:w-[55%] md:w-[40%] aspect-3/4 rounded-xl overflow-hidden border border-border shadow-xl -rotate-2 translate-y-4 md:translate-y-10 z-10"
          >
            <Image
              src="https://juanlobo.s3.us-east-2.amazonaws.com/nomasJacketJean.png"
              alt="Nomas Jacket print in space"
              fill
              className="object-cover"
            />
          </motion.div>
            {/* 4 Nomas Jacket */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            viewport={{ once: true }}
            className="relative w-[80%] sm:w-[45%] md:w-[30%] aspect-4/5 rounded-xl overflow-hidden border border-border shadow-xl rotate-3"
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
    </section>
  )
}
