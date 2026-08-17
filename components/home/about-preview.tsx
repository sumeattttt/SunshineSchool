import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Check } from "lucide-react"
import { FadeIn, ScaleIn, StaggerContainer, StaggerItem } from "@/components/ui/animate"

const PILLARS = [
  {
    title: "Sunshine School",
    subtitle: "For differently-abled children & youth · since 2006",
    body: "Started with just 6 students, today we have nurtured and empowered over 150+ students aged 4 to 18 and above.",
    href: "/about",
  },
  {
    title: "Sheltered Workshop",
    subtitle: "For differently-abled adults · since 2018",
    body: "A vocational space where 25+ trainees aged 18 and above build community living, work skills and independence with dignity.",
    href: "/facilities#workshop",
  },
]

export function AboutPreview() {
  return (
    <section className="bg-brand-cream">
      <div className="container-x py-20 md:py-28">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          <ScaleIn duration={0.6} className="relative">
            <div className="relative aspect-[16/9] overflow-hidden rounded-3xl border border-border bg-card shadow-lg">
              <Image
                src="/images/staff-group-stage.jpg"
                alt="Sunshine Education Society Team & Educators"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -right-4 bottom-6 hidden w-56 rounded-2xl border border-border bg-background p-5 shadow-xl shadow-black/5 md:block z-10 pointer-events-none">
              <div className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                Our Promise
              </div>
              <p className="mt-2 font-display text-xl leading-tight text-brand-ink">
                &ldquo;We see every student&apos;s potential — and help it grow.&rdquo;
              </p>
            </div>

            <div className="absolute -left-4 -top-4 hidden h-24 w-24 items-center justify-center rounded-full bg-brand-yellow text-center font-display text-brand-ink md:flex z-10 pointer-events-none shadow-md">
              <span className="leading-tight font-bold">
                150+
                <br />
                <span className="text-[10px] uppercase tracking-[0.2em] not-italic">
                  students
                </span>
              </span>
            </div>
          </ScaleIn>

          <div>
            <FadeIn delay={0.1}>
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-brand-red">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
                Get to know us
              </div>
              <h2 className="mt-5 font-display text-4xl leading-[1.02] text-brand-ink text-balance md:text-5xl lg:text-6xl">
                A non-profit organisation for differently-abled children & adults.
              </h2>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Sunshine Education Society is a non-profit
                organisation that aims at providing quality education and
                rehabilitation through two flagship initiatives.
              </p>
            </FadeIn>

            <StaggerContainer staggerDelay={0.12} delay={0.2} className="mt-10 space-y-5">
              {PILLARS.map((p) => (
                <StaggerItem key={p.title}>
                  <Link
                    href={p.href}
                    className="group flex items-start gap-4 rounded-2xl border border-border bg-background p-5 transition-all hover:-translate-y-0.5 hover:border-brand-ink/20 hover:shadow-md"
                  >
                    <div className="mt-1 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-yellow text-brand-ink">
                      <Check className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <h3 className="font-display text-xl text-brand-ink">
                          {p.title}
                        </h3>
                        <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-red" />
                      </div>
                      <div className="mt-0.5 text-[11px] uppercase tracking-[0.18em] text-brand-red/80">
                        {p.subtitle}
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                        {p.body}
                      </p>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeIn delay={0.4} className="mt-8 flex items-center gap-3">
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 rounded-full bg-brand-ink px-5 py-3 text-sm font-medium text-white hover:bg-brand-ink/90 hover:-translate-y-0.5 transition-all"
              >
                Read our full story <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/principals-message"
                className="text-sm font-medium text-brand-ink hover:text-brand-red transition-colors"
              >
                Principal&apos;s message →
              </Link>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  )
}
