"use client"

import { useRef, useEffect } from "react"

export function BackgroundEffect() {
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

    // Triangle class
    class Triangle {
      x: number
      y: number
      size: number
      speed: number
      color: string
      opacity: number
      direction: number
      rotation: number
      rotationSpeed: number
      pulse: boolean
      pulseSpeed: number
      pulseAmount: number
      pulsePhase: number

      constructor() {
        this.x = Math.random() * canvas!.width
        this.y = Math.random() * canvas!.height
        this.size = 15 + Math.random() * 40
        this.speed = 0.2 + Math.random() * 0.6

        // More sophisticated color palette
        const colors = [
          "#10B981", // emerald
          "#ffffff", // white
          "#0EA5E9", // sky blue (tech accent)
          "#10B981", // emerald again (higher probability)
        ]
        this.color = colors[Math.floor(Math.random() * colors.length)]

        this.opacity = 0.02 + Math.random() * 0.08
        this.direction = Math.random() > 0.5 ? 1 : -1
        this.rotation = Math.random() * Math.PI * 2
        this.rotationSpeed = (Math.random() - 0.5) * 0.01

        // Pulsing effect
        this.pulse = Math.random() > 0.7
        this.pulseSpeed = 0.02 + Math.random() * 0.04
        this.pulseAmount = 0.2 + Math.random() * 0.3
        this.pulsePhase = Math.random() * Math.PI * 2
      }

      draw() {
        if (!ctx) return

        ctx.save()
        ctx.translate(this.x, this.y)
        ctx.rotate(this.rotation)

        // Apply pulsing effect to opacity
        let currentOpacity = this.opacity
        if (this.pulse) {
          currentOpacity = this.opacity * (1 + Math.sin(this.pulsePhase) * this.pulseAmount)
        }

        ctx.beginPath()
        ctx.moveTo(0, -this.size / 2)
        ctx.lineTo(this.size / 2, this.size / 2)
        ctx.lineTo(-this.size / 2, this.size / 2)
        ctx.closePath()

        // Add a subtle glow effect
        if (this.color !== "#ffffff") {
          ctx.shadowColor = this.color
          ctx.shadowBlur = 15
        }

        ctx.fillStyle = this.color
        ctx.globalAlpha = currentOpacity
        ctx.fill()

        // Add wireframe effect to some triangles
        if (Math.random() > 0.7) {
          ctx.strokeStyle = "#ffffff"
          ctx.lineWidth = 0.5
          ctx.globalAlpha = currentOpacity * 0.5
          ctx.stroke()
        }

        ctx.restore()
      }

      update() {
        this.x += this.speed
        this.y += this.speed * 0.1 * this.direction
        this.rotation += this.rotationSpeed

        if (this.pulse) {
          this.pulsePhase += this.pulseSpeed
        }

        // Reset position when off screen
        if (this.x > canvas!.width + this.size) {
          this.x = -this.size
          this.y = Math.random() * canvas!.height
        }
      }
    }

    // Create more triangles
    const triangles: Triangle[] = []
    for (let i = 0; i < 80; i++) {
      triangles.push(new Triangle())
    }

    // Add grid lines for tech effect
    class GridLine {
      x: number
      y: number
      vertical: boolean
      length: number
      speed: number
      opacity: number

      constructor() {
        this.vertical = Math.random() > 0.5

        if (this.vertical) {
          this.x = Math.random() * canvas!.width
          this.y = -100
          this.length = 50 + Math.random() * 150
        } else {
          this.x = -100
          this.y = Math.random() * canvas!.height
          this.length = 50 + Math.random() * 150
        }

        this.speed = 0.5 + Math.random() * 1.5
        this.opacity = 0.03 + Math.random() * 0.07
      }

      draw() {
        if (!ctx) return

        ctx.beginPath()

        if (this.vertical) {
          ctx.moveTo(this.x, this.y)
          ctx.lineTo(this.x, this.y + this.length)
        } else {
          ctx.moveTo(this.x, this.y)
          ctx.lineTo(this.x + this.length, this.y)
        }

        ctx.strokeStyle = "#10B981"
        ctx.globalAlpha = this.opacity
        ctx.lineWidth = 1
        ctx.stroke()
      }

      update() {
        if (this.vertical) {
          this.y += this.speed

          if (this.y > canvas!.height) {
            this.y = -this.length
            this.x = Math.random() * canvas!.width
          }
        } else {
          this.x += this.speed

          if (this.x > canvas!.width) {
            this.x = -this.length
            this.y = Math.random() * canvas!.height
          }
        }
      }
    }

    // Create grid lines
    const gridLines: GridLine[] = []
    for (let i = 0; i < 30; i++) {
      gridLines.push(new GridLine())
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Draw grid lines first (background)
      gridLines.forEach((line) => {
        line.update()
        line.draw()
      })

      // Then draw triangles (foreground)
      triangles.forEach((triangle) => {
        triangle.update()
        triangle.draw()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
      style={{ opacity: 0 }}
      onLoad={() => {
        const canvas = canvasRef.current
        if (canvas) {
          canvas.style.opacity = "1"
          canvas.style.transition = "opacity 1s"
        }
      }}
    />
  )
}
