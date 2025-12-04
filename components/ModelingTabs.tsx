'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

const tabs = [
  { id: 'cover', label: 'COVER' },
  { id: 'profile', label: 'PROFILE' },
  { id: 'gallery', label: 'GALLERY' },
  { id: 'contact', label: 'CONTACT' },
]

export default function ModelingTabs({ activeTab, onTabChange }: { activeTab: string; onTabChange: (tab: string) => void }) {
  const router = useRouter()

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-cream-light/95 backdrop-blur-sm border-b border-[#E5E5E0]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <button
            onClick={() => router.push('/')}
            className="text-text-light hover:text-text-dark font-mono text-sm transition-colors"
          >
            ← BACK
          </button>
          <div className="flex items-center gap-8 md:gap-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
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
                    layoutId="modelingActiveTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent-primary"
                    transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

