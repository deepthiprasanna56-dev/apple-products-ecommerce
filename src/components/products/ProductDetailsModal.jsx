import { useState, useEffect } from 'react'
import {
  X,
  Star,
  ShoppingBag,
  Zap,
  ShieldCheck,
  RefreshCw,
  Truck,
  Box,
  Sparkles
} from 'lucide-react'

export function ProductDetailsModal({
  product,
  onClose,
  onAddToCart,
  onBuyNow
}) {
  // Local state for configuration - hooks called unconditionally
  const [selectedColorIndex, setSelectedColorIndex] = useState(0)
  const [selectedStorageIndex, setSelectedStorageIndex] = useState(0)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [includeAppleCare, setIncludeAppleCare] = useState(false)
  const [applyTradeIn, setApplyTradeIn] = useState(false)
  const [activeTab, setActiveTab] = useState('specs') // 'specs' | 'highlights' | 'delivery'

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  if (!product) return null

  const activeColor = product.colors[selectedColorIndex] || product.colors[0]
  const activeStorage = product.storageOptions[selectedStorageIndex] || product.storageOptions[0]
  const gallery = activeColor.gallery || [activeColor.image]

  // Calculate live dynamic price
  const basePrice = product.price + (activeStorage?.priceDiff || 0)
  const tradeInDeduction = applyTradeIn ? Math.min(250, basePrice - 100) : 0
  const appleCareCost = includeAppleCare ? product.appleCarePrice : 0
  const finalPrice = basePrice + appleCareCost - tradeInDeduction

  const handleAdd = () => {
    onAddToCart({
      ...product,
      selectedColor: activeColor.name,
      selectedStorage: activeStorage.size,
      price: finalPrice,
      image: activeColor.image,
      appleCare: includeAppleCare,
      tradeIn: applyTradeIn
    })
    onClose()
  }

  const handleBuy = () => {
    onBuyNow({
      ...product,
      selectedColor: activeColor.name,
      selectedStorage: activeStorage.size,
      price: finalPrice,
      image: activeColor.image,
      appleCare: includeAppleCare,
      tradeIn: applyTradeIn
    })
    onClose()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-[#161617] border border-white/15 rounded-3xl overflow-hidden shadow-2xl my-auto text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-20 p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#86868b] hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-12 max-h-[90vh] overflow-y-auto">
          {/* Left Column: Gallery & Visuals */}
          <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between bg-gradient-to-b from-[#1c1c1e] to-[#121214] border-b lg:border-b-0 lg:border-r border-white/10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#2997ff]/20 text-[#2997ff] border border-[#2997ff]/30">
                  {product.badge || 'Apple Certified'}
                </span>
                <span className="text-xs text-[#86868b] uppercase tracking-wider font-semibold">
                  {product.category}
                </span>
              </div>

              {/* Main Active Image */}
              <div className="relative h-72 sm:h-96 flex items-center justify-center p-4 bg-black/30 rounded-2xl border border-white/5 overflow-hidden group">
                <img
                  src={gallery[selectedImageIndex] || activeColor.image}
                  alt={product.name}
                  className="max-h-80 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Gallery Thumbnails */}
              {gallery.length > 1 && (
                <div className="flex items-center justify-center gap-3 mt-4">
                  {gallery.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`w-14 h-14 rounded-xl overflow-hidden border p-1 bg-black/40 transition-all ${
                        selectedImageIndex === idx
                          ? 'border-[#2997ff] ring-2 ring-[#2997ff]/40'
                          : 'border-white/10 hover:border-white/30 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* In the box quick preview */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-3 text-xs text-[#86868b]">
              <Box className="w-4 h-4 text-[#2997ff]" />
              <span>
                <strong>In the Box:</strong> {product.inTheBox.join(' &middot; ')}
              </span>
            </div>
          </div>

          {/* Right Column: Customizer & Specs */}
          <div className="lg:col-span-6 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              {/* Rating & Reviews */}
              <div className="flex items-center gap-2 text-xs text-amber-400 mb-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-semibold text-white">{product.rating}</span>
                <span className="text-[#86868b]">({product.reviewsCount} customer reviews)</span>
              </div>

              {/* Title & Tagline */}
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
                {product.name}
              </h2>
              <p className="text-sm text-[#2997ff] font-medium mt-0.5">
                {product.tagline}
              </p>
              <p className="text-xs sm:text-sm text-[#86868b] mt-3 leading-relaxed">
                {product.description}
              </p>

              {/* Color Finish Selector */}
              <div className="mt-6">
                <div className="flex items-center justify-between text-xs font-semibold text-white mb-2.5">
                  <span>Finish: <span className="text-[#2997ff]">{activeColor.name}</span></span>
                </div>
                <div className="flex items-center gap-3">
                  {product.colors.map((color, idx) => (
                    <button
                      key={color.name}
                      onClick={() => {
                        setSelectedColorIndex(idx)
                        setSelectedImageIndex(0)
                      }}
                      className={`flex items-center gap-2 px-3 py-2 rounded-xl border text-xs transition-all ${
                        selectedColorIndex === idx
                          ? 'border-[#2997ff] bg-[#2997ff]/10 text-white'
                          : 'border-white/10 bg-white/5 text-[#86868b] hover:text-white hover:border-white/20'
                      }`}
                    >
                      <span
                        className="w-3.5 h-3.5 rounded-full border border-white/20 shrink-0"
                        style={{ backgroundColor: color.hex }}
                      />
                      <span>{color.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Storage Capacity Selector */}
              <div className="mt-6">
                <div className="flex items-center justify-between text-xs font-semibold text-white mb-2.5">
                  <span>Configuration / Storage</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {product.storageOptions.map((opt, idx) => (
                    <button
                      key={opt.size}
                      onClick={() => setSelectedStorageIndex(idx)}
                      className={`p-3 rounded-xl border text-left transition-all ${
                        selectedStorageIndex === idx
                          ? 'border-[#2997ff] bg-[#2997ff]/15 ring-1 ring-[#2997ff]'
                          : 'border-white/10 bg-white/5 hover:border-white/20'
                      }`}
                    >
                      <div className="text-xs font-bold text-white">{opt.size}</div>
                      <div className="text-[10px] text-[#86868b] mt-0.5">
                        {opt.priceDiff === 0 ? 'Included' : `+$${opt.priceDiff}`}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Add-ons: AppleCare+ & Trade-In */}
              <div className="mt-6 space-y-2.5">
                {/* AppleCare+ Checkbox */}
                <label className="flex items-center justify-between p-3 rounded-xl border border-white/10 bg-white/5 hover:border-white/20 cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={includeAppleCare}
                      onChange={(e) => setIncludeAppleCare(e.target.checked)}
                      className="accent-[#0071e3] w-4 h-4 rounded cursor-pointer"
                    />
                    <div>
                      <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#2997ff]" />
                        <span>AppleCare+ Protection (2 Years)</span>
                      </div>
                      <div className="text-[10px] text-[#86868b]">
                        Unlimited accidental damage repairs &amp; 24/7 priority support
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold text-white">
                    +${product.appleCarePrice}
                  </span>
                </label>

                {/* Trade-In Toggle */}
                <label className="flex items-center justify-between p-3 rounded-xl border border-white/10 bg-white/5 hover:border-white/20 cursor-pointer transition-colors">
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={applyTradeIn}
                      onChange={(e) => setApplyTradeIn(e.target.checked)}
                      className="accent-[#34c759] w-4 h-4 rounded cursor-pointer"
                    />
                    <div>
                      <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                        <RefreshCw className="w-3.5 h-3.5 text-[#34c759]" />
                        <span>Apple Trade In Credit</span>
                      </div>
                      <div className="text-[10px] text-[#86868b]">
                        Trade in an eligible older device for instant savings
                      </div>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-[#34c759]">
                    -$250 est.
                  </span>
                </label>
              </div>

              {/* Technical Specifications Tabs */}
              <div className="mt-6 pt-4 border-t border-white/10">
                <div className="flex items-center gap-4 text-xs font-semibold border-b border-white/10 pb-2 mb-3">
                  <button
                    onClick={() => setActiveTab('specs')}
                    className={`pb-1 transition-colors ${
                      activeTab === 'specs' ? 'text-[#2997ff] border-b-2 border-[#2997ff]' : 'text-[#86868b] hover:text-white'
                    }`}
                  >
                    Tech Specs
                  </button>
                  <button
                    onClick={() => setActiveTab('highlights')}
                    className={`pb-1 transition-colors ${
                      activeTab === 'highlights' ? 'text-[#2997ff] border-b-2 border-[#2997ff]' : 'text-[#86868b] hover:text-white'
                    }`}
                  >
                    Highlights
                  </button>
                  <button
                    onClick={() => setActiveTab('delivery')}
                    className={`pb-1 transition-colors ${
                      activeTab === 'delivery' ? 'text-[#2997ff] border-b-2 border-[#2997ff]' : 'text-[#86868b] hover:text-white'
                    }`}
                  >
                    Delivery &amp; Returns
                  </button>
                </div>

                {activeTab === 'specs' && (
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className="p-2.5 rounded-lg bg-white/5">
                      <span className="text-[#86868b] text-[10px] block">Processor</span>
                      <span className="font-medium text-white">{product.specs.chip}</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/5">
                      <span className="text-[#86868b] text-[10px] block">Display</span>
                      <span className="font-medium text-white">{product.specs.display}</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/5">
                      <span className="text-[#86868b] text-[10px] block">Battery Life</span>
                      <span className="font-medium text-white">{product.specs.battery}</span>
                    </div>
                    <div className="p-2.5 rounded-lg bg-white/5">
                      <span className="text-[#86868b] text-[10px] block">Materials &amp; Finish</span>
                      <span className="font-medium text-white">{product.specs.finish}</span>
                    </div>
                  </div>
                )}

                {activeTab === 'highlights' && (
                  <ul className="space-y-1.5 text-xs text-[#a1a1a6]">
                    {product.highlights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-[#2997ff] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {activeTab === 'delivery' && (
                  <div className="space-y-2 text-xs text-[#a1a1a6]">
                    <p className="flex items-center gap-2">
                      <Truck className="w-4 h-4 text-[#34c759]" />
                      <span>Free 2-day priority delivery on all orders over $35</span>
                    </p>
                    <p className="flex items-center gap-2">
                      <RefreshCw className="w-4 h-4 text-[#2997ff]" />
                      <span>Free 14-day hassle-free returns online or in-store</span>
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Bottom Actions and Price Total */}
            <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-xs text-[#86868b]">Total Price</div>
                <div className="text-2xl font-bold text-white tracking-tight">
                  ${finalPrice.toLocaleString()}
                </div>
                <div className="text-[10px] text-[#86868b]">
                  or ${(finalPrice / 24).toFixed(2)}/mo. for 24 mo. at 0% APR
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={handleAdd}
                  className="flex-1 sm:flex-initial px-5 py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-all flex items-center justify-center gap-2 border border-white/15"
                >
                  <ShoppingBag className="w-4 h-4 text-[#2997ff]" />
                  <span>Add to Bag</span>
                </button>
                <button
                  onClick={handleBuy}
                  className="flex-1 sm:flex-initial px-6 py-3 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white font-semibold text-xs transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#0071e3]/30"
                >
                  <Zap className="w-4 h-4" />
                  <span>Buy Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
