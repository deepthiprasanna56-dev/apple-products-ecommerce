import { useState, useEffect, useCallback } from 'react'
import { X, Play, Volume2, Sparkles, Film, RotateCcw } from 'lucide-react'

const KEYNOTE_FILMS = [
  {
    id: 'GDlkCkcIqTs',
    title: 'Introducing iPhone 16 Pro and Apple Intelligence',
    subtitle: 'Watch the Apple engineering and design team introduce the titanium design, A18 Pro architecture, and new Camera Control.',
    badge: 'Apple Event Keynote',
    quality: '4K HDR 60fps'
  },
  {
    id: '9mX3647e30Q',
    title: 'iPhone 16 Pro — Camera Control & 48MP Fusion',
    subtitle: 'Deep dive into the 48MP Fusion camera with 4K 120 fps Dolby Vision and studio-quality mics.',
    badge: 'Hardware Deep Dive',
    quality: '4K HDR'
  }
]

export function VideoModal({ isOpen, onClose }) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [activeFilmIndex, setActiveFilmIndex] = useState(0)

  const handleClose = useCallback(() => {
    setIsPlaying(false)
    onClose()
  }, [onClose])

  // Support ESC key to close
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, handleClose])

  if (!isOpen) return null

  const activeFilm = KEYNOTE_FILMS[activeFilmIndex]

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={handleClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#141416] border border-white/20 rounded-3xl overflow-hidden shadow-2xl shadow-black text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="absolute top-4 left-4 right-4 z-30 flex items-center justify-between pointer-events-none">
          {/* Film Selection Pills */}
          <div className="flex items-center gap-1.5 pointer-events-auto bg-black/70 backdrop-blur-md px-2 py-1 rounded-full border border-white/10">
            {KEYNOTE_FILMS.map((film, idx) => (
              <button
                key={film.id}
                onClick={() => {
                  setActiveFilmIndex(idx)
                  setIsPlaying(true)
                }}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  activeFilmIndex === idx
                    ? 'bg-[#0071e3] text-white shadow-md shadow-[#0071e3]/40'
                    : 'text-[#86868b] hover:text-white hover:bg-white/10'
                }`}
              >
                Film {idx + 1}
              </button>
            ))}
          </div>

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="pointer-events-auto p-2.5 rounded-full bg-black/70 hover:bg-black text-white border border-white/15 hover:border-white/30 transition-all hover:scale-105 active:scale-95 shadow-lg"
            aria-label="Close video"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Video Stage: 16:9 Aspect Ratio */}
        <div className="relative aspect-video w-full bg-black flex flex-col items-center justify-center overflow-hidden">
          {isPlaying ? (
            /* REAL WORKING PLAYABLE VIDEO */
            <div className="w-full h-full relative">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${activeFilm.id}?autoplay=1&rel=0&modestbranding=1&showinfo=0&controls=1`}
                title={activeFilm.title}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />

              {/* Replay/Overview Switcher Button */}
              <button
                onClick={() => setIsPlaying(false)}
                className="absolute bottom-4 left-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/75 hover:bg-black backdrop-blur-md border border-white/20 text-xs text-neutral-300 hover:text-white transition-all"
                title="Return to video overview"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Overview</span>
              </button>
            </div>
          ) : (
            /* CINEMATIC PREVIEW POSTER (CLICK TO PLAY) */
            <div
              onClick={() => setIsPlaying(true)}
              className="group relative w-full h-full cursor-pointer flex flex-col items-center justify-center overflow-hidden"
            >
              {/* High-Resolution Working Apple Event Backdrop */}
              <img
                src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1400&q=90"
                alt={activeFilm.title}
                className="absolute inset-0 w-full h-full object-cover opacity-45 group-hover:scale-105 transition-transform duration-700 filter saturate-150"
              />

              {/* Dynamic Apple Intelligence Glowing Halo */}
              <div className="absolute w-72 h-72 rounded-full bg-gradient-to-tr from-[#0071e3]/40 via-[#a855f7]/35 to-[#06b6d4]/40 blur-[70px] pointer-events-none animate-glow-pulse" />

              {/* Center Content & 3D Glowing Play Button */}
              <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center max-w-xl mx-auto">
                {/* 3D Glowing Play Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setIsPlaying(true)
                  }}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-tr from-[#0071e3] to-[#2997ff] flex items-center justify-center shadow-2xl shadow-[#0071e3]/60 group-hover:scale-110 group-active:scale-95 transition-all duration-300 mb-5 relative"
                  aria-label="Play Apple Keynote Film"
                >
                  <span className="absolute inset-0 rounded-full bg-[#2997ff] animate-ping opacity-30 pointer-events-none" />
                  <Play className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-white ml-1.5 transition-transform group-hover:scale-110" />
                </button>

                {/* Apple Keynote Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-xs text-neutral-200 mb-3">
                  <Sparkles className="w-3.5 h-3.5 text-[#2997ff] animate-pulse" />
                  <span>{activeFilm.badge}</span>
                </div>

                {/* Presentation Title */}
                <h3 className="text-xl sm:text-3xl font-bold tracking-tight text-white group-hover:text-[#2997ff] transition-colors duration-300">
                  {activeFilm.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#a1a1a6] mt-2 leading-relaxed">
                  {activeFilm.subtitle}
                </p>

                {/* Play Hint Prompt */}
                <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-[#2997ff] bg-[#2997ff]/10 border border-[#2997ff]/20 px-3.5 py-1.5 rounded-full group-hover:bg-[#2997ff] group-hover:text-white transition-all">
                  <Film className="w-3.5 h-3.5" />
                  <span>Click to Watch Keynote Presentation</span>
                </div>
              </div>

              {/* Bottom Audio / Video Specs Strip */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#86868b] px-2 z-10">
                <span className="flex items-center gap-1.5 text-white">
                  <Volume2 className="w-4 h-4 text-[#2997ff]" /> Dolby Atmos Spatial Audio
                </span>
                <span className="font-medium text-white/80">{activeFilm.quality}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

