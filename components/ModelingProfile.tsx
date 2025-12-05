'use client'

import { motion } from 'framer-motion'

export default function ModelingProfile() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-4"
    >
      <div className="max-w-4xl w-full">
        <div className="bg-white border border-[#E5E5E0] rounded-lg p-8 md:p-12 shadow-sm">
          <h2 className="text-4xl font-heading font-bold text-text-dark mb-8">PROFILE</h2>
          <div className="space-y-6 text-text-medium">
            <div>
              <span className="text-xs text-accent-primary font-mono tracking-wider block mb-2">HEIGHT</span>
              <p className="font-mono">5'10"</p>
            </div>
            <div>
              <span className="text-xs text-accent-primary font-mono tracking-wider block mb-2">BUILD</span>
              <p className="font-mono">Athletic</p>
            </div>
            <div>
              <span className="text-xs text-accent-primary font-mono tracking-wider block mb-2">LOCATION</span>
              <p className="font-mono">New York, NY</p>
            </div>
            <div>
              <span className="text-xs text-accent-primary font-mono tracking-wider block mb-2">AVAILABILITY</span>
              <p className="font-mono">Available for select projects</p>
            </div>
            <div>
              <span className="text-xs text-accent-primary font-mono tracking-wider block mb-2">PORTFOLIO</span>
              <p className="font-mono">Fashion, Editorial, Commercial</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

