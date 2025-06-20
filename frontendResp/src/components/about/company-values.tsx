"use client"

import { motion } from "framer-motion"
import { Award, Heart, Lightbulb, Shield, Users } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function CompanyValues() {
  const values = [
    {
      icon: Shield,
      title: "Sécurité",
      description: "La sécurité est notre priorité absolue, tant pour nos équipes que pour nos clients.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque projet, avec un souci constant du détail et de la qualité.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description:
        "Nous travaillons en étroite collaboration avec nos clients pour répondre à leurs besoins spécifiques.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Nous recherchons constamment de nouvelles solutions pour améliorer nos services et processus.",
    },
    {
      icon: Heart,
      title: "Engagement",
      description: "Nous sommes engagés envers nos clients, nos employés et l'environnement.",
    },
  ]

  return (
    <section className="py-12 sm:py-16 bg-gray-50">
      <div className="container px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">Nos Valeurs</h2>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
              Ces valeurs fondamentales guident nos actions quotidiennes et définissent notre culture d'entreprise
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-white p-4 sm:p-6 rounded-lg shadow-md border border-gray-100 hover:border-emerald-200 transition-all duration-300"
              >
                <div className="mb-3 sm:mb-4 p-2 sm:p-3 rounded-full bg-emerald-100 inline-block">
                  <value.icon className="h-5 w-5 sm:h-6 sm:w-6 text-emerald-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{value.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
