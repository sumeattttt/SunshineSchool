import type { Metadata } from "next"
import Image from "next/image"
import { PageHeader } from "@/components/site/page-header"
import { VolunteerForm } from "@/components/volunteer/volunteer-form"
import { CtaSection } from "@/components/site/cta-section"
import {
  BookOpenCheck,
  Briefcase,
  Palette,
  Megaphone,
  Stethoscope,
  Code2,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Volunteer With Us | Sunshine School",
  description:
    "Become a volunteer at Sunshine School. Share your time, skills and care to make a real difference in the lives of children with special needs.",
}

const ROLES = [
  {
    icon: BookOpenCheck,
    title: "Classroom Assistant",
    commitment: "4–8 hrs / week",
    description:
      "Support teachers in daily activities — reading circles, worksheets, play-based learning.",
  },
  {
    icon: Palette,
    title: "Art & Craft Mentor",
    commitment: "2–4 hrs / week",
    description:
      "Lead creative sessions — painting, clay, origami, storytelling through art.",
  },
  {
    icon: Stethoscope,
    title: "Therapy Volunteer",
    commitment: "Flexible",
    description:
      "Qualified speech, occupational or physio therapists willing to volunteer weekly hours.",
  },
  {
    icon: Briefcase,
    title: "Workshop Mentor",
    commitment: "4 hrs / week",
    description:
      "Guide sheltered workshop trainees in craft, baking, packaging and soft skills.",
  },
  {
    icon: Megaphone,
    title: "Events & Outreach",
    commitment: "Event based",
    description:
      "Help organise annual day, awareness walks, exhibitions and fundraisers.",
  },
  {
    icon: Code2,
    title: "Pro Bono Skills",
    commitment: "Project based",
    description:
      "Designers, writers, accountants, and tech professionals — we welcome your expertise.",
  },
]

export default function VolunteerPage() {
  return (
    <>
      <PageHeader
        eyebrow="Volunteer"
        title="Share your time. Change a life."
        description="You don't need special training to make a difference — just patience, warmth and a willingness to show up. Here's how you can help."
      />

      <section className="container-x pb-16 md:pb-24">
        <div className="mb-10">
          <h2 className="font-serif text-3xl text-brand-ink md:text-4xl">
            Ways to volunteer
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ROLES.map((role) => {
            const Icon = role.icon
            return (
              <div
                key={role.title}
                className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-brand-red/40"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-yellow-soft text-brand-ink">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-brand-cream px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-brand-ink">
                    {role.commitment}
                  </span>
                </div>
                <h3 className="mt-4 font-serif text-xl text-brand-ink">
                  {role.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {role.description}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="border-t border-border bg-brand-cream/40 py-16 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div className="space-y-6">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl">
              <Image
                src="/images/parents.jpg"
                alt="Volunteer with students"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <blockquote className="rounded-3xl border border-border bg-card p-6">
              <p className="font-serif text-xl leading-snug text-brand-ink">
                &ldquo;Volunteering at Sunshine for the last two years has been
                the most rewarding thing I do. The children teach me more than I
                teach them.&rdquo;
              </p>
              <footer className="mt-4 text-sm text-muted-foreground">
                — Priya Sharma, Art Mentor since 2023
              </footer>
            </blockquote>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-brand-yellow-soft px-3 py-1 text-xs font-medium text-brand-ink">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              Volunteer application
            </div>
            <h2 className="mt-4 font-serif text-3xl text-brand-ink md:text-4xl">
              Apply to volunteer
            </h2>
            <p className="mt-3 text-muted-foreground">
              Share a few details and our coordinator will get back to you within
              two working days to discuss roles that match your skills and time.
            </p>
            <div className="mt-8">
              <VolunteerForm />
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow="Other ways to help"
        title="Prefer to give in other ways?"
        description="You can support us through donations, corporate CSR partnerships, or by purchasing products from our sheltered workshop."
        primary={{ label: "Donate", href: "/donate" }}
        secondary={{ label: "Contact Us", href: "/contact" }}
      />
    </>
  )
}
