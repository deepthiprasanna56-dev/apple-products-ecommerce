import { useState } from 'react'
import { X, ArrowLeftRight } from 'lucide-react'
import { PRODUCTS } from '../../data/products'

export function CompareModal({
  isOpen,
  onClose,
  initialProducts = [],
  onAddToCart
}) {
  const [selectedAId, setSelectedAId] = useState('')
  const [selectedBId, setSelectedBId] = useState('')

  if (!isOpen) return null

  // Resolve active products with fallbacks
  const productAId = selectedAId || initialProducts[0]?.id || 'iphone-16-pro'
  const productBId = selectedBId || initialProducts[1]?.id || 'iphone-16'

  const productA = PRODUCTS.find((p) => p.id === productAId) || PRODUCTS[0]
  const productB = PRODUCTS.find((p) => p.id === productBId) || PRODUCTS[1]

  const specRows = [
    { label: 'Category', key: 'category', format: (p) => p.category.toUpperCase() },
    { label: 'Starting Price', key: 'price', format: (p) => p.displayPrice },
    { label: 'Monthly Financing', key: 'monthly', format: (p) => p.monthlyPrice },
    { label: 'Processor', key: 'chip', format: (p) => p.specs.chip },
    { label: 'Display', key: 'display', format: (p) => p.specs.display },
    { label: 'Camera System', key: 'camera', format: (p) => p.specs.camera },
    { label: 'Battery Life', key: 'battery', format: (p) => p.specs.battery },
    { label: 'Finish Materials', key: 'finish', format: (p) => p.specs.finish },
    { label: 'Customer Rating', key: 'rating', format: (p) => `★ ${p.rating} / 5.0 (${p.reviewsCount})` }
  ]

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#161617] border border-white/15 rounded-3xl overflow-hidden shadow-2xl my-auto text-white p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#2997ff]/20 text-[#2997ff] flex items-center justify-center">
              <ArrowLeftRight className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Compare Apple Models
              </h3>
              <p className="text-xs text-[#86868b]">
                Select any two Apple devices to evaluate specifications side by side.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#86868b] hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Product Selectors & Previews */}
        <div className="grid grid-cols-2 gap-4 sm:gap-8 pt-6 pb-6 border-b border-white/10">
          {/* Model A */}
          <div className="flex flex-col items-center text-center">
            <select
              value={productAId}
              onChange={(e) => setSelectedAId(e.target.value)}
              className="w-full max-w-xs py-2 px-3 rounded-xl bg-white/10 border border-white/15 text-xs sm:text-sm text-white focus:outline-none focus:border-[#2997ff] cursor-pointer"
            >
              {PRODUCTS.map((p) => (
                <option key={p.id} value={p.id} className="bg-[#161617] text-white">
                  {p.name} ({p.displayPrice})
                </option>
              ))}
            </select>
            <div className="h-44 sm:h-52 w-full flex items-center justify-center my-3 bg-black/40 rounded-2xl p-3 border border-white/5">
              <img
                src={productA.colors[0].image}
                alt={productA.name}
                className="max-h-40 max-w-full object-contain"
              />
            </div>
            <h4 className="font-bold text-sm sm:text-base text-white">{productA.name}</h4>
            <span className="text-xs text-[#2997ff] font-semibold">{productA.displayPrice}</span>
            <button
              onClick={() => {
                onAddToCart({
                  ...productA,
                  selectedColor: productA.colors[0].name,
                  selectedStorage: productA.storageOptions[0].size,
                  price: productA.price,
                  image: productA.colors[0].image
                })
                onClose()
              }}
              className="mt-3 px-4 py-2 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white text-xs font-semibold transition-all shadow-md"
            >
              Add to Bag
            </button>
          </div>

          {/* Model B */}
          <div className="flex flex-col items-center text-center">
            <select
              value={productBId}
              onChange={(e) => setSelectedBId(e.target.value)}
              className="w-full max-w-xs py-2 px-3 rounded-xl bg-white/10 border border-white/15 text-xs sm:text-sm text-white focus:outline-none focus:border-[#2997ff] cursor-pointer"
            >
              {PRODUCTS.map((p) => (
                <option key={p.id} value={p.id} className="bg-[#161617] text-white">
                  {p.name} ({p.displayPrice})
                </option>
              ))}
            </select>
            <div className="h-44 sm:h-52 w-full flex items-center justify-center my-3 bg-black/40 rounded-2xl p-3 border border-white/5">
              <img
                src={productB.colors[0].image}
                alt={productB.name}
                className="max-h-40 max-w-full object-contain"
              />
            </div>
            <h4 className="font-bold text-sm sm:text-base text-white">{productB.name}</h4>
            <span className="text-xs text-[#2997ff] font-semibold">{productB.displayPrice}</span>
            <button
              onClick={() => {
                onAddToCart({
                  ...productB,
                  selectedColor: productB.colors[0].name,
                  selectedStorage: productB.storageOptions[0].size,
                  price: productB.price,
                  image: productB.colors[0].image
                })
                onClose()
              }}
              className="mt-3 px-4 py-2 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white text-xs font-semibold transition-all shadow-md"
            >
              Add to Bag
            </button>
          </div>
        </div>

        {/* Comparison Specs Matrix */}
        <div className="mt-4 max-h-72 overflow-y-auto pr-1">
          <div className="divide-y divide-white/5 text-xs">
            {specRows.map((row) => (
              <div key={row.key} className="py-3">
                <div className="text-[11px] font-semibold text-[#86868b] uppercase tracking-wider mb-1.5 text-center">
                  {row.label}
                </div>
                <div className="grid grid-cols-2 gap-4 sm:gap-8">
                  <div className="text-center font-medium text-white px-2">
                    {row.format(productA)}
                  </div>
                  <div className="text-center font-medium text-white px-2 border-l border-white/10">
                    {row.format(productB)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
