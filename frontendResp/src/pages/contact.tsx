import { PageHeader } from "../components/ui/page-header"
import { ContactForm } from "../components/contact/contact-form"
import { ContactInfo } from "../components/contact/contact-info"
import { ContactMap } from "../components/contact/contact-map"

export default function ContactPage() {
  return (
    <main>
      <PageHeader
        title="Contactez-nous"
        description="Besoin d'informations ? Nous sommes à votre écoute"
        backgroundPattern="circles"
      />
      <div className="container mx-auto grid gap-8 lg:gap-12 lg:grid-cols-2 py-12 sm:py-16 px-4 sm:px-6">
        <ContactInfo />
        <ContactForm />
      </div>
      <ContactMap />
    </main>
  )
}
