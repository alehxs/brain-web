export default function MissionSummary() {
  return (
    <section className="bg-[var(--midnight-blue)] py-12 md:py-16">
      <div className="mx-auto max-w-5xl px-6 text-center text-white sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--deep-teal)] mb-2">
          Organization
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-6">
          Our Mission
        </h2>
        <p className="text-lg md:text-xl font-normal leading-relaxed text-slate-100 max-w-3xl mx-auto">
          The BRAIN Center develops safe, effective, and affordable personalized
          neurotechnologies to diagnose, restore, enhance, and rehabilitate
          sensory, motor, affective, and cognitive functions. Through
          interdisciplinary research on brain function and behavior, the Center
          aims to improve human health and quality of life.
        </p>
      </div>
    </section>
  );
}