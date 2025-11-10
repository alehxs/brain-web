"use client";
import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Research", href: "/research" },
  { label: "Impacts", href: "/impacts" },
  { label: "Organization", href: "/organization" },
  { label: "Workforce", href: "/workforce" },
  { label: "Membership", href: "/membership" },
  { label: "News", href: "/news" },
  { label: "Events", href: "/events" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--midnight-blue)] text-white">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
          {/* Contact */}
          <div>
            <h2 className="text-sm font-bold tracking-wide uppercase">Contact</h2>
            <address className="not-italic mt-3 text-sm leading-relaxed text-white/70">
              University of Houston Cullen College of Engineering,
              <br />
              Engineering Bldg 1 E301, 4226 Martin Luther King Boulevard, TX
              <br />
              77204-4007
            </address>
          </div>

          {/* Quick Links */}
          <nav aria-label="Quick links">
            <h2 className="text-sm font-bold tracking-wide uppercase">Quick Links</h2>
            <ul className="mt-3 space-y-2 text-sm text-white/70">
              {links.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="hover:text-[var(--luminous-mint)] transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Social */}
          <div>
            <h2 className="text-sm font-bold tracking-wide uppercase">Follow Us</h2>
            <ul className="mt-3 flex items-center gap-4">
              <li>
                <a
                  href="https://www.facebook.com/iucrcbraincenter"
                  aria-label="Facebook"
                  className="group inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-[var(--midnight-blue)] hover:text-[var(--deep-teal)] transition"
                >
                  {facebookIcon}
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/channel/UCgLZUqM4dGilP5EUVtsDBfw"
                  aria-label="YouTube"
                  className="group inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-[var(--midnight-blue)] hover:text-[var(--deep-teal)] transition"
                >
                  {youtubeIcon}
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/iucrcbraincenter/"
                  aria-label="Instagram"
                  className="group inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-[var(--midnight-blue)] hover:text-[var(--deep-teal)] transition"
                >
                  {instagramIcon}
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/iucrcbraincenter/posts/?feedView=all"
                  aria-label="LinkedIn"
                  className="group inline-flex h-9 w-9 items-center justify-center rounded-full bg-white text-[var(--midnight-blue)] hover:text-[var(--deep-teal)] transition"
                >
                  {linkedinIcon}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-sm text-white/60">
          <p>© {new Date().getFullYear()} BRAIN Center. All rights reserved.</p>
          {/* <p>
            <Link href="/privacy" className="hover:text-[var(--luminous-mint)]">Privacy</Link>
            <span className="mx-3">•</span>
            <Link href="/terms" className="hover:text-[var(--luminous-mint)]">Terms</Link>
          </p> */}
        </div>
      </div>
    </footer>
  );
}

// ------- inline SVG icons (tailwind currentColor) -------
const facebookIcon = (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07C2 17.08 5.66 21.21 10.44 22v-6.99H7.9v-2.94h2.54V9.8c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.94h-2.34V22C18.34 21.21 22 17.08 22 12.07z"/>
  </svg>
);

const youtubeIcon = (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M23.5 6.2a4.7 4.7 0 0 0-3.3-3.3C18.5 2.4 12 2.4 12 2.4s-6.5 0-8.2.5A4.7 4.7 0 0 0 .5 6.2 49.4 49.4 0 0 0 0 12a49.4 49.4 0 0 0 .5 5.8 4.7 4.7 0 0 0 3.3 3.3c1.7.5 8.2.5 8.2.5s6.5 0 8.2-.5a4.7 4.7 0 0 0 3.3-3.3A49.4 49.4 0 0 0 24 12a49.4 49.4 0 0 0-.5-5.8zM9.6 15.5V8.5L16 12l-6.4 3.5z"/>
  </svg>
);

const instagramIcon = (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 1.9.2 2.4.4.6.2 1 .5 1.5 1 .5.5.8.9 1 1.5.2.5.4 1.2.4 2.4.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.2 1.9-.4 2.4-.2.6-.5 1-1 1.5-.5.5-.9.8-1.5 1-.5.2-1.2.4-2.4.4-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-1.9-.2-2.4-.4-.6-.2-1-.5-1.5-1-.5-.5-.8-.9-1-1.5-.2-.5-.4-1.2-.4-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.2-1.9.4-2.4.2-.6.5-1 1-1.5.5-.5.9-.8 1.5-1 .5-.2 1.2-.4 2.4-.4C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1 .1-1.6.2-2 .3-.5.2-.8.4-1.1.7-.3.3-.5.6-.7 1.1-.1.4-.2 1-.3 2-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1 .2 1.6.3 2 .2.5.4.8.7 1.1.3.3.6.5 1.1.7.4.1 1 .2 2 .3 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1-.1 1.6-.2 2-.3.5-.2.8-.4 1.1-.7.3-.3.5-.6.7-1.1.1-.4.2-1 .3-2 .1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1-.2-1.6-.3-2-.2-.5-.4-.8-.7-1.1-.3-.3-.6-.5-1.1-.7-.4-.1-1-.2-2-.3-1.2-.1-1.6-.1-4.7-.1zm0 2.9a5.1 5.1 0 1 1 0 10.2 5.1 5.1 0 0 1 0-10.2zm6.4-1.3a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4z"/>
  </svg>
);

const linkedinIcon = (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
    <path d="M4.98 3.5A2.5 2.5 0 1 1 5 8.5a2.5 2.5 0 0 1-.02-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.1c.5-.9 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-3-1.9-3s-2.2 1.5-2.2 2.9V21H10V9z"/>
  </svg>
);