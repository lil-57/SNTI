"use client"

interface ProjectCardProps {
  title: string
  category: string
  image: string
  description: string
  href: string
  index?: number
}

export function ProjectCard({ title, category, image, description, href, index = 0 }: ProjectCardProps) {
  return (
    <div className="group">
      <a href={href} className="block h-full">
        <div className="overflow-hidden h-full border border-gray-200/50 hover:border-emerald-300/50 transition-all duration-300 backdrop-blur-sm bg-white/80 hover:bg-white/90 rounded-lg shadow-sm hover:shadow-md">
          <div className="relative h-40 sm:h-48 w-full overflow-hidden">
            <img
              src={image || "/placeholder.svg"}
              alt={title}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
              width={400}
              height={300}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          <div className="p-3 sm:p-4">
            <span className="inline-block px-2 py-1 mb-2 text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 rounded-full">
              {category}
            </span>
            <h3 className="font-bold text-base sm:text-lg group-hover:text-emerald-600 transition-colors line-clamp-2">
              {title}
            </h3>
            <p className="text-gray-500 text-xs sm:text-sm mt-1 line-clamp-2">{description}</p>
            <div className="mt-3 sm:mt-4 flex items-center text-emerald-600 text-xs sm:text-sm font-medium">
              En savoir plus
              <svg className="h-3 w-3 sm:h-4 sm:w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}
