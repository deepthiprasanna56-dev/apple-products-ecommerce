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
    <section className="bg-[#121214] border-b border-white/10 py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-start md:justify-center gap-4 sm:gap-8 overflow-x-auto no-scrollbar py-1">
          {CATEGORIES.map((cat) => {
            const Icon = ICON_MAP[cat.icon] || Sparkles
            const isActive = activeCategory === cat.id

            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                className={`flex flex-col items-center gap-2 group transition-all shrink-0 px-3 py-1.5 rounded-2xl ${
                  isActive
                    ? 'text-white'
                    : 'text-[#86868b] hover:text-[#f5f5f7]'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${
                    isActive
                      ? 'bg-[#0071e3] text-white shadow-lg shadow-[#0071e3]/30 scale-105'
                      : 'bg-white/5 border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 text-[#a1a1a6] group-hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <span className={`text-xs tracking-tight ${isActive ? 'font-semibold text-white' : 'font-normal'}`}>
                  {cat.name}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
