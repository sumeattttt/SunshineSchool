import type { Metadata } from "next"
import Link from "next/link"
import { MapPin, Phone, Mail, ArrowUpRight } from "lucide-react"
import { PageHeader } from "@/components/site/page-header"
import { ContactForm } from "@/components/contact/contact-form"
import { CtaSection } from "@/components/site/cta-section"

export const metadata: Metadata = {
  title: "Contact Us | Sunshine School",
  description:
    "Reach out to Sunshine School and Sheltered Workshop in Vashi, Navi Mumbai. We're here to answer your questions about admissions, programs, and how you can support our mission.",
}

const CONTACT_DETAILS = [
  {
    icon: MapPin,
    title: "Sunshine School Campus",
    lines: [
      "C/O Navi Mumbai Primary School",
      "Sec-2, Opp. Vashi Police Station",
      "Vashi, Navi Mumbai - 400703",
    ],
    action: { label: "Get Directions", href: "https://maps.app.goo.gl/mL3VxnjEywBiG8Zv8" },
  },
  {
    icon: MapPin,
    title: "Sheltered Workshop (S.W.)",
    lines: [
      "RH-4, M-9, Sector-6",
      "Vashi, Navi Mumbai",
      "Maharashtra - 400703",
    ],
    action: { label: "View Location", href: "https://maps.google.com/?q=Sector+6+Vashi+Navi+Mumbai" },
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["022 27827342", "+91 88504 77964"],
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
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-yellow text-brand-ink font-bold">
                  <Icon className="h-5 w-5 stroke-[2.5]" />
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
            <div className="rounded-3xl border border-border bg-card p-6">
              <div className="mb-3 text-xs uppercase tracking-wider font-semibold text-brand-red">
                Campus Location 1 — Sunshine School
              </div>
              <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
                <iframe
                  title="Sunshine School location in Vashi, Navi Mumbai"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.781846985794!2d72.9953277!3d19.0725982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c14a85e2e851%3A0x48d2cacf7bed75a2!2sSunshine%20School%20For%20Differently%20Abled%20Children!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="h-[220px] w-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6">
              <div className="mb-3 text-xs uppercase tracking-wider font-semibold text-brand-red">
                Campus Location 2 — Sheltered Workshop (S.W.)
              </div>
              <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
                <iframe
                  title="Sunshine Sheltered Workshop location in Sector 6, Vashi"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.923485741829!2d72.9912000!3d19.0664000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c14d85e2e851%3A0x48d2cacf7bed75a3!2sSector%206%2C%20Vashi%2C%20Navi%20Mumbai%2C%20Maharashtra%20400703!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  className="h-[220px] w-full border-0"
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-brand-ink p-8 text-brand-cream">
              <h3 className="font-serif text-2xl">Prefer a call or message?</h3>
              <p className="mt-2 text-sm text-brand-cream/80 leading-relaxed">
                Our team is available Monday through Friday between
                9:00 AM and 3:30 PM to answer all your queries.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="tel:02227827342"
                  className="inline-flex items-center gap-1.5 rounded-full bg-brand-yellow px-4 py-2 text-sm font-medium text-brand-ink hover:bg-brand-yellow/90"
                >
                  <Phone className="h-3.5 w-3.5" /> Call Admissions
                </a>
                <a
                  href="https://wa.me/918850477964"
                  className="inline-flex items-center gap-1.5 rounded-full border border-brand-cream/30 px-4 py-2 text-sm font-medium text-brand-cream hover:bg-brand-cream/10"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection
        eyebrow="A PERSONAL INVITATION"
        title="Come spend a morning with us."
        description="Schedule a campus visit and experience our classrooms, therapy rooms and workshop firsthand."
        primary={{ label: "Book a visit", href: "/contact" }}
        secondary={{ label: "Read about admissions", href: "/admissions" }}
      />
    </>
  )
}
