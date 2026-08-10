import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/animate"

const PROGRAMS = [
  {
    no: "01",
    title: "Early Intervention Program",
    body: "Focused on early learning, communication, sensory development, self-help skills, and foundational abilities.",
    image: "/images/Final Gallery Sorted Images/Home page/Early Intervention Program.jpeg",
    tag: "Age 4–8 · 1:00pm–3:45pm",
  },
  {
    no: "02",
    title: "Academic Program",
    body: "Includes age-appropriate academic learning along with functional academics to promote independence in daily life.",
    image: "/images/Final Gallery Sorted Images/Home page/Academic Program.jpg",
    tag: "Age 8–12 · 9:00am–1:00pm",
  },
  {
    no: "03",
    title: "Pre-Vocational Training Program",
    body: "Designed to develop work-related skills, social skills, motor abilities, and readiness for future vocational opportunities.",
    image: "/images/Final Gallery Sorted Images/Home page/Pre-Vocational Training Program.jpeg",
    tag: "Age 13–17 · 9:00am–3:30pm",
  },
  {
    no: "04",
    title: "Vocational Training Program",
    body: "Training for youth with ASD in community living skills, job work with stipend, vocational skills & leisure activities towards independent living.",
    image: "/images/Final Gallery Sorted Images/Home page/Vocational Training Program.jpeg",
    tag: "Age 18–30 · Sheltered Workshop",
  },
  {
    no: "05",
    title: "Therapies & Support Services",
    body: "Includes Occupational Therapy, Speech Therapy, Yoga, physical activities, and other developmental support programs integrated with education.",
    image: "/images/Final Gallery Sorted Images/Home page/Therapies & Support Services.jpg",
    tag: "All ages",
  },
  {
    no: "06",
    title: "Extracurricular",
    body: "Sports, music, dance, yoga and community living — every child gets to play.",
    image: "/images/Final Gallery Sorted Images/Home page/Extracurricular.jpeg",
    tag: "All ages",
  },
]

export function Programs() {
  return (
    <section className="container-x py-20 md:py-28">
      <FadeIn className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
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
      </FadeIn>

      <StaggerContainer staggerDelay={0.08} className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {PROGRAMS.map((p) => (
          <StaggerItem key={p.title}>
            <article
              className="group relative overflow-hidden rounded-3xl border border-border bg-card h-full flex flex-col justify-between"
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
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-display text-2xl leading-tight text-brand-ink">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {p.body}
                  </p>
                </div>
              </div>
            </article>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  )
}
