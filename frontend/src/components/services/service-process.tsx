"use client"

import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-reveal"

export function ServiceProcess() {
  const steps = [
    {
      number: "01",
      title: "Consultation",
      description: "Nous discutons de vos besoins et exigences spécifiques pour comprendre votre projet.",
    },
    {
      number: "02",
      title: "Étude technique",
      description: "Nos ingénieurs analysent la faisabilité et élaborent une solution technique adaptée.",
    },
    {
      number: "03",
      title: "Proposition",
      description: "Nous vous présentons une proposition détaillée incluant planning et budget.",
    },
    {
      number: "04",
      title: "Réalisation",
      description: "Notre équipe qualifiée met en œuvre la solution avec rigueur et professionnalisme.",
    },
    {
      number: "05",
      title: "Contrôle qualité",
      description: "Nous effectuons des tests rigoureux pour garantir la conformité aux normes.",
    },
    {
      number: "06",
      title: "Livraison",
      description: "Le projet est livré dans les délais convenus avec toute la documentation nécessaire.",
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

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-emerald-200 transition-all duration-300"
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
