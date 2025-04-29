"use client";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

import { Button } from "@/components/ui/button";

const features = [
  "Société par actions simplifiée (SAS)",
  "Entre 6 et 9 salariés qualifiés",
  "Interventions dans le Grand-Est, Luxembourg, Belgique",
  "Respect des normes et certifications",
];

export function AboutPreview() {
  return (
    <section id="about" className="py-20 bg-gray-50 relative">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block bg-emerald-100 text-emerald-700 text-sm font-medium px-3 py-1 rounded-full mb-4">
              À propos de SNTI
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Plus de 25 ans d&apos;expertise
            </h2>
            <p className="text-gray-600 mb-6">
              Fondée en 1998, la Société Nouvelle de Tuyauterie Industrielle
              (SNTI) s&apos;est imposée comme un acteur incontournable dans le
              domaine de la tuyauterie industrielle et de la chaudronnerie.
            </p>

            <div className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />
                  <span>{feature}</span>
                </motion.div>
              ))}
            </div>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
  <Button
    asChild
    className="rounded-full inline-flex items-center justify-center px-6 py-3 text-base"
  >
    <Link to="/about" className="flex items-center whitespace-nowrap">
      En savoir plus
      <ArrowRight className="ml-2 h-4 w-4" />
    </Link>
  </Button>
</motion.div>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              className="absolute -inset-4 rounded-2xl bg-emerald-500/10 blur-xl"
              animate={{
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
            <div className="relative w-[700px] h-[500px] rounded-2xl overflow-hidden">
              <img
                src="/images/atelier.png"
                alt="Atelier SNTI"
                className="absolute inset-0 w-full h-full object-cover z-0"
              />
              <div className="absolute inset-0 bg-black/& z-10" />
            </div>

            
          </motion.div>
        </div>
      </div>
    </section>
  );
}
