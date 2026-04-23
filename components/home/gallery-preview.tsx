import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

const IMAGES = [
  { src: "/images/art-class.jpg", alt: "Children painting in art class" },
  { src: "/images/music.jpg", alt: "Music and dance class" },
  { src: "/images/sports.jpg", alt: "Sports day at Sunshine" },
  { src: "/images/event.jpg", alt: "Annual day performance" },
  { src: "/images/bakery.jpg", alt: "Vocational bakery training" },
  { src: "/images/reading.jpg", alt: "Reading with teacher" },
]

export function GalleryPreview() {
  return (
    <section className="container-x py-20 md:py-28">
      <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-brand-red">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
            Life at Sunshine
          </div>
          <h2 className="mt-4 font-display text-4xl leading-[1.02] text-brand-ink text-balance md:text-5xl lg:text-6xl">
            Moments that make us smile.
          </h2>
        </div>
        <Link
          href="/gallery"
          className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium text-brand-ink hover:border-brand-ink/40"
        >
          View full gallery <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
        {IMAGES.map((img, i) => (
          <div
            key={img.src}
            className={`group relative overflow-hidden rounded-2xl border border-border bg-card ${
              i === 0 ? "col-span-2 row-span-2 aspect-square" : "aspect-square"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
