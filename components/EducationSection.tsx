'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionWrapper from './SectionWrapper'

const education = [
  {
    school: 'Columbia University',
    location: 'New York, NY',
    degree: 'B.S. in Financial Engineering',
    dates: 'Expected May 2029',
    gpa: 'N/A',
    logo: '/columbia-logo.png',
  },
  {
    school: 'Frisco High School',
    location: 'Dallas, TX',
    degree: 'Salutatorian, National Merit Scholar',
    dates: 'Aug 2021 – May 2025',
    gpa: '4.0/4.0',
    logo: '/frisco-logo.png',
  },
  {
    school: 'Collin College',
    location: 'Dallas, TX',
    degree: 'Dual Degree High School Student',
    dates: 'Aug 2023 – May 2024',
    gpa: '4.0/4.0',
    logo: '/collin-logo.png',
  },
]

function EducationCard({ item, index }: { item: typeof education[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-[#FDFBF6] border border-neutral-200 rounded-2xl p-6 mb-4 shadow-sm hover:shadow-md transition-all"
    >
      <div className="flex gap-4">
        {/* School logo */}
        <div className="flex-shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center overflow-hidden border border-neutral-200">
          {item.logo ? (
            <img 
              src={item.logo} 
              alt={`${item.school} logo`}
              className="w-full h-full object-contain p-1"
            />
          ) : (
            <div className="text-xs text-neutral-400 font-mono">img</div>
          )}
        </div>
        
        <div className="flex-1">
          <h3 className="text-lg font-heading font-bold text-gray-900 mb-1">
            {item.school}
          </h3>
          <p className="text-sm text-gray-600 mb-2">{item.location}</p>
          <p className="text-sm text-gray-700 mb-2">{item.degree}</p>
          <div className="flex items-center gap-3 text-xs text-gray-500">
            <span>{item.dates}</span>
            {item.gpa !== 'N/A' && (
              <span className="px-2 py-1 bg-orange-50 text-orange-700 rounded-full">
                GPA: {item.gpa}
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function EducationSection() {
  return (
    <SectionWrapper id="education">
      <div className="mb-2">
        <p className="text-sm uppercase tracking-wide text-accent-primary font-mono mb-1">EDUCATION</p>
        <p className="text-sm text-gray-500">Where I've been studying.</p>
      </div>
      <div className="mt-8">
        {education.map((item, index) => (
          <EducationCard key={item.school} item={item} index={index} />
        ))}
      </div>
    </SectionWrapper>
  )
}
