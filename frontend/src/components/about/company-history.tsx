"use client"

import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-reveal"

export function CompanyHistory() {
  const timelineEvents = [
    {
      year: "1998",
      title: "Création de SNTI",
      description: "Fondation de la Société Nouvelle de Tuyauterie Industrielle par des experts du secteur industriel.",
    },
    {
      year: "2005",
      title: "Expansion des activités",
      description:
        "Développement de l'entreprise avec l'ajout de nouveaux services en chaudronnerie et structures métalliques.",
    },
    {
      year: "2010",
      title: "Certification ISO",
      description: "Obtention de certifications qualité reconnues dans le secteur industriel.",
    },
    {
      year: "2015",
      title: "Nouveaux locaux",
      description: "Installation dans de nouveaux locaux plus spacieux à Fameck pour répondre à la croissance.",
    },
    {
      year: "2020",
      title: "Modernisation des équipements",
      description: "Investissement dans des équipements de pointe pour améliorer la qualité et la productivité.",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <h2 className="text-3xl font-bold text-center mb-12">Notre Histoire</h2>
        </ScrollReveal>

        <div className="relative">
          {/* Ligne de la frise */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-emerald-100"></div>

          {/* Événements */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative">
                <ScrollReveal delay={index * 0.1}>
                  <div
                    className={`flex items-center justify-between ${
                      index % 2 === 0 ? "md:pr-[8%]" : "md:flex-row-reverse md:pl-[8%]"
                    }`}
                  >
                    {/* Contenu */}
                    <div className="w-full md:w-full md:max-w-md">
                      <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-emerald-200 transition-all duration-300">
                        <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                        <p className="text-gray-600">{event.description}</p>
                      </div>
                    </div>

                    {/* Année */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                      <motion.div
                        className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold z-10"
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                      >
                        <span className="text-sm">{event.year}</span>
                      </motion.div>
                    </div>

                    {/* Espaceur */}
                    <div className="w-full md:w-full md:max-w-md"></div>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}