# Allsmart Tech Hub — v3 (React + Tailwind CSS)

Professional multi-page React website rebuilt with Tailwind CSS and a clean component architecture.

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| React | 18 | UI framework |
| React Router DOM | 6 | Client-side routing |
| Vite | 5 | Build tool & dev server |
| Tailwind CSS | 3 | Utility-first styling |
| PostCSS | 8 | CSS processing |
| clsx | 2 | Conditional class names |

## Project Structure

```
src/
├── components/
│   ├── illustrations/       # All SVG illustrations (no external images)
│   │   ├── HeroIllustration.jsx
│   │   ├── DashboardIllustration.jsx
│   │   ├── NetworkIllustration.jsx
│   │   ├── TrainingIllustration.jsx
│   │   ├── MapIllustration.jsx
│   │   ├── TeamIllustration.jsx
│   │   └── index.js         # Barrel export
│   ├── layout/              # App-wide structural components
│   │   ├── Navbar.jsx       # Fixed, responsive navbar with mobile drawer
│   │   ├── Footer.jsx       # 4-column footer with social links
│   │   ├── PageHero.jsx     # Reusable inner-page hero banner
│   │   └── ScrollToTop.jsx  # Route change scroll reset
│   ├── sections/            # Reusable page section components
│   │   ├── StatsBar.jsx     # Stats strip (500+ clients, etc.)
│   │   ├── ApproachSteps.jsx # 4-step process section
│   │   ├── CTABanner.jsx    # Full-width call-to-action block
│   │   └── ServiceIcon.jsx  # SVG icon renderer for service types
│   └── ui/                  # Low-level primitives
│       ├── Badge.jsx        # Eyebrow pill label
│       ├── Button.jsx       # Multi-variant button/link
│       ├── Card.jsx         # Card, ServiceCard, StatCard, StepCard, ValueCard
│       └── SectionHeader.jsx # Badge + title + subtitle block
├── data/                    # All content separated from components
│   ├── services.js          # 9 services with full descriptions
│   ├── training.js          # 8 courses + benefits
│   └── navigation.js        # Nav links, footer links, social links
├── hooks/                   # Custom React hooks
│   ├── useScrolled.js       # Detects page scroll threshold
│   └── useNavMenu.js        # Mobile menu state + body lock + ESC
├── pages/                   # Route-level page components
│   ├── Home.jsx
│   ├── About.jsx
│   ├── Services.jsx
│   ├── Training.jsx
│   └── Contact.jsx
├── utils/
│   └── cn.js               # Tailwind className merger (clsx wrapper)
├── App.jsx                  # Router + layout wrapper
├── main.jsx                 # React entry point
└── index.css                # Tailwind directives + global utilities
```

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev        # → http://localhost:5173

# Build for production
npm run build

# Preview production build
npm run preview
```

## Customisation Guide

### Colours
All custom colours are in `tailwind.config.js` under `theme.extend.colors`:
- `navy.*` — background palette
- `brand.*` — blue accent scale  
- `cyan` — primary highlight colour

### Content
All text content is in `src/data/`:
- `services.js` — update service titles, descriptions, and bullet points
- `training.js` — update course details and benefits
- `navigation.js` — update nav links and social URLs

### Contact Info
Update email/phone in:
- `src/pages/Contact.jsx` (CONTACT_INFO array)
- `src/components/layout/Footer.jsx`

### Adding a Service Icon
Add a new key to `src/components/sections/ServiceIcon.jsx`

### Connecting the Contact Form
The form in `src/pages/Contact.jsx` (`ContactForm` component) currently just sets `sent = true`.
Connect it to your backend, [EmailJS](https://emailjs.com), or [Formspree](https://formspree.io):

```jsx
// Example with EmailJS
import emailjs from '@emailjs/browser'

const onSubmit = async (e) => {
  e.preventDefault()
  await emailjs.send('SERVICE_ID', 'TEMPLATE_ID', form, 'PUBLIC_KEY')
  setSent(true)
}
```
