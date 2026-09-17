<<<<<<< HEAD
# Apple Products E-Commerce Website

An ultra-modern, responsive, and visually stunning Apple Products E-Commerce storefront built with **React 19**, **Vite**, **Tailwind CSS v4**, and **Lucide React**. Designed to faithfully reflect Apple's signature design philosophy — frosted glass blur, microblasted titanium textures, fluid micro-interactions, Cupertino typography, and a seamless shopping experience.

---

## 🌟 Highlights & Features

### 1.  Cinematic Hero & Apple Intelligence
- **Flagship Showcase**: Features the iPhone 16 Pro in Desert Titanium with animated ambient lighting and glowing gradient typography.
- **Apple Intelligence Badge**: Subtle pulsing glow highlighting the A18 Pro neural architecture.
- **Interactive CTAs**: Instant "Buy Now", "Explore Ecosystem", and "Watch the Keynote" film modal with Dolby Atmos audio cues.
- **Hardware Specs Ticker**: Direct highlights for the A18 Pro chip, 48MP Fusion camera system, and Grade 5 titanium chassis.

### 2. 📱 Complete Apple Product Ecosystem
Comprehensive catalog covering 15+ devices across 5 core categories:
- **iPhone**: iPhone 16 Pro, iPhone 16, iPhone 15
- **Mac**: MacBook Pro 14" & 16" (M4 Pro/Max), MacBook Air 13" & 15" (M3), Mac mini (M4)
- **iPad**: iPad Pro (M4 Tandem OLED), iPad Air (M2)
- **Apple Watch**: Apple Watch Ultra 2 (Black Titanium), Apple Watch Series 10 (Jet Black)
- **AirPods**: AirPods Pro 2 (USB-C), AirPods 4 with ANC, AirPods Max (USB-C)

### 3. 🎨 Interactive Product Customizer & Detail Modal
- **Dynamic Color Swatches**: Clicking any color swatch (Desert Titanium, Natural Titanium, Space Black, Ultramarine, Midnight, etc.) dynamically updates the displayed product images in real time!
- **Storage Tier Selector**: Live calculation of price adjustments across 128GB, 256GB, 512GB, 1TB, and 2TB tiers.
- **AppleCare+ Protection**: 2-year accidental damage coverage toggle with real-time price updates.
- **Apple Trade In Estimator**: Deducts estimated trade-in credits (up to $650) from the order total.
- **Multi-Angle Gallery**: High-res image views with clickable thumbnails.
- **Technical Specifications**: Detailed tabs for Processor, Display, Battery Life, Materials, In The Box, and Customer Reviews.

### 4. ⚖️ Side-by-Side Model Comparison
- Compare any two Apple models side by side.
- Instant matrix comparison of Processor, Display, Camera System, Battery Life, Materials, Price, and Customer Ratings.
- Direct "Add to Bag" action from inside the comparison view.

### 5. 🔍 Spotlight Quick Search (`⌘K` / `Ctrl+K`)
- Apple Spotlight-style modal accessible via the search icon or global keyboard shortcut (`⌘K` on Mac / `Ctrl+K` on Windows).
- Live instant query matching across model names, categories, chips, and descriptions.
- Quick-filter tags for trending searches (iPhone 16 Pro, MacBook Pro M4, OLED, etc.).

### 6. 🛍️ Shopping Bag & Sliding Drawer
- Slide-over bag drawer displaying selected product finish, storage capacity, and AppleCare+ status.
- Real-time quantity adjustments (`+` / `-`) and item deletion.
- Free shipping indicator unlocked on all Apple orders.
- Promo code engine: Try code **`APPLE10`** for 10% off or **`TIMCOOK`** for 15% VIP discount!
- Itemized cost calculation (Subtotal, Promo Discount, Estimated Tax, Free Delivery, Grand Total).

### 7. 💳 3-Step Checkout Simulation Flow
- **Step 1 - Shipping**: Customer shipping address, contact email, and city details.
- **Step 2 - Payment**: Simulated **Pay (Apple Pay)** one-touch checkout or Credit/Debit Card with Secure Enclave processing.
- **Step 3 - Confirmation**: Generates a unique Apple order number (e.g., `W982341029`), delivery schedule, and celebratory order confirmation.

### 8. ❤️ Saved for Later (Wishlist)
- Persistent wishlist drawer to save favorite devices.
- One-click "Move to Bag" or "Add All to Bag".

### 9. 📱 Full Responsive Design
Pixel-perfect layouts across all screen resolutions:
- **Mobile** (320px – 640px): Compact navigation drawer, vertical cards, full touch targets.
- **Tablet** (768px – 1024px): 2-column grid, responsive modal overlays.
- **Laptop & Desktop** (1024px – 1440px+): 3-column ecosystem grid, Bento grid layouts, widescreen hero.

---

## 🛠️ Tech Stack

- **Framework**: React 19 (Hooks, Suspense, Compiler)
- **Bundler**: Vite 8 (Ultra-fast HMR and optimized production bundles)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`)
- **Icons**: Lucide React
- **Persistence**: Browser `localStorage` for cart & wishlist state

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm

### Installation & Run
```bash
# 1. Clone or navigate to the project directory
cd apple-products-ecommerce

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```
Open `http://localhost:5173` in your browser.

### Build & Lint
```bash
# Production build
npm run build

# Lint code
npm run lint

# Preview production build locally
npm run preview
```

---

## 🌐 Deployment Guidelines

### Option 1: Deploy to Vercel
1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: modern Apple e-commerce storefront"
   git branch -M main
   git remote add origin https://github.com/<your-username>/apple-products-ecommerce.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. The included `vercel.json` automatically configures Vite SPA routes with zero additional setup.
4. Click **Deploy**!

### Option 2: Deploy to Netlify
1. Push to GitHub as shown above.
2. Go to [netlify.com](https://netlify.com) and click **"Add new site"** &rarr; **"Import an existing project"**.
3. The included `netlify.toml` automatically configures build settings:
   - **Build Command**: `npm run build`
   - **Publish Directory**: `dist`
   - **SPA Redirects**: `/* -> /index.html 200`
4. Click **Deploy Site**!

---

## 📁 Project Structure

```
apple-products-ecommerce/
├── public/
│   ├── favicon.svg               # Apple vector icon
│   └── icons.svg
├── src/
│   ├── components/
│   │   ├── cart/
│   │   │   ├── CartDrawer.jsx    # Slide-over shopping bag with promo codes
│   │   │   └── CheckoutModal.jsx # 3-step checkout simulation flow
│   │   ├── common/
│   │   │   ├── SearchModal.jsx   # Spotlight instant search (Cmd+K)
│   │   │   ├── WishlistDrawer.jsx# Saved items drawer
│   │   │   ├── Toast.jsx         # Action toasts (Bag, Wishlist, Promo)
│   │   │   └── VideoModal.jsx    # Keynote film preview modal
│   │   ├── home/
│   │   │   ├── HeroSection.jsx   # iPhone 16 Pro Desert Titanium hero
│   │   │   ├── BentoGrid.jsx     # Hardware innovations Bento showcase
│   │   │   └── PerksStrip.jsx    # Delivery & Apple Care value strip
│   │   ├── layout/
│   │   │   ├── Navbar.jsx        # Frosted glass Apple navbar & mobile drawer
│   │   │   └── Footer.jsx        # Multi-column Apple directory & legal links
│   │   └── products/
│   │       ├── CategoryNav.jsx   # Category switcher pills
│   │       ├── FilterBar.jsx     # Search, price slider, and sort bar
│   │       ├── ProductCard.jsx   # Dynamic color preview, quick view, buy CTA
│   │       ├── ProductDetailsModal.jsx # Full config modal (color, storage, specs)
│   │       └── CompareModal.jsx  # Side-by-side model comparison matrix
│   ├── data/
│   │   └── products.js           # Full Apple catalog data & specs
│   ├── App.jsx                   # Central state & component integration
│   ├── index.css                 # Tailwind v4, Apple typography & glassmorphism
│   └── main.jsx                  # React DOM entry
├── netlify.toml                  # Netlify deployment configuration
├── vercel.json                   # Vercel deployment configuration
├── vite.config.js                # Vite + Tailwind v4 configuration
└── package.json
```

---

## 📄 License
This project is built for demonstration and educational purposes inspired by Apple design language. All Apple product names, trademarks, and imagery belong to Apple Inc.
=======
# apple-products-ecommerce
🍎 Premium Apple Products E-Commerce Website built with React, Vite &amp; Tailwind CSS, featuring product listings, details, wishlist, cart, responsive design, and smooth animations.
>>>>>>> e3dd6d58ed30baf85f7c81003798d0def2a2347f
