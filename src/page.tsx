import { ThreePoster } from "@/components/ThreePoster";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 space-y-8">
      <h1 className="text-4xl font-semibold tracking-tight">3D Deck of Cards</h1>
      <ThreePoster />
    </main>
  );
}
