import { FilterBar } from './FilterBar'
import { ProductCard } from './ProductCard'
import { Sparkles, MessageCircle, Store as StoreIcon, ShieldCheck } from 'lucide-react'

export function StorePage({
  categoryProducts,
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  maxPrice,
  onMaxPriceChange,
  selectedCategoryFilter,
  onCategoryFilterChange,
  wishlist,
  onToggleWishlist,
  onQuickView,
  onAddToCart,
  compareList,
  onToggleCompare
}) {
  const categoryFilters = [
    { id: 'all', label: 'All Products' },
    { id: 'iphone', label: 'iPhone' },
    { id: 'mac', label: 'Mac' },
    { id: 'ipad', label: 'iPad' },
    { id: 'watch', label: 'Apple Watch' },
    { id: 'airpods', label: 'AirPods' }
  ]

  return (
    <div className="animate-in fade-in duration-300">
      {/* Store Header Banner */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#1c1c1e] via-[#121214] to-[#000000] text-white pt-24 pb-12 border-b border-white/10">
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs text-[#a1a1a6] mb-3">
                <Sparkles className="w-3.5 h-3.5 text-[#2997ff]" />
                <span>Apple Store Catalog</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                Store. <span className="text-[#86868b] font-normal">The best way to buy the products you love.</span>
              </h1>
              <p className="mt-3 text-sm sm:text-base text-[#a1a1a6] max-w-2xl">
                Explore our full ecosystem of innovative hardware, accessories, and customized configurations with official Apple warranty.
              </p>
            </div>

            {/* Specialist & Assistance Mini Cards */}
            <div className="flex items-center gap-3 shrink-0">
              <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="w-9 h-9 rounded-full bg-[#0071e3]/20 flex items-center justify-center text-[#2997ff]">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Need shopping advice?</div>
                  <div className="text-[11px] text-[#86868b]">Ask an Apple Specialist</div>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <div className="w-9 h-9 rounded-full bg-[#30d158]/20 flex items-center justify-center text-[#30d158]">
                  <StoreIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Visit an Apple Store</div>
                  <div className="text-[11px] text-[#86868b]">Find a store near you</div>
                </div>
              </div>
            </div>
          </div>

          {/* Inline Quick Category Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar mt-8 pt-4 border-t border-white/10">
            {categoryFilters.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onCategoryFilterChange(tab.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium shrink-0 transition-all ${
                  selectedCategoryFilter === tab.id
                    ? 'bg-white text-black font-semibold shadow-md'
                    : 'bg-white/5 text-[#a1a1a6] hover:text-white hover:bg-white/10 border border-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Store Catalog Content Container */}
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12 py-10">
        {/* Filter and Sort Toolbar */}
        <FilterBar
          searchQuery={searchQuery}
          onSearchChange={onSearchChange}
          sortBy={sortBy}
          onSortChange={onSortChange}
          maxPrice={maxPrice}
          onMaxPriceChange={onMaxPriceChange}
          totalResults={categoryProducts.length}
          onResetFilters={() => {
            onSearchChange('')
            onMaxPriceChange(2000)
            onSortChange('featured')
            onCategoryFilterChange('all')
          }}
        />

        {/* Products Grid */}
        {categoryProducts.length === 0 ? (
          <div className="py-20 text-center bg-[#161617]/50 rounded-3xl border border-white/10 p-8">
            <h3 className="text-lg font-semibold text-white">No products match your current filters.</h3>
            <p className="text-xs text-[#86868b] mt-1">
              Try adjusting the price slider, clearing your search query, or selecting another category.
            </p>
            <button
              onClick={() => {
                onSearchChange('')
                onMaxPriceChange(2000)
                onCategoryFilterChange('all')
              }}
              className="mt-4 px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-xs text-white transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {categoryProducts.map((product) => (
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
        )}

        {/* Apple Guarantee Footnote Banner */}
        <div className="mt-16 p-6 rounded-3xl bg-[#161617]/40 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#0071e3]/20 flex items-center justify-center text-[#2997ff] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-sm font-semibold text-white">Official Apple Warranty & 14-Day Free Returns</h4>
              <p className="text-xs text-[#86868b]">All hardware purchases include one-year limited warranty and 90 days of complimentary support.</p>
            </div>
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 text-xs text-white transition-colors shrink-0"
          >
            Back to top &uarr;
          </button>
        </div>
      </div>
    </div>
  )
}
