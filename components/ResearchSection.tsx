'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionWrapper from './SectionWrapper'

const research = [
  {
    title: 'Predictive ESG Impact Modeling for Socially Responsible Investment Portfolios',
    location: 'Austin, TX',
    role: 'First Author, Machine Learning & Sustainability Researcher',
    dates: 'June 2024 – Jan 2025',
    tag: 'PUBLISHED',
    highlights: [
      'Published in JGIM and SSRN; led a 7-month sustainability research project under Stanford PhD mentorship.',
      'Analyzed 10,000+ financial metrics and sentiment signals to assess sustainability performance.',
      'Identified 3+ climate planning use cases through collaboration with the City of Frisco leadership.',
    ],
  },
  {
    title: 'Leveraging LLMs and NLP Techniques for Comprehensive ESG Risk Score Prediction',
    location: 'Angers, France',
    role: 'First Author, Speaker',
    dates: 'Jan 2024 – May 2024',
    tag: 'PRESENTED',
    highlights: [
      'Published in an IEEE-sponsored conference; presented findings to 150+ attendees at FEMIB 2024.',
      'Built a language-model system achieving 68% accuracy in predicting company sustainability risk.',
      'Designed scalable risk scoring method for VC, PE, and enterprise due-diligence.',
    ],
  },
  {
    title: 'Mitigating Social Media-Induced Dopamine Loops through Machine Learning',
    location: 'Dallas, TX',
    role: 'First Author, Machine Learning & Sustainability Researcher',
    dates: 'June 2023 – Aug 2023',
    tag: 'PUBLISHED',
    highlights: [
      'Ranked #2 all-time in SSRN Public Health; published with mentorship from a UNT ML professor.',
      'Built ML models reducing user screen time by 22% through personalized behavioral interventions.',
      'Earned U.S. Congressional recognition for measurable improvements in student digital well-being.',
    ],
  },
]

function ResearchCard({ paper, index }: { paper: typeof research[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-[#FDFBF6] border border-neutral-200 rounded-2xl p-6 mb-6 shadow-sm hover:shadow-md transition-all relative"
    >
      {/* Tag */}
      <div className="absolute top-4 right-4">
        <span className="px-2 py-1 bg-[#FFF8F0] text-accent-primary text-xs font-mono rounded">
          {paper.tag}
        </span>
      </div>
      
      {/* Title */}
      <h3 className="text-lg font-heading font-bold text-gray-900 mb-2 pr-24">
        {paper.title}
      </h3>
      
      {/* Role and venue */}
      <p className="text-sm text-gray-600 italic mb-3">
        {paper.role}
      </p>
      
      {/* Location and dates */}
      <p className="text-xs text-gray-500 mb-4">
        {paper.location} · {paper.dates}
      </p>
      
      {/* Highlights */}
      <ul className="space-y-2">
        {paper.highlights.map((highlight, i) => (
          <li key={i} className="text-sm text-gray-700 flex gap-2">
            <span className="text-accent-primary flex-shrink-0">•</span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function ResearchSection() {
  return (
    <SectionWrapper id="research">
      <div className="mb-2">
        <p className="text-sm uppercase tracking-wide text-accent-primary font-mono mb-1">RESEARCH</p>
        <p className="text-sm text-gray-500">First-author work in ESG, ML, and digital well-being.</p>
      </div>
      <div className="mt-8">
        {research.map((paper, index) => (
          <ResearchCard key={paper.title} paper={paper} index={index} />
        ))}
      </div>
    </SectionWrapper>
  )
}
