import type { Metadata } from "next"
import Image from "next/image"
import { PageHeader } from "@/components/site/page-header"
import { DonateForm } from "@/components/donate/donate-form"
import { Heart, ShieldCheck, FileBadge, BookOpen, Bus, Utensils } from "lucide-react"

export const metadata: Metadata = {
  title: "Donate | Sunshine School",
  description:
    "Support the education and care of children with special needs. Every contribution — big or small — makes a difference.",
}

const IMPACT = [
  {
    icon: BookOpen,
    amount: "₹ 2,500",
    title: "Sponsors a month of learning materials",
    description: "Books, sensory tools, craft supplies for one student.",
  },
  {
    icon: Utensils,
    amount: "₹ 5,000",
    title: "Covers a term of nutritious meals",
    description: "Healthy breakfast and lunch for one student for 3 months.",
  },
  {
    icon: Bus,
    amount: "₹ 10,000",
    title: "Safe transport for a year",
    description: "One year of supervised bus service for a child.",
  },
  {
    icon: Heart,
    amount: "₹ 30,000",
    title: "Sponsors a child annually",
    description: "Full support — tuition, therapy, meals, transport — for a year.",
  },
]

export default function DonatePage() {
  return (
    <>
      <PageHeader
        eyebrow="Donate"
        title="Your kindness lights the way"
        description="Sunshine is a non-profit society. We rely on parents, donors and well-wishers to continue offering the best possible care to every child — regardless of their family's ability to pay."
      />

      <section className="container-x pb-16 md:pb-24">
        <div className="mb-10">
          <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
            How your donation helps
          </div>
          <h2 className="mt-2 font-serif text-3xl text-brand-ink md:text-4xl">
            See the impact of your gift
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {IMPACT.map((i) => {
            const Icon = i.icon
            return (
              <div
                key={i.amount}
                className="rounded-2xl border border-border bg-card p-6 transition-colors hover:border-brand-red/40"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-yellow-soft text-brand-ink">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-4 font-serif text-2xl text-brand-red">
                  {i.amount}
                </div>
                <h3 className="mt-1 font-serif text-lg text-brand-ink">
                  {i.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {i.description}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="border-t border-border bg-brand-cream/40 py-16 md:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div className="rounded-3xl border border-border bg-card p-8 md:p-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-brand-yellow-soft px-3 py-1 text-xs font-medium text-brand-ink">
              <Heart className="h-3 w-3" /> Make a donation
            </div>
            <h2 className="mt-4 font-serif text-3xl text-brand-ink md:text-4xl">
              Contribute today
            </h2>
            <p className="mt-3 text-muted-foreground">
              All donations are eligible for tax exemption under Section 80G of
              the Income Tax Act.
            </p>
            <div className="mt-8">
              <DonateForm />
            </div>
          </div>

          <div className="space-y-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src="/images/hero-students.jpg"
                alt="Students at Sunshine School"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="space-y-4 rounded-3xl border border-border bg-card p-6">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" />
                <div>
                  <div className="font-medium text-brand-ink">
                    80G Tax Exemption
                  </div>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    Registered under Section 80G — receipts issued within 7 days.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FileBadge className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" />
                <div>
                  <div className="font-medium text-brand-ink">
                    Transparent Reporting
                  </div>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    Annual reports and audited financial statements available on
                    request.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-brand-ink p-6 text-brand-cream">
              <div className="font-serif text-xl">Bank Transfer Details</div>
              <dl className="mt-4 space-y-2.5 text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-brand-cream/60">Account Name</dt>
                  <dd className="text-right font-medium">Sunshine Education Society</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-brand-cream/60">Account No.</dt>
                  <dd className="text-right font-mono font-semibold text-brand-yellow">11202011008402</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-brand-cream/60">Account Type</dt>
                  <dd className="text-right font-medium">Savings Account</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-brand-cream/60">Bank Name</dt>
                  <dd className="text-right font-medium">Punjab National Bank (PNB)</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-brand-cream/60">IFSC Code</dt>
                  <dd className="text-right font-mono font-semibold text-brand-yellow">PUNB0112010</dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-brand-cream/60">Branch</dt>
                  <dd className="text-right">Thane, Vashi Sector 14</dd>
                </div>
                <div className="mt-2 border-t border-brand-cream/10 pt-2 text-xs text-brand-cream/70">
                  <span className="font-medium text-brand-cream/90">Address:</span> Shop No 12, 13, 14, Sai Pooja Chs, Plot No-52, Sector-14, Vashi, Navi-mumbai.
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
