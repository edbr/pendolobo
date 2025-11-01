import { PostersShowcase } from "@/components/PostersShowcase"
import { HeroMosaic } from "@/components/HeroMosaic"
import { PressStrip } from "@/components/PressStrip"
import { Header } from "@/components/header"
import { ArtShowcase } from "@/components/ArtShowcase"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroMosaic />
      <PressStrip />
      <ArtShowcase />
      {/* ✅ Full-width posters grid */}
      <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
        <PostersShowcase />
      </div>
    </main>
  )
}
