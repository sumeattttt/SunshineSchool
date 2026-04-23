import Image from "next/image"
import Link from "next/link"
import { PageHeader } from "@/components/site/page-header"
import { CtaSection } from "@/components/site/cta-section"
import { Stats } from "@/components/home/stats"
import { ArrowUpRight, Heart, Shield, Sparkles, Target, Users, Zap } from "lucide-react"

export const metadata = {
  title: "About the School",
  description:
    "Since 2010, Sunshine School has been a non-profit home for children and adults with autism and other developmental disabilities — founded and led by Mrs Paramita Mazumdar.",
}

const VALUES = [
  {
    icon: Heart,
    title: "Nurturing Confidence",
    body: "Every child is met with warmth, patience and a belief in their ability to grow.",
  },
  {
    icon: Zap,
    title: "Independence",
    body: "We prepare students to live, work and participate in the community with dignity.",
  },
  {
    icon: Users,
    title: "Individualised Care",
    body: "Individualised Education Programmes designed around each child's unique needs.",
  },
  {
    icon: Target,
    title: "Focused",
    body: "Structured, consistent and evidence-informed — every intervention has intention.",
  },
  {
    icon: Shield,
    title: "Family-style Attention",
    body: "Small cohorts and personal relationships with every child and their parents.",
  },
  {
    icon: Sparkles,
    title: "Innovative",
    body: "New tools, creative curricula and an openness to whatever helps each child thrive.",
  },
]

const VISIONARIES = [
  {
    name: "Mr. Hirak Das",
    role: "Chairman, Sunshine Educational Trust",
    bio: "Founder and chairman of the Sagarika group of companies; active in social and non-profit causes for the last 20 years.",
  },
  {
    name: "Ms. Sagarika Das",
    role: "Treasurer, Sunshine Educational Society",
    bio: "President of Sagarika Music Pvt. Ltd. A young, energetic entrepreneur involved with children's welfare organisations.",
  },
  {
    name: "Mrs. Paramita Mazumdar",
    role: "Principal & Co-founder",
    bio: "Qualified special educator and counsellor; parent of an autistic young adult. Principal of Sunshine School since its inception.",
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Sunshine"
        title="A school built out of love, for children who learn differently."
        description="The Sunshine Educational Trust and Society is a non-profit organisation that provides quality education and rehabilitation through two flagship initiatives — Sunshine School and the Sunshine Sheltered Workshop."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Two initiatives */}
      <section className="container-x py-20 md:py-28">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-10">
          <article className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border">
              <Image
                src="/images/classroom.jpg"
                alt="Sunshine School classroom"
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="mt-8">
              <div className="text-[11px] uppercase tracking-[0.2em] text-brand-red">
                Since 2010
              </div>
              <h2 className="mt-3 font-display text-3xl text-brand-ink md:text-4xl">
                Sunshine School — for differently-abled children
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Mrs. Paramita Mazumdar — principal since our inception — has a
                son with autism (now 20 years old), and this was one of the
                driving factors for her to take the initiative of starting
                Sunshine School. It was founded so that differently-abled
                children, who are unable to fit into mainstream schools, could
                be provided with appropriate curricular and extra-curricular
                training.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Started on a small scale with just{" "}
                <span className="text-brand-ink">6 students</span> (including
                Paramita&apos;s son), today the school has bloomed to cater to{" "}
                <span className="text-brand-ink">80+ students</span> ranging
                from age 3 to 17 years.
              </p>
            </div>
          </article>

          <article className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border">
              <Image
                src="/images/workshop.jpg"
                alt="Sunshine Sheltered Workshop"
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="mt-8">
              <div className="text-[11px] uppercase tracking-[0.2em] text-brand-red">
                Since 2018
              </div>
              <h2 className="mt-3 font-display text-3xl text-brand-ink md:text-4xl">
                Sheltered Workshop — for differently-abled adults
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                This initiative was started so that differently-abled adults
                can be trained in community-living skills, vocational/work
                skills and leisure skills — so they can be socially integrated,
                live more independently and gain appropriate employment in
                future, reaching their maximal social and economic potential.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Today the workshop serves{" "}
                <span className="text-brand-ink">18 trainees</span> — 13
                graduates from Sunshine School and 5 new trainees — aged 18 to
                30 years.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="bg-brand-ink text-white">
        <div className="container-x py-20 md:py-28">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-brand-yellow">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
                Vision
              </div>
              <h3 className="mt-5 font-display text-4xl leading-[1.05] text-white md:text-5xl">
                All differently-abled children and adults meet their{" "}
                <span className="italic text-brand-yellow">
                  maximum potential.
                </span>
              </h3>
            </div>
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-brand-yellow">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-yellow" />
                Mission
              </div>
              <h3 className="mt-5 font-display text-3xl leading-[1.15] text-white md:text-4xl">
                We promote social integration and independence among
                differently-abled children and adults by providing personalised
                quality education in a nurturing environment — and guidance to
                their families.
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container-x py-20 md:py-28">
        <div className="mb-14 max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-brand-red">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
            Our values
          </div>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] text-brand-ink md:text-5xl">
            What we hold dear, every single day.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {VALUES.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-3xl border border-border bg-card p-7"
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-yellow-soft text-brand-red">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 font-display text-xl text-brand-ink">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Visionaries */}
      <section className="bg-brand-cream">
        <div className="container-x py-20 md:py-28">
          <div className="mb-14 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-brand-red">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              Our visionaries
            </div>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] text-brand-ink md:text-5xl">
              The people behind Sunshine.
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {VISIONARIES.map((v) => (
              <div
                key={v.name}
                className="flex h-full flex-col justify-between rounded-3xl border border-border bg-background p-7"
              >
                <div>
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-yellow font-display text-xl text-brand-ink">
                    {v.name
                      .replace("Mr.", "")
                      .replace("Mrs.", "")
                      .replace("Ms.", "")
                      .trim()
                      .split(" ")
                      .map((w) => w.charAt(0))
                      .join("")}
                  </div>
                  <h3 className="mt-6 font-display text-2xl text-brand-ink">
                    {v.name}
                  </h3>
                  <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-brand-red">
                    {v.role}
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {v.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/faculty"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium text-brand-ink hover:border-brand-ink/40"
            >
              Meet our full team <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <Stats />
      <CtaSection
        eyebrow="Start the conversation"
        title="Come see Sunshine in person."
        description="Book a campus visit and meet the team who will be your partners in your child's journey."
        primary={{ label: "Book a visit", href: "/contact" }}
        secondary={{ label: "Admissions info", href: "/admissions" }}
      />
    </>
  )
}
