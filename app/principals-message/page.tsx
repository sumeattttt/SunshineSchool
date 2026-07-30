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
        title="The school I always wished existed — for my son, and for yours."
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
                alt="Mrs. Paramita Mazumdar, Principal"
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
              &ldquo;Every individual has a world inside them. Our job is simply to
              help it come out — gently, patiently, and on their own terms.&rdquo;
            </p>

            <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              <p>
                At Sunshine School, we believe that every child is unique and has the ability to learn, grow, and shine when provided with the right opportunities and support. Our journey began with a vision to create a safe, caring, and enriching environment where differently-abled children could receive education, therapy, and life skills training tailored to their individual needs.
              </p>
              <p>
                We are committed to nurturing confidence, independence, and dignity in every child. Through the dedication of our educators, therapists, staff members, and the continuous partnership of parents, we strive to empower our students to become active and valued members of society.
              </p>
              <p>
                Every small achievement of our children inspires us to continue our mission of creating a more inclusive and compassionate world.
              </p>
              <p>Warm regards,</p>
              <p className="font-display text-2xl italic text-brand-ink">
                Mrs. Paramita Mazumder
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
