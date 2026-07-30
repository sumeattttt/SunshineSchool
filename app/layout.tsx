import type { Metadata } from "next"
import { Geist, Instrument_Serif } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

import { AnnouncementBar } from "@/components/site/announcement-bar"
import { SiteNavbar } from "@/components/site/navbar"
import { SiteFooter } from "@/components/site/footer"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://sunshineschool.org.in"),
  title: {
    default: "Sunshine School — An Organisation for Differently-Abled Children",
    template: "%s · Sunshine School",
  },
  description:
    "Sunshine School in Vashi, Navi Mumbai provides personalised, quality education and rehabilitation for children and young adults on the Autism Spectrum and with other developmental disabilities. Since 2006.",
  keywords: [
    "Sunshine School",
    "Sunshine School Vashi",
    "School for differently abled children",
    "Autism school Navi Mumbai",
    "Special education Vashi",
    "ADHD school",
    "Sheltered workshop",
    "special needs education",
    "developmental disabilities",
    "autism spectrum disorder",
    "rehabilitation center Navi Mumbai",
    "vocational training disabled",
    "inclusive education India",
  ],
  authors: [{ name: "Sunshine School", url: "https://sunshineschool.org.in" }],
  creator: "Sunshine School",
  publisher: "Sunshine School",
  category: "Education",
  openGraph: {
    title: "Sunshine School — An Organisation for Differently-Abled Children",
    description:
      "Personalised quality education, therapy and vocational training for children and young adults with autism and other developmental disabilities.",
    url: "https://sunshineschool.org.in",
    siteName: "Sunshine School",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunshine School — An Organisation for Differently-Abled Children",
    description:
      "Personalised quality education, therapy and vocational training for children and young adults with autism and other developmental disabilities. Vashi, Navi Mumbai.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://sunshineschool.org.in",
  },
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Vashi, Navi Mumbai",
  },
}

export const viewport = {
  themeColor: "#FFFFFF",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${instrumentSerif.variable} bg-background scroll-smooth`}
    >
      <body className="font-sans antialiased text-foreground">
        <AnnouncementBar />
        <SiteNavbar />
        <main className="min-h-[60vh]">
          <Suspense>{children}</Suspense>
        </main>
        <SiteFooter />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
