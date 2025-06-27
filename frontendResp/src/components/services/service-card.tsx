"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  href: string
  index?: number
  details?: {
    features: string[]
    applications: string[]
    certifications: string[]
  }
}

export function ServiceCard({ title, description, icon, href, index = 0, details }: ServiceCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  // Détails par défaut pour chaque service
  const defaultDetails = {
    Pipeline: {
      features: [
        "Conception et dimensionnement des réseaux",
        "Fabrication de tuyaux et raccords",
        "Installation sur site",
        "Tests d'étanchéité et de pression",
        "Mise en service et commissioning",
      ],
      applications: [
        "Sites industriels de toute nature",
        "Usines de production ou de transformation",
        "Sites sidérurgiques (ex. ArcelorMittal Florange)",
        "Industries papetières (ex. Norske Skog Golbey)",
        "Installations techniques spécifiques sur mesure",
      ],
      
      certifications: [
        "Soudeurs certifiés EN 287",
        "Conformité EN 13480 (tuyauterie industrielle)",
        "Respect des codes ASME",
        "Certification ISO 9001",
      ],
    },
    Flame: {
      features: [
        "Soudage TIG, MIG/MAG, à l'arc",
        "Soudage sur aciers spéciaux et inox",
        "Soudage de précision",
        "Réparations par soudage",
      ],
      applications: [
        "Structures métalliques",
        "Équipements sous pression",
        "Tuyauteries haute température",
        "Maintenance industrielle",
        "Prototypage et réparations",
      ],
      certifications: [
        "Soudeurs qualifiés selon EN ISO 9606",
        "Procédures QMOS certifiées",
        "Contrôle par ressuage et magnétoscopie",
        "Certification EN 1090",
      ],
    },
    Factory: {
      features: [
        "Fabrication de réservoirs et cuves",
        "Usinage de pièces mécaniques",
        "Formage et pliage de tôles",
        "Assemblage et montage",
        "Finitions et traitement de surface",
      ],
      applications: [
        "Équipements pour l'industrie chimique",
        "Réservoirs de stockage",
        "Échangeurs thermiques",
        "Équipements agroalimentaires",
        "Pièces sur mesure",
      ],
      certifications: [
        "Directive Équipements Sous Pression (DESP)",
        "Marquage CE",
        "ISO 3834 (qualité en soudage)",
        "Contrôles par organisme notifié",
      ],
    },
    Building: {
      features: [
        "Conception de structures métalliques",
        "Fabrication de charpentes",
        "Montage et assemblage",
        "Passerelles et plateformes",
        "Supports d'équipements",
      ],
      applications: [
        "Bâtiments industriels",
        "Structures de soutien",
        "Passerelles d'accès",
        "Plateformes de maintenance",
        "Ossatures métalliques",
      ],
      certifications: [
        "Certification EN 1090",
        "Qualification EXC2 et EXC3",
        "Contrôles dimensionnels",
        "Marquage CE obligatoire",
      ],
    },
    Wrench: {
      features: [
        "Maintenance préventive programmée",
        "Interventions correctives d'urgence",
        "Révision d'équipements",
        "Remplacement de pièces",
        "Optimisation des performances",
      ],
      applications: [
        "Maintenance de tuyauteries",
        "Entretien d'équipements sous pression",
        "Maintenance de structures",
        "Révision de vannes et accessoires",
        "Dépannage industriel",
      ],
      certifications: [
        "Techniciens qualifiés",
        "Respect des consignes de sécurité",
        "Interventions selon planning",
        "Traçabilité des interventions",
      ],
    },
    Lock: {
      features: [
        "Fabrication de garde-corps",
        "Escaliers métalliques",
        "Portails et clôtures",
        "Serrurerie décorative",
        "Métallerie fine",
      ],
      applications: [
        "Sécurisation de sites industriels",
        "Aménagements extérieurs",
        "Accès et circulation",
        "Protection d'équipements",
        "Éléments architecturaux",
      ],
      certifications: [
        "Respect des normes NF",
        "Conformité aux règles de sécurité",
        "Finitions anticorrosion",
        "Garantie décennale",
      ],
    },
  }

  const serviceDetails = details || defaultDetails[icon] || defaultDetails["Pipeline"]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (cardRef.current) {
                cardRef.current.style.opacity = "1"
                cardRef.current.style.transform = "translateY(0)"
              }
            }, index * 100)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [index])

  const getIcon = () => {
    switch (icon) {
      case "Pipeline":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 sm:h-8 sm:w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )
      case "Flame":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 sm:h-8 sm:w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            />
          </svg>
        )
      case "Factory":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 sm:h-8 sm:w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 sm:h-8 sm:w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
            />
          </svg>
        )
      case "Wrench":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 sm:h-8 sm:w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        )
      case "Lock":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 sm:h-8 sm:w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
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
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 sm:h-8 sm:w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )
    }
  }

  return (
    <div
      ref={cardRef}
      className="group h-64 sm:h-72" // Hauteur réduite pour mobile
      style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.5s, transform 0.5s" }}
    >
      <div className="relative w-full h-full cursor-pointer" onClick={() => setIsFlipped(!isFlipped)}>
        <motion.div
          className="absolute inset-0 w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: isFlipped ? 180 : 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Face avant (recto) */}
          <div
            className="absolute inset-0 w-full h-full rounded-lg shadow-md border border-gray-200/50 hover:border-emerald-300/50 transition-all duration-300 backdrop-blur-sm bg-white/90"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div className="p-6 h-full flex flex-col justify-between">
              <div>
                <div className="mb-4 relative">
                  <div className="absolute -inset-4 rounded-full bg-emerald-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md"></div>
                  <div className="absolute -inset-3 rounded-full bg-emerald-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 bg-gradient-to-br from-emerald-500 to-teal-500 text-white p-3 rounded-full shadow-lg shadow-emerald-500/20 group-hover:shadow-emerald-500/40 transition-all duration-300 w-fit">
                    {getIcon()}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-emerald-600 text-sm font-medium">Cliquez pour plus de détails</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-emerald-600 transform group-hover:rotate-180 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Face arrière (verso) - Design moderne avec détails complets */}
          <div
            className="absolute inset-0 w-full h-full rounded-lg shadow-xl border-2 border-emerald-400/60 bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-700 text-white"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            {/* Header avec icône et titre */}
            <div className="bg-gradient-to-r from-emerald-800/50 to-teal-800/50 p-4 rounded-t-lg border-b border-emerald-400/30">
              <div className="flex items-center">
                <div className="bg-white/20 backdrop-blur-sm p-2 rounded-full mr-3">{getIcon()}</div>
                <div>
                  <h3 className="text-lg font-bold">{title}</h3>
                  <p className="text-emerald-100 text-sm">Détails du service</p>
                </div>
              </div>
            </div>

            {/* Contenu détaillé avec scroll */}
            <div className="p-4 h-[calc(100%-140px)] overflow-y-auto custom-scrollbar">
              <div className="space-y-4">
                {/* Prestations */}
                <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                  <h4 className="font-semibold text-emerald-100 mb-2 flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Nos prestations
                  </h4>
                  <ul className="space-y-1">
                    {serviceDetails.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-xs text-white/90">
                        <span className="text-emerald-300 mr-2 flex-shrink-0">▸</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Applications */}
                <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                  <h4 className="font-semibold text-emerald-100 mb-2 flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Secteurs d'application
                  </h4>
                  <ul className="space-y-1">
                    {serviceDetails.applications.map((app, idx) => (
                      <li key={idx} className="flex items-start text-xs text-white/90">
                        <span className="text-emerald-300 mr-2 flex-shrink-0">▸</span>
                        <span>{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Certifications */}
                <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm">
                  <h4 className="font-semibold text-emerald-100 mb-2 flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Qualifications & normes
                  </h4>
                  <ul className="space-y-1">
                    {serviceDetails.certifications.map((cert, idx) => (
                      <li key={idx} className="flex items-start text-xs text-white/90">
                        <span className="text-emerald-300 mr-2 flex-shrink-0">▸</span>
                        <span>{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Footer avec CTA */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-emerald-800/80 to-teal-800/80 p-3 rounded-b-lg border-t border-emerald-400/30">
              <div className="flex items-center justify-between">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setIsFlipped(false)
                  }}
                  className="text-emerald-200 hover:text-white text-sm transition-colors flex items-center"
                >
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                  Retour
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
