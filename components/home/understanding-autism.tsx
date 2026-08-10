import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export function UnderstandingAutism() {
  return (
    <section className="bg-brand-cream">
      <div className="container-x py-20 md:py-28">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-brand-red">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              Awareness
            </div>
            <h2 className="mt-5 font-display text-4xl leading-[1.02] text-brand-ink text-balance md:text-5xl lg:text-[3.75rem]">
              Understanding <span className="italic">Autism.</span>
            </h2>

            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              Autism is a lifelong developmental disorder that affects
              communication, social skills and behaviour. Children with autism
              are often the most socially awkward and misunderstood — finding
              difficulty in something as simple as expressing themselves.
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
              Though there isn&apos;t a cure for autism, early detection and a
              consistent, structured program can go a long way in helping a
              child overcome his difficulties. With early, appropriate and
              consistent intervention,{" "}
              <span className="text-brand-ink">
                children with autism can make significant progress.
              </span>
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { k: "Early", v: "Detection" },
                { k: "Structured", v: "Programmes" },
                { k: "Consistent", v: "Intervention" },
              ].map((s) => (
                <div
                  key={s.k}
                  className="rounded-2xl border border-border bg-background p-5"
                >
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {s.k}
                  </div>
                  <div className="mt-1 font-display text-xl text-brand-ink">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="mt-10 inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium text-brand-ink hover:border-brand-ink/40"
            >
              Learn how we help <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border">
              <Image
                src="/images/Final Gallery Sorted Images/Home page/Understanding Autism.jpg"
                alt="A parent and child at Sunshine"
                fill
                sizes="(min-width: 1024px) 45vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="absolute right-4 top-4 rounded-2xl border border-border bg-background/95 p-4 backdrop-blur md:right-6 md:top-6">
              <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                Vision
              </div>
              <p className="mt-1 max-w-[14rem] font-display text-lg leading-tight text-brand-ink">
                All differently-abled children meet their{" "}
                <span className="italic">maximum potential.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
