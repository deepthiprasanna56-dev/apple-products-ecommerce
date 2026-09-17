import { HeroSection } from './HeroSection'
import { AppleIntelligenceBanner } from './AppleIntelligenceBanner'
import { PerksStrip } from './PerksStrip'
import { HomeBillboards } from './HomeBillboards'
import { BentoGrid } from './BentoGrid'
import { CategoryShowcaseSection } from './CategoryShowcaseSection'
import { ArrowRight, ShieldCheck, CreditCard, RefreshCw } from 'lucide-react'

export function HomePage({
  heroProduct,
  onBuyNow,
  onWatchFilm,
  onQuickView,
  onExploreCategory,
  iphoneProducts,
  macProducts,
  ipadProducts,
  watchProducts,
  airpodsProducts,
  wishlist,
  onToggleWishlist,
  onAddToCart,
  compareList,
  onToggleCompare
}) {
  return (
    <div className="animate-in fade-in duration-300">
      {/* 1. Cinematic Flagship Hero Section */}
      <HeroSection
        heroProduct={heroProduct}
        onExplore={() => {
          const el = document.getElementById('home-billboards')
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }}
        onBuy={onBuyNow}
        onWatchFilm={onWatchFilm}
      />

      {/* 2. Apple Store Perks Strip */}
      <PerksStrip />

      {/* 3. Apple Intelligence Spotlight Banner */}
      <AppleIntelligenceBanner
        onExploreDevices={() => {
          const el = document.getElementById('iphone-showcase')
          if (el) el.scrollIntoView({ behavior: 'smooth' })
        }}
      />

      {/* 4. Signature 2-Up Promo Billboards Grid */}
      <div id="home-billboards">
        <HomeBillboards
          onQuickView={onQuickView}
          onBuy={onBuyNow}
          onExploreCategory={onExploreCategory}
        />
      </div>

      {/* 5. Bento Grid Hardware Innovations */}
      <BentoGrid
        onSelectProduct={(productId) => onQuickView(productId)}
      />

      {/* 6. Dedicated Category Showcases (3 Cards Each) */}
      <div id="iphone-showcase">
        <CategoryShowcaseSection
          title="iPhone"
          subtitle="Explore iPhone 16 Pro, iPhone 16, and iPhone 15. Powered by Apple Intelligence."
          categoryId="iphone"
          products={iphoneProducts}
          onExploreCategory={onExploreCategory}
          wishlist={wishlist}
          onToggleWishlist={onToggleWishlist}
          onQuickView={onQuickView}
          onAddToCart={onAddToCart}
          compareList={compareList}
          onToggleCompare={onToggleCompare}
        />
      </div>

      <div id="mac-showcase">
        <CategoryShowcaseSection
          title="Mac"
          subtitle="MacBook Pro, MacBook Air, and iMac. Supercharged with M4 and M3 Apple Silicon."
          categoryId="mac"
          products={macProducts}
          onExploreCategory={onExploreCategory}
          wishlist={wishlist}
          onToggleWishlist={onToggleWishlist}
          onQuickView={onQuickView}
          onAddToCart={onAddToCart}
          compareList={compareList}
          onToggleCompare={onToggleCompare}
        />
      </div>

      <div id="ipad-showcase">
        <CategoryShowcaseSection
          title="iPad"
          subtitle="iPad Pro with breakthrough Tandem OLED and iPad Air. Versatile performance for creators."
          categoryId="ipad"
          products={ipadProducts}
          onExploreCategory={onExploreCategory}
          wishlist={wishlist}
          onToggleWishlist={onToggleWishlist}
          onQuickView={onQuickView}
          onAddToCart={onAddToCart}
          compareList={compareList}
          onToggleCompare={onToggleCompare}
        />
      </div>

      <div id="watch-showcase">
        <CategoryShowcaseSection
          title="Apple Watch"
          subtitle="Apple Watch Ultra 2 and Series 10. Advanced wellness, activity tracking, and emergency features."
          categoryId="watch"
          products={watchProducts}
          onExploreCategory={onExploreCategory}
          wishlist={wishlist}
          onToggleWishlist={onToggleWishlist}
          onQuickView={onQuickView}
          onAddToCart={onAddToCart}
          compareList={compareList}
          onToggleCompare={onToggleCompare}
        />
      </div>

      <div id="airpods-showcase">
        <CategoryShowcaseSection
          title="AirPods"
          subtitle="AirPods Pro 2, AirPods Max, and AirPods 4. Industry-leading Active Noise Cancellation."
          categoryId="airpods"
          products={airpodsProducts}
          onExploreCategory={onExploreCategory}
          wishlist={wishlist}
          onToggleWishlist={onToggleWishlist}
          onQuickView={onQuickView}
          onAddToCart={onAddToCart}
          compareList={compareList}
          onToggleCompare={onToggleCompare}
        />
      </div>

      {/* 7. Apple Ecosystem & Store Perks Bottom Banner */}
      <section className="py-16 sm:py-20 bg-[#0c0c0e] border-t border-white/10">
        <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-8 rounded-3xl bg-[#161617] border border-white/10 flex flex-col justify-between">
              <div>
                <RefreshCw className="w-8 h-8 text-[#30d158] mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Apple Trade In</h3>
                <p className="text-xs sm:text-sm text-[#a1a1a6] leading-relaxed">
                  Get credit toward a new Apple product when you trade in your current device. It’s good for you and the planet.
                </p>
              </div>
              <button
                onClick={() => onExploreCategory('store')}
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-[#2997ff] hover:text-white transition-colors"
              >
                <span>Find your trade-in value</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="p-8 rounded-3xl bg-[#161617] border border-white/10 flex flex-col justify-between">
              <div>
                <CreditCard className="w-8 h-8 text-[#e5a97d] mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Apple Card</h3>
                <p className="text-xs sm:text-sm text-[#a1a1a6] leading-relaxed">
                  Get up to 3% Daily Cash back on purchases from Apple. Plus flexible monthly installments with 0% APR.
                </p>
              </div>
              <button
                onClick={() => onExploreCategory('store')}
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-[#2997ff] hover:text-white transition-colors"
              >
                <span>Apply for Apple Card</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="p-8 rounded-3xl bg-[#161617] border border-white/10 flex flex-col justify-between">
              <div>
                <ShieldCheck className="w-8 h-8 text-[#2997ff] mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">AppleCare+</h3>
                <p className="text-xs sm:text-sm text-[#a1a1a6] leading-relaxed">
                  Get unlimited repairs for accidental damage protection, 24/7 priority tech support, and Express Replacement Service.
                </p>
              </div>
              <button
                onClick={() => onExploreCategory('store')}
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold text-[#2997ff] hover:text-white transition-colors"
              >
                <span>Learn about AppleCare+</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
