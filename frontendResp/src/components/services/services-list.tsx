"use client"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ServiceCard } from "@/components/services/service-card"

export function ServicesList() {
  const services = [
    {
      title: "Tuyauterie industrielle",
      description:
        "Conception, fabrication et installation de réseaux de tuyauterie pour divers fluides. Nous intervenons dans tous les secteurs industriels avec une expertise reconnue.",
      icon: "Pipeline",
      href: "/services#tuyauterie",
    },
    {
      title: "Soudure spécialisée",
      description:
        "Interventions sur acier, inox et autres matériaux selon les normes en vigueur. Nos soudeurs qualifiés garantissent des soudures de haute qualité.",
      icon: "Flame",
      href: "/services#soudure",
    },
    {
      title: "Chaudronnerie",
      description:
        "Réalisation de pièces sur mesure pour des applications industrielles spécifiques. Fabrication de réservoirs, cuves, et autres équipements.",
      icon: "Factory",
      href: "/services#chaudronnerie",
    },
    {
      title: "Structures métalliques",
      description:
        "Fabrication et montage de structures adaptées aux besoins des clients. Conception et installation de passerelles, plateformes et supports.",
      icon: "Building",
      href: "/services#structures",
    },
    {
      title: "Serrurerie",
      description:
        "Travaux de serrurerie industrielle et métallerie pour vos projets. Fabrication de garde-corps, escaliers et autres éléments métalliques.",
      icon: "Lock",
      href: "/services#serrurerie",
    },
  ]

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="container px-4 sm:px-6">
        <ScrollReveal>
          <div className="text-center mb-8 sm:mb-12">
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
              SNTI vous propose une gamme complète de services adaptés à vos besoins industriels
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} id={service.href.split("#")[1]}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
                href={service.href}
                index={index}
              />
            </div>
          ))}
        </div>
        <ScrollReveal>
          <div className="text-center mt-8 sm:mt-12">
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto px-4">
            Tous nos services sont réalisés sur mesure, de la conception à l’installation, pour tous types de secteurs.
            </p>
          </div>
          </ScrollReveal>
      </div>
    </section>
  )
}
