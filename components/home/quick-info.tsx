import Link from "next/link"
import { GraduationCap, ClipboardList, Building2, Trophy, ArrowUpRight } from "lucide-react"

const CARDS = [
  {
    eyebrow: "Admissions",
    title: "Apply for 2026–27",
    description:
      "Online assessment and admission forms for children aged 3–17 years.",
    href: "/admissions",
    icon: ClipboardList,
    accent: "bg-brand-yellow text-brand-ink",
  },
  {
    eyebrow: "Academics",
    title: "Our Curriculum",
    description:
      "Pratham, NIOS & Individualised Education Programmes tailored to every child.",
    href: "/academics",
    icon: GraduationCap,
    accent: "bg-brand-red text-white",
  },
  {
    eyebrow: "Facilities",
    title: "School & Workshop",
    description:
      "Sensory-safe classrooms, therapy rooms and a sheltered vocational workshop.",
    href: "/facilities",
    icon: Building2,
    accent: "bg-brand-ink text-white",
  },
  {
    eyebrow: "Achievements",
    title: "Olympics & Awards",
    description:
      "Our students have represented District & State level Special Olympics.",
    href: "/events",
    icon: Trophy,
    accent: "bg-brand-cream text-brand-ink border border-border",
  },
]

export function QuickInfo() {
  return (
    <section className="container-x py-20 md:py-28">
      <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-brand-red">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
            Quick access
          </div>
          <h2 className="mt-4 font-display text-4xl leading-[1.05] text-brand-ink text-balance md:text-5xl">
            Find what you need, in a click.
          </h2>
        </div>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
          Whether you&apos;re a parent exploring admission, a therapist looking for our programmes, or a well-wisher — start here.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {CARDS.map(({ eyebrow, title, description, href, icon: Icon, accent }) => (
          <Link
            key={title}
            href={href}
            className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-brand-ink/20 hover:shadow-xl hover:shadow-black/5"
          >
            <div
              aria-hidden
              className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full bg-brand-yellow/0 blur-3xl transition-all group-hover:bg-brand-yellow/25"
            />
            <div className="relative">
              <div
                className={`inline-flex h-10 w-10 items-center justify-center rounded-xl ${accent}`}
              >
                <Icon className="h-5 w-5" />
              </div>
              <div className="mt-6 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                {eyebrow}
              </div>
              <h3 className="mt-2 font-display text-2xl leading-tight text-brand-ink">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {description}
              </p>
            </div>
            <div className="relative mt-8 flex items-center gap-1 text-sm font-medium text-brand-ink">
              Learn more
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
