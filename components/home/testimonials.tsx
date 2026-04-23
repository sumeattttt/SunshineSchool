import { Quote } from "lucide-react"

const TESTIMONIALS = [
  {
    body: "To see each child's potential and their progress makes me happy! Working at Sunshine has exposed me to a more structured practice which I feel suits my personality. The teachers along with the staff make a great team!",
    author: "Madhu",
    role: "Special Educator",
  },
  {
    body: "This is the first time that I've been working at a school for differently-abled children — it has taught me more in return than I could ever give.",
    author: "Suchitra",
    role: "Staff, Sunshine School",
  },
  {
    body: "We dreamt of a school where our son could be seen, heard and loved for exactly who he is. Sunshine became that place for our family.",
    author: "A Sunshine Parent",
    role: "Vashi, Navi Mumbai",
  },
]

export function Testimonials() {
  return (
    <section className="bg-brand-yellow-soft">
      <div className="container-x py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-brand-red">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
            Voices from our family
          </div>
          <h2 className="mt-5 font-display text-4xl leading-[1.02] text-brand-ink text-balance md:text-5xl lg:text-6xl">
            Words from teachers, parents &{" "}
            <span className="italic">friends of Sunshine.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              className="relative flex flex-col justify-between rounded-3xl border border-border bg-background p-8"
            >
              <Quote
                className="h-7 w-7 text-brand-yellow"
                strokeWidth={1.5}
              />
              <blockquote className="mt-6 font-display text-xl leading-[1.35] text-brand-ink">
                &ldquo;{t.body}&rdquo;
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3 border-t border-border pt-5">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-ink text-white">
                  <span className="font-display text-sm">
                    {t.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-medium text-brand-ink">
                    {t.author}
                  </div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
