'use client'

import FakeBrowserHero from '@/components/FakeBrowserHero'
import StickyTabs from '@/components/StickyTabs'
import EducationSection from '@/components/EducationSection'
import ProjectsSection from '@/components/ProjectsSection'
import ResearchSection from '@/components/ResearchSection'
import ExperienceSection from '@/components/ExperienceSection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <>

      {/* Sticky Tabs - Appears with magazine box */}
      <StickyTabs />

      {/* Hero Section */}
      <div className="relative h-screen hero-section snap-start snap-always">
        <FakeBrowserHero />
      </div>

      {/* Main Content */}
      <main className="relative">
        <EducationSection />
        <ProjectsSection />
        <ResearchSection />
        <ExperienceSection />
        <ContactSection />
      </main>
    </>
  )
}

