import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Industry Advisory Board | NSF BRAIN",
  description:
    "Meet the Industry Advisory Board leadership guiding the BRAIN Center's research direction and industry partnerships.",
};

const iabMembers = [
  {
    role: "IAB Chair",
    name: "Stanley Chang",
    title: "BRAIN I/U CRC IAB Chair, President and Chief Product Officer, Scialiva",
    imageSrc: "/images/people/stanley-chang.jpg",
    bio: "Stanley brings a distinctive blend of biotechnology, high-tech, and legal expertise. As an executive, entrepreneur, investor, and co-founder in biotech and high-tech ventures, he managed business operations and P&L responsibilities while strategically integrating diverse disciplines while driving innovation. Stanley has hands-on experience in areas critical to the IUCRC-BRAIN mission, including diagnostic tests, AI-driven algorithms, encryption, and error correction systems. Additionally, his legal background as an attorney specializing in intellectual property and transactional matters positions him to navigate complex industry-academic collaborations.",
  },
  {
    role: "IAB Co-Chair",
    name: "Craig Mermel",
    title: "BRAIN I/U CRC IAB Co-Chair, MD, PhD, President and Chief Product Officer, Precision Neuroscience",
    imageSrc: "/images/people/craig-mermel.png",
    bio: `"Everyone deserves an unrestricted life. Restoring freedom through brain-computer interfaces, AI, smart exoskeletons, and other neuroengineering innovations can help provide breakthrough treatments to people with neurological conditions. At the IUCRC BRAIN – a leading industry-university-government partnership – industry members collaborate with world class researchers at premier institutions worldwide to advance the state of the art in neurotechnology.

A modest investment into BRAIN membership gives industry members the leverage and big returns that would not be possible otherwise. We get to work side by side with billion-dollar neurotech firms, interact with federal regulatory agencies, hire highly skilled students, have a say in selecting cutting edge projects, have the choice to commercialize novel devices and be a part of the neurotechnology revolution: Neuroengineered for What's is Next."`,
  },
];

export default function IABPage() {
  return (
    <main className="bg-white">
      <section className="bg-[var(--light-slate)] border-b border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-10 sm:px-8 sm:py-12 lg:py-16">
          <h1 className="text-3xl font-extrabold tracking-tight text-[var(--midnight-blue)] sm:text-4xl">
            Industry Advisory Board
          </h1>
          <p className="mt-4 max-w-3xl text-sm sm:text-base text-slate-800">
            The Industry Advisory Board (IAB) provides strategic guidance, shapes research
            priorities, and ensures the BRAIN Center's work remains aligned with real-world industry
            needs and opportunities.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-12 lg:py-14">
        <div className="mx-auto max-w-6xl px-6 sm:px-8 space-y-12">
          {iabMembers.map((member) => (
            <article
              key={member.name}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="grid gap-6 md:grid-cols-[280px_1fr] lg:gap-8">
                <div className="relative aspect-[4/5] w-full bg-slate-100 md:aspect-auto md:h-full">
                  <Image
                    src={member.imageSrc}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 280px"
                  />
                </div>

                <div className="p-6 md:py-8">
                  <p className="text-sm font-semibold uppercase tracking-wide text-[var(--deep-teal)]">
                    {member.role}
                  </p>
                  <h2 className="mt-2 text-2xl font-bold text-slate-900">
                    {member.name}
                  </h2>
                  <p className="mt-2 text-sm font-medium text-slate-700">
                    {member.title}
                  </p>
                  <div className="mt-4 text-sm leading-relaxed text-slate-600">
                    {member.bio.split('\n\n').map((paragraph, idx) => (
                      <p key={idx} className={idx > 0 ? 'mt-4' : ''}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}