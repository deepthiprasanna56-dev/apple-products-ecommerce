import { ArrowRight } from 'lucide-react'
import { ProductCard } from '../products/ProductCard'

export function CategoryShowcaseSection({
  title,
  subtitle,
  categoryId,
  products,
  onExploreCategory,
  wishlist,
  onToggleWishlist,
  onQuickView,
  onAddToCart,
  compareList,
  onToggleCompare
}) {
  if (!products || products.length === 0) return null

  return (
    <section className="py-10 sm:py-12 border-b border-white/10 last:border-b-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-3">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-widest text-[#2997ff]">
              Category Lineup
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mt-0.5">
              {title}
            </h2>
            <p className="text-xs text-[#86868b] mt-0.5 max-w-xl">
              {subtitle}
            </p>
          </div>

          <button
            onClick={() => onExploreCategory(categoryId)}
            className="self-start sm:self-auto inline-flex items-center gap-1.5 text-xs font-semibold text-[#2997ff] hover:text-[#70baff] transition-colors group"
          >
            <span>Explore all {title} models</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Product Cards Grid - Exactly 3 full columns with zero empty space */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              isWishlisted={wishlist.includes(product.id)}
              onToggleWishlist={onToggleWishlist}
              onQuickView={onQuickView}
              onAddToCart={onAddToCart}
              isInCompare={compareList.some((p) => p.id === product.id)}
              onToggleCompare={onToggleCompare}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
