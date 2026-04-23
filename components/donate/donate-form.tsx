"use client"

import { useState } from "react"
import { Loader2, CheckCircle2, Heart } from "lucide-react"
import { cn } from "@/lib/utils"

const PRESETS = [1000, 2500, 5000, 10000, 25000]
const FREQUENCIES = ["One-time", "Monthly"] as const

export function DonateForm() {
  const [amount, setAmount] = useState<number>(2500)
  const [custom, setCustom] = useState<string>("")
  const [frequency, setFrequency] =
    useState<(typeof FREQUENCIES)[number]>("One-time")
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle")

  const displayAmount = custom ? Number(custom) || 0 : amount

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus("loading")
    await new Promise((r) => setTimeout(r, 1000))
    setStatus("success")
    setTimeout(() => setStatus("idle"), 4500)
  }

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div>
        <label className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Choose amount (INR)
        </label>
        <div className="mt-2 flex flex-wrap gap-2">
          {PRESETS.map((p) => (
            <button
              type="button"
              key={p}
              onClick={() => {
                setAmount(p)
                setCustom("")
              }}
              className={cn(
                "rounded-xl border px-4 py-2.5 text-sm font-medium transition-colors",
                amount === p && !custom
                  ? "border-brand-red bg-brand-red text-white"
                  : "border-border text-brand-ink hover:border-brand-red"
              )}
            >
              ₹ {p.toLocaleString("en-IN")}
            </button>
          ))}
          <div className="flex h-11 flex-1 items-center overflow-hidden rounded-xl border border-border bg-background focus-within:border-brand-red">
            <span className="px-3 text-sm text-muted-foreground">₹</span>
            <input
              type="number"
              min={100}
              placeholder="Other amount"
              value={custom}
              onChange={(e) => setCustom(e.target.value)}
              className="h-full flex-1 bg-transparent pr-3 text-sm text-brand-ink outline-none"
            />
          </div>
        </div>
      </div>

      <div>
        <label className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          Frequency
        </label>
        <div className="mt-2 inline-flex rounded-xl border border-border p-1">
          {FREQUENCIES.map((f) => (
            <button
              type="button"
              key={f}
              onClick={() => setFrequency(f)}
              className={cn(
                "rounded-lg px-4 py-1.5 text-sm font-medium transition-colors",
                frequency === f
                  ? "bg-brand-ink text-brand-cream"
                  : "text-muted-foreground hover:text-brand-ink"
              )}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Full Name" name="name" required />
        <Field label="Email" name="email" type="email" required />
        <Field label="Phone" name="phone" type="tel" required />
        <Field label="PAN (for 80G)" name="pan" />
      </div>

      <div className="flex items-center justify-between gap-4 rounded-2xl border border-border bg-brand-yellow-soft/60 p-4">
        <div>
          <div className="text-xs uppercase tracking-[0.14em] text-muted-foreground">
            You will donate
          </div>
          <div className="font-serif text-3xl text-brand-ink">
            ₹ {displayAmount.toLocaleString("en-IN")}
            <span className="ml-2 text-sm font-sans text-muted-foreground">
              {frequency === "Monthly" ? "/ month" : "one time"}
            </span>
          </div>
        </div>
        <button
          type="submit"
          disabled={status !== "idle" || displayAmount < 100}
          className="inline-flex items-center gap-2 rounded-full bg-brand-red px-5 py-3 text-sm font-medium text-white transition-all hover:bg-brand-red-dark hover:shadow-lg hover:shadow-brand-red/20 disabled:opacity-60"
        >
          {status === "loading" && <Loader2 className="h-4 w-4 animate-spin" />}
          {status === "success" && <CheckCircle2 className="h-4 w-4" />}
          {status === "idle" && <Heart className="h-4 w-4" />}
          {status === "success" ? "Thank you!" : "Donate Now"}
        </button>
      </div>

      <p className="text-xs text-muted-foreground">
        You will be redirected to a secure payment gateway. Receipts are emailed
        within 7 working days. For corporate CSR or large donations, please{" "}
        <a href="/contact" className="text-brand-red hover:underline">
          contact us directly
        </a>
        .
      </p>
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
