import Image from "next/image"
import { PageHeader } from "@/components/site/page-header"
import { CtaSection } from "@/components/site/cta-section"
import { Quote } from "lucide-react"

export const metadata = {
  title: "Principal's Message",
  description:
    "A personal note from Mrs. Paramita Mazumder, Principal & Secretary, Sunshine Education Society.",
}

export default function PrincipalsMessagePage() {
  return (
    <>
      <PageHeader
        eyebrow="A note from our principal"
        title="Principal's Message"
        description="A personal message from Mrs. Paramita Mazumder, Principal & Secretary, Sunshine Education Society."
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
                alt="Mrs. Paramita Mazumder, Principal"
                fill
                sizes="(min-width: 1024px) 35vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="mt-6 rounded-2xl border border-border bg-card p-5">
              <div className="font-display text-xl text-brand-ink">
                Mrs. Paramita Mazumder
              </div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-brand-red">
                Principal & Secretary, Sunshine Education Society
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
              &ldquo;Every child, regardless of ability, deserves the opportunity to learn, grow, and live with dignity.&rdquo;
            </p>

            <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                Twenty years ago, Sunshine was born from a simple yet powerful belief—that every child, regardless of ability, deserves the opportunity to learn, grow, and live with dignity. Today, as we proudly celebrate 20 years of Sunshine, my heart is filled with gratitude for every child, parent, teacher, volunteer, and well-wisher who has been part of this extraordinary journey.
              </p>
              <p>
                For me, Sunshine is much more than a special school for differentlyabled children; it is a family and a purpose that has shaped my life. Every smile, every small achievement, every challenge overcome by our children reminds me why Sunshine exists—to nurture abilities, build independence, and create an inclusive society where every individual is valued for who they are.
              </p>
              <p>
                Over the past two decades, we have touched countless lives through education, therapy, vocational training, and parent empowerment. Yet, our journey is far from over. We remain committed to empowering every learner with confidence, compassion, and the skills to lead a meaningful life.
              </p>
              <p>
                Thank you for believing in our vision and walking this journey with us. Together, let us continue to spread hope, celebrate abilities, and build a world where everyone truly belongs.
              </p>
              <p className="pt-4">Warm regards,</p>
              <p className="font-display text-2xl italic text-brand-ink">
                Mrs. Paramita Mazumder
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}
