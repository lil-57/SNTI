import { useState } from "react"
import { PageHeader } from "../components/ui/page-header"
import { ProjectsFilter } from "../components/projects/projects-filter"
import { ProjectsGrid } from "../components/projects/projects-grid"
import { ProjectsProcess } from "../components/projects/projects-process"
import { CallToAction } from "../components/ui/call-to-action"

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("all")

  return (
    <main>
      <PageHeader
        title="Nos Réalisations"
        description="Découvrez nos projets récents dans différents secteurs industriels"
        backgroundPattern="triangles"
      />
      <ProjectsFilter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <ProjectsGrid activeFilter={activeFilter} />
      <ProjectsProcess />
      <CallToAction
        title="Un projet en tête ?"
        description="Parlons-en ensemble"
        buttonText="Demander un devis"
        buttonLink="/contact"
      />
    </main>
  )
}
