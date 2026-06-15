# EventCraft Event Management

An ultra-premium, modern, and professional Event Management website built for UI/UX internships, portfolio showcases, and high-conversion lead generation.

## 🌟 Overview
EventCraft is a demonstration of enterprise-level React frontend architecture merged with agency-quality visual design. It uses modern stack technologies to produce a fast, responsive, and beautiful experience that guides users smoothly into a consultation booking funnel.

## 🚀 Features
- **Agency-Level Visuals**: Glassmorphism, custom typography scaling, purposeful negative space.
- **Dark/Light Mode**: Full contextual theming utilizing Tailwind's dark mode variables.
- **Multi-Step Conversion Funnel**: The Book Consultation page uses a state-driven step-by-step form to reduce cognitive load and increase booking rates.
- **Scroll Animations**: Hand-crafted micro-interactions using Framer Motion.
- **Content-Ready Data Layer**: Clean separation of `mockData.ts` to allow easy swapping to a real CMS (like Sanity or Strapi).

## 🛠 Tech Stack
- React 19
- Vite
- Tailwind CSS v4
- Framer Motion
- React Router DOM v7
- Lucide React (Icons)

## 📁 Folder Structure
```
/src
  /components
    /layout
      Layout.tsx    - Global nav and footer
  /data
    mockData.ts     - Separated data layer
  /pages
    About.tsx       - Company story
    BookConsultation.tsx - Multi-step booking funnel
    Contact.tsx     - Contact forms & Maps
    DesignRationale.tsx- UX breakdown
    EventDetail.tsx - Dynamic case studies
    Portfolio.tsx   - Gallery with filters
    Pricing.tsx     - Package tiers
    Services.tsx    - Service breakdowns
  /lib
    utils.ts        - Utility funcs (clsx/twMerge)
  App.tsx           - Home page dashboard
  main.tsx          - App Entry / Router initialization
```

## 🚀 Installation & Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## 🎨 Visual Design Decisions
- **Deep Purple (#6D28D9)**: Used to signal luxury, exclusivity, and creativity.
- **Amber (#F59E0B)**: Used sparingly as an accent to draw the eye to critical UI elements and CTAs.
- **Typography Integration**: Employs clean Sans-Serif tracking combined with elegant spacing rhythms.

*For a full UX/UI breakdown, visit the `/design-rationale` route in the application.*

## ⚙️ Deployment
This project is Vite-based and ready for deployment to platforms like Vercel or Netlify.
Simply connect the repository and define the build command: `npm run build` and output directory as `dist`. Since it uses React Router, ensure your deployment platform is configured to rewrite all traffic to `index.html` (Vite SPA deployment standard).
