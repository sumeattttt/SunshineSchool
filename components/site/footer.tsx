import Link from "next/link"
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react"
import { Logo } from "./logo"

const LINKS = {
  School: [
    { label: "About", href: "/about" },
    { label: "Principal's Message", href: "/principals-message" },
    { label: "Faculty & Staff", href: "/faculty" },
    { label: "Sunshine Parents", href: "/sunshine-parents" },
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
              Since 2006, Sunshine School has been a home for differently-abled
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
            <Logo />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              An initiative of the Sunshine Education Society — a
              non-profit organisation serving children and adults with autism
              and other developmental disabilities.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
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
              <a
                href="https://wa.me/918850477964"
                aria-label="WhatsApp"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/80 transition-colors hover:border-[#25D366] hover:text-[#25D366]"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
              </a>
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
                  <a href="tel:02220870982" className="hover:text-white">
                    022 2087 0982
                  </a>
                  <a href="tel:+918850477964" className="hover:text-white">
                    +91 88504 77964
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
                <a href="tel:02220870982" className="hover:text-white">
                  022 2087 0982
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row sm:items-center">
          <p>
            © {new Date().getFullYear()} Sunshine Education Society. All rights reserved. • Developed by{" "}
            <a
              href="https://www.instagram.com/ssum.eatt"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-white hover:underline"
            >
              Sumeet Yadav
            </a>
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
