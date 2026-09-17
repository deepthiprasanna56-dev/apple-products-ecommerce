import { useState, useMemo, useEffect } from 'react'
import { Navbar } from './components/layout/Navbar'
import { HeroSection } from './components/home/HeroSection'
import { BentoGrid } from './components/home/BentoGrid'
import { PerksStrip } from './components/home/PerksStrip'
import { CategoryNav } from './components/products/CategoryNav'
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

  // Filtered and Sorted Catalog
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // Category match
      const categoryMatch = activeCategory === 'all' || product.category === activeCategory

      // Search match
      const searchMatch =
        searchQuery.trim() === '' ||
        `${product.name} ${product.category} ${product.tagline} ${product.specs.chip}`
          .toLowerCase()
          .includes(searchQuery.toLowerCase())

      // Price filter match
      const priceMatch = product.price <= maxPrice

      return categoryMatch && searchMatch && priceMatch
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price
      if (sortBy === 'price-high') return b.price - a.price
      if (sortBy === 'rating') return b.rating - a.rating
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0) // featured first
    })
  }, [activeCategory, searchQuery, maxPrice, sortBy])

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0)
  const heroProduct = PRODUCTS.find((p) => p.id === 'iphone-16-pro') || PRODUCTS[0]

  return (
    <div className="min-h-screen bg-[#000000] text-[#f5f5f7] flex flex-col selection:bg-[#0071e3] selection:text-white">
      {/* Apple Frosted Navbar */}
      <Navbar
        activeCategory={activeCategory}
        onSelectCategory={setActiveCategory}
        cartCount={cartCount}
        wishlistCount={wishlist.length}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenCompare={() => setIsCompareOpen(true)}
        compareCount={compareList.length}
      />

      {/* Main Page Body */}
      <main className="flex-1">
        {/* Cinematic Hero Section */}
        <HeroSection
          heroProduct={heroProduct}
          onExplore={() => {
            document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' })
          }}
          onBuy={handleBuyNow}
          onWatchFilm={() => setIsVideoOpen(true)}
        />

        {/* Value Propositions & Delivery Perks */}
        <PerksStrip />

        {/* Hardware Bento Grid Showcase */}
        <BentoGrid
          onSelectProduct={(productId) => {
            const found = PRODUCTS.find((p) => p.id === productId)
            if (found) setSelectedProduct(found)
          }}
        />

        {/* Complete Ecosystem Product Catalog */}
        <section id="catalog-section" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#2997ff]">
                Complete Apple Ecosystem
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-white mt-1">
                Explore the lineup.
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#86868b] max-w-md">
              Compare cutting-edge iPhone, Mac, iPad, Apple Watch, and AirPods devices with bespoke finishes and storage configs.
            </p>
          </div>

          {/* Category Navigation Pills */}
          <CategoryNav
            activeCategory={activeCategory}
            onSelectCategory={(catId) => {
              setActiveCategory(catId)
              setSearchQuery('')
            }}
          />

          {/* Filter & Sort Bar */}
          <FilterBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            sortBy={sortBy}
            onSortChange={setSortBy}
            maxPrice={maxPrice}
            onMaxPriceChange={setMaxPrice}
            totalResults={filteredProducts.length}
            onResetFilters={() => {
              setSearchQuery('')
              setMaxPrice(2000)
              setSortBy('featured')
              setActiveCategory('all')
            }}
          />

          {/* Product Grid */}
          {filteredProducts.length === 0 ? (
            <div className="py-20 text-center bg-[#161617]/50 rounded-3xl border border-white/10 p-8">
              <h3 className="text-lg font-semibold text-white">No Apple devices found.</h3>
              <p className="text-xs text-[#86868b] mt-1">
                Try adjusting your price filter or searching for another model.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setMaxPrice(2000)
                  setActiveCategory('all')
                }}
                className="mt-4 px-5 py-2 rounded-full bg-white/10 hover:bg-white/20 text-xs text-white transition-colors"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProducts.map((product) => (
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
        </section>
      </main>

      {/* Directory Footer */}
      <Footer onSelectCategory={setActiveCategory} />

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
