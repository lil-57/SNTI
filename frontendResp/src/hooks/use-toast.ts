import { useState } from "react"
import type * as React from "react"

// Définition du toast affichable
export type ToastInput = {
  title: string
  description?: string
  duration?: number
}

export type ToastWithId = ToastInput & {
  id: string
  open: boolean
}

export function useToast() {
  const [toasts, setToasts] = useState<ToastWithId[]>([])

  const toast = (props: ToastInput) => {
    const id = Math.random().toString(36).substring(2, 9)
    const newToast: ToastWithId = {
      ...props,
      id,
      open: true,
    }

    setToasts((prevToasts) => [...prevToasts, newToast])

    setTimeout(() => {
      dismiss(id)
    }, props.duration || 3000)

    return id
  }

  const dismiss = (id: string) => {
    setToasts((prevToasts) =>
      prevToasts.map((t) => (t.id === id ? { ...t, open: false } : t))
    )
    setTimeout(() => {
      setToasts((prevToasts) => prevToasts.filter((t) => t.id !== id))
    }, 300)
  }

  return { toast, dismiss, toasts }
}
