import Link from "next/link"
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react"
import { Logo } from "./logo"

const LINKS = {
  School: [
    { label: "About", href: "/about" },
    { label: "Principal's Message", href: "/principals-message" },
    { label: "Faculty & Staff", href: "/faculty" },
    { label: "Academics", href: "/academics" },
    { label: "Facilities", href: "/facilities" },
  ],
  Community: [
    { label: "Admissions", href: "/admissions" },
    { label: "Events & News", href: "/events" },
    { label: "Photo Gallery", href: "/gallery" },
    { label: "Volunteer", href: "/volunteer" },
    { label: "Donate", href: "/donate" },
  ],
}

export function SiteFooter() {
  return (
    <footer className="mt-24 bg-brand-ink text-white/85">
      <div className="container-x pt-20 pb-10">
        {/* Top CTA */}
        <div className="mb-16 grid gap-10 border-b border-white/10 pb-16 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-brand-yellow">
              Join the Sunshine family
            </p>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] text-white md:text-5xl lg:text-6xl">
              Every child deserves a place where they can{" "}
              <span className="italic text-brand-yellow">truly shine.</span>
            </h2>
          </div>
          <div className="flex flex-col justify-end gap-4">
            <p className="max-w-md text-base leading-relaxed text-white/70">
              Since 2010, Sunshine School has been a home for differently-abled
              children and adults — with personalised learning, therapy and
              vocational training delivered with love.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/admissions"
                className="inline-flex items-center gap-1.5 rounded-full bg-brand-yellow px-5 py-3 text-sm font-medium text-brand-ink transition-transform hover:-translate-y-0.5"
              >
                Apply for Admission <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/donate"
                className="inline-flex items-center gap-1.5 rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white hover:bg-white/5"
              >
                Donate
              </Link>
            </div>
          </div>
        </div>

        {/* Main footer grid */}
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr]">
          <div>
            <Logo mono className="text-white" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              An initiative of the Sunshine Education Society — a
              non-profit organisation serving children and adults with autism
              and other developmental disabilities.
            </p>
            <div className="mt-6 flex gap-2">
              {[
                {
                  icon: Facebook,
                  href: "https://www.facebook.com/sunshinefordifferentlyabled/?ti=as",
                  label: "Facebook",
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/s.w_sunshine18",
                  label: "Instagram",
                },
                {
                  icon: Youtube,
                  href: "https://www.youtube.com/channel/UC0qUvGlRWfr2CBS7xyihqAw",
                  label: "YouTube",
                },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-brand-yellow hover:text-brand-yellow"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {Object.entries(LINKS).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-xs uppercase tracking-[0.2em] text-white/40">
                {title}
              </h4>
              <ul className="mt-5 space-y-3">
                {items.map((i) => (
                  <li key={i.href}>
                    <Link
                      href={i.href}
                      className="text-sm text-white/75 hover:text-brand-yellow"
                    >
                      {i.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-white/40">
              Contact
            </h4>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow" />
                <div className="leading-relaxed text-white/75">
                  Sunshine School, C/O Navi Mumbai Primary School,
                  <br />
                  Sec-2, Opp. Vashi Police Station,
                  <br />
                  Vashi, Navi Mumbai – 400703
                </div>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow" />
                <div className="flex flex-col text-white/75">
                  <a href="tel:+912220870982" className="hover:text-white">
                    +91 022 2087 0982
                  </a>
                  <a href="tel:+912227827342" className="hover:text-white">
                    +91 022 27827342
                  </a>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow" />
                <a
                  href="mailto:sunshine.vashi@gmail.com"
                  className="text-white/75 hover:text-white"
                >
                  sunshine.vashi@gmail.com
                </a>
              </li>
            </ul>

            <div className="mt-6 rounded-xl border border-white/10 bg-white/[0.03] p-4">
              <div className="text-[11px] uppercase tracking-[0.18em] text-brand-yellow">
                Sheltered Workshop
              </div>
              <p className="mt-2 text-xs leading-relaxed text-white/70">
                RH-4, M-9, Sector-6, Vashi, Navi Mumbai 400703
                <br />
                <a href="tel:+912227827346" className="hover:text-white">
                  022-2782 7346
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} Sunshine Education Society. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link href="/about" className="hover:text-white">Privacy</Link>
            <Link href="/about" className="hover:text-white">Code of Conduct</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
