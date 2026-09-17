import { useState } from 'react'
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Tag, ShieldCheck, CheckCircle2 } from 'lucide-react'

export function CartDrawer({
  isOpen,
  onClose,
  cart,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout
}) {
  const [promoCode, setPromoCode] = useState('')
  const [discountPercent, setDiscountPercent] = useState(0)
  const [promoMessage, setPromoMessage] = useState('')

  if (!isOpen) return null

  // Calculations
  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const discountAmount = Math.round((subtotal * discountPercent) / 100)
  const discountedSubtotal = subtotal - discountAmount
  const estimatedTax = Math.round(discountedSubtotal * 0.08)
  const grandTotal = discountedSubtotal + estimatedTax

  const handleApplyPromo = (e) => {
    e.preventDefault()
    const code = promoCode.trim().toUpperCase()
    if (code === 'APPLE10') {
      setDiscountPercent(10)
      setPromoMessage('10% Apple Special Savings applied!')
    } else if (code === 'TIMCOOK') {
      setDiscountPercent(15)
      setPromoMessage('15% Executive VIP discount applied!')
    } else {
      setPromoMessage('Invalid promo code. Try "APPLE10"!')
      setTimeout(() => setPromoMessage(''), 4000)
    }
  }

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
            <ShoppingBag className="w-5 h-5 text-[#2997ff]" />
            <h2 className="text-xl font-bold tracking-tight">Review your Bag</h2>
            <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-neutral-300 font-semibold">
              {cart.reduce((total, item) => total + item.quantity, 0)}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-[#86868b] hover:text-white transition-colors"
            aria-label="Close cart"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Free Shipping Alert Bar */}
        <div className="px-6 py-2.5 bg-[#0071e3]/15 border-b border-[#0071e3]/20 flex items-center justify-between text-xs text-[#2997ff]">
          <span>Free 2-day delivery on all Apple items</span>
          <span className="font-semibold text-white">Unlocked</span>
        </div>

        {/* Cart Item List */}
        <div className="flex-1 overflow-y-auto p-6 divide-y divide-white/10 space-y-4">
          {cart.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center p-6 space-y-4">
              <div className="w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center text-[#86868b]">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Your Bag is empty.</h3>
                <p className="text-xs text-[#86868b] mt-1 max-w-xs">
                  Items you add will appear here. Discover our newest devices and accessories.
                </p>
              </div>
              <button
                onClick={onClose}
                className="px-6 py-2.5 rounded-full bg-[#0071e3] text-white text-xs font-semibold hover:bg-[#0077ed] transition-all"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div key={`${item.id}-${item.selectedColor}-${item.selectedStorage}`} className="pt-4 first:pt-0 flex gap-4">
                {/* Thumbnail */}
                <div className="w-20 h-20 bg-black/40 rounded-2xl border border-white/5 p-2 flex items-center justify-center shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-sm font-semibold text-white leading-tight">
                        {item.name}
                      </h4>
                      <span className="text-sm font-bold text-white whitespace-nowrap">
                        ${(item.price * item.quantity).toLocaleString()}
                      </span>
                    </div>

                    <div className="text-[11px] text-[#86868b] mt-1 space-x-2">
                      {item.selectedColor && <span>Finish: {item.selectedColor}</span>}
                      {item.selectedStorage && <span>&middot; {item.selectedStorage}</span>}
                    </div>

                    {item.appleCare && (
                      <div className="mt-1 flex items-center gap-1 text-[10px] text-[#2997ff]">
                        <ShieldCheck className="w-3 h-3" />
                        <span>AppleCare+ included</span>
                      </div>
                    )}
                  </div>

                  {/* Quantity and Remove */}
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center border border-white/15 rounded-lg bg-white/5">
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.selectedColor, item.selectedStorage, -1)}
                        className="p-1.5 hover:text-white text-[#86868b] transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="px-2 text-xs font-semibold text-white">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, item.selectedColor, item.selectedStorage, 1)}
                        className="p-1.5 hover:text-white text-[#86868b] transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.id, item.selectedColor, item.selectedStorage)}
                      className="text-[#86868b] hover:text-[#ff453a] text-xs transition-colors flex items-center gap-1"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Remove</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer & Checkout Summary */}
        {cart.length > 0 && (
          <div className="p-6 border-t border-white/10 bg-[#121214] space-y-4">
            {/* Promo Code Input */}
            <form onSubmit={handleApplyPromo} className="flex gap-2">
              <div className="relative flex-1">
                <Tag className="w-3.5 h-3.5 text-[#86868b] absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Promo (try APPLE10)"
                  className="w-full pl-8 pr-3 py-2 bg-white/5 border border-white/10 rounded-xl text-xs text-white uppercase placeholder:normal-case placeholder-[#86868b] focus:outline-none focus:border-[#2997ff]"
                />
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-white/10 hover:bg-white/20 text-xs font-semibold text-white rounded-xl transition-colors"
              >
                Apply
              </button>
            </form>

            {promoMessage && (
              <div className={`text-[11px] flex items-center gap-1.5 ${discountPercent > 0 ? 'text-[#34c759]' : 'text-amber-400'}`}>
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>{promoMessage}</span>
              </div>
            )}

            {/* Calculations Breakdown */}
            <div className="space-y-1.5 text-xs text-[#86868b]">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-white">${subtotal.toLocaleString()}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-[#34c759]">
                  <span>Discount ({discountPercent}%)</span>
                  <span>-${discountAmount.toLocaleString()}</span>
                </div>
              )}
              <div className="flex justify-between">
                <span>Estimated Tax (8%)</span>
                <span className="text-white">${estimatedTax.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-[#34c759] font-medium">FREE</span>
              </div>
              <div className="pt-2 border-t border-white/10 flex justify-between text-base font-bold text-white">
                <span>Total</span>
                <span className="text-xl text-[#f5f5f7]">
                  ${grandTotal.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Checkout Action */}
            <button
              onClick={() => {
                onClose()
                onProceedToCheckout({
                  subtotal,
                  discountAmount,
                  estimatedTax,
                  grandTotal,
                  cart
                })
              }}
              className="w-full py-3.5 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white font-semibold text-sm transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#0071e3]/30"
            >
              <span>Check Out</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="text-[10px] text-center text-[#86868b]">
              Need more time? Items remain in your bag on this device.
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
