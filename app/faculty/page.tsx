import type { Metadata } from "next"
import Image from "next/image"
import { PageHeader } from "@/components/site/page-header"
import { GraduationCap, Heart, Users } from "lucide-react"
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/ui/animate"

export const metadata: Metadata = {
  title: "Faculty & Staff | Sunshine School",
  description:
    "Meet the dedicated team of special educators, therapists, and support staff who make Sunshine School a place of growth and belonging.",
}

const LEADERSHIP = [
  {
    name: "Mrs. Paramita Mazumder",
    role: "Principal & Secretary, Sunshine Education Society",
    bio: "Leads Sunshine School with over two decades of experience in special education and inclusive learning.",
    image: "/images/Final Gallery Sorted Images/Faculty and staff/Screenshot_20260804_145255_Facebook.jpg.jpeg",
  },
  {
    name: "Ms. Sujata Yande",
    role: "Coordinator – Sunshine School, Sunshine Education Society",
    bio: "Coordinates academic operations, curriculum planning, and student development across all school programs.",
    image: "/images/Final Gallery Sorted Images/Faculty and staff/Sujata Yende.jpeg",
  },
  {
    name: "Ms. Manisha Sonar",
    role: "Coordinator – Sunshine Sheltered Workshop, Sunshine Education Society",
    bio: "Oversees vocational skill building, community living, and daily workshop activities for young adult trainees.",
    image: "/images/mansihasonar.jpg.jpeg",
  },
  {
    name: "Ms. Rashmi Rangekar",
    role: "Executive General Administration",
    bio: "Pediatric Occupational Therapist NDT & SI certified, certified Yoga therapist.",
    image: "/images/Final Gallery Sorted Images/Faculty and staff/Rashmi Rangekar.jpg",
  },
]

const DEPARTMENTS = [
  {
    icon: GraduationCap,
    title: "Special Educators",
    count: "12 educators",
    description:
      "Qualified in special education with expertise across autism, ADHD, learning disabilities, and Down syndrome.",
  },
  {
    icon: Heart,
    title: "Therapy Team",
    count: "5 therapists",
    description:
      "Speech, occupational, physio, and behavioural therapists working in coordinated, individualised plans.",
  },
  {
    icon: Users,
    title: "Support Staff",
    count: "10 members",
    description:
      "Caretakers, transport aides, and administrative staff ensuring safe and smooth daily operations.",
  },
]

export default function FacultyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our people"
        title="The hands and hearts behind Sunshine"
        description="A team of 30+ educators, therapists and caregivers united by one belief — every child deserves to be seen, heard, and celebrated."
      />

      <section className="container-x pb-16 md:pb-24">
        <FadeIn className="mb-10 flex items-end justify-between gap-4">
          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Leadership
            </div>
            <h2 className="mt-2 font-serif text-3xl text-brand-ink md:text-4xl">
              Meet our leadership team
            </h2>
          </div>
        </FadeIn>

        <StaggerContainer staggerDelay={0.12} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {LEADERSHIP.map((person) => (
            <StaggerItem key={person.name}>
              <article
                className="group overflow-hidden rounded-3xl border border-border bg-card h-full flex flex-col justify-between"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-brand-yellow-soft">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-xs font-medium uppercase tracking-[0.14em] text-brand-red">
                      {person.role}
                    </div>
                    <h3 className="mt-1.5 font-serif text-2xl font-bold text-brand-ink">
                      {person.name}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {person.bio}
                    </p>
                  </div>
                </div>
              </article>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </section>

      <section className="border-t border-border bg-brand-cream/40 py-16 md:py-24">
        <div className="container-x">
          <FadeIn className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Our team
            </div>
            <h2 className="mt-2 font-serif text-3xl text-brand-ink md:text-4xl">
              A dedicated multi-disciplinary team
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our educators and therapists work together to create individualised
              education plans for every student. Continuous training ensures we
              stay current with the best practices in special education.
            </p>
          </FadeIn>

          <StaggerContainer staggerDelay={0.1} className="mt-10 grid gap-4 sm:grid-cols-3">
            {DEPARTMENTS.map((dept) => {
              const Icon = dept.icon
              return (
                <StaggerItem key={dept.title}>
                  <div
                    className="flex flex-col rounded-2xl border border-border bg-card p-6 h-full"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-yellow text-brand-ink">
                      <Icon className="h-5 w-5 stroke-[2.5]" />
                    </div>
                    <h3 className="mt-4 font-serif text-xl text-brand-ink">
                      {dept.title}
                    </h3>
                    <div className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-brand-red">
                      {dept.count}
                    </div>
                    <p className="mt-3 flex-1 text-sm text-muted-foreground leading-relaxed">
                      {dept.description}
                    </p>
                  </div>
                </StaggerItem>
              )
            })}
          </StaggerContainer>
        </div>
      </section>
    </>
  )
}
