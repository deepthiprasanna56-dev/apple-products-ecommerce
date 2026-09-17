import { useState, useMemo, useEffect } from 'react'
import { Navbar } from './components/layout/Navbar'
import { StoreRibbon } from './components/layout/StoreRibbon'
import { HeroSection } from './components/home/HeroSection'
import { BentoGrid } from './components/home/BentoGrid'
import { PerksStrip } from './components/home/PerksStrip'
import { CategoryShowcaseSection } from './components/home/CategoryShowcaseSection'
import { CategoryHero } from './components/products/CategoryHero'
import { FilterBar } from './components/products/FilterBar'
import { ProductCard } from './components/products/ProductCard'
import { ProductDetailsModal } from './components/products/ProductDetailsModal'
import { CompareModal } from './components/products/CompareModal'
import { CartDrawer } from './components/cart/CartDrawer'
import { CheckoutModal } from './components/cart/CheckoutModal'
import { SearchModal } from './components/common/SearchModal'
import { WishlistDrawer } from './components/common/WishlistDrawer'
import { VideoModal } from './components/common/VideoModal'
import { ToastContainer } from './components/common/Toast'
import { Footer } from './components/layout/Footer'
import { PRODUCTS } from './data/products'

export default function App() {
  // Navigation & Catalog Filters
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('featured')
  const [maxPrice, setMaxPrice] = useState(2000)

  // Cart & Wishlist with localStorage persistence
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('apple_store_cart')
      return saved ? JSON.parse(saved) : []
    } catch {
      return []
    }
  })

  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('apple_store_wishlist')
      return saved ? JSON.parse(saved) : ['iphone-16-pro', 'macbook-pro-14-16']
    } catch {
      return []
    }
  })

  // Compare products list
  const [compareList, setCompareList] = useState([])

  // Modal states
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [isWishlistOpen, setIsWishlistOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isCompareOpen, setIsCompareOpen] = useState(false)
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false)
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [checkoutData, setCheckoutData] = useState(null)

  // Toast Notifications
  const [toasts, setToasts] = useState([])

  // Persist cart
  useEffect(() => {
    try {
      localStorage.setItem('apple_store_cart', JSON.stringify(cart))
    } catch (e) {
      console.error(e)
    }
  }, [cart])

  // Persist wishlist
  useEffect(() => {
    try {
      localStorage.setItem('apple_store_wishlist', JSON.stringify(wishlist))
    } catch (e) {
      console.error(e)
    }
  }, [wishlist])

  // Global Keyboard Shortcut: Cmd/Ctrl + K for Search
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsSearchOpen(true)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Add notification helper
  const addToast = (message, type = 'success') => {
    const id = Date.now() + Math.random()
    setToasts((prev) => [...prev, { id, message, type }])
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, 3500)
  }

  const dismissToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }

  // Cart operations
  const handleAddToCart = (productWithVariant) => {
    setCart((prev) => {
      const matchIndex = prev.findIndex(
        (item) =>
          item.id === productWithVariant.id &&
          item.selectedColor === productWithVariant.selectedColor &&
          item.selectedStorage === productWithVariant.selectedStorage
      )

      if (matchIndex > -1) {
        const updated = [...prev]
        updated[matchIndex].quantity += 1
        return updated
      } else {
        return [...prev, { ...productWithVariant, quantity: 1 }]
      }
    })

    addToast(`Added ${productWithVariant.name} (${productWithVariant.selectedColor || ''}) to your bag!`)
  }

  const handleUpdateQuantity = (id, selectedColor, selectedStorage, delta) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (
            item.id === id &&
            item.selectedColor === selectedColor &&
            item.selectedStorage === selectedStorage
          ) {
            return { ...item, quantity: item.quantity + delta }
          }
          return item
        })
        .filter((item) => item.quantity > 0)
    )
  }

  const handleRemoveFromCart = (id, selectedColor, selectedStorage) => {
    setCart((prev) =>
      prev.filter(
        (item) =>
          !(
            item.id === id &&
            item.selectedColor === selectedColor &&
            item.selectedStorage === selectedStorage
          )
      )
    )
    addToast('Item removed from your bag.', 'info')
  }

  // Wishlist operations
  const handleToggleWishlist = (productId) => {
    setWishlist((prev) => {
      const exists = prev.includes(productId)
      if (exists) {
        addToast('Removed from your Wishlist.', 'info')
        return prev.filter((id) => id !== productId)
      } else {
        addToast('Saved to your Wishlist!', 'success')
        return [...prev, productId]
      }
    })
  }

  // Compare operations
  const handleToggleCompare = (product) => {
    setCompareList((prev) => {
      const exists = prev.find((p) => p.id === product.id)
      if (exists) {
        return prev.filter((p) => p.id !== product.id)
      } else {
        if (prev.length >= 2) {
          addToast('Comparing maximum 2 models at a time.', 'info')
          return [prev[1], product]
        }
        addToast(`Added ${product.name} to comparison!`, 'info')
        return [...prev, product]
      }
    })
  }

  // Instant Buy Now trigger
  const handleBuyNow = (productWithVariant) => {
    handleAddToCart(productWithVariant)
    setCheckoutData({
      grandTotal: productWithVariant.price,
      cart: [{ ...productWithVariant, quantity: 1 }]
    })
    setIsCheckoutOpen(true)
  }

  // Proceed to Checkout from Bag
  const handleProceedToCheckout = (data) => {
    setCheckoutData(data)
    setIsCheckoutOpen(true)
  }

  // Order success cleanup
  const handleOrderSuccess = (orderId) => {
    setCart([])
    addToast(`Order ${orderId} confirmed! Thank you!`, 'success')
  }

  // Filtered and Sorted Catalog for Dedicated Category Page
  const categoryProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      const categoryMatch = activeCategory === 'all' || product.category === activeCategory
      const searchMatch =
        searchQuery.trim() === '' ||
        `${product.name} ${product.category} ${product.tagline} ${product.specs.chip}`
          .toLowerCase()
          .includes(searchQuery.toLowerCase())
      const priceMatch = product.price <= maxPrice
      return categoryMatch && searchMatch && priceMatch
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price
      if (sortBy === 'price-high') return b.price - a.price
      if (sortBy === 'rating') return b.rating - a.rating
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
    })
  }, [activeCategory, searchQuery, maxPrice, sortBy])

  // Products grouped by category for the Home View
  const iphoneProducts = useMemo(() => PRODUCTS.filter((p) => p.category === 'iphone'), [])
  const macProducts = useMemo(() => PRODUCTS.filter((p) => p.category === 'mac'), [])
  const ipadProducts = useMemo(() => PRODUCTS.filter((p) => p.category === 'ipad'), [])
  const watchProducts = useMemo(() => PRODUCTS.filter((p) => p.category === 'watch'), [])
  const airpodsProducts = useMemo(() => PRODUCTS.filter((p) => p.category === 'airpods'), [])

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0)
  const heroProduct = PRODUCTS.find((p) => p.id === 'iphone-16-pro') || PRODUCTS[0]

  return (
    <div className="min-h-screen bg-[#000000] text-[#f5f5f7] flex flex-col selection:bg-[#0071e3] selection:text-white">
      {/* Apple Frosted Navbar */}
      <Navbar
        activeCategory={activeCategory}
        onSelectCategory={(cat) => {
          setActiveCategory(cat)
          window.scrollTo({ top: 0, behavior: 'smooth' })
        }}
        cartCount={cartCount}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCompare={() => setIsCompareOpen(true)}
        compareCount={compareList.length}
      />

      {/* Main Content Area */}
      <main className="flex-1 pt-12">
        {/* Apple Store Category Ribbon */}
        <StoreRibbon
          activeCategory={activeCategory}
          onSelectCategory={(cat) => {
            setActiveCategory(cat)
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        />

        {/* VIEW MODE 1: ALL PRODUCTS (HOME STOREFRONT) */}
        {activeCategory === 'all' && (
          <div>
            {/* Cinematic Hero Section */}
            <HeroSection
              heroProduct={heroProduct}
              onExplore={() => {
                const el = document.getElementById('iphone-showcase')
                if (el) el.scrollIntoView({ behavior: 'smooth' })
              }}
              onBuy={handleBuyNow}
              onWatchFilm={() => setIsVideoOpen(true)}
            />

            {/* Apple Store Perks Strip */}
            <PerksStrip />

            {/* Bento Grid Hardware Innovations */}
            <BentoGrid
              onSelectProduct={(productId) => {
                const found = PRODUCTS.find((p) => p.id === productId)
                if (found) setSelectedProduct(found)
              }}
            />

            {/* DEDICATED CATEGORY SHOWCASE SECTIONS */}
            <div id="iphone-showcase">
              <CategoryShowcaseSection
                title="iPhone"
                subtitle="Explore iPhone 16 Pro, iPhone 16, and iPhone 15. Powered by Apple Intelligence."
                categoryId="iphone"
                products={iphoneProducts}
                onExploreCategory={(cat) => {
                  setActiveCategory(cat)
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                wishlist={wishlist}
                onToggleWishlist={handleToggleWishlist}
                onQuickView={(p) => setSelectedProduct(p)}
                onAddToCart={handleAddToCart}
                compareList={compareList}
                onToggleCompare={handleToggleCompare}
              />
            </div>

            <div id="mac-showcase">
              <CategoryShowcaseSection
                title="Mac"
                subtitle="MacBook Pro, MacBook Air, and Mac mini. Supercharged with M4 and M3 Apple Silicon."
                categoryId="mac"
                products={macProducts}
                onExploreCategory={(cat) => {
                  setActiveCategory(cat)
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                wishlist={wishlist}
                onToggleWishlist={handleToggleWishlist}
                onQuickView={(p) => setSelectedProduct(p)}
                onAddToCart={handleAddToCart}
                compareList={compareList}
                onToggleCompare={handleToggleCompare}
              />
            </div>

            <div id="ipad-showcase">
              <CategoryShowcaseSection
                title="iPad"
                subtitle="iPad Pro with breakthrough Tandem OLED and iPad Air. Versatile performance for creators."
                categoryId="ipad"
                products={ipadProducts}
                onExploreCategory={(cat) => {
                  setActiveCategory(cat)
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                wishlist={wishlist}
                onToggleWishlist={handleToggleWishlist}
                onQuickView={(p) => setSelectedProduct(p)}
                onAddToCart={handleAddToCart}
                compareList={compareList}
                onToggleCompare={handleToggleCompare}
              />
            </div>

            <div id="watch-showcase">
              <CategoryShowcaseSection
                title="Apple Watch"
                subtitle="Apple Watch Ultra 2 and Series 10. Advanced wellness, activity tracking, and emergency features."
                categoryId="watch"
                products={watchProducts}
                onExploreCategory={(cat) => {
                  setActiveCategory(cat)
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                wishlist={wishlist}
                onToggleWishlist={handleToggleWishlist}
                onQuickView={(p) => setSelectedProduct(p)}
                onAddToCart={handleAddToCart}
                compareList={compareList}
                onToggleCompare={handleToggleCompare}
              />
            </div>

            <div id="airpods-showcase">
              <CategoryShowcaseSection
                title="AirPods"
                subtitle="AirPods Pro 2, AirPods Max, and AirPods 4. Industry-leading Active Noise Cancellation."
                categoryId="airpods"
                products={airpodsProducts}
                onExploreCategory={(cat) => {
                  setActiveCategory(cat)
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
                wishlist={wishlist}
                onToggleWishlist={handleToggleWishlist}
                onQuickView={(p) => setSelectedProduct(p)}
                onAddToCart={handleAddToCart}
                compareList={compareList}
                onToggleCompare={handleToggleCompare}
              />
            </div>
          </div>
        )}

        {/* VIEW MODE 2: DEDICATED CATEGORY VIEW (IPHONE / MAC / IPAD / WATCH / AIRPODS) */}
        {activeCategory !== 'all' && (
          <div className="animate-in fade-in duration-300">
            {/* Category Banner Hero */}
            <CategoryHero
              categoryId={activeCategory}
              onBackToStore={() => {
                setActiveCategory('all')
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
              onOpenCompare={() => setIsCompareOpen(true)}
            />

            {/* Category Listing Grid Container - Expanded to remove side gaps */}
            <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12 py-10">
              {/* Filter and Sort Toolbar */}
              <FilterBar
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                sortBy={sortBy}
                onSortChange={setSortBy}
                maxPrice={maxPrice}
                onMaxPriceChange={setMaxPrice}
                totalResults={categoryProducts.length}
                onResetFilters={() => {
                  setSearchQuery('')
                  setMaxPrice(2000)
                  setSortBy('featured')
                }}
              />

              {/* Products Grid */}
              {categoryProducts.length === 0 ? (
                <div className="py-20 text-center bg-[#161617]/50 rounded-3xl border border-white/10 p-8">
                  <h3 className="text-lg font-semibold text-white">No models match your filters.</h3>
                  <p className="text-xs text-[#86868b] mt-1">
                    Try adjusting the price slider or search query.
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery('')
                      setMaxPrice(2000)
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
                      onToggleWishlist={handleToggleWishlist}
                      onQuickView={(p) => setSelectedProduct(p)}
                      onAddToCart={handleAddToCart}
                      isInCompare={compareList.some((p) => p.id === product.id)}
                      onToggleCompare={handleToggleCompare}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </main>

      {/* Directory Footer */}
      <Footer onSelectCategory={(cat) => {
        setActiveCategory(cat)
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }} />

      {/* MODALS AND DRAWERS */}

      {/* Product Details Customizer Modal */}
      <ProductDetailsModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
        onBuyNow={handleBuyNow}
      />

      {/* Shopping Bag Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveFromCart}
        onProceedToCheckout={handleProceedToCheckout}
      />

      {/* Saved for Later Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistIds={wishlist}
        onRemoveFromWishlist={handleToggleWishlist}
        onAddToCart={handleAddToCart}
        onQuickView={(p) => setSelectedProduct(p)}
      />

      {/* Spotlight Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      {/* Models Comparison Modal */}
      <CompareModal
        isOpen={isCompareOpen}
        onClose={() => setIsCompareOpen(false)}
        initialProducts={compareList}
        onAddToCart={handleAddToCart}
      />

      {/* Checkout 3-Step Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        checkoutData={checkoutData}
        onOrderSuccess={handleOrderSuccess}
      />

      {/* Keynote Video Film Modal */}
      <VideoModal
        isOpen={isVideoOpen}
        onClose={() => setIsVideoOpen(false)}
      />

      {/* Toast Notifications Container */}
      <ToastContainer toasts={toasts} onDismiss={dismissToast} />
    </div>
  )
}
