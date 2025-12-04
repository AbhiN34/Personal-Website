'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionWrapper from './SectionWrapper'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    // Reset form
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <SectionWrapper id="contact">
      <div className="mb-2">
        <p className="text-sm uppercase tracking-wide text-accent-primary font-mono mb-6">CONTACT ME</p>
      </div>
      
      {/* Large heading */}
      <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
        LET'S BUILD SOMETHING.
      </h2>
      
      {/* Paragraph */}
      <p className="text-gray-600 mb-8 max-w-2xl leading-relaxed">
        Whether it's AI products, research, sustainability, startups, or modeling inquiries—I'm always excited to meet people who want to create meaningful work. Reach out anytime.
      </p>
      
      {/* Contact form */}
      <form onSubmit={handleSubmit} className="max-w-2xl space-y-5">
        <div>
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all"
            required
          />
        </div>
        
        <div>
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all"
            required
          />
        </div>
        
        <div>
          <textarea
            placeholder="Message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={6}
            className="w-full bg-white border border-neutral-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-200 transition-all resize-none"
            required
          />
        </div>
        
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          type="submit"
          className="px-8 py-3 bg-accent-primary text-white font-medium rounded-full hover:bg-accent-secondary transition-colors"
        >
          Send
        </motion.button>
        
        {submitted && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-green-600"
          >
            Thanks for reaching out! I'll get back to you soon.
          </motion.p>
        )}
      </form>
      
      {/* Social links */}
      <div className="mt-8 flex gap-4">
        <a
          href="https://www.linkedin.com/in/abhinandiraju/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-600 hover:text-accent-primary underline transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/AbhiN34"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-600 hover:text-accent-primary underline transition-colors"
        >
          GitHub
        </a>
        <a
          href="mailto:an3439@columbia.edu"
          className="text-sm text-gray-600 hover:text-accent-primary underline transition-colors"
        >
          Email
        </a>
      </div>
    </SectionWrapper>
  )
}
