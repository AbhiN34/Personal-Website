'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface SectionWrapperProps {
  id: string
  children: ReactNode
}

export default function SectionWrapper({ id, children }: SectionWrapperProps) {
  return (
    <section 
      id={id} 
      className="h-screen px-4 md:px-8 flex items-start snap-start snap-always overflow-y-auto"
    >
      <div className="max-w-6xl mx-auto w-full pt-24 pb-12">
        {children}
      </div>
    </section>
  )
}

