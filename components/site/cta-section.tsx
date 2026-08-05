import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function CtaSection({
  eyebrow = "A PERSONAL INVITATION",
  title = "Come spend a morning with us.",
  description = "Schedule a campus visit and experience our classrooms, therapy rooms and workshop firsthand.",
  primary = { label: "Book a visit", href: "/contact" },
  secondary = { label: "Read about admissions", href: "/admissions" },
}: {
  eyebrow?: string
  title?: string
  description?: string
  primary?: { label: string; href: string }
  secondary?: { label: string; href: string }
}) {
  return (
    <section className="container-x py-20 md:py-28">
      <div className="relative overflow-hidden rounded-3xl border border-border bg-brand-yellow p-10 md:p-16">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-white/40 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-brand-red/10 blur-3xl"
        />
        <div className="relative grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-ink/10 bg-white/50 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-brand-ink/80">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              {eyebrow}
            </div>
            <h2 className="mt-5 font-display text-4xl leading-[1.02] text-brand-ink text-balance md:text-5xl lg:text-6xl">
              {title}
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            <p className="max-w-md text-base leading-relaxed text-brand-ink/80">
              {description}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={primary.href}
                className="inline-flex items-center gap-1.5 rounded-full bg-brand-red px-5 py-3 text-sm font-medium text-white transition-all hover:bg-brand-red-dark hover:shadow-lg hover:shadow-brand-red/30"
              >
                {primary.label} <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href={secondary.href}
                className="inline-flex items-center gap-1.5 rounded-full border border-brand-ink/20 bg-white px-5 py-3 text-sm font-medium text-brand-ink transition-colors hover:border-brand-ink/40"
              >
                {secondary.label}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
