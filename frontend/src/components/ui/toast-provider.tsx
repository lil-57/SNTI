"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type ToastProps = {
  id: string
  title: string
  description?: string
}

type ToastContextType = {
  toast: (props: { title: string; description?: string }) => string
  dismiss: (id: string) => void
}

const ToastContext = createContext<ToastContextType | undefined>(undefined)

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<ToastProps[]>([])

  const toast = ({ title, description }: { title: string; description?: string }) => {
    const id = Math.random().toString(36).substring(2, 9)
    setToasts((prev) => [...prev, { id, title, description }])
    return id
  }

  const dismiss = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }

  return (
    <ToastContext.Provider value={{ toast, dismiss }}>
      {children}
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="fixed bottom-4 right-4 max-w-md bg-white rounded-lg shadow-lg border border-gray-200 p-4 transition-all duration-300 transform"
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="font-medium text-gray-900">{toast.title}</h3>
              {toast.description && <p className="mt-1 text-sm text-gray-500">{toast.description}</p>}
            </div>
            <button onClick={() => dismiss(toast.id)} className="ml-4 text-gray-400 hover:text-gray-500">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      ))}
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider")
  }
  return context
}
