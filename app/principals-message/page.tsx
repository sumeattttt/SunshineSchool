import Image from "next/image"
import { PageHeader } from "@/components/site/page-header"
import { TypewriterMessage } from "@/components/principals-message/typewriter-message"

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
                src="/images/principal-20th-anniversary.jpg"
                alt="Mrs. Paramita Mazumder, Principal"
                fill
                sizes="(min-width: 1024px) 35vw, 100vw"
                className="object-cover object-[center_35%]"
              />
            </div>
            <div className="mt-6 rounded-2xl border border-border bg-card p-5">
              <div className="font-display text-xl font-bold text-brand-ink">
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

          <TypewriterMessage />
        </div>
      </section>
    </>
  )
}
