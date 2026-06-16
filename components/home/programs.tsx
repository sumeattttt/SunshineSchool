import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const PROGRAMS = [
  {
    no: "01",
    title: "Early Intervention Program",
    body: "Focused on early learning, communication, sensory development, self-help skills, and foundational abilities.",
    image: "/images/reading.jpg",
    tag: "Ages 3–8 · 1:00pm–3:45pm",
  },
  {
    no: "02",
    title: "Academic Program",
    body: "Includes age-appropriate academic learning along with functional academics to promote independence in daily life.",
    image: "/images/art-class.jpg",
    tag: "Ages 8–14 · 9:00am–1:00pm",
  },
  {
    no: "03",
    title: "Pre-Vocational Training Program",
    body: "Designed to develop work-related skills, social skills, motor abilities, and readiness for future vocational opportunities.",
    image: "/images/classroom.jpg",
    tag: "Ages 14–19 · 9:00am–3:30pm",
  },
  {
    no: "04",
    title: "Vocational Training Program",
    body: "Provides skill-based training to prepare young adults for greater independence, employment opportunities, and community participation.",
    image: "/images/bakery.jpg",
    tag: "Ages 18+ · Sheltered Workshop",
  },
  {
    no: "05",
    title: "Therapies & Support Services",
    body: "Includes Occupational Therapy, Speech Therapy, Yoga, physical activities, and other developmental support programs integrated with education.",
    image: "/images/therapy.jpg",
    tag: "All ages",
  },
  {
    no: "06",
    title: "Extracurricular",
    body: "Sports, music, dance, yoga and community living — every child gets to play.",
    image: "/images/sports.jpg",
    tag: "All ages",
  },
]

export function Programs() {
  return (
    <section className="container-x py-20 md:py-28">
      <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-brand-red">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
            Academics & Training
          </div>
          <h2 className="mt-4 font-display text-4xl leading-[1.02] text-brand-ink text-balance md:text-5xl lg:text-6xl">
            Six pathways, one promise — <span className="italic">progress.</span>
          </h2>
        </div>
        <Link
          href="/academics"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-ink hover:text-brand-red"
        >
          Full curriculum <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {PROGRAMS.map((p) => (
          <article
            key={p.title}
            className="group relative overflow-hidden rounded-3xl border border-border bg-card"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={p.image}
                alt={p.title}
                fill
                sizes="(min-width: 1024px) 32vw, (min-width: 768px) 48vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute top-3 left-3 rounded-full bg-background/90 px-3 py-1 text-[11px] font-medium text-brand-ink backdrop-blur">
                {p.tag}
              </div>
              <div className="absolute top-3 right-3 font-display text-lg text-white/90 mix-blend-difference">
                {p.no}
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-display text-2xl leading-tight text-brand-ink">
                {p.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {p.body}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
