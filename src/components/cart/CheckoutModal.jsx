import { useState } from 'react'
import {
  X,
  CheckCircle2,
  Truck,
  CreditCard,
  ArrowRight,
  PackageCheck,
  Sparkles
} from 'lucide-react'
import { ConfettiBlast } from '../common/ConfettiBlast'

export function CheckoutModal({
  isOpen,
  onClose,
  checkoutData,
  onOrderSuccess
}) {
  const [step, setStep] = useState(1) // 1: Shipping, 2: Payment, 3: Success
  const [shippingInfo, setShippingInfo] = useState({
    firstName: 'Alex',
    lastName: 'Morgan',
    email: 'alex.morgan@icloud.com',
    address: '1 Infinite Loop',
    city: 'Cupertino',
    state: 'CA',
    zip: '95014'
  })
  const [paymentMethod, setPaymentMethod] = useState('apple-pay')
  const [isProcessing, setIsProcessing] = useState(false)
  const [orderNumber, setOrderNumber] = useState('')

  if (!isOpen || !checkoutData) return null

  const { grandTotal } = checkoutData

  const handleShippingSubmit = (e) => {
    e.preventDefault()
    setStep(2)
  }

  const handlePlaceOrder = () => {
    setIsProcessing(true)
    setTimeout(() => {
      const generatedOrder = 'W' + Math.floor(100000000 + Math.random() * 900000000)
      setOrderNumber(generatedOrder)
      setIsProcessing(false)
      setStep(3)
      onOrderSuccess(generatedOrder)
    }, 1200)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200 text-white"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#161617] border border-white/15 rounded-3xl overflow-hidden shadow-2xl my-auto p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        {step !== 3 && (
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#86868b] hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        )}

        {/* Stepper Indicator */}
        {step !== 3 && (
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className={`flex items-center gap-2 text-xs font-semibold ${step >= 1 ? 'text-[#2997ff]' : 'text-[#86868b]'}`}>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 1 ? 'bg-[#2997ff] text-white' : 'bg-white/10'}`}>
                1
              </div>
              <span>Shipping</span>
            </div>
            <div className="w-10 h-0.5 bg-white/10" />
            <div className={`flex items-center gap-2 text-xs font-semibold ${step >= 2 ? 'text-[#2997ff]' : 'text-[#86868b]'}`}>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 2 ? 'bg-[#2997ff] text-white' : 'bg-white/10'}`}>
                2
              </div>
              <span>Payment</span>
            </div>
          </div>
        )}

        {/* STEP 1: Shipping Address Form */}
        {step === 1 && (
          <div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold tracking-tight text-white">
                Where should we send your order?
              </h3>
              <p className="text-xs text-[#86868b] mt-1">
                Enjoy free delivery right to your door with real-time tracking updates.
              </p>
            </div>

            <form onSubmit={handleShippingSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs text-[#86868b] block mb-1">First Name</label>
                  <input
                    type="text"
                    required
                    value={shippingInfo.firstName}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, firstName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-[#2997ff]"
                  />
                </div>
                <div>
                  <label className="text-xs text-[#86868b] block mb-1">Last Name</label>
                  <input
                    type="text"
                    required
                    value={shippingInfo.lastName}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, lastName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-[#2997ff]"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs text-[#86868b] block mb-1">Email for Receipt &amp; Tracking</label>
                <input
                  type="email"
                  required
                  value={shippingInfo.email}
                  onChange={(e) => setShippingInfo({ ...shippingInfo, email: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-[#2997ff]"
                />
              </div>

              <div>
                <label className="text-xs text-[#86868b] block mb-1">Street Address</label>
                <input
                  type="text"
                  required
                  value={shippingInfo.address}
                  onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-[#2997ff]"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <div>
                  <label className="text-xs text-[#86868b] block mb-1">City</label>
                  <input
                    type="text"
                    required
                    value={shippingInfo.city}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-[#2997ff]"
                  />
                </div>
                <div>
                  <label className="text-xs text-[#86868b] block mb-1">State</label>
                  <input
                    type="text"
                    required
                    value={shippingInfo.state}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, state: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-[#2997ff]"
                  />
                </div>
                <div>
                  <label className="text-xs text-[#86868b] block mb-1">ZIP Code</label>
                  <input
                    type="text"
                    required
                    value={shippingInfo.zip}
                    onChange={(e) => setShippingInfo({ ...shippingInfo, zip: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-[#2997ff]"
                  />
                </div>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <div className="text-xs text-[#86868b] flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-[#34c759]" />
                  <span>Free 2-day delivery guaranteed</span>
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white text-xs font-semibold flex items-center gap-2 transition-all"
                >
                  <span>Continue to Payment</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        )}

        {/* STEP 2: Payment Simulation */}
        {step === 2 && (
          <div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold tracking-tight text-white">
                Select Payment Method
              </h3>
              <p className="text-xs text-[#86868b] mt-1">
                Order Total: <strong className="text-white text-sm">${grandTotal.toLocaleString()}</strong>
              </p>
            </div>

            <div className="space-y-3 mb-6">
              {/* Apple Pay Option */}
              <div
                onClick={() => setPaymentMethod('apple-pay')}
                className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                  paymentMethod === 'apple-pay'
                    ? 'border-[#2997ff] bg-[#2997ff]/10'
                    : 'border-white/10 bg-white/5 hover:border-white/20'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center text-white border border-white/20 font-bold text-sm">
                    Pay
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Apple Pay</div>
                    <div className="text-xs text-[#86868b]">Fast, secure 1-touch checkout</div>
                  </div>
                </div>
                {paymentMethod === 'apple-pay' && <CheckCircle2 className="w-5 h-5 text-[#2997ff]" />}
              </div>

              {/* Credit / Debit Card Option */}
              <div
                onClick={() => setPaymentMethod('card')}
                className={`p-4 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                  paymentMethod === 'card'
                    ? 'border-[#2997ff] bg-[#2997ff]/10'
                    : 'border-white/10 bg-white/5 hover:border-white/20'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                    <CreditCard className="w-5 h-5 text-[#2997ff]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-white">Credit or Debit Card</div>
                    <div className="text-xs text-[#86868b]">Visa, Mastercard, Amex, Apple Card</div>
                  </div>
                </div>
                {paymentMethod === 'card' && <CheckCircle2 className="w-5 h-5 text-[#2997ff]" />}
              </div>
            </div>

            {paymentMethod === 'card' && (
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 mb-6 space-y-3">
                <input
                  type="text"
                  placeholder="Card number (e.g. 4532 •••• •••• 8912)"
                  defaultValue="4532 9821 7312 8912"
                  className="w-full px-3 py-2 rounded-xl bg-black/40 border border-white/10 text-xs text-white"
                />
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="MM / YY"
                    defaultValue="12/28"
                    className="w-full px-3 py-2 rounded-xl bg-black/40 border border-white/10 text-xs text-white"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    defaultValue="482"
                    className="w-full px-3 py-2 rounded-xl bg-black/40 border border-white/10 text-xs text-white"
                  />
                </div>
              </div>
            )}

            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs text-[#86868b] hover:text-white"
              >
                &larr; Back to Shipping
              </button>

              <button
                type="button"
                disabled={isProcessing}
                onClick={handlePlaceOrder}
                className="px-6 py-3 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white text-xs font-semibold flex items-center gap-2 transition-all disabled:opacity-50"
              >
                {isProcessing ? (
                  <>Processing with Apple Secure Enclave...</>
                ) : (
                  <>Pay ${grandTotal.toLocaleString()} with {paymentMethod === 'apple-pay' ? 'Pay' : 'Card'}</>
                )}
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Order Confirmation */}
        {step === 3 && (
          <div className="text-center py-6">
            <ConfettiBlast />
            <div className="w-16 h-16 rounded-3xl bg-[#34c759]/20 text-[#34c759] border border-[#34c759]/30 flex items-center justify-center mx-auto mb-4 animate-bounce">
              <PackageCheck className="w-8 h-8" />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 text-[#34c759] text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" /> Order Confirmed
            </div>

            <h3 className="text-3xl font-bold tracking-tight text-white">
              Thank you for your order!
            </h3>
            <p className="text-xs text-[#86868b] mt-1.5 max-w-sm mx-auto">
              We have sent confirmation and shipment tracking details to <strong className="text-white">{shippingInfo.email}</strong>.
            </p>

            <div className="mt-6 p-4 rounded-2xl bg-white/5 border border-white/10 max-w-md mx-auto text-left text-xs space-y-2">
              <div className="flex justify-between">
                <span className="text-[#86868b]">Order Number</span>
                <span className="font-mono font-bold text-[#2997ff]">{orderNumber}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#86868b]">Delivering to</span>
                <span className="text-white">{shippingInfo.firstName} {shippingInfo.lastName} ({shippingInfo.city})</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#86868b]">Estimated Delivery</span>
                <span className="text-[#34c759] font-medium">Tomorrow by 7:00 PM</span>
              </div>
              <div className="flex justify-between pt-2 border-t border-white/10 font-bold">
                <span>Paid Total</span>
                <span>${grandTotal.toLocaleString()}</span>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <button
                onClick={onClose}
                className="px-8 py-3 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white text-xs font-semibold transition-all shadow-lg shadow-[#0071e3]/30"
              >
                Continue Exploring Apple Store
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
