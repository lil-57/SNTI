"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/toast-provider"
import emailjs from "@emailjs/browser"

export function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const form = e.target as HTMLFormElement

    emailjs
      .sendForm(
        "service_1ah877z", // Ton service ID
        "template_1kx0bjo", // Ton template ID
        form,
        "0VzHer-r56DcWze56", // Ton Public Key
      )
      .then(() => {
        setIsSubmitting(false)
        toast({
          title: "Message envoyé ✅",
          description: "Nous vous contacterons rapidement.",
        })
        form.reset()
      })
      .catch(() => {
        setIsSubmitting(false)
        toast({
          title: "Erreur ❌",
          description: "L'envoi a échoué. Veuillez réessayer.",
        })
      })
  }

  return (
    <motion.div
      className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg border border-gray-100"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-lg sm:text-xl font-bold mb-4 sm:mb-6">Envoyez-nous un message</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="first_name" className="text-sm">
              Prénom
            </Label>
            <Input name="first_name" id="first_name" placeholder="Jean" required className="h-10 sm:h-11" />
          </div>

          <div className="space-y-2">
            <Label htmlFor="last_name" className="text-sm">
              Nom
            </Label>
            <Input name="last_name" id="last_name" placeholder="Dupont" required className="h-10 sm:h-11" />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm">
              Email
            </Label>
            <Input
              name="email"
              id="email"
              type="email"
              placeholder="jean.dupont@email.com"
              required
              className="h-10 sm:h-11"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm">
              Téléphone
            </Label>
            <Input name="phone" id="phone" type="tel" placeholder="06 00 00 00 00" className="h-10 sm:h-11" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject" className="text-sm">
            Sujet
          </Label>
          <Input name="subject" id="subject" placeholder="Demande de devis" required className="h-10 sm:h-11" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message" className="text-sm">
            Message
          </Label>
          <Textarea
            name="message"
            id="message"
            placeholder="Décrivez votre besoin..."
            required
            className="min-h-[100px] sm:min-h-[120px] resize-none"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.6 }}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <Button
            type="submit"
            className="w-full bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 rounded-lg h-11 sm:h-12 text-sm sm:text-base"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              "Envoi en cours..."
            ) : (
              <>
                Envoyer <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>
        </motion.div>
      </form>
    </motion.div>
  )
}
