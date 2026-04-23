import type { Metadata } from "next"
import Image from "next/image"
import { PageHeader } from "@/components/site/page-header"
import { CtaSection } from "@/components/site/cta-section"

export const metadata: Metadata = {
  title: "Photo Gallery | Sunshine School",
  description:
    "Moments of learning, celebration and everyday joy at Sunshine School.",
}

const IMAGES = [
  { src: "/images/hero-students.jpg", alt: "Classroom moments", label: "Learning together" },
  { src: "/images/art-class.jpg", alt: "Art class", label: "Colours & creativity" },
  { src: "/images/music.jpg", alt: "Music and dance", label: "Music & movement" },
  { src: "/images/therapy.jpg", alt: "Therapy session", label: "Therapy sessions" },
  { src: "/images/sports.jpg", alt: "Sports day", label: "Sports day" },
  { src: "/images/workshop.jpg", alt: "Sheltered workshop", label: "Sheltered workshop" },
  { src: "/images/reading.jpg", alt: "Reading time", label: "Reading circle" },
  { src: "/images/bakery.jpg", alt: "Bakery training", label: "Bakery training" },
  { src: "/images/event.jpg", alt: "Annual day", label: "Annual day" },
  { src: "/images/classroom.jpg", alt: "Classroom", label: "Our classrooms" },
  { src: "/images/parents.jpg", alt: "With parents", label: "Parent bonds" },
  { src: "/images/hero-students.jpg", alt: "School moments", label: "Everyday joy" },
]

const CATEGORIES = ["All", "Classrooms", "Events", "Workshop", "Therapy"] as const

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Moments from life at Sunshine"
        description="Candid glimpses of learning, laughter and little victories. These are the pictures that keep us going."
      />

      <section className="container-x pb-8">
        <div className="flex flex-wrap gap-2">
          {CATEGORIES.map((c, i) => (
            <button
              key={c}
              className={
                i === 0
                  ? "rounded-full bg-brand-ink px-4 py-1.5 text-xs font-medium text-brand-cream"
                  : "rounded-full border border-border px-4 py-1.5 text-xs font-medium text-muted-foreground hover:border-brand-red hover:text-brand-red"
              }
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="container-x pb-16 md:pb-24">
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
          {IMAGES.map((img, idx) => (
            <figure
              key={`${img.src}-${idx}`}
              className={
                "group relative overflow-hidden rounded-2xl bg-brand-yellow-soft " +
                (idx % 7 === 0
                  ? "col-span-2 row-span-2 aspect-square"
                  : idx % 5 === 0
                  ? "aspect-[3/4]"
                  : "aspect-square")
              }
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                {img.label}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <CtaSection
        eyebrow="Visit us"
        title="Come see it in person"
        description="Photos only tell half the story. Visit our campus and experience the energy, the laughter and the care."
        primary={{ label: "Schedule a Visit", href: "/contact" }}
        secondary={{ label: "Read Our Story", href: "/about" }}
      />
    </>
  )
}
