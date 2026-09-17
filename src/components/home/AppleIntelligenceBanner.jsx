import { Sparkles, Wand2, Image as ImageIcon, MessageSquareText, Shield, ArrowRight } from 'lucide-react'

export function AppleIntelligenceBanner({ onExploreDevices }) {
  const features = [
    {
      icon: Wand2,
      title: 'Writing Tools',
      desc: 'Proofread, rewrite, and summarize text everywhere you type across iOS, iPadOS, and macOS.'
    },
    {
      icon: ImageIcon,
      title: 'Clean Up & Playground',
      desc: 'Remove unwanted photobombers with a tap or create fun, original imagery in seconds.'
    },
    {
      icon: MessageSquareText,
      title: 'Smarter Siri',
      desc: 'Richer language comprehension, onscreen awareness, and personal context that respects your privacy.'
    }
  ]

  return (
    <section className="relative overflow-hidden py-16 sm:py-24 border-b border-white/10 bg-[#000000]">
      {/* Iridescent Apple Intelligence Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1000px] h-[300px] bg-gradient-to-r from-[#e5a97d]/20 via-[#bf5af2]/20 via-[#2997ff]/20 to-[#30d158]/20 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Header Pill & Headline */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#e5a97d]/20 via-[#bf5af2]/20 to-[#2997ff]/20 border border-white/20 backdrop-blur-md mb-4 shadow-lg shadow-purple-500/10">
            <Sparkles className="w-4 h-4 text-[#bf5af2] animate-pulse" />
            <span className="text-xs font-semibold tracking-wide text-white">
              Apple Intelligence
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            AI for the rest of us.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-neutral-300 max-w-xl mx-auto leading-relaxed">
            Personal, private, powerful. Deeply integrated into iPhone 16, Mac, and iPad to help you write, express yourself, and get things done effortlessly.
          </p>

          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              onClick={onExploreDevices}
              className="px-5 py-2.5 rounded-full bg-white text-black hover:bg-neutral-200 text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 shadow-lg shadow-white/10"
            >
              <span>Explore Compatible Devices</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon
            return (
              <div
                key={idx}
                className="relative rounded-3xl p-6 sm:p-8 bg-[#161617]/70 border border-white/10 hover:border-white/25 transition-all duration-300 backdrop-blur-xl group flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-[#2997ff]/20 to-[#bf5af2]/20 border border-white/10 flex items-center justify-center mb-5 text-[#2997ff] group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#a1a1a6] leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-[11px] text-[#86868b]">
                  <Shield className="w-3.5 h-3.5 text-[#30d158]" />
                  <span>On-Device & Private Cloud Compute</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
