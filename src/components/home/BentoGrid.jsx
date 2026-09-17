import { ArrowUpRight } from 'lucide-react'

export function BentoGrid({ onSelectProduct }) {
  const bentoItems = [
    {
      id: 'macbook-pro-14-16',
      title: 'MacBook Pro',
      subtitle: 'Liquid Retina XDR. M4 Pro / M4 Max.',
      badge: 'Unstoppable',
      tagline: 'Up to 24 hours battery life. The most advanced Mac laptop ever.',
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1000&q=85',
      price: '$1,599',
      colSpan: 'md:col-span-2 md:row-span-2',
      dark: true
    },
    {
      id: 'ipad-pro',
      title: 'iPad Pro',
      subtitle: 'Thinpossible. Tandem OLED.',
      badge: 'Breakthrough',
      tagline: 'Ultra Retina XDR display driven by M4 performance.',
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=800&q=85',
      price: '$999',
      colSpan: 'md:col-span-1',
      dark: false
    },
    {
      id: 'apple-watch-ultra-2',
      title: 'Apple Watch Ultra 2',
      subtitle: 'New Black Titanium finish.',
      badge: 'Rugged',
      tagline: 'Precision dual-frequency GPS. 3000 nits brightness.',
      image: 'https://images.unsplash.com/photo-1544117519-31a4b719223d?auto=format&fit=crop&w=800&q=85',
      price: '$799',
      colSpan: 'md:col-span-1',
      dark: true
    },
    {
      id: 'airpods-max',
      title: 'AirPods Max',
      subtitle: 'Five fresh colors. USB-C audio.',
      badge: 'Hi-Res Audio',
      tagline: 'Pro-level Active Noise Cancellation and lossless listening.',
      image: 'https://images.unsplash.com/photo-1625245488600-8ed1e7b9b7d3?auto=format&fit=crop&w=1000&q=85',
      price: '$549',
      colSpan: 'md:col-span-2',
      dark: false
    }
  ]

  return (
    <section className="py-16 bg-[#000000] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <span className="text-xs uppercase font-bold tracking-widest text-[#2997ff]">
              Hardware Innovations
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mt-1 text-[#f5f5f7]">
              Engineered for the extraordinary.
            </h2>
          </div>
          <p className="text-sm text-[#86868b] max-w-sm mt-3 md:mt-0">
            Every Apple silicon chip, titanium case, and tandem OLED display working in perfect harmony.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bentoItems.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectProduct(item.id)}
              className={`group relative rounded-3xl overflow-hidden border border-white/10 p-7 cursor-pointer transition-all duration-300 hover:border-white/30 hover:shadow-2xl hover:shadow-black/50 ${item.colSpan} ${
                item.dark ? 'bg-gradient-to-b from-[#161618] to-[#0d0d0f]' : 'bg-gradient-to-b from-[#1c1c1e] to-[#121214]'
              }`}
            >
              {/* Image background with overlay */}
              <div className="relative h-64 md:h-72 w-full overflow-hidden rounded-2xl mb-6 bg-black/40">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                />
                <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-white border border-white/10">
                  From {item.price}
                </div>
              </div>

              {/* Text Info */}
              <div className="flex flex-col justify-between">
                <div>
                  <span className="inline-block text-[11px] font-semibold text-[#2997ff] uppercase tracking-wider mb-1">
                    {item.badge}
                  </span>
                  <h3 className="text-2xl font-semibold tracking-tight text-white group-hover:text-[#2997ff] transition-colors flex items-center justify-between">
                    <span>{item.title}</span>
                    <ArrowUpRight className="w-5 h-5 text-[#86868b] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </h3>
                  <p className="text-sm font-medium text-neutral-300 mt-1">
                    {item.subtitle}
                  </p>
                  <p className="text-xs text-[#86868b] mt-2 leading-relaxed">
                    {item.tagline}
                  </p>
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <span className="text-xs font-semibold text-[#2997ff] group-hover:underline">
                    View Specifications &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
