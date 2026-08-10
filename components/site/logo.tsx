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
      className={`group inline-flex items-center rounded-2xl bg-white/95 px-3 py-1.5 shadow-sm border border-black/10 transition-all hover:bg-white hover:shadow-md ${className}`}
      aria-label="Sunshine School — Home"
    >
      <Image
        src="/images/logo.png"
        alt="Sunshine School Logo"
        width={240}
        height={80}
        className="h-9 md:h-11 w-auto object-contain transition-transform group-hover:scale-[1.02]"
        priority
      />
    </Link>
  )
}
