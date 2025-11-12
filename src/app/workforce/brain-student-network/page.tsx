import Image from "next/image";
import SquareSlideshow from "./SquareSlideshow";
import PortraitCard from "../../components/PortraitCard";

export const metadata = {
  title: "BRAIN Student Network | BRAIN Center",
  description:
    "The BRAIN Student Network fosters collaboration, leadership, and professional development across the BRAIN Center sites.",
};

const OFFICERS = [
  {
    name: "Yoshua E. Lima–Carmona",
    role: "President",
    affiliation: "University of Houston",
    href: "/people/yoshua-lima-carmona",
    src: "/images/people/yoshua-e-lima-carmona.jpg",
  },
  {
    name: "Aime J. Aguilar–Herrera",
    role: "Vice-President",
    affiliation: "University of Houston",
    href: "/people/aime-aguilar-herrera",
    src: "/images/people/aime-j-aguilar-herrera.png",
  },
  {
    name: "Maxine Annel Pacheco–Ramirez",
    role: "Treasurer",
    affiliation: "University of Houston",
    href: "/people/maxine-pacheco-ramirez",
    src: "/images/people/maxine-annel-pacheco-ramirez.jpg",
  },
  {
    name: "Lianne Sánchez–Rodríguez",
    role: "Secretary",
    affiliation: "University of Houston",
    href: "/people/lianne-sanchez-rodriguez",
    src: "/images/people/lianne-sanchez-rodriguez.png"
  },
];

const GALLERY = [
  "/images/student-network/gallery/1.jpg",
  "/images/student-network/gallery/2.jpg",
  "/images/student-network/gallery/3.jpg",
];

export default function StudentNetworkPage() {
  return (
    <main className="bg-white">
      {/* HERO — top 2/3 crop, no extra whitespace */}
      <section className="relative border-b border-gray-200">
        <div className="relative w-full overflow-hidden aspect-[1600/350]">
          <Image
            src="/images/brain-student-network.png"
            alt="BRAIN Student Network group"
            fill
            priority
            className="object-cover object-top"
            sizes="100vw"
          />
        </div>
        <div className="mx-auto max-w-6xl px-6 sm:px-8 py-6">
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-[var(--midnight-blue,#0A192F)]">
            BRAIN Student Network
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-10 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="max-w-4xl">
            <p className="text-sm sm:text-base text-gray-900">
              The BRAIN Student Network builds community among students across Center sites,
              supports student-led initiatives, and connects members with faculty, industry, and
              peers for professional development.
            </p>
            <ul className="mt-5 list-disc list-inside space-y-2 marker:text-[var(--deep-teal,#00A79D)] text-sm sm:text-base text-gray-900">
              <li>Foster collaboration and membership engagement across sites.</li>
              <li>Improve communication between colleges, labs, and BRAIN Center sites.</li>
              <li>Support student-led initiatives and research involvement.</li>
              <li>Promote advances in neurotechnology and share best practices.</li>
              <li>Connect students with faculty, industry leaders, and events for growth.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* OFFICERS (tall portrait cards) */}
      <section className="py-4">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <h2 className="text-2xl font-semibold text-[var(--midnight-blue,#0A192F)]">
            UH BRAIN Student Officers
          </h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {OFFICERS.map((o) => (
              <PortraitCard
                key={o.name}
                name={o.name}
                role={o.role}
                affiliation={o.affiliation}
                href={o.href}
                src={o.src}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SLIDESHOW (square) */}
      <section className="py-10 sm:py-14">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <SquareSlideshow images={GALLERY} />
        </div>
      </section>
    </main>
  );
}