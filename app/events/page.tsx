import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { PageHeader } from "@/components/site/page-header"

export const metadata: Metadata = {
  title: "Events & News | Sunshine School",
  description:
    "Annual day, sports meets, awareness programs, and updates from Sunshine School.",
}

const UPCOMING = [
  {
    title: "Parent Empowerment Early Intervention Program (PEEIP)",
    description: "Empowering Parents, Transforming Children's Futures.",
    image: "/images/Gallery Additional Images/PEEIP.jpg.jpeg",
    tag: "Early Intervention",
  },
  {
    title: "Annual Day",
    description:
      "Our students bring the stage alive with music, dance, and drama — celebrating two decades of progress and achievements at Sunshine.",
    image: "/images/music.jpg",
    tag: "Celebration",
  },
  {
    title: "World Autism Awareness Day",
    description:
      "A morning of storytelling, art exhibitions and an open community walk to spread awareness and acceptance.",
    image: "/images/event.jpg",
    tag: "Awareness",
  },
  {
    title: "Annual Sports Day",
    description:
      "Adapted sports, parent-child races and inclusion games — an afternoon full of cheer and medals.",
    image: "/images/sports.jpg",
    tag: "Sports",
  },
  {
    title: "Parents' Workshop: Behaviour at Home",
    description:
      "An interactive session with Dr. Anjali Deshpande on managing sensory overload and setting home routines.",
    image: "/images/parents.jpg",
    tag: "Workshop",
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
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-brand-yellow/10 px-4 py-2 text-sm font-medium text-brand-ink transition-colors hover:border-brand-red hover:bg-brand-red hover:text-white"
                >
                  Request an invite <ArrowUpRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
