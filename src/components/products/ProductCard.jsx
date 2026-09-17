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
  // State for active color swatch to dynamically switch images
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
      className="group relative flex flex-col bg-[#161617] rounded-3xl border border-white/10 hover:border-white/25 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-black/60 cursor-pointer"
    >
      {/* Top Bar with Badges and Wishlist */}
      <div className="p-4 flex items-center justify-between relative z-10">
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

        <div className="flex items-center gap-1">
          {/* Compare toggle */}
          <button
            onClick={handleCompareClick}
            title={isInCompare ? 'Remove from compare' : 'Add to compare'}
            className={`p-2 rounded-full transition-colors ${
              isInCompare
                ? 'bg-[#2997ff] text-white'
                : 'bg-white/5 text-[#86868b] hover:text-white hover:bg-white/15'
            }`}
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
          >
            <Heart
              className={`w-3.5 h-3.5 ${isWishlisted ? 'fill-current text-[#ff375f]' : ''}`}
            />
          </button>
        </div>
      </div>

      {/* Visual Image Area with hover zoom */}
      <div className="relative h-60 sm:h-64 px-6 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#161617] to-[#111112]">
        <img
          src={activeColor.image}
          alt={`${product.name} - ${activeColor.name}`}
          className="max-h-52 w-auto object-contain transition-all duration-500 group-hover:scale-110"
          loading="lazy"
        />

        {/* Quick View Hover Pill */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2">
          <span className="px-4 py-2 rounded-full bg-white text-black font-semibold text-xs flex items-center gap-1.5 shadow-xl transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <Eye className="w-3.5 h-3.5" /> Quick View
          </span>
        </div>
      </div>

      {/* Product Content Details */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between bg-[#161617]">
        <div>
          {/* Category & Rating */}
          <div className="flex items-center justify-between text-xs text-[#86868b] mb-1">
            <span className="uppercase tracking-widest text-[10px] font-semibold text-[#a1a1a6]">
              {product.category}
            </span>
            <div className="flex items-center gap-1 text-amber-400">
              <Star className="w-3 h-3 fill-current" />
              <span className="text-white text-xs font-medium">{product.rating}</span>
              <span className="text-[#86868b] text-[10px]">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Title & Tagline */}
          <h3 className="text-lg sm:text-xl font-semibold text-[#f5f5f7] tracking-tight group-hover:text-[#2997ff] transition-colors">
            {product.name}
          </h3>
          <p className="text-xs text-[#86868b] mt-1 line-clamp-1">
            {product.tagline}
          </p>

          {/* Key spec badge */}
          <div className="mt-3 inline-block px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-[11px] text-[#a1a1a6] font-mono">
            {product.specs.chip}
          </div>

          {/* Color Finish Swatches */}
          <div className="mt-4 flex items-center gap-2">
            <span className="text-[11px] text-[#86868b]">Finish:</span>
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
            <span className="text-[10px] text-[#86868b] ml-1 truncate max-w-[90px]">
              {activeColor.name}
            </span>
          </div>
        </div>

        {/* Pricing and Add to Bag */}
        <div className="mt-6 pt-4 border-t border-white/10 flex items-end justify-between gap-2">
          <div>
            <div className="text-xs text-[#86868b]">From</div>
            <div className="text-lg font-bold text-white tracking-tight">
              {product.displayPrice}
            </div>
            <div className="text-[10px] text-[#86868b]">
              or {product.monthlyPrice.split('for')[0]}
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className={`px-4 py-2.5 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-all shadow-lg ${
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
