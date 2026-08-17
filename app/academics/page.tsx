import Image from "next/image"
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
    subtitle: "Ages 4–8 · 1:00 pm – 3:45 pm",
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
    subtitle: "Ages 8–12 · 9:00 am – 1:00 pm",
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
    subtitle: "Ages 13–17 · 9:00 am – 3:30 pm",
    items: [
      "Designed to develop work-related skills",
      "Social skills and motor abilities",
      "Readiness for future vocational opportunities",
    ],
  },
  {
    tag: "04",
    title: "Vocational Training Program",
    subtitle: "Ages 18 and above · Sheltered Workshop",
    items: [
      "Skill-based training for greater independence",
      "Employment opportunities and community participation",
      "Handicrafts (bags, diyas, torans, soaps, candles)",
      "Bakery & Office Skills (filing, candles making, computer skills)",
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
    image: "/images/therapy/occupational-therapy.jpg",
    imageFocus: "object-[center_15%]",
  },
  {
    title: "Speech Therapy",
    body: "Develops expressive and receptive communication, articulation and alternative communication.",
    image: "/images/therapy/speech-therapy.jpg",
    imageFocus: "object-[center_15%]",
  },
  {
    title: "Behavioural Therapy",
    body: "Structured, evidence-informed strategies to support positive behaviours and self-regulation.",
    image: "/images/therapy/behavioural-therapy.jpg",
    imageFocus: "object-[center_10%]",
  },
  {
    title: "Music Therapy",
    body: "Helps in sensory integration, emotional expression, motor coordination, and communication through rhythm and melody.",
    image: "/images/therapy/music-therapy.jpg",
    imageFocus: "object-center",
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

        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="grid gap-4">
            {EXTRA.map((g) => (
              <div key={g.title} className="rounded-3xl border border-border bg-card p-6">
                <h3 className="font-display text-xl text-brand-ink">{g.title}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {g.items.map((it) => (
                    <li
                      key={it}
                      className="rounded-full border border-border bg-background px-3 py-1 text-xs text-brand-ink/85 font-medium"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-3">
            <div className="relative aspect-[16/9.5] w-full overflow-hidden rounded-3xl border border-border shadow-lg bg-card">
              <Image
                src="/images/extracurricular-table-tennis.jpg"
                alt="Sunshine students playing table tennis in extracurricular indoor games"
                fill
                className="object-cover object-center"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority
              />
              <div className="absolute top-4 left-4 rounded-full bg-black/80 backdrop-blur-md px-3.5 py-1.5 text-xs font-semibold text-white shadow-md">
                🏓 Indoor Sports & Table Tennis
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-4 text-xs md:text-sm text-muted-foreground leading-relaxed">
              <span className="font-semibold text-brand-ink">Indoor & Outdoor Sports:</span> Building motor skills, hand-eye coordination, focus, endurance, and team spirit.
            </div>
          </div>
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
      <section className="border-t border-border bg-brand-cream/40 py-20 md:py-28">
        <div className="container-x">
          <div className="mb-14 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-brand-red">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              In-House Therapies
            </div>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] text-brand-ink md:text-5xl">
              Individualised therapy, integrated with learning.
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {THERAPIES.map((t) => (
              <div key={t.title} className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm h-full flex flex-col justify-between">
                <div className="relative aspect-[3/4] overflow-hidden bg-brand-yellow-soft">
                  <Image
                    src={t.image}
                    alt={t.title}
                    fill
                    className={`object-cover transition-transform duration-500 group-hover:scale-105 ${t.imageFocus || ""}`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl text-brand-ink font-semibold">{t.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                      {t.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow="Admissions open"
        title="Give your child the Sunshine advantage."
        description="Schedule an observation session with our special educators and therapists."
        primary={{ label: "Apply for admission", href: "/admissions" }}
        secondary={{ label: "Contact us", href: "/contact" }}
      />
    </>
  )
}
