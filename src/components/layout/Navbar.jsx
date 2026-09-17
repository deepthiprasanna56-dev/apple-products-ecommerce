import { useState, useEffect } from 'react'
import { Search, ShoppingBag, Heart, Menu, X, ArrowLeftRight } from 'lucide-react'
import { CATEGORIES } from '../../data/products'

export function Navbar({
  activeCategory,
  onSelectCategory,
  cartCount,
  wishlistCount,
  onOpenCart,
  onOpenWishlist,
  onOpenSearch,
  onOpenCompare,
  compareCount
}) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCategoryClick = (catId) => {
    onSelectCategory(catId)
    setMobileMenuOpen(false)
    const el = document.getElementById('catalog-section')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#161617]/85 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/20 py-3'
          : 'bg-[#161617]/95 backdrop-blur-md border-b border-white/5 py-3.5'
      }`}
    >
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Apple Logo */}
        <button
          onClick={() => {
            onSelectCategory('all')
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          className="flex items-center gap-2 text-white hover:opacity-80 transition-opacity group"
          aria-label="Apple Store Home"
        >
          <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 170 170">
            <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.6-7.7-11.7-13.98-5.77-8.81-10.38-19.12-13.84-30.93-3.46-11.81-5.19-23.01-5.19-33.6 0-14.58 3.73-26.69 11.19-36.33 7.46-9.64 16.79-14.54 27.99-14.7 4.91 0 10.19 1.25 15.84 3.76 5.65 2.5 9.42 3.81 11.31 3.91 1.57-.1 5.48-1.46 11.72-4.08 6.24-2.61 11.66-3.83 16.27-3.65 12.55.77 22.42 5.37 29.62 13.8-10.99 6.64-16.38 15.82-16.16 27.53.22 9.24 3.86 16.92 10.92 23.03 7.06 6.12 15.35 9.61 24.87 10.49-2.18 6.74-4.8 13.25-7.87 19.53zm-29.68-108.97c0 6.63-2.5 12.83-7.5 17.59-4.99 4.77-11.02 7.64-18.09 7.64-.22-1.09-.33-2.17-.33-3.26 0-6.42 2.66-12.72 7.73-17.65 5.06-4.93 11.3-7.85 17.86-8.32.22 1.3.33 2.63.33 4z" />
          </svg>
          <span className="font-semibold text-sm tracking-tight text-[#f5f5f7] hidden sm:inline">
            Apple Store
          </span>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9">
          {CATEGORIES.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className={`text-xs font-normal tracking-wide transition-colors relative py-1 ${
                activeCategory === category.id
                  ? 'text-white font-medium'
                  : 'text-[#a1a1a6] hover:text-[#f5f5f7]'
              }`}
            >
              {category.name}
              {activeCategory === category.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#2997ff] rounded-full animate-in fade-in duration-200" />
              )}
            </button>
          ))}
        </nav>

        {/* Action Icons */}
        <div className="flex items-center gap-3 sm:gap-4">
          {/* Spotlight Search */}
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full text-[#a1a1a6] hover:text-white hover:bg-white/10 transition-colors text-xs"
            title="Search products (Cmd+K)"
            aria-label="Search products"
          >
            <Search className="w-4 h-4" />
            <span className="hidden lg:inline text-[11px] text-[#86868b] border border-white/15 px-1.5 py-0.5 rounded">
              ⌘K
            </span>
          </button>

          {/* Compare Button */}
          <button
            onClick={onOpenCompare}
            className="relative p-2 rounded-full text-[#a1a1a6] hover:text-white hover:bg-white/10 transition-colors"
            title="Compare models"
            aria-label="Compare models"
          >
            <ArrowLeftRight className="w-4 h-4" />
            {compareCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#2997ff] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center animate-pulse">
                {compareCount}
              </span>
            )}
          </button>

          {/* Wishlist */}
          <button
            onClick={onOpenWishlist}
            className="relative p-2 rounded-full text-[#a1a1a6] hover:text-white hover:bg-white/10 transition-colors"
            title="Wishlist"
            aria-label="View wishlist"
          >
            <Heart className="w-4 h-4" />
            {wishlistCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#ff375f] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                {wishlistCount}
              </span>
            )}
          </button>

          {/* Shopping Bag */}
          <button
            onClick={onOpenCart}
            className="relative flex items-center gap-2 p-2 rounded-full bg-white/10 hover:bg-white/15 text-white transition-colors"
            title="Shopping Bag"
            aria-label={`Shopping bag with ${cartCount} items`}
          >
            <ShoppingBag className="w-4 h-4 text-[#2997ff]" />
            {cartCount > 0 ? (
              <span className="bg-[#2997ff] text-white text-[10px] font-bold rounded-full px-1.5 py-0.2 min-w-[18px] h-[18px] flex items-center justify-center">
                {cartCount}
              </span>
            ) : (
              <span className="text-xs text-[#a1a1a6] hidden sm:inline pr-1">Bag</span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full text-[#a1a1a6] hover:text-white hover:bg-white/10 transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#161617] border-b border-white/10 px-4 pt-3 pb-6 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col gap-3">
            {CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`flex items-center justify-between py-2 text-sm text-left transition-colors ${
                  activeCategory === category.id
                    ? 'text-white font-medium border-l-2 border-[#2997ff] pl-3'
                    : 'text-[#a1a1a6] hover:text-white pl-3'
                }`}
              >
                <span>{category.name}</span>
                <span className="text-xs text-[#86868b]">Explore &rarr;</span>
              </button>
            ))}
            <div className="pt-3 border-t border-white/10 flex gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  onOpenSearch()
                }}
                className="flex-1 py-2.5 px-3 rounded-xl bg-white/5 text-xs text-white flex items-center justify-center gap-2"
              >
                <Search className="w-3.5 h-3.5 text-[#2997ff]" /> Search Store
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false)
                  onOpenCompare()
                }}
                className="flex-1 py-2.5 px-3 rounded-xl bg-white/5 text-xs text-white flex items-center justify-center gap-2"
              >
                <ArrowLeftRight className="w-3.5 h-3.5 text-[#2997ff]" /> Compare
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
