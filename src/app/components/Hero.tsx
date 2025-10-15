import BrainVideo from "./BrainVideo";

export default function Hero() {
  return (
    <section className="relative w-screen h-[calc(100vh-var(--header-height,120px))] text-white overflow-hidden -mx-4 left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
      {/* Background video layer */}
      <BrainVideo overlayOpacity={0.6} />
      
      {/* Foreground content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        <div className="max-w-5xl text-center">
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
