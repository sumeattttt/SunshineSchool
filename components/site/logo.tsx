import Link from "next/link"
import Image from "next/image"

export function Logo({
  className = "",
}: {
  className?: string
  mono?: boolean
}) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center rounded-2xl bg-white/90 px-3 py-1.5 shadow-sm ring-1 ring-border transition-all hover:bg-white hover:shadow-md hover:ring-brand-ink/20 ${className}`}
      aria-label="Sunshine School — Home"
    >
      <Image
        src="/images/logo.svg"
        alt="Sunshine School Logo"
        width={180}
        height={60}
        className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-[1.02]"
        priority
      />
    </Link>
  )
}
