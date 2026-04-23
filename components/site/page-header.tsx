import Link from "next/link"
import { ChevronRight } from "lucide-react"

type Crumb = { label: string; href?: string }

export function PageHeader({
  eyebrow,
  title,
  description,
  crumbs,
  align = "left",
}: {
  eyebrow?: string
  title: string
  description?: string
  crumbs?: Crumb[]
  align?: "left" | "center"
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-brand-cream">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 ring-grid opacity-[0.35]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-20 h-96 w-96 rounded-full bg-brand-yellow/40 blur-3xl"
      />
      <div className="container-x relative py-20 md:py-28">
        {crumbs && crumbs.length > 0 && (
          <nav
            aria-label="Breadcrumb"
            className={`mb-6 flex items-center gap-1 text-xs text-muted-foreground ${
              align === "center" ? "justify-center" : ""
            }`}
          >
            {crumbs.map((c, i) => (
              <span key={i} className="flex items-center gap-1">
                {c.href ? (
                  <Link href={c.href} className="hover:text-brand-red">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-brand-ink">{c.label}</span>
                )}
                {i < crumbs.length - 1 && (
                  <ChevronRight className="h-3 w-3 opacity-50" />
                )}
              </span>
            ))}
          </nav>
        )}

        <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
          {eyebrow && (
            <div
              className={`mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-background px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-brand-red`}
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
              {eyebrow}
            </div>
          )}
          <h1 className="font-display text-5xl leading-[1.02] text-brand-ink text-balance md:text-6xl lg:text-7xl">
            {title}
          </h1>
          {description && (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
