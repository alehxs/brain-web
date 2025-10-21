import BrainVideo from "./BrainVideo";

export default function Hero() {
  return (
    <section className="relative h-[calc(100vh-var(--header-height,120px))] w-full overflow-hidden text-white md:left-1/2 md:right-1/2 md:-mx-[50vw] md:w-screen">
      {/* Background video layer */}
      <BrainVideo overlayOpacity={0.6} />

      {/* Foreground content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight">
            Building Reliable Advances and Innovations in Neurotechnology
          </h1>
          <p className="mt-6 text-4xl text-white/80 max-w-3xl mx-auto">
            Bridging academia, industry, and innovation in neurotechnology.
          </p>
        </div>
      </div>
    </section>
  );
}
