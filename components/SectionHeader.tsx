'use client'

import { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface SectionHeaderProps {
  children: ReactNode
}

export default function SectionHeader({ children }: SectionHeaderProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="mb-8 md:mb-12"
    >
      <h2 className="text-4xl md:text-6xl font-heading font-bold text-text-dark relative inline-block">
        <span className="relative z-10">{children}</span>
        <span className="absolute left-0 top-0 text-accent-primary/20 blur-sm -z-0">{children}</span>
      </h2>
    </motion.div>
  )
}

