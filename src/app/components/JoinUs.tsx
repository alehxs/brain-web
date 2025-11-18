import React from "react";

const JoinUs: React.FC = () => {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">
          Get Involved
        </h2>

        <p className="mt-4 max-w-2xl mx-auto text-base md:text-lg leading-relaxed text-[rgba(10,25,47,0.85)]">
          Partner with us to advance neurotechnology research, innovation, and
          education. Join our mission to bridge academia, industry, and
          innovation for a better future.
        </p>

        <a
          href="/join"
          className="inline-block mt-8 rounded-lg bg-[var(--luminous-mint)] px-8 py-3 text-base font-semibold text-[black] shadow-md transition hover:bg-[#F0F2F5]"
        >
          Join Us
        </a>
      </div>
    </section>
  );
};

export default JoinUs;