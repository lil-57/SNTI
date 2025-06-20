"use client"

import { motion } from "framer-motion"

interface PageHeaderProps {
  title: string
  description: string
  backgroundPattern?: "dots" | "grid" | "triangles" | "waves" | "circles"
}

export function PageHeader({ title, description, backgroundPattern = "dots" }: PageHeaderProps) {
  return (
    <section className="relative py-12 sm:py-16 lg:py-24 overflow-hidden bg-gray-900 text-white">
      <div className="absolute inset-0 opacity-10">
        {backgroundPattern === "dots" && (
          <div
            className="absolute inset-0"
            style={{ backgroundImage: "radial-gradient(#fff 1px, transparent 1px)", backgroundSize: "30px 30px" }}
          ></div>
        )}
        {backgroundPattern === "grid" && (
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, #ffffff20 1px, transparent 1px), linear-gradient(to bottom, #ffffff20 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          ></div>
        )}
        {backgroundPattern === "triangles" && (
          <div className="absolute inset-0 bg-[url('/patterns/triangles.svg')] bg-repeat bg-[length:60px_60px]"></div>
        )}
        {backgroundPattern === "waves" && (
          <div className="absolute inset-0 bg-[url('/patterns/waves.svg')] bg-repeat bg-[length:100px_100px]"></div>
        )}
        {backgroundPattern === "circles" && (
          <div className="absolute inset-0 bg-[url('/patterns/circles.svg')] bg-repeat bg-[length:80px_80px]"></div>
        )}
      </div>

      <div className="container relative z-10 px-4 sm:px-6">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="text-2xl sm:text-3xl lg:text-5xl font-bold tracking-tight mb-3 sm:mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {description}
          </motion.p>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  )
}
