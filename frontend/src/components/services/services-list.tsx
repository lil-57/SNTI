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
    /*{
      title: "Maintenance industrielle",
      description:
        "Services de maintenance préventive et corrective pour assurer la pérennité des installations. Interventions rapides et efficaces.",
      icon: "Wrench",
      href: "/services#maintenance",
    }
    */
    {
      title: "Serrurerie",
      description:
        "Travaux de serrurerie industrielle et métallerie pour vos projets. Fabrication de garde-corps, escaliers et autres éléments métalliques.",
      icon: "Lock",
      href: "/services#serrurerie",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <p className="text-gray-600 max-w-2xl mx-auto">
              SNTI vous propose une gamme complète de services adaptés à vos besoins industriels
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
      </div>
    </section>
  )
}
