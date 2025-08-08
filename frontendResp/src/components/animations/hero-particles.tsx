"use client"

export function HeroParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Particules statiques simples */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400 rounded-full opacity-20 animate-pulse" />
      <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full opacity-30" />
      <div
        className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-emerald-300 rounded-full opacity-25 animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div className="absolute top-2/3 right-1/4 w-1 h-1 bg-teal-400 rounded-full opacity-20" />
      <div
        className="absolute bottom-1/3 right-2/3 w-2 h-2 bg-emerald-500 rounded-full opacity-15 animate-pulse"
        style={{ animationDelay: "2s" }}
      />
    </div>
  )
}
