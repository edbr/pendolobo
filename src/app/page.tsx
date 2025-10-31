import { Header } from "@/components/header"
import { PostersGrid } from "@/components/PostersGrid"

export default function Home() {
  return (
    <main
      className="
        flex flex-col items-center justify-start
        min-h-screen px-4 sm:px-6 md:px-12
        pt-20 sm:pt-24 md:pt-28   /* ✅ replaces pt-5rem etc. */
        space-y-16 md:space-y-20 text-foreground
      "
    >
      <Header />

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center space-y-6 mt-4">
        <p className="max-w-xl sm:max-w-2xl mx-auto text-base sm:text-lg md:text-xl leading-relaxed text-zinc-300 font-light italic animate-fade-in px-4">
          A 3D poster and creative visualization experiment exploring{" "}
          <br className="hidden sm:block" />
          <span className="text-amber-400/90 font-medium not-italic">
            surreal collectibles and prophetic absurdities
          </span>
          .
        </p>
        <div className="h-0.5 w-32 sm:w-48 bg-linear-to-r from-amber-500/40 via-rose-400/40 to-transparent rounded-full animate-pulse-slow" />
      </section>

      {/* Poster Grid */}
      <section className="w-full max-w-7xl space-y-12 px-2 sm:px-6 md:px-8">
        <PostersGrid />
      </section>
    </main>
  )
}
