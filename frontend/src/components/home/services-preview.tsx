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
    description: "Interventions sur acier, inox et autres matériaux selon les normes en vigueur.",
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
    title: "Maintenance industrielle",
    description: "Services de maintenance préventive et corrective pour assurer la pérennité des installations.",
    icon: "Wrench",
    href: "/services#maintenance",
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
    <section id="services" className="py-20 bg-white relative">
      <div className="container px-4 md:px-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-block bg-emerald-100 text-emerald-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
            Nos Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Solutions industrielles complètes</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            SNTI vous propose une gamme complète de services adaptés à vos besoins industriels
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
  className="mt-12 text-center"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.5, delay: 0.3 }}
>
  <Button
    asChild
    variant="outline"
    className="rounded-full inline-flex items-center justify-center px-6 py-3 text-base"
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
