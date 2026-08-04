const STATS = [
  { value: "20+", label: "Years nurturing differently-abled children" },
  { value: "150+", label: "Students across early intervention, academics & vocational" },
  { value: "25+", label: "Special educators, therapists & support staff" },
  { value: "30+", label: "Young adults training at our sheltered workshop" },
]

export function Stats() {
  return (
    <section className="bg-[#FACC15] text-black">
      <div className="container-x py-20 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-black/20 bg-black/5 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-black font-semibold">
            <span className="h-1.5 w-1.5 rounded-full bg-black" />
            Our impact, in numbers
          </div>
          <h2 className="mt-5 font-display text-4xl leading-[1.02] text-black text-balance md:text-6xl font-bold">
            Small school. <span className="italic text-[#15803D]">Big Hearts.</span>{" "}
            Measurable progress.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-black/85 md:text-lg">
            Our students have represented Sunshine at District & State level Special
            Olympics, and many of our graduates have transitioned into independent
            community living.
          </p>
        </div>

        <div className="mt-16 grid gap-6 border-t border-black/15 pt-12 md:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s) => (
            <div
              key={s.label}
              className="relative border-black/15 pl-6 lg:pl-8 lg:[&:not(:first-child)]:border-l"
            >
              <div
                aria-hidden
                className="absolute left-0 top-2 h-8 w-[3px] rounded-full bg-black lg:hidden"
              />
              <div className="font-display text-6xl leading-none text-black md:text-7xl font-bold">
                {s.value}
              </div>
              <p className="mt-4 max-w-[14rem] text-sm leading-relaxed text-black/80 font-medium">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
