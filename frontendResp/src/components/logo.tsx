"use client"

import { motion, SVGMotionProps } from "framer-motion"

export function Logo(props: SVGMotionProps<SVGSVGElement>) {
  return (
    <motion.svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      <motion.path
        d="M50 10L90 80H10L50 10Z"
        fill="#10B981"
        stroke="#10B981"
        strokeWidth="2"
        initial={{ opacity: 0, pathLength: 0 }}
        animate={{ opacity: 1, pathLength: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      />
      <motion.text
        x="50"
        y="65"
        fontFamily="Arial"
        fontSize="24"
        fontWeight="bold"
        fill="white"
        textAnchor="middle"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        SNTI
      </motion.text>
    </motion.svg>
  )
}
