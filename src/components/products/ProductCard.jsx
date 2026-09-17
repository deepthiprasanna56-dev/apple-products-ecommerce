import { useState } from 'react'
import { Heart, Eye, ShoppingBag, Star, Check, ArrowLeftRight } from 'lucide-react'

export function ProductCard({
  product,
  isWishlisted,
  onToggleWishlist,
  onQuickView,
  onAddToCart,
  isInCompare,
  onToggleCompare
}) {
  const [selectedColorIndex, setSelectedColorIndex] = useState(0)
  const [isAdding, setIsAdding] = useState(false)

  const activeColor = product.colors[selectedColorIndex] || product.colors[0]

  const handleAddToCart = (e) => {
    e.stopPropagation()
    setIsAdding(true)
    onAddToCart({
      ...product,
      selectedColor: activeColor.name,
      selectedStorage: product.storageOptions[0].size,
      price: product.price,
      image: activeColor.image
    })
    setTimeout(() => setIsAdding(false), 800)
  }

  const handleWishlistClick = (e) => {
    e.stopPropagation()
    onToggleWishlist(product.id)
  }

  const handleCompareClick = (e) => {
    e.stopPropagation()
    onToggleCompare(product)
  }

  return (
    <div
      onClick={() => onQuickView(product)}
      className="group relative h-full flex flex-col justify-between bg-[#161617] rounded-3xl border border-white/10 hover:border-[#0071e3]/45 hover:-translate-y-2 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#0071e3]/25 cursor-pointer"
    >
      {/* Ambient glowing border aura on card hover */}
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#0071e3]/0 via-[#2997ff]/0 to-[#9933ff]/0 group-hover:from-[#0071e3]/20 group-hover:via-[#2997ff]/20 group-hover:to-[#9933ff]/20 rounded-3xl blur-sm -z-10 transition-all duration-500 pointer-events-none" />

      {/* Top Header with Badges and Actions */}
      <div className="p-4 sm:p-5 flex items-center justify-between relative z-10 min-h-[58px]">
        <div className="flex items-center gap-1.5 flex-wrap">
          {product.badge && (
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#2997ff]/20 text-[#2997ff] border border-[#2997ff]/30">
              {product.badge}
            </span>
          )}
          {product.featured && (
            <span className="px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-amber-500/20 text-amber-300 border border-amber-500/30">
              Flagship
            </span>
          )}
        </div>

        <div className="flex items-center gap-1.5">
          {/* Compare toggle */}
          <button
            onClick={handleCompareClick}
            title={isInCompare ? 'Remove from compare' : 'Add to compare'}
            className={`p-2 rounded-full transition-colors ${
              isInCompare
                ? 'bg-[#2997ff] text-white shadow-md shadow-[#2997ff]/40'
                : 'bg-white/5 text-[#86868b] hover:text-white hover:bg-white/15'
            }`}
            aria-label="Compare model"
          >
            <ArrowLeftRight className="w-3.5 h-3.5" />
          </button>

          {/* Wishlist toggle */}
          <button
            onClick={handleWishlistClick}
            title={isWishlisted ? 'Remove from wishlist' : 'Save to wishlist'}
            className={`p-2 rounded-full transition-colors ${
              isWishlisted
                ? 'bg-[#ff375f]/20 text-[#ff375f]'
                : 'bg-white/5 text-[#86868b] hover:text-white hover:bg-white/15'
            }`}
            aria-label="Toggle wishlist"
          >
            <Heart
              className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-current text-[#ff375f]' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* Visual Image Area with Illuminated Studio Spotlight Backdrop */}
      <div className="relative h-60 sm:h-64 px-6 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#242428] via-[#1c1c20] to-[#141417]">
        {/* Soft radial studio backlight with glow pulse */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute w-48 h-48 rounded-full bg-[#0071e3]/15 group-hover:bg-[#2997ff]/30 blur-2xl pointer-events-none transition-all duration-500" />

        <img
          src={activeColor.image}
          alt={`${product.name} - ${activeColor.name}`}
          className="max-h-52 w-auto max-w-[88%] object-contain transition-all duration-500 group-hover:scale-110 group-hover:-translate-y-1.5 drop-shadow-[0_15px_25px_rgba(0,0,0,0.7)] relative z-10"
          loading="lazy"
        />

        {/* Quick View Hover Overlay Pill */}
        <div className="absolute inset-0 z-20 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
          <span className="px-4 py-2 rounded-full bg-white text-black font-semibold text-xs flex items-center gap-1.5 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <Eye className="w-3.5 h-3.5 text-[#0071e3]" /> Quick View
          </span>
        </div>
      </div>

      {/* Content Details with Fixed Heights for Pixel-Perfect Grid Alignment */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between bg-[#161617]">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-xs text-[#86868b] mb-1.5">
            <span className="uppercase tracking-widest text-[10px] font-semibold text-[#2997ff]">
              {product.category}
            </span>
            <div className="flex items-center gap-1 text-amber-400">
              <Star className="w-3 h-3 fill-current" />
              <span className="text-white text-xs font-semibold">{product.rating}</span>
              <span className="text-[#86868b] text-[10px]">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Product Title - Uniform height */}
          <h3 className="text-lg sm:text-xl font-bold text-[#f5f5f7] tracking-tight group-hover:text-[#2997ff] transition-colors min-h-[28px] flex items-center">
            {product.name}
          </h3>

          {/* Tagline - Uniform height */}
          <p className="text-xs text-[#86868b] mt-1 line-clamp-2 min-h-[34px]">
            {product.tagline}
          </p>

          {/* Chip Badge - Uniform height */}
          <div className="mt-2 min-h-[28px] flex items-center">
            <span className="inline-block px-2.5 py-0.5 rounded-lg bg-white/5 border border-white/10 text-[11px] text-[#a1a1a6] font-mono truncate max-w-full">
              {product.specs.chip}
            </span>
          </div>

          {/* Color Finish Swatches - Uniform height */}
          <div className="mt-3.5 min-h-[30px] flex items-center justify-between">
            <div className="flex items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
              {product.colors.map((color, idx) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColorIndex(idx)}
                  title={color.name}
                  className={`w-4 h-4 rounded-full border transition-all ${
                    selectedColorIndex === idx
                      ? 'ring-2 ring-[#2997ff] scale-110 border-white'
                      : 'border-white/20 hover:scale-105'
                  }`}
                  style={{ backgroundColor: color.hex }}
                  aria-label={`Select ${color.name}`}
                />
              ))}
            </div>
            <span className="text-[11px] text-[#86868b] truncate max-w-[120px] text-right">
              {activeColor.name}
            </span>
          </div>
        </div>

        {/* Pricing and Action Button - Fixed baseline across all cards */}
        <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between gap-2">
          <div>
            <div className="text-[11px] text-[#86868b]">From</div>
            <div className="text-lg font-bold text-white tracking-tight leading-none mt-0.5">
              {product.displayPrice}
            </div>
            <div className="text-[10px] text-[#86868b] mt-0.5">
              or {product.monthlyPrice.split('for')[0]}
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className={`px-4 py-2.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all shadow-md shrink-0 ${
              isAdding
                ? 'bg-[#34c759] text-white scale-95'
                : 'bg-[#0071e3] hover:bg-[#0077ed] text-white hover:scale-105 shadow-[#0071e3]/20'
            }`}
          >
            {isAdding ? (
              <>
                <Check className="w-3.5 h-3.5" /> Added
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" /> Add to Bag
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  )
}
