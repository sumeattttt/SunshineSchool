import Link from "next/link"
import Image from "next/image"

export function Logo({
  className = "",
  mono = false,
}: {
  className?: string
  mono?: boolean
}) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center ${className}`}
      aria-label="Sunshine School — Home"
    >
      <Image
        src="/images/logo.png"
        alt="Sunshine School Logo"
        width={140}
        height={60}
        className="h-12 md:h-14 w-auto object-contain transition-transform group-hover:scale-105"
        priority
      />
    </Link>
  )
}

