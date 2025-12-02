import type React from "react"
import type { Metadata } from "next"
import { Rubik } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"

const rubik = Rubik({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Access Innovation Page (AIP) | Bowie State University",
  description: "Technology Transfer and Innovation Office (TTIO) at Bowie State University",
  icons: {
    icon: "/bsu-anniversary-logo.png",
    shortcut: "/bsu-anniversary-logo.png",
    apple: "/bsu-anniversary-logo.png",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={rubik.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
