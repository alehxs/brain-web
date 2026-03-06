import type { Metadata } from "next";
import Image from "next/image";
import PageHeader from "@/app/components/PageHeader";

export const metadata: Metadata = {
  title: "Industry Advisory Board",
  description:
    "Meet the Industry Advisory Board leadership guiding the BRAIN Center's research direction and industry partnerships.",
  alternates: { canonical: "/organization/iab" },
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

// Strip the redundant IAB role prefix from the title field before display.
// Prefixes follow the pattern "BRAIN I/U CRC IAB <Role>" plus optional credential
// suffixes like ", MD, PhD", then a comma separating the actual job title.
function cleanTitle(title: string): string {
  const match = title.match(/^BRAIN I\/U CRC IAB [^,]+(?:,\s*(?:MD|PhD|MS|DO))*,\s*(.+)$/i);
  return match ? match[1] : title;
}

export default function IABPage() {
  return (
    <div className="bg-white">
      <PageHeader
        eyebrow="Organization"
        title="Industry Advisory Board"
        description="The Industry Advisory Board (IAB) provides strategic guidance, sets research priorities, and connects the BRAIN Center's work to industry needs across the neurotechnology sector."
      />

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-6 sm:px-8">
          <div className="flex flex-col gap-10">
            {iabMembers.map((member) => (
              <article
                key={member.name}
                className="overflow-hidden rounded-3xl ring-1 ring-black/5 bg-white shadow-sm flex flex-col md:flex-row"
              >
                {/* Photo */}
                <div className="relative w-full aspect-[2/3] md:aspect-auto md:w-48 md:shrink-0 md:self-stretch bg-stone-100">
                  <Image
                    src={member.imageSrc}
                    alt={member.name}
                    fill
                    className="object-cover object-[50%_20%]"
                    sizes="(min-width: 768px) 192px, 100vw"
                  />
                </div>

                {/* Text */}
                <div className="flex flex-col p-8">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[var(--deep-teal)]">
                    {member.role}
                  </p>
                  <h2 className="mt-1.5 text-2xl font-semibold text-slate-900">
                    {member.name}
                  </h2>
                  <p className="mt-1.5 text-sm text-slate-600 leading-snug">
                    {cleanTitle(member.title)}
                  </p>
                  <div className="mt-8 text-[0.9375rem] leading-relaxed text-slate-500">
                    {member.bio.split('\n\n').map((paragraph, idx) => (
                      <p key={idx} className={idx > 0 ? 'mt-4' : ''}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
