import { ArrowLeft, ArrowLeftRight, Sparkles } from 'lucide-react'

const CATEGORY_META = {
  iphone: {
    eyebrow: 'Explore iPhone',
    title: 'Designed to be loved.',
    tagline: 'Hello, Apple Intelligence. Groundbreaking cameras, powerful chips, and battery life that goes on and on.',
    bannerColor: 'from-[#2e2620] via-[#1a1918] to-black',
    accentColor: '#e5a97d'
  },
  mac: {
    eyebrow: 'Explore Mac',
    title: 'If you can dream it, Mac can do it.',
    tagline: 'Supercharged by Apple silicon with M4 chips. Impossibly thin laptops, unbelievable desktops, and extraordinary battery life.',
    bannerColor: 'from-[#1e232a] via-[#14171c] to-black',
    accentColor: '#2997ff'
  },
  ipad: {
    eyebrow: 'Explore iPad',
    title: 'Touch, draw, and type on one magical device.',
    tagline: 'From the impossibly thin iPad Pro with Ultra Retina XDR OLED to the versatile iPad Air, find your canvas.',
    bannerColor: 'from-[#2a1e28] via-[#1a141a] to-black',
    accentColor: '#bf5af2'
  },
  watch: {
    eyebrow: 'Explore Apple Watch',
    title: 'To wear it is to love it.',
    tagline: 'The ultimate device for a healthy life. Advanced health metrics, safety alerts, workout tracking, and cellular connectivity.',
    bannerColor: 'from-[#26261f] via-[#171714] to-black',
    accentColor: '#ffd60a'
  },
  airpods: {
    eyebrow: 'Explore AirPods',
    title: 'Sound that moves you.',
    tagline: 'Immersive sound with Adaptive Audio, Active Noise Cancellation, and Personalized Spatial Audio with dynamic head tracking.',
    bannerColor: 'from-[#1c2227] via-[#11161a] to-black',
    accentColor: '#30d158'
  }
}

export function CategoryHero({ categoryId, onBackToStore, onOpenCompare }) {
  const meta = CATEGORY_META[categoryId]
  if (!meta) return null

  return (
    <section className={`relative overflow-hidden bg-gradient-to-b ${meta.bannerColor} text-white pt-24 pb-12 border-b border-white/10`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumbs & Compare Link */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={onBackToStore}
            className="flex items-center gap-2 text-xs font-medium text-[#86868b] hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            <span>Back to All Products</span>
          </button>

          <button
            onClick={onOpenCompare}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 hover:bg-white/15 text-xs text-white border border-white/10 transition-colors"
          >
            <ArrowLeftRight className="w-3.5 h-3.5 text-[#2997ff]" />
            <span>Compare {categoryId.toUpperCase()} Models</span>
          </button>
        </div>

        {/* Content */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-semibold mb-3">
            <Sparkles className="w-3 h-3" style={{ color: meta.accentColor }} />
            <span className="text-[#a1a1a6]">{meta.eyebrow}</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            {meta.title}
          </h1>

          <p className="mt-3 text-sm sm:text-base text-[#86868b] leading-relaxed max-w-2xl">
            {meta.tagline}
          </p>
        </div>
      </div>
    </section>
  )
}
