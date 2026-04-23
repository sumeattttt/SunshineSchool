import type { Metadata } from "next"
import Image from "next/image"
import { PageHeader } from "@/components/site/page-header"
import { CtaSection } from "@/components/site/cta-section"
import {
  BookOpen,
  Brush,
  Dumbbell,
  Music,
  Utensils,
  HeartPulse,
  Bus,
  Sparkles,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Facilities & Sheltered Workshop | Sunshine School",
  description:
    "Explore our purpose-built classrooms, therapy rooms, sports ground, sheltered workshop, and other facilities designed for our students.",
}

const FACILITIES = [
  {
    icon: BookOpen,
    title: "Smart Classrooms",
    description:
      "Small, purpose-built rooms with visual schedules, sensory-friendly lighting, and structured learning zones.",
  },
  {
    icon: HeartPulse,
    title: "Therapy Rooms",
    description:
      "Dedicated spaces for speech, occupational, physio, and behavioural therapy — equipped with sensory tools.",
  },
  {
    icon: Brush,
    title: "Art & Craft Studio",
    description:
      "A bright studio for painting, clay work, paper craft, and creative expression.",
  },
  {
    icon: Music,
    title: "Music & Dance Room",
    description:
      "Instruments, mirrors, and soft flooring — where rhythm becomes therapy and joy.",
  },
  {
    icon: Dumbbell,
    title: "Sports & Play Area",
    description:
      "Outdoor play, adapted sports, and physical activities that build coordination and confidence.",
  },
  {
    icon: Utensils,
    title: "Training Kitchen",
    description:
      "A life-skills kitchen where students learn cooking, baking, and food hygiene.",
  },
  {
    icon: Bus,
    title: "Safe Transport",
    description:
      "Supervised bus service with trained attendants covering Vashi, Nerul, Sanpada, and nearby areas.",
  },
  {
    icon: Sparkles,
    title: "Sensory Corner",
    description:
      "A calm, low-stimulus space for regulation — with soft lighting, textures, and weighted aids.",
  },
]

export default function FacilitiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our campus"
        title="A space designed for every kind of learner"
        description="From small classrooms to sensory corners, every square foot of Sunshine is intentional — built to make learning safe, joyful and possible."
      />

      <section className="container-x pb-16 md:pb-24">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FACILITIES.map((f) => {
            const Icon = f.icon
            return (
              <div
                key={f.title}
                className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-brand-red/40"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-yellow-soft text-brand-ink">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-serif text-xl text-brand-ink">
                  {f.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {f.description}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      <section
        id="workshop"
        className="border-t border-border bg-brand-ink py-16 text-brand-cream md:py-24 scroll-mt-24"
      >
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-cream/20 bg-brand-cream/5 px-3 py-1 text-xs font-medium text-brand-yellow">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
              Sheltered Workshop
            </div>
            <h2 className="mt-5 font-serif text-4xl leading-[1.05] tracking-tight md:text-5xl">
              Where young adults build{" "}
              <span className="text-brand-yellow italic">skills and dignity</span>
            </h2>
            <p className="mt-5 text-brand-cream/80 leading-relaxed">
              Our sheltered workshop is a vocational training unit for
              differently-abled young adults above the age of 18. Under trained
              supervisors, trainees craft handmade paper bags, greeting cards,
              candles, diyas, chocolates and seasonal gifting — products sold to
              corporates and the community.
            </p>
            <p className="mt-4 text-brand-cream/80 leading-relaxed">
              The program combines purposeful work with social skills, routine,
              and a sense of identity — proving every day that ability comes in
              many forms.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-brand-cream/10 pt-8">
              {[
                { v: "25+", l: "Trainees" },
                { v: "8+", l: "Product lines" },
                { v: "100+", l: "Corporate orders" },
              ].map((stat) => (
                <div key={stat.l}>
                  <div className="font-serif text-3xl text-brand-yellow">
                    {stat.v}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-[0.14em] text-brand-cream/60">
                    {stat.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src="/images/workshop.jpg"
                alt="Young adults working in the Sunshine sheltered workshop"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden w-48 rounded-2xl bg-brand-yellow p-5 text-brand-ink shadow-xl md:block">
              <div className="font-serif text-2xl leading-tight">
                Order handmade gifts
              </div>
              <p className="mt-1 text-xs">
                Every purchase funds the trainee stipend program.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow="Visit the campus"
        title="Come see our campus in person"
        description="We welcome parents, donors and friends to visit us. Schedule a campus tour at a time that works for you."
        primary={{ label: "Book a Tour", href: "/contact" }}
        secondary={{ label: "View Gallery", href: "/gallery" }}
      />
    </>
  )
}
