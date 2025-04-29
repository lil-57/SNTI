import { HeroSection } from "../components/home/hero-section"
import { ServicesPreview } from "../components/home/services-preview"
import { AboutPreview } from "../components/home/about-preview"
import { ProjectsPreview } from "../components/home/projects-preview"
import { ContactPreview } from "../components/home/contact-preview"
import { CertificationsSection } from "../components/home/certifications-section"

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesPreview />
      <AboutPreview />
      <ProjectsPreview />
      <ContactPreview />
      <CertificationsSection />
    </main>
  )
}
