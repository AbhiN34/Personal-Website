# Personal Website - Abhiram Nandiraju

A minimalist, modern personal website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Hero Section**: Fake browser/search bar with typing animation
- **Sticky Navigation**: Full-width tab bar that appears after scrolling past the hero
- **Continuous Scroll Sections**: Education, Projects, Research, Experience, and Contact
- **Modeling Magazine Page**: Separate page at `/modeling` with magazine-style layout
- **Smooth Animations**: Powered by Framer Motion for elegant transitions

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx          # Global layout with fonts and metadata
│   ├── page.tsx            # Main landing page
│   ├── modeling/
│   │   └── page.tsx        # Modeling magazine page
│   └── globals.css         # Global styles
├── components/
│   ├── FakeBrowserHero.tsx # Hero section with typing animation
│   ├── MagazineCoverCard.tsx # Magazine cover card component
│   ├── StickyTabs.tsx      # Sticky navigation tabs
│   ├── SectionWrapper.tsx  # Section container component
│   ├── SectionHeader.tsx   # Section header component
│   ├── EducationSection.tsx
│   ├── ProjectsSection.tsx
│   ├── ResearchSection.tsx
│   ├── ExperienceSection.tsx
│   ├── ContactSection.tsx
│   ├── ContactForm.tsx
│   ├── SocialLinks.tsx
│   ├── ModelingTabs.tsx
│   ├── ModelingCover.tsx
│   ├── ModelingProfile.tsx
│   └── ModelingGallery.tsx
└── ...
```

## Customization

- Update personal information in the respective section components
- Modify colors in `tailwind.config.ts`
- Add more projects in `ProjectsSection.tsx`
- Update social links in `SocialLinks.tsx`

## Build for Production

```bash
npm run build
npm start
```

