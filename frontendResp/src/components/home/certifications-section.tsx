"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"

const certifications = [
  {
    title: "Qualité",
    description: "Nos processus respectent les normes de qualité.",
  },
  {
    title: "Sécurité",
    description: "La sécurité est notre priorité absolue sur tous nos chantiers et dans nos ateliers.",
  },
  {
    title: "Environnement",
    description: "Nous nous engageons à minimiser l'impact environnemental de nos activités.",
  },
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-12 sm:py-16 lg:py-20 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(16,185,129,0.15),transparent_60%)]"></div>

      <div className="container px-4 sm:px-6 relative z-10">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block bg-emerald-700 text-white text-xs sm:text-sm font-medium px-3 py-1 rounded-full mb-3 sm:mb-4">
            Nos Engagements
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
            Certifications et qualité
          </h2>
          <p className="text-sm sm:text-base text-gray-300 max-w-2xl mx-auto px-4">
            SNTI s&apos;engage à respecter les normes les plus strictes en matière de qualité, sécurité et environnement
          </p>
        </motion.div>

        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
            >
              <Card className="bg-gray-800 border-gray-700 h-full">
                <CardContent className="p-4 sm:p-6 flex flex-col items-center text-center">
                  <motion.div
                    className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-emerald-600 flex items-center justify-center mb-3 sm:mb-4"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                  </motion.div>
                  <h3 className="text-lg sm:text-xl font-bold text-white">{cert.title}</h3>
                  <p className="text-gray-300 mt-2 text-sm sm:text-base">{cert.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
