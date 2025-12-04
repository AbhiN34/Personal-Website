'use client'

import { motion } from 'framer-motion'

const galleryItems = Array.from({ length: 6 }, (_, i) => i + 1)

export default function ModelingGallery() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen px-4 pt-32 pb-24"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-heading font-bold text-text-dark mb-12">GALLERY</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, zIndex: 10 }}
              className="bg-white border border-[#E5E5E0] rounded-lg aspect-[3/4] flex items-center justify-center overflow-hidden hover:border-accent-primary/50 transition-colors shadow-sm relative"
            >
              <img 
                src={`/modeling/gallery-${item}.jpg`}
                alt={`Portfolio image ${item}`}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none'
                  e.currentTarget.nextElementSibling!.classList.remove('hidden')
                }}
              />
              <p className="hidden text-text-light text-sm font-mono absolute">image {item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

