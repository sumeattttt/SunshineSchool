const STATS = [
  { value: "14+", label: "Years nurturing differently-abled children" },
  { value: "80+", label: "Students across early intervention, academics & vocational" },
  { value: "21+", label: "Special educators, therapists & support staff" },
  { value: "18+", label: "Young adults training at our sheltered workshop" },
]

export function Stats() {
  return (
    <section className="bg-brand-ink text-white">
      <div className="container-x py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-brand-yellow">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
            Our impact, in numbers
          </div>
          <h2 className="mt-5 font-display text-4xl leading-[1.02] text-white text-balance md:text-6xl">
            Small school. <span className="italic text-brand-yellow">Big hearts.</span>{" "}
            Measurable progress.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-white/70 md:text-lg">
            Our students have represented Sunshine at District & State level Special
            Olympics, and many of our graduates have transitioned into independent
            community living.
          </p>
        </div>

        <div className="mt-16 grid gap-6 border-t border-white/10 pt-12 md:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <div
              key={s.label}
              className="relative border-white/10 pl-6 lg:pl-8 lg:[&:not(:first-child)]:border-l"
            >
              <div
                aria-hidden
                className="absolute left-0 top-2 h-8 w-[3px] rounded-full bg-brand-yellow lg:hidden"
              />
              <div className="font-display text-6xl leading-none text-white md:text-7xl">
                {s.value}
              </div>
              <p className="mt-4 max-w-[14rem] text-sm leading-relaxed text-white/70">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
