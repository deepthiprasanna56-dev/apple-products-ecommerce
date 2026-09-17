import { X, Heart, Trash2, ShoppingBag, ArrowRight } from 'lucide-react'
import { PRODUCTS } from '../../data/products'

export function WishlistDrawer({
  isOpen,
  onClose,
  wishlistIds,
  onRemoveFromWishlist,
  onAddToCart,
  onQuickView
}) {
  if (!isOpen) return null

  const savedProducts = PRODUCTS.filter((p) => wishlistIds.includes(p.id))

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex justify-end animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="w-full max-w-md h-full bg-[#161617] border-l border-white/10 flex flex-col justify-between shadow-2xl animate-in slide-in-from-right duration-300 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-[#ff375f] fill-current" />
            <h2 className="text-xl font-bold tracking-tight">Saved for Later</h2>
            <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-neutral-300 font-semibold">
              {savedProducts.length}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-[#86868b] hover:text-white transition-colors"
            aria-label="Close wishlist"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 divide-y divide-white/10 space-y-4">
          {savedProducts.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-[#86868b]">
                <Heart className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Your Wishlist is empty.</h3>
                <p className="text-xs text-[#86868b] mt-1 max-w-xs">
                  Tap the heart icon on any device to save it for easy comparison and purchasing later.
                </p>
              </div>
            </div>
          ) : (
            savedProducts.map((product) => (
              <div key={product.id} className="pt-4 first:pt-0 flex gap-4 items-center">
                {/* Image */}
                <div
                  onClick={() => {
                    onClose()
                    onQuickView(product)
                  }}
                  className="w-18 h-18 bg-black/40 rounded-2xl border border-white/5 p-2 flex items-center justify-center shrink-0 cursor-pointer"
                >
                  <img
                    src={product.colors[0].image}
                    alt={product.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h4
                    onClick={() => {
                      onClose()
                      onQuickView(product)
                    }}
                    className="text-sm font-semibold text-white hover:text-[#2997ff] cursor-pointer transition-colors"
                  >
                    {product.name}
                  </h4>
                  <div className="text-xs text-[#86868b]">{product.displayPrice}</div>
                  <div className="text-[10px] text-[#86868b] mt-0.5">{product.specs.chip}</div>

                  <div className="flex items-center gap-3 mt-3">
                    <button
                      onClick={() => {
                        onAddToCart({
                          ...product,
                          selectedColor: product.colors[0].name,
                          selectedStorage: product.storageOptions[0].size,
                          price: product.price,
                          image: product.colors[0].image
                        })
                      }}
                      className="px-3 py-1.5 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white text-xs font-medium flex items-center gap-1.5 transition-all"
                    >
                      <ShoppingBag className="w-3.5 h-3.5" />
                      <span>Move to Bag</span>
                    </button>
                    <button
                      onClick={() => onRemoveFromWishlist(product.id)}
                      className="text-xs text-[#86868b] hover:text-[#ff453a] transition-colors p-1"
                      title="Remove"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {savedProducts.length > 0 && (
          <div className="p-6 border-t border-white/10 bg-[#121214]">
            <button
              onClick={() => {
                savedProducts.forEach((p) => {
                  onAddToCart({
                    ...p,
                    selectedColor: p.colors[0].name,
                    selectedStorage: p.storageOptions[0].size,
                    price: p.price,
                    image: p.colors[0].image
                  })
                })
                onClose()
              }}
              className="w-full py-3 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-xs transition-colors flex items-center justify-center gap-2 border border-white/10"
            >
              <span>Add All to Bag</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
