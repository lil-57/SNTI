// contact-map.tsx
"use client"

import { useEffect } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-reveal"

// ⬇️ Ajoute ceci :
import L from "leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"


export function ContactMap() {
  const position: [number, number] = [49.3098, 6.1257] // Fameck

  return (
    <section className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nous Trouver</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Situés à Fameck, nous intervenons dans toute la France pour vos projets industriels.
            </p>
          </div>
        </ScrollReveal>

        <motion.div
          className="rounded-lg shadow-md overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <MapContainer
            center={position}
            zoom={13}
            scrollWheelZoom={false}
            style={{ height: "400px", width: "100%" }}
            className="z-0"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={position}>
              <Popup>SNTI - Société basée à Fameck</Popup>
            </Marker>
          </MapContainer>
        </motion.div>
      </div>
    </section>
  )
}
