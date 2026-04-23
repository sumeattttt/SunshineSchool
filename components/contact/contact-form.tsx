"use client"

import { useState } from "react"
import { Loader2, CheckCircle2, Send } from "lucide-react"

const SUBJECTS = [
  "Admissions Enquiry",
  "Volunteer Opportunities",
  "Donation / CSR",
  "General Enquiry",
  "Media & Press",
]

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("loading")
    // Simulated submission — wire to a real endpoint when backend is added.
    await new Promise((r) => setTimeout(r, 900))
    setStatus("success")
    ;(e.target as HTMLFormElement).reset()
    setTimeout(() => setStatus("idle"), 4000)
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full Name" name="name" required />
        <Field label="Email Address" name="email" type="email" required />
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone Number" name="phone" type="tel" />
        <div className="space-y-2">
          <label className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Subject
          </label>
          <select
            name="subject"
            required
            className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-brand-ink outline-none transition-colors focus:border-brand-red"
          >
            {SUBJECTS.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="space-y-2">
        <label className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Your Message
        </label>
        <textarea
          name="message"
          rows={5}
          required
          placeholder="Tell us a little about your enquiry..."
          className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-brand-ink outline-none transition-colors focus:border-brand-red"
        />
      </div>

      <div className="flex items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          By submitting, you agree to be contacted by Sunshine School regarding
          your enquiry.
        </p>
        <button
          type="submit"
          disabled={status !== "idle"}
          className="inline-flex items-center gap-2 rounded-full bg-brand-red px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-brand-red-dark hover:shadow-lg hover:shadow-brand-red/20 disabled:opacity-70"
        >
          {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
          {status === "success" && <CheckCircle2 className="h-4 w-4" />}
          {status === "idle" && <Send className="h-3.5 w-3.5" />}
          {status === "success" ? "Message Sent" : "Send Message"}
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
