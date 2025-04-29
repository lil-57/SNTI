import { Link } from "react-router-dom"
import { MapPin, Mail, Phone, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"
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

      <div className="container mx-auto px-4 py-12 md:px-6 md:py-16 relative z-10">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          <motion.div
            className="space-y-4 lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center space-x-2">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8">
                <circle cx="50" cy="50" r="40" fill="#10B981" fillOpacity="0.3" />
                <path d="M50 10L90 80H10L50 10Z" fill="#10B981" stroke="#10B981" strokeWidth="2" />
                <text x="50" y="65" fontFamily="Arial" fontSize="24" fontWeight="bold" fill="white" textAnchor="middle">
                  SNTI
                </text>
              </svg>
              <span className="font-bold">SNTI</span>
            </div>
            <p className="text-gray-400 max-w-xs">
              Société Nouvelle de Tuyauterie Industrielle, experts en tuyauterie, chaudronnerie et structures
              métalliques depuis 1998.
            </p>



            
          </motion.div>

          {footerLinks.map((section, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (i + 1) }}
            >
              <h3 className="mb-4 text-lg font-medium">{section.title}</h3>
              <ul className="space-y-2">
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

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} SNTI - Tous droits réservés</p>
          <div className="text-gray-400 text-sm mt-4 md:mt-0">
            <span>SIRET : 419 514 641 00036</span>
            <span className="mx-2">|</span>
            <span>TVA : FR72419514641</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
