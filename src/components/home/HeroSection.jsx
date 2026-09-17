import { useState, useRef } from 'react'
import { Play, Sparkles, ChevronRight, Cpu, ShieldCheck, Camera, Layers, Zap } from 'lucide-react'

export function HeroSection({ heroProduct, onExplore, onBuy, onWatchFilm }) {
  const [activeTab, setActiveTab] = useState(0)
  const [tilt, setTilt] = useState({ x: 0, y: 0, glareX: 50, glareY: 50 })
  const [isHovered, setIsHovered] = useState(false)
  const stageRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!stageRef.current) return
    const rect = stageRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({
      x: +(x * 24).toFixed(2),
      y: +(-y * 24).toFixed(2),
      glareX: +((x + 0.5) * 100).toFixed(1),
      glareY: +((y + 0.5) * 100).toFixed(1)
    })
  }

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => {
    setIsHovered(false)
    setTilt({ x: 0, y: 0, glareX: 50, glareY: 50 })
  }

  const heroSlides = [
    {
      badge: 'Built for Apple Intelligence',
      title: 'iPhone 16 Pro',
      subtitle: 'Titanium. So strong. So light. So Pro.',
      desc: 'Powered by the all-new A18 Pro chip. Groundbreaking Camera Control with 48MP Fusion and 4K 120 fps Dolby Vision.',
      price: '$999',
      monthly: '$41.62/mo. for 24 mo.',
      image: heroProduct?.colors[0]?.image || 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=800&q=90',
      colorName: 'Desert Titanium',
      highlights: [
        { icon: Cpu, label: 'A18 Pro Chip', sub: 'Industry-leading silicon' },
        { icon: Camera, label: '48MP Fusion', sub: 'Camera Control button' },
        { icon: ShieldCheck, label: 'Grade 5 Titanium', sub: 'Lightest Pro models ever' }
      ]
    },
    {
      badge: 'M4 Series Innovation',
      title: 'MacBook Pro',
      subtitle: 'Mind-blowing. Head-turning.',
      desc: 'Supercharged by M4, M4 Pro, and M4 Max. Up to 24 hours of battery life and Liquid Retina XDR display with up to 1,600 nits.',
      price: '$1,599',
      monthly: '$133.25/mo. for 12 mo.',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=90',
      colorName: 'Space Black',
      highlights: [
        { icon: Zap, label: 'M4 Max Silicon', sub: 'Up to 16-core CPU' },
        { icon: Layers, label: 'Liquid Retina XDR', sub: '1,600 nits peak' },
        { icon: ShieldCheck, label: '24-Hour Battery', sub: 'Longest Mac battery ever' }
      ]
    },
    {
      badge: 'Adventure Re-imagined',
      title: 'Apple Watch Ultra 2',
      subtitle: 'Engineered for the extreme.',
      desc: 'The most capable Apple Watch ever, now in stunning satin Black Titanium. Precision dual-frequency GPS and 3,000-nit display.',
      price: '$799',
      monthly: '$66.58/mo. for 12 mo.',
      image: 'https://images.unsplash.com/photo-1544117519-31a4b719223d?auto=format&fit=crop&w=800&q=90',
      colorName: 'Black Titanium',
      highlights: [
        { icon: Zap, label: '3,000 Nits', sub: 'Brightest Apple display' },
        { icon: ShieldCheck, label: 'Titanium Case', sub: '100m water resistance' },
        { icon: Cpu, label: 'S9 SiP', sub: 'Double tap gesture' }
      ]
    }
  ]

  const current = heroSlides[activeTab]

  return (
    <section className="relative overflow-hidden bg-[#000000] text-white pt-8 pb-12 sm:pt-10 sm:pb-16 border-b border-white/10">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] sm:w-[800px] h-[350px] bg-gradient-to-tr from-[#bca693]/15 via-[#0071e3]/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Device Switcher Pills */}
        <div className="flex items-center justify-center gap-2 mb-6">
          {heroSlides.map((slide, idx) => (
            <button
              key={slide.title}
              onClick={() => setActiveTab(idx)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeTab === idx
                  ? 'bg-white text-black shadow-lg shadow-white/10 scale-105'
                  : 'bg-white/5 text-[#86868b] hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {slide.title}
            </button>
          ))}
        </div>

        {/* Hero Content Header */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Apple Intelligence Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-4 hover:bg-white/15 transition-all">
            <Sparkles className="w-3.5 h-3.5 text-[#e5a97d] animate-pulse" />
            <span className="text-xs font-semibold tracking-wide text-neutral-200">
              {current.badge}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#f5f5f7] leading-tight">
            {current.title}
          </h1>

          <p className="mt-2 text-lg sm:text-2xl md:text-3xl font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#e5a97d] via-[#e2e4e5] to-[#2997ff]">
            {current.subtitle}
          </p>

          <p className="mt-2 text-xs sm:text-sm text-[#86868b] max-w-lg leading-relaxed">
            {current.desc}
          </p>

          {/* Pricing Subtitle */}
          <div className="mt-3 text-xs text-[#a1a1a6] flex items-center gap-2">
            <span>From <strong className="text-white font-semibold">{current.price}</strong></span>
            <span>&middot;</span>
            <span>or <strong className="text-white font-semibold">{current.monthly}</strong></span>
          </div>

          {/* CTAs */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3.5">
            <button
              onClick={() => onBuy(heroProduct)}
              className="px-6 py-2.5 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white font-semibold text-xs transition-all shadow-lg shadow-[#0071e3]/30 hover:scale-105 active:scale-95"
            >
              Buy Now
            </button>
            <button
              onClick={onExplore}
              className="px-5 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-[#f5f5f7] border border-white/20 font-medium text-xs transition-all flex items-center gap-1.5 hover:scale-105"
            >
              <span>Explore Collection</span>
              <ChevronRight className="w-3.5 h-3.5 text-[#2997ff]" />
            </button>
            <button
              onClick={onWatchFilm}
              className="px-4 py-2.5 rounded-full text-xs text-[#86868b] hover:text-white transition-colors flex items-center gap-2 group"
            >
              <div className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-[#2997ff] flex items-center justify-center transition-colors">
                <Play className="w-2.5 h-2.5 text-white fill-white ml-0.5" />
              </div>
              <span>Watch film</span>
            </button>
          </div>
        </div>

        {/* Hero Visual Studio Stage - 3D Interactive Perspective, Floating & Glowing */}
        <div className="mt-8 sm:mt-10 w-full max-w-5xl lg:max-w-6xl mx-auto">
          <div
            ref={stageRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative rounded-3xl overflow-hidden border border-white/15 bg-gradient-to-b from-[#18181b] via-[#121214] to-[#0a0a0c] shadow-2xl shadow-black/90 transition-all duration-300 group cursor-crosshair"
            style={{ perspective: '1200px' }}
          >
            {/* Apple Intelligence Luminous Glowing Aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 sm:w-[500px] h-60 sm:h-[350px] bg-gradient-to-tr from-[#0071e3]/30 via-[#a855f7]/35 to-[#06b6d4]/30 rounded-full blur-[80px] pointer-events-none animate-glow-pulse" />

            {/* Specular Interactive Cursor Glare Highlight */}
            <div
              className="absolute inset-0 pointer-events-none z-10 mix-blend-overlay transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle at ${tilt.glareX}% ${tilt.glareY}%, rgba(255,255,255,0.22) 0%, transparent 60%)`,
                opacity: isHovered ? 1 : 0
              }}
            />

            {/* Color Tag Badge */}
            <div className="absolute top-4 left-4 z-20 px-3.5 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-xs text-[#a1a1a6] shadow-lg flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0071e3] shadow-[0_0_8px_#0071e3] animate-pulse" />
              <span>Finish: <strong className="text-white font-medium">{current.colorName}</strong></span>
            </div>

            {/* 3D Interactive Interactive Floating Stage */}
            <div className="h-64 sm:h-96 w-full flex flex-col items-center justify-center p-6 relative preserve-3d">
              {/* Floating Device Container with 3D Tilt */}
              <div
                className="relative flex items-center justify-center preserve-3d"
                style={{
                  transform: `perspective(1200px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
                  transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.7s cubic-bezier(0.2, 0.8, 0.2, 1)'
                }}
              >
                {/* Floating Zero-Gravity Device */}
                <img
                  src={current.image}
                  alt={current.title}
                  className="animate-float-3d max-h-52 sm:max-h-72 max-w-full object-contain filter drop-shadow-[0_25px_40px_rgba(0,113,227,0.35)] select-none pointer-events-none"
                />

                {/* Floating 3D Badge 1: Apple Intelligence (Parallax pop-out) */}
                <div
                  className="hidden md:flex absolute -left-12 top-10 items-center gap-2 px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 text-[11px] text-white shadow-xl pointer-events-none transition-transform duration-300"
                  style={{
                    transform: `translateZ(40px) translateX(${tilt.x * 0.4}px) translateY(${tilt.y * 0.4}px)`
                  }}
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#e5a97d] animate-pulse" />
                  <span>Titanium &middot; A18 Pro</span>
                </div>

                {/* Floating 3D Badge 2: 3D Spatial Audio / Display */}
                <div
                  className="hidden md:flex absolute -right-12 bottom-10 items-center gap-2 px-3 py-1.5 rounded-xl bg-black/60 backdrop-blur-md border border-white/20 text-[11px] text-white shadow-xl pointer-events-none transition-transform duration-300"
                  style={{
                    transform: `translateZ(40px) translateX(${-tilt.x * 0.4}px) translateY(${-tilt.y * 0.4}px)`
                  }}
                >
                  <Cpu className="w-3.5 h-3.5 text-[#2997ff]" />
                  <span>Apple Silicon Architecture</span>
                </div>
              </div>

              {/* Dynamic Ground Contact Shadow (Breathes inversely to floating device) */}
              <div className="animate-float-shadow w-44 sm:w-72 h-3.5 sm:h-5 bg-black/90 rounded-[100%] blur-md mt-4 pointer-events-none" />
            </div>

            {/* Highlights Grid Aligned at Bottom */}
            <div className="border-t border-white/10 bg-black/50 backdrop-blur-xl p-4 sm:p-5 grid grid-cols-1 sm:grid-cols-3 gap-3 relative z-20">
              {current.highlights.map((item, idx) => {
                const Icon = item.icon
                return (
                  <div key={idx} className="flex items-center gap-2.5 group/item hover:bg-white/5 p-1.5 rounded-xl transition-colors">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#2997ff] shrink-0 group-hover/item:border-[#2997ff]/40 group-hover/item:shadow-[0_0_12px_rgba(41,151,255,0.3)] transition-all">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs font-semibold text-white tracking-tight">
                        {item.label}
                      </h4>
                      <p className="text-[10px] text-[#86868b]">
                        {item.sub}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
