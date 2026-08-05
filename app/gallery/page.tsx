import type { Metadata } from "next"
import { PageHeader } from "@/components/site/page-header"
import { GalleryGrid } from "@/components/gallery/gallery-grid"

export const metadata: Metadata = {
  title: "Photo Gallery | Sunshine School",
  description:
    "Moments of learning, celebration and everyday joy at Sunshine School.",
}

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="Moments from life at Sunshine"
        description="Candid glimpses of learning, laughter and little victories. Browse through our full photo collection."
      />

      <section className="pb-16 md:pb-24">
        <GalleryGrid />
      </section>
    </>
  )
}
