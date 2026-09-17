export const CATEGORIES = [
  { id: 'all', name: 'All Products', icon: 'Sparkles' },
  { id: 'iphone', name: 'iPhone', icon: 'Smartphone' },
  { id: 'mac', name: 'Mac', icon: 'Laptop' },
  { id: 'ipad', name: 'iPad', icon: 'Tablet' },
  { id: 'watch', name: 'Watch', icon: 'Watch' },
  { id: 'airpods', name: 'AirPods', icon: 'Headphones' },
]

export const PRODUCTS = [
  // iPhone
  {
    id: 'iphone-16-pro',
    name: 'iPhone 16 Pro',
    category: 'iphone',
    tagline: 'Hello, Apple Intelligence.',
    description: 'Forged in titanium with the groundbreaking A18 Pro chip, 48MP Fusion camera system, and Camera Control.',
    badge: 'New',
    featured: true,
    price: 999,
    displayPrice: '$999',
    monthlyPrice: '$41.62/mo. for 24 mo.',
    tradeInUpTo: '$650',
    rating: 4.9,
    reviewsCount: 1420,
    colors: [
      {
        name: 'Desert Titanium',
        hex: '#bca693',
        image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1000&q=85',
        gallery: [
          'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1000&q=85',
          'https://images.unsplash.com/photo-1592286927505-b0e8f8f8b5a8?auto=format&fit=crop&w=1000&q=85',
          'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1000&q=85'
        ]
      },
      {
        name: 'Natural Titanium',
        hex: '#9e978e',
        image: 'https://images.unsplash.com/photo-1592286927505-b0e8f8f8b5a8?auto=format&fit=crop&w=1000&q=85',
        gallery: [
          'https://images.unsplash.com/photo-1592286927505-b0e8f8f8b5a8?auto=format&fit=crop&w=1000&q=85',
          'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1000&q=85'
        ]
      },
      {
        name: 'White Titanium',
        hex: '#f2f1ed',
        image: 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1000&q=85',
        gallery: [
          'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=1000&q=85'
        ]
      },
      {
        name: 'Black Titanium',
        hex: '#2e2c2b',
        image: 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?auto=format&fit=crop&w=1000&q=85',
        gallery: [
          'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?auto=format&fit=crop&w=1000&q=85'
        ]
      }
    ],
    storageOptions: [
      { size: '128GB', priceDiff: 0 },
      { size: '256GB', priceDiff: 100 },
      { size: '512GB', priceDiff: 300 },
      { size: '1TB', priceDiff: 500 }
    ],
    specs: {
      chip: 'A18 Pro chip with 6-core GPU',
      display: '6.3" or 6.9" Super Retina XDR with ProMotion',
      camera: 'Pro 48MP Fusion | 48MP Ultra Wide | 5x Telephoto',
      battery: 'Up to 33 hours video playback',
      finish: 'Grade 5 Titanium with textured matte glass',
      fastCharge: 'Up to 50% charge in around 30 minutes',
      os: 'iOS 18 with Apple Intelligence'
    },
    highlights: [
      'Built for Apple Intelligence — personal, private, powerful',
      'Camera Control gives you fast access to visual tools',
      '4K 120 fps Dolby Vision for cinematic video creation',
      'Thinnest borders on any Apple product ever'
    ],
    inTheBox: ['iPhone 16 Pro', 'USB-C Charge Cable (1m)', 'Documentation'],
    appleCarePrice: 199
  },
  {
    id: 'iphone-16',
    name: 'iPhone 16',
    category: 'iphone',
    tagline: 'Hello, Apple Intelligence.',
    description: 'Camera Control. 48MP Fusion camera. Five vibrant colors. Powered by the A18 chip.',
    badge: 'New',
    featured: false,
    price: 799,
    displayPrice: '$799',
    monthlyPrice: '$33.29/mo. for 24 mo.',
    tradeInUpTo: '$600',
    rating: 4.8,
    reviewsCount: 890,
    colors: [
      {
        name: 'Ultramarine',
        hex: '#405697',
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1000&q=85',
        gallery: ['https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1000&q=85']
      },
      {
        name: 'Teal',
        hex: '#8eaab1',
        image: 'https://images.unsplash.com/photo-1574755393849-623942496936?auto=format&fit=crop&w=1000&q=85',
        gallery: ['https://images.unsplash.com/photo-1574755393849-623942496936?auto=format&fit=crop&w=1000&q=85']
      },
      {
        name: 'Pink',
        hex: '#e2a3b0',
        image: 'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=1000&q=85',
        gallery: ['https://images.unsplash.com/photo-1565849904461-04a58ad377e0?auto=format&fit=crop&w=1000&q=85']
      },
      {
        name: 'Black',
        hex: '#232528',
        image: 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?auto=format&fit=crop&w=1000&q=85',
        gallery: ['https://images.unsplash.com/photo-1591337676887-a217a6970a8a?auto=format&fit=crop&w=1000&q=85']
      }
    ],
    storageOptions: [
      { size: '128GB', priceDiff: 0 },
      { size: '256GB', priceDiff: 100 },
      { size: '512GB', priceDiff: 300 }
    ],
    specs: {
      chip: 'A18 chip with 5-core GPU',
      display: '6.1" or 6.7" Super Retina XDR display',
      camera: 'Advanced dual-camera 48MP Fusion | 12MP Ultra Wide',
      battery: 'Up to 27 hours video playback',
      finish: 'Aerospace-grade aluminum with color-infused glass',
      fastCharge: 'Up to 50% charge in around 30 minutes',
      os: 'iOS 18 with Apple Intelligence'
    },
    highlights: [
      'Camera Control for instant snapshot access',
      'Macro photography on iPhone non-Pro for the first time',
      'Action button customization',
      'Action-packed A18 chip with hardware ray tracing'
    ],
    inTheBox: ['iPhone 16', 'USB-C Charge Cable (1m)', 'Documentation'],
    appleCarePrice: 149
  },
  {
    id: 'iphone-15',
    name: 'iPhone 15',
    category: 'iphone',
    tagline: 'As dependable as ever.',
    description: 'Dynamic Island, 48MP Main camera, and USB-C all wrapped in a durable color-infused glass and aluminum design.',
    badge: 'Popular',
    featured: false,
    price: 699,
    displayPrice: '$699',
    monthlyPrice: '$29.12/mo. for 24 mo.',
    tradeInUpTo: '$500',
    rating: 4.7,
    reviewsCount: 3100,
    colors: [
      {
        name: 'Blue',
        hex: '#d2dbe2',
        image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1000&q=85',
        gallery: ['https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=1000&q=85']
      },
      {
        name: 'Yellow',
        hex: '#f5e7b2',
        image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1000&q=85',
        gallery: ['https://images.unsplash.com/photo-1592750475338-74b7b21085ab?auto=format&fit=crop&w=1000&q=85']
      },
      {
        name: 'Black',
        hex: '#2d3134',
        image: 'https://images.unsplash.com/photo-1591337676887-a217a6970a8a?auto=format&fit=crop&w=1000&q=85',
        gallery: ['https://images.unsplash.com/photo-1591337676887-a217a6970a8a?auto=format&fit=crop&w=1000&q=85']
      }
    ],
    storageOptions: [
      { size: '128GB', priceDiff: 0 },
      { size: '256GB', priceDiff: 100 },
      { size: '512GB', priceDiff: 300 }
    ],
    specs: {
      chip: 'A16 Bionic chip',
      display: '6.1" Super Retina XDR display with Dynamic Island',
      camera: '48MP Main | 2x Telephoto | Ultra Wide',
      battery: 'Up to 20 hours video playback',
      finish: 'Aluminum with color-infused glass back',
      fastCharge: 'Up to 50% in 30 mins',
      os: 'iOS 18'
    },
    highlights: [
      'Dynamic Island bubbles up alerts and Live Activities',
      'Super-high-resolution 48MP photos',
      'USB-C universal charging compatibility',
      'Ceramic Shield front tougher than smartphone glass'
    ],
    inTheBox: ['iPhone 15', 'USB-C Charge Cable (1m)', 'Documentation'],
    appleCarePrice: 149
  },

  // Mac
  {
    id: 'macbook-pro-14-16',
    name: 'MacBook Pro 14" & 16"',
    category: 'mac',
    tagline: 'A work of smart.',
    description: 'Powered by M4, M4 Pro, and M4 Max chips. Featuring Liquid Retina XDR with up to 1,600 nits and up to 24 hours battery life.',
    badge: 'M4 Series',
    featured: true,
    price: 1599,
    displayPrice: '$1,599',
    monthlyPrice: '$133.25/mo. for 12 mo.',
    tradeInUpTo: '$1,050',
    rating: 4.95,
    reviewsCount: 940,
    colors: [
      {
        name: 'Space Black',
        hex: '#232528',
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1000&q=85',
        gallery: [
          'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1000&q=85',
          'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=1000&q=85'
        ]
      },
      {
        name: 'Silver',
        hex: '#e2e4e5',
        image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=1000&q=85',
        gallery: [
          'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=1000&q=85'
        ]
      }
    ],
    storageOptions: [
      { size: '512GB SSD', priceDiff: 0 },
      { size: '1TB SSD', priceDiff: 200 },
      { size: '2TB SSD', priceDiff: 600 },
      { size: '4TB SSD', priceDiff: 1200 }
    ],
    specs: {
      chip: 'Apple M4, M4 Pro, or M4 Max chip with up to 16-core CPU',
      display: '14.2" Liquid Retina XDR (3024x1964) with ProMotion 120Hz',
      camera: '12MP Center Stage camera with Desk View support',
      battery: 'Up to 24 hours of battery life',
      finish: '100% recycled aluminum enclosure with anodization seal',
      fastCharge: 'Fast-charge capable with 96W or 140W USB-C Power Adapter',
      os: 'macOS Sequoia with Apple Intelligence'
    },
    highlights: [
      'Incredible multi-threaded CPU performance and GPU ray tracing',
      'Nano-texture display option to dramatically cut glare',
      'Thunderbolt 5 ports supporting blazing transfer speeds',
      'Studio-quality three-mic array and six-speaker sound system'
    ],
    inTheBox: ['14-inch MacBook Pro', 'USB-C to MagSafe 3 Cable (2m)', 'USB-C Power Adapter'],
    appleCarePrice: 279
  },
  {
    id: 'macbook-air-13-15',
    name: 'MacBook Air 13" & 15"',
    category: 'mac',
    tagline: 'Lean. Mean. M3 machine.',
    description: 'Impossibly thin and fast with the M3 chip. Striking Liquid Retina display, MagSafe charging, and silent fanless design.',
    badge: 'Popular',
    featured: false,
    price: 1099,
    displayPrice: '$1,099',
    monthlyPrice: '$91.58/mo. for 12 mo.',
    tradeInUpTo: '$750',
    rating: 4.88,
    reviewsCount: 2200,
    colors: [
      {
        name: 'Midnight',
        hex: '#1f242e',
        image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=1000&q=85',
        gallery: ['https://images.unsplash.com/photo-1541807084-5c52b6b3adef?auto=format&fit=crop&w=1000&q=85']
      },
      {
        name: 'Starlight',
        hex: '#ede4d8',
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1000&q=85',
        gallery: ['https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1000&q=85']
      },
      {
        name: 'Space Gray',
        hex: '#787a7d',
        image: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=1000&q=85',
        gallery: ['https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&w=1000&q=85']
      },
      {
        name: 'Silver',
        hex: '#e2e4e5',
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1000&q=85',
        gallery: ['https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1000&q=85']
      }
    ],
    storageOptions: [
      { size: '256GB SSD', priceDiff: 0 },
      { size: '512GB SSD', priceDiff: 200 },
      { size: '1TB SSD', priceDiff: 400 }
    ],
    specs: {
      chip: 'Apple M3 chip with 8-core CPU and up to 10-core GPU',
      display: '13.6" or 15.3" Liquid Retina display (500 nits)',
      camera: '1080p FaceTime HD camera',
      battery: 'Up to 18 hours battery life',
      finish: 'Ultralight 0.44" thin anodized aluminum',
      fastCharge: 'Fast-charge capable with 70W USB-C Power Adapter',
      os: 'macOS Sequoia'
    },
    highlights: [
      'Fanless design for completely silent operation',
      'Support for up to two external displays with laptop lid closed',
      'MagSafe 3 charging port keeps both Thunderbolt ports free',
      'Touch ID for secure login and Apple Pay'
    ],
    inTheBox: ['13-inch MacBook Air', 'USB-C to MagSafe 3 Cable (2m)', '30W USB-C Power Adapter'],
    appleCarePrice: 199
  },
  {
    id: 'mac-mini',
    name: 'Mac mini',
    category: 'mac',
    tagline: 'More muscle. Smaller frame.',
    description: 'Re-engineered around the M4 and M4 Pro chips. At just five inches square, it punches way above its weight.',
    badge: 'Redesigned',
    featured: false,
    price: 599,
    displayPrice: '$599',
    monthlyPrice: '$49.91/mo. for 12 mo.',
    tradeInUpTo: '$450',
    rating: 4.92,
    reviewsCount: 780,
    colors: [
      {
        name: 'Silver',
        hex: '#e2e4e5',
        image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1000&q=85',
        gallery: ['https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1000&q=85']
      }
    ],
    storageOptions: [
      { size: '256GB SSD', priceDiff: 0 },
      { size: '512GB SSD', priceDiff: 200 },
      { size: '1TB SSD', priceDiff: 400 }
    ],
    specs: {
      chip: 'Apple M4 chip (10-core CPU, 10-core GPU)',
      display: 'Supports up to three displays simultaneously',
      camera: 'Compatible with Studio Display & external webcams',
      battery: 'Plug-in desktop system (ultra power-efficient)',
      finish: '5.0 x 5.0 inch compact recycled aluminum enclosure',
      fastCharge: 'Integrated 100-240V power supply',
      os: 'macOS Sequoia'
    },
    highlights: [
      'First carbon-neutral Mac in Apple history',
      'Front-facing USB-C and headphone jack for easy plugging',
      'Blazing-fast ray tracing and 16-core Neural Engine',
      'Thunderbolt 4 and HDMI ports'
    ],
    inTheBox: ['Mac mini', 'Power lead'],
    appleCarePrice: 99
  },

  // iPad
  {
    id: 'ipad-pro',
    name: 'iPad Pro',
    category: 'ipad',
    tagline: 'Thinpossible.',
    description: 'The thinnest Apple product ever. Breakthrough Ultra Retina XDR with tandem OLED technology and outrageous M4 performance.',
    badge: 'M4 OLED',
    featured: true,
    price: 999,
    displayPrice: '$999',
    monthlyPrice: '$83.25/mo. for 12 mo.',
    tradeInUpTo: '$580',
    rating: 4.93,
    reviewsCount: 1100,
    colors: [
      {
        name: 'Space Black',
        hex: '#242528',
        image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=1000&q=85',
        gallery: [
          'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=1000&q=85'
        ]
      },
      {
        name: 'Silver',
        hex: '#e2e4e5',
        image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=1000&q=85',
        gallery: [
          'https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=1000&q=85'
        ]
      }
    ],
    storageOptions: [
      { size: '256GB', priceDiff: 0 },
      { size: '512GB', priceDiff: 200 },
      { size: '1TB', priceDiff: 600 },
      { size: '2TB', priceDiff: 1200 }
    ],
    specs: {
      chip: 'Apple M4 chip with 9-core or 10-core CPU',
      display: '11" or 13" Ultra Retina XDR tandem OLED (1600 nits peak)',
      camera: '12MP Wide back camera with LiDAR | 12MP Center Stage front',
      battery: 'Up to 10 hours surfing the web on Wi-Fi',
      finish: '5.1mm ultra-thin enclosure',
      fastCharge: 'USB-C fast charge support with Thunderbolt 3',
      os: 'iPadOS 18 with Apple Intelligence'
    },
    highlights: [
      'Groundbreaking tandem OLED delivers extreme brightness and contrast',
      'Supports Apple Pencil Pro with haptic feedback and barrel roll',
      'Magic Keyboard with function row and aluminum palm rest',
      'Advanced 16-core Neural Engine for AI workflows'
    ],
    inTheBox: ['iPad Pro', 'USB-C Charge Cable (1m)', '20W USB-C Power Adapter'],
    appleCarePrice: 149
  },
  {
    id: 'ipad-air',
    name: 'iPad Air',
    category: 'ipad',
    tagline: 'Fresh Air.',
    description: 'Now in an 11-inch and an all-new 13-inch model. Powered by the incredibly fast Apple M2 chip with stunning Liquid Retina display.',
    badge: 'Popular',
    featured: false,
    price: 599,
    displayPrice: '$599',
    monthlyPrice: '$49.91/mo. for 12 mo.',
    tradeInUpTo: '$400',
    rating: 4.82,
    reviewsCount: 1650,
    colors: [
      {
        name: 'Space Gray',
        hex: '#696b6e',
        image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=1000&q=85',
        gallery: ['https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=1000&q=85']
      },
      {
        name: 'Blue',
        hex: '#c0cfdb',
        image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=1000&q=85',
        gallery: ['https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=1000&q=85']
      },
      {
        name: 'Purple',
        hex: '#d1cde0',
        image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=1000&q=85',
        gallery: ['https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&w=1000&q=85']
      },
      {
        name: 'Starlight',
        hex: '#ede8dd',
        image: 'https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=1000&q=85',
        gallery: ['https://images.unsplash.com/photo-1561154464-82e9adf32764?auto=format&fit=crop&w=1000&q=85']
      }
    ],
    storageOptions: [
      { size: '128GB', priceDiff: 0 },
      { size: '256GB', priceDiff: 100 },
      { size: '512GB', priceDiff: 300 },
      { size: '1TB', priceDiff: 500 }
    ],
    specs: {
      chip: 'Apple M2 chip with 8-core CPU and 10-core GPU',
      display: '11" or 13" Liquid Retina display with True Tone and P3 wide color',
      camera: 'Landscape 12MP Ultra Wide front camera with Center Stage',
      battery: 'Up to 10 hours battery life',
      finish: '100% recycled aluminum enclosure',
      fastCharge: 'USB-C port with support for charging and DisplayPort',
      os: 'iPadOS 18'
    },
    highlights: [
      'Landscape front camera positioned ideally for video calls',
      'Works with Apple Pencil Pro and Apple Pencil (USB-C)',
      'Wi-Fi 6E delivers ultra-fast wireless connections',
      'Touch ID built right into the top button'
    ],
    inTheBox: ['iPad Air', 'USB-C Charge Cable (1m)', '20W USB-C Power Adapter'],
    appleCarePrice: 119
  },

  // Apple Watch
  {
    id: 'apple-watch-ultra-2',
    name: 'Apple Watch Ultra 2',
    category: 'watch',
    tagline: 'Engineered for the extreme.',
    description: 'The most capable and rugged Apple Watch. With precision dual-frequency GPS, up to 36 hours of battery life, and 3000-nit display.',
    badge: 'Titanium',
    featured: true,
    price: 799,
    displayPrice: '$799',
    monthlyPrice: '$66.58/mo. for 12 mo.',
    tradeInUpTo: '$365',
    rating: 4.95,
    reviewsCount: 820,
    colors: [
      {
        name: 'Black Titanium',
        hex: '#232528',
        image: 'https://images.unsplash.com/photo-1544117519-31a4b719223d?auto=format&fit=crop&w=1000&q=85',
        gallery: ['https://images.unsplash.com/photo-1544117519-31a4b719223d?auto=format&fit=crop&w=1000&q=85']
      },
      {
        name: 'Natural Titanium',
        hex: '#b8b2a8',
        image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=1000&q=85',
        gallery: ['https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=1000&q=85']
      }
    ],
    storageOptions: [
      { size: 'GPS + Cellular (49mm)', priceDiff: 0 }
    ],
    specs: {
      chip: 'S9 SiP with 64-bit dual-core processor and 4-core Neural Engine',
      display: '49mm Always-On Retina OLED (up to 3000 nits brightness)',
      camera: 'N/A (Depth gauge & water temperature sensor)',
      battery: 'Up to 36 hours normal use (up to 72 hours in Low Power Mode)',
      finish: 'Aerospace-grade titanium case with raised sapphire front crystal',
      fastCharge: 'Fast charging from 0 to 80% in about 1 hour',
      os: 'watchOS 11'
    },
    highlights: [
      'Action button customizable for workouts, compass waypoints, and dive tracking',
      'Water resistant 100m and certified EN13319 for recreational scuba diving to 40m',
      'Dual speakers and three-mic array with beamforming for crystal calls in wind',
      '86-decibel Emergency Siren audible up to 600 feet'
    ],
    inTheBox: ['Apple Watch Ultra 2', 'Titanium Band', 'Apple Watch Magnetic Fast Charger to USB-C Cable (1m)'],
    appleCarePrice: 99
  },
  {
    id: 'apple-watch-series-10',
    name: 'Apple Watch Series 10',
    category: 'watch',
    tagline: 'Thinscredible.',
    description: 'Our thinnest watch ever, with our biggest display ever. Advanced sleep apnea notifications and faster charging.',
    badge: 'New',
    featured: false,
    price: 399,
    displayPrice: '$399',
    monthlyPrice: '$33.25/mo. for 12 mo.',
    tradeInUpTo: '$240',
    rating: 4.86,
    reviewsCount: 1490,
    colors: [
      {
        name: 'Jet Black',
        hex: '#111213',
        image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=1000&q=85',
        gallery: ['https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=1000&q=85']
      },
      {
        name: 'Rose Gold',
        hex: '#e2b3a9',
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=85',
        gallery: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1000&q=85']
      },
      {
        name: 'Silver',
        hex: '#e3e5e6',
        image: 'https://images.unsplash.com/photo-1544117519-31a4b719223d?auto=format&fit=crop&w=1000&q=85',
        gallery: ['https://images.unsplash.com/photo-1544117519-31a4b719223d?auto=format&fit=crop&w=1000&q=85']
      }
    ],
    storageOptions: [
      { size: '42mm Case', priceDiff: 0 },
      { size: '46mm Case', priceDiff: 30 }
    ],
    specs: {
      chip: 'S10 SiP with 64-bit dual-core processor',
      display: 'Wide-angle OLED Always-On Retina display (up to 2000 nits)',
      camera: 'ECG app & blood oxygen / sleep apnea notifications',
      battery: 'Up to 18 hours (up to 36 hours in Low Power Mode)',
      finish: 'Polished aluminum or aerospace titanium',
      fastCharge: '0 to 80% charge in about 30 minutes',
      os: 'watchOS 11'
    },
    highlights: [
      'Nearly 10% thinner than Series 9 for all-day and all-night comfort',
      'Over 30% more active screen area than Series 6',
      'Depth and water temperature sensor for swimming and snorkeling',
      'Built-in speaker can play music and podcasts directly'
    ],
    inTheBox: ['Apple Watch Series 10', 'Sport Band', 'Apple Watch Magnetic Fast Charger to USB-C Cable (1m)'],
    appleCarePrice: 79
  },

  // AirPods
  {
    id: 'airpods-pro-2',
    name: 'AirPods Pro 2',
    category: 'airpods',
    tagline: 'Pro-level Active Noise Cancellation.',
    description: 'Up to 2x more Active Noise Cancellation, Transparency mode, and clinical-grade Hearing Aid feature.',
    badge: 'Best Seller',
    featured: true,
    price: 249,
    displayPrice: '$249',
    monthlyPrice: '$20.75/mo. for 12 mo.',
    tradeInUpTo: '$75',
    rating: 4.91,
    reviewsCount: 4300,
    colors: [
      {
        name: 'White',
        hex: '#f5f5f7',
        image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=1000&q=85',
        gallery: [
          'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?auto=format&fit=crop&w=1000&q=85',
          'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?auto=format&fit=crop&w=1000&q=85'
        ]
      }
    ],
    storageOptions: [
      { size: 'Standard (MagSafe USB-C Case)', priceDiff: 0 }
    ],
    specs: {
      chip: 'Apple H2 headphone chip | Apple U1 chip in case',
      display: 'Touch control for volume swipe and playback',
      camera: 'N/A (Optical in-ear sensors)',
      battery: 'Up to 6 hours listening with ANC (up to 30 hours with case)',
      finish: 'Glossy white with silicone ear tips (four sizes included: XS, S, M, L)',
      fastCharge: '5 minutes in the case provides around 1 hour listening',
      os: 'Works with iOS, iPadOS, macOS, and watchOS'
    },
    highlights: [
      'Clinically validated all-in-one hearing health experience',
      'Personalized Spatial Audio with dynamic head tracking',
      'Precision Finding for MagSafe Charging Case with built-in speaker',
      'IP54 dust, sweat, and water resistant'
    ],
    inTheBox: ['AirPods Pro 2', 'MagSafe Charging Case (USB-C)', 'Silicone ear tips (four sizes)', 'Documentation'],
    appleCarePrice: 29
  },
  {
    id: 'airpods-max',
    name: 'AirPods Max (USB-C)',
    category: 'airpods',
    tagline: 'Symphonic journey.',
    description: 'The ultimate personal listening experience. Now in five fresh colors with USB-C charging and lossless audio support.',
    badge: 'Audiophile',
    featured: true,
    price: 549,
    displayPrice: '$549',
    monthlyPrice: '$45.75/mo. for 12 mo.',
    tradeInUpTo: '$180',
    rating: 4.84,
    reviewsCount: 1980,
    colors: [
      {
        name: 'Midnight',
        hex: '#1f242e',
        image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1000&q=85',
        gallery: ['https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1000&q=85']
      },
      {
        name: 'Starlight',
        hex: '#eee8dc',
        image: 'https://images.unsplash.com/photo-1625245488600-8ed1e7b9b7d3?auto=format&fit=crop&w=1000&q=85',
        gallery: ['https://images.unsplash.com/photo-1625245488600-8ed1e7b9b7d3?auto=format&fit=crop&w=1000&q=85']
      },
      {
        name: 'Blue',
        hex: '#69889f',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=85',
        gallery: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=85']
      },
      {
        name: 'Purple',
        hex: '#8e829e',
        image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1000&q=85',
        gallery: ['https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=1000&q=85']
      },
      {
        name: 'Orange',
        hex: '#e2886c',
        image: 'https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1000&q=85',
        gallery: ['https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1000&q=85']
      }
    ],
    storageOptions: [
      { size: 'Over-Ear Premium Audio', priceDiff: 0 }
    ],
    specs: {
      chip: 'Apple H1 headphone chip (in each ear cup)',
      display: 'Digital Crown for volume, track skipping, Siri and calls',
      camera: 'Nine total microphones for ANC and voice pickup',
      battery: 'Up to 20 hours of listening with ANC enabled',
      finish: 'Anodized aluminum cups with breathable knit mesh canopy',
      fastCharge: '5 minutes charge gives 1.5 hours of listening',
      os: 'USB-C charging with support for lossless audio'
    },
    highlights: [
      'Apple-designed dynamic driver provides high-fidelity audio with ultra-low distortion',
      'Pro-level Active Noise Cancellation isolates external sound with computational audio',
      'Personalized Spatial Audio with dynamic head tracking places sound all around you',
      'Smart Case preserves battery state in ultra-low-power mode'
    ],
    inTheBox: ['AirPods Max', 'Smart Case', 'USB-C Charge Cable', 'Documentation'],
    appleCarePrice: 59
  },
  {
    id: 'airpods-4',
    name: 'AirPods 4 with ANC',
    category: 'airpods',
    tagline: 'Iconic. Now supersonic.',
    description: 'Redesigned for exceptional fit and audio performance. Available with Active Noise Cancellation for the very first time in an open-ear design.',
    badge: 'New',
    featured: false,
    price: 179,
    displayPrice: '$179',
    monthlyPrice: '$14.91/mo. for 12 mo.',
    tradeInUpTo: '$50',
    rating: 4.81,
    reviewsCount: 920,
    colors: [
      {
        name: 'White',
        hex: '#f5f5f7',
        image: 'https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?auto=format&fit=crop&w=1000&q=85',
        gallery: ['https://images.unsplash.com/photo-1572536147248-ac59a8abfa4b?auto=format&fit=crop&w=1000&q=85']
      }
    ],
    storageOptions: [
      { size: 'With Active Noise Cancellation', priceDiff: 0 }
    ],
    specs: {
      chip: 'Apple H2 headphone chip',
      display: 'Force sensor stem controls',
      camera: 'Dual beamforming microphones',
      battery: 'Up to 5 hours listening (up to 30 hours total with case)',
      finish: 'Open-ear acoustic architecture',
      fastCharge: 'Case charges via USB-C or Apple Watch charger',
      os: 'Universal Apple device auto-switching'
    },
    highlights: [
      'Active Noise Cancellation in an open-ear shape',
      'Adaptive Audio and Transparency mode automatically blend sound',
      'Wireless charging case is 10% smaller than previous generation',
      'Voice Isolation for crystal-clear phone calls in noisy environments'
    ],
    inTheBox: ['AirPods 4 with Active Noise Cancellation', 'Charging Case (USB-C) with speaker', 'Documentation'],
    appleCarePrice: 29
  }
]
