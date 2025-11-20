import BrainVideo from "./BrainVideo";

export default function Hero() {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden text-white md:left-1/2 md:right-1/2 md:-mx-[50vw] md:w-screen">
      {/* Background video layer */}
      <BrainVideo overlayOpacity={0.75} />

      {/* Foreground content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
            Building Reliable Advances and Innovations in Neurotechnology
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-base md:text-xl text-white/80">
            Bridging academia, industry, government, and innovation in neurotechnology.
          </p>
        </div>
      </div>
    </section>
  );
}
