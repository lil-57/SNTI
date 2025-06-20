"use client"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-reveal"

import L from "leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"

export function ContactMap() {
  const position: [number, number] = [49.30965, 6.123923] // Adresse SNTI à Fameck
  const address = "5+Boucle+des+Dinandiers,+57290+Fameck"

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
              <Popup>
                <div className="space-y-1 text-sm">
                  <div className="font-semibold">SNTI – Fameck</div>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${address}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-emerald-600 hover:underline"
                  >
                    🗺 Google Maps
                  </a>
                  <a
                    href={`https://waze.com/ul?ll=${position[0]},${position[1]}&navigate=yes`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-emerald-600 hover:underline"
                  >
                    🚗 Waze
                  </a>
                  <a
                    href={`http://maps.apple.com/?daddr=${address}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-emerald-600 hover:underline"
                  >
                    📍 Apple Plans
                  </a>
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        </motion.div>
      </div>
    </section>
  )
}
