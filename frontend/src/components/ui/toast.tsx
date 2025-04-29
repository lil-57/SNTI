import type { ReactNode } from "react"

export type ToastProps = {
  id: string
  title: string
  description?: ReactNode
  action?: ToastActionElement
  duration?: number
  onClose?: () => void
}

export type ToastActionElement = ReactNode
