import { useState, useEffect, useRef, useCallback } from 'react'
import { Sparkles, ArrowRight } from 'lucide-react'

export function IntroSplash({ onComplete }) {
  const [progress, setProgress] = useState(0)
  const [isExiting, setIsExiting] = useState(false)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const containerRef = useRef(null)

  const triggerExit = useCallback(() => {
    setIsExiting(true)
    setTimeout(() => {
      onComplete?.()
    }, 650)
  }, [onComplete])

  // Interactive mouse tilt on the central hologram
  const handleMouseMove = (e) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({
      x: +(x * 20).toFixed(2),
      y: +(-y * 20).toFixed(2)
    })
  }

  // Smooth loading progression (completes in ~2.6s)
  useEffect(() => {
    const startTime = Date.now()
    const duration = 2600

    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime
      const current = Math.min(100, Math.round((elapsed / duration) * 100))
      setProgress(current)

      if (current >= 100) {
        clearInterval(timer)
        triggerExit()
      }
    }, 30)

    return () => clearInterval(timer)
  }, [triggerExit])

  // Keyboard shortcut to skip (Escape or Space or Enter)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        triggerExit()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [triggerExit])

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className={`fixed inset-0 z-[100] bg-[#000000] flex flex-col items-center justify-between p-6 sm:p-10 select-none overflow-hidden transition-all duration-700 ease-out ${
        isExiting
          ? 'opacity-0 scale-105 pointer-events-none blur-sm'
          : 'opacity-100 scale-100'
      }`}
    >
      {/* 1. Deep Space Starfield & Fluid Apple Intelligence Mesh Glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Iridescent Breathing Siri Halo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[600px] h-[340px] sm:h-[600px] bg-gradient-to-tr from-[#9333ea]/35 via-[#0071e3]/30 to-[#06b6d4]/35 rounded-full blur-[100px] animate-glow-pulse" />
        
        {/* Secondary Chromatic Dispersion Layer */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[240px] sm:w-[420px] h-[240px] sm:h-[420px] bg-gradient-to-br from-[#ff375f]/25 via-[#e5a97d]/20 to-[#2997ff]/30 rounded-full blur-[80px]" />
      </div>

      {/* Top Brand Tag */}
      <div className="relative z-10 w-full flex items-center justify-between max-w-5xl opacity-75">
        <div className="text-[11px] tracking-[0.25em] uppercase text-[#86868b] font-medium">
          Apple Inc.
        </div>
        <div className="text-[11px] tracking-[0.15em] text-[#a1a1a6]">
          2026 Hardware Architecture
        </div>
      </div>

      {/* 2. Centerpiece: 3D Holographic Apple Emblem & Orbiting Rings */}
      <div className="relative z-10 flex flex-col items-center justify-center my-auto">
        {/* Orbital Frequency Energy Rings */}
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
          {/* Outer Quantum Orbit Ring (Clockwise) */}
          <div className="absolute inset-0 rounded-full border border-white/10 animate-aura-spin">
            <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#2997ff] shadow-[0_0_10px_#2997ff]" />
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#bf5af2] shadow-[0_0_8px_#bf5af2]" />
          </div>

          {/* Inner Quantum Orbit Ring (Counter-Clockwise) */}
          <div className="absolute inset-5 sm:inset-7 rounded-full border border-dashed border-white/15 animate-reverse-spin">
            <span className="absolute top-1/2 -left-1 -translate-y-1/2 w-2 h-2 rounded-full bg-[#06b6d4] shadow-[0_0_10px_#06b6d4]" />
            <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-[#ff375f] shadow-[0_0_8px_#ff375f]" />
          </div>

          {/* Core Ambient Radial Light */}
          <div className="absolute inset-10 rounded-full bg-gradient-to-b from-white/10 to-transparent backdrop-blur-3xl border border-white/15 shadow-2xl flex items-center justify-center" />

          {/* 3D Titanium Apple Emblem */}
          <div
            className="relative z-20 flex items-center justify-center transform transition-transform duration-200"
            style={{
              transform: `perspective(1000px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) scale(1.05)`
            }}
          >
            <svg
              className="w-16 h-16 sm:w-20 sm:h-20 text-white fill-current filter drop-shadow-[0_10px_30px_rgba(41,151,255,0.7)]"
              viewBox="0 0 170 170"
            >
              <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.6-7.7-11.7-13.98-5.77-8.81-10.38-19.12-13.84-30.93-3.46-11.81-5.19-23.01-5.19-33.6 0-14.58 3.73-26.69 11.19-36.33 7.46-9.64 16.79-14.54 27.99-14.7 4.91 0 10.19 1.25 15.84 3.76 5.65 2.5 9.42 3.81 11.31 3.91 1.57-.1 5.48-1.46 11.72-4.08 6.24-2.61 11.66-3.83 16.27-3.65 12.55.77 22.42 5.37 29.62 13.8-10.99 6.64-16.38 15.82-16.16 27.53.22 9.24 3.86 16.92 10.92 23.03 7.06 6.12 15.35 9.61 24.87 10.49-2.18 6.74-4.8 13.25-7.87 19.53zm-29.68-108.97c0 6.63-2.5 12.83-7.5 17.59-4.99 4.77-11.02 7.64-18.09 7.64-.22-1.09-.33-2.17-.33-3.26 0-6.42 2.66-12.72 7.73-17.65 5.06-4.93 11.3-7.85 17.86-8.32.22 1.3.33 2.63.33 4z" />
            </svg>
          </div>
        </div>

        {/* Brand Typography with Wide Kerning */}
        <div className="mt-6 text-center">
          <h1 className="text-sm sm:text-base font-semibold tracking-[0.38em] uppercase text-[#f5f5f7]">
            Apple Store
          </h1>
          
          <div className="mt-2.5 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-neutral-300">
            <Sparkles className="w-3.5 h-3.5 text-[#2997ff] animate-pulse" />
            <span>Hello, Apple Intelligence</span>
          </div>
        </div>

        {/* 3. Futuristic Laser Progress Bar */}
        <div className="mt-8 flex flex-col items-center gap-2">
          <div className="w-48 sm:w-60 h-1 rounded-full bg-white/10 overflow-hidden relative p-[1px]">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#2997ff] via-[#bf5af2] to-[#ff375f] transition-all duration-75 shadow-[0_0_12px_#2997ff]"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex items-center justify-between w-48 sm:w-60 text-[10px] text-[#86868b] font-mono">
            <span>LOADING ECOSYSTEM</span>
            <span>{progress}%</span>
          </div>
        </div>
      </div>

      {/* 4. Bottom Skip Button with Glowing Glass Capsule */}
      <div className="relative z-10 w-full flex items-center justify-between max-w-5xl">
        <span className="hidden sm:inline text-xs text-[#86868b]">
          Press <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-neutral-300 text-[10px]">ESC</kbd> to skip
        </span>

        <button
          onClick={triggerExit}
          className="ml-auto px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-medium text-white backdrop-blur-md transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg shadow-black/60 hover:shadow-[#0071e3]/30 cursor-pointer"
        >
          <span>Skip Intro</span>
          <ArrowRight className="w-3.5 h-3.5 text-[#2997ff]" />
        </button>
      </div>
    </div>
  )
}
