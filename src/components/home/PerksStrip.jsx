import { Truck, RefreshCw, CreditCard, Headphones } from 'lucide-react'

export function PerksStrip() {
  const perks = [
    {
      icon: Truck,
      title: 'Free 2-Hour Delivery',
      desc: 'Or fast, free pickup at any Apple Store near you.'
    },
    {
      icon: RefreshCw,
      title: 'Apple Trade In',
      desc: 'Get up to $650 in credit when you trade in an eligible device.'
    },
    {
      icon: CreditCard,
      title: '0% APR Financing',
      desc: 'Pay over time interest-free with Apple Card Monthly Installments.'
    },
    {
      icon: Headphones,
      title: 'Specialist Support',
      desc: 'Shop one-on-one with a Specialist online or in an Apple Store.'
    }
  ]

  return (
    <section className="bg-[#161617] border-y border-white/10 py-10 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {perks.map((perk, index) => {
            const Icon = perk.icon
            return (
              <div key={index} className="flex items-start gap-4 group">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 text-[#2997ff] group-hover:bg-[#2997ff]/10 group-hover:border-[#2997ff]/30 transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#f5f5f7] tracking-tight">
                    {perk.title}
                  </h4>
                  <p className="text-xs text-[#86868b] mt-1 leading-relaxed">
                    {perk.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
