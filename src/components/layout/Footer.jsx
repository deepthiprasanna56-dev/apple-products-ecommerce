import { Globe } from 'lucide-react'

export function Footer({ onSelectCategory }) {
  const sections = [
    {
      title: 'Shop and Learn',
      links: [
        { label: 'Store', category: 'all' },
        { label: 'Mac', category: 'mac' },
        { label: 'iPad', category: 'ipad' },
        { label: 'iPhone', category: 'iphone' },
        { label: 'Watch', category: 'watch' },
        { label: 'AirPods', category: 'airpods' }
      ]
    },
    {
      title: 'Apple Wallet',
      links: [
        { label: 'Apple Card' },
        { label: 'Apple Pay' },
        { label: 'Apple Cash' }
      ]
    },
    {
      title: 'Account',
      links: [
        { label: 'Manage Your Apple ID' },
        { label: 'Apple Store Account' },
        { label: 'iCloud.com' }
      ]
    },
    {
      title: 'Entertainment',
      links: [
        { label: 'Apple TV+' },
        { label: 'Apple Music' },
        { label: 'Apple Arcade' },
        { label: 'Apple Podcasts' }
      ]
    },
    {
      title: 'Apple Values',
      links: [
        { label: 'Accessibility' },
        { label: 'Education' },
        { label: 'Environment' },
        { label: 'Privacy' },
        { label: 'Supply Chain' }
      ]
    }
  ]

  return (
    <footer className="bg-[#161617] text-[#86868b] text-xs pt-12 pb-16 border-t border-white/10">
      <div className="max-w-[1440px] w-full mx-auto px-4 sm:px-8 lg:px-12 space-y-8">
        {/* Footnote Disclaimers */}
        <div className="space-y-2 border-b border-white/10 pb-6 text-[11px] leading-relaxed">
          <p>
            1. Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit or for an Apple Gift Card.
          </p>
          <p>
            2. Apple Intelligence is available in beta on all iPhone 16 models, iPhone 15 Pro, and iPhone 15 Pro Max, with Siri and device language set to U.S. English, as part of an iOS 18 update.
          </p>
          <p>
            3. Monthly pricing is available when you select 0% APR Apple Card Monthly Installments (ACMI) as payment type at checkout at Apple.
          </p>
        </div>

        {/* Directory Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {sections.map((sec, idx) => (
            <div key={idx} className="space-y-3">
              <h5 className="font-semibold text-[#f5f5f7] tracking-tight">{sec.title}</h5>
              <ul className="space-y-2">
                {sec.links.map((link, lIdx) => (
                  <li key={lIdx}>
                    <button
                      onClick={() => {
                        if (link.category) {
                          onSelectCategory(link.category)
                          document.getElementById('catalog-section')?.scrollIntoView({ behavior: 'smooth' })
                        }
                      }}
                      className="text-[#86868b] hover:text-[#f5f5f7] transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar: Copyright & Locale */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <div className="flex flex-wrap items-center gap-4 text-center sm:text-left">
            <span>Copyright &copy; {new Date().getFullYear()} Apple Inc. All rights reserved.</span>
            <div className="flex items-center gap-3">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">Terms of Use</a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">Sales and Refunds</a>
              <span>|</span>
              <a href="#" className="hover:text-white transition-colors">Legal</a>
            </div>
          </div>

          <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer">
            <Globe className="w-3.5 h-3.5" />
            <span>United States</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
