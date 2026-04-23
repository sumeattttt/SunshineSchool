import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Calendar, MapPin, ArrowUpRight } from "lucide-react"
import { PageHeader } from "@/components/site/page-header"
import { CtaSection } from "@/components/site/cta-section"

export const metadata: Metadata = {
  title: "Events & News | Sunshine School",
  description:
    "Annual day, sports meets, awareness programs, and updates from Sunshine School.",
}

const UPCOMING = [
  {
    date: "Apr 02",
    year: "2026",
    title: "World Autism Awareness Day",
    description:
      "A morning of storytelling, art exhibitions and an open community walk to spread awareness and acceptance.",
    location: "Sunshine Campus, Vashi",
    image: "/images/event.jpg",
    tag: "Awareness",
  },
  {
    date: "May 18",
    year: "2026",
    title: "Annual Sports Day",
    description:
      "Adapted sports, parent-child races and inclusion games — an afternoon full of cheer and medals.",
    location: "School Ground, Sector 9A",
    image: "/images/sports.jpg",
    tag: "Sports",
  },
  {
    date: "Jun 05",
    year: "2026",
    title: "Parents' Workshop: Behaviour at Home",
    description:
      "An interactive session with Dr. Anjali Deshpande on managing sensory overload and setting home routines.",
    location: "Auditorium, 10:00 AM",
    image: "/images/parents.jpg",
    tag: "Workshop",
  },
]

const PAST = [
  {
    date: "Dec 19, 2025",
    title: "Annual Day: Rangmanch",
    description:
      "Our students brought the stage alive with music, dance and drama — celebrating two decades of Sunshine.",
    image: "/images/music.jpg",
  },
  {
    date: "Oct 14, 2025",
    title: "Diwali Gift Sale",
    description:
      "Handmade diyas, candles and gift hampers crafted by our sheltered workshop trainees.",
    image: "/images/workshop.jpg",
  },
  {
    date: "Aug 20, 2025",
    title: "Art Exhibition: Colours of Joy",
    description:
      "A public exhibition showcasing 80+ artworks created by our students across the year.",
    image: "/images/art-class.jpg",
  },
]

export default function EventsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Events & news"
        title="What's happening at Sunshine"
        description="From annual days to awareness walks and parent workshops — here's what we're celebrating and learning together."
      />

      <section className="container-x pb-16 md:pb-24">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="font-serif text-3xl text-brand-ink md:text-4xl">
            Upcoming events
          </h2>
          <Link
            href="/contact"
            className="hidden items-center gap-1 text-sm font-medium text-brand-red hover:underline sm:inline-flex"
          >
            Request an invite <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="space-y-4">
          {UPCOMING.map((ev) => (
            <article
              key={ev.title}
              className="group grid overflow-hidden rounded-3xl border border-border bg-card md:grid-cols-[240px_1fr_auto]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-brand-yellow-soft md:aspect-auto">
                <Image
                  src={ev.image}
                  alt={ev.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  sizes="(max-width: 768px) 100vw, 240px"
                />
              </div>
              <div className="flex flex-col justify-center p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-3 text-xs">
                  <span className="rounded-full bg-brand-yellow px-2.5 py-1 font-medium text-brand-ink">
                    {ev.tag}
                  </span>
                  <span className="inline-flex items-center gap-1 text-muted-foreground">
                    <Calendar className="h-3.5 w-3.5" />
                    {ev.date}, {ev.year}
                  </span>
                  <span className="inline-flex items-center gap-1 text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5" />
                    {ev.location}
                  </span>
                </div>
                <h3 className="mt-3 font-serif text-2xl text-brand-ink md:text-3xl">
                  {ev.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm text-muted-foreground leading-relaxed">
                  {ev.description}
                </p>
              </div>
              <div className="flex items-center justify-end border-t border-border p-6 md:border-l md:border-t-0 md:p-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 text-sm font-medium text-brand-ink transition-colors hover:border-brand-red hover:text-brand-red"
                >
                  RSVP <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-brand-cream/40 py-16 md:py-24">
        <div className="container-x">
          <h2 className="font-serif text-3xl text-brand-ink md:text-4xl">
            Recent highlights
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {PAST.map((p) => (
              <article
                key={p.title}
                className="group overflow-hidden rounded-3xl border border-border bg-card"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-brand-yellow-soft">
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="text-xs font-medium uppercase tracking-[0.14em] text-brand-red">
                    {p.date}
                  </div>
                  <h3 className="mt-1.5 font-serif text-xl text-brand-ink">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow="Stay in the loop"
        title="Be part of the next one"
        description="Subscribe to our quarterly newsletter or reach out to be invited to our upcoming parent workshops and open houses."
        primary={{ label: "Get in Touch", href: "/contact" }}
        secondary={{ label: "Volunteer", href: "/volunteer" }}
      />
    </>
  )
}
