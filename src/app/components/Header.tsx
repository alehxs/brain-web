"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

// helper: detect external URLs
function isExternal(href: string) {
  return /^https?:\/\//i.test(href);
}

// icons
function ChevronDown({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 10.17l3.71-2.94a.75.75 0 1 1 .94 1.16l-4.24 3.36a.75.75 0 0 1-.94 0L5.21 8.39a.75.75 0 0 1 .02-1.18z" />
    </svg>
  );
}
function MenuIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}
function CloseIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

// Reusable logo group (single size since we no longer compact on scroll)
function LogoGroup() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--luminous-mint)] rounded"
    >
      <Image
        src="/brain-center.png"
        alt="BRAIN — Building Reliable Advances and Innovations in Neurotechnology"
        width={320}
        height={64}
        priority
        className="h-auto"
      />
      <span className="bg-white mx-4 w-px h-20" aria-hidden="true" />
      <Image
        src="/nsf-logo.png"
        alt="NSF"
        width={92}
        height={200}
        className="h-auto"
      />
    </Link>
  );
}

// nav model (fill hrefs as you create pages)
const NAV = [
  {
    label: "About",
    items: [
      { label: "Media", href: "/media" },
      { label: "NSF IUCRC", href: "/about/iucrc" },
      { label: "Uniqueness", href: "/about/uniqueness" },
      { label: "Intellectual Property", href: "/about/intellectual-property" },
      { label: "FAQ", href: "/faq" },
    ],
  },
  {
    label: "Research",
    items: [
      { label: "Thrusts", href: "/research/thrusts" },
      { label: "Current Projects", href: "/research/current-projects" },
      { label: "Past Projects", href: "/research/past-projects" },
      { label: "Facilities", href: "/research/facilities" },
    ],
  },
  {
    label: "Impacts",
    items: [
      { label: "Making an Impact", href: "/impacts/making-an-impact" },
      { label: "Economic Impact", href: "/impacts/economic-impact" },
      { label: "Broader Impacts", href: "/impacts/broader-impacts" },
      { label: "Academic Assessments", href: "/impacts/academic-assessments" },
      { label: "Publications", href: "/publications" },
    ],
  },
  {
    label: "Organization",
    items: [
      { label: "Leadership", href: "/organization/leadership" },
      { label: "BRAIN Sites", href: "/organization/sites" },
      { label: "Industry Members", href: "/organization/industry-members" },
      { label: "Industry Advisory Board (IAB)", href: "/organization/iab" },
      { label: "Faculty", href: "/faculty" },
      { label: "Students", href: "/organization/students" },
      { label: "Careers", href: "/organization/Careers" },
    ],
  },
  {
    label: "Workforce",
    items: [
      { label: "Information", href: "/workforce/information" },
      { label: "REU Website", href: "https://reu.egr.uh.edu/overview" },
      { label: "REU Regulatory Science", href: "https://reu.egr.uh.edu/regulatory-science" },
      { label: "REU Supplement", href: "/workforce/supplement" },
      { label: "BRAIN Student Network", href: "/workforce/brain-student-network" },
      { label: "NSAP (Post-Bacc)", href: "https://www.egr.uh.edu/nsap/about" },
      { label: "REM (Research Mentoring)", href: "https://reu.egr.uh.edu/rem" },
      { label: "Training", href: "/workforce/training" },
    ],
  },
  {
    label: "Membership",
    items: [
      { label: "Innovation Catalysts", href: "/membership/catalysts" },
      { label: "Benefits", href: "/membership/benefits" },
      { label: "Join", href: "/join" },
    ],
  },
  { label: "News", href: "/news" },
  { label: "Events", href: "/events" },
  { label: "IAB", href: "/iab" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  // Close mobile menu on Escape key
  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  return (
    <header className="relative z-50 text-white">
      {/* Top brand bar (static at page top; not sticky) */}
      <div className="bg-[var(--midnight-blue)]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex w-full items-center justify-center py-6">
            <div className="relative flex w-full items-center justify-center">
              <LogoGroup />
              {/* Mobile burger on the right */}
              <button
                className="absolute right-0 top-1/2 -translate-y-1/2 lg:hidden rounded-md border border-white/20 p-2 text-white"
                aria-expanded={mobileOpen}
                aria-controls="primary-nav"
                aria-label={mobileOpen ? "Close menu" : "Open menu"}
                onClick={() => setMobileOpen((v) => !v)}
              >
                {mobileOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom nav bar (static) */}
      <div className="bg-[var(--midnight-blue)]">
        <nav
          id="primary-nav"
          className="mx-auto max-w-7xl px-2 sm:px-4"
          aria-label="Primary"
          onMouseLeave={() => setOpenMenu(null)}
        >
          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center justify-center gap-8 px-2 py-2 text-md font-medium tracking-normal mx-auto">
            {NAV.map((item) => (
              <li key={item.label} className="relative">
                {"items" in item && item.items ? (
                  <>
                    <button
                      className="flex items-center gap-1 rounded px-1 py-1 text-white font-semibold hover:text-[var(--luminous-mint)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-secondary)]"
                      aria-haspopup="true"
                      aria-expanded={openMenu === item.label}
                      onMouseEnter={() => setOpenMenu(item.label)}
                      onFocus={() => setOpenMenu(item.label)}
                      onClick={() => setOpenMenu((v) => (v === item.label ? null : item.label))}
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${openMenu === item.label ? "rotate-180" : ""}`} />
                    </button>

                    <div
                      className={`absolute left-0 mt-2 min-w-[15rem] rounded-md border border-white/10 bg-[color-mix(in_srgb,var(--midnight-blue)_90%,var(--deep-teal)_10%)] p-2 shadow-lg transition ${
                        openMenu === item.label ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
                      }`}
                      onMouseEnter={() => setOpenMenu(item.label)}
                    >
                      <ul className="grid gap-1">
                        {item.items
                          .filter((sub) => sub.label && sub.href)
                          .map((sub, idx) => (
                            <li key={`${sub.href}-${idx}`}>
                              <Link
                                className="block rounded px-3 py-2 text-white/90 hover:bg-white/10 hover:text-[var(--luminous-mint)]"
                                href={sub.href}
                                target={isExternal(sub.href) ? "_blank" : undefined}
                                rel={isExternal(sub.href) ? "noopener noreferrer" : undefined}
                                onClick={() => setOpenMenu(null)}
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </>
                ) : (
                  <Link
                    className="rounded px-1 py-1 text-white font-semibold hover:text-[var(--luminous-mint)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent-secondary)]"
                    href={(item as any).href}
                    target={isExternal((item as any).href) ? "_blank" : undefined}
                    rel={isExternal((item as any).href) ? "noopener noreferrer" : undefined}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile dropdown (inline) */}
          {mobileOpen && (
            <div className="lg:hidden border-t border-white/10">
              <ul className="space-y-2 px-4 py-4 text-base bg-[color-mix(in_srgb,var(--midnight-blue)_95%,var(--deep-teal)_5%)]">
                {NAV.map((item) => (
                  <li key={item.label}>
                    {"items" in item && item.items ? (
                      <details className="group">
                        <summary className="flex cursor-pointer list-none items-center justify-between rounded px-2 py-2 text-white/90 hover:bg-white/10 font-semibold">
                          <span>{item.label}</span>
                          <ChevronDown className="w-4 h-4 transition group-open:rotate-180" />
                        </summary>
                        <ul className="mt-1 space-y-1 pl-3">
                          {item.items
                            .filter((sub) => sub.label && sub.href)
                            .map((sub, idx) => (
                              <li key={`${sub.href}-${idx}`}>
                                <Link
                                  className="block rounded px-2 py-2 text-white/80 font-semibold hover:bg-white/10 hover:text-[var(--luminous-mint)]"
                                  href={sub.href}
                                  target={isExternal(sub.href) ? "_blank" : undefined}
                                  rel={isExternal(sub.href) ? "noopener noreferrer" : undefined}
                                  onClick={() => setMobileOpen(false)}
                                >
                                  {sub.label}
                                </Link>
                              </li>
                            ))}
                        </ul>
                      </details>
                    ) : (
                      <Link
                        className="block rounded px-2 py-2 text-white/90 font-semibold hover:bg-white/10"
                        href={(item as any).href}
                        target={isExternal((item as any).href) ? "_blank" : undefined}
                        rel={isExternal((item as any).href) ? "noopener noreferrer" : undefined}
                        onClick={() => setMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}