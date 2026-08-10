import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, Star, Play } from "lucide-react"
import { FadeIn, ScaleIn } from "@/components/ui/animate"

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
            <FadeIn delay={0.05} direction="up">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-brand-red backdrop-blur">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-red" />
                An Organisation for differently-abled children · Since 2006
              </div>
            </FadeIn>

            <FadeIn delay={0.15} direction="up">
              <h1 className="mt-6 font-display text-[2.75rem] leading-[1.02] tracking-tight text-brand-ink text-balance sm:text-6xl lg:text-[5.25rem]">
                Where every individual <br className="hidden md:block" />
                <span className="underline-squiggle italic">learns to shine.</span>
              </h1>
            </FadeIn>

            <FadeIn delay={0.25} direction="up">
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                Sunshine education society provides personalised, quality education, therapy and vocational training for children and young adults on the Autism Spectrum and with other developmental disabilities — in a warm, Nurturing atmosphere in Vashi, Navi Mumbai
              </p>
            </FadeIn>

            <FadeIn delay={0.35} direction="up">
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <Link
                  href="/admissions"
                  className="inline-flex items-center gap-1.5 rounded-full bg-brand-red px-6 py-3.5 text-sm font-medium text-white transition-all hover:bg-brand-red-dark hover:shadow-lg hover:shadow-brand-red/25 hover:-translate-y-0.5 active:translate-y-0"
                >
                  Apply for Admission
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-medium text-brand-ink transition-all hover:border-brand-ink/40 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#2563EB] text-white">
                    <Play className="h-3 w-3 fill-white text-white ml-0.5" />
                  </span>
                  Our story
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.45} direction="up">
              <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-border pt-6">
                <div className="flex -space-x-2">
                  {[
                    "/images/Final Gallery Sorted Images/Home page/Early Intervention Program.jpeg",
                    "/images/Final Gallery Sorted Images/Home page/Academic Program.jpg",
                    "/images/Final Gallery Sorted Images/Home page/Pre-Vocational Training Program.jpeg",
                    "/images/Final Gallery Sorted Images/Home page/Extracurricular.jpeg",
                  ].map((src, i) => (
                    <div
                      key={i}
                      className="h-9 w-9 overflow-hidden rounded-full border-2 border-background shadow-sm"
                    >
                      <Image
                        src={src}
                        alt=""
                        width={40}
                        height={40}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-0.5 text-brand-yellow">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                  <div className="mt-1 text-sm text-muted-foreground">
                    <span className="font-medium text-brand-ink">150+ students</span>{" "}
                    nurtured across early intervention, academics & vocational programmes.
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* YouTube Video Section */}
          <ScaleIn delay={0.2} duration={0.6}>
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-border bg-black shadow-2xl md:aspect-[4/3]">
              <iframe
                src="https://www.youtube.com/embed/QGGO0D6gyhE"
                title="Sunshine Education Society Video"
                className="h-full w-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </ScaleIn>
        </div>
      </div>
    </section>
  )
}
