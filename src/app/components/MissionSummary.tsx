export default function MissionSummary() {
  return (
    <section className="bg-[var(--background)] text-[var(--foreground)] py-12">
      <div className="mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Our Mission
        </h2>
        <p className="text-base md:text-xl leading-relaxed">
          The BRAIN Center develops safe, effective, and affordable personalized neurotechnologies to diagnose, restore, enhance, and rehabilitate sensory, motor, affective, and cognitive functions. Through interdisciplinary research on brain function and behavior, the Center aims to improve human health and quality of life.
        </p>
        {/* <p className="mt-4 text-base md:text-lg leading-relaxed text-[color-mix(in_srgb,var(--foreground)_80%,white_20%)]">
          Through collaboration between academia, industry, and government, the Center accelerates
          discovery, translation, and workforce development in neural engineering.
        </p> */}
      </div>
    </section>
  );
}