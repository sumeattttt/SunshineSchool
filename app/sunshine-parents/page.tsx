import type { Metadata } from "next"
import Image from "next/image"
import { PageHeader } from "@/components/site/page-header"
import { Quote, Heart } from "lucide-react"
import { Testimonials } from "@/components/home/testimonials"

export const metadata: Metadata = {
  title: "Sunshine Parents & Testimonials | Sunshine School",
  description:
    "Heartfelt stories, testimonials, and experiences shared by parents of Sunshine School and Sheltered Workshop students.",
}

const PARENT_STORIES = [
  {
    id: "story-01",
    tag: "Sunshine Sheltered Workshop Parent",
    title:
      "“Every child deserves a place where they are accepted for who they are and encouraged to become all they can be.”",
    image: "/images/test01.jpeg",
    author: "Parents of Sheltered Workshop Trainee",
    paragraphs: [
      "As parents of a special child, every day brings new hopes, but also moments of uncertainties, anxiety, especially when our children experience meltdowns or struggle to express themselves.",
      "What makes Sunshine Sheltered Workshop truly special is that the teachers and staff never see these moments as a burden. They respond with endless patience, compassion, and understanding.",
      "Sunshine Sheltered Workshop equips our children with essential life-skills that help them become more independent and confident. Whether it is learning daily life skills, participating in competitions, going on picnics, enjoying treks, or taking part in cultural and social activities, every opportunity is thoughtfully planned to help them grow, explore, and experience the world.",
      "The smiles on our children's faces after reassure us that they are in the safest and most nurturing environment. As parents, the greatest comfort is knowing that you are giving them love, confidence and dignity.",
      "We will always remain deeply grateful for the difference you have made in our lives. It feels like family. 💗",
    ],
  },
  {
    id: "story-02",
    tag: "Indhira's Family",
    title:
      "“When Indhira joined Sunshine School, we never imagined how much she would grow.”",
    image: "/images/test02.jpeg",
    author: "Parents of Indhira",
    paragraphs: [
      "When Indhira joined Sunshine School, we never imagined how much she would grow. As parents of an autistic child, we had many worries. But Sunshine School helped us discover her potential in ways we never imagined.",
      "Today, she participates in sports, dance, culinary activities, and every school celebration, despite her sensory challenges.",
      "The teachers use different teaching methods with great patience and care, helping every child learn in their own way.",
      "We also appreciate the free workshops and the Parents Empowerment Program with certification, which gave us valuable knowledge and confidence to support our child.",
      "Thank you Sunshine School, for your love, dedication, and for making such a positive difference in Indhira's life. We will always be grateful.",
    ],
  },
  {
    id: "story-03",
    tag: "Shanaya's Family",
    title:
      "“Sunshine School for Differently Abled Children has been a true blessing for our family.”",
    image: "/images/test03.jpeg",
    author: "Aditi Saha (Mother of Shanaya Mukherjee)",
    paragraphs: [
      "Hello everyone,",
      "I am Aditi Saha, mother of Shanaya Mukherjee, a 13-year-old girl diagnosed with Microcephaly and Intellectual Disability. Sunshine School for Differently Abled Children has been a true blessing for our family.",
      "The love, patience, and dedication of the teachers, therapists, and staff have helped Shanaya grow in confidence, happiness, and independence.",
      "She looks forward to going to school every day, and every milestone she achieves fills us with pride and hope. We are deeply grateful for the safe, inclusive, and nurturing environment the school provides.",
      "Thank you for believing in our daughter and making such a positive difference in her life. Sunshine School will always hold a special place in our hearts.",
    ],
  },
]

export default function SunshineParentsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sunshine Parents"
        title="Voices from our Sunshine Family"
        description="Real experiences, personal journeys, and gratitude shared by the parents of our students and trainees."
        crumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Sunshine Parents" },
        ]}
      />

      <Testimonials />

      <section className="container-x py-16 md:py-24 space-y-16 md:space-y-24">
        {PARENT_STORIES.map((story, index) => (
          <article
            key={story.id}
            className={`grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16 items-start rounded-3xl border border-border bg-card p-6 md:p-10 shadow-sm ${
              index % 2 === 1 ? "lg:grid-cols-[1.4fr_1fr] lg:[&>div:first-child]:order-2" : ""
            }`}
          >
            <div>
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border bg-slate-100/80">
                <Image
                  src={story.image}
                  alt={story.author}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
              <div className="mt-5 rounded-2xl border border-border bg-background p-4">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-red">
                  <Heart className="h-3.5 w-3.5 fill-brand-red text-brand-red" />
                  {story.tag}
                </div>
                <div className="mt-1.5 font-display text-lg text-brand-ink">
                  {story.author}
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <Quote className="h-8 w-8 text-brand-yellow" strokeWidth={1.5} />
              <h2 className="font-display text-2xl md:text-3xl leading-snug text-brand-ink">
                {story.title}
              </h2>

              <div className="space-y-4 text-base md:text-lg leading-relaxed text-muted-foreground">
                {story.paragraphs.map((p, pIdx) => (
                  <p key={pIdx}>{p}</p>
                ))}
              </div>
            </div>
          </article>
        ))}
      </section>
    </>
  )
}
