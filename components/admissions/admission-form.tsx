"use client"

import { useState } from "react"
import { Loader2, CheckCircle2, Send, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const PROGRAMMES = [
  "Early Intervention (4–8 yrs)",
  "Academic Program (8–12 yrs)",
  "Pre-Vocational Training (13–17 yrs)",
  "Vocational Training (18+ yrs)",
  "Not sure — please guide us",
]

const CONDITIONS = [
  "Autism Spectrum (ASD)",
  "ADHD / ADD",
  "Learning Disability",
  "Down Syndrome",
  "Cerebral Palsy",
  "Intellectual Delay",
  "Microcephaly",
  "Speech Delay",
  "Other",
]

export function AdmissionForm() {
  const [programme, setProgramme] = useState<string>(PROGRAMMES[0])
  const [conditions, setConditions] = useState<string[]>([])
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const toggle = (c: string) =>
    setConditions((prev) =>
      prev.includes(c) ? prev.filter((x) => x !== c) : [...prev, c]
    )

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")

    const formEl = e.currentTarget
    const formData = new FormData(formEl)

    formData.append("access_key", "9c2eb6d4-095a-4330-b0ef-35d2212abdb3")
    formData.append("from_name", "Sunshine School Admissions")
    formData.append("subject_line", "[Sunshine Admission Application]")
    formData.append("selected_conditions", conditions.join(", ") || "None specified")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setStatus("success")
        formEl.reset()
        setConditions([])
        setTimeout(() => setStatus("idle"), 6000)
      } else {
        setStatus("error")
        setErrorMessage(data.message || "Failed to submit application. Please try again.")
      }
    } catch (err) {
      console.error("Web3Forms admission error:", err)
      setStatus("error")
      setErrorMessage("Network error. Please check your connection and try again.")
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl border border-border bg-background p-6 md:p-8 space-y-8"
    >
      <div>
        <div className="text-xs font-medium uppercase tracking-[0.16em] text-brand-red">
          Step 01 · About the student
        </div>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <Field label="Student's Full Name" name="child_name" required placeholder="Full name of student" />
          <Field label="Age / Date of Birth" name="student_age" required placeholder="e.g. 8 years (DD/MM/YYYY)" />
          <div className="space-y-2">
            <label className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Gender <span className="text-brand-red">*</span>
            </label>
            <select
              name="student_gender"
              required
              className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-brand-ink outline-none focus:border-brand-red"
            >
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
          <Field label="Primary Language" name="primary_language" placeholder="e.g. English, Hindi, Marathi" required />
          <div className="sm:col-span-2">
            <Field label="Current School (if any)" name="current_school" placeholder="School name & location" />
          </div>
        </div>

        <div className="mt-6">
          <label className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Condition / Behavioral Diagnosis (select all that apply)
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
                    ? "border-brand-red bg-brand-yellow-soft/60 text-brand-ink font-medium"
                    : "border-border text-muted-foreground hover:border-brand-red/40 hover:text-brand-ink"
                )}
              >
                <input
                  type="radio"
                  name="applied_programme"
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

      <div className="border-t border-border pt-8">
        <div className="text-xs font-medium uppercase tracking-[0.16em] text-brand-red">
          Step 02 · Family Details
        </div>
        <div className="mt-5 grid gap-5 sm:grid-cols-2">
          <Field label="Father's Name" name="father_name" required placeholder="Father's full name" />
          <Field label="Mother's Name" name="mother_name" required placeholder="Mother's full name" />
          <Field label="Father's Occupation" name="father_occupation" placeholder="e.g. Business / Service" />
          <Field label="Father's Annual Income" name="father_income" placeholder="e.g. 5 Lakhs / year" />
          <Field label="Mother's Occupation" name="mother_occupation" placeholder="e.g. Homemaker / Teacher" />
          <Field label="Religion" name="religion" placeholder="e.g. Hindu, Muslim, Christian, etc." />
          <Field label="Phone Number" name="phone" type="tel" required placeholder="+91 98765 43210" />
          <Field label="Email Address" name="email" type="email" required placeholder="name@example.com" />
          <div className="sm:col-span-2">
            <Field label="City / Residential Area" name="city" placeholder="e.g. Vashi, Navi Mumbai" />
          </div>
        </div>
      </div>

      <div className="border-t border-border pt-8">
        <div className="text-xs font-medium uppercase tracking-[0.16em] text-brand-red">
          Step 03 · Additional Notes
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

      {status === "error" && (
        <div className="flex items-center gap-2 rounded-xl bg-red-50 p-3 text-xs text-red-600 border border-red-200">
          <AlertCircle className="h-4 w-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {status === "success" && (
        <div className="flex items-center gap-2 rounded-xl bg-green-50 p-3 text-xs text-green-700 border border-green-200 font-medium">
          <CheckCircle2 className="h-4 w-4 shrink-0 text-green-600" />
          <span>Application Submitted Successfully! Our admissions team will reach out to you shortly.</span>
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-4 border-t border-border pt-6">
        <p className="max-w-md text-xs text-muted-foreground">
          By submitting, you consent to Sunshine School contacting you regarding
          this application. All information is kept strictly confidential.
        </p>
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-medium text-white transition-all hover:bg-brand-red-dark hover:shadow-lg hover:shadow-brand-red/20 disabled:opacity-70"
        >
          {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
          {status === "success" && <CheckCircle2 className="h-4 w-4" />}
          {status === "idle" && <Send className="h-3.5 w-3.5" />}
          {status === "loading" ? "Submitting..." : status === "success" ? "Application Received" : "Submit Application"}
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
  placeholder,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  placeholder?: string
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
        placeholder={placeholder}
        className="h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm text-brand-ink outline-none transition-colors focus:border-brand-red"
      />
    </div>
  )
}
