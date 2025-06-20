"use client"

import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ServiceCard } from "@/components/services/service-card"

const services = [
  {
    title: "Tuyauterie industrielle",
    description: "Conception, fabrication et installation de réseaux de tuyauterie pour divers fluides.",
    icon: "Pipeline",
    href: "/services#tuyauterie",
  },
  {
    title: "Soudure spécialisée",
    description: "Soudure sur acier, inox et alliages pour l'assemblage de structures et d'équipements industriels.",
    icon: "Flame",
    href: "/services#soudure",
  },
  {
    title: "Chaudronnerie",
    description: "Réalisation de pièces sur mesure pour des applications industrielles spécifiques.",
    icon: "Factory",
    href: "/services#chaudronnerie",
  },
  {
    title: "Structures métalliques",
    description: "Fabrication et montage de structures adaptées aux besoins des clients.",
    icon: "Building",
    href: "/services#structures",
  },
  {
    title: "Serrurerie",
    description: "Travaux de serrurerie industrielle et métallerie pour vos projets.",
    icon: "Lock",
    href: "/services#serrurerie",
  },
]

export function ServicesPreview() {
  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white relative">
      <div className="container px-4 sm:px-6">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block bg-emerald-100 text-emerald-700 text-xs sm:text-sm font-medium px-3 py-1 rounded-full mb-3 sm:mb-4">
            Nos Services
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3 sm:mb-4">
            Solutions industrielles complètes
          </h2>
          <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
            SNTI vous propose une gamme complète de services adaptés à vos besoins industriels
          </p>
        </motion.div>

        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href={service.href}
              index={index}
            />
          ))}
        </div>

        <motion.div
          className="mt-8 sm:mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button
            asChild
            variant="outline"
            className="rounded-full inline-flex items-center justify-center px-6 py-3 text-sm sm:text-base"
          >
            <Link to="/services" className="flex items-center whitespace-nowrap">
              Tous nos services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
