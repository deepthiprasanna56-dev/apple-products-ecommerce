import { Sparkles, Smartphone, Laptop, Tablet, Watch, Headphones } from 'lucide-react'
import { CATEGORIES } from '../../data/products'

const ICON_MAP = {
  Sparkles,
  Smartphone,
  Laptop,
  Tablet,
  Watch,
  Headphones
}

export function CategoryNav({ activeCategory, onSelectCategory }) {
  return (
    <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-4 scrollbar-none no-scrollbar">
      {CATEGORIES.map((category) => {
        const IconComponent = ICON_MAP[category.icon] || Sparkles
        const isActive = activeCategory === category.id

        return (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id)}
            className={`flex items-center gap-2.5 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 shrink-0 ${
              isActive
                ? 'bg-white text-black shadow-lg shadow-white/10 scale-105'
                : 'bg-white/5 text-[#86868b] hover:text-white hover:bg-white/10 border border-white/5'
            }`}
          >
            <IconComponent className={`w-4 h-4 ${isActive ? 'text-[#0071e3]' : 'text-[#86868b]'}`} />
            <span>{category.name}</span>
          </button>
        )
      })}
    </div>
  )
}
