# CampusEats

Campus food delivery for VIT-AP students, connecting students, campus food outlets, and student delivery partners in one place.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [How It Works](#how-it-works)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Configuration](#configuration)
- [Waitlist API](#waitlist-api)
- [Delivery Partner Earnings](#delivery-partner-earnings)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Author](#author)

## Overview

CampusEats is a campus-specific food delivery platform for VIT-AP students (undergraduate and postgraduate). It is built around VIT-AP Food Street, hostels, and class schedules, with the aim of reducing queue time by letting students pre-book a pickup or delivery slot.

This repository contains the CampusEats launch website: the public landing page, waitlist forms for students, outlets, and delivery partners, and the brand and design foundation for the upcoming app.

| Item | Detail |
| --- | --- |
| Audience | VIT-AP students, campus food outlets, student delivery partners |
| Pricing | Free to join; delivery fee of ₹10–20 per order |
| Stage | Pre-launch; MVP with 5–10 campus outlets planned for January 2027 |
| Primary action | Join the waitlist |

CampusEats is an independent student venture and is not officially affiliated with VIT-AP University.

## Features

### For students

- Browse campus outlets with open, busy, and closed status
- Pre-book a pickup or delivery time slot between classes
- Choose counter pickup or delivery to a hostel block
- Join the waitlist with a VIT-AP email or phone number

### For campus outlets

- Showcase products digitally
- Receive advance orders and prepare them for a scheduled slot
- Reduce counter congestion during peak hours
- Apply to become a partner outlet from the site

### For delivery partners

- Earn ₹5–10 per delivery in free time
- Use the on-site earnings calculator to estimate daily, weekly, and monthly income

### Website experience

- Responsive layout for mobile, tablet, and desktop
- Smooth scrolling, hero carousel, and a demo video modal
- Semantic HTML, keyboard navigation, visible focus states, and reduced-motion support
- SEO basics: meta tags, Open Graph, sitemap, robots, and JSON-LD

### Interactive 3D experience

The landing page includes adaptive 3D effects, implemented with the existing Framer Motion dependency only. No new dependencies were added for these effects.

- **Hero3D** — mouse-parallax floating cards in the hero section
- **CursorGlow** — a glow and ring that follows the cursor and grows on interactive elements
- **ScrollProgress3D** — a progress bar at the top of the page that fills as you scroll
- **ScrollReveal3D** — content sections that reveal with a rotateX motion as they enter the viewport

The effects adapt to the device:

| Device | Behaviour |
| --- | --- |
| Mobile | Light chips in the hero; cursor effects off |
| Tablet | Gentler hero tilt |
| Laptop and desktop | Full mouse parallax |

The effects are disabled on touch devices and respect reduced-motion preferences.

Recent fixes include missing Tailwind utilities, a SmoothScroll requestAnimationFrame leak, Escape-to-close behaviour for modals, and form label links.

## How It Works

1. **Explore** — Browse live menus from Food Street stalls.
2. **Schedule** — Lock in a delivery or pickup window in advance.
3. **Enjoy** — Collect a packed meal without waiting, or have a student partner deliver it.

## Tech Stack

| Layer | Technology |
| --- | --- |
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animation | Framer Motion — reveals, carousels, modals, and the 3D effects (Hero3D, CursorGlow, ScrollProgress3D, ScrollReveal3D) |
| Smooth scroll | Lenis |
| Fonts | Londrina Solid, Andika, Inter, Archivo Black |
| Quality | ESLint, Prettier |

The design uses dark brown and cream sections with orange as the main action colour.

## Project Structure

The project follows a Next.js App Router layout, with the landing page assembled from sections, layout and modal components, a waitlist API route, and data files for sample outlets and related content. The exact file layout in the repository is the authoritative reference; the structure below is a summary, not a complete file list.

```text
src/
├── app/
│   ├── api/waitlist/route.ts
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── common/
│   ├── layout/
│   ├── modals/
│   └── sections/
├── constants/
├── data/
└── lib/
```

## Getting Started

### Prerequisites

- Node.js 18.18 or newer (20 LTS recommended)
- npm 9 or newer
- Git

### Installation

```bash
git clone https://github.com/Kshaurya-07/CampusEats.git
cd CampusEats
npm install
cp .env.example .env.local
npm run dev
```

Open the application in your browser and follow the terminal output for the local address.

### Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Create a production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |
| `npx tsc --noEmit` | Type-check the project |

## Configuration

Brand, contact details, and feature flags are centralised in the brand constants file. Do not commit `.env.local` or any secret keys.

Key settings to review before launch include the brand name and tagline, contact email, launch label, and social links. Placeholder contact details, including any placeholder WhatsApp link, should be replaced with real, approved details before launch.

Environment variables are documented in `.env.example`. The public site URL is used for the sitemap, Open Graph, and canonical links.

## Waitlist API

The waitlist form posts to a Next.js route handler.

**`POST /api/waitlist`**

Example request body:

```json
{
  "name": "Aarav Kumar",
  "contact": "aarav.23abc1234@vitapstudent.ac.in",
  "role": "student"
}
```

| Field | Type | Rules |
| --- | --- | --- |
| `name` | string | Required |
| `contact` | string | Required, a valid email or a 10-digit phone number |
| `role` | enum | `student`, `outlet`, or `delivery` |

A successful registration returns a 201 response. Validation failures return 400, and server errors return 500.

Note: the default storage is a local JSON file, which is suitable for development only. Serverless platforms do not reliably keep local files between requests, so a real data store should be connected before launch.

## Delivery Partner Earnings

Delivery partners earn ₹5–10 per delivery. The on-site calculator estimates income from that range and the number of deliveries per day.

These are illustrative estimates, not a guarantee of income. Actual earnings depend on order volume and availability.

## Roadmap

| Phase | Focus | Status |
| --- | --- | --- |
| Now | Pilot with selected outlets, launch website and waitlist, MVP by January 2027 | In progress |
| Next | Loyalty program, introductory offers, more outlets | Planned |
| Later | Faculty and staff, events and bulk orders, everyday essentials and stationery | Planned |

## Contributing

Issues and pull requests are welcome. Before opening a pull request, please run linting, type-checking, and a production build, and replace any sample or placeholder content you touch with real, approved content.

## License

Copyright © 2026 CampusEats. All rights reserved.

## Author

Kumar Shaurya — https://github.com/Kshaurya-07
