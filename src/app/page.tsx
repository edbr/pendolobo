import { PostersGrid } from "@/components/PostersGrid"

export default function Home() {
  return (
    <main className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-24 space-y-20 text-foreground">
      
 {/* 🔥 Hero Section */}
<div className="relative flex flex-col items-center text-center py-16 overflow-hidden">
  {/* ambient glow blobs */}
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-amber-500/10 blur-[150px] animate-pulse-slow" />
    <div className="absolute bottom-1/4 right-1/3 w-[350px] h-[350px] rounded-full bg-rose-500/10 blur-[130px] animate-pulse-slow delay-700" />
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.png')] opacity-[0.08] mix-blend-soft-light" />
  </div>

  <h1
    className="
      relative font-(--font-unifraktur) text-6xl md:text-8xl uppercase
      tracking-[0.25em] text-transparent bg-clip-text
      bg-linear-to-b from-amber-200 via-rose-300 to-red-600
      drop-shadow-[0_0_30px_rgba(255,191,0,0.3)]
      animate-[float_8s_ease-in-out_infinite]
    "
  >
    Pendolobo
    <span className="absolute inset-0 blur-[6px] opacity-30 bg-linear-to-b from-amber-200/50 via-rose-400/50 to-red-600/30 -z-10" />
  </h1>

  <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed text-zinc-300 font-light italic animate-fade-in">
    A 3D poster and creative visualization experiment exploring <br />
    <span className="text-amber-400/90 font-medium not-italic">
      surreal collectibles and prophetic absurdities
    </span>
    .
  </p>

  {/* wavy underline accent */}
  <div className="mt-8 h-0.5 w-48 bg-linear-to-r from-amber-500/40 via-rose-400/40 to-transparent rounded-full animate-pulse-slow" />
</div>

      {/* 🖼️ Collection Section */}
      <section className="w-full max-w-7xl space-y-12">
        <PostersGrid />
      </section>
    </main>
  )
}
