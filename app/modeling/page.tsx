'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ModelingTabs from '@/components/ModelingTabs'
import ModelingCover from '@/components/ModelingCover'
import ModelingProfile from '@/components/ModelingProfile'
import ModelingGallery from '@/components/ModelingGallery'
import ContactSection from '@/components/ContactSection'

export default function ModelingPage() {
  const [activeTab, setActiveTab] = useState('cover')

  const renderContent = () => {
    switch (activeTab) {
      case 'cover':
        return <ModelingCover />
      case 'profile':
        return <ModelingProfile />
      case 'gallery':
        return <ModelingGallery />
      case 'contact':
        return <ContactSection />
      default:
        return <ModelingCover />
    }
  }

  return (
    <div className="min-h-screen">
      <ModelingTabs activeTab={activeTab} onTabChange={setActiveTab} />
      <div className="pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
          >
            {renderContent()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

