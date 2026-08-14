import Image from "next/image"
import Link from "next/link"
import { PageHeader } from "@/components/site/page-header"
import { CtaSection } from "@/components/site/cta-section"
import { Stats } from "@/components/home/stats"
import { ArrowUpRight, Heart, Shield, Sparkles, Target, Users, Zap } from "lucide-react"

export const metadata = {
  title: "About the School",
  description:
    "Since 2006, Sunshine School has been a non-profit organization for children and adults with autism and other developmental disabilities — led by Mrs. Paramita Mazumder.",
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
    name: "Late Shri Hirak Das",
    role: "Founding Chairman, Sunshine Education Society (2006 – 2025)",
    image: "/images/hirak-das.jpg",
    paragraphs: [
      "Mr. Hirak Das was the Founder Chairman of the Sunshine Education Society and the visionary who laid the foundation for Sunshine’s journey. With a deep commitment to creating opportunities for children and adults with special needs, he established Sunshine with the belief that every individual deserves dignity, acceptance, education, and the opportunity to lead a meaningful life.",
      "His vision and leadership shaped Sunshine into a nurturing and inclusive environment where individuals are encouraged to discover their abilities, develop independence, and participate meaningfully in society.",
      "Although he is no longer with us, his vision continues to live on at the heart of Sunshine. His legacy inspires our ongoing commitment to inclusion, empowerment, and a life of dignity for every individual.",
    ],
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Sunshine"
        title="A school built out of love, for children who learn differently."
        description="Sunshine School for Differently-Abled Children, an initiative of Sunshine Education Society, is a non-profit organization dedicated to provide quality education, rehabilitation, and holistic development opportunities for children with special needs."
        crumbs={[{ label: "Home", href: "/" }, { label: "About" }]}
      />

      {/* Two initiatives */}
      <section className="container-x py-20 md:py-28">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-10">
          <article className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border">
              <Image
                src="/images/award01.jpeg"
                alt="Mrs. Paramita Mazumder and son"
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover object-top"
              />
            </div>
            <div className="mt-8">
              <div className="text-[11px] uppercase tracking-[0.2em] text-brand-red">
                Since 2006
              </div>
              <h2 className="mt-3 font-display text-3xl text-brand-ink md:text-4xl">
                Sunshine School — for differently-abled children
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Sunshine School for Differently-Abled Children, an initiative of Sunshine Education Society, is a non-profit organization dedicated to providing quality education, rehabilitation, and holistic development opportunities for children with special needs. <strong className="font-semibold text-brand-ink">Mrs. Paramita Mazumder</strong> — Principal & Secretary — has a son with autism, which was the driving factor for starting this initiative.
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Established with the aim of creating an inclusive and nurturing environment, the school supports children with Autism Spectrum Disorder and other developmental disabilities through individualized education, therapies, skill development, and vocational training. The school focuses on Early Intervention, Academic and Functional Academics, Pre-Vocational and Vocational Training, along with extracurricular activities.
              </p>
            </div>
          </article>

          <article className="relative">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-border">
              <Image
                src="/images/Sunshine Shelter Workshop.jpeg"
                alt="Sunshine Sheltered Workshop"
                fill
                sizes="(min-width: 1024px) 48vw, 100vw"
                className="object-cover object-[center_35%]"
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
                Today the workshop supports 25+ trainees and graduates from Sunshine School aged 18 and above.
              </p>
            </div>
          </article>
        </div>

        {/* 3-Image Grid */}
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
              <Image
                src="/images/award01.jpeg"
                alt="Awards"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-5">
              <div className="text-[11px] uppercase tracking-[0.2em] text-brand-red">
                Nipman Foundation – Microsoft Equal Opportunity Awards 2019
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Honoured with the Microsoft Equal Opportunity Award 2019 by the Nipman Foundation in recognition of outstanding efforts toward promoting inclusion, accessibility, and equal opportunities for persons with disabilities.
              </p>
            </div>
          </div>

          <div>
            <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
              <Image
                src="/images/award02.jpeg"
                alt="Awards"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-5">
              <div className="text-[11px] uppercase tracking-[0.2em] text-brand-red">
                Bank of Baroda – SaluteHerShakti Award
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                <strong className="font-semibold text-brand-ink">Mrs. Paramita Mazumder</strong> was recognized with the SaluteHerShakti Award by Bank of Baroda for her inspiring leadership and dedicated work in empowering women and creating a positive social impact through inclusive initiatives.
              </p>
            </div>
          </div>

          <div>
            <div className="group relative aspect-[4/3] overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
              <Image
                src="/images/award03.jpeg"
                alt="Awards"
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="mt-5">
              <div className="text-[11px] uppercase tracking-[0.2em] text-brand-red">
                Navi Mumbai Municipal Corporation (NMMC) – Disability Sector Recognition
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                <strong className="font-semibold text-brand-ink">Mrs. Paramita Mazumder</strong> was felicitated by the Navi Mumbai Municipal Corporation (NMMC) for her significant contribution to the disability sector, acknowledging her commitment to advocacy, inclusion, and community development.
              </p>
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
              Our visionary
            </div>
            <h2 className="mt-5 font-display text-4xl leading-[1.05] text-brand-ink md:text-5xl">
              Founder & Visionary behind Sunshine.
            </h2>
          </div>

          <div>
            {VISIONARIES.map((v) => (
              <div
                key={v.name}
                className="grid gap-10 rounded-3xl border border-border bg-background p-8 shadow-sm lg:grid-cols-[380px_1fr] lg:gap-14 lg:p-10"
              >
                <div>
                  <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl border border-border shadow-md">
                    <Image
                      src={v.image}
                      alt={v.name}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 380px, 100vw"
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-center">
                  <h3 className="font-display text-3xl font-bold text-brand-ink md:text-4xl">
                    {v.name}
                  </h3>
                  <div className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-red">
                    {v.role}
                  </div>

                  <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
                    {v.paragraphs.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/faculty"
              className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium text-brand-ink hover:border-border/40"
            >
              Meet our full team <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
