import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "TeaHC Blog - Research & Insights",
  description: "Evidence-based articles exploring the science of cannabinoids, inflammation, and wellness",
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
