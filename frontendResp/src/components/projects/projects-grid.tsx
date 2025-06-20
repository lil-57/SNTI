"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ProjectCard } from "@/components/projects/project-card"

type ProjectsGridProps = {
  activeFilter: string
}

const allProjects = [
  {
    title: "Réseau de tuyauterie industrielle",
    category: "Tuyauterie",
    image: "/placeholder.svg?height=300&width=400",
    description: "Installation d'un réseau complet de tuyauterie pour une usine de production chimique.",
    href: "/projects/tuyauterie-industrielle",
  },
  {
    title: "Chaudronnerie sur mesure",
    category: "Chaudronnerie",
    image: "/placeholder.svg?height=300&width=400",
    description: "Fabrication de pièces spécifiques pour un client du secteur énergétique.",
    href: "/projects/chaudronnerie-sur-mesure",
  },
  {
    title: "Structure métallique",
    category: "Structures",
    image: "/placeholder.svg?height=300&width=400",
    description: "Conception et installation d'une structure porteuse pour équipements lourds.",
    href: "/projects/structure-metallique",
  },
  {
    title: "Maintenance préventive",
    category: "Maintenance",
    image: "/placeholder.svg?height=300&width=400",
    description: "Programme de maintenance préventive pour une entreprise agroalimentaire.",
    href: "/projects/maintenance-preventive",
  },
  {
    title: "Tuyauterie haute pression",
    category: "Tuyauterie",
    image: "/placeholder.svg?height=300&width=400",
    description: "Installation de conduites haute pression pour le transport de fluides industriels.",
    href: "/projects/tuyauterie-haute-pression",
  },
  {
    title: "Réservoirs en acier inoxydable",
    category: "Chaudronnerie",
    image: "/placeholder.svg?height=300&width=400",
    description: "Fabrication de réservoirs en acier inoxydable pour l'industrie pharmaceutique.",
    href: "/projects/reservoirs-inox",
  },
  {
    title: "Passerelles industrielles",
    category: "Structures",
    image: "/placeholder.svg?height=300&width=400",
    description: "Conception et installation de passerelles d'accès pour site industriel.",
    href: "/projects/passerelles-industrielles",
  },
  {
    title: "Réparation d'urgence",
    category: "Maintenance",
    image: "/placeholder.svg?height=300&width=400",
    description: "Intervention d'urgence pour réparer une fuite sur un réseau de tuyauterie critique.",
    href: "/projects/reparation-urgence",
  },
  {
    title: "Tuyauterie cryogénique",
    category: "Tuyauterie",
    image: "/placeholder.svg?height=300&width=400",
    description: "Installation de tuyauterie spéciale pour le transport de fluides cryogéniques.",
    href: "/projects/tuyauterie-cryogenique",
  },
]

export function ProjectsGrid({ activeFilter }: ProjectsGridProps) {
  const [visibleCount, setVisibleCount] = useState(6)

  const filteredProjects =
    activeFilter === "all"
      ? allProjects
      : allProjects.filter((project) => project.category.toLowerCase() === activeFilter.toLowerCase())

  const visibleProjects = filteredProjects.slice(0, visibleCount)

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 3) // 3 projets = 1 ligne sur desktop
  }

  useEffect(() => {
    setVisibleCount(6) // reset à 2 lignes quand filtre change
  }, [activeFilter])

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="container px-4 sm:px-6">
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>

        {visibleCount < filteredProjects.length && (
          <ScrollReveal>
            <div className="mt-8 sm:mt-12 text-center">
              <motion.button
                className="px-6 py-3 bg-emerald-600 text-white rounded-full font-medium hover:bg-emerald-700 transition-colors text-sm sm:text-base"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLoadMore}
              >
                Charger plus de projets
              </motion.button>
            </div>
          </ScrollReveal>
        )}
      </div>
    </section>
  )
}
