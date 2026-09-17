import { ArrowRight, ShoppingBag, Eye, Sparkles } from 'lucide-react'

export function HomeBillboards({ onQuickView, onBuy, onExploreCategory }) {
  const billboards = [
    {
      id: 'iphone-16',
      productId: 'iphone-16',
      category: 'iphone',
      eyebrow: 'iPhone 16',
      headline: 'Hello, Apple Intelligence.',
      subline: 'Camera Control. 48MP Fusion camera. Five vibrant colors.',
      priceText: 'From $799 or $33.29/mo. for 24 mo.',
      badge: 'New',
      badgeColor: 'text-[#2997ff] bg-[#2997ff]/10 border-[#2997ff]/20',
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=90',
      bgGradient: 'from-[#1c1d22] via-[#121316] to-[#0a0a0c]',
      accentColor: '#2997ff'
    },
    {
      id: 'watch-series-10',
      productId: 'apple-watch-series-10',
      category: 'watch',
      eyebrow: 'Apple Watch Series 10',
      headline: 'Thinscredible.',
      subline: 'Our thinnest watch ever with our biggest display. Sleep apnea notifications.',
      priceText: 'From $399 or $33.25/mo. for 12 mo.',
      badge: 'Thinnest Ever',
      badgeColor: 'text-[#ffd60a] bg-[#ffd60a]/10 border-[#ffd60a]/20',
      image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=800&q=90',
      bgGradient: 'from-[#221f1c] via-[#161412] to-[#0a0a0c]',
      accentColor: '#ffd60a'
    },
    {
      id: 'macbook-pro-m4',
      productId: 'macbook-pro-16-m4',
      category: 'mac',
      eyebrow: 'MacBook Pro',
      headline: 'A monster for work. A beast for play.',
      subline: 'Supercharged by M4 Max. Up to 24 hours battery life and Liquid Retina XDR.',
      priceText: 'From $1,599 or $133.25/mo. for 12 mo.',
      badge: 'M4 Max',
      badgeColor: 'text-[#bf5af2] bg-[#bf5af2]/10 border-[#bf5af2]/20',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=90',
      bgGradient: 'from-[#1d1e26] via-[#131418] to-[#0a0a0c]',
      accentColor: '#bf5af2'
    },
    {
      id: 'ipad-pro-m4',
      productId: 'ipad-pro-13-m4',
      category: 'ipad',
      eyebrow: 'iPad Pro',
      headline: 'Thinpossible.',
      subline: 'Breakthrough Ultra Retina XDR OLED display. Outrageous M4 speed.',
      priceText: 'From $999 or $83.25/mo. for 12 mo.',
      badge: 'Ultra Retina OLED',
      badgeColor: 'text-[#30d158] bg-[#30d158]/10 border-[#30d158]/20',
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=90',
      bgGradient: 'from-[#221c24] via-[#151216] to-[#0a0a0c]',
      accentColor: '#30d158'
    },
    {
      id: 'airpods-4',
      productId: 'airpods-4',
      category: 'airpods',
      eyebrow: 'AirPods 4',
      headline: 'Iconic. Now supersonic.',
      subline: 'Available with Active Noise Cancellation and Personalized Spatial Audio.',
      priceText: 'From $129 or $10.75/mo. for 12 mo.',
      badge: 'New Fit',
      badgeColor: 'text-[#64d2ff] bg-[#64d2ff]/10 border-[#64d2ff]/20',
      image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=800&q=90',
      bgGradient: 'from-[#192226] via-[#11171a] to-[#0a0a0c]',
      accentColor: '#64d2ff'
    },
    {
      id: 'apple-trade-in',
      isPromo: true,
      category: 'store',
      eyebrow: 'Apple Trade In',
      headline: 'Get $180–$650 in credit.',
      subline: 'When you trade in iPhone 11 or higher. Good for you and the planet.',
      priceText: 'Get instant credit at checkout',
      badge: 'Save Big',
      badgeColor: 'text-[#30d158] bg-[#30d158]/10 border-[#30d158]/20',
      image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?auto=format&fit=crop&w=800&q=90',
      bgGradient: 'from-[#1a231e] via-[#111714] to-[#0a0a0c]',
      accentColor: '#30d158'
    }
  ]

  return (
    <section className="py-14 sm:py-20 border-b border-white/10 bg-[#000000]">
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs text-[#a1a1a6] mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#2997ff]" />
            <span>Signature Lineup</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
            Which product is right for you?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#86868b]">
            Explore the latest generation of industry-defining hardware designed to seamlessly work together.
          </p>
        </div>

        {/* 2-Column Billboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {billboards.map((card) => (
            <div
              key={card.id}
              className={`group relative rounded-3xl overflow-hidden bg-gradient-to-b ${card.bgGradient} border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between p-7 sm:p-9 shadow-xl shadow-black/40`}
            >
              {/* Top Details */}
              <div className="relative z-10 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-2.5">
                  <span className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${card.badgeColor}`}>
                    {card.badge}
                  </span>
                  <span className="text-xs uppercase tracking-wider text-[#86868b] font-medium">
                    {card.eyebrow}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
                  {card.headline}
                </h3>

                <p className="mt-2 text-xs sm:text-sm text-[#a1a1a6] max-w-md leading-relaxed">
                  {card.subline}
                </p>

                <p className="mt-2 text-xs font-medium text-[#86868b]">
                  {card.priceText}
                </p>

                {/* CTAs */}
                <div className="mt-5 flex items-center justify-center sm:justify-start gap-3">
                  {card.isPromo ? (
                    <button
                      onClick={() => onExploreCategory('store')}
                      className="px-4 py-2 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-xs font-medium text-white transition-colors flex items-center gap-1.5 shadow-md shadow-[#0071e3]/30"
                    >
                      <span>Explore Trade-In Store</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <>
                      <button
                        onClick={() => onQuickView(card.productId)}
                        className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-xs font-medium text-white transition-colors flex items-center gap-1.5 border border-white/10"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#2997ff]" />
                        <span>Learn more</span>
                      </button>

                      <button
                        onClick={() => onBuy(card.productId)}
                        className="px-4 py-2 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-xs font-medium text-white transition-colors flex items-center gap-1.5 shadow-md shadow-[#0071e3]/30"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Buy</span>
                      </button>
                    </>
                  )}
                </div>
              </div>

              {/* Image Showcase with Illuminated Glow */}
              <div className="relative mt-8 sm:mt-10 flex items-center justify-center">
                {/* Radial Glow */}
                <div
                  className="absolute w-44 h-44 rounded-full blur-2xl opacity-20 pointer-events-none"
                  style={{ backgroundColor: card.accentColor }}
                />

                <img
                  src={card.image}
                  alt={card.eyebrow}
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=800&q=90'
                  }}
                  className="w-full max-w-[280px] sm:max-w-[320px] h-48 sm:h-56 object-cover rounded-2xl border border-white/10 shadow-2xl group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
