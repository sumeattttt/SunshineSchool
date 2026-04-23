import Link from "next/link"

// Pre-computed sun ray coordinates to avoid hydration mismatches
// from floating-point differences between server and client
const SUN_RAYS = Array.from({ length: 12 }).map((_, i) => {
  const angle = (i * Math.PI * 2) / 12
  return {
    x1: +(20 + Math.cos(angle) * 11).toFixed(4),
    y1: +(20 + Math.sin(angle) * 11).toFixed(4),
    x2: +(20 + Math.cos(angle) * 17).toFixed(4),
    y2: +(20 + Math.sin(angle) * 17).toFixed(4),
  }
})

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
      className={`group inline-flex items-center gap-2.5 ${className}`}
      aria-label="Sunshine School — Home"
    >
      <span className="relative inline-flex h-9 w-9 items-center justify-center">
        <svg
          viewBox="0 0 40 40"
          className="h-9 w-9"
          fill="none"
          aria-hidden
        >
          <circle
            cx="20"
            cy="20"
            r="8"
            fill={mono ? "currentColor" : "var(--brand-yellow)"}
          />
          {SUN_RAYS.map((ray, i) => (
            <line
              key={i}
              x1={ray.x1}
              y1={ray.y1}
              x2={ray.x2}
              y2={ray.y2}
              stroke={mono ? "currentColor" : "var(--brand-red)"}
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          ))}
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-[19px] tracking-tight ${
            mono ? "text-current" : "text-brand-ink"
          }`}
        >
          Sunshine School
        </span>
        <span
          className={`mt-0.5 text-[10px] uppercase tracking-[0.18em] ${
            mono ? "text-current/70" : "text-muted-foreground"
          }`}
        >
          Since 2010 · Vashi
        </span>
      </span>
    </Link>
  )
}
