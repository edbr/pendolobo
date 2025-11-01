"use client"

import Image from "next/image"

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
  return (
    <section className="relative w-full overflow-hidden border-b border-border">
      {/* Tight grid */}
      <div
        className="
          grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6
          auto-rows-[15vw] sm:auto-rows-[12vw] md:auto-rows-[10vw]
          w-full h-auto
          gap-2px md:gap-[3px]
        "
      >
        {images.map((img, i) => (
          <div key={i} className={`relative ${img.span} overflow-hidden`}>
            <Image
              src={img.src}
              alt={`Pendolobo artwork ${i + 1}`}
              fill
              sizes="(max-width: 768px) 50vw, 20vw"
              className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
              priority={i < 3}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
