import type { Metadata } from "next"

import { ManagementDashboard } from "@/components/management/management-dashboard"

export const metadata: Metadata = {
  title: "Management App",
  description:
    "Sunshine School management dashboard for attendance, academics, timetables, student records, staff, communication and fees.",
}

export default function ManagementPage() {
  return <ManagementDashboard />
}
