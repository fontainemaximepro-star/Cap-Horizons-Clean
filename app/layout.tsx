import type React from "react"
import "./globals.css"

export const metadata = {
  title: "Cap Horizons - Ensemble pour un avenir solidaire & durable",
  description:
    "Ensemble pour un avenir solidaire et durable. Nous créons des liens humains authentiques et construisons un monde plus juste.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
