"use client"

import { useState } from "react"
import { Loader2, CheckCircle2, Send, Sparkles, AlertCircle } from "lucide-react"

const SUBJECTS = [
  "General Enquiry",
  "Admissions Enquiry",
  "Volunteer Opportunities",
  "Donation / CSR",
  "Media & Press",
]

const GENDERS = ["Male", "Female", "Other"]

const DIAGNOSES = [
  "Autism Spectrum (ASD)",
  "ADHD / ADD",
  "Down Syndrome",
  "Cerebral Palsy",
  "Intellectual Delay",
  "Microcephaly",
  "Speech Delay",
  "Multiple Disabilities",
  "Other / Under Evaluation",
]

export function ContactForm() {
  const [subject, setSubject] = useState("General Enquiry")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const isAdmission = subject === "Admissions Enquiry"

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")

    const formEl = e.currentTarget
    const formData = new FormData(formEl)

    // Add Web3Forms access key
    formData.append("access_key", "9c2eb6d4-095a-4330-b0ef-35d2212abdb3")
    formData.append("from_name", "Sunshine School Website")

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      })

      const data = await response.json()

      if (data.success) {
        setStatus("success")
        formEl.reset()
        setSubject("General Enquiry")
        setTimeout(() => setStatus("idle"), 6000)
      } else {
        setStatus("error")
        setErrorMessage(data.message || "Failed to send message. Please try again.")
      }
    } catch (err) {
      console.error("Web3Forms error:", err)
      setStatus("error")
      setErrorMessage("Network error. Please check your connection and try again.")
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <input type="hidden" name="from_name" value="Sunshine School Website" />
      <input type="hidden" name="subject_line" value={`[Sunshine Contact] ${subject}`} />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your Full Name" name="name" required placeholder="e.g. Rahul Sharma" />
        <Field label="Email Address" name="email" type="email" required placeholder="name@example.com" />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Phone Number" name="phone" type="tel" required placeholder="+91 98765 43210" />
        <div className="space-y-2">
          <label className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            Subject <span className="text-brand-red">*</span>
          </label>
          <select
            name="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
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

      {/* Conditional Admission Inquiry Fields */}
      {isAdmission && (
        <div className="rounded-2xl border border-brand-yellow/50 bg-brand-yellow-soft/50 p-5 space-y-5 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex items-center gap-2 border-b border-brand-yellow/40 pb-3">
            <Sparkles className="h-4 w-4 text-brand-ink" />
            <h3 className="font-display text-base font-semibold text-brand-ink">
              Student & Family Admission Details
            </h3>
          </div>

          <div className="grid gap-5 sm:grid-cols-3">
            <Field label="Student's Age" name="student_age" placeholder="e.g. 8 years" required />
            <div className="space-y-2">
              <label className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                Student's Gender <span className="text-brand-red">*</span>
              </label>
              <select
                name="student_gender"
                required
                className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-brand-ink outline-none focus:border-brand-red"
              >
                <option value="">Select Gender</option>
                {GENDERS.map((g) => (
                  <option key={g} value={g}>
                    {g}
                  </option>
                ))}
              </select>
            </div>
            <Field label="Primary Language" name="primary_language" placeholder="e.g. Hindi, English, Marathi" required />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Father's Name" name="father_name" placeholder="Father's full name" required />
            <Field label="Mother's Name" name="mother_name" placeholder="Mother's full name" required />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Father's Occupation" name="father_occupation" placeholder="e.g. Business / Service" />
            <Field label="Father's Annual Income" name="father_income" placeholder="e.g. 5 Lakhs / year" />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Mother's Occupation" name="mother_occupation" placeholder="e.g. Homemaker / Teacher" />
            <Field label="Religion" name="religion" placeholder="e.g. Hindu, Muslim, Christian, Sikh, etc." />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Behavioral Issue / Diagnosis (e.g. Autism, ADHD, etc.) <span className="text-brand-red">*</span>
            </label>
            <select
              name="behavioral_issue"
              required
              className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm text-brand-ink outline-none focus:border-brand-red"
            >
              <option value="">Select Primary Condition / Diagnosis</option>
              {DIAGNOSES.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      <div className="space-y-2">
        <label className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Your Message <span className="text-brand-red">*</span>
        </label>
        <textarea
          name="message"
          rows={4}
          required
          placeholder="Tell us a little about your enquiry or child's needs..."
          className="w-full rounded-xl border border-border bg-background px-3.5 py-2.5 text-sm text-brand-ink outline-none transition-colors focus:border-brand-red"
        />
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
          <span>Thank you! Your message has been sent successfully. We will get in touch with you shortly.</span>
        </div>
      )}

      <div className="flex items-center justify-between gap-4 pt-2">
        <p className="text-xs text-muted-foreground">
          By submitting, you agree to be contacted by Sunshine School regarding
          your enquiry.
        </p>
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex items-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-medium text-white transition-all hover:bg-brand-red-dark hover:shadow-lg hover:shadow-brand-red/20 disabled:opacity-70"
        >
          {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
          {status === "success" && <CheckCircle2 className="h-4 w-4" />}
          {status === "idle" && <Send className="h-3.5 w-3.5" />}
          {status === "loading" ? "Sending..." : status === "success" ? "Message Sent" : "Send Message"}
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
