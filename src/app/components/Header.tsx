"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

function isExternal(href: string) {
  return /^https?:\/\//i.test(href);
}

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

function LogoGroup() {
  return (
    <Link
      href="/"
      className="flex items-center gap-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--luminous-mint)] rounded group"
    >
      <Image
        src="/brain-center.png"
        alt="BRAIN — Building Reliable Advances and Innovations in Neurotechnology"
        width={280}
        height={56}
        priority
        className="h-12 w-auto object-contain"
      />
      
      {/* Divider and NSF Lockup */}
      <div className="flex items-center gap-4 border-l border-white/30 pl-6 py-1">
        <Image
          src="/nsf-logo.png"
          alt="NSF"
          width={48}
          height={48}
          className="h-12 w-auto object-contain opacity-90 group-hover:opacity-100 transition-all duration-300"
        />
        
        <div className="hidden md:block text-left leading-tight opacity-80">
          <span className="block text-[0.65rem] uppercase tracking-widest font-semibold">Supported by</span>
          <span className="block text-[0.65rem] uppercase tracking-widest font-semibold">National Science Foundation</span>
        </div>
      </div>
    </Link>
  );
}

type NavSubItem = { label: string; href: string; };
type NavGroup = { label: string; items: NavSubItem[]; };
type NavSingle = { label: string; href: string; };
type NavItem = NavGroup | NavSingle;

function isNavGroup(item: NavItem): item is NavGroup {
  return "items" in item;
}

const NAV: NavItem[] = [
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
  { label: "Donate", href: "/donate" }, 
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && mobileOpen) {
        setMobileOpen(false);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileOpen]);

  const isActive = (href: string) => pathname?.startsWith(href);
  const isGroupActive = (items: NavSubItem[]) => items.some(i => pathname?.startsWith(i.href));

  return (
    <header className="relative z-50 text-white bg-[var(--midnight-blue)] shadow-xl">
      <div className="border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex w-full items-center justify-between py-3">
            <LogoGroup />
            
            <button
              className="lg:hidden rounded-md border border-white/20 p-2 text-white hover:bg-white/10"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>

      <div className="hidden lg:block border-t border-black/20 bg-black/10">
        <nav
          id="primary-nav"
          className="mx-auto max-w-7xl px-4"
          onMouseLeave={() => setOpenMenu(null)}
        >
          <ul className="flex items-center justify-between h-14 text-sm font-medium">
            <div className="flex items-center gap-8">
              {NAV.filter(item => item.label !== "Donate").map((item) => (
                <li key={item.label} className="relative h-full flex items-center">
                  {isNavGroup(item) ? (
                    <>
                      <button
                        className="flex items-center gap-1 py-2 group transition-colors"
                        onMouseEnter={() => setOpenMenu(item.label)}
                        onClick={() => setOpenMenu((v) => (v === item.label ? null : item.label))}
                      >
                        <span className={`relative ${
                          openMenu === item.label || isGroupActive(item.items) ? "text-[var(--luminous-mint)]" : "text-white/90 group-hover:text-[var(--luminous-mint)]"
                        }`}>
                          {item.label}
                          {/* Active indicator line */}
                          {(isGroupActive(item.items) || openMenu === item.label) && (
                            <span className="absolute -bottom-[9px] left-0 w-full h-[2px] bg-[var(--deep-teal)]" />
                          )}
                        </span>
                        <ChevronDown className={`w-3 h-3 transition-transform ${openMenu === item.label ? "rotate-180" : ""} ${
                          openMenu === item.label || isGroupActive(item.items) ? "text-[var(--luminous-mint)]" : "text-white/90 group-hover:text-[var(--luminous-mint)]"
                        }`} />
                      </button>
                      
                      <div
                        // Removed "border-t-2 border-[var(--deep-teal)]" here
                        className={`absolute left-0 top-full mt-0 w-64 rounded-b-lg bg-[var(--midnight-blue)] p-1 shadow-2xl transition-all duration-200 origin-top ${
                          openMenu === item.label ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
                        }`}
                        onMouseEnter={() => setOpenMenu(item.label)}
                      >
                        <ul className="py-2">
                          {item.items.map((sub, idx) => (
                            <li key={`${sub.href}-${idx}`}>
                              <Link
                                className={`block px-4 py-2.5 text-[13px] transition-colors ${
                                  isActive(sub.href) 
                                    ? "bg-white/10 text-[var(--luminous-mint)]" 
                                    : "text-white/80 hover:bg-white/5 hover:text-white"
                                }`}
                                href={sub.href}
                                target={isExternal(sub.href) ? "_blank" : undefined}
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
                    <>
                      <Link
                        className="py-2 group transition-colors"
                        href={item.href}
                      >
                         <span className={`relative ${
                          isActive(item.href) ? "text-[var(--luminous-mint)]" : "text-white/90 group-hover:text-[var(--luminous-mint)]"
                        }`}>
                          {item.label}
                          {isActive(item.href) && (
                             <span className="absolute -bottom-[9px] left-0 w-full h-[2px] bg-[var(--deep-teal)]" />
                          )}
                        </span>
                      </Link>
                    </>
                  )}
                </li>
              ))}
            </div>

            <li>
               <Link 
                 href="/donate" 
                 className="bg-[var(--deep-teal)] hover:bg-[var(--luminous-mint)] hover:text-[var(--midnight-blue)] text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all transform hover:-translate-y-0.5 shadow-lg"
               >
                 Donate
               </Link>
            </li>
          </ul>
        </nav>
      </div>

      {mobileOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[var(--midnight-blue)] border-t border-white/10 shadow-2xl h-[calc(100vh-80px)] overflow-y-auto">
          <ul className="flex flex-col p-6 gap-4">
            {NAV.map((item) => (
              <li key={item.label} className="border-b border-white/5 pb-2">
                {isNavGroup(item) ? (
                  <details className="group">
                    <summary className="flex cursor-pointer items-center justify-between text-lg font-semibold text-white/90">
                      {item.label}
                      <ChevronDown className="transition-transform group-open:rotate-180" />
                    </summary>
                    <ul className="mt-4 ml-4 space-y-3 border-l border-white/10 pl-4">
                      {item.items.map((sub, idx) => (
                        <li key={idx}>
                          <Link
                            href={sub.href}
                            className="block text-white/70 hover:text-[var(--luminous-mint)]"
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
                    href={item.href}
                    className={`block text-lg font-semibold ${item.label === 'Donate' ? 'text-[var(--luminous-mint)]' : 'text-white/90'}`}
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
    </header>
  );
}