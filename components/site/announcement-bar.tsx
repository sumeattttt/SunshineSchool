import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

export function AnnouncementBar() {
  return (
    <div className="w-full bg-brand-ink text-white">
      <div className="container-x flex h-10 items-center justify-between gap-4 text-[13px]">
        <div className="flex items-center gap-2 truncate">
          <span
            aria-hidden
            className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FACC15] text-black font-bold"
          >
            <Sparkles className="h-3 w-3" />
          </span>
          <span className="truncate text-white/90">
            Admissions open for the 2026–27 academic year —
            <span className="hidden sm:inline">
              {" "}limited seats available for early intervention & academic programmes.
            </span>
          </span>
        </div>
        <Link
          href="/admissions"
          className="group hidden shrink-0 items-center gap-1.5 font-medium text-brand-yellow hover:text-white sm:inline-flex"
        >
          Apply now
          <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </div>
  )
}
