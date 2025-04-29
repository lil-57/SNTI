"use client"

import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/projects/project-card"

const projects = [
  {
    title: "Réseau de tuyauterie industrielle",
    category: "Tuyauterie",
    image: "/images/tuyaux.jpg",
    description: "Installation d'un réseau complet de tuyauterie pour une usine de production.",
    href: "/projects/tuyauterie-industrielle",
  },
  {
    title: "Chaudronnerie sur mesure",
    category: "Chaudronnerie",
    image: "/images/rembarde.webp",
    description: "Fabrication de pièces spécifiques pour un client du secteur énergétique.",
    href: "/projects/chaudronnerie-sur-mesure",
  },
  {
    title: "Structure métallique",
    category: "Structures",
    image: "/images/support.avif",
    description: "Conception et installation d'une structure porteuse pour équipements lourds.",
    href: "/projects/structure-metallique",
  },
]

export function ProjectsPreview() {
  return (
    <section id="projects" className="py-20 bg-white relative">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block bg-emerald-100 text-emerald-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
            Nos Réalisations
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Projets récents</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Découvrez quelques-unes de nos réalisations récentes dans différents secteurs industriels
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                category={project.category}
                image={project.image}
                description={project.description}
                href={project.href}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        <motion.div
  className="mt-12 text-center"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.3 }}
>
  <Button asChild variant="outline" className="rounded-full">
    <Link to="/projects" className="inline-flex items-center">
      Tous nos projets <ArrowRight className="ml-2 h-4 w-4" />
    </Link>
  </Button>
</motion.div>

      </div>
    </section>
  )
}
