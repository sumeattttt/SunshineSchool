import Image from "next/image"
import { PageHeader } from "@/components/site/page-header"
import { CtaSection } from "@/components/site/cta-section"
import { Quote } from "lucide-react"

export const metadata = {
  title: "Principal's Message",
  description:
    "A personal note from Mrs. Paramita Mazumdar, Principal and co-founder of Sunshine School.",
}

export default function PrincipalsMessagePage() {
  return (
    <>
      <PageHeader
        eyebrow="A note from our principal"
        title="The school I always wished existed — for my son, and for yours."
        description="A personal message from Mrs. Paramita Mazumdar, Principal & Co-founder of Sunshine School."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Principal's Message" },
        ]}
      />

      <section className="container-x py-20 md:py-28">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <div>
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border">
              <Image
                src="/images/principal.jpg"
                alt="Mrs. Paramita Mazumdar, Principal"
                fill
                sizes="(min-width: 1024px) 35vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="mt-6 rounded-2xl border border-border bg-card p-5">
              <div className="font-display text-xl text-brand-ink">
                Mrs. Paramita Mazumdar
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-brand-red">
                Principal & Co-founder
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                A qualified special educator and counsellor, and a mother — who
                built Sunshine so her son, and children like him, would have a
                school where they could grow up with dignity and love.
              </p>
            </div>
          </div>

          <article className="prose-lg max-w-none">
            <Quote
              className="h-10 w-10 text-brand-yellow"
              strokeWidth={1.5}
            />
            <p className="mt-6 font-display text-3xl leading-[1.2] text-brand-ink md:text-4xl">
              &ldquo;Every child has a world inside them. Our job is simply to
              help it come out — gently, patiently, and on their own terms.&rdquo;
            </p>

            <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                Dear parents, students and friends of Sunshine,
              </p>
              <p>
                When my son was diagnosed with autism, I quickly realised there
                were very few places in our city where he could be understood
                for exactly who he was. I spent years looking for a school that
                would meet him where he stood — not where a textbook said he
                should be. Sunshine School was born from that search.
              </p>
              <p>
                We started in 2010 with just six students and a stubborn belief
                that every child — regardless of diagnosis — deserves a place
                to be seen, heard and helped to grow. Today, more than 80
                students come through our doors each day, and we&apos;ve opened
                a Sheltered Workshop for young adults so our journey with them
                doesn&apos;t end at 17.
              </p>
              <p>
                Our work isn&apos;t magic. It&apos;s patience, structure and
                deep, deep love. We combine{" "}
                <span className="text-brand-ink">early intervention</span>,{" "}
                <span className="text-brand-ink">functional academics</span>,{" "}
                <span className="text-brand-ink">vocational training</span> and{" "}
                <span className="text-brand-ink">therapies</span> — all
                delivered in a small, family-style environment where every
                adult in the building knows every child&apos;s name.
              </p>
              <p>
                If you are a parent considering Sunshine for your child, I
                invite you to come visit us. Sit in our classrooms. Meet our
                teachers. Watch the quiet, everyday miracles that happen here.
                You&apos;ll see what I see — that <span className="text-brand-ink">there is no ceiling on what our children can achieve</span> when they are given the right support.
              </p>
              <p>With warmth,</p>
              <p className="font-display text-2xl italic text-brand-ink">
                Paramita Mazumdar
              </p>
            </div>
          </article>
        </div>
      </section>

      <CtaSection
        eyebrow="A personal invitation"
        title="Come spend a morning with us."
        description="Schedule a campus visit and experience our classrooms, therapy rooms and workshop firsthand."
        primary={{ label: "Book a visit", href: "/contact" }}
        secondary={{ label: "Read about admissions", href: "/admissions" }}
      />
    </>
  )
}
