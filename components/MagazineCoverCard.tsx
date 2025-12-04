'use client'

import { motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

export default function MagazineCoverCard() {
  const router = useRouter()

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.6 }}
      whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(201, 125, 96, 0.15)' }}
      onClick={() => router.push('/modeling')}
      className="cursor-pointer bg-white border border-[#E5E5E0] rounded-lg p-8 w-full max-w-sm mx-auto shadow-lg hover:border-accent-primary/50 transition-all"
    >
      <div className="text-center">
        <p className="text-xs text-accent-primary font-mono mb-2 tracking-wider">ABHI – ISSUE 01</p>
        <h2 className="text-6xl font-heading font-bold text-text-dark mb-4">MODEL</h2>
        <p className="text-sm text-text-light mb-6 font-body">Tap to enter the magazine</p>
        <div className="bg-cream-base border border-[#E5E5E0] rounded aspect-[3/4] flex items-center justify-center">
          <p className="text-text-light text-sm font-mono">cover image soon</p>
        </div>
      </div>
    </motion.div>
  )
}

