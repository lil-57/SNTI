"use client"

import { motion } from "framer-motion"
import { Quote } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function ServiceTestimonials() {
  const testimonials = [
    {
      quote:
        "SNTI a réalisé l'installation complète de notre réseau de tuyauterie avec un professionnalisme exemplaire. Nous sommes très satisfaits du résultat.",
      author: "Jean Dupont",
      company: "Industrie Chimique SA",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "La qualité des soudures et la précision du travail de chaudronnerie ont dépassé nos attentes. Une équipe à recommander sans hésitation.",
      author: "Marie Laurent",
      company: "Énergie Plus",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "Nous faisons confiance à SNTI depuis plus de 10 ans pour la maintenance de nos installations. Leur réactivité et leur expertise sont inégalées.",
      author: "Pierre Martin",
      company: "Agroalimentaire Express",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ce que disent nos clients</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              La satisfaction de nos clients est notre meilleure récompense
            </p>
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:border-emerald-200 transition-all duration-300 h-full flex flex-col"
              >
                <div className="mb-4 text-emerald-500">
                  <Quote className="h-8 w-8" />
                </div>
                <p className="text-gray-600 italic mb-6 flex-grow">{testimonial.quote}</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <div className="font-bold">{testimonial.author}</div>
                    <div className="text-sm text-gray-500">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
