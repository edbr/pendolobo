import { PostersShowcase } from "@/components/PostersShowcase"
import { HeroMosaic } from "@/components/HeroMosaic"
import { PressStrip } from "@/components/PressStrip"
import { Header } from "@/components/header"
import { ArtShowcase } from "@/components/ArtShowcase"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroMosaic />
      <PressStrip />
      <ArtShowcase />
      <PostersShowcase />
      <Footer />
    </main>
  )
}
