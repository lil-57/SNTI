"use client"

import { motion } from "framer-motion"

type Props = {
  activeFilter: string
  setActiveFilter: (filter: string) => void
}

export function ProjectsFilter({ activeFilter, setActiveFilter }: Props) {
  const filters = [
    { id: "all", label: "Tous les projets" },
    { id: "Tuyauterie", label: "Tuyauterie" },
    { id: "Chaudronnerie", label: "Chaudronnerie" },
    { id: "Structures", label: "Structures" },
    { id: "Maintenance", label: "Maintenance" },
  ]

  return (
    <section className="py-6 sm:py-8 bg-white">
      <div className="container px-4 sm:px-6">
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id ? "bg-emerald-600 text-white" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  )
}
