import React from "react";

const JoinUs: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-6 text-center sm:px-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">
          Get Involved
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg leading-relaxed text-[var(--midnight-blue)]/85">
          Partner with us to advance neurotechnology research, innovation, and
          education. Join our mission to bridge academia, industry, and
          innovation for a better future.
        </p>

        <a
          href="/join"
          className="inline-block mt-8 rounded-lg bg-[var(--deep-teal)] px-8 py-3 text-base font-semibold text-white shadow-md transition hover:bg-[var(--cta-hover)]"
        >
          Join Us
        </a>
      </div>
    </section>
  );
};

export default JoinUs;