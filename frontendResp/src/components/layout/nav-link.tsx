"use client"

import type React from "react"

import { Link } from "react-router-dom"
import { motion } from "framer-motion"

interface NavLinkProps {
  href: string
  children: React.ReactNode
  isActive: boolean
  delay?: number
}

export function NavLink({ href, children, isActive, delay = 0 }: NavLinkProps) {
  return (
    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay }}>
      <Link
        to={href}
        className={`relative px-3 py-2 text-sm font-medium rounded-full transition-colors ${
          isActive ? "text-emerald-600" : "text-gray-700 hover:text-emerald-600 hover:bg-gray-100/50"
        }`}
      >
        {children}
        {isActive && (
          <motion.span
            className="absolute bottom-0 left-0 right-0 h-0.5 bg-emerald-600 mx-3"
            layoutId="activeNavIndicator"
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
      </Link>
    </motion.div>
  )
}
