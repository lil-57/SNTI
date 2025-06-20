"use client"

import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-reveal"

export function ProjectsProcess() {
  const process = [
    {
      title: "Analyse technique",
      description:
        "Étude du cahier des charges et des contraintes du site afin de proposer une solution adaptée et sécurisée.",
      icon: "🔍",
    },
    {
      title: "Conception",
      description:
        "Modélisation des structures, choix des matériaux et définition des plans d’exécution selon les normes en vigueur.",
      icon: "📐",
    },
    {
      title: "Fabrication atelier",
      description:
        "Réalisation des éléments sur mesure en chaudronnerie, serrurerie ou tuyauterie dans nos ateliers.",
      icon: "🏭",
    },
    {
      title: "Installation sur site",
      description:
        "Pose, raccordement et mise en service sur site dans le respect des délais, consignes de sécurité et procédures qualité.",
      icon: "🔧",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Approche technique des projets</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une démarche structurée pour garantir la qualité des interventions, de l’étude à la mise en service.
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Ligne horizontale sur desktop */}
          <div className="absolute top-1/4 left-0 right-0 h-1 bg-emerald-100 hidden md:block"></div>

          <div className="grid gap-8 md:grid-cols-4">
            {process.map((step, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-emerald-200 transition-all duration-300 relative"
                >
                  <div className="text-4xl mb-4">{step.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>

                  <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
