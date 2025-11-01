"use client"

import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { SetStateAction, useEffect, useState } from "react"

const images = [
  { src: "https://juanlobo.s3.us-east-2.amazonaws.com/rasputinMarx.png", span: "col-span-2 row-span-2" },
  { src: "https://juanlobo.s3.us-east-2.amazonaws.com/casbaworld.jpeg", span: "row-span-1" },
  { src: "https://juanlobo.s3.us-east-2.amazonaws.com/hillbilly.jpeg", span: "col-span-1 row-span-2" },
  { src: "https://juanlobo.s3.us-east-2.amazonaws.com/ordinacion.jpeg", span: "col-span-2 row-span-1" },
  { src: "https://juanlobo.s3.us-east-2.amazonaws.com/nomas.png", span: "row-span-1" },
  { src: "https://juanlobo.s3.us-east-2.amazonaws.com/nomasfade.png", span: "col-span-1 row-span-1" },
  { src: "https://juanlobo.s3.us-east-2.amazonaws.com/ordinacion.jpeg", span: "col-span-1 row-span-1" },
]

export function HeroMosaic() {
  const [visibleIndexes, setVisibleIndexes] = useState<number[]>([])

  // randomly reveal 2 images at a time
  useEffect(() => {
    const revealImages = () => {
      const randomIndexes: SetStateAction<number[]> = []
      while (randomIndexes.length < 2) {
        const index = Math.floor(Math.random() * images.length)
        if (!randomIndexes.includes(index)) randomIndexes.push(index)
      }
      setVisibleIndexes(randomIndexes)
    }
    revealImages()
    const interval = setInterval(revealImages, 900 + Math.random() * 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative w-full overflow-hidden border-b border-border">
      <div
        className="
          grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6
          auto-rows-[15vw] sm:auto-rows-[12vw] md:auto-rows-[10vw]
          w-full h-auto gap-2px md:gap-[3px]
        "
      >
        {images.map((img, i) => {
          const isVisible = visibleIndexes.includes(i)
          return (
            <div key={i} className={`relative ${img.span} overflow-hidden`}>
              <Image
                src={img.src}
                alt={`Pendolobo artwork ${i + 1}`}
                fill
                sizes="(max-width: 768px) 50vw, 20vw"
                className="object-cover object-center transition-transform duration-700 ease-out"
                priority={i < 2}
              />

              {/* Overlay — fades in/out */}
              <motion.div
                animate={{ opacity: isVisible ? 0 : 0.7 }}
                transition={{ duration: 2.4, ease: "easeInOut" }}
                className="absolute inset-0 bg-black pointer-events-none"
              />
            </div>
          )
        })}
      </div>
    </section>
  )
}
