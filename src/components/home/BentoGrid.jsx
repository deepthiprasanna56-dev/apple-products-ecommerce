import { ArrowUpRight } from 'lucide-react'

export function BentoGrid({ onSelectProduct }) {
  const highlightItems = [
    {
      id: 'macbook-pro-14-16',
      title: 'MacBook Pro',
      subtitle: 'Liquid Retina XDR. M4 Pro / M4 Max.',
      badge: 'Unstoppable',
      tagline: 'Up to 24 hours battery life. Industry-leading Apple silicon performance.',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=90',
      price: '$1,599',
      gradient: 'from-[#1e232a] via-[#16181d] to-[#101114]',
      badgeColor: 'text-[#2997ff] bg-[#2997ff]/15 border-[#2997ff]/30'
    },
    {
      id: 'ipad-pro',
      title: 'iPad Pro',
      subtitle: 'Thinpossible. Tandem OLED.',
      badge: 'Breakthrough',
      tagline: 'Ultra Retina XDR display driven by M4 performance in a 5.1mm design.',
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=90',
      price: '$999',
      gradient: 'from-[#2a1e28] via-[#1c141b] to-[#120d11]',
      badgeColor: 'text-[#bf5af2] bg-[#bf5af2]/15 border-[#bf5af2]/30'
    },
    {
      id: 'apple-watch-ultra-2',
      title: 'Watch Ultra 2',
      subtitle: 'Satin Black Titanium finish.',
      badge: 'Rugged',
      tagline: 'Precision dual-frequency GPS. 3,000 nits brightness and depth gauge.',
      image: 'https://images.unsplash.com/photo-1544117519-31a4b719223d?auto=format&fit=crop&w=800&q=90',
      price: '$799',
      gradient: 'from-[#26241b] via-[#1a1913] to-[#11100d]',
      badgeColor: 'text-[#ffd60a] bg-[#ffd60a]/15 border-[#ffd60a]/30'
    },
    {
      id: 'airpods-max',
      title: 'AirPods Max',
      subtitle: 'Five fresh colors. USB-C audio.',
      badge: 'Hi-Res Audio',
      tagline: 'Pro-level Active Noise Cancellation and lossless audio fidelity.',
      image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=800&q=90',
      price: '$549',
      gradient: 'from-[#1c2227] via-[#13171b] to-[#0d1012]',
      badgeColor: 'text-[#30d158] bg-[#30d158]/15 border-[#30d158]/30'
    }
  ]

  return (
    <section className="py-14 bg-[#000000] text-white border-b border-white/10">
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-[#2997ff]">
              Hardware Innovations
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight mt-1 text-[#f5f5f7]">
              Engineered for the extraordinary.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#86868b] max-w-sm">
            Apple silicon chips, microblasted titanium, and tandem OLED working in unison.
          </p>
        </div>

        {/* Balanced 4-Column Grid - Identical Card Heights and Zero Empty Space */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {highlightItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectProduct(item.id)}
              className={`group flex flex-col justify-between rounded-3xl overflow-hidden border border-white/10 p-6 cursor-pointer transition-all duration-300 hover:border-white/30 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/70 bg-gradient-to-b ${item.gradient}`}
            >
              {/* Top Text Header */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                  <span className="text-xs font-semibold text-white/90 bg-black/40 px-2.5 py-1 rounded-full border border-white/10">
                    From {item.price}
                  </span>
                </div>

                <h3 className="text-xl font-bold tracking-tight text-white group-hover:text-[#2997ff] transition-colors flex items-center justify-between mt-1">
                  <span>{item.title}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#86868b] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </h3>

                <p className="text-xs font-medium text-neutral-300 mt-1 line-clamp-1">
                  {item.subtitle}
                </p>
                <p className="text-[11px] text-[#86868b] mt-1.5 line-clamp-2 leading-relaxed">
                  {item.tagline}
                </p>
              </div>

              {/* Centered Image with spotlight glow - Fits without cropping or dead space */}
              <div className="relative h-48 w-full my-4 flex items-center justify-center rounded-2xl bg-black/30 border border-white/5 overflow-hidden p-3">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.06)_0%,transparent_70%)] pointer-events-none" />
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500 drop-shadow-lg"
                  loading="lazy"
                />
              </div>

              {/* Bottom Action Link */}
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-[11px] font-semibold text-[#2997ff] group-hover:underline">
                  View Specifications &rarr;
                </span>
                <span className="text-[10px] text-[#86868b]">Apple Silicon</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
