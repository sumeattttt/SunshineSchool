import { ImageResponse } from "next/og"

export const size = { width: 180, height: 180 }
export const contentType = "image/png"
export const runtime = "edge"

export default function AppleIcon() {
  const rays = Array.from({ length: 12 }).map((_, i) => {
    const angle = (i * Math.PI * 2) / 12
    return {
      x1: 90 + Math.cos(angle) * 49.5,
      y1: 90 + Math.sin(angle) * 49.5,
      x2: 90 + Math.cos(angle) * 76.5,
      y2: 90 + Math.sin(angle) * 76.5,
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
          background: "#FFFDF5",
          borderRadius: "37px",
        }}
      >
        <svg
          viewBox="0 0 180 180"
          width="180"
          height="180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="90" cy="90" r="36" fill="#F5B400" />
          {rays.map((ray, i) => (
            <line
              key={i}
              x1={ray.x1}
              y1={ray.y1}
              x2={ray.x2}
              y2={ray.y2}
              stroke="#C74A2A"
              strokeWidth="11"
              strokeLinecap="round"
            />
          ))}
        </svg>
      </div>
    ),
    { ...size }
  )
}
