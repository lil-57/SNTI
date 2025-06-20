"use client"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"

export function HeroParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const setCanvasDimensions = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Create connection lines between particles
    const drawConnections = (particles: Particle[]) => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)

            // Gradient line based on distance
            const opacity = 1 - distance / 150
            ctx.strokeStyle = `rgba(16, 185, 129, ${opacity * 0.15})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }
    }

    // Particle class with more tech-inspired shapes
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      opacity: number
      shape: "triangle" | "circle" | "square" | "diamond" | "hexagon" | "circuit"
      rotation: number
      rotationSpeed: number
      glowing: boolean

      constructor() {
        this.x = Math.random() * canvas!.width
        this.y = Math.random() * canvas!.height
        this.size = 2 + Math.random() * 8
        this.speedX = (Math.random() - 0.5) * 0.7
        this.speedY = (Math.random() - 0.5) * 0.7

        // Tech-inspired color palette
        const colors = [
          "#10B981", // emerald
          "#ffffff", // white
          "#0EA5E9", // sky blue
          "#10B981", // emerald again (higher probability)
          "#34D399", // lighter emerald
        ]
        this.color = colors[Math.floor(Math.random() * colors.length)]

        this.opacity = 0.05 + Math.random() * 0.15

        // More tech-inspired shapes
        const shapes: ("triangle" | "circle" | "square" | "diamond" | "hexagon" | "circuit")[] = [
          "triangle",
          "circle",
          "square",
          "diamond",
          "hexagon",
          "circuit",
        ]
        this.shape = shapes[Math.floor(Math.random() * shapes.length)]

        this.rotation = Math.random() * Math.PI * 2
        this.rotationSpeed = (Math.random() - 0.5) * 0.02
        this.glowing = Math.random() > 0.7
      }

      draw() {
        if (!ctx) return

        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.rotation)

        // Add glow effect to some particles
        if (this.glowing) {
          ctx.shadowColor = this.color
          ctx.shadowBlur = 10
        }

        ctx.fillStyle = this.color
        ctx.globalAlpha = this.opacity

        switch (this.shape) {
          case "circle":
            ctx.beginPath()
            ctx.arc(0, 0, this.size, 0, Math.PI * 2)
            ctx.fill()
            break

          case "triangle":
            ctx.beginPath()
            ctx.moveTo(0, -this.size)
            ctx.lineTo(this.size, this.size)
            ctx.lineTo(-this.size, this.size)
            ctx.closePath()
            ctx.fill()
            break

          case "square":
            ctx.fillRect(-this.size / 2, -this.size / 2, this.size, this.size)
            break

          case "diamond":
            ctx.beginPath()
            ctx.moveTo(0, -this.size)
            ctx.lineTo(this.size, 0)
            ctx.lineTo(0, this.size)
            ctx.lineTo(-this.size, 0)
            ctx.closePath()
            ctx.fill()
            break

          case "hexagon":
            ctx.beginPath()
            for (let i = 0; i < 6; i++) {
              const angle = (Math.PI / 3) * i
              const x = this.size * Math.cos(angle)
              const y = this.size * Math.sin(angle)
              if (i === 0) ctx.moveTo(x, y)
              else ctx.lineTo(x, y)
            }
            ctx.closePath()
            ctx.fill()
            break

          case "circuit":
            // Draw a simple circuit-like shape
            ctx.beginPath()
            ctx.moveTo(-this.size, -this.size / 2)
            ctx.lineTo(this.size / 2, -this.size / 2)
            ctx.lineTo(this.size / 2, this.size / 2)
            ctx.lineTo(this.size, this.size / 2)
            ctx.stroke()

            // Add a small circle at one end
            ctx.beginPath()
            ctx.arc(this.size, this.size / 2, this.size / 4, 0, Math.PI * 2)
            ctx.fill()
            break
        }

        // Add wireframe effect to some particles
        if (Math.random() > 0.7 && this.shape !== "circuit") {
          ctx.strokeStyle = "#ffffff"
          ctx.lineWidth = 0.5
          ctx.globalAlpha = this.opacity * 0.7

          if (this.shape === "circle") {
            ctx.beginPath()
            ctx.arc(0, 0, this.size, 0, Math.PI * 2)
            ctx.stroke()
          } else if (this.shape === "square") {
            ctx.strokeRect(-this.size / 2, -this.size / 2, this.size, this.size)
          } else if (this.shape === "triangle") {
            ctx.beginPath()
            ctx.moveTo(0, -this.size)
            ctx.lineTo(this.size, this.size)
            ctx.lineTo(-this.size, this.size)
            ctx.closePath()
            ctx.stroke()
          }
        }

        ctx.restore()
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY
        this.rotation += this.rotationSpeed

        // Bounce off edges with slight randomization
        if (this.x > canvas!.width || this.x < 0) {
          this.speedX = -this.speedX * (0.9 + Math.random() * 0.2)
        }

        if (this.y > canvas!.height || this.y < 0) {
          this.speedY = -this.speedY * (0.9 + Math.random() * 0.2)
        }

        // Keep particles in bounds
        if (this.x < -50) this.x = 0
        if (this.x > canvas!.width + 50) this.x = canvas!.width
        if (this.y < -50) this.y = 0
        if (this.y > canvas!.height + 50) this.y = canvas!.height
      }
    }

    // Create more particles for a denser effect
    const particles: Particle[] = []
    for (let i = 0; i < 120; i++) {
      particles.push(new Particle())
    }

    // Animation loop
    const animate = () => {
      // Semi-transparent clear for trail effect
      ctx.fillStyle = "rgba(17, 24, 39, 0.2)" // Dark background with trail
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw connections first
      drawConnections(particles)

      // Then draw particles
      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return (
    <motion.canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    />
  )
}
