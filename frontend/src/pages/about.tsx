import { PageHeader } from "../components/ui/page-header"
import { CompanyHistory } from "../components/about/company-history"
import { CompanyValues } from "../components/about/company-values"
import { CompanyStats } from "../components/about/company-stats"
import { CallToAction } from "../components/ui/call-to-action"

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        title="À Propos de SNTI"
        description="Plus de 25 ans d'expertise en tuyauterie industrielle"
        backgroundPattern="dots"
      />
      <CompanyHistory />
      <CompanyValues />
      <CompanyStats />
      <CallToAction
        title="Envie de travailler avec nous ?"
        description="Découvrez nos opportunités de carrière"
        buttonText="Nous contacter"
        buttonLink="/contact"
      />
    </main>
  )
}
