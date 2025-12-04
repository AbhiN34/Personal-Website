'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm text-accent-primary mb-2 font-mono">
          NAME
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full bg-white border border-[#E5E5E0] rounded-lg px-4 py-3 text-text-dark focus:outline-none focus:border-accent-primary transition-colors"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm text-accent-primary mb-2 font-mono">
          EMAIL
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full bg-white border border-[#E5E5E0] rounded-lg px-4 py-3 text-text-dark focus:outline-none focus:border-accent-primary transition-colors"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm text-accent-primary mb-2 font-mono">
          MESSAGE
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          rows={6}
          className="w-full bg-white border border-[#E5E5E0] rounded-lg px-4 py-3 text-text-dark focus:outline-none focus:border-accent-primary transition-colors resize-none"
          required
        />
      </div>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        className="w-full bg-accent-primary text-white font-mono py-3 rounded-lg hover:bg-accent-secondary transition-colors"
      >
        SEND MESSAGE
      </motion.button>
    </form>
  )
}

