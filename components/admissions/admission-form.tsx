"use client"

import { useState } from "react"
import { Loader2, CheckCircle2, Send } from "lucide-react"
import { cn } from "@/lib/utils"

const PROGRAMMES = [
  "Early Intervention (3–8 yrs)",
  "Academic Programme (8–14 yrs)",
  "Pre-Vocational (14–19 yrs)",
  "Sheltered Workshop (18+ yrs)",
  "Not sure — please guide us",
]

const CONDITIONS = [
  "Autism Spectrum (ASD)",
  "ADHD / ADD",
  "Learning Disability",
  "Down Syndrome",
  "Cerebral Palsy",
  "Intellectual Delay",
  "Speech Delay",
  "Other",
]

export function AdmissionForm() {
  const [programme, setProgramme] = useState<string>(PROGRAMMES[0])
  const [conditions, setConditions] = useState<string[]>([])
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")

  const toggle = (c: string) =>
    setConditions((prev) =>
      prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]
    )

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("loading")
    await new Promise((r) => setTimeout(r, 1100))
    setStatus("success")
    ;(e.target as HTMLFormElement).reset()
    setConditions([])
    setTimeout(() => setStatus("idle"), 5000)
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-border bg-background p-6 md:p-8"
    >
      <div>
        <div className="text-xs font-medium uppercase tracking-[0.16em] text-brand-red">
          Step 01 · About the child
        </div>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <Field label="Child's Full Name" name="childName" required />
          <Field label="Date of Birth" name="dob" type="date" required />
          <div className="space-y-2">
            <label className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Gender <span className="text-brand-red">*</span>
            </label>
            <select
              name="gender"
              required
              className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-brand-ink outline-none focus:border-brand-red"
            >
              <option value="">Select</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <Field label="Current School (if any)" name="currentSchool" />
        </div>

        <div className="mt-6">
          <label className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Condition / diagnosis (select all that apply)
          </label>
          <div className="mt-2 flex flex-wrap gap-2">
            {CONDITIONS.map((c) => (
              <button
                type="button"
                key={c}
                onClick={() => toggle(c)}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors",
                  conditions.includes(c)
                    ? "border-brand-red bg-brand-red text-white"
                    : "border-border text-brand-ink hover:border-brand-red"
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-5">
          <label className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Which programme are you applying for?{" "}
            <span className="text-brand-red">*</span>
          </label>
          <div className="mt-2 grid gap-2 sm:grid-cols-2">
            {PROGRAMMES.map((p) => (
              <label
                key={p}
                className={cn(
                  "flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm transition-colors",
                  programme === p
                    ? "border-brand-red bg-brand-yellow-soft/60 text-brand-ink"
                    : "border-border text-muted-foreground hover:border-brand-red/40 hover:text-brand-ink"
                )}
              >
                <input
                  type="radio"
                  name="programme"
                  value={p}
                  checked={programme === p}
                  onChange={() => setProgramme(p)}
                  className="h-4 w-4 accent-[var(--brand-red)]"
                />
                {p}
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-border pt-8">
        <div className="text-xs font-medium uppercase tracking-[0.16em] text-brand-red">
          Step 02 · Parent / Guardian
        </div>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <Field label="Parent / Guardian Name" name="parentName" required />
          <Field label="Relation to Child" name="relation" required />
          <Field label="Phone" name="phone" type="tel" required />
          <Field label="Email" name="email" type="email" required />
          <div className="sm:col-span-2">
            <Field label="City / Area" name="city" />
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-border pt-8">
        <div className="text-xs font-medium uppercase tracking-[0.16em] text-brand-red">
          Step 03 · Anything else we should know?
        </div>
        <div className="mt-5">
          <textarea
            name="notes"
            rows={4}
            placeholder="Briefly share your child's strengths, challenges, therapy history or anything else that will help us."
            className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-brand-ink outline-none focus:border-brand-red"
          />
        </div>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
        <p className="max-w-md text-xs text-muted-foreground">
          By submitting, you consent to Sunshine School contacting you regarding
          this application. All information is kept strictly confidential.
        </p>
        <button
          type="submit"
          disabled={status !== "idle"}
          className="inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-medium text-white transition-all hover:bg-brand-red-dark hover:shadow-lg hover:shadow-brand-red/20 disabled:opacity-70"
        >
          {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
          {status === "success" && <CheckCircle2 className="h-4 w-4" />}
          {status === "idle" && <Send className="h-3.5 w-3.5" />}
          {status === "success" ? "Application Received" : "Submit Application"}
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
