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
      "A bright studio for painting, clay work, paper craft, and creative expression. Part of our Sheltered Workshop program.",
  },
  {
    icon: Music,
    title: "Music Room",
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
        className="border-t border-border bg-[#FACC15] py-16 text-black md:py-24 scroll-mt-24"
      >
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-black/20 bg-black/5 px-3 py-1 text-xs font-semibold text-black">
              <span className="h-1.5 w-1.5 rounded-full bg-black" />
              Sheltered Workshop · First Step Towards Independent Living
            </div>
            <h2 className="mt-5 font-serif text-4xl leading-[1.05] tracking-tight md:text-5xl font-bold">
              Where young adults build{" "}
              <span className="text-[#15803D] italic">skills and dignity</span>
            </h2>
            <p className="mt-5 text-black/85 leading-relaxed font-medium">
              Sunshine Sheltered Workshop is an innovative training center for youth with Autism Spectrum Disorder aged 18 to 30. Managed under skilled professionals including Occupational Therapists, Special Educators, and Sports Trainers, trainees build self-reliance and vocational readiness.
            </p>
            <p className="mt-4 text-black/85 leading-relaxed font-medium">
              Trainees craft handmade paper bags, greeting cards, candles, diyas, chocolates and corporate gifting while earning stipends for their work.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {[
                "Community Living Skills",
                "Vocational Skills",
                "Job Work with Stipend",
                "Sports & Leisure Activities",
                "Training for Job Work",
              ].map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg bg-black/10 px-3 py-1 text-xs font-semibold text-black"
                >
                  ✓ {skill}
                </span>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-3 gap-4 border-t border-black/15 pt-8">
              {[
                { v: "18–30", l: "Age Group" },
                { v: "8+", l: "Product Lines" },
                { v: "100+", l: "Stipend Orders" },
              ].map((stat) => (
                <div key={stat.l}>
                  <div className="font-serif text-3xl font-bold text-[#15803D]">
                    {stat.v}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-[0.14em] text-black/70 font-semibold">
                    {stat.l}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-black/10 shadow-xl">
              <Image
                src="/images/Sunshine Shelter Workshop.jpeg"
                alt="Young adults working in the Sunshine sheltered workshop"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden w-48 rounded-2xl bg-black p-5 text-white shadow-xl md:block">
              <div className="font-serif text-2xl leading-tight">
                Order handmade gifts
              </div>
              <p className="mt-1 text-xs text-white/80">
                Every purchase funds the trainee stipend program.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow="a personal invitation"
        title="Come spend a morning with us."
        description="Schedule a campus visit and experience our classrooms, therapy rooms and workshop firsthand."
        primary={{ label: "Book a visit", href: "/contact" }}
        secondary={{ label: "Read about admissions", href: "/admissions" }}
      />
    </>
  )
}
