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
      className={`group inline-flex items-center shrink-0 transition-transform hover:scale-[1.03] ${className}`}
      aria-label="Sunshine School — Home"
    >
      <Image
        src="/images/logo.png"
        alt="Sunshine School Logo"
        width={360}
        height={120}
        className="h-14 sm:h-16 md:h-20 lg:h-24 w-auto object-contain py-1"
        priority
      />
    </Link>
  )
}
