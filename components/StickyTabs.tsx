'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const tabs = [
  { id: 'education', label: 'EDUCATION', isSection: true },
  { id: 'projects', label: 'PROJECTS', isSection: true },
  { id: 'research', label: 'RESEARCH', isSection: true },
  { id: 'experience', label: 'EXPERIENCE', isSection: true },
  { id: 'contact', label: 'CONTACT', isSection: true },
]

export default function StickyTabs() {
  const [activeTab, setActiveTab] = useState('')

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0,
    }

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      const scrollY = window.scrollY
      const heroHeight = window.innerHeight
      
      // If at the top (within hero section), don't set any active tab
      if (scrollY < heroHeight * 0.5) {
        return
      }

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveTab(entry.target.id)
        }
      })
    }

    const handleScroll = () => {
      const scrollY = window.scrollY
      const heroHeight = window.innerHeight
      
      // If at the top (within hero section), clear active tab
      if (scrollY < heroHeight * 0.5) {
        setActiveTab('')
      }
    }

    const observer = new IntersectionObserver(observerCallback, observerOptions)

    tabs.forEach((tab) => {
      const element = document.getElementById(tab.id)
      if (element) observer.observe(element)
    })

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial state

    return () => {
      window.removeEventListener('scroll', handleScroll)
      tabs.forEach((tab) => {
        const element = document.getElementById(tab.id)
        if (element) observer.unobserve(element)
      })
    }
  }, [])

  const handleClick = (tabId: string) => {
    const element = document.getElementById(tabId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-cream-light/95 backdrop-blur-sm border-b border-[#E5E5E0]"
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center gap-8 md:gap-12 py-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleClick(tab.id)}
              className="relative px-2 py-2 text-sm md:text-base font-mono tracking-wider transition-colors"
            >
              <span
                className={`transition-colors ${
                  activeTab === tab.id
                    ? 'text-text-dark font-semibold'
                    : 'text-text-light hover:text-text-medium'
                }`}
              >
                {tab.label}
              </span>
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-primary"
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

