const CONDITIONS = [
  "Autism Spectrum Disorder",
  "ADHD",
  "Learning Disability",
  "Intellectual Disability",
  "Cerebral Palsy",
  "Global Developmental Delay",
  "Language & Speech Delay",
]

export function ConditionMarquee() {
  const items = [...CONDITIONS, ...CONDITIONS]
  return (
    <section
      aria-label="Conditions we support"
      className="border-y border-border bg-background"
    >
      <div className="container-x py-6">
        <div className="flex items-center gap-8 text-xs uppercase tracking-[0.18em] text-muted-foreground">
          <span className="shrink-0 font-medium text-brand-ink">
            We support children with
          </span>
          <div className="relative flex-1 overflow-hidden">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-background to-transparent"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-background to-transparent"
            />
            <ul className="marquee flex w-max items-center gap-10">
              {items.map((c, i) => (
                <li key={i} className="flex items-center gap-10 whitespace-nowrap">
                  <span>{c}</span>
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 rounded-full bg-brand-yellow"
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
