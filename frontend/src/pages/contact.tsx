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
      <div className="container mx-auto grid md:grid-cols-2 gap-12 py-16 px-4 md:px-6">
        <ContactInfo />
        <ContactForm />
      </div>
      <ContactMap />
    </main>
  )
}
