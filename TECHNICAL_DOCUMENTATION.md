# Sunshine School & Sheltered Workshop — Technical Documentation

## 1. Overview & System Summary

**Sunshine School & Sheltered Workshop** is a modern, responsive web application built for an organization in Vashi, Navi Mumbai dedicated to providing personalized special education, therapeutic care, and vocational training for children and young adults on the Autism Spectrum and with other developmental disabilities (founded in 2006).

This documentation provides an end-to-end technical overview of the architecture, stack, design tokens, page layout hierarchy, interactive components, state management, asset organization, build procedures, and maintenance workflows.

---

## 2. Technology Stack & Dependencies

### Core Frameworks & Runtime
* **Framework**: [Next.js 16.2.0](https://nextjs.org/) (App Router architecture)
* **Library**: [React 19](https://react.dev/)
* **Language**: [TypeScript 5.7.3](https://www.typescriptlang.org/)
* **Styling**: [Tailwind CSS v4.2.0](https://tailwindcss.com/) with PostCSS (`@tailwindcss/postcss`) & `tw-animate-css`
* **Icons**: [Lucide React 0.564.0](https://lucide.dev/)

### UI & Animation Ecosystem
* **Component Primitives**: [@radix-ui/react-*](https://www.radix-ui.com/) (Accordion, Dialog, Dropdown Menu, Navigation Menu, Popover, Progress, Tabs, Tooltip, Select, etc.)
* **Animations**: [Framer Motion 13.0.0](https://framer.com/motion) for smooth modal transitions, scroll fade-ins, and keyframes.
* **Carousels & Sliders**: [Embla Carousel 8.6.0](https://www.embla-carousel.com/)
* **Toast Notifications**: [Sonner 1.7.1](https://sonner.embla.com/)
* **Drawer Components**: [Vaul 1.1.2](https://emilkowal.ski/ui/vaul)
* **Form & Validation**: [React Hook Form 7.54.1](https://react-hook-form.com/), [Zod 3.24.1](https://zod.dev/), `@hookform/resolvers`
* **Analytics**: [@vercel/analytics 1.6.1](https://vercel.com/analytics)

---

## 3. Architecture & Directory Structure

```
SunshineSchool/
├── app/                        # Next.js App Router root
│   ├── about/                  # About page (/about)
│   ├── academics/              # Academics & Curriculum (/academics)
│   ├── admissions/             # Admissions Inquiry page (/admissions)
│   ├── contact/                # Contact & Map page (/contact)
│   ├── donate/                 # Donation portal (/donate)
│   ├── events/                 # Events & News (/events)
│   ├── facilities/             # Facilities & Therapy (/facilities)
│   ├── faculty/                # Faculty & Staff directory (/faculty)
│   ├── gallery/                # Comprehensive Photo Gallery (/gallery)
│   ├── principals-message/     # Principal's Note page (/principals-message)
│   ├── sunshine-parents/       # Parent testimonials & resources (/sunshine-parents)
│   ├── volunteer/              # Volunteer enrollment page (/volunteer)
│   ├── globals.css             # OKLCH color tokens, utility classes & animations
│   ├── layout.tsx              # Root Layout, font declarations, SEO & metadata
│   ├── page.tsx                # Homepage composition
│   ├── apple-icon.tsx          # Dynamic apple icon router asset
│   └── icon.tsx                # Dynamic browser favicon asset
├── components/                 # Reusable UI components
│   ├── admissions/             # Admission inquiry form & steps
│   ├── contact/                # Contact form & location details
│   ├── donate/                 # Donation tier cards & payment info
│   ├── gallery/                # Filterable masonry gallery & modal viewer
│   ├── home/                   # Homepage sections (Hero, Programs, Quick Info, Stats, etc.)
│   ├── principals-message/     # Principal message view component
│   ├── site/                   # Global header/footer layout components
│   │   ├── anniversary-popup.tsx # 20th Anniversary milestone modal
│   │   ├── announcement-bar.tsx  # Top alert banner
│   │   ├── cta-section.tsx       # Reusable bottom call-to-action banner
│   │   ├── footer.tsx            # Multi-column site footer
│   │   ├── logo.tsx              # Brand logo component
│   │   ├── navbar.tsx            # Sticky navigation bar with dropdowns
│   │   ├── page-header.tsx       # Standardized interior page hero header
│   │   └── social-bar.tsx        # Floating social links / quick access
│   ├── theme-provider.tsx      # Dark mode / Next Themes provider wrapper
│   ├── ui/                     # Radix UI + Tailwind primitive components
│   └── volunteer/              # Volunteer enrollment form component
├── hooks/                      # Custom React Hooks
├── lib/                        # Utility functions
│   └── utils.ts                # Tailwind merge helper (`cn` utility)
├── public/                     # Static media and root assets
│   ├── images/                 # Optimized image files categorized by page/section
│   └── logo.png                # Primary brand logo
├── components.json             # Shadcn component configuration
├── next.config.mjs             # Next.js compiler & asset config
├── postcss.config.mjs          # PostCSS processing config
├── tsconfig.json               # TypeScript compiler config
└── package.json                # Project dependencies and script declarations
```

---

## 4. Design System & CSS Tokens

The application utilizes **OKLCH color spaces** configured in `app/globals.css` for consistent, accessible, and vibrant color rendering across screens.

### Brand Color Tokens
```css
:root {
  /* Surfaces */
  --background: oklch(0.995 0.004 95);     /* Soft warm white */
  --foreground: oklch(0.18 0.015 40);      /* Deep charcoal text */
  --card: oklch(1 0 0);

  /* Brand Accents */
  --primary: oklch(0.52 0.22 250);         /* Sunshine Royal Blue */
  --brand-yellow: oklch(0.85 0.18 85);      /* Warm Sunshine Yellow (#FACC15) */
  --brand-yellow-soft: oklch(0.97 0.05 90); /* Soft Warm Tint (#FEF9C3) */
  --brand-ink: oklch(0.15 0.04 255);        /* Deep Ink Charcoal */
  
  --radius: 0.75rem;                       /* 12px default corner radius */
}
```

### Typography
* **Primary Body Font**: `Geist` (`--font-geist-sans`), loaded via `next/font/google`.
* **Display / Serif Font**: `Instrument Serif` (`--font-instrument-serif`), used for headlines, blockquotes, and special headers.

---

## 5. Key System Features & Components

### 1. 20th Anniversary Milestone Popup (`components/site/anniversary-popup.tsx`)
* **Behavior**: Automatically triggers `700ms` after page load unless previously dismissed.
* **State Persistence**: Uses `sessionStorage` (`sunshine_20yr_popup_seen`) to avoid bothering returning users in the same session.
* **Animation**: Powered by `framer-motion` for backdrop blur fade and modal scale entry.

### 2. Interactive Navigation Bar (`components/site/navbar.tsx`)
* **Desktop Navigation**: Features smooth hover dropdowns for multi-tier sections (About, Academics, Community).
* **Mobile Menu**: Responsive slide-down overlay with high touch targets.
* **Sticky Scroll Handling**: Listens to scroll position (`window.scrollY > 8`) to toggle subtle shadows and background blur.

### 3. Dynamic Photo Gallery (`components/gallery/gallery-grid.tsx`)
* **Filtering System**: Allows users to filter photos by tag (`All`, `Events`, `Therapy`, `Classroom`, `Sheltered Workshop`).
* **Modal Lightbox**: Click to view high-resolution photographs with captions, tags, and navigation arrows.
* **Responsive Layout**: CSS Grid responsive columns adapting from 1 column on mobile to 3 columns on desktop.

### 4. Admission & Contact Forms (`components/admissions/`, `components/contact/`)
* **Validation**: Client-side validation managed by React Hook Form & Zod schemas.
* **Feedback**: Instant visual notifications provided by `sonner` toast messages.

---

## 6. Page Routing Matrix

| Route | Page Name | Primary Component | Key Contents |
| :--- | :--- | :--- | :--- |
| `/` | Homepage | `app/page.tsx` | Hero banner, condition marquee, programs overview, stats, quick info, understanding autism section. |
| `/about` | About Sunshine School | `app/about/page.tsx` | Organizational history, mission, vision, milestone timeline, founder details. |
| `/principals-message` | Principal's Message | `app/principals-message/page.tsx` | Dedicated letter from Mrs. Paramita Mazumder with typewriter accent header. |
| `/academics` | Academics & Curriculum | `app/academics/page.tsx` | Detailed breakdowns of Early Intervention, Functional Academics, and Vocational streams. |
| `/facilities` | Facilities & Therapy | `app/facilities/page.tsx` | Information on Occupational Therapy, Speech Therapy, Sensory Integration Room, and Sheltered Workshop. |
| `/faculty` | Faculty & Staff | `app/faculty/page.tsx` | Profiles of educators, advisor (Rashmi), special educators, therapists, and support team. |
| `/sunshine-parents` | Sunshine Parents | `app/sunshine-parents/page.tsx` | Testimonials, parent support network details, and success stories. |
| `/admissions` | Admissions | `app/admissions/page.tsx` | Eligibility guidelines, admission process steps, and downloadable/fillable inquiry forms. |
| `/events` | News & Events | `app/events/page.tsx` | Annual day highlights, awareness runs, workshops, and upcoming community drives. |
| `/gallery` | Photo Gallery | `app/gallery/page.tsx` | Comprehensive image masonry showcase with category filtering and lightbox popups. |
| `/volunteer` | Volunteer | `app/volunteer/page.tsx` | Opportunities for student interns, community volunteers, and skill-sharing contributors. |
| `/donate` | Donate | `app/donate/page.tsx` | Donation transparency breakdown, tier cards, bank transfer details (80G tax benefit information). |
| `/contact` | Contact Us | `app/contact/page.tsx` | Google Maps embed, phone numbers, contact form, address in Sector 8, Vashi. |

---

## 7. Performance & SEO Configuration

* **SEO Metadata**: `app/layout.tsx` configures complete `Metadata` including canonical URLs, geotargeting (`IN-MH`, Vashi), Twitter cards, and OpenGraph descriptors.
* **Image Optimization**: All images leverage Next.js `<Image />` component with lazy loading, aspect ratio preservation, and blur placeholders where applicable.
* **Font Optimization**: Google Fonts imported via `next/font/google` eliminate layout shifts (CLS) and external network latency.
* **Vercel Analytics**: Built-in production analytics script monitoring core web vitals and visitor demographics.

---

## 8. Deployment & Development Guide

### Environment Prerequisites
* **Node.js**: `v18.x` or `v20.x` recommended
* **Package Manager**: `npm` or `pnpm`

### Local Development Setup
1. Clone repository:
   ```bash
   git clone https://github.com/sumeattttt/SunshineSchool.git
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Launch local dev server:
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000` in your browser.

### Production Build & Preview
To test the production build locally:
```bash
npm run build
npm run start
```

---

## 9. Maintenance & Content Updating Guide

### Adding New Gallery Images
1. Place image files inside `public/images/`.
2. Open `components/gallery/gallery-grid.tsx`.
3. Append a new object to the `GALLERY_IMAGES` array with `src`, `title`, `category`, and `aspectRatio`.

### Modifying Contact Information
1. Open `components/site/footer.tsx` and `app/contact/page.tsx`.
2. Update the phone numbers (`+91 ...`) or email addresses in both locations to ensure consistency across the application.

---
*Documentation maintained for Sunshine School & Sheltered Workshop, Vashi, Navi Mumbai.*
