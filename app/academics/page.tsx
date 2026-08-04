import { PageHeader } from "@/components/site/page-header"
import { CtaSection } from "@/components/site/cta-section"
import { Programs } from "@/components/home/programs"

export const metadata = {
  title: "Academics & Curriculum",
  description:
    "Our curriculum spans early intervention, functional academics (Pratham/NIOS/IEP), pre-vocational and vocational training, extracurriculars and in-house therapies.",
}

const BLOCKS = [
  {
    tag: "01",
    title: "Early Intervention Program",
    subtitle: "Ages 3–8 · 1:00 pm – 3:45 pm",
    items: [
      "Focused on early learning and foundational abilities",
      "Communication & sensory development",
      "Motor skills & visual perceptual skills",
      "Self-help skills training",
    ],
  },
  {
    tag: "02",
    title: "Academic Program",
    subtitle: "Ages 8–14 · 9:00 am – 1:00 pm",
    items: [
      "Age-appropriate academic learning",
      "Functional academics to promote daily independence",
      "NIOS and Pratham curriculum pathways",
      "Individualised Education Programme (IEP)",
    ],
  },
  {
    tag: "03",
    title: "Pre-Vocational Training Program",
    subtitle: "Ages 14–19 · 9:00 am – 3:30 pm",
    items: [
      "Designed to develop work-related skills",
      "Social skills and motor abilities",
      "Readiness for future vocational opportunities",
    ],
  },
  {
    tag: "04",
    title: "Vocational Training Program",
    subtitle: "Ages 18+ · Sheltered Workshop",
    items: [
      "Skill-based training for greater independence",
      "Employment opportunities and community participation",
      "Handicrafts (bags, diyas, torans, soaps, printing)",
      "Bakery & Office Skills (filing, printing, computer skills)",
    ],
  },
]

const EXTRA = [
  {
    title: "Indoor Games",
    items: ["Carrom", "Table Tennis"],
  },
  {
    title: "Outdoor Games",
    items: ["Football", "Cycling", "Skating", "Cricket", "Badminton", "Basketball"],
  },
  {
    title: "Leisure Skills",
    items: ["Dance", "Music", "Yoga"],
  },
]

const COMMUNITY = [
  {
    title: "Basic Activities of Daily Living",
    items: ["Self-care", "Grooming", "Functional Communication"],
  },
  {
    title: "Instrumental Activities of Daily Living",
    items: ["Transportation", "Shopping", "Housekeeping", "Cooking", "Safety", "Media Usage"],
  },
]

const THERAPIES = [
  {
    title: "Occupational Therapy",
    body: "Improves fine & gross motor skills, sensory integration and daily-living abilities.",
  },
  {
    title: "Speech Therapy",
    body: "Develops expressive and receptive communication, articulation and alternative communication.",
  },
  {
    title: "Behavioural Therapy",
    body: "Structured, evidence-informed strategies to support positive behaviours and self-regulation.",
  },
  {
    title: "Music Therapy",
    body: "Helps in sensory integration, emotional expression, motor coordination, and communication through rhythm and melody.",
  },
]

export default function AcademicsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Academics & Curriculum"
        title="A curriculum shaped around every child's potential."
        description="From early intervention to vocational training — our pathways are designed to meet children where they are, and guide them forward at their own pace."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Academics" },
        ]}
      />

      <Programs />

      {/* Curricular blocks */}
      <section className="bg-brand-cream">
        <div className="container-x py-20 md:py-28">
          <div className="mb-14 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-brand-red">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              Curricular Training
            </div>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] text-brand-ink md:text-5xl">
              Five structured blocks, delivered with care.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {BLOCKS.map((b) => (
              <div
                key={b.title}
                className="rounded-3xl border border-border bg-background p-7"
              >
                <div className="flex items-center justify-between">
                  <div className="inline-flex h-10 items-center rounded-full bg-brand-yellow px-3 font-display text-sm text-brand-ink">
                    {b.tag}
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                    {b.subtitle}
                  </div>
                </div>
                <h3 className="mt-6 font-display text-2xl leading-tight text-brand-ink md:text-[1.75rem]">
                  {b.title}
                </h3>
                <ul className="mt-5 space-y-2.5">
                  {b.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-start gap-3 text-sm text-brand-ink/85"
                    >
                      <span
                        aria-hidden
                        className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red"
                      />
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Extracurricular */}
      <section className="container-x py-20 md:py-28">
        <div className="mb-14 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-brand-red">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
            Extracurricular
          </div>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] text-brand-ink md:text-5xl">
            Games, sports & leisure — every child gets to play.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {EXTRA.map((g) => (
            <div key={g.title} className="rounded-3xl border border-border bg-card p-7">
              <h3 className="font-display text-2xl text-brand-ink">{g.title}</h3>
              <ul className="mt-5 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="rounded-full border border-border bg-background px-3 py-1.5 text-sm text-brand-ink/85"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Community living */}
      <section className="bg-brand-ink text-white">
        <div className="container-x py-20 md:py-28">
          <div className="mb-14 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-brand-yellow">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
              Community Living Skills
            </div>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] text-white md:text-5xl">
              Learning to live — <span className="italic text-brand-yellow">fully, independently.</span>
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {COMMUNITY.map((c) => (
              <div
                key={c.title}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-7"
              >
                <h3 className="font-display text-2xl text-white">{c.title}</h3>
                <ul className="mt-5 grid grid-cols-2 gap-3">
                  {c.items.map((it) => (
                    <li
                      key={it}
                      className="rounded-xl border border-white/10 px-3 py-2.5 text-sm text-white/85"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Therapies */}
      <section className="container-x py-20 md:py-28">
        <div className="mb-14 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-brand-red">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
            Therapies during school hours
          </div>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] text-brand-ink md:text-5xl">
            In-house therapy, woven into the school day.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {THERAPIES.map((t) => (
            <div key={t.title} className="rounded-3xl border border-border bg-card p-7">
              <h3 className="font-display text-2xl text-brand-ink">{t.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {t.body}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
