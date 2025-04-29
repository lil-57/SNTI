"use client"

import { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Animate header on mount
  useEffect(() => {
    const header = headerRef.current
    if (header) {
      header.style.transform = "translateY(0)"
    }
  }, [])

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-200/20"
          : "bg-transparent border-transparent"
      }`}
      style={{ transform: "translateY(-100px)", transition: "transform 0.5s" }}
    >
      <div className="container mx-auto flex h-20 items-center px-4 md:px-6">
        <Link to="/" className="mr-6 flex items-center space-x-2">
          <div className="h-10 w-10">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-full">
              <circle cx="50" cy="50" r="40" fill="#10B981" fillOpacity="0.3" />
              <path d="M50 10L90 80H10L50 10Z" fill="#10B981" stroke="#10B981" strokeWidth="2" />
              <path
                d="M50 10L50 25M30 45H15M85 45H70M40 80H60"
                stroke="#ffffff"
                strokeWidth="1"
                strokeDasharray="3,3"
              />
              <circle cx="50" cy="25" r="2" fill="#ffffff" />
              <circle cx="15" cy="45" r="2" fill="#ffffff" />
              <circle cx="85" cy="45" r="2" fill="#ffffff" />
              <text x="50" y="65" fontFamily="Arial" fontSize="24" fontWeight="bold" fill="white" textAnchor="middle">
                SNTI
              </text>
            </svg>
          </div>
          <span className="hidden font-bold text-lg sm:inline-block">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-500">SNTI</span>
          </span>
        </Link>

        <nav className="hidden md:flex flex-1 items-center space-x-1">
          {[
            { to: "/", label: "Accueil" },
            { to: "/services", label: "Services" },
            { to: "/about", label: "À propos" },
            { to: "/projects", label: "Réalisations" },
            { to: "/contact", label: "Contact" },
          ].map((item, index) => (
            <Link
              key={index}
              to={item.to}
              className={`relative px-3 py-2 text-sm font-medium rounded-full transition-colors text-gray-700 hover:text-emerald-600 hover:bg-gray-100/50`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center space-x-4 ml-auto">
          <div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-emerald-200 bg-white px-4 py-2 text-sm font-medium text-emerald-900 hover:bg-gray-100 hover:border-emerald-300 transition-colors"
            >
              Nous contacter
            </Link>
          </div>
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full opacity-75 blur-sm group-hover:opacity-100 transition duration-200"></div>
            <Link
              to="/contact"
              className="relative inline-flex items-center justify-center rounded-full bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 transition-colors"
            >
              Demander un devis
            </Link>
          </div>
        </div>

        <button
          className="md:hidden ml-auto rounded-full p-2 text-gray-700 hover:bg-gray-100"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <span className="sr-only">Menu</span>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-xl border-t border-gray-200/20 shadow-lg">
          <div className="container mx-auto py-4 px-4 space-y-4">
          {[
  { to: "/", label: "Accueil" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "À propos" },
  { to: "/projects", label: "Réalisations" },
  { to: "/contact", label: "Contact" }
].map((item, index) => (
  <Link
    key={index}
    to={item.to}
    className="block text-lg font-medium transition-colors hover:text-emerald-600"
    onClick={() => setIsOpen(false)}
  >
    {item.label}
  </Link>
))}

            <div className="pt-4 space-y-2">
              <Link
                to="/contact"
                className="block w-full text-center rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                Nous contacter
              </Link>
              <div className="relative group w-full">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full opacity-75 blur-sm group-hover:opacity-100 transition duration-200"></div>
                <Link
                  to="/contact"
                  className="relative block w-full text-center rounded-full bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
                  onClick={() => setIsOpen(false)}
                >
                  Demander un devis
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
