# CampusEats 🍕

> **Your Campus. Your Food. Your Time.**  
> Simplifying campus dining with quick, reliable, and affordable food delivery from **VIT-AP Food Street** directly to student doorstep.

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Lenis](https://img.shields.io/badge/Smooth_Scroll-Lenis-orange?style=flat)](https://lenis.darkroom.engineering/)

---

## 📌 Overview

**CampusEats** is a production-quality, responsive pre-launch platform built specifically for the **VIT-AP University campus community** in Amaravati. 

During peak lunch and dinner hours, students often encounter 20+ minute counter bottlenecks at Food Street. CampusEats eliminates this congestion via:
1. **Scheduled Slot Ordering**: Students pre-book meal slots between lectures.
2. **Doorstep Dorm Delivery**: Affordable flat delivery fee of just **₹10–20**.
3. **Student Delivery Partners**: Fellow students earn **₹5–₹10 per drop** during their free periods.
4. **Partner Outlet Synergy**: Outlets receive advance orders, smooth out preparation, and reduce counter crowds.

**Launch Timeline**: Pre-launch MVP onboarding 5–10 campus food outlets by **January 2027**.

---

## 🎨 Design System (Hotbite Aesthetic)

The visual design is inspired by the tactile, playful aesthetic of the Hotbite Framer reference site:
- **Palette**:
  - `Cream`: `#FFEFD9` (Main light background, light cards)
  - `Dark Brown`: `#401500` (High contrast headings, dark sections)
  - `Orange`: `#FF9500` (Primary CTAs, badges, accent highlights)
  - `Logo Orange`: `#E05A0C` (Wordmark "EATS" accent)
- **Typography**:
  - **Display Headings**: *Londrina Solid* (400 & 900)
  - **Sub-headings & Accents**: *Andika* (400 & 700)
  - **Body Copy**: *Inter* (400, 500, 600, 700)
- **Textures & Micro-Interactions**:
  - Horizontal & vertical SVG torn paper boundaries between dark and cream sections
  - Subtle repeating ambient grain texture (`smwA9OJpA5ZFq5RdyTx5WEjIu2Y.png`)
  - Floating tilted sticker chips (`-6°`, `+4°`, `+8°`)
  - Smooth inertia scrolling via **Lenis**
  - Respect for `prefers-reduced-motion`

---

## 🚀 All 17 Site Sections

1. **Top Announcement Bar**: Displays campus location (*VIT-AP Campus, Amaravati*), delivery pricing (*₹10–20*), and launch status.
2. **Floating Pill Navbar**: Blurred pill navigation, wordmark, desktop links, mobile hamburger drawer.
3. **Hero Carousel**: Londrina Solid headline, tagline, 4 interactive slides (*Order Food*, *Pre-book*, *Delivery*, *Earn*), tilted sticker chips.
4. **Big Marquee**: Seamless rolling banner (*Quick. Reliable. Affordable.*) with sticker icons.
5. **About & Our Story**: Story narrative (*Solving campus congestion.*), 4 interactive cards, and walkthrough video modal trigger.
6. **How It Works**: 3-step visual cards (*Discover &bull; Pre-book slot &bull; Skip the queue*) using reference photo assets.
7. **Outlets Showcase (Menu)**: Tabbed categories (*Meals*, *Snacks*, *Beverages*), Pickup/Delivery filter, live status badges (*Open Now*, *High Demand*, *Closed*), and ₹ pricing.
8. **Partner Promo & Calculator**: Interactive delivery earnings calculator (deliveries/day slider &times; ₹5–₹10 &rarr; weekly/monthly).
9. **Dual-Direction Icon Marquees**: High-energy ticker ribbons highlighting core campus advantages.
10. **Why CampusEats Feature Grid**: 5 core advantages + *Free to join* + *Delivery fee ₹10–20*.
11. **Proof & Validation**: 3 legitimate proof cards (pilot testing, student response, repeat demand &mdash; strictly zero fabricated statistics).
12. **Partner With Us (Outlets)**: Benefits for food stalls, 3 looping kitchen/delivery videos with in-view autoplay observer, and outlet onboarding CTA.
13. **Queue Congestion Callout Banner**: *"Why wait in a queue when your campus can come to you?"*
14. **Roadmap**: Structured *Now / Next / Later* milestone cards.
15. **Final Waitlist CTA**: Embedded early access registration form with real-time API counter.
16. **Contact Channels**: Official campus email (`info@campuseats.com`), WhatsApp helpline, Instagram, LinkedIn, and X.
17. **Footer**: Wordmark, navigation links, Privacy Policy modal trigger, Back-to-Top button, and subtle giant watermark.

---

## 🛠️ Tech Stack & Directory Structure

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4 + PostCSS + Autoprefixer
- **Icons**: Lucide React + custom SVGs
- **Smooth Scroll**: Lenis
- **Animations**: Framer Motion & Tailwind Keyframes

```
src/
├── app/
│   ├── api/waitlist/route.ts      # Early access waitlist endpoint
│   ├── globals.css                # Fonts, custom utilities, grain texture
│   ├── layout.tsx                 # SEO meta, OpenGraph, JSON-LD, Lenis
│   └── page.tsx                   # Main 17-section assembler & modals
├── components/
│   ├── common/                    # BrandWordmark, TornEdge, GrainOverlay, PillBadge
│   ├── layout/                    # AnnouncementBar, Navbar, Footer
│   ├── modals/                    # WaitlistModal, DemoVideoModal, PrivacyModal
│   ├── sections/                  # All 17 standalone section components
│   └── ui/                        # Button, EarningsSlider
├── constants/
│   ├── brand.ts                   # Centralized brand copy & constants
│   └── navigation.ts              # Nav items & anchor links
├── data/
│   ├── sample-outlets.ts          # Clearly labeled SAMPLE menu & outlet data
│   ├── proof-data.ts              # Validation points & optional testimonials
│   └── roadmap-data.ts            # Now / Next / Later milestone details
└── lib/
    ├── placeholder-images.ts      # Centralized image registry with TODO comments
    └── utils.ts                   # Tailwind merge utility
```

---

## ⚡ Getting Started

### Prerequisites
- **Node.js**: v18.17+ or v20+ (v24 supported)
- **npm**: v9+

### Installation
```bash
# Clone the repository
git clone https://github.com/Kshaurya-07/CampusEats.git
cd CampusEats

# Install dependencies
npm install
```

### Development Server
```bash
npm run dev
```

### Type-Check & Lint
```bash
npm run type-check
npm run lint
```

### Production Build
```bash
npm run build
npm run start
```

---

## ⚠️ Sample / Placeholder Data Notice

Before launching into production, replace the following placeholder items:
- **Menu Photography & Outlets**: In `src/lib/placeholder-images.ts` and `src/data/sample-outlets.ts`, replace sample eatery names and dishes with onboarded VIT-AP Food Street vendors.
- **WhatsApp Helpline**: In `src/constants/brand.ts`, update `WHATSAPP_URL` with the official campus phone number.
- **Demo Video**: In `public/media/campuseats-demo.mp4` (poster: `public/media/campuseats-demo-poster.jpg`), official slot-based walkthrough video is loaded.

---

## 📬 Contact & Support

For queries, partnerships, or stall onboarding at VIT-AP:
- **Email**: [info@campuseats.com](mailto:info@campuseats.com)
- **Location**: VIT-AP Campus, Amaravati, Andhra Pradesh, India
