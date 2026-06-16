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
        width={60}
        height={40}
        className="h-10 w-auto object-contain"
        priority
      />
    </Link>
  )
}

