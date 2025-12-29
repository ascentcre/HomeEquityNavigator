# Horizon Equity Navigator

A professional, high-trust lead generation website for a Reverse Mortgage Specialist. Built with Next.js, featuring a bank-approved teal and green color palette, educational resources, and HubSpot form integration for secure lead capture.

## Features

- **Professional Design**: Deep teal and forest green theme with Playfair Display serif fonts for trust and authority
- **Responsive Layout**: Mobile-first design that works on all devices
- **Accessibility**: 16px+ fonts, high contrast buttons, proper ARIA labels for senior-friendly experience
- **Lead Capture**: HubSpot form integration for secure lead capture
- **Educational Content**: Comprehensive guides and myth-busting content
- **AI Chatbot**: Interactive chatbot powered by Anthropic Claude API to answer user questions about reverse mortgages
- **Smooth Animations**: Framer Motion for professional transitions

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (optimized)

## Getting Started

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
Create a `.env.local` file with your credentials:
```
NEXT_PUBLIC_HUBSPOT_PORTAL_ID=your_portal_id
NEXT_PUBLIC_HUBSPOT_FORM_ID=your_form_id
ANTHROPIC_API_KEY=your_anthropic_api_key
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### HubSpot Setup

1. Get your HubSpot Portal ID from your HubSpot account settings
2. Create a form in HubSpot and get the Form ID
3. Add these values to your `.env.local` file
4. Update the default values in `app/calculate/page.js` if needed

### Chatbot Setup

1. Get your Anthropic API key from [Anthropic Console](https://console.anthropic.com/)
2. Add `ANTHROPIC_API_KEY=your_api_key` to your `.env.local` file
3. The chatbot will appear as a floating button in the bottom-right corner of all pages

## Project Structure

```
/horizon-equity-navigator
├── /app
│   ├── layout.js         # Global layout with Nav and Footer
│   ├── page.js           # Home Page
│   ├── /api
│   │   └── /chat         # Chatbot API route (Claude API)
│   ├── /calculate        # Benefit Estimator Page
│   ├── /guides           # Educational Resources
│   └── /globals.css      # Tailwind & Theme styles
├── /components
│   ├── Navbar.js         # Navigation component
│   ├── Hero.js           # Hero section
│   ├── MythAccordion.js  # Myths vs Reality accordion
│   ├── HubSpotForm.js    # HubSpot form wrapper
│   ├── Chatbot.js        # AI Chatbot component
│   └── Footer.js         # Footer with disclaimers
├── tailwind.config.js    # Tailwind configuration
└── package.json          # Dependencies
```

## Customization

### Colors

The bank-approved color palette is defined in `tailwind.config.js`:
- **Primary (Deep Teal)**: `#004a4c` - Main navigation, footers, primary buttons, bold headings
- **Secondary (Forest Green)**: `#349c65` - Secondary buttons, active menu states, sub-headings
- **Tertiary (Bright Green)**: `#44c17e` - Success states, icons, small UI accents
- **Soft Blue**: `#9ecde0` - Subtle background tints, card borders, light section dividers

You can customize these in the `theme.extend.colors` section.

### Fonts

Fonts are loaded via Google Fonts in `app/globals.css`:
- **Sans-serif**: Inter (for body text)
- **Serif**: Playfair Display (for headings)

## Deployment

### Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard:
   - `NEXT_PUBLIC_HUBSPOT_PORTAL_ID`
   - `NEXT_PUBLIC_HUBSPOT_FORM_ID`
   - `ANTHROPIC_API_KEY`
4. Deploy!

The project is optimized for Vercel deployment with Next.js best practices.

## Accessibility

This site is built with accessibility in mind:
- Minimum 16px font sizes
- High contrast buttons (WCAG AA compliant)
- Proper ARIA labels and semantic HTML
- Keyboard navigation support
- Minimum 48px touch targets for mobile

## License

Private project - All rights reserved

