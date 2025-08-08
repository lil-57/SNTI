"use client"

export function BackgroundEffect() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 opacity-30">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(16, 185, 129, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(20, 184, 166, 0.1) 0%, transparent 50%)`,
        }}
      />
    </div>
  )
}
