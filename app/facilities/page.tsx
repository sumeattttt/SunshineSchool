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

      {/* Therapies */}
      <section id="therapy" className="border-t border-border bg-brand-cream/50 py-16 md:py-24 scroll-mt-24">
        <div className="container-x">
          <div className="mb-12 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-brand-red">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              Therapies during school hours
            </div>
            <h2 className="mt-5 font-serif text-3xl text-brand-ink md:text-4xl">
              In-house therapy, woven into the school day.
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Occupational Therapy",
                body: "Improves fine & gross motor skills, sensory integration and daily-living abilities.",
                image: "/images/sensory-climbing-wall.jpg",
                imageFocus: "object-[center_20%]",
              },
              {
                title: "Speech Therapy",
                body: "Develops expressive and receptive communication, articulation and alternative communication.",
                image: "/images/therapy/speech-therapy.jpg",
                imageFocus: "object-[center_15%]",
              },
              {
                title: "Behavioural Therapy",
                body: "Structured, evidence-informed strategies to support positive behaviours and self-regulation.",
                image: "/images/therapy/behavioural-therapy.jpg",
                imageFocus: "object-[center_10%]",
              },
              {
                title: "Music Therapy",
                body: "Helps in sensory integration, emotional expression, motor coordination, and communication through rhythm and melody.",
                image: "/images/therapy/music-therapy.jpg",
                imageFocus: "object-center",
              },
            ].map((t) => (
              <div key={t.title} className="group overflow-hidden rounded-3xl border border-border bg-card shadow-sm h-full flex flex-col justify-between">
                <div className="relative aspect-[3/4] overflow-hidden bg-brand-yellow-soft">
                  <Image
                    src={t.image}
                    alt={t.title}
                    fill
                    className={`object-cover transition-transform duration-500 group-hover:scale-105 ${t.imageFocus}`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-xl text-brand-ink font-semibold">{t.title}</h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                      {t.body}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
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

          <div className="space-y-6">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-black/10 shadow-xl bg-black/5">
              <Image
                src="/images/sheltered-workshop-about.jpg"
                alt="Culinary & life skills training in Sheltered Workshop"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-4 left-4 bg-black/75 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold text-white">
                🍳 Life Skills & Culinary Training
              </div>
            </div>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-black/10 shadow-xl bg-black/5">
              <Image
                src="/images/sheltered-workshop-crafts.jpg"
                alt="Exhibition and sale of handmade products created by trainees"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-4 left-4 bg-black/75 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-semibold text-white">
                🛍️ Handcrafts & Exhibition Stall
              </div>
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
