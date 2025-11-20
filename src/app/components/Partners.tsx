import Image from "next/image";

export default function Partners() {
  return (
    <section className="relative bg-white w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] py-12">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <div className="space-y-10">
          {/* BRAIN Sites */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-6">
              BRAIN Sites
            </h3>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5 max-w-5xl mx-auto">
              <Logo
                src="/partners/uh.png"
                alt="University of Houston"
              />
              <Logo
                src="/partners/asu.png"
                alt="Arizona State University"
              />
              <Logo
                src="/partners/git.png"
                alt="Georgia Institute of Technology"
              />
              <Logo
                src="/partners/wvu.png"
                alt="West Virginia University"
              />
              <Logo
                src="/partners/umbc.png"
                alt="University of Maryland, Baltimore County"
              />
            </div>
          </div>

          {/* External Collaborating Sites */}
          <div>
            <h3 className="text-xl font-semibold text-slate-900 mb-5">
              External Collaborating Sites
            </h3>
            <div className="flex flex-wrap gap-8 justify-center max-w-3xl mx-auto">
              <Logo
                src="/partners/neu.png"
                alt="Northeastern University"
              />
              <Logo
                src="/partners/uab.svg"
                alt="University of Alabama at Birmingham"
              />
            </div>
          </div>

          {/* International Affiliate Sites */}
          <div>
            <h3 className="text-xl font-semibold text-slate-900 mb-5">
              International Affiliate Sites
            </h3>
            <div className="flex flex-wrap gap-8 justify-center max-w-3xl mx-auto">
              <Logo
                src="/partners/umh.png"
                alt="Miguel Hernández University of Elche"
              />
              <Logo
                src="/partners/tec.png"
                alt="Tecnológico de Monterrey"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Logo({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="flex items-center justify-center">
      <div className="relative w-40 h-20">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain"
          sizes="160px"
        />
      </div>
    </div>
  );
}