"use client"

import { useState } from "react"
import { Loader2, CheckCircle2, Send } from "lucide-react"
import { cn } from "@/lib/utils"

const INTERESTS = [
  "Classroom Assistant",
  "Art & Craft Mentor",
  "Therapy Volunteer",
  "Workshop Mentor",
  "Events & Outreach",
  "Pro Bono Skills",
]

const AVAILABILITY = ["Weekdays", "Weekends", "Flexible"] as const

export function VolunteerForm() {
  const [interests, setInterests] = useState<string[]>([])
  const [availability, setAvailability] =
    useState<(typeof AVAILABILITY)[number]>("Flexible")
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")

  const toggle = (i: string) =>
    setInterests((prev) =>
      prev.includes(i) ? prev.filter((x) => x !== i) : [...prev, i]
    )

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("loading")
    await new Promise((r) => setTimeout(r, 900))
    setStatus("success")
    ;(e.target as HTMLFormElement).reset()
    setInterests([])
    setTimeout(() => setStatus("idle"), 4500)
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" required />
        <Field label="Profession / Background" name="profession" />
      </div>

      <div>
        <label className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Areas of interest (select all that apply)
        </label>
        <div className="mt-2 flex flex-wrap gap-2">
          {INTERESTS.map((i) => (
            <button
              type="button"
              key={i}
              onClick={() => toggle(i)}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors",
                interests.includes(i)
                  ? "border-brand-red bg-brand-red text-white"
                  : "border-border text-brand-ink hover:border-brand-red"
              )}
            >
              {i}
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Availability
        </label>
        <div className="mt-2 inline-flex rounded-xl border border-border p-1">
          {AVAILABILITY.map((a) => (
            <button
              type="button"
              key={a}
              onClick={() => setAvailability(a)}
              className={cn(
                "rounded-lg px-4 py-1.5 text-sm font-medium transition-colors",
                availability === a
                  ? "bg-brand-ink text-brand-cream"
                  : "text-muted-foreground hover:text-brand-ink"
              )}
            >
              {a}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Tell us why you want to volunteer
        </label>
        <textarea
          name="note"
          rows={4}
          className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-brand-ink outline-none transition-colors focus:border-brand-red"
        />
      </div>

      <div className="flex items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          Minimum commitment is one term (3 months). We'll schedule a short chat
          before onboarding.
        </p>
        <button
          type="submit"
          disabled={status !== "idle"}
          className="inline-flex items-center gap-2 rounded-full bg-brand-red px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-brand-red-dark hover:shadow-lg hover:shadow-brand-red/20 disabled:opacity-70"
        >
          {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
          {status === "success" && <CheckCircle2 className="h-4 w-4" />}
          {status === "idle" && <Send className="h-3.5 w-3.5" />}
          {status === "success" ? "Application Sent" : "Submit Application"}
        </button>
      </div>
    </form>
  )
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
}) {
  return (
    <div className="space-y-2">
      <label className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
        {label}
        {required && <span className="ml-0.5 text-brand-red">*</span>}
      </label>
      <input
        type={type}
        name={name}
        required={required}
        className="h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm text-brand-ink outline-none transition-colors focus:border-brand-red"
      />
    </div>
  )
}
