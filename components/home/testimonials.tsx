import { Quote } from "lucide-react"

const TESTIMONIALS = [
  {
    body: "What makes Sunshine Sheltered Workshop truly special is that the teachers and staff never see these moments as a burden. They respond with endless patience, compassion, and understanding. Sunshine Sheltered Workshop equips our children with essential life-skills that help them become more independent and confident.",
    author: "Vaibhav's Family",
    role: "Parent of Vaibhav (Shelter Workshop Trainee)",
  },
  {
    body: "Sunshine School has provided an extraordinarily warm, inclusive, and supportive environment for Indhira. The individual attention, patience, and tailored educational care have helped her flourish beyond our expectations. We are forever grateful to the entire team at Sunshine.",
    author: "Indhira's Family",
    role: "Parent of Indhira (Sunshine School Student)",
  },
  {
    body: "Sunshine is not just a school; it is a second home where Shanaya feels genuinely loved and valued. The teachers dedicate themselves to understanding each child's unique needs, giving us complete peace of mind and immense hope for the future.",
    author: "Shanaya's Family",
    role: "Aditi Saha (Mother of Shanaya — Student)",
  },
  {
    body: "Watching Parth's confidence and overall performance improve day by day has been heartwarming. Seeing him confidently anchor on stage alongside his teacher is a proud moment for our family. Thank you for seeing his potential and giving him the confidence to shine.",
    author: "Parth Patkar's Family",
    role: "Parent of Parth (Pre-Vocational Batch)",
  },
]

export function Testimonials() {
  return (
    <section className="bg-brand-yellow-soft">
      <div className="container-x py-20 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-brand-red">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
            Words from our family
          </div>
          <h2 className="mt-5 font-display text-4xl leading-[1.02] text-brand-ink text-balance md:text-5xl lg:text-6xl">
            Words from parents &{" "}
            <span className="italic">friends of Sunshine.</span>
          </h2>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              className="relative flex flex-col justify-between rounded-3xl border border-border bg-background p-8 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-yellow text-brand-ink">
                <Quote className="h-5 w-5 stroke-[2.5]" />
              </div>
              <blockquote className="mt-6 font-display text-base leading-relaxed text-brand-ink">
                &ldquo;{t.body}&rdquo;
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3 border-t border-border pt-5">
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-brand-ink font-bold shadow-sm">
                  <span className="font-display text-sm font-bold">
                    {t.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-brand-ink">
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
