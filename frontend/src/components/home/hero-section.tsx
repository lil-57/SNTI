"use client";

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/button";
import { HeroParticles } from "@/components/animations/hero-particles";

export function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex items-center py-20 overflow-hidden bg-gray-900 text-white">
      <HeroParticles />

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 pointer-events-none"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <motion.span
                className="inline-block bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 text-sm font-medium px-4 py-1 rounded-full mb-6 backdrop-blur-sm"
                whileHover={{ backgroundColor: "rgba(16, 185, 129, 0.3)" }}
              >
                Experts depuis 1998
              </motion.span>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                <span className="block">Société Nouvelle de</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-300">
                  Tuyauterie Industrielle
                </span>
              </h1>
              <p className="mt-6 text-xl text-gray-300 max-w-lg">
                Solutions sur mesure en tuyauterie industrielle, chaudronnerie
                et structures métalliques pour vos projets les plus exigeants.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
          <motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="relative group"
>
  <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-full opacity-75 blur-sm group-hover:opacity-100 transition duration-200"></div>
  <Button
    asChild
    size="lg"
    className="relative bg-emerald-600 hover:bg-emerald-700 rounded-full px-8 py-6 text-base"
  >
    <Link to="/contact" className="inline-flex items-center">
      Demander un devis <ArrowRight className="ml-2 h-4 w-4" />
    </Link>
  </Button>
</motion.div>


              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-emerald-500/30 text-white hover:bg-emerald-500/10 rounded-full px-8 py-6 text-base backdrop-blur-sm"
                >
                  <Link to="/services">Nos services</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1, type: "spring" }}
          >
            <motion.div
              className="absolute -inset-4 rounded-2xl bg-gradient-to-tr from-emerald-500/20 to-teal-500/20 blur-2xl"
              animate={{
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />
            <div className="relative rounded-2xl overflow-hidden border border-emerald-500/20 backdrop-blur-sm shadow-[0_0_25px_rgba(16,185,129,0.2)]">
              <div className="relative w-[700px] h-[500px] rounded-2xl overflow-hidden">
                <img
                  src="/images/BatSNTI.jpg"
                  alt="Équipe SNTI sur un chantier"
                  className="absolute inset-0 w-full h-full object-cover z-0"
                />
                <div className="absolute inset-0 bg-black/10 z-10" />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2"></h3>
                <p className="text-sm text-gray-300">
                  Les locaux de la société SNTI situé à Fameck.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
  className="absolute bottom-24 w-full flex justify-center text-white"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 1.5, duration: 0.8 }}
>
  <motion.div
    animate={{ y: [0, 10, 0] }}
    transition={{ duration: 2, repeat: Infinity }}
    className="flex flex-col items-center cursor-pointer"
    onClick={() => window.scrollTo({ top: window.innerHeight, behavior: "smooth" })}
  >
    <span className="text-sm font-medium mb-2">Découvrir</span>
    <ChevronDown className="h-6 w-6" />
  </motion.div>
</motion.div>



      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
