import { Search, SlidersHorizontal, X } from 'lucide-react'

export function FilterBar({
  searchQuery,
  onSearchChange,
  sortBy,
  onSortChange,
  maxPrice,
  onMaxPriceChange,
  totalResults,
  onResetFilters
}) {
  const isFiltered = searchQuery.trim() !== '' || maxPrice < 2000 || sortBy !== 'featured'

  return (
    <div className="bg-[#161617]/90 backdrop-blur-md rounded-2xl border border-white/10 p-4 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
      {/* Search Field */}
      <div className="relative w-full md:w-72">
        <Search className="w-4 h-4 text-[#86868b] absolute left-3.5 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          placeholder="Filter by model or chip..."
          className="w-full pl-9 pr-8 py-2 bg-white/5 border border-white/10 rounded-xl text-xs sm:text-sm text-white placeholder-[#86868b] focus:outline-none focus:border-[#2997ff] focus:ring-1 focus:ring-[#2997ff] transition-all"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange('')}
            className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#86868b] hover:text-white"
            aria-label="Clear filter"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* Price Slider & Sort Controls */}
      <div className="flex flex-wrap items-center justify-between md:justify-end w-full md:w-auto gap-4">
        {/* Price Slider */}
        <div className="flex items-center gap-2 text-xs text-[#86868b]">
          <span className="hidden sm:inline">Max:</span>
          <span className="font-semibold text-white min-w-[50px]">${maxPrice}</span>
          <input
            type="range"
            min="150"
            max="2000"
            step="50"
            value={maxPrice}
            onChange={(e) => onMaxPriceChange(Number(e.target.value))}
            className="w-24 sm:w-32 accent-[#2997ff] cursor-pointer"
          />
        </div>

        {/* Sort Select */}
        <div className="flex items-center gap-2">
          <SlidersHorizontal className="w-3.5 h-3.5 text-[#86868b] hidden sm:inline" />
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="bg-white/5 border border-white/10 rounded-xl py-2 px-3 text-xs text-white focus:outline-none focus:border-[#2997ff] cursor-pointer"
          >
            <option value="featured" className="bg-[#161617] text-white">Featured</option>
            <option value="price-low" className="bg-[#161617] text-white">Price: Low to High</option>
            <option value="price-high" className="bg-[#161617] text-white">Price: High to Low</option>
            <option value="rating" className="bg-[#161617] text-white">Customer Rating</option>
          </select>
        </div>

        {/* Results count & Clear */}
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#86868b]">
            {totalResults} {totalResults === 1 ? 'model' : 'models'}
          </span>
          {isFiltered && (
            <button
              onClick={onResetFilters}
              className="text-xs text-[#2997ff] hover:underline"
            >
              Reset
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
