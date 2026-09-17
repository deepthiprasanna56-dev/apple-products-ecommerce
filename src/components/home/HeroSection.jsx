import { Play, Sparkles, ChevronRight, Cpu, ShieldCheck, Camera } from 'lucide-react'

export function HeroSection({ heroProduct, onExplore, onBuy, onWatchFilm }) {
  if (!heroProduct) return null

  return (
    <section className="relative overflow-hidden bg-[#000000] text-white pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Background ambient lighting glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] sm:w-[750px] h-[380px] bg-gradient-to-tr from-[#bca693]/20 via-[#405697]/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-10 left-1/4 w-[300px] h-[300px] bg-[#2997ff]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center">
          
          {/* Apple Intelligence Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md mb-6 hover:bg-white/15 transition-all">
            <Sparkles className="w-3.5 h-3.5 text-[#e5a97d] animate-pulse" />
            <span className="text-xs font-medium tracking-wide text-neutral-200">
              Hello, Apple Intelligence.
            </span>
          </div>

          {/* Hero Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold tracking-tight text-[#f5f5f7] max-w-4xl leading-[1.05]">
            iPhone 16 Pro
          </h1>

          <p className="mt-4 text-xl sm:text-2xl md:text-3xl font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#e5a97d] via-[#e2e4e5] to-[#9e978e] max-w-2xl">
            Titanium. So strong. So light. So Pro.
          </p>

          <p className="mt-3 text-sm sm:text-base text-[#86868b] max-w-xl">
            Powered by the all-new A18 Pro chip. Groundbreaking camera control with 48MP Fusion and 4K 120 fps Dolby Vision.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onBuy(heroProduct)}
              className="px-6 py-3 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white font-medium text-sm transition-all shadow-lg shadow-[#0071e3]/30 hover:scale-105 active:scale-95"
            >
              Buy Now &middot; From $999
            </button>
            <button
              onClick={onExplore}
              className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/15 text-[#f5f5f7] border border-white/20 font-medium text-sm transition-all flex items-center gap-1.5 hover:scale-105"
            >
              <span>Explore Ecosystem</span>
              <ChevronRight className="w-4 h-4 text-[#2997ff]" />
            </button>
            <button
              onClick={onWatchFilm}
              className="px-5 py-3 rounded-full text-xs sm:text-sm text-[#86868b] hover:text-white transition-colors flex items-center gap-2 group"
            >
              <div className="w-7 h-7 rounded-full bg-white/10 group-hover:bg-[#2997ff] flex items-center justify-center transition-colors">
                <Play className="w-3 h-3 text-white fill-white ml-0.5" />
              </div>
              <span>Watch the keynote</span>
            </button>
          </div>

          {/* Hero Visual Image Render */}
          <div className="mt-12 sm:mt-16 relative w-full max-w-4xl mx-auto group">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/80 border border-white/10 bg-[#0c0c0e]">
              <img
                src={heroProduct.colors[0].image}
                alt={heroProduct.name}
                className="w-full max-h-[520px] object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000] via-transparent to-black/20" />

              {/* Interactive badge highlights floating over hero */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#e5a97d]">
                    <Cpu className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#86868b]">Fastest in a smartphone</div>
                    <div className="text-sm font-semibold text-white">Apple A18 Pro Chip</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#2997ff]">
                    <Camera className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#86868b]">Cinematic Mastery</div>
                    <div className="text-sm font-semibold text-white">48MP Fusion &amp; 5x Telephoto</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#34c759]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#86868b]">Grade 5 Metal</div>
                    <div className="text-sm font-semibold text-white">Microblasted Titanium</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
