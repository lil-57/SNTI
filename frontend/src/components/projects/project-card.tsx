"use client"

import { useRef, useEffect } from "react"

interface ProjectCardProps {
  title: string
  category: string
  image: string
  description: string
  href: string
  index?: number
}

export function ProjectCard({ title, category, image, description, href, index = 0 }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              if (cardRef.current) {
                cardRef.current.style.opacity = "1"
                cardRef.current.style.transform = "translateY(0)"
              }
            }, index * 100)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current)
      }
    }
  }, [index])

  return (
    <div
      ref={cardRef}
      className="group"
      style={{ opacity: 0, transform: "translateY(20px)", transition: "opacity 0.5s, transform 0.5s" }}
    >
      <a href={href} className="block h-full">
        <div className="overflow-hidden h-full border border-gray-200/50 hover:border-emerald-300/50 transition-all duration-300 backdrop-blur-sm bg-white/80 hover:bg-white/90 rounded-lg shadow-sm hover:shadow-md">
          <div className="relative h-48 w-full overflow-hidden">
            <img
              src={image || "/placeholder.svg"}
              alt={title}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              width={400}
              height={300}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 border-t-0 border-4 border-emerald-500/0 group-hover:border-emerald-500/50 transition-all duration-500"></div>
          </div>
          <div className="p-4">
            <span className="inline-block px-2 py-1 mb-2 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full">
              {category}
            </span>
            <h3 className="font-bold text-lg group-hover:text-emerald-600 transition-colors">{title}</h3>
            <p className="text-gray-500 text-sm mt-1 line-clamp-2">{description}</p>
            <div className="mt-4 flex items-center text-emerald-600 text-sm font-medium group-hover:translate-x-1 transition-transform">
              En savoir plus
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}
