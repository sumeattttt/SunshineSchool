"use client"

import Image from "next/image"
import { type ReactNode, useMemo, useState } from "react"
import type { LucideIcon } from "lucide-react"
import {
  BadgeCheck,
  BarChart3,
  Bell,
  BookOpen,
  CalendarDays,
  CalendarPlus,
  CheckCircle2,
  CircleAlert,
  ClipboardCheck,
  ClipboardList,
  Clock,
  Download,
  FileText,
  FileUp,
  GraduationCap,
  IndianRupee,
  Mail,
  Megaphone,
  MessageCircle,
  Pencil,
  ReceiptText,
  School,
  Send,
  ShieldCheck,
  Star,
  Trophy,
  Upload,
  UserCheck,
  UserPlus,
  Users,
  WalletCards,
  XCircle,
} from "lucide-react"

import { cn } from "@/lib/utils"

type ModuleId =
  | "attendance"
  | "academics"
  | "timetable"
  | "students"
  | "teachers"
  | "communication"
  | "fees"

type AttendanceStatus = "Present" | "Absent" | "Late" | "Half-day"
type FeeStatus = "Paid" | "Pending" | "Overdue"

type Student = {
  id: string
  name: string
  className: string
  section: string
  dob: string
  disability: string
  admissionDate: string
  parent: string
  phone: string
  attendancePercent: number
  photo: string
  feeStatus: FeeStatus
  monthlyFee: number
  therapyFee: number
  marks: Record<string, number>
  iep: string
}

type Teacher = {
  id: string
  name: string
  subjects: string[]
  classes: string[]
  workload: number
  leaveBalance: number
  note: string
}

const moduleItems: { id: ModuleId; label: string; role: string; icon: LucideIcon }[] = [
  { id: "attendance", label: "Attendance", role: "Teacher desk", icon: ClipboardCheck },
  { id: "academics", label: "Marks", role: "Academic records", icon: BookOpen },
  { id: "timetable", label: "Timetable", role: "Scheduling", icon: CalendarDays },
  { id: "students", label: "Students", role: "Profiles and IEP", icon: Users },
  { id: "teachers", label: "Teachers", role: "Staff admin", icon: UserCheck },
  { id: "communication", label: "Notices", role: "Parent connect", icon: Megaphone },
  { id: "fees", label: "Fees", role: "Accounts", icon: WalletCards },
]

const classOptions = [
  "Early Intervention A",
  "Functional Academics A",
  "Functional Academics B",
  "Pre-Vocational A",
  "Vocational Training",
]

const subjects = ["English", "Math", "Life Skills", "Art", "Therapy"]
const terms = ["Term 1", "Term 2", "Annual"]
const attendanceOptions: AttendanceStatus[] = ["Present", "Absent", "Late", "Half-day"]

const students: Student[] = [
  {
    id: "SS-102",
    name: "Aarav Mehta",
    className: "Functional Academics A",
    section: "A",
    dob: "12 Aug 2015",
    disability: "Autism Spectrum Disorder",
    admissionDate: "09 Jun 2020",
    parent: "Riya Mehta",
    phone: "+91 98765 41021",
    attendancePercent: 94,
    photo: "/placeholder-user.jpg",
    feeStatus: "Paid",
    monthlyFee: 8500,
    therapyFee: 3200,
    marks: { English: 86, Math: 78, "Life Skills": 91, Art: 88, Therapy: 92 },
    iep: "Visual schedule, sensory breaks, two-step instruction targets.",
  },
  {
    id: "SS-117",
    name: "Mira Shah",
    className: "Functional Academics A",
    section: "A",
    dob: "04 Jan 2014",
    disability: "Learning Disability",
    admissionDate: "15 Jun 2021",
    parent: "Kunal Shah",
    phone: "+91 98200 11845",
    attendancePercent: 88,
    photo: "/placeholder-user.jpg",
    feeStatus: "Pending",
    monthlyFee: 8500,
    therapyFee: 2400,
    marks: { English: 91, Math: 84, "Life Skills": 87, Art: 95, Therapy: 89 },
    iep: "Reading fluency, number confidence, peer activity participation.",
  },
  {
    id: "SS-129",
    name: "Kabir Rao",
    className: "Functional Academics A",
    section: "A",
    dob: "26 Mar 2016",
    disability: "ADHD",
    admissionDate: "10 Jun 2022",
    parent: "Neha Rao",
    phone: "+91 99876 55710",
    attendancePercent: 81,
    photo: "/placeholder-user.jpg",
    feeStatus: "Overdue",
    monthlyFee: 8500,
    therapyFee: 2800,
    marks: { English: 74, Math: 69, "Life Skills": 80, Art: 82, Therapy: 76 },
    iep: "Movement breaks, task timer, social turn-taking practice.",
  },
  {
    id: "SS-141",
    name: "Sara Fernandes",
    className: "Early Intervention A",
    section: "A",
    dob: "19 Nov 2019",
    disability: "Global Developmental Delay",
    admissionDate: "12 Jun 2024",
    parent: "Anita Fernandes",
    phone: "+91 98190 66543",
    attendancePercent: 91,
    photo: "/placeholder-user.jpg",
    feeStatus: "Paid",
    monthlyFee: 7800,
    therapyFee: 3600,
    marks: { English: 82, Math: 72, "Life Skills": 89, Art: 93, Therapy: 88 },
    iep: "Fine motor grip, expressive vocabulary, classroom transition.",
  },
  {
    id: "SS-153",
    name: "Vivaan Nair",
    className: "Pre-Vocational A",
    section: "A",
    dob: "08 May 2011",
    disability: "Intellectual Disability",
    admissionDate: "07 Jun 2019",
    parent: "Pooja Nair",
    phone: "+91 98672 11890",
    attendancePercent: 96,
    photo: "/placeholder-user.jpg",
    feeStatus: "Paid",
    monthlyFee: 9200,
    therapyFee: 2200,
    marks: { English: 79, Math: 81, "Life Skills": 93, Art: 85, Therapy: 90 },
    iep: "Money handling, travel readiness, bakery station routines.",
  },
  {
    id: "SS-166",
    name: "Ishaan Das",
    className: "Functional Academics B",
    section: "B",
    dob: "30 Sep 2013",
    disability: "Cerebral Palsy",
    admissionDate: "18 Jun 2020",
    parent: "Arun Das",
    phone: "+91 97690 22118",
    attendancePercent: 86,
    photo: "/placeholder-user.jpg",
    feeStatus: "Pending",
    monthlyFee: 8500,
    therapyFee: 4200,
    marks: { English: 83, Math: 77, "Life Skills": 84, Art: 80, Therapy: 94 },
    iep: "Assistive writing support, posture check-ins, speech practice.",
  },
]

const teachers: Teacher[] = [
  {
    id: "T-01",
    name: "Mrs. Madhu",
    subjects: ["English", "Life Skills"],
    classes: ["Functional Academics A", "Functional Academics B"],
    workload: 24,
    leaveBalance: 8,
    note: "Strong parent communication and IEP follow-through.",
  },
  {
    id: "T-02",
    name: "Ms. Suchitra",
    subjects: ["Art", "Pre-Vocational"],
    classes: ["Pre-Vocational A", "Vocational Training"],
    workload: 22,
    leaveBalance: 6,
    note: "Excellent activity planning for community living skills.",
  },
  {
    id: "T-03",
    name: "Mr. Nikhil",
    subjects: ["Math", "Functional Academics"],
    classes: ["Functional Academics A"],
    workload: 20,
    leaveBalance: 10,
    note: "Good use of visual aids for number concepts.",
  },
  {
    id: "T-04",
    name: "Dr. Kavita",
    subjects: ["Therapy", "OT"],
    classes: ["Early Intervention A", "Functional Academics B"],
    workload: 26,
    leaveBalance: 4,
    note: "High therapy caseload; monitor weekly workload.",
  },
]

const holidays = [
  { date: "20 Jun", title: "Parent support group", type: "Event" },
  { date: "17 Jul", title: "Muharram", type: "Holiday" },
  { date: "15 Aug", title: "Independence Day", type: "Holiday" },
  { date: "22 Aug", title: "Therapy review day", type: "Leave calendar" },
]

const timetable = [
  {
    day: "Mon",
    slots: [
      ["English", "Mrs. Madhu", "Room A1"],
      ["Therapy", "Dr. Kavita", "OT Room"],
      ["Life Skills", "Mrs. Madhu", "Room A1"],
      ["Art", "Ms. Suchitra", "Studio"],
    ],
  },
  {
    day: "Tue",
    slots: [
      ["Math", "Mr. Nikhil", "Room A1"],
      ["Speech", "Dr. Kavita", "Therapy"],
      ["Reading", "Mrs. Madhu", "Library"],
      ["Sports", "Coach Ramesh", "Hall"],
    ],
  },
  {
    day: "Wed",
    slots: [
      ["Life Skills", "Mrs. Madhu", "Room A1"],
      ["Math", "Mr. Nikhil", "Room A1"],
      ["Music", "Ms. Suchitra", "Hall"],
      ["IEP Review", "Class Team", "Room A1"],
    ],
  },
  {
    day: "Thu",
    slots: [
      ["English", "Mrs. Madhu", "Room A1"],
      ["Therapy", "Dr. Kavita", "OT Room"],
      ["Art", "Ms. Suchitra", "Studio"],
      ["Yoga", "Coach Ramesh", "Hall"],
    ],
  },
  {
    day: "Fri",
    slots: [
      ["Math", "Mr. Nikhil", "Room A1"],
      ["Life Skills", "Mrs. Madhu", "Kitchen"],
      ["Computer", "Mr. Nikhil", "Lab"],
      ["Community Living", "Ms. Suchitra", "Workshop"],
    ],
  },
]

const leaveRequests = [
  { teacher: "Dr. Kavita", dates: "24-25 Jun", reason: "Medical appointment", status: "Pending" },
  { teacher: "Mr. Nikhil", dates: "01 Jul", reason: "Family function", status: "Pending" },
  { teacher: "Mrs. Madhu", dates: "08 Jul", reason: "Training workshop", status: "Approved" },
]

const examSchedule = [
  { date: "05 Aug", subject: "English", className: "Functional Academics A", time: "10:00 AM" },
  { date: "07 Aug", subject: "Math", className: "Functional Academics A", time: "10:00 AM" },
  { date: "09 Aug", subject: "Life Skills", className: "Pre-Vocational A", time: "11:30 AM" },
]

const marksHistory = [
  { year: "2024-25", term: "Term 1", average: 78, grade: "B+", attendance: 89 },
  { year: "2024-25", term: "Annual", average: 84, grade: "A", attendance: 92 },
  { year: "2025-26", term: "Term 1", average: 86, grade: "A", attendance: 93 },
  { year: "2025-26", term: "Annual", average: 89, grade: "A", attendance: 94 },
]

const admissionQueue = [
  { name: "Rhea Patel", className: "Early Intervention A", status: "Assessment booked" },
  { name: "Arjun Pillai", className: "Functional Academics B", status: "Documents pending" },
  { name: "Zoya Khan", className: "Pre-Vocational A", status: "Ready for admission" },
]

const notices = [
  { title: "Parent support group", target: "Parents", date: "20 Jun" },
  { title: "Therapy review meetings", target: "Teachers", date: "24 Jun" },
  { title: "Monsoon transport update", target: "All", date: "28 Jun" },
]

const homeworkRows = [
  { className: "Functional Academics A", subject: "Math", task: "Number matching worksheet", due: "18 Jun" },
  { className: "Pre-Vocational A", subject: "Life Skills", task: "Kitchen safety picture cards", due: "19 Jun" },
  { className: "Early Intervention A", subject: "Therapy", task: "Fine motor bead activity", due: "20 Jun" },
]

const feeMonths = ["April", "May", "June"]

const attendanceStatusClasses: Record<AttendanceStatus, string> = {
  Present: "border-emerald-200 bg-emerald-50 text-emerald-700",
  Absent: "border-red-200 bg-red-50 text-red-700",
  Late: "border-amber-200 bg-amber-50 text-amber-700",
  "Half-day": "border-sky-200 bg-sky-50 text-sky-700",
}

const feeStatusClasses: Record<FeeStatus, string> = {
  Paid: "border-emerald-200 bg-emerald-50 text-emerald-700",
  Pending: "border-amber-200 bg-amber-50 text-amber-700",
  Overdue: "border-red-200 bg-red-50 text-red-700",
}

function getAverage(values: number[]) {
  if (!values.length) return 0
  return Math.round(values.reduce((sum, value) => sum + value, 0) / values.length)
}

function gradeFor(mark: number) {
  if (mark >= 90) return "A+"
  if (mark >= 80) return "A"
  if (mark >= 70) return "B+"
  if (mark >= 60) return "B"
  if (mark >= 50) return "C"
  return "Needs support"
}

function formatMoney(amount: number) {
  return `Rs. ${amount.toLocaleString("en-IN")}`
}

function escapePdfText(value: string) {
  return value
    .replace(/[\\()]/g, "\\$&")
    .replace(/[^\x20-\x7E]/g, "-")
}

function downloadPdf(fileName: string, title: string, lines: string[]) {
  const yStart = 792
  const stream = [
    `BT /F1 18 Tf 48 ${yStart} Td (${escapePdfText(title)}) Tj ET`,
    ...lines.slice(0, 42).map((line, index) => {
      const y = yStart - 34 - index * 16
      return `BT /F1 10 Tf 48 ${y} Td (${escapePdfText(line)}) Tj ET`
    }),
  ].join("\n")

  const objects = [
    "<< /Type /Catalog /Pages 2 0 R >>",
    "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
    "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 842] /Resources << /Font << /F1 5 0 R >> >> /Contents 4 0 R >>",
    `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`,
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
  ]

  let pdf = "%PDF-1.4\n"
  const offsets: number[] = [0]

  objects.forEach((object, index) => {
    offsets[index + 1] = pdf.length
    pdf += `${index + 1} 0 obj\n${object}\nendobj\n`
  })

  const xrefOffset = pdf.length
  pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`
  offsets.slice(1).forEach((offset) => {
    pdf += `${String(offset).padStart(10, "0")} 00000 n \n`
  })
  pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF`

  const blob = new Blob([pdf], { type: "application/pdf" })
  const url = URL.createObjectURL(blob)
  const link = document.createElement("a")
  link.href = url
  link.download = fileName
  link.click()
  URL.revokeObjectURL(url)
}

export function ManagementDashboard() {
  const [activeModule, setActiveModule] = useState<ModuleId>("attendance")
  const [selectedClass, setSelectedClass] = useState(classOptions[1])
  const [selectedStudent, setSelectedStudent] = useState(students[0].id)
  const [selectedTerm, setSelectedTerm] = useState(terms[0])
  const [timetableMode, setTimetableMode] = useState<"class" | "teacher">("class")
  const [noticeTarget, setNoticeTarget] = useState("Parents")
  const [noticeDraft, setNoticeDraft] = useState("Therapy review meetings start next week.")
  const [homeworkDraft, setHomeworkDraft] = useState("Read the picture story and complete page 4.")
  const [messageDraft, setMessageDraft] = useState("Aarav had a calm therapy session today.")
  const [examPublished, setExamPublished] = useState(false)
  const [activityLog, setActivityLog] = useState([
    "10:25 AM - June fee reminders queued for 2 families.",
    "09:50 AM - Functional Academics A attendance saved.",
    "09:20 AM - Parent circular published to all roles.",
  ])
  const [attendanceMap, setAttendanceMap] = useState<Record<string, AttendanceStatus>>({
    "SS-102": "Present",
    "SS-117": "Late",
    "SS-129": "Absent",
    "SS-141": "Present",
    "SS-153": "Present",
    "SS-166": "Half-day",
  })
  const [studentMarks, setStudentMarks] = useState<Record<string, Record<string, number>>>(() =>
    Object.fromEntries(students.map((student) => [student.id, student.marks])),
  )
  const [iepNotes, setIepNotes] = useState<Record<string, string>>(() =>
    Object.fromEntries(students.map((student) => [student.id, student.iep])),
  )
  const [teacherNotes, setTeacherNotes] = useState<Record<string, string>>(() =>
    Object.fromEntries(teachers.map((teacher) => [teacher.id, teacher.note])),
  )

  const classStudents = useMemo(
    () => students.filter((student) => student.className === selectedClass),
    [selectedClass],
  )

  const selectedStudentRecord =
    students.find((student) => student.id === selectedStudent) ?? classStudents[0] ?? students[0]

  const selectedMarks = studentMarks[selectedStudentRecord.id] ?? selectedStudentRecord.marks
  const selectedAverage = getAverage(Object.values(selectedMarks))
  const activeModuleItem = moduleItems.find((item) => item.id === activeModule) ?? moduleItems[0]
  const ActiveModuleIcon = activeModuleItem.icon

  const presentCount = Object.values(attendanceMap).filter((status) => status === "Present").length
  const absentCount = Object.values(attendanceMap).filter((status) => status === "Absent").length
  const dueFees = students.filter((student) => student.feeStatus !== "Paid").length
  const pendingLeaves = leaveRequests.filter((request) => request.status === "Pending").length
  const monthlyCollection = students.reduce(
    (total, student) => total + (student.feeStatus === "Paid" ? student.monthlyFee + student.therapyFee : 0),
    0,
  )
  const pendingCollection = students.reduce(
    (total, student) => total + (student.feeStatus === "Paid" ? 0 : student.monthlyFee + student.therapyFee),
    0,
  )

  const classRanking = useMemo(
    () =>
      classStudents
        .map((student) => ({
          ...student,
          average: getAverage(Object.values(studentMarks[student.id] ?? student.marks)),
        }))
        .sort((a, b) => b.average - a.average),
    [classStudents, studentMarks],
  )

  const subjectAnalytics = subjects.map((subject) => ({
    subject,
    average: getAverage(classStudents.map((student) => studentMarks[student.id]?.[subject] ?? student.marks[subject])),
  }))

  function addActivity(message: string) {
    const time = new Date().toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
    })
    setActivityLog((items) => [`${time} - ${message}`, ...items].slice(0, 5))
  }

  function handleClassChange(value: string) {
    setSelectedClass(value)
    const firstStudent = students.find((student) => student.className === value)
    if (firstStudent) setSelectedStudent(firstStudent.id)
  }

  function handleAttendance(studentId: string, status: AttendanceStatus) {
    setAttendanceMap((current) => ({ ...current, [studentId]: status }))
    const student = students.find((item) => item.id === studentId)
    addActivity(`${student?.name ?? "Student"} marked ${status}.`)
  }

  function markBulk(status: AttendanceStatus) {
    setAttendanceMap((current) => ({
      ...current,
      ...Object.fromEntries(classStudents.map((student) => [student.id, status])),
    }))
    addActivity(`${selectedClass} bulk marked ${status}.`)
  }

  function updateMark(subject: string, value: number) {
    const nextValue = Math.max(0, Math.min(100, Number.isFinite(value) ? value : 0))
    setStudentMarks((current) => ({
      ...current,
      [selectedStudentRecord.id]: {
        ...selectedMarks,
        [subject]: nextValue,
      },
    }))
  }

  function downloadAttendanceReport() {
    downloadPdf("sunshine-attendance-report.pdf", "Sunshine School Attendance Report", [
      `Class: ${selectedClass}`,
      `Month: June 2026`,
      `Present today: ${presentCount}`,
      `Absent today: ${absentCount}`,
      ...classStudents.map(
        (student) =>
          `${student.id} - ${student.name} - ${attendanceMap[student.id] ?? "Present"} - ${student.attendancePercent}%`,
      ),
    ])
    addActivity("Monthly attendance PDF downloaded.")
  }

  function downloadProgressReport() {
    downloadPdf("sunshine-progress-report.pdf", "Sunshine School Progress Report", [
      `Student: ${selectedStudentRecord.name}`,
      `Class: ${selectedStudentRecord.className}`,
      `Term: ${selectedTerm}`,
      `Attendance: ${selectedStudentRecord.attendancePercent}%`,
      `Overall grade: ${gradeFor(selectedAverage)}`,
      ...Object.entries(selectedMarks).map(([subject, mark]) => `${subject}: ${mark}/100 - ${gradeFor(mark)}`),
      `IEP note: ${iepNotes[selectedStudentRecord.id]}`,
    ])
    addActivity(`${selectedStudentRecord.name} progress PDF downloaded.`)
  }

  function downloadFeeReceipt(student: Student) {
    downloadPdf("sunshine-fee-receipt.pdf", "Sunshine School Fee Receipt", [
      `Student: ${student.name}`,
      `Class: ${student.className}`,
      `Monthly fee: ${formatMoney(student.monthlyFee)}`,
      `Therapy fee: ${formatMoney(student.therapyFee)}`,
      `Total: ${formatMoney(student.monthlyFee + student.therapyFee)}`,
      `Status: ${student.feeStatus}`,
      `Academic year: 2026-27`,
    ])
    addActivity(`${student.name} fee receipt downloaded.`)
  }

  function downloadCollectionReport() {
    downloadPdf("sunshine-fee-collection-report.pdf", "Sunshine School Fee Collection Report", [
      "Month: June 2026",
      `Collected: ${formatMoney(monthlyCollection)}`,
      `Pending: ${formatMoney(pendingCollection)}`,
      ...students.map(
        (student) =>
          `${student.id} - ${student.name} - ${student.feeStatus} - ${formatMoney(
            student.monthlyFee + student.therapyFee,
          )}`,
      ),
    ])
    addActivity("Monthly fee collection PDF downloaded.")
  }

  function renderAttendance() {
    return (
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1.45fr)_minmax(340px,0.75fr)]">
        <Panel className="xl:row-span-2">
          <PanelHeader
            icon={ClipboardCheck}
            title="Daily attendance"
            meta="16 Jun 2026"
            actions={
              <div className="flex flex-wrap gap-2">
                <button className="app-button" type="button" onClick={() => markBulk("Present")}>
                  <CheckCircle2 className="size-4" />
                  Bulk present
                </button>
                <button className="app-button-secondary" type="button" onClick={() => markBulk("Late")}>
                  <Clock className="size-4" />
                  Bulk late
                </button>
              </div>
            }
          />
          <div className="border-b border-border/70 px-4 pb-4 sm:px-5">
            <div className="grid gap-3 sm:grid-cols-2">
              <SelectField label="Class view" value={selectedClass} onChange={handleClassChange} options={classOptions} />
              <SelectField
                label="Student view"
                value={selectedStudentRecord.id}
                onChange={setSelectedStudent}
                options={students.map((student) => student.id)}
                optionLabels={Object.fromEntries(students.map((student) => [student.id, student.name]))}
              />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-[760px] w-full text-left text-sm">
              <thead className="border-b border-border/70 bg-secondary/60 text-xs font-semibold text-muted-foreground">
                <tr>
                  <th className="px-4 py-3 sm:px-5">Student</th>
                  <th className="px-4 py-3">Percentage</th>
                  <th className="px-4 py-3">Today</th>
                  <th className="px-4 py-3">Mark</th>
                  <th className="px-4 py-3">Parent alert</th>
                </tr>
              </thead>
              <tbody>
                {classStudents.map((student) => {
                  const status = attendanceMap[student.id] ?? "Present"
                  return (
                    <tr key={student.id} className="border-b border-border/60 last:border-0">
                      <td className="px-4 py-4 sm:px-5">
                        <div className="font-medium text-brand-ink">{student.name}</div>
                        <div className="mt-1 text-xs text-muted-foreground">{student.id}</div>
                      </td>
                      <td className="px-4 py-4">
                        <ProgressBar value={student.attendancePercent} tone="red" label={`${student.attendancePercent}%`} />
                      </td>
                      <td className="px-4 py-4">
                        <StatusBadge className={attendanceStatusClasses[status]}>{status}</StatusBadge>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex flex-wrap gap-1.5">
                          {attendanceOptions.map((option) => (
                            <button
                              key={option}
                              type="button"
                              onClick={() => handleAttendance(student.id, option)}
                              className={cn(
                                "h-8 rounded-md border px-2.5 text-xs font-medium transition-colors",
                                status === option
                                  ? attendanceStatusClasses[option]
                                  : "border-border bg-card text-muted-foreground hover:border-brand-red hover:text-brand-red",
                              )}
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex gap-1.5">
                          <IconAction
                            label="Email alert"
                            icon={Mail}
                            onClick={() => addActivity(`Email absence alert queued for ${student.parent}.`)}
                          />
                          <IconAction
                            label="WhatsApp alert"
                            icon={MessageCircle}
                            onClick={() => addActivity(`WhatsApp absence alert queued for ${student.parent}.`)}
                          />
                        </div>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </Panel>

        <Panel>
          <PanelHeader
            icon={FileText}
            title="Monthly attendance report"
            meta="Class and student"
            actions={
              <button className="app-button" type="button" onClick={downloadAttendanceReport}>
                <Download className="size-4" />
                PDF
              </button>
            }
          />
          <div className="grid gap-3 px-4 pb-5 sm:px-5">
            <MetricLine label="Class average" value="89%" />
            <MetricLine label="Present today" value={String(presentCount)} />
            <MetricLine label="Absent today" value={String(absentCount)} />
            <MetricLine label="Late or half-day" value={String(Object.values(attendanceMap).filter((status) => status === "Late" || status === "Half-day").length)} />
          </div>
        </Panel>

        <Panel>
          <PanelHeader icon={CalendarPlus} title="Holiday and leave calendar" meta="Academic year 2026-27" />
          <div className="divide-y divide-border/70">
            {holidays.map((holiday) => (
              <div key={`${holiday.date}-${holiday.title}`} className="flex items-center justify-between gap-3 px-4 py-3 sm:px-5">
                <div>
                  <div className="text-sm font-medium text-brand-ink">{holiday.title}</div>
                  <div className="text-xs text-muted-foreground">{holiday.type}</div>
                </div>
                <div className="rounded-md bg-brand-yellow-soft px-2.5 py-1 text-xs font-semibold text-brand-ink">
                  {holiday.date}
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    )
  }

  function renderAcademics() {
    return (
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1.35fr)_minmax(340px,0.85fr)]">
        <Panel>
          <PanelHeader
            icon={BookOpen}
            title="Marks entry"
            meta={selectedTerm}
            actions={
              <div className="flex flex-wrap gap-2">
                <select
                  value={selectedTerm}
                  onChange={(event) => setSelectedTerm(event.target.value)}
                  className="app-select h-9 min-w-28"
                >
                  {terms.map((term) => (
                    <option key={term}>{term}</option>
                  ))}
                </select>
                <button className="app-button" type="button" onClick={downloadProgressReport}>
                  <Download className="size-4" />
                  Report
                </button>
              </div>
            }
          />
          <div className="border-b border-border/70 px-4 pb-4 sm:px-5">
            <SelectField
              label="Student"
              value={selectedStudentRecord.id}
              onChange={setSelectedStudent}
              options={students.map((student) => student.id)}
              optionLabels={Object.fromEntries(students.map((student) => [student.id, `${student.name} - ${student.className}`]))}
            />
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-[620px] w-full text-left text-sm">
              <thead className="border-b border-border/70 bg-secondary/60 text-xs font-semibold text-muted-foreground">
                <tr>
                  <th className="px-4 py-3 sm:px-5">Subject</th>
                  <th className="px-4 py-3">Marks</th>
                  <th className="px-4 py-3">Auto grade</th>
                  <th className="px-4 py-3">Teacher</th>
                </tr>
              </thead>
              <tbody>
                {subjects.map((subject) => {
                  const mark = selectedMarks[subject] ?? 0
                  return (
                    <tr key={subject} className="border-b border-border/60 last:border-0">
                      <td className="px-4 py-4 font-medium text-brand-ink sm:px-5">{subject}</td>
                      <td className="px-4 py-4">
                        <input
                          aria-label={`${subject} marks`}
                          className="app-input h-9 w-24"
                          type="number"
                          min={0}
                          max={100}
                          value={mark}
                          onChange={(event) => updateMark(subject, Number(event.target.value))}
                        />
                      </td>
                      <td className="px-4 py-4">
                        <StatusBadge className="border-brand-yellow/60 bg-brand-yellow-soft text-brand-ink">
                          {gradeFor(mark)}
                        </StatusBadge>
                      </td>
                      <td className="px-4 py-4 text-muted-foreground">
                        {teachers.find((teacher) => teacher.subjects.some((item) => subject.includes(item) || item.includes(subject)))?.name ?? "Class team"}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
          <div className="grid gap-3 border-t border-border/70 bg-secondary/30 p-4 sm:grid-cols-3 sm:p-5">
            <MetricLine label="Average" value={`${selectedAverage}%`} />
            <MetricLine label="Grade" value={gradeFor(selectedAverage)} />
            <MetricLine label="Attendance" value={`${selectedStudentRecord.attendancePercent}%`} />
          </div>
        </Panel>

        <Panel>
          <PanelHeader icon={Trophy} title="Class ranking" meta={selectedClass} />
          <div className="divide-y divide-border/70">
            {classRanking.map((student, index) => (
              <div key={student.id} className="flex items-center gap-3 px-4 py-3 sm:px-5">
                <div className="flex size-9 items-center justify-center rounded-md bg-brand-yellow-soft text-sm font-bold text-brand-red">
                  {index + 1}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-medium text-brand-ink">{student.name}</div>
                  <div className="text-xs text-muted-foreground">{student.id}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-semibold text-brand-ink">{student.average}%</div>
                  <div className="text-xs text-muted-foreground">{gradeFor(student.average)}</div>
                </div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel>
          <PanelHeader icon={BarChart3} title="Subject analytics" meta="Class average" />
          <div className="space-y-4 px-4 pb-5 sm:px-5">
            {subjectAnalytics.map((row) => (
              <div key={row.subject}>
                <div className="mb-1.5 flex justify-between text-xs font-medium text-muted-foreground">
                  <span>{row.subject}</span>
                  <span>{row.average}%</span>
                </div>
                <ProgressBar value={row.average} tone={row.average >= 85 ? "green" : row.average >= 75 ? "yellow" : "red"} />
              </div>
            ))}
          </div>
        </Panel>

        <Panel className="xl:col-span-2">
          <PanelHeader icon={ClipboardList} title="Marks history" meta="Academic years" />
          <div className="overflow-x-auto">
            <table className="min-w-[620px] w-full text-left text-sm">
              <thead className="border-b border-border/70 bg-secondary/60 text-xs font-semibold text-muted-foreground">
                <tr>
                  <th className="px-4 py-3 sm:px-5">Year</th>
                  <th className="px-4 py-3">Term</th>
                  <th className="px-4 py-3">Average</th>
                  <th className="px-4 py-3">Grade</th>
                  <th className="px-4 py-3">Attendance</th>
                </tr>
              </thead>
              <tbody>
                {marksHistory.map((history) => (
                  <tr key={`${history.year}-${history.term}`} className="border-b border-border/60 last:border-0">
                    <td className="px-4 py-4 font-medium text-brand-ink sm:px-5">{history.year}</td>
                    <td className="px-4 py-4">{history.term}</td>
                    <td className="px-4 py-4">{history.average}%</td>
                    <td className="px-4 py-4">{history.grade}</td>
                    <td className="px-4 py-4">{history.attendance}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>
      </div>
    )
  }

  function renderTimetable() {
    return (
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1.4fr)_minmax(340px,0.8fr)]">
        <Panel className="xl:row-span-2">
          <PanelHeader
            icon={CalendarDays}
            title="Weekly timetable builder"
            meta={selectedClass}
            actions={
              <div className="flex rounded-md border border-border bg-card p-1">
                {(["class", "teacher"] as const).map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setTimetableMode(mode)}
                    className={cn(
                      "h-8 rounded px-3 text-xs font-semibold capitalize transition-colors",
                      timetableMode === mode ? "bg-brand-red text-white" : "text-muted-foreground hover:text-brand-ink",
                    )}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            }
          />
          <div className="overflow-x-auto">
            <table className="min-w-[840px] w-full text-left text-sm">
              <thead className="border-b border-border/70 bg-secondary/60 text-xs font-semibold text-muted-foreground">
                <tr>
                  <th className="px-4 py-3 sm:px-5">Day</th>
                  <th className="px-4 py-3">Period 1</th>
                  <th className="px-4 py-3">Period 2</th>
                  <th className="px-4 py-3">Period 3</th>
                  <th className="px-4 py-3">Period 4</th>
                </tr>
              </thead>
              <tbody>
                {timetable.map((day) => (
                  <tr key={day.day} className="border-b border-border/60 last:border-0">
                    <td className="px-4 py-4 font-semibold text-brand-red sm:px-5">{day.day}</td>
                    {day.slots.map(([subject, teacher, room]) => (
                      <td key={`${day.day}-${subject}-${room}`} className="px-4 py-4 align-top">
                        <div className="font-medium text-brand-ink">
                          {timetableMode === "teacher" ? teacher : subject}
                        </div>
                        <div className="mt-1 text-xs text-muted-foreground">
                          {timetableMode === "teacher" ? `${subject} - ${room}` : `${teacher} - ${room}`}
                        </div>
                        <button
                          type="button"
                          className="mt-2 inline-flex items-center gap-1 rounded-md border border-border px-2 py-1 text-xs font-medium text-muted-foreground hover:border-brand-red hover:text-brand-red"
                          onClick={() => addActivity(`${day.day} ${subject} period opened for edit.`)}
                        >
                          <Pencil className="size-3" />
                          Edit
                        </button>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>

        <Panel>
          <PanelHeader icon={UserPlus} title="Substitute scheduling" meta="Today" />
          <div className="space-y-3 px-4 pb-5 sm:px-5">
            {[
              { absent: "Dr. Kavita", period: "Tue Period 2", substitute: "Ms. Suchitra" },
              { absent: "Coach Ramesh", period: "Thu Period 4", substitute: "Mr. Nikhil" },
            ].map((item) => (
              <div key={`${item.absent}-${item.period}`} className="rounded-lg border border-border bg-secondary/30 p-3">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-sm font-medium text-brand-ink">{item.period}</div>
                    <div className="text-xs text-muted-foreground">{item.absent} on leave</div>
                  </div>
                  <StatusBadge className="border-sky-200 bg-sky-50 text-sky-700">{item.substitute}</StatusBadge>
                </div>
                <button
                  className="app-button-secondary mt-3 w-full"
                  type="button"
                  onClick={() => addActivity(`${item.substitute} assigned as substitute.`)}
                >
                  <BadgeCheck className="size-4" />
                  Assign substitute
                </button>
              </div>
            ))}
          </div>
        </Panel>

        <Panel>
          <PanelHeader
            icon={FileText}
            title="Exam schedule"
            meta={examPublished ? "Published" : "Draft"}
            actions={
              <button
                className="app-button"
                type="button"
                onClick={() => {
                  setExamPublished(true)
                  addActivity("Exam timetable published.")
                }}
              >
                <Send className="size-4" />
                Publish
              </button>
            }
          />
          <div className="divide-y divide-border/70">
            {examSchedule.map((exam) => (
              <div key={`${exam.date}-${exam.subject}`} className="px-4 py-3 sm:px-5">
                <div className="flex justify-between gap-3">
                  <div>
                    <div className="text-sm font-medium text-brand-ink">{exam.subject}</div>
                    <div className="text-xs text-muted-foreground">{exam.className}</div>
                  </div>
                  <div className="text-right text-xs text-muted-foreground">
                    <div>{exam.date}</div>
                    <div>{exam.time}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    )
  }

  function renderStudents() {
    return (
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1.1fr)_minmax(360px,0.9fr)]">
        <Panel>
          <PanelHeader
            icon={Users}
            title="Student profile"
            meta={selectedStudentRecord.id}
            actions={
              <button
                className="app-button"
                type="button"
                onClick={() =>
                  downloadPdf("sunshine-transfer-certificate.pdf", "Sunshine School Transfer Certificate", [
                    `Student: ${selectedStudentRecord.name}`,
                    `Class: ${selectedStudentRecord.className}`,
                    `Admission date: ${selectedStudentRecord.admissionDate}`,
                    `Attendance: ${selectedStudentRecord.attendancePercent}%`,
                    "Status: Eligible for TC generation",
                  ])
                }
              >
                <Download className="size-4" />
                TC
              </button>
            }
          />
          <div className="grid gap-5 px-4 pb-5 sm:px-5 lg:grid-cols-[180px_minmax(0,1fr)]">
            <div>
              <Image
                src={selectedStudentRecord.photo}
                alt={`${selectedStudentRecord.name} profile`}
                width={180}
                height={180}
                className="aspect-square w-full rounded-lg border border-border object-cover"
              />
              <SelectField
                className="mt-3"
                label="Student"
                value={selectedStudentRecord.id}
                onChange={setSelectedStudent}
                options={students.map((student) => student.id)}
                optionLabels={Object.fromEntries(students.map((student) => [student.id, student.name]))}
              />
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              <ReadOnlyField label="Name" value={selectedStudentRecord.name} />
              <ReadOnlyField label="DOB" value={selectedStudentRecord.dob} />
              <ReadOnlyField label="Disability type" value={selectedStudentRecord.disability} />
              <ReadOnlyField label="Admission date" value={selectedStudentRecord.admissionDate} />
              <ReadOnlyField label="Parent" value={selectedStudentRecord.parent} />
              <ReadOnlyField label="Phone" value={selectedStudentRecord.phone} />
              <SelectField label="Class transfer" value={selectedStudentRecord.className} onChange={setSelectedClass} options={classOptions} />
              <SelectField label="Section" value={selectedStudentRecord.section} onChange={() => undefined} options={["A", "B", "C"]} />
            </div>
          </div>
          <div className="grid gap-3 border-t border-border/70 bg-secondary/30 p-4 sm:grid-cols-3 sm:p-5">
            <button className="app-button-secondary" type="button" onClick={() => addActivity(`${selectedStudentRecord.name} enrollment updated.`)}>
              <UserPlus className="size-4" />
              Enrollment
            </button>
            <button className="app-button-secondary" type="button" onClick={() => addActivity(`${selectedStudentRecord.name} withdrawal request saved.`)}>
              <XCircle className="size-4" />
              Withdrawal
            </button>
            <button className="app-button-secondary" type="button" onClick={() => addActivity(`${selectedStudentRecord.name} promoted for 2026-27.`)}>
              <GraduationCap className="size-4" />
              Promotion
            </button>
          </div>
        </Panel>

        <Panel>
          <PanelHeader icon={ShieldCheck} title="IEP notes" meta="Individual education plan" />
          <div className="space-y-4 px-4 pb-5 sm:px-5">
            <textarea
              className="app-input min-h-36 w-full resize-none py-3"
              value={iepNotes[selectedStudentRecord.id] ?? ""}
              onChange={(event) =>
                setIepNotes((current) => ({
                  ...current,
                  [selectedStudentRecord.id]: event.target.value,
                }))
              }
            />
            <button className="app-button w-full" type="button" onClick={() => addActivity(`${selectedStudentRecord.name} IEP notes saved.`)}>
              <CheckCircle2 className="size-4" />
              Save IEP
            </button>
          </div>
        </Panel>

        <Panel>
          <PanelHeader icon={FileUp} title="Student documents" meta="Aadhaar, medical reports, photos" />
          <div className="grid gap-3 px-4 pb-5 sm:px-5">
            {["Aadhaar", "Medical report", "Student photo"].map((label) => (
              <label key={label} className="flex cursor-pointer items-center justify-between gap-3 rounded-lg border border-dashed border-border bg-secondary/30 px-3 py-3 text-sm">
                <span className="font-medium text-brand-ink">{label}</span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-brand-red">
                  <Upload className="size-3.5" />
                  Upload
                </span>
                <input type="file" className="sr-only" onChange={() => addActivity(`${label} selected for ${selectedStudentRecord.name}.`)} />
              </label>
            ))}
          </div>
        </Panel>

        <Panel>
          <PanelHeader icon={UserPlus} title="Admission and withdrawal queue" meta="Front office" />
          <div className="divide-y divide-border/70">
            {admissionQueue.map((item) => (
              <div key={item.name} className="flex items-center justify-between gap-3 px-4 py-3 sm:px-5">
                <div>
                  <div className="text-sm font-medium text-brand-ink">{item.name}</div>
                  <div className="text-xs text-muted-foreground">{item.className}</div>
                </div>
                <StatusBadge className="border-brand-yellow/60 bg-brand-yellow-soft text-brand-ink">{item.status}</StatusBadge>
              </div>
            ))}
          </div>
        </Panel>
      </div>
    )
  }

  function renderTeachers() {
    return (
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1.3fr)_minmax(340px,0.8fr)]">
        <Panel>
          <PanelHeader icon={UserCheck} title="Teacher profiles" meta="Subjects and classes" />
          <div className="overflow-x-auto">
            <table className="min-w-[760px] w-full text-left text-sm">
              <thead className="border-b border-border/70 bg-secondary/60 text-xs font-semibold text-muted-foreground">
                <tr>
                  <th className="px-4 py-3 sm:px-5">Teacher</th>
                  <th className="px-4 py-3">Subject assignments</th>
                  <th className="px-4 py-3">Class allocation</th>
                  <th className="px-4 py-3">Workload</th>
                </tr>
              </thead>
              <tbody>
                {teachers.map((teacher) => (
                  <tr key={teacher.id} className="border-b border-border/60 last:border-0">
                    <td className="px-4 py-4 sm:px-5">
                      <div className="font-medium text-brand-ink">{teacher.name}</div>
                      <div className="text-xs text-muted-foreground">{teacher.id}</div>
                    </td>
                    <td className="px-4 py-4">
                      <TagList items={teacher.subjects} />
                    </td>
                    <td className="px-4 py-4">
                      <TagList items={teacher.classes} />
                    </td>
                    <td className="px-4 py-4">
                      <ProgressBar value={Math.round((teacher.workload / 30) * 100)} tone={teacher.workload > 24 ? "red" : "green"} label={`${teacher.workload} periods`} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>

        <Panel>
          <PanelHeader icon={CalendarDays} title="Leave approvals" meta={`${pendingLeaves} pending`} />
          <div className="divide-y divide-border/70">
            {leaveRequests.map((request) => (
              <div key={`${request.teacher}-${request.dates}`} className="px-4 py-3 sm:px-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-sm font-medium text-brand-ink">{request.teacher}</div>
                    <div className="text-xs text-muted-foreground">{request.dates} - {request.reason}</div>
                  </div>
                  <StatusBadge className={request.status === "Approved" ? "border-emerald-200 bg-emerald-50 text-emerald-700" : "border-amber-200 bg-amber-50 text-amber-700"}>
                    {request.status}
                  </StatusBadge>
                </div>
                {request.status === "Pending" && (
                  <div className="mt-3 flex gap-2">
                    <button className="app-button-secondary flex-1" type="button" onClick={() => addActivity(`${request.teacher} leave approved.`)}>
                      Approve
                    </button>
                    <button className="app-button-secondary flex-1" type="button" onClick={() => addActivity(`${request.teacher} leave rejected.`)}>
                      Reject
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Panel>

        <Panel className="xl:col-span-2">
          <PanelHeader icon={ShieldCheck} title="Teacher performance notes" meta="Admin only" />
          <div className="grid gap-4 px-4 pb-5 sm:px-5 lg:grid-cols-2">
            {teachers.map((teacher) => (
              <div key={teacher.id} className="rounded-lg border border-border bg-secondary/30 p-4">
                <div className="mb-3 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-semibold text-brand-ink">{teacher.name}</div>
                    <div className="text-xs text-muted-foreground">{teacher.leaveBalance} leave days left</div>
                  </div>
                  <Star className="size-4 text-brand-red" />
                </div>
                <textarea
                  className="app-input min-h-24 w-full resize-none py-3"
                  value={teacherNotes[teacher.id] ?? ""}
                  onChange={(event) =>
                    setTeacherNotes((current) => ({
                      ...current,
                      [teacher.id]: event.target.value,
                    }))
                  }
                />
              </div>
            ))}
          </div>
        </Panel>
      </div>
    )
  }

  function renderCommunication() {
    return (
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1.2fr)_minmax(360px,0.9fr)]">
        <Panel>
          <PanelHeader icon={Megaphone} title="Announcement board" meta="School-wide" />
          <div className="space-y-4 px-4 pb-5 sm:px-5">
            <textarea
              className="app-input min-h-28 w-full resize-none py-3"
              value={noticeDraft}
              onChange={(event) => setNoticeDraft(event.target.value)}
            />
            <div className="flex flex-wrap gap-2">
              <SelectField className="min-w-48" label="Role target" value={noticeTarget} onChange={setNoticeTarget} options={["All", "Teachers", "Parents", "Admin"]} />
              <button className="app-button mt-auto" type="button" onClick={() => addActivity(`${noticeTarget} notice published.`)}>
                <Send className="size-4" />
                Publish notice
              </button>
            </div>
          </div>
          <div className="divide-y divide-border/70 border-t border-border/70">
            {notices.map((notice) => (
              <div key={`${notice.title}-${notice.date}`} className="flex items-center justify-between gap-3 px-4 py-3 sm:px-5">
                <div>
                  <div className="text-sm font-medium text-brand-ink">{notice.title}</div>
                  <div className="text-xs text-muted-foreground">{notice.date}</div>
                </div>
                <StatusBadge className="border-brand-yellow/60 bg-brand-yellow-soft text-brand-ink">{notice.target}</StatusBadge>
              </div>
            ))}
          </div>
        </Panel>

        <Panel>
          <PanelHeader icon={BookOpen} title="Homework and assignments" meta="Teacher publishing" />
          <div className="space-y-4 px-4 pb-5 sm:px-5">
            <textarea
              className="app-input min-h-24 w-full resize-none py-3"
              value={homeworkDraft}
              onChange={(event) => setHomeworkDraft(event.target.value)}
            />
            <button className="app-button w-full" type="button" onClick={() => addActivity(`${selectedClass} homework published.`)}>
              <CheckCircle2 className="size-4" />
              Publish homework
            </button>
          </div>
          <div className="divide-y divide-border/70 border-t border-border/70">
            {homeworkRows.map((row) => (
              <div key={`${row.className}-${row.task}`} className="px-4 py-3 sm:px-5">
                <div className="text-sm font-medium text-brand-ink">{row.task}</div>
                <div className="mt-1 text-xs text-muted-foreground">{row.className} - {row.subject} - due {row.due}</div>
              </div>
            ))}
          </div>
        </Panel>

        <Panel>
          <PanelHeader icon={MessageCircle} title="Teacher-parent messaging" meta={selectedStudentRecord.parent} />
          <div className="space-y-4 px-4 pb-5 sm:px-5">
            <ReadOnlyField label="Parent" value={`${selectedStudentRecord.parent} - ${selectedStudentRecord.phone}`} />
            <textarea
              className="app-input min-h-28 w-full resize-none py-3"
              value={messageDraft}
              onChange={(event) => setMessageDraft(event.target.value)}
            />
            <div className="grid gap-2 sm:grid-cols-2">
              <button className="app-button-secondary" type="button" onClick={() => addActivity(`Direct message sent to ${selectedStudentRecord.parent}.`)}>
                <MessageCircle className="size-4" />
                Message
              </button>
              <button className="app-button-secondary" type="button" onClick={() => addActivity(`Email sent to ${selectedStudentRecord.parent}.`)}>
                <Mail className="size-4" />
                Email
              </button>
            </div>
          </div>
        </Panel>

        <Panel>
          <PanelHeader icon={Bell} title="Circulars and broadcasts" meta="Bulk notify" />
          <div className="grid gap-3 px-4 pb-5 sm:px-5">
            <button className="app-button" type="button" onClick={() => addActivity("Circular notification sent to all parents.")}>
              <Bell className="size-4" />
              Event circular
            </button>
            <button className="app-button-secondary" type="button" onClick={() => addActivity("Bulk SMS queued for all parents.")}>
              <MessageCircle className="size-4" />
              SMS broadcast
            </button>
            <button className="app-button-secondary" type="button" onClick={() => addActivity("Bulk email queued for all parents.")}>
              <Mail className="size-4" />
              Email broadcast
            </button>
          </div>
        </Panel>
      </div>
    )
  }

  function renderFees() {
    return (
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1.4fr)_minmax(340px,0.8fr)]">
        <Panel className="xl:row-span-2">
          <PanelHeader
            icon={IndianRupee}
            title="Fee tracking"
            meta="June 2026"
            actions={
              <button className="app-button" type="button" onClick={downloadCollectionReport}>
                <Download className="size-4" />
                Report
              </button>
            }
          />
          <div className="overflow-x-auto">
            <table className="min-w-[860px] w-full text-left text-sm">
              <thead className="border-b border-border/70 bg-secondary/60 text-xs font-semibold text-muted-foreground">
                <tr>
                  <th className="px-4 py-3 sm:px-5">Student</th>
                  <th className="px-4 py-3">Structure</th>
                  <th className="px-4 py-3">Month</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {students.map((student) => (
                  <tr key={student.id} className="border-b border-border/60 last:border-0">
                    <td className="px-4 py-4 sm:px-5">
                      <div className="font-medium text-brand-ink">{student.name}</div>
                      <div className="text-xs text-muted-foreground">{student.className}</div>
                    </td>
                    <td className="px-4 py-4">
                      <div>{formatMoney(student.monthlyFee)} monthly</div>
                      <div className="text-xs text-muted-foreground">{formatMoney(student.therapyFee)} therapy</div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex flex-wrap gap-1.5">
                        {feeMonths.map((month) => (
                          <span key={`${student.id}-${month}`} className="rounded-md border border-border bg-secondary/40 px-2 py-1 text-xs">
                            {month}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <StatusBadge className={feeStatusClasses[student.feeStatus]}>{student.feeStatus}</StatusBadge>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex flex-wrap gap-1.5">
                        <IconAction
                          label="Email reminder"
                          icon={Mail}
                          onClick={() => addActivity(`Fee reminder emailed to ${student.parent}.`)}
                        />
                        <IconAction label="Receipt" icon={ReceiptText} onClick={() => downloadFeeReceipt(student)} />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>

        <Panel>
          <PanelHeader icon={WalletCards} title="Fee collection" meta="Admin" />
          <div className="grid gap-3 px-4 pb-5 sm:px-5">
            <MetricLine label="Collected" value={formatMoney(monthlyCollection)} />
            <MetricLine label="Pending" value={formatMoney(pendingCollection)} />
            <MetricLine label="Overdue accounts" value={String(students.filter((student) => student.feeStatus === "Overdue").length)} />
          </div>
        </Panel>

        <Panel>
          <PanelHeader icon={CircleAlert} title="Due reminders" meta="Auto email" />
          <div className="divide-y divide-border/70">
            {students
              .filter((student) => student.feeStatus !== "Paid")
              .map((student) => (
                <div key={student.id} className="px-4 py-3 sm:px-5">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <div className="text-sm font-medium text-brand-ink">{student.name}</div>
                      <div className="text-xs text-muted-foreground">{student.parent}</div>
                    </div>
                    <StatusBadge className={feeStatusClasses[student.feeStatus]}>{student.feeStatus}</StatusBadge>
                  </div>
                  <button
                    className="app-button-secondary mt-3 w-full"
                    type="button"
                    onClick={() => addActivity(`Auto fee reminder queued for ${student.parent}.`)}
                  >
                    <Mail className="size-4" />
                    Queue reminder
                  </button>
                </div>
              ))}
          </div>
        </Panel>
      </div>
    )
  }

  function renderActiveModule() {
    if (activeModule === "attendance") return renderAttendance()
    if (activeModule === "academics") return renderAcademics()
    if (activeModule === "timetable") return renderTimetable()
    if (activeModule === "students") return renderStudents()
    if (activeModule === "teachers") return renderTeachers()
    if (activeModule === "communication") return renderCommunication()
    return renderFees()
  }

  return (
    <div className="bg-brand-cream/50">
      <section className="border-b border-border/70 bg-brand-yellow-soft/45">
        <div className="container-x py-6 md:py-8">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/70 bg-card px-3 py-1.5 text-xs font-semibold text-brand-red">
                <School className="size-3.5" />
                Sunshine School Management
              </div>
              <h1 className="mt-3 font-serif text-3xl leading-tight text-brand-ink md:text-5xl">
                Operations desk
              </h1>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground md:text-base">
                Academic year 2026-27, Vashi campus, admin and teacher workflows.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <button className="app-button" type="button" onClick={downloadAttendanceReport}>
                <Download className="size-4" />
                Attendance PDF
              </button>
              <button className="app-button-secondary" type="button" onClick={() => addActivity("Absence alerts checked for today.")}>
                <Bell className="size-4" />
                Alerts
              </button>
            </div>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            <MetricCard icon={ClipboardCheck} label="Present today" value={`${presentCount}/${students.length}`} detail={`${absentCount} absent`} />
            <MetricCard icon={GraduationCap} label="Academic average" value={`${selectedAverage}%`} detail={gradeFor(selectedAverage)} />
            <MetricCard icon={WalletCards} label="Pending fees" value={String(dueFees)} detail={formatMoney(pendingCollection)} />
            <MetricCard icon={CalendarDays} label="Leave approvals" value={String(pendingLeaves)} detail="Admin queue" />
          </div>
        </div>
      </section>

      <section className="container-x grid gap-5 py-6 lg:grid-cols-[244px_minmax(0,1fr)] md:py-8">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-lg border border-border bg-card p-2 shadow-sm">
            <div className="mb-2 px-3 py-2">
              <div className="text-xs font-semibold text-brand-red">Modules</div>
              <div className="text-sm font-medium text-brand-ink">{activeModuleItem.label}</div>
            </div>
            <nav className="grid gap-1">
              {moduleItems.map((item) => {
                const Icon = item.icon
                const active = item.id === activeModule
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveModule(item.id)}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-3 text-left transition-colors",
                      active ? "bg-brand-red text-white" : "text-brand-ink hover:bg-brand-yellow-soft",
                    )}
                  >
                    <Icon className="size-4 shrink-0" />
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-semibold">{item.label}</span>
                      <span className={cn("block truncate text-xs", active ? "text-white/75" : "text-muted-foreground")}>
                        {item.role}
                      </span>
                    </span>
                  </button>
                )
              })}
            </nav>
          </div>
        </aside>

        <div className="min-w-0 space-y-5">
          <div className="rounded-lg border border-border bg-card p-4 shadow-sm sm:p-5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                <div className="flex size-10 items-center justify-center rounded-lg bg-brand-yellow-soft text-brand-red">
                  <ActiveModuleIcon className="size-5" />
                </div>
                <div>
                  <div className="font-serif text-2xl leading-none text-brand-ink">{activeModuleItem.label}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{activeModuleItem.role}</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <StatusBadge className="border-emerald-200 bg-emerald-50 text-emerald-700">Live data</StatusBadge>
                <StatusBadge className="border-brand-yellow/60 bg-brand-yellow-soft text-brand-ink">2026-27</StatusBadge>
              </div>
            </div>
          </div>

          {renderActiveModule()}

          <Panel>
            <PanelHeader icon={Clock} title="Activity log" meta="Recent actions" />
            <div className="divide-y divide-border/70">
              {activityLog.map((item) => (
                <div key={item} className="px-4 py-3 text-sm text-muted-foreground sm:px-5">
                  {item}
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </section>
    </div>
  )
}

function Panel({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <section className={cn("overflow-hidden rounded-lg border border-border bg-card shadow-sm", className)}>
      {children}
    </section>
  )
}

function PanelHeader({
  icon: Icon,
  title,
  meta,
  actions,
}: {
  icon: LucideIcon
  title: string
  meta?: string
  actions?: ReactNode
}) {
  return (
    <header className="flex flex-col gap-3 border-b border-border/70 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
      <div className="flex min-w-0 items-center gap-3">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-yellow-soft text-brand-red">
          <Icon className="size-4" />
        </div>
        <div className="min-w-0">
          <h2 className="truncate text-base font-semibold text-brand-ink">{title}</h2>
          {meta && <p className="mt-0.5 truncate text-xs text-muted-foreground">{meta}</p>}
        </div>
      </div>
      {actions && <div className="shrink-0">{actions}</div>}
    </header>
  )
}

function MetricCard({
  icon: Icon,
  label,
  value,
  detail,
}: {
  icon: LucideIcon
  label: string
  value: string
  detail: string
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-4 shadow-sm">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-xs font-medium text-muted-foreground">{label}</div>
          <div className="mt-2 text-2xl font-semibold text-brand-ink">{value}</div>
        </div>
        <div className="flex size-9 items-center justify-center rounded-lg bg-brand-yellow-soft text-brand-red">
          <Icon className="size-4" />
        </div>
      </div>
      <div className="mt-3 text-xs text-muted-foreground">{detail}</div>
    </div>
  )
}

function MetricLine({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-lg border border-border bg-secondary/30 px-3 py-3">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="text-sm font-semibold text-brand-ink">{value}</span>
    </div>
  )
}

function ProgressBar({
  value,
  label,
  tone = "red",
}: {
  value: number
  label?: string
  tone?: "red" | "yellow" | "green"
}) {
  const toneClasses = {
    red: "bg-brand-red",
    yellow: "bg-brand-yellow",
    green: "bg-emerald-500",
  }

  return (
    <div className="min-w-32">
      <div className="h-2 overflow-hidden rounded-full bg-secondary">
        <div className={cn("h-full rounded-full", toneClasses[tone])} style={{ width: `${Math.max(0, Math.min(100, value))}%` }} />
      </div>
      {label && <div className="mt-1 text-xs font-medium text-muted-foreground">{label}</div>}
    </div>
  )
}

function StatusBadge({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span className={cn("inline-flex items-center rounded-md border px-2 py-1 text-xs font-semibold", className)}>
      {children}
    </span>
  )
}

function IconAction({
  label,
  icon: Icon,
  onClick,
}: {
  label: string
  icon: LucideIcon
  onClick: () => void
}) {
  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      onClick={onClick}
      className="inline-flex size-9 items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition-colors hover:border-brand-red hover:text-brand-red"
    >
      <Icon className="size-4" />
    </button>
  )
}

function SelectField({
  label,
  value,
  onChange,
  options,
  optionLabels,
  className,
}: {
  label: string
  value: string
  onChange: (value: string) => void
  options: string[]
  optionLabels?: Record<string, string>
  className?: string
}) {
  return (
    <label className={cn("block", className)}>
      <span className="mb-1.5 block text-xs font-semibold text-muted-foreground">{label}</span>
      <select value={value} onChange={(event) => onChange(event.target.value)} className="app-select w-full">
        {options.map((option) => (
          <option key={option} value={option}>
            {optionLabels?.[option] ?? option}
          </option>
        ))}
      </select>
    </label>
  )
}

function ReadOnlyField({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-secondary/30 px-3 py-3">
      <div className="text-xs font-semibold text-muted-foreground">{label}</div>
      <div className="mt-1 text-sm font-medium text-brand-ink">{value}</div>
    </div>
  )
}

function TagList({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <span key={item} className="rounded-md border border-border bg-secondary/40 px-2 py-1 text-xs font-medium text-muted-foreground">
          {item}
        </span>
      ))}
    </div>
  )
}
