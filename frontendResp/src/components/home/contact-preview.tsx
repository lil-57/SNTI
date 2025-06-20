"use client"
import { motion } from "framer-motion"
import { MapPin, Mail, Phone } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { ContactForm } from "@/components/contact/contact-form"

const contactInfo = [
  { icon: MapPin, title: "Adresse", content: "5 Boucle des Dinandiers, 57290 Fameck, France" },
  { icon: Phone, title: "Téléphone", content: "03 82 84 01 01" },
  { icon: Mail, title: "Email", content: "sn.ti@wanadoo.fr" },
]

export function ContactPreview() {
  return (
    <section id="contact" className="py-12 sm:py-16 lg:py-20 bg-gray-50 relative">
      <div className="container px-4 sm:px-6">
        <div className="grid gap-8 lg:gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="order-2 lg:order-1"
          >
            <span className="inline-block bg-emerald-100 text-emerald-700 text-xs sm:text-sm font-medium px-3 py-1 rounded-full mb-3 sm:mb-4">
              Contact
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mb-3 sm:mb-4">Contactez-nous</h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8">
              Besoin d&apos;un devis ou d&apos;informations supplémentaires ? N&apos;hésitez pas à nous contacter.
            </p>

            <div className="space-y-3 sm:space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  <Card>
                    <CardContent className="p-3 sm:p-4 flex items-start space-x-3 sm:space-x-4">
                      <item.icon className="h-4 w-4 sm:h-5 sm:w-5 text-emerald-600 mt-0.5 shrink-0" />
                      <div>
                        <h3 className="font-medium text-sm sm:text-base">{item.title}</h3>
                        <p className="text-xs sm:text-sm text-gray-500 break-words">{item.content}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
