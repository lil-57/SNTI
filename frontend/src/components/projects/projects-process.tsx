"use client"

import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-reveal"

export function ProjectsProcess() {
  const process = [
    {
      title: "Analyse des besoins",
      description:
        "Nous commençons par une analyse approfondie de vos besoins pour comprendre les spécificités de votre projet.",
      icon: "🔍",
    },
    {
      title: "Conception technique",
      description:
        "Nos ingénieurs élaborent une solution technique adaptée à vos contraintes et aux normes en vigueur.",
      icon: "📐",
    },
    {
      title: "Fabrication",
      description: "Nous fabriquons les éléments nécessaires dans nos ateliers avec un contrôle qualité rigoureux.",
      icon: "🏭",
    },
    {
      title: "Installation",
      description:
        "Nos équipes qualifiées procèdent à l'installation sur site en respectant les délais et les normes de sécurité.",
      icon: "🔧",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Notre Approche de Projet</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une méthodologie éprouvée pour garantir la réussite de chaque réalisation
            </p>
          </div>
        </ScrollReveal>

        <div className="relative">
          {/* Process line */}
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

                  {/* Step number */}
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
