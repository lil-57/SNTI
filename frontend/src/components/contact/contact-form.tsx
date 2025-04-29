"use client"

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
        "0VzHer-r56DcWze56" // Ton Public Key
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
      className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-bold mb-6">Envoyez-nous un message</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="first_name">Prénom</Label>
            <Input name="first_name" id="first_name" placeholder="Jean" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="last_name">Nom</Label>
            <Input name="last_name" id="last_name" placeholder="Dupont" required />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input name="email" id="email" type="email" placeholder="jean.dupont@email.com" required />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Téléphone</Label>
            <Input name="phone" id="phone" type="tel" placeholder="06 00 00 00 00" />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="subject">Sujet</Label>
          <Input name="subject" id="subject" placeholder="Demande de devis" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            name="message"
            id="message"
            placeholder="Décrivez votre besoin..."
            required
            className="min-h-[120px]"
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
            className="w-full bg-emerald-600 hover:bg-emerald-700 transition-all duration-300 rounded-lg"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Envoi en cours..." : <>Envoyer <Send className="ml-2 h-4 w-4" /></>}
          </Button>
        </motion.div>
      </form>
    </motion.div>
  )
}
