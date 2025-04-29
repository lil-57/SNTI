import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { PageHeader } from "../components/ui/page-header"
import { ServicesList } from "../components/services/services-list"
import { ServiceProcess } from "../components/services/service-process"
import { ServiceTestimonials } from "../components/services/service-testimonials"
import { CallToAction } from "../components/ui/call-to-action"

export default function ServicesPage() {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash)
      if (element) {
        // scroll même si on est déjà sur la page
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "center" })

        }, 100)
      }
    } else {
      // remonte en haut si pas de hash
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }, [location])
  

  return (
    <main>
      <PageHeader
        title="Nos Services"
        description="Solutions industrielles complètes pour vos projets"
        backgroundPattern="grid"
      />
      <ServicesList />
      <ServiceProcess />
      <ServiceTestimonials />
      <CallToAction
        title="Besoin d'un service spécifique ?"
        description="Contactez-nous pour discuter de votre projet"
        buttonText="Demander un devis"
        buttonLink="/contact"
      />
    </main>
  )
}
