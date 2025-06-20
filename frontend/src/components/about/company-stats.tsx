"use client"

import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-reveal"

export function CompanyStats() {
  const stats = [
    { value: "25+", label: "Années d'expérience" },
    { value: "500+", label: "Projets réalisés" },
    { value: "50+", label: "Clients fidèles" },
    { value: "12+", label: "Experts qualifiés" },
  ]

  return (
    <section className="py-16 bg-emerald-600 text-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                className="text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-emerald-100">{stat.label}</div>
                </motion.div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
