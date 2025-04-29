"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Globe } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"

export function ContactInfo() {
  const contactDetails = [
    {
      icon: MapPin,
      title: "Adresse",
      content: "5 Boucle des Dinandiers, 57290 Fameck, France",
    },
    {
      icon: Phone,
      title: "Téléphone",
      content: "03 82 84 01 01",
    },
    {
      icon: Mail,
      title: "Email",
      content: "sn.ti@wanadoo.fr",
    },
    {
      icon: Clock,
      title: "Horaires d'ouverture",
      content: "Lundi - Vendredi: 8h00 - 17h00",
    },
    {
      icon: Globe,
      title: "Zone d'intervention",
      content: "Grand Est, France, Luxembourg, Belgique",
    },
  ]

  return (
    <ScrollReveal>
      <div className="space-y-6">
        <h2 className="text-2xl font-bold mb-6">Nos Coordonnées</h2>

        <div className="space-y-4">
          {contactDetails.map((detail, index) => (
            <motion.div
              key={index}
              className="flex items-start space-x-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <div className="bg-emerald-100 p-3 rounded-full">
                <detail.icon className="h-5 w-5 text-emerald-600" />
              </div>
              <div>
                <h3 className="font-medium">{detail.title}</h3>
                <p className="text-gray-600">{detail.content}</p>
              </div>
            </motion.div>
          ))}
        </div>

        
      </div>
    </ScrollReveal>
  )
}
