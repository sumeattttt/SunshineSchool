import type { Metadata } from "next"
import Link from "next/link"
import { MapPin, Phone, Mail, Clock, ArrowUpRight } from "lucide-react"
import { PageHeader } from "@/components/site/page-header"
import { ContactForm } from "@/components/contact/contact-form"
import { CtaSection } from "@/components/site/cta-section"

export const metadata: Metadata = {
  title: "Contact Us | Sunshine School",
  description:
    "Reach out to Sunshine School in Vashi, Navi Mumbai. We're here to answer your questions about admissions, programs, and how you can support our mission.",
}

const CONTACT_DETAILS = [
  {
    icon: MapPin,
    title: "Sunshine School",
    lines: [
      "C/O Navi Mumbai Primary School",
      "Sec-2, Opp. Vashi Police Station",
      "Vashi, Navi Mumbai - 400703",
    ],
    action: { label: "Get Directions", href: "https://maps.app.goo.gl/aPLDwRjSv25NnzpL7" },
  },
  {
    icon: MapPin,
    title: "Sheltered Workshop (S.W.)",
    lines: [
      "RH-4, M-9, Sector-6",
      "Vashi, Navi Mumbai",
      "Maharashtra 400703",
    ],
    action: { label: "View Location", href: "https://maps.google.com/?q=Sector+6+Vashi+Navi+Mumbai" },
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["022 27827342", "022 20870982"],
    action: { label: "Call Now", href: "tel:02227827342" },
  },
  {
    icon: Mail,
    title: "Email & Hours",
    lines: ["sunshine.vashi@gmail.com", "Mon – Fri: 9:00 AM – 3:30 PM", "Sat: By appointment"],
    action: { label: "Send Email", href: "mailto:sunshine.vashi@gmail.com" },
  },
]

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get in touch"
        title="We would love to hear from you"
        description="Whether you're a parent exploring options, a volunteer wanting to help, or a donor looking to support, we're just a message away."
      />

      <section className="container-x pb-16 md:pb-24">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CONTACT_DETAILS.map((detail) => {
            const Icon = detail.icon
            return (
              <div
                key={detail.title}
                className="flex flex-col rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-yellow-soft text-brand-ink">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 font-serif text-xl text-brand-ink">
                  {detail.title}
                </h3>
                <div className="mt-2 flex-1 space-y-0.5 text-sm text-muted-foreground leading-relaxed">
                  {detail.lines.map((line) => (
                    <p key={line}>{line}</p>
                  ))}
                </div>
                {detail.action && (
                  <Link
                    href={detail.action.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-red hover:underline"
                  >
                    {detail.action.label}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-brand-yellow-soft px-3 py-1 text-xs font-medium text-brand-ink">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              Send us a message
            </div>
            <h2 className="mt-4 font-serif text-3xl text-brand-ink md:text-4xl">
              How can we help you?
            </h2>
            <p className="mt-3 text-muted-foreground">
              Fill out the form and a member of our team will respond within one
              working day.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-3xl border border-border">
              <iframe
                title="Sunshine School location in Vashi, Navi Mumbai"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.8359287515!2d73.001!3d19.071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzE1LjYiTiA3M8KwMDAnMDMuNiJF!5e0!3m2!1sen!2sin!4v1"
                className="h-[360px] w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="rounded-3xl border border-border bg-brand-ink p-8 text-brand-cream">
              <h3 className="font-serif text-2xl">Prefer a call?</h3>
              <p className="mt-2 text-sm text-brand-cream/80 leading-relaxed">
                Our admissions team is available Monday through Friday between
                9:30 AM and 3:00 PM to walk you through our programs.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="tel:02227827342"
                  className="inline-flex items-center gap-1.5 rounded-full bg-brand-yellow px-4 py-2 text-sm font-medium text-brand-ink hover:bg-brand-yellow/90"
                >
                  <Phone className="h-3.5 w-3.5" /> Call Admissions
                </a>
                <a
                  href="https://wa.me/919930530543"
                  className="inline-flex items-center gap-1.5 rounded-full border border-brand-cream/30 px-4 py-2 text-sm font-medium text-brand-cream hover:bg-brand-cream/10"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
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
