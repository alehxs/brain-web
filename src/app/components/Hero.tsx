import BrainVideo from "./BrainVideo";

export default function Hero() {
  return (
    <section className="relative overflow-hidden w-screen h-screen text-white left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      {/* Background video layer */}
      <BrainVideo overlayOpacity={0.6} />
      {/* Foreground content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Building Reliable Advances and Innovations in Neurotechnology
        </h1>
        <p className="mt-6 text-lg text-white/80 max-w-3xl mx-auto">
          Bridging academia, industry, and innovation in neurotechnology.
        </p>
      </div>
    </section>
  );
}