"use client"


import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"

interface CallToActionProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
}

export function CallToAction({ title, description, buttonText, buttonLink }: CallToActionProps) {
  return (
    <section className="py-16 md:py-24 bg-emerald-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(16,185,129,0.1),transparent_50%)]"></div>

      <motion.div
        className="container px-4 md:px-6 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold tracking-tight mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            {title}
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {description}
          </motion.p>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
  <Button
    asChild
    className="bg-emerald-600 hover:bg-emerald-700 rounded-full px-8 py-6 text-base inline-flex items-center justify-center"
  >
    <Link to={buttonLink} className="flex items-center whitespace-nowrap">
      {buttonText}
      <ArrowRight className="ml-2 h-4 w-4" />
    </Link>
  </Button>
</motion.div>


        </div>
      </motion.div>
    </section>
  )
}
