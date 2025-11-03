import { PostersShowcase } from "@/components/PostersShowcase"
import { HeroMosaic } from "@/components/HeroMosaic"
import { Header } from "@/components/header"
import { ArtShowcase } from "@/components/ArtShowcase"
import { Footer } from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroMosaic />
      <ArtShowcase />
      <PostersShowcase />
      <Footer />
    </main>
  )
}
