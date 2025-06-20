"use client"

import { Link } from "react-router-dom"
import { motion } from "framer-motion"

export function Footer() {
  const footerLinks = [
    {
      title: "Pages",
      links: [
        { to: "/", label: "Accueil" },
        { to: "/services", label: "Services" },
        { to: "/about", label: "À propos" },
        { to: "/projects", label: "Réalisations" },
        { to: "/contact", label: "Contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { to: "/services#tuyauterie", label: "Tuyauterie industrielle" },
        { to: "/services#soudure", label: "Soudure spécialisée" },
        { to: "/services#chaudronnerie", label: "Chaudronnerie" },
        { to: "/services#structures", label: "Structures métalliques" },
        { to: "/services#maintenance", label: "Maintenance industrielle" },
      ],
    },
    {
      title: "Légal",
      links: [
        { to: "/legal/mentions-legales", label: "Mentions légales" },
        { to: "/legal/politique-confidentialite", label: "Politique de confidentialité" },
        { to: "/legal/cgv", label: "CGV" },
      ],
    },
  ]

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.1),transparent_50%)]" />

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16 relative z-10">
        <div className="grid gap-6 sm:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
          <motion.div
            className="space-y-4 sm:col-span-2 lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-2">
              <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 sm:h-8 sm:w-8"
              >
                <circle cx="50" cy="50" r="40" fill="#10B981" fillOpacity="0.3" />
                <path d="M50 10L90 80H10L50 10Z" fill="#10B981" stroke="#10B981" strokeWidth="2" />
                <text x="50" y="65" fontFamily="Arial" fontSize="24" fontWeight="bold" fill="white" textAnchor="middle">
                  SNTI
                </text>
              </svg>
              <span className="font-bold text-base sm:text-lg">SNTI</span>
            </div>
            <p className="text-gray-400 text-sm sm:text-base max-w-xs">
              Société Nouvelle de Tuyauterie Industrielle, experts en tuyauterie, chaudronnerie et structures
              métalliques depuis 1998.
            </p>
          </motion.div>

          {footerLinks.map((section, i) => (
            <motion.div
              key={i}
              className="sm:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
            >
              <h3 className="mb-3 sm:mb-4 text-base sm:text-lg font-medium">{section.title}</h3>
              <ul className="space-y-1 sm:space-y-2">
                {section.links.map((link, j) => (
                  <li key={j}>
                    <Link to={link.to} className="text-gray-400 hover:text-white transition-colors text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <p className="text-gray-400 text-xs sm:text-sm text-center sm:text-left">
            © {new Date().getFullYear()} SNTI - Tous droits réservés
          </p>
          <div className="text-gray-400 text-xs sm:text-sm text-center sm:text-right">
            <span>SIRET : 419 514 641 00036</span>
            <span className="mx-2 hidden sm:inline">|</span>
            <span className="block sm:inline mt-1 sm:mt-0">TVA : FR72419514641</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
