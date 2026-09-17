import { useState } from 'react'
import { Play, Sparkles, ChevronRight, Cpu, ShieldCheck, Camera, Layers, Zap } from 'lucide-react'

export function HeroSection({ heroProduct, onExplore, onBuy, onWatchFilm }) {
  const [activeTab, setActiveTab] = useState(0)

  const heroSlides = [
    {
      badge: 'Built for Apple Intelligence',
      title: 'iPhone 16 Pro',
      subtitle: 'Titanium. So strong. So light. So Pro.',
      desc: 'Powered by the all-new A18 Pro chip. Groundbreaking Camera Control with 48MP Fusion and 4K 120 fps Dolby Vision.',
      price: '$999',
      monthly: '$41.62/mo. for 24 mo.',
      image: heroProduct?.colors[0]?.image || 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1000&q=85',
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
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1000&q=85',
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
      image: 'https://images.unsplash.com/photo-1544117519-31a4b719223d?auto=format&fit=crop&w=1000&q=85',
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
    <section className="relative overflow-hidden bg-[#000000] text-white pt-20 pb-16 lg:pt-28 lg:pb-24 border-b border-white/10">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[450px] bg-gradient-to-tr from-[#bca693]/15 via-[#0071e3]/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Device Switcher Pills */}
        <div className="flex items-center justify-center gap-2 mb-8">
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
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-5 hover:bg-white/15 transition-all">
            <Sparkles className="w-3.5 h-3.5 text-[#e5a97d] animate-pulse" />
            <span className="text-xs font-semibold tracking-wide text-neutral-200">
              {current.badge}
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-[#f5f5f7] leading-[1.05]">
            {current.title}
          </h1>

          <p className="mt-3 text-xl sm:text-2xl md:text-3xl font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#e5a97d] via-[#e2e4e5] to-[#2997ff]">
            {current.subtitle}
          </p>

          <p className="mt-3 text-sm sm:text-base text-[#86868b] max-w-xl leading-relaxed">
            {current.desc}
          </p>

          {/* Pricing Subtitle */}
          <div className="mt-4 text-xs sm:text-sm text-[#a1a1a6] flex items-center gap-2">
            <span>From <strong className="text-white font-semibold">{current.price}</strong></span>
            <span>&middot;</span>
            <span>or <strong className="text-white font-semibold">{current.monthly}</strong></span>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onBuy(heroProduct)}
              className="px-7 py-3.5 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white font-semibold text-sm transition-all shadow-lg shadow-[#0071e3]/30 hover:scale-105 active:scale-95"
            >
              Buy Now
            </button>
            <button
              onClick={onExplore}
              className="px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-[#f5f5f7] border border-white/20 font-medium text-sm transition-all flex items-center gap-1.5 hover:scale-105"
            >
              <span>Explore Collection</span>
              <ChevronRight className="w-4 h-4 text-[#2997ff]" />
            </button>
            <button
              onClick={onWatchFilm}
              className="px-5 py-3.5 rounded-full text-xs sm:text-sm text-[#86868b] hover:text-white transition-colors flex items-center gap-2 group"
            >
              <div className="w-7 h-7 rounded-full bg-white/10 group-hover:bg-[#2997ff] flex items-center justify-center transition-colors">
                <Play className="w-3 h-3 text-white fill-white ml-0.5" />
              </div>
              <span>Watch the film</span>
            </button>
          </div>
        </div>

        {/* Hero Visual Studio Stage */}
        <div className="mt-12 sm:mt-16 max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-[#161618] via-[#101012] to-[#0a0a0c] shadow-2xl shadow-black/80">
            
            {/* Color Tag Badge */}
            <div className="absolute top-5 left-5 z-20 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs text-[#a1a1a6]">
              Finish: <strong className="text-white">{current.colorName}</strong>
            </div>

            {/* Clean Centered Image Stage */}
            <div className="h-72 sm:h-[420px] w-full flex items-center justify-center p-6 relative">
              <img
                src={current.image}
                alt={current.title}
                className="max-h-full max-w-full object-contain transition-all duration-700 hover:scale-105 drop-shadow-2xl"
              />
            </div>

            {/* Highlights Grid Aligned at Bottom */}
            <div className="border-t border-white/10 bg-black/40 backdrop-blur-xl p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {current.highlights.map((item, idx) => {
                const Icon = item.icon
                return (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#2997ff] shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-semibold text-white tracking-tight">
                        {item.label}
                      </h4>
                      <p className="text-[11px] text-[#86868b]">
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
