import Image from "next/image";
export default function Partners() {
  return (
    <section className="relative bg-[var(--background-light,white)] w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-10">
      <div className="mx-auto max-w-7xl px-6 text-center">
        {/* ---- Brain Sites ---- */}
        <div className="mt-8">
          <h3 className="text-2xl md:text-5xl font-semibold text-[var(--deep-teal)] mb-8">
            BRAIN Sites
          </h3>
          <div className="flex flex-wrap gap-x-24 justify-center max-w-6xl mx-auto">
            <Logo
              src="/partners/uh.png"
              alt="University of Houston"
              name="University of Houston"
            />
            <Logo
              src="/partners/asu.png"
              alt="Arizona State University"
              name="Arizona State University"
            />
            <Logo
              src="/partners/git.png"
              alt="Georgia Institute of Technology"
              name="Georgia Tech"
            />
            <Logo
              src="/partners/wvu.png"
              alt="West Virginia University"
              name="West Virginia University"
            />
            <Logo
              src="/partners/umbc.png"
              alt="University of Maryland, Baltimore County"
              name="UMBC"
            />
          </div>
        </div>
        {/* ---- External Collaborating Sites ---- */}
        <div className="mt-14">
          <h3 className="text-2xl md:text-5xl font-semibold text-[var(--deep-teal)] mb-8">
            External Collaborating Sites
          </h3>
          <div className="flex flex-wrap gap-x-24 justify-center max-w-6xl mx-auto">
            <Logo
              src="/partners/neu.png"
              alt="Northeastern University"
              name="Northeastern University"
            />
            <Logo
              src="/partners/uab.svg"
              alt="University of Alabama at Birmingham"
              name="UAB"
            />
          </div>
        </div>
        {/* ---- International Affiliate Sites ---- */}
        <div className="mt-14">
          <h3 className="text-2xl md:text-5xl font-semibold text-[var(--deep-teal)] mb-8">
            International Affiliate Sites
          </h3>
          <div className="flex flex-wrap gap-x-24 justify-center max-w-6xl mx-auto">
            <Logo
              src="/partners/umh.png"
              alt="Miguel Hernández University of Elche"
              name="Miguel Hernández University of Elche"
            />
            <Logo
              src="/partners/tec.png"
              alt="Tecnológico de Monterrey"
              name="Tec de Monterrey"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
function Logo({ src, alt, name }: { src: string; alt: string; name: string }) {
  return (
    <div className="flex items-center justify-center">
      <div className="w-80 h-44 flex items-center justify-center">
        <Image
          src={src}
          alt={alt}
          width={320}
          height={176}
          className="object-contain"
        />
      </div>
    </div>
  );
}
