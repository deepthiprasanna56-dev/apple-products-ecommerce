import { useState, useEffect, useRef, useCallback } from 'react'
import { Search, X, ArrowRight, Sparkles } from 'lucide-react'
import { PRODUCTS } from '../../data/products'

export function SearchModal({
  isOpen,
  onClose,
  onSelectProduct
}) {
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)

  const handleClose = useCallback(() => {
    setQuery('')
    onClose()
  }, [onClose])

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => inputRef.current?.focus(), 50)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  // Keyboard shortcut listener (ESC key)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleClose()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, handleClose])

  if (!isOpen) return null

  const filteredProducts = query.trim() === ''
    ? []
    : PRODUCTS.filter((p) => {
        const text = `${p.name} ${p.category} ${p.tagline} ${p.specs.chip} ${p.description}`.toLowerCase()
        return text.includes(query.toLowerCase())
      }).slice(0, 6)

  const quickSearches = ['iPhone 16 Pro', 'MacBook Pro M4', 'Apple Watch Ultra', 'AirPods Max', 'iPad Pro OLED']

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-150"
      onClick={handleClose}
    >
      <div
        className="w-full max-w-2xl bg-[#161617] border border-white/15 rounded-3xl overflow-hidden shadow-2xl text-white animate-in slide-in-from-top-4 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Bar Input */}
        <div className="p-4 sm:p-5 border-b border-white/10 flex items-center gap-3">
          <Search className="w-5 h-5 text-[#2997ff] shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for iPhone, Mac, iPad, Watch, AirPods, M4..."
            className="w-full bg-transparent text-sm sm:text-base text-white placeholder-[#86868b] focus:outline-none"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-[#86868b] hover:text-white p-1"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={handleClose}
            className="text-xs px-2.5 py-1 rounded-lg bg-white/10 text-[#86868b] hover:text-white"
          >
            ESC
          </button>
        </div>

        {/* Quick Suggestion Pills */}
        <div className="px-5 py-3 bg-white/5 border-b border-white/5 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <span className="text-[11px] text-[#86868b] shrink-0">Quick Searches:</span>
          {quickSearches.map((term) => (
            <button
              key={term}
              onClick={() => setQuery(term)}
              className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/15 text-[11px] text-[#a1a1a6] hover:text-white whitespace-nowrap transition-colors"
            >
              {term}
            </button>
          ))}
        </div>

        {/* Search Results */}
        <div className="max-h-96 overflow-y-auto p-4 divide-y divide-white/5">
          {query.trim() === '' ? (
            <div className="py-8 text-center text-[#86868b] text-xs">
              <Sparkles className="w-6 h-6 mx-auto mb-2 text-[#2997ff]/60" />
              Type anything to discover Apple products, silicon chips, and tech specs.
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="py-8 text-center text-[#86868b] text-xs">
              No products found for "{query}". Try another keyword or explore categories.
            </div>
          ) : (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  onSelectProduct(product)
                  handleClose()
                }}
                className="py-3 px-3 rounded-2xl hover:bg-white/5 flex items-center justify-between gap-4 cursor-pointer transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-black/40 border border-white/5 p-1.5 flex items-center justify-center shrink-0">
                    <img
                      src={product.colors[0].image}
                      alt={product.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-semibold text-white group-hover:text-[#2997ff] transition-colors">
                        {product.name}
                      </span>
                      {product.badge && (
                        <span className="text-[9px] uppercase font-bold px-1.5 py-0.2 rounded bg-[#2997ff]/20 text-[#2997ff]">
                          {product.badge}
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-[#86868b] mt-0.5">
                      {product.specs.chip} &middot; {product.displayPrice}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1 text-xs text-[#2997ff] opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>View</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
