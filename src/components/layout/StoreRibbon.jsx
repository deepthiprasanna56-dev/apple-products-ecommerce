import { useState } from 'react'
import { CATEGORIES } from '../../data/products'
import { Home, Sparkles, Smartphone, Laptop, Tablet, Watch, Headphones } from 'lucide-react'

const ICON_MAP = {
  Home,
  Sparkles,
  Smartphone,
  Laptop,
  Tablet,
  Watch,
  Headphones
}

export function StoreRibbon({ activeCategory, onSelectCategory }) {
  const [hoveredCategory, setHoveredCategory] = useState(null)

  return (
    <aside
      aria-label="Quick Category Dock"
      className="fixed bottom-5 sm:bottom-7 left-1/2 -translate-x-1/2 z-40 pointer-events-auto"
    >
      {/* Ambient Pulsing Glowing Aura Behind Dock */}
      <div className="absolute -inset-2 bg-gradient-to-r from-[#0071e3]/30 via-[#9933ff]/25 to-[#2997ff]/30 rounded-full blur-xl -z-10 opacity-75 animate-glow-pulse pointer-events-none" />

      {/* Floating 3D Glass Dock Capsule */}
      <nav className="dock-glass rounded-full px-2.5 sm:px-4 py-2 flex items-center gap-1.5 sm:gap-2.5 shadow-2xl relative">
        {CATEGORIES.map((cat, idx) => {
          const Icon = ICON_MAP[cat.icon] || Sparkles
          const isActive = activeCategory === cat.id || (activeCategory === 'all' && cat.id === 'home')
          const isHovered = hoveredCategory === cat.id

          return (
            <div key={cat.id} className="relative flex flex-col items-center">
              {/* Floating Tooltip with 3D Pop */}
              {isHovered && (
                <div className="absolute -top-9 px-2.5 py-1 rounded-lg bg-[#1c1c1e]/95 border border-white/20 text-[11px] font-medium text-white shadow-xl backdrop-blur-md pointer-events-none whitespace-nowrap animate-in fade-in zoom-in-90 duration-150">
                  {cat.name}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#1c1c1e] rotate-45 border-r border-b border-white/20" />
                </div>
              )}

              {/* 3D Interactive Dock Item */}
              <button
                onClick={() => onSelectCategory(cat.id)}
                onMouseEnter={() => setHoveredCategory(cat.id)}
                onMouseLeave={() => setHoveredCategory(null)}
                className={`relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-2xl transition-all duration-300 transform preserve-3d cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-tr from-[#0071e3] to-[#2997ff] text-white shadow-lg shadow-[#0071e3]/50 scale-110 -translate-y-1'
                    : 'bg-white/5 text-[#a1a1a6] hover:text-white hover:bg-white/15 hover:-translate-y-2 hover:scale-115 border border-white/10 hover:border-white/25 hover:shadow-lg hover:shadow-[#0071e3]/30'
                }`}
                title={cat.name}
                aria-label={cat.name}
              >
                <Icon className={`w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`} />

                {/* Subtle Active Indicator Dot */}
                {isActive && (
                  <span className="absolute -bottom-1.5 w-1.5 h-1.5 rounded-full bg-[#2997ff] shadow-[0_0_8px_#2997ff]" />
                )}
              </button>

              {/* Category separator after Store */}
              {idx === 1 && (
                <div className="hidden sm:block absolute -right-1.5 top-2 bottom-2 w-[1px] bg-white/15" />
              )}
            </div>
          )
        })}
      </nav>
    </aside>
  )
}
