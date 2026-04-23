import { ImageResponse } from "next/og"

export const size = { width: 48, height: 48 }
export const contentType = "image/png"
export const runtime = "edge"

export default function Icon() {
  // Pre-compute ray coordinates (same logic as logo.tsx)
  const rays = Array.from({ length: 12 }).map((_, i) => {
    const angle = (i * Math.PI * 2) / 12
    return {
      x1: 24 + Math.cos(angle) * 13.2,
      y1: 24 + Math.sin(angle) * 13.2,
      x2: 24 + Math.cos(angle) * 20.4,
      y2: 24 + Math.sin(angle) * 20.4,
    }
  })

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
        }}
      >
        <svg
          viewBox="0 0 48 48"
          width="48"
          height="48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="24" cy="24" r="9.6" fill="#F5B400" />
          {rays.map((ray, i) => (
            <line
              key={i}
              x1={ray.x1}
              y1={ray.y1}
              x2={ray.x2}
              y2={ray.y2}
              stroke="#C74A2A"
              strokeWidth="3"
              strokeLinecap="round"
            />
          ))}
        </svg>
      </div>
    ),
    { ...size }
  )
}
