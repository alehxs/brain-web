import React from "react";

const JoinUs: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#f9fafb] to-[#e8f4f3] py-24 flex flex-col items-center text-center px-6 shadow-inner">
      <h2 className="text-4xl font-extrabold tracking-tight text-[var(--midnight-blue)] mb-6">
        Get Involved
      </h2>
      <p className="max-w-2xl text-[var(--slate-gray)] text-lg mb-10 leading-relaxed">
        Partner with us to advance neurotechnology research, innovation, and education.
        Join our mission to bridge academia, industry, and innovation for a better future.
      </p>
      <a
        href="/donate"
        className="cta-button px-10"
      >
        Join Us
      </a>
    </section>
  );
};

export default JoinUs;