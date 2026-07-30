import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Star, Play } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 ring-grid opacity-[0.25]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-brand-yellow/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-20 right-0 h-80 w-80 rounded-full bg-brand-red/10 blur-3xl"
      />

      <div className="container-x relative pt-14 pb-20 md:pt-20 md:pb-28">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-brand-red backdrop-blur">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-red" />
              An Organisation for differently-abled children · Since 2006
            </div>

            <h1 className="mt-6 font-display text-[2.75rem] leading-[1.02] tracking-tight text-brand-ink text-balance sm:text-6xl lg:text-[5.25rem]">
              Where every individual <br className="hidden md:block" />
              <span className="italic">learns to be </span>
              <span className="underline-squiggle italic">shine.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Sunshine education society provides personalised, quality education, therapy and vocational training for children and young adults on the Autism Spectrum and with other developmental disabilities — in a warm, Nurturing atmosphere in Vashi, Navi Mumbai
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/admissions"
                className="inline-flex items-center gap-1.5 rounded-full bg-brand-red px-6 py-3.5 text-sm font-medium text-white transition-all hover:bg-brand-red-dark hover:shadow-lg hover:shadow-brand-red/25"
              >
                Apply for Admission
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-medium text-brand-ink transition-colors hover:border-brand-ink/40"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-brand-yellow text-brand-ink">
                  <Play className="h-3 w-3 fill-current" />
                </span>
                Our story
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-border pt-6">
              <div className="flex -space-x-2">
                {["/images/art-class.jpg", "/images/music.jpg", "/images/parents.jpg", "/images/reading.jpg"].map(
                  (src, i) => (
                    <div
                      key={i}
                      className="h-9 w-9 overflow-hidden rounded-full border-2 border-background"
                    >
                      <Image
                        src={src}
                        alt=""
                        width={40}
                        height={40}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ),
                )}
              </div>
              <div>
                <div className="flex items-center gap-0.5 text-brand-yellow">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">
                  <span className="font-medium text-brand-ink">200+ students</span>{" "}
                  nurtured across early intervention, academics & vocational programmes.
                </div>
              </div>
            </div>
          </div>

          {/* Visual cluster */}
          <div className="relative">
            <div className="relative grid grid-cols-6 grid-rows-6 gap-3 md:gap-4">
              <div className="relative col-span-4 row-span-4 overflow-hidden rounded-3xl border border-border bg-card shadow-xl shadow-black/5">
                <Image
                  src="/images/hero-students.jpg"
                  alt="Students learning together at Sunshine School"
                  fill
                  priority
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute bottom-3 left-3 rounded-full bg-background/90 px-3 py-1.5 text-[11px] font-medium text-brand-ink backdrop-blur">
                  Classroom · Vashi
                </div>
              </div>

              <div className="relative col-span-2 row-span-3 overflow-hidden rounded-3xl border border-border bg-card">
                <Image
                  src="/images/therapy.jpg"
                  alt="Occupational therapy at Sunshine"
                  fill
                  sizes="(min-width: 1024px) 18vw, 45vw"
                  className="object-cover"
                />
              </div>

              <div className="col-span-2 row-span-3 rounded-3xl border border-border bg-brand-yellow p-4 md:p-5">
                <div className="flex h-full flex-col justify-between">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-brand-ink/70">
                    Programmes
                  </div>
                  <div>
                    <div className="font-display text-3xl leading-none text-brand-ink md:text-4xl">
                      5
                    </div>
                    <div className="mt-1 text-xs text-brand-ink/75">
                      structured pathways from early intervention to vocational work
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative col-span-3 row-span-2 overflow-hidden rounded-3xl border border-border bg-card">
                <Image
                  src="/images/workshop.jpg"
                  alt="Sheltered workshop"
                  fill
                  sizes="(min-width: 1024px) 22vw, 60vw"
                  className="object-cover"
                />
              </div>

              <div className="col-span-3 row-span-2 rounded-3xl border border-border bg-brand-ink p-4 text-white md:p-5">
                <div className="text-[10px] uppercase tracking-[0.2em] text-brand-yellow">
                  Established
                </div>
                <div className="mt-2 font-display text-3xl leading-none md:text-4xl">
                  2006
                </div>
                <div className="mt-1 text-xs text-white/70">
                  20+ years of personalised care in Navi Mumbai
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
