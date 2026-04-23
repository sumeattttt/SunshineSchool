import { Baby, Heart, Users } from "lucide-react"

const GROUPS = [
  {
    icon: Baby,
    heading: "Differently-Abled Children",
    items: [
      "Early Intervention",
      "Academic Programme",
      "Pre-Vocational Programme",
      "Vocational Programme",
    ],
  },
  {
    icon: Heart,
    heading: "Parents",
    items: ["Parents Support Group", "Parents Counselling"],
  },
  {
    icon: Users,
    heading: "Community",
    items: ["Awareness Sessions", "Community Events"],
  },
]

export function WhyUs() {
  return (
    <section className="container-x py-20 md:py-28">
      <div className="mb-14 mx-auto max-w-2xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-brand-red">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
          Why choose Sunshine
        </div>
        <h2 className="mt-5 font-display text-4xl leading-[1.02] text-brand-ink text-balance md:text-5xl">
          A whole circle of support — for every child,{" "}
          <span className="italic">every parent, every family.</span>
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {GROUPS.map(({ icon: Icon, heading, items }) => (
          <div
            key={heading}
            className="rounded-3xl border border-border bg-card p-8"
          >
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-yellow text-brand-ink">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-6 font-display text-2xl text-brand-ink">
              {heading}
            </h3>
            <ul className="mt-5 space-y-3">
              {items.map((it) => (
                <li
                  key={it}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <span
                    aria-hidden
                    className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red"
                  />
                  <span className="text-brand-ink/85">{it}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
