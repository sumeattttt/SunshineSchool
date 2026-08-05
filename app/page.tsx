import { Hero } from "@/components/home/hero"
import { ConditionMarquee } from "@/components/home/condition-marquee"
import { QuickInfo } from "@/components/home/quick-info"
import { AboutPreview } from "@/components/home/about-preview"
import { Programs } from "@/components/home/programs"
import { UnderstandingAutism } from "@/components/home/understanding-autism"
import { Stats } from "@/components/home/stats"
import { EventsPreview } from "@/components/home/events-preview"
import { CtaSection } from "@/components/site/cta-section"

export default function HomePage() {
  return (
    <>
      <Hero />
      <ConditionMarquee />
      <QuickInfo />
      <AboutPreview />
      <Programs />
      <UnderstandingAutism />
      <Stats />
      <EventsPreview />
      <CtaSection />
    </>
  )
}
