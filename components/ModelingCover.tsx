'use client'

import { motion } from 'framer-motion'

export default function ModelingCover() {
  return (
    <motion.div
      initial={{ opacity: 0, rotateY: -15 }}
      animate={{ opacity: 1, rotateY: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="min-h-screen flex items-center justify-center px-4 pt-24"
      style={{ perspective: '1000px' }}
    >
      <div className="max-w-4xl w-full">
        <div className="bg-white border border-[#E5E5E0] rounded-lg p-12 md:p-16 text-center shadow-sm">
          <p className="text-xs text-accent-primary font-mono mb-4 tracking-wider">ABHI – ISSUE 01</p>
          <h1 className="text-7xl md:text-9xl font-heading font-bold text-text-dark mb-6">MODEL</h1>
          <p className="text-text-light text-lg mb-8 font-body">A visual journey through modeling and style</p>
          <div className="bg-cream-base border border-[#E5E5E0] rounded aspect-[3/4] max-w-md mx-auto flex items-center justify-center overflow-hidden">
            <img 
              src="/modeling/cover.jpg" 
              alt="Modeling portfolio cover"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none'
                e.currentTarget.nextElementSibling!.classList.remove('hidden')
              }}
            />
            <p className="hidden text-text-light text-sm font-mono">cover image soon</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

