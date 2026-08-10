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
      className={`group inline-flex items-center transition-transform hover:scale-[1.03] ${className}`}
      aria-label="Sunshine School — Home"
    >
      <Image
        src="/images/logo.png"
        alt="Sunshine School Logo"
        width={240}
        height={80}
        className="h-12 md:h-14 w-auto object-contain"
        priority
      />
    </Link>
  )
}
