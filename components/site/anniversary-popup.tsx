"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { X, Sparkles, Award, ArrowRight, Heart } from "lucide-react"

export function AnniversaryPopup() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Check if user has already dismissed the popup in this session
    const hasSeenPopup = sessionStorage.getItem("sunshine_20yr_popup_seen")
    if (!hasSeenPopup) {
      // Small delay for smooth entry after page load
      const timer = setTimeout(() => {
        setIsOpen(true)
      }, 700)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsOpen(false)
    sessionStorage.setItem("sunshine_20yr_popup_seen", "true")
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={handleClose}
            className="fixed inset-0 bg-brand-ink/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-brand-yellow/40 bg-brand-ink p-6 text-white shadow-2xl sm:p-8 md:p-10"
          >
            {/* Ambient Background Glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-brand-yellow/20 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-brand-red/20 blur-3xl" />

            {/* Close Button */}
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close modal"
              className="absolute right-3.5 top-3.5 z-30 flex h-11 w-11 touch-manipulation items-center justify-center rounded-full border border-white/20 bg-white/10 text-white/90 shadow-md transition-all hover:bg-white/25 hover:text-white active:scale-90 sm:right-6 sm:top-6"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Content Header */}
            <div className="relative">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/40 bg-brand-yellow/15 px-3.5 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-yellow">
                <Sparkles className="h-3.5 w-3.5 animate-pulse" />
                <span>2006 – 2026 Milestone</span>
              </div>

              {/* Huge 20 Years Graphic Badge */}
              <div className="mt-6 flex items-baseline gap-2">
                <span className="font-display text-6xl font-black text-brand-yellow sm:text-7xl">
                  20
                </span>
                <div className="flex flex-col">
                  <span className="font-display text-2xl font-bold uppercase tracking-wider text-white">
                    Years
                  </span>
                  <span className="text-xs uppercase tracking-[0.15em] text-brand-cream/70">
                    Of Creating Possibilities
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <h2 className="mt-4 font-display text-2xl font-bold leading-snug text-white sm:text-3xl">
                20 Years of Creating Possibilities — From Education to Independence
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-white/80 sm:text-base">
                Since 2006, Sunshine School & Sheltered Workshop has been nurturing, empowering, and transforming the lives of children and young adults with autism and other developmental disabilities.
              </p>

              {/* Quick Stat Pill */}
              <div className="mt-6 flex flex-wrap items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-yellow/20 text-brand-yellow">
                  <Award className="h-5 w-5" />
                </div>
                <div className="text-xs text-white/90">
                  <div className="font-semibold text-brand-yellow">200+ Students & Trainees Empowered</div>
                  <div className="text-white/70">Individualised Special Education & Vocational Training</div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href="/about"
                  onClick={handleClose}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-yellow px-6 py-3.5 text-center text-sm font-semibold text-brand-ink transition-transform hover:-translate-y-0.5 hover:bg-brand-yellow/90"
                >
                  <span>Explore Our Journey</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <button
                  onClick={handleClose}
                  className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/20 px-5 py-3.5 text-center text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Heart className="h-4 w-4 fill-brand-red text-brand-red" />
                  <span>Celebrate With Us</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
