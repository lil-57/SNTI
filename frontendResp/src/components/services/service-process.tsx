"use client"

import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-reveal"

export function ServiceProcess() {
  const steps = [
    {
      number: "01",
      title: "Consultation",
      description: "Premier échange pour comprendre les besoins du client et le contexte du projet.",
    },
    {
      number: "02",
      title: "Chiffrage",
      description: "Évaluation du coût : matériel nécessaire, temps de main d’œuvre estimé, déplacements éventuels.",
    },
    {
      number: "03",
      title: "Validation du devis",
      description: "Accord du client sur la proposition commerciale et planification de l’intervention.",
    },
    {
      number: "04",
      title: "Mode opératoire",
      description: "Rédaction du déroulé technique prévu : étapes de travail, sécurité, moyens mis en œuvre.",
    },
    {
      number: "05",
      title: "Validation du mode opératoire",
      description: "Relecture et approbation du document par le client avant toute intervention.",
    },
    {
      number: "06",
      title: "Réalisation du chantier",
      description: "Intervention de l’équipe sur site, selon le planning et les consignes établies.",
    },
    {
      number: "07",
      title: "Contrôle client",
      description: "Vérification de la conformité du travail par le client en fin de chantier.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Notre Processus</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Une approche méthodique pour garantir la réussite de chaque projet
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="h-full flex flex-col justify-between bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-emerald-200 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="text-4xl font-bold text-emerald-600 opacity-50">{step.number}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
