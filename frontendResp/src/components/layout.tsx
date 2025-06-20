import type { ReactNode } from "react"
import { Header } from "./layout/header"
import { Footer } from "./layout/footer"
import { BackgroundEffect } from "./backgrounds/background-effect"

interface LayoutProps {
  children: ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen flex flex-col">
      <BackgroundEffect />
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  )
}
