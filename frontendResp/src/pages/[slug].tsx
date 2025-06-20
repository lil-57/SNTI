import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const projectData = {
  "tuyauterie-industrielle": {
    title: "Tuyauterie industrielle",
    description: "Détails sur les projets de tuyauterie industrielle réalisés par SNTI.",
  },
  "structures-metalliques": {
    title: "Structures métalliques",
    description: "Projets de fabrication et de montage de structures métalliques.",
  },
  // Ajoute ici d'autres projets si besoin
}

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? projectData[slug] : null

  if (!project) {
    return <div className="p-10 text-center text-red-600">Projet introuvable.</div>
  }

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
      <p className="text-lg text-gray-700">{project.description}</p>
    </div>
  )
}
