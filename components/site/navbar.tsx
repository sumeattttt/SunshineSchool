"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { ChevronDown, Menu, X, ArrowUpRight, Heart } from "lucide-react"
import { Logo } from "./logo"
import { cn } from "@/lib/utils"

type NavItem = {
  label: string
  href: string
  children?: { label: string; href: string; description?: string }[]
}

const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About the School", href: "/about", description: "Our story, vision & mission" },
      { label: "Principal's Message", href: "/principals-message", description: "A note from Mrs. Paramita Mazumder" },
      { label: "Faculty & Staff", href: "/faculty", description: "Meet our team of 21+ educators" },
      { label: "Sunshine Parents", href: "/sunshine-parents", description: "Stories and experiences from our parents" },
    ],
  },
  {
    label: "Academics",
    href: "/academics",
    children: [
      { label: "Curriculum", href: "/academics", description: "Early intervention, academics, vocational" },
      { label: "Therapy", href: "/facilities#therapy", description: "Occupational, speech, behavioural & music therapy" },
      { label: "Sheltered Workshop", href: "/facilities#workshop", description: "Training for differently-abled adults" },
    ],
  },
  { label: "Admissions", href: "/admissions" },
  {
    label: "Community",
    href: "/events",
    children: [
      { label: "Events & News", href: "/events", description: "Updates and announcements" },
      { label: "Photo Gallery", href: "/gallery", description: "Life at Sunshine" },
      { label: "Volunteer", href: "/volunteer", description: "Support our mission" },
    ],
  },
  { label: "Contact", href: "/contact" },
]

export function SiteNavbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300 bg-[#FACC15] text-black border-black/10 shadow-sm"
      )}
    >
      <div className="container-x flex h-20 items-center justify-between gap-6 md:h-24">
        <Logo />

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-1 lg:flex"
          onMouseLeave={() => setOpenDropdown(null)}
        >
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
            >
              <Link
                href={item.href}
                className={cn(
                  "inline-flex items-center gap-1 rounded-full px-3.5 py-2 text-sm font-semibold transition-colors text-black hover:text-black/75",
                  isActive(item.href) && "bg-black/10 text-black font-bold"
                )}
              >
                {item.label}
                {item.children && (
                  <ChevronDown className="h-3.5 w-3.5 opacity-80" />
                )}
              </Link>

              {item.children && openDropdown === item.label && (
                <div className="absolute left-1/2 top-full z-50 w-[340px] -translate-x-1/2 pt-2">
                  <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-black/5">
                    <div className="p-2">
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="group flex items-start gap-3 rounded-xl px-3 py-2.5 hover:bg-brand-yellow-soft"
                        >
                          <div className="mt-1 h-2 w-2 shrink-0 rounded-full bg-brand-yellow ring-4 ring-brand-yellow/20" />
                          <div className="flex-1">
                            <div className="text-sm font-medium text-brand-ink group-hover:text-brand-red">
                              {c.label}
                            </div>
                            {c.description && (
                              <div className="mt-0.5 text-xs text-muted-foreground">
                                {c.description}
                              </div>
                            )}
                          </div>
                          <ArrowUpRight className="mt-1 h-4 w-4 text-muted-foreground opacity-0 transition-all group-hover:opacity-100" />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/donate"
            className="hidden items-center gap-1.5 rounded-full border border-black/25 px-3.5 py-2 text-sm font-semibold text-black transition-colors hover:bg-black/10 md:inline-flex"
          >
            <Heart className="h-3.5 w-3.5 text-black" /> Donate
          </Link>
          <Link
            href="/admissions"
            className="hidden items-center gap-1.5 rounded-full bg-black px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-black/80 sm:inline-flex"
          >
            Apply Now
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>

          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/20 text-black lg:hidden"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="container-x space-y-1 py-4">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="py-1">
                <Link
                  href={item.href}
                  className={cn(
                    "block rounded-xl px-3 py-2 text-base font-medium",
                    isActive(item.href)
                      ? "bg-brand-yellow-soft text-brand-ink"
                      : "text-brand-ink hover:bg-brand-yellow-soft"
                  )}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="mt-1 ml-3 border-l border-border pl-3">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className="block rounded-lg px-2 py-1.5 text-sm text-muted-foreground hover:text-brand-red"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="mt-3 flex gap-2 pt-3">
              <Link
                href="/donate"
                className="flex-1 rounded-full border border-border px-4 py-2.5 text-center text-sm font-medium text-brand-ink"
              >
                Donate
              </Link>
              <Link
                href="/admissions"
                className="flex-1 rounded-full bg-brand-red px-4 py-2.5 text-center text-sm font-medium text-white"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
