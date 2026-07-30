import Link from "next/link"
import { ArrowUpRight, Calendar, Bell } from "lucide-react"

const EVENTS = [
  {
    date: "Rolling",
    tag: "Admissions",
    title: "Admissions open for academic year 2026–27",
    body: "Offline Assessment and Admission Forms for Ages 4 and Above.",
    href: "/admissions",
    highlight: true,
  },
  {
    date: "Dec 2025",
    tag: "Event",
    title: "Annual Day & Sports Meet",
    body: "A celebration of our students' progress across the year, featuring performances, prize distribution and community gathering.",
    href: "/events",
  },
  {
    date: "Apr 2026",
    tag: "Workshop",
    title: "Parent Support Group — Understanding Autism",
    body: "A free session led by our special educators on early signs, intervention strategies and navigating the journey as parents.",
    href: "/events",
  },
]

export function EventsPreview() {
  return (
    <section className="container-x py-20 md:py-28">
      <div className="mb-12 grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:items-end">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-brand-red">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
            Events & Notices
          </div>
          <h2 className="mt-4 font-display text-4xl leading-[1.02] text-brand-ink text-balance md:text-5xl lg:text-6xl">
            What&apos;s happening at Sunshine.
          </h2>
        </div>
        <p className="text-base leading-relaxed text-muted-foreground">
          From admissions updates and awareness workshops to our beloved annual
          day — stay in the loop with everything happening on campus and across
          the community.
        </p>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        {EVENTS.map((e) => (
          <Link
            key={e.title}
            href={e.href}
            className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border p-6 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 md:p-8 ${
              e.highlight
                ? "border-brand-red bg-brand-red text-white"
                : "border-border bg-card text-brand-ink"
            }`}
          >
            <div className="flex items-center justify-between">
              <div
                className={`inline-flex items-center gap-2 rounded-full px-2.5 py-1 text-[11px] uppercase tracking-[0.18em] ${
                  e.highlight
                    ? "bg-white/15 text-white"
                    : "bg-brand-yellow-soft text-brand-red"
                }`}
              >
                {e.highlight ? (
                  <Bell className="h-3 w-3" />
                ) : (
                  <Calendar className="h-3 w-3" />
                )}
                {e.tag}
              </div>
              <div
                className={`text-xs ${
                  e.highlight ? "text-white/80" : "text-muted-foreground"
                }`}
              >
                {e.date}
              </div>
            </div>
            <div className="mt-10">
              <h3 className="font-display text-2xl leading-tight md:text-[1.75rem]">
                {e.title}
              </h3>
              <p
                className={`mt-3 text-sm leading-relaxed ${
                  e.highlight ? "text-white/85" : "text-muted-foreground"
                }`}
              >
                {e.body}
              </p>
            </div>
            <div
              className={`mt-8 inline-flex items-center gap-1 text-sm font-medium ${
                e.highlight ? "text-white" : "text-brand-ink"
              }`}
            >
              Check now
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
