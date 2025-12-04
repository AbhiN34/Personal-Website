'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionWrapper from './SectionWrapper'

const experience = [
  {
    company: 'GJ Cloud Solutions',
    role: 'Machine Learning Intern',
    location: 'Dallas, TX',
    dates: 'June 2024 – Aug 2024',
    type: 'INTERNSHIP',
    highlights: [
      'Prepared and analyzed large customer transaction datasets to identify key trends, patterns, and behavioral signals.',
      'Applied regression and clustering methods in Python to segment customers and uncover data-driven insights.',
      'Built forecasting models with 90%+ predictive accuracy, enhancing client decision-making and retention strategies.',
    ],
  },
  {
    company: 'Sri RajaRajeshwari Peetham',
    role: 'Director of Operations, Volunteer',
    location: 'Hyderabad, India',
    dates: 'June 2018 – Aug 2024',
    type: 'LEADERSHIP',
    highlights: [
      'Directed farming, environmental cleanup, and community food aid programs serving local underprivileged groups.',
      'Managed logistics, volunteers, and scheduling for large cultural programs with high community engagement.',
      'Contributed 500+ service hours across multi-year initiatives and earned the Presidential Service Award.',
    ],
  },
  {
    company: 'Perot Museum of Nature and Science',
    role: 'Volunteer',
    location: 'Dallas, TX',
    dates: '10th – 12th Grade',
    type: 'VOLUNTEER',
    highlights: [
      '10 hours per week; 15 weeks per year.',
      'Guided curious minds, including some very opinionated 5-year-olds.',
      'Learned valuable lessons from every age group; contributed 450+ hours of curiosity & discovery.',
    ],
  },
]

function ExperienceCard({ item, index }: { item: typeof experience[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  const typeColors = {
    INTERNSHIP: 'bg-blue-50 text-blue-700',
    LEADERSHIP: 'bg-purple-50 text-purple-700',
    VOLUNTEER: 'bg-green-50 text-green-700',
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-6 w-3 h-3 bg-accent-primary rounded-full border-4 border-[#FAF9F6]"></div>
      
      {/* Card */}
      <div className="ml-8 bg-[#FDFBF6] border border-neutral-200 rounded-2xl p-6 mb-6 shadow-sm hover:shadow-md transition-all">
        {/* Type badge */}
        <span className={`inline-block px-2 py-1 text-xs font-mono rounded mb-3 ${typeColors[item.type as keyof typeof typeColors]}`}>
          [{item.type}]
        </span>
        
        {/* Company and role */}
        <h3 className="text-lg font-heading font-bold text-gray-900 mb-1">
          {item.company}
        </h3>
        <p className="text-sm text-gray-700 mb-2">{item.role}</p>
        
        {/* Location and dates */}
        <p className="text-xs text-gray-500 mb-4">
          {item.location} · {item.dates}
        </p>
        
        {/* Highlights */}
        <ul className="space-y-2">
          {item.highlights.map((highlight, i) => (
            <li key={i} className="text-sm text-gray-700 flex gap-2">
              <span className="text-accent-primary flex-shrink-0">•</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export default function ExperienceSection() {
  return (
    <SectionWrapper id="experience">
      <div className="mb-2">
        <p className="text-sm uppercase tracking-wide text-accent-primary font-mono mb-1">WORK & VOLUNTEER EXPERIENCE</p>
      </div>
      <div className="mt-8 relative">
        {/* Timeline line */}
        <div className="absolute left-1.5 top-0 bottom-0 w-px bg-neutral-200"></div>
        
        {/* Experience cards */}
        {experience.map((item, index) => (
          <ExperienceCard key={item.company} item={item} index={index} />
        ))}
      </div>
    </SectionWrapper>
  )
}
