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
    <section id="contact" className="py-20 bg-gray-50 relative">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-emerald-100 text-emerald-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
              Contact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Contactez-nous</h2>
            <p className="text-gray-600 mb-8">
              Besoin d&apos;un devis ou d&apos;informations supplémentaires ? N&apos;hésitez pas à nous contacter.
            </p>

            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  <Card>
                    <CardContent className="p-4 flex items-start space-x-4">
                      <item.icon className="h-5 w-5 text-emerald-600 mt-0.5" />
                      <div>
                        <h3 className="font-medium">{item.title}</h3>
                        <p className="text-sm text-gray-500">{item.content}</p>
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
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
