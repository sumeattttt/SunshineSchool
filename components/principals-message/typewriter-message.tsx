"use client"

import { useState, useEffect } from "react"
import { Quote } from "lucide-react"

const PARAGRAPHS = [
  "Twenty years ago, Sunshine was born from a simple yet powerful belief—that every child, regardless of ability, deserves the opportunity to learn, grow, and live with dignity. Today, as we proudly celebrate 20 years of Sunshine, my heart is filled with gratitude for every child, parent, teacher, volunteer, and well-wisher who has been part of this extraordinary journey.",
  "For me, Sunshine is much more than a special school for differentlyabled children; it is a family and a purpose that has shaped my life. Every smile, every small achievement, every challenge overcome by our children reminds me why Sunshine exists—to nurture abilities, build independence, and create an inclusive society where every individual is valued for who they are.",
  "Over the past two decades, we have touched countless lives through education, therapy, vocational training, and parent empowerment. Yet, our journey is far from over. We remain committed to empowering every learner with confidence, compassion, and the skills to lead a meaningful life.",
  "Thank you for believing in our vision and walking this journey with us. Together, let us continue to spread hope, celebrate abilities, and build a world where everyone truly belongs.",
]

export function TypewriterMessage() {
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isCompleted, setIsCompleted] = useState(false)

  useEffect(() => {
    if (isCompleted) return

    if (currentParagraphIndex < PARAGRAPHS.length) {
      const currentText = PARAGRAPHS[currentParagraphIndex]

      if (currentCharIndex < currentText.length) {
        const timer = setTimeout(() => {
          setCurrentCharIndex((prev) => prev + 1)
        }, 14) // Normal typewriter speed ~14ms per character

        return () => clearTimeout(timer)
      } else {
        const pauseTimer = setTimeout(() => {
          setCurrentParagraphIndex((prev) => prev + 1)
          setCurrentCharIndex(0)
        }, 250)

        return () => clearTimeout(pauseTimer)
      }
    } else {
      setIsCompleted(true)
    }
  }, [currentParagraphIndex, currentCharIndex, isCompleted])

  const handleSkip = () => {
    setCurrentParagraphIndex(PARAGRAPHS.length)
    setCurrentCharIndex(0)
    setIsCompleted(true)
  }

  return (
    <article className="prose-lg max-w-none">
      <div className="flex items-center justify-between">
        <Quote className="h-10 w-10 text-brand-yellow" strokeWidth={1.5} />
        {!isCompleted && (
          <button
            onClick={handleSkip}
            className="text-xs font-medium uppercase tracking-wider text-muted-foreground hover:text-brand-red transition-colors"
          >
            Show full message ➔
          </button>
        )}
      </div>

      <p className="mt-6 font-display text-3xl leading-[1.2] text-brand-ink md:text-4xl">
        &ldquo;Every child, regardless of ability, deserves the opportunity to learn, grow, and live with dignity.&rdquo;
      </p>

      <div className="mt-10 space-y-6 text-base leading-relaxed text-muted-foreground md:text-lg">
        {PARAGRAPHS.map((p, pIdx) => {
          if (pIdx < currentParagraphIndex) {
            return <p key={pIdx}>{p}</p>
          }

          if (pIdx === currentParagraphIndex && !isCompleted) {
            return (
              <p key={pIdx}>
                {p.slice(0, currentCharIndex)}
                <span className="inline-block w-2 h-5 ml-0.5 bg-brand-red align-middle animate-pulse" />
              </p>
            )
          }

          if (isCompleted && pIdx === PARAGRAPHS.length - 1) {
            return <p key={pIdx}>{p}</p>
          }

          return null
        })}

        {isCompleted && (
          <div className="pt-4">
            <p>Warm regards,</p>
            <p className="font-display text-2xl italic text-brand-ink mt-1">
              Mrs. Paramita Mazumder
            </p>
          </div>
        )}
      </div>
    </article>
  )
}
