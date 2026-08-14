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
  {
    src: "/images/autism-awareness-ribbon-cutting.jpg",
    alt: "Autism Awareness Walk & Ribbon Cutting Campaign",
    label: "Autism Awareness & Inclusion Drive",
    category: "Events",
  },
  {
    src: "/images/get-to-know-us.jpg",
    alt: "Sunshine School Students and Activities",
    label: "Sunshine School Activities & Learning",
    category: "Classrooms",
  },
  // Photo Gallery Folder
  {
    src: "/images/Final Gallery Sorted Images/Photo Gallery/Annual Day Shankar Mahadevan as Chief Guest.jpg",
    alt: "Annual Day with Chief Guest Shankar Mahadevan",
    label: "Annual Day with Chief Guest Shankar Mahadevan",
    category: "Events",
  },
  {
    src: "/images/Final Gallery Sorted Images/Photo Gallery/Autism Awareness at Seawoods Mall.jpg",
    alt: "Autism Awareness at Seawoods Mall",
    label: "Autism Awareness at Seawoods Mall",
    category: "Events",
  },
  {
    src: "/images/Final Gallery Sorted Images/Photo Gallery/Autism Awareness.jpeg",
    alt: "Autism Awareness Activity",
    label: "Autism Awareness Activity",
    category: "Events",
  },
  {
    src: "/images/Final Gallery Sorted Images/Photo Gallery/Autism Awareness.jpg.jpeg",
    alt: "Autism Acceptance Campaign",
    label: "Autism Acceptance Campaign",
    category: "Events",
  },
  {
    src: "/images/Final Gallery Sorted Images/Photo Gallery/International Yoga Dat.jpg",
    alt: "International Yoga Day Session 1",
    label: "International Yoga Day Session",
    category: "Events",
  },
  {
    src: "/images/Final Gallery Sorted Images/Photo Gallery/International Yoga Day2.jpg",
    alt: "International Yoga Day Session 2",
    label: "Yoga & Wellness Activities",
    category: "Events",
  },
  {
    src: "/images/Final Gallery Sorted Images/Photo Gallery/International Yoga Day3.jpg",
    alt: "International Yoga Day Session 3",
    label: "Student Yoga Practice",
    category: "Events",
  },
  {
    src: "/images/Final Gallery Sorted Images/Photo Gallery/Live Performance.jpg",
    alt: "Live Performance by Students",
    label: "Live Stage Performance",
    category: "Events",
  },
  {
    src: "/images/Final Gallery Sorted Images/Photo Gallery/School Picnic.jpg",
    alt: "School Picnic Outing",
    label: "School Picnic Outing",
    category: "Events",
  },
  {
    src: "/images/Final Gallery Sorted Images/Photo Gallery/WAAD.jpg",
    alt: "World Autism Awareness Day",
    label: "World Autism Awareness Day Rally",
    category: "Events",
  },

  // Home Page Folder
  {
    src: "/images/Final Gallery Sorted Images/Home page/Early Intervention Program.jpeg",
    alt: "Early Intervention Program",
    label: "Early Intervention Program",
    category: "Therapy",
  },
  {
    src: "/images/Final Gallery Sorted Images/Home page/Academic Program.jpg",
    alt: "Academic Program Learning",
    label: "Academic Program Learning",
    category: "Classrooms",
  },
  {
    src: "/images/Final Gallery Sorted Images/Home page/Pre-Vocational Training Program.jpeg",
    alt: "Pre-Vocational Training Program",
    label: "Pre-Vocational Skill Training",
    category: "Classrooms",
  },
  {
    src: "/images/Final Gallery Sorted Images/Home page/Vocational Training Program.jpeg",
    alt: "Vocational Training Program",
    label: "Vocational Training Unit",
    category: "Workshop",
  },
  {
    src: "/images/Final Gallery Sorted Images/Home page/Therapies & Support Services.jpg",
    alt: "Therapies & Support Services",
    label: "Therapies & Support Services",
    category: "Therapy",
  },
  {
    src: "/images/Final Gallery Sorted Images/Home page/Understanding Autism.jpg",
    alt: "Understanding Autism & Guidance",
    label: "Understanding Autism & Support",
    category: "Classrooms",
  },
  {
    src: "/images/Final Gallery Sorted Images/Home page/Extracurricular.jpeg",
    alt: "Extracurricular Activities",
    label: "Extracurricular & Sports Activities",
    category: "Events",
  },

  // Community_ Folder
  {
    src: "/images/Final Gallery Sorted Images/Community_/Annual Day.jpg",
    alt: "Annual Day Gala",
    label: "Annual Day Gala Celebration",
    category: "Events",
  },
  {
    src: "/images/Final Gallery Sorted Images/Community_/Sports.jpg",
    alt: "Annual Sports Meet",
    label: "Annual Sports Meet",
    category: "Events",
  },
  {
    src: "/images/Final Gallery Sorted Images/Community_/WAAD.jpg",
    alt: "World Autism Awareness Drive",
    label: "Autism Awareness Community Drive",
    category: "Events",
  },
  {
    src: "/images/Final Gallery Sorted Images/Community_/volunter.jpeg",
    alt: "Volunteers with Students",
    label: "Volunteers & Student Support",
    category: "Events",
  },

  // About Folder
  {
    src: "/images/Final Gallery Sorted Images/About/sunshine school.jpeg",
    alt: "Sunshine School Campus & Students",
    label: "Sunshine School Campus",
    category: "Classrooms",
  },
  {
    src: "/images/Final Gallery Sorted Images/About/Sheltered Workshop — for differently-abled adults.jpg",
    alt: "Sheltered Workshop — for differently-abled adults",
    label: "Sheltered Workshop Trainees",
    category: "Workshop",
  },

  // Academic Folder
  {
    src: "/images/Final Gallery Sorted Images/Academic/skills and dignity.jpeg",
    alt: "Building Skills & Dignity",
    label: "Skills & Dignity Training",
    category: "Workshop",
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
      {/* Search Bar */}
      <section className="container-x mb-8 flex justify-end">
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
