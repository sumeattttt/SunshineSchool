"use client"

import { Facebook, Instagram, Youtube, Phone } from "lucide-react"

const SOCIAL_ITEMS = [
  {
    label: "WhatsApp Us",
    href: "https://wa.me/918850477964",
    bg: "bg-[#25D366] hover:bg-[#20ba5a]",
    icon: (
      <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/s.w_sunshine18",
    bg: "bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] hover:opacity-90",
    icon: <Instagram className="h-5 w-5 text-white" />,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/sunshinefordifferentlyabled/?ti=as",
    bg: "bg-[#1877F2] hover:bg-[#166fe5]",
    icon: <Facebook className="h-5 w-5 text-white" />,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UC0qUvGlRWfr2CBS7xyihqAw",
    bg: "bg-[#FF0000] hover:bg-[#e60000]",
    icon: <Youtube className="h-5 w-5 text-white" />,
  },
  {
    label: "Call Us",
    href: "tel:+918850477964",
    bg: "bg-[#2563EB] hover:bg-[#1d4ed8]",
    icon: <Phone className="h-5 w-5 text-white" />,
  },
]

export function SocialBar() {
  return (
    <aside
      aria-label="Social media quick links"
      className="fixed right-3 top-1/2 z-50 -translate-y-1/2 flex flex-col gap-2.5"
    >
      {SOCIAL_ITEMS.map((item) => (
        <a
          key={item.label}
          href={item.href}
          target={item.href.startsWith("http") ? "_blank" : undefined}
          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
          aria-label={item.label}
          title={item.label}
          className={`group relative flex h-11 w-11 items-center justify-center rounded-full text-white shadow-lg shadow-black/20 transition-all duration-300 hover:scale-110 hover:shadow-xl ${item.bg}`}
        >
          {item.icon}

          {/* Tooltip on hover */}
          <span className="pointer-events-none absolute right-14 whitespace-nowrap rounded-lg bg-slate-900 px-3 py-1.5 text-xs font-semibold text-white shadow-md opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:-translate-x-1">
            {item.label}
          </span>
        </a>
      ))}
    </aside>
  )
}
