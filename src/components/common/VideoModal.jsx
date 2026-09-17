import { X, Play, Volume2, Sparkles } from 'lucide-react'

export function VideoModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-lg animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#161617] border border-white/20 rounded-3xl overflow-hidden shadow-2xl text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-black/60 hover:bg-black text-white transition-colors"
          aria-label="Close video"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Video Player Mockup / Cinematic Experience */}
        <div className="relative aspect-video bg-black flex flex-col items-center justify-center overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1592286927505-b0e8f8f8b5a8?auto=format&fit=crop&w=1200&q=88"
            alt="Keynote presentation"
            className="w-full h-full object-cover opacity-60 filter saturate-150"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent flex flex-col items-center justify-center p-6 text-center">
            <div className="w-16 h-16 rounded-full bg-[#0071e3] hover:bg-[#0077ed] flex items-center justify-center shadow-xl shadow-[#0071e3]/40 cursor-pointer transform hover:scale-110 transition-transform mb-4">
              <Play className="w-7 h-7 text-white fill-white ml-1" />
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs text-neutral-300 mb-2">
              <Sparkles className="w-3 h-3 text-[#2997ff]" /> Apple Event Keynote
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white max-w-lg">
              Introducing iPhone 16 Pro and Apple Intelligence
            </h3>
            <p className="text-xs text-[#86868b] mt-2 max-w-md">
              Watch Greg Joswiak and the Apple engineering team introduce the titanium design, A18 Pro architecture, and new visual intelligence.
            </p>
          </div>

          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#86868b] px-2">
            <span className="flex items-center gap-1.5 text-white">
              <Volume2 className="w-4 h-4 text-[#2997ff]" /> Dolby Atmos Spatial Audio
            </span>
            <span>4K HDR 60fps</span>
          </div>
        </div>
      </div>
    </div>
  )
}
