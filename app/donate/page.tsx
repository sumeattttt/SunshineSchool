import type { Metadata } from "next"
import Image from "next/image"
import { PageHeader } from "@/components/site/page-header"
import { Heart, ShieldCheck, FileBadge, BookOpen, Bus, Utensils, Building2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Donate | Sunshine School",
  description:
    "Support the education and care of children with special needs. Every contribution — big or small — makes a difference.",
}

const IMPACT = [
  {
    icon: BookOpen,
    amount: "₹ 5,000",
    title: "Sponsors a month of learning materials",
    description: "Books, sensory tools, craft supplies for one student.",
  },
  {
    icon: Utensils,
    amount: "₹ 5,000",
    title: "Sponsors culinary material for Adults",
    description: "Culinary materials, baking ingredients, and utensils for Sheltered Workshop trainees.",
  },
  {
    icon: Bus,
    amount: "₹ 12,000",
    title: "Sponsors safe transport",
    description: "Supervised bus service and transportation for a child.",
  },
  {
    icon: Heart,
    amount: "₹ 85,000",
    title: "Sponsors a child annually",
    description: "Full annual support — tuition, therapy, transport, and educational care.",
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
        <div className="container-x grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <div className="rounded-3xl border border-border bg-brand-ink p-8 md:p-10 text-white">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-semibold text-brand-yellow">
              <Building2 className="h-3.5 w-3.5" /> Direct Bank Transfer
            </div>
            <h2 className="mt-5 font-serif text-3xl text-white md:text-4xl">
              Support via Direct Bank Deposit / NEFT / RTGS
            </h2>
            <p className="mt-3 text-white/80 text-sm leading-relaxed">
              You can transfer your donations directly to our official bank account. All contributions are eligible for 80G Tax Exemption.
            </p>

            <dl className="mt-8 grid gap-4 sm:grid-cols-2 rounded-2xl border border-white/15 bg-white/5 p-6 text-sm">
              <div>
                <dt className="text-xs uppercase tracking-wider text-white/60">Account Name</dt>
                <dd className="mt-1 font-medium text-white text-base">Sunshine Education Society</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-white/60">Account Number</dt>
                <dd className="mt-1 font-mono font-bold text-brand-yellow text-lg">11202011008402</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-white/60">Account Type</dt>
                <dd className="mt-1 font-medium text-white">Savings Account</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-white/60">Bank Name</dt>
                <dd className="mt-1 font-medium text-white">Punjab National Bank (PNB)</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-white/60">IFSC Code</dt>
                <dd className="mt-1 font-mono font-bold text-brand-yellow text-base">PUNB0112010</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-white/60">Branch</dt>
                <dd className="mt-1 font-medium text-white">Thane, Vashi Sector 14</dd>
              </div>
              <div className="sm:col-span-2 border-t border-white/15 pt-3 mt-1">
                <dt className="text-xs uppercase tracking-wider text-white/60">Branch Address</dt>
                <dd className="mt-1 text-xs text-white/80 leading-relaxed">
                  Shop No 12, 13, 14, Sai Pooja Chs, Plot No-52, Sector-14, Vashi, Navi-mumbai.
                </dd>
              </div>
            </dl>

            <p className="mt-6 text-xs text-white/70">
              * Note: Please email us your transfer details at <span className="text-brand-yellow font-medium">info@sunshineschool.org.in</span> along with your PAN card number so we can issue your 80G tax receipt.
            </p>
          </div>

          <div className="space-y-6">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border shadow-md">
              <Image
                src="/images/Gallery Additional Images/donation.jpg.jpeg"
                alt="Donation & Community Support Drive"
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
                    Registered under Section 80G — tax exemption receipts issued promptly upon receipt.
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
          </div>
        </div>
      </section>
    </>
  )
}
