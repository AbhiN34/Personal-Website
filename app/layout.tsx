import type { Metadata } from 'next'
import { Playfair_Display, Baloo_2, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const baloo = Baloo_2({
  subsets: ['latin'],
  variable: '--font-baloo',
  display: 'swap',
})

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Abhiram Nandiraju',
  description: 'Abhiram (Abhi) Nandiraju – builder, researcher, founder, and model (loading…).',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${baloo.variable} ${mono.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  )
}

