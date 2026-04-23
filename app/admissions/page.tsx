import Link from "next/link"
import { PageHeader } from "@/components/site/page-header"
import { CtaSection } from "@/components/site/cta-section"
import { AdmissionForm } from "@/components/admissions/admission-form"
import { CalendarCheck, FileText, MessageSquare, PhoneCall, Users } from "lucide-react"

export const metadata = {
  title: "Admissions",
  description:
    "Admissions are open at Sunshine School. Complete the admission form for your child — an online assessment will be conducted before admission is confirmed.",
}

const STEPS = [
  {
    step: "01",
    icon: FileText,
    title: "Submit the admission form",
    body: "Fill out the admission form with your child's details and developmental history.",
  },
  {
    step: "02",
    icon: PhoneCall,
    title: "We reach out",
    body: "Our admissions team will contact you to schedule the next steps.",
  },
  {
    step: "03",
    icon: CalendarCheck,
    title: "Online assessment",
    body: "An online assessment is conducted to understand your child's strengths and needs.",
  },
  {
    step: "04",
    icon: MessageSquare,
    title: "Parent meeting",
    body: "You meet with our principal and team to co-design your child's IEP.",
  },
  {
    step: "05",
    icon: Users,
    title: "Welcome to Sunshine",
    body: "Your child joins the most suitable programme and becomes part of our family.",
  },
]

export default function AdmissionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Admissions · 2026–27"
        title="Admissions are open. Let&rsquo;s start your child&rsquo;s journey."
        description="Sunshine welcomes children aged 3 to 17 years across our early intervention, academic and pre-vocational programmes, and trainees aged 18+ into our sheltered workshop."
        crumbs={[{ label: "Home", href: "/" }, { label: "Admissions" }]}
      />

      {/* Process steps */}
      <section className="container-x py-20 md:py-28">
        <div className="mb-12 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-brand-red">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
            Our admission process
          </div>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] text-brand-ink md:text-5xl">
            Simple, considered — and never rushed.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {STEPS.map(({ step, icon: Icon, title, body }) => (
            <div
              key={step}
              className="rounded-3xl border border-border bg-card p-6"
            >
              <div className="flex items-center justify-between">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-brand-yellow text-brand-ink">
                  <Icon className="h-4 w-4" />
                </div>
                <div className="font-display text-2xl text-brand-red">
                  {step}
                </div>
              </div>
              <h3 className="mt-6 font-display text-xl leading-tight text-brand-ink">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Form */}
      <section id="form" className="bg-brand-cream">
        <div className="container-x py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-brand-red">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
                Admission form
              </div>
              <h2 className="mt-5 font-display text-4xl leading-[1.05] text-brand-ink md:text-5xl">
                Tell us about your child.
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                All information you share with us is confidential and used only
                by our principal and education team to plan your child&apos;s
                onboarding. An online assessment will be conducted before
                admission is confirmed.
              </p>
              <div className="mt-8 rounded-2xl border border-border bg-background p-5">
                <div className="text-[11px] uppercase tracking-[0.2em] text-brand-red">
                  Prefer to talk first?
                </div>
                <div className="mt-2 font-display text-xl text-brand-ink">
                  +91 022 2087 0982
                </div>
                <div className="mt-0.5 text-sm text-muted-foreground">
                  Monday – Saturday · 9:00 am to 4:00 pm
                </div>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex text-sm font-medium text-brand-red hover:underline"
                >
                  Or send us a message →
                </Link>
              </div>
            </div>
            <div>
              <AdmissionForm />
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow="Visit the campus"
        title="See Sunshine with your own eyes."
        description="Book a 45-minute visit — meet our educators, see our classrooms and workshop, and ask us anything."
        primary={{ label: "Book a campus visit", href: "/contact" }}
        secondary={{ label: "Call us", href: "tel:+912220870982" }}
      />
    </>
  )
}
