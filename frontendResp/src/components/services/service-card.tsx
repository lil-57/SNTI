"use client"

import { useState } from "react"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  href: string
  index?: number
}

export function ServiceCard({ title, description, icon, href, index = 0 }: ServiceCardProps) {
  const [showDetails, setShowDetails] = useState(false)

  const getIcon = () => {
    switch (icon) {
      case "Pipeline":
        return (
          <svg className="h-6 w-6 sm:h-8 sm:w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )
      case "Flame":
        return (
          <svg className="h-6 w-6 sm:h-8 sm:w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
          </svg>
        )
      case "Factory":
        return (
          <svg className="h-6 w-6 sm:h-8 sm:w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
        )
      case "Building":
        return (
          <svg className="h-6 w-6 sm:h-8 sm:w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
        )
      case "Lock":
        return (
          <svg className="h-6 w-6 sm:h-8 sm:w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            />
          </svg>
        )
      default:
        return (
          <svg className="h-6 w-6 sm:h-8 sm:w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )
    }
  }

  return (
    <div className="group h-auto">
      <div className="rounded-lg shadow-md border border-gray-200/50 hover:border-emerald-300/50 transition-all duration-300 backdrop-blur-sm bg-white/90 hover:bg-white/95 hover:shadow-lg">
        <div className="p-6">
          <div className="mb-4">
            <div className="bg-gradient-to-br from-emerald-500 to-teal-500 text-white p-3 rounded-full shadow-lg w-fit transition-transform hover:scale-105">
              {getIcon()}
            </div>
          </div>
          <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-emerald-600 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">{description}</p>


        </div>
      </div>
    </div>
  )
}


/* details pour la case service, mais non utilisé pour l'instant

          <button
            onClick={() => setShowDetails(!showDetails)}
            className="text-emerald-600 text-sm font-medium hover:text-emerald-700 transition-colors flex items-center"
          >
            {showDetails ? "Masquer les détails" : "Voir les détails"}
            <svg
              className={`ml-1 h-4 w-4 transition-transform ${showDetails ? "rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
         {showDetails && (
            <div className="mt-4 pt-4 border-t border-gray-100 space-y-3 text-sm">
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Nos prestations :</h4>
                <p className="text-gray-600">
                  Conception, fabrication, installation et maintenance selon vos besoins spécifiques.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-1">Secteurs :</h4>
                <p className="text-gray-600">Industrie, énergie, agroalimentaire, chimie et bien d'autres.</p>
              </div>
            </div>
          )}
*/