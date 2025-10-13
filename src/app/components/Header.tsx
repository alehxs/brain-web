"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

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

// nav model (fill hrefs as you create pages)
const NAV = [
  { label: "Home", href: "/" },
  {
    label: "About",
    items: [
      { label: "Mission", href: "/about" },
      { label: "Leadership", href: "/about/leadership" },
      { label: "Sites & Universities", href: "/about/universities" },
    ],
  },
  {
    label: "Research",
    items: [
      { label: "Focus Areas", href: "/research" },
      { label: "Publications", href: "/research/publications" },
    ],
  },
  {
    label: "Impacts",
    items: [
      { label: "Industry Partnerships", href: "/impacts/industry" },
      { label: "Workforce & Students", href: "/impacts/workforce" },
    ],
  },
  {
    label: "Organization",
    items: [
      { label: "Advisory Board", href: "/organization/iab" },
      { label: "Bylaws", href: "/organization/bylaws" },
    ],
  },
  {
    label: "Workforce Development",
    items: [
      { label: "Programs", href: "/workforce" },
      { label: "Student Opportunities", href: "/workforce/students" },
    ],
  },
  {
    label: "Membership",
    items: [
      { label: "How to Join", href: "/membership" },
      { label: "Benefits", href: "/membership/benefits" },
    ],
  },
  { label: "IAB 2025", href: "/iab-2025" },
  { label: "Events", href: "/events" },
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
    <header className="sticky top-0 z-50 text-white">
      {/* Top brand bar */}
      <div className="bg-[var(--midnight-blue)]">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex w-full items-center justify-center py-4 lg:justify-center">
            <div className="relative flex w-full items-center justify-center lg:justify-center">
              {/* Logo group */}
              <div className="flex items-center gap-2">
                <Image
                  src="/brain-center.png"
                  alt="BRAIN — Building Reliable Advances and Innovations in Neurotechnology"
                  width={300}
                  height={60}
                  priority
                />
                <span className="h-20 w-[1px] bg-white mx-4" aria-hidden="true" />
                <Image src="/nsf-logo.png" alt="NSF" width={85} height={200} />
              </div>

              {/* Mobile burger on right only for small screens */}
              <button
                className="absolute right-0 top-1/2 -translate-y-1/2 lg:hidden rounded-md border border-white/20 p-2 text-white"
                aria-expanded={mobileOpen}
                aria-controls="primary-nav"
                aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                onClick={() => setMobileOpen((v) => !v)}
              >
                {mobileOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom nav bar (same color as top brand bar) */}
      <div className="bg-[var(--midnight-blue)]">
        <nav
          id="primary-nav"
          className="mx-auto max-w-7xl px-2 sm:px-4"
          aria-label="Primary"
          onMouseLeave={() => setOpenMenu(null)}
        >
          {/* Desktop nav */}
          <ul className="hidden items-center gap-8 px-2 py-2 text-md font-medium tracking-normal lg:flex">
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

                    {}
                    <div
                      className={`absolute left-0 mt-2 min-w-[15rem] rounded-md border border-white/10 bg-[color-mix(in_srgb,var(--midnight-blue)_90%,var(--deep-teal)_10%)] p-2 shadow-lg transition ${
                        openMenu === item.label ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
                      }`}
                      onMouseEnter={() => setOpenMenu(item.label)}
                    >
                      <ul className="grid gap-1">
                        {item.items.map((sub) => (
                          <li key={sub.label}>
                            <Link
                              className="block rounded px-3 py-2 text-white/90 hover:bg-white/10 hover:text-[var(--luminous-mint)]"
                              href={sub.href}
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
                          {item.items.map((sub) => (
                            <li key={sub.label}>
                              <Link
                                className="block rounded px-2 py-2 text-white/80 font-semibold hover:bg-white/10 hover:text-[var(--luminous-mint)]"
                                href={sub.href}
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
                        className="block rounded px-2 py-2 text-white/90 font-semibold hover:text-[var(--luminous-mint)] hover:bg-white/10"
                        href={(item as any).href}
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