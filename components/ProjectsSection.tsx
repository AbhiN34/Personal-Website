'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import SectionWrapper from './SectionWrapper'

const projects = [
  {
    name: 'FLOC',
    role: 'Co-Founder, Technical Lead',
    location: 'Princeton, NJ',
    dates: 'November 2025 – Present',
    stack: 'Python · FastAPI · ChromaDB · Supabase · ProseMirror',
    highlights: [
      'Built an AI writing tool using embeddings, vector search, and RAG to match user-specific writing style.',
      'Developed Python/FastAPI + ChromaDB pipelines for document indexing, semantic retrieval, and style transfer.',
      'Implemented OAuth2, Supabase (RLS), and real-time LLM streaming inside a custom ProseMirror editor.',
    ],
  },
  {
    name: 'Govo AI',
    role: 'Co-Founder, CTO',
    location: 'New York, NY',
    dates: 'Mar 2025 – Present',
    stack: 'React Native · Python · AI/ML',
    highlights: [
      'Launched an AI-powered, Tinder-style cooking and lifestyle app, driving consistent weekly active user growth.',
      'Grew to 104 users in the first month, achieving 940% MoM expansion across five international markets.',
      'Drove 100,000+ views across social channels through influencer collaborations and organic content strategy.',
    ],
  },
  {
    name: 'UniDine',
    role: 'Co-Founder, CTO',
    location: 'New York, NY',
    dates: 'September 2025 – Present',
    stack: 'React Native · Node.js',
    highlights: [
      'Campus dining + local discovery app.',
      'Personalized menus and student-focused experience.',
      'More details coming soon.',
    ],
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-[#FDFBF6] border border-neutral-200 rounded-2xl p-6 mb-6 shadow-sm hover:border-orange-200 transition-all"
    >
      {/* Header with monospace styling */}
      <div className="mb-4 p-3 bg-neutral-50 rounded-lg font-mono text-sm">
        <div className="text-lg font-bold text-gray-900 mb-1">{project.name}</div>
        <div className="text-gray-600">role: {project.role}</div>
        <div className="text-gray-600">stack: {project.stack}</div>
      </div>
      
      {/* Location and dates */}
      <div className="text-sm text-gray-500 mb-4">
        {project.location} · {project.dates}
      </div>
      
      {/* Highlights */}
      <ul className="space-y-2">
        {project.highlights.map((highlight, i) => (
          <li key={i} className="text-sm text-gray-700 flex gap-2">
            <span className="text-accent-primary flex-shrink-0">•</span>
            <span>{highlight}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}

export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects">
      <div className="mb-2">
        <p className="text-sm uppercase tracking-wide text-accent-primary font-mono mb-1">PROJECTS</p>
        <p className="text-sm text-gray-500">Apps and products I'm building.</p>
      </div>
      <div className="mt-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </SectionWrapper>
  )
}
