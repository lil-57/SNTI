import { useParams } from "react-router-dom"

const ProjectDetailPage = () => {
  const { slug } = useParams()

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-4">Projet : {slug}</h1>
      <p>Ici s’affichera le contenu du projet : {slug}</p>
    </div>
  )
}

export default ProjectDetailPage
