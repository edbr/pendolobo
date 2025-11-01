import { PostersShowcase } from "@/components/PostersShowcase"
import { HeroMosaic } from "@/components/HeroMosaic"
import { PressStrip } from "@/components/PressStrip"


export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
        <HeroMosaic />

      {/* 🗞️ “Press” / fake logos */}
    <PressStrip />

      {/* 🖼️ Collection Grid */}
      <section className="py-24 px-4 sm:px-8 md:px-16 max-w-7xl mx-auto">
        <h2 className="text-center text-3xl md:text-4xl font-light mb-12 text-foreground">
          The Collection
        </h2>
        <PostersShowcase />
      </section>
    </main>
  )
}
