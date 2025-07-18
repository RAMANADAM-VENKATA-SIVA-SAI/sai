import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../style.css"
import "./globals.css"
const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ramanadam Venkata Siva Sai - Portfolio",
  description: "Computer Science Graduate | Web Developer | Data Analyst",
    
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
