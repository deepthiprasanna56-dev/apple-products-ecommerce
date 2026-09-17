import { CATEGORIES } from '../../data/products'
import { Sparkles, Smartphone, Laptop, Tablet, Watch, Headphones } from 'lucide-react'

const ICON_MAP = {
  Sparkles,
  Smartphone,
  Laptop,
  Tablet,
  Watch,
  Headphones
}

export function StoreRibbon({ activeCategory, onSelectCategory }) {
  return (
    <nav className="bg-[#111113]/90 backdrop-blur-md border-b border-white/10 py-3 sticky top-12 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start sm:justify-center gap-4 sm:gap-7 overflow-x-auto no-scrollbar py-0.5">
          {CATEGORIES.map((cat) => {
            const Icon = ICON_MAP[cat.icon] || Sparkles
            const isActive = activeCategory === cat.id

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex flex-col items-center gap-1.5 group transition-all shrink-0 px-2 py-1 rounded-2xl ${
                  isActive
                    ? 'text-white'
                    : 'text-[#86868b] hover:text-[#f5f5f7]'
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-2xl flex items-center justify-center transition-all ${
                    isActive
                      ? 'bg-[#0071e3] text-white shadow-md shadow-[#0071e3]/30 scale-105'
                      : 'bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 text-[#a1a1a6] group-hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <span className={`text-[11px] tracking-tight ${isActive ? 'font-semibold text-white' : 'font-normal'}`}>
                  {cat.name}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </nav>
  )
}
