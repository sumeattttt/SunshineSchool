"use client"

import { useState, useMemo } from "react"
import Image from "next/image"
import { Search, X, ChevronLeft, ChevronRight, Maximize2, Tag } from "lucide-react"

export type GalleryImage = {
  src: string
  alt: string
  label: string
  category: "Classrooms" | "Events" | "Workshop" | "Therapy"
}

export const GALLERY_IMAGES: GalleryImage[] = [
  // Additional Images Folder
  {
    src: "/images/Gallery Additional Images/Annual Day.jpg.jpeg",
    alt: "Annual Day Celebrations",
    label: "Annual Day Celebrations",
    category: "Events",
  },
  {
    src: "/images/Gallery Additional Images/Autism Awareness at Seawoods Mall.jpg.jpeg",
    alt: "Autism Awareness at Seawoods Mall",
    label: "Autism Awareness at Seawoods Mall",
    category: "Events",
  },
  {
    src: "/images/Gallery Additional Images/Autism Awareness.jpg.jpeg",
    alt: "Autism Awareness Campaign",
    label: "Autism Awareness Campaign",
    category: "Events",
  },
  {
    src: "/images/Gallery Additional Images/CL1A5874 (1).JPG.jpeg",
    alt: "Classroom Learning & Activities",
    label: "Classroom Learning & Activities",
    category: "Classrooms",
  },
  {
    src: "/images/Gallery Additional Images/Get to know us.JPG.jpeg",
    alt: "Get To Know Sunshine",
    label: "Get To Know Sunshine",
    category: "Events",
  },
  {
    src: "/images/Gallery Additional Images/IMG_2844.JPG.jpeg",
    alt: "Interactive Student Session",
    label: "Interactive Student Session",
    category: "Classrooms",
  },
  {
    src: "/images/Gallery Additional Images/IMG_2896.JPG.jpeg",
    alt: "Student Group Learning",
    label: "Student Group Learning",
    category: "Classrooms",
  },
  {
    src: "/images/Gallery Additional Images/International Yoga Day2.jpg.jpeg",
    alt: "International Yoga Day",
    label: "International Yoga Day",
    category: "Events",
  },
  {
    src: "/images/Gallery Additional Images/PEEIP.jpg.jpeg",
    alt: "Early Intervention Program (PEEIP)",
    label: "Early Intervention Program (PEEIP)",
    category: "Therapy",
  },
  {
    src: "/images/Gallery Additional Images/S.W Sunshine.jpg.jpeg",
    alt: "Sheltered Workshop Creations",
    label: "Sheltered Workshop Creations",
    category: "Workshop",
  },
  {
    src: "/images/Gallery Additional Images/Sports.jpg.jpeg",
    alt: "Annual Sports Meet",
    label: "Annual Sports Meet",
    category: "Events",
  },
  {
    src: "/images/Gallery Additional Images/Volunteer.jpeg",
    alt: "Volunteers with Students",
    label: "Volunteers with Students",
    category: "Events",
  },
  {
    src: "/images/Gallery Additional Images/WAAD.jpg.jpeg",
    alt: "World Autism Awareness Day",
    label: "World Autism Awareness Day",
    category: "Events",
  },
  {
    src: "/images/Gallery Additional Images/donation.jpg.jpeg",
    alt: "Community Support & Donation Drive",
    label: "Community Support & Donation Drive",
    category: "Events",
  },

  // Public Folder Main Images
  {
    src: "/images/hero-students.jpg",
    alt: "Sunshine School Students",
    label: "Learning Together",
    category: "Classrooms",
  },
  {
    src: "/images/cooking.jpg",
    alt: "Culinary Skills Training",
    label: "Cooking Competition & Skills",
    category: "Workshop",
  },
  {
    src: "/images/awarenessrun.jpg",
    alt: "Autism Awareness Run",
    label: "Autism Awareness Run",
    category: "Events",
  },
  {
    src: "/images/therapy.jpg",
    alt: "Occupational Therapy Session",
    label: "Therapy Sessions",
    category: "Therapy",
  },
  {
    src: "/images/picnic.jpg",
    alt: "School Outdoor Picnic",
    label: "Picnic Day Outing",
    category: "Events",
  },
  {
    src: "/images/workshop.jpg",
    alt: "Sheltered Workshop",
    label: "Vocational Sheltered Workshop",
    category: "Workshop",
  },
  {
    src: "/images/medical.jpg",
    alt: "Health & Medical Checkup",
    label: "Medical Checkup",
    category: "Therapy",
  },
  {
    src: "/images/annual.jpg",
    alt: "Annual Day Celebrations",
    label: "Annual Day Gala",
    category: "Events",
  },
  {
    src: "/images/Annua Day111.JPG",
    alt: "Annual Day Stage Performance",
    label: "Annual Day Stage Performances",
    category: "Events",
  },
  {
    src: "/images/christmas.jpg",
    alt: "Christmas Gifts & Celebrations",
    label: "Christmas Gifts & Celebration",
    category: "Events",
  },
  {
    src: "/images/parents.jpg",
    alt: "With Parents",
    label: "Parent Support & Bonds",
    category: "Events",
  },
  {
    src: "/images/art-class.jpg",
    alt: "Art & Craft Class",
    label: "Art & Craft Session",
    category: "Classrooms",
  },
  {
    src: "/images/autism.jpeg",
    alt: "Autism Awareness Activity",
    label: "Autism Acceptance & Awareness",
    category: "Events",
  },
  {
    src: "/images/award01.jpeg",
    alt: "Excellence & Recognition Award",
    label: "Institutional Recognition",
    category: "Events",
  },
  {
    src: "/images/award02.jpeg",
    alt: "School Achievement Award",
    label: "Excellence Award",
    category: "Events",
  },
  {
    src: "/images/award03.jpeg",
    alt: "Student Pride Award",
    label: "Student Pride & Joy",
    category: "Events",
  },
  {
    src: "/images/staff.jpg",
    alt: "Dedicated Educators & Staff",
    label: "Our Caring Educators",
    category: "Classrooms",
  },
]

const CATEGORIES = ["All", "Classrooms", "Events", "Workshop", "Therapy"] as const

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState<string>("All")
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null)

  const filteredImages = useMemo(() => {
    return GALLERY_IMAGES.filter((img) => {
      const matchesCategory =
        activeCategory === "All" || img.category === activeCategory
      const matchesSearch =
        img.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        img.alt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        img.category.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCategory && matchesSearch
    })
  }, [activeCategory, searchQuery])

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: GALLERY_IMAGES.length }
    GALLERY_IMAGES.forEach((img) => {
      counts[img.category] = (counts[img.category] || 0) + 1
    })
    return counts
  }, [])

  const handlePrev = () => {
    if (selectedImageIndex === null) return
    setSelectedImageIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : (prev as number) - 1
    )
  }

  const handleNext = () => {
    if (selectedImageIndex === null) return
    setSelectedImageIndex((prev) =>
      prev === filteredImages.length - 1 ? 0 : (prev as number) + 1
    )
  }

  return (
    <div>
      {/* Category Filters and Search Bar */}
      <section className="container-x mb-8 space-y-4">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => {
              const isActive = activeCategory === cat
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition-all duration-200 ${isActive
                    ? "bg-brand-ink text-brand-cream shadow-md scale-105"
                    : "bg-card border border-border text-muted-foreground hover:border-brand-red hover:text-brand-red"
                    }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] ${isActive
                      ? "bg-brand-yellow text-brand-ink font-bold"
                      : "bg-muted text-muted-foreground"
                      }`}
                  >
                    {categoryCounts[cat] || 0}
                  </span>
                </button>
              )
            })}
          </div>

          {/* Search box */}
          <div className="relative w-full max-w-xs">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search photos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-border bg-card py-2 pl-9 pr-8 text-xs text-brand-ink placeholder:text-muted-foreground focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-brand-ink"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="container-x pb-16 md:pb-24">
        {filteredImages.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-border p-12 text-center">
            <p className="text-sm text-muted-foreground">
              No photos found matching your criteria.
            </p>
            <button
              onClick={() => {
                setActiveCategory("All")
                setSearchQuery("")
              }}
              className="mt-3 text-xs font-semibold text-brand-red hover:underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {filteredImages.map((img, idx) => (
              <figure
                key={`${img.src}-${idx}`}
                onClick={() => setSelectedImageIndex(idx)}
                className="group relative cursor-pointer overflow-hidden rounded-2xl bg-brand-yellow-soft aspect-square shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />

                {/* Category Badge */}
                <div className="absolute left-3 top-3 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="inline-flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 text-[10px] font-medium text-white backdrop-blur-md">
                    <Tag className="h-2.5 w-2.5" />
                    {img.category}
                  </span>
                </div>

                {/* Hover overlay with label and expand icon */}
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-xs font-medium text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end justify-between">
                  <span className="line-clamp-2 pr-2">{img.label}</span>
                  <div className="rounded-full bg-white/20 p-1.5 backdrop-blur-sm shrink-0">
                    <Maximize2 className="h-3.5 w-3.5 text-white" />
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </section>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && filteredImages[selectedImageIndex] && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-md"
          onClick={() => setSelectedImageIndex(null)}
        >
          <div
            className="relative flex max-h-[90vh] max-w-4xl flex-col items-center justify-center overflow-hidden rounded-3xl bg-black/50 p-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImageIndex(null)}
              className="absolute right-4 top-4 z-50 rounded-full bg-black/60 p-2 text-white transition-colors hover:bg-white hover:text-black"
              aria-label="Close photo"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Navigation Buttons */}
            {filteredImages.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 z-50 -translate-y-1/2 rounded-full bg-black/60 p-2.5 text-white transition-colors hover:bg-white hover:text-black"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 z-50 -translate-y-1/2 rounded-full bg-black/60 p-2.5 text-white transition-colors hover:bg-white hover:text-black"
                  aria-label="Next image"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}

            {/* Image display */}
            <div className="relative h-[65vh] w-full min-w-[300px] max-w-3xl sm:h-[75vh]">
              <Image
                src={filteredImages[selectedImageIndex].src}
                alt={filteredImages[selectedImageIndex].alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            {/* Caption */}
            <div className="mt-3 flex w-full flex-col items-center justify-between gap-2 text-center text-white sm:flex-row sm:px-6 sm:text-left">
              <div>
                <span className="inline-block rounded-full bg-brand-yellow px-2.5 py-0.5 text-[10px] font-bold text-brand-ink mb-1">
                  {filteredImages[selectedImageIndex].category}
                </span>
                <h4 className="text-base font-semibold">
                  {filteredImages[selectedImageIndex].label}
                </h4>
              </div>
              <p className="text-xs text-white/70">
                {selectedImageIndex + 1} of {filteredImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
