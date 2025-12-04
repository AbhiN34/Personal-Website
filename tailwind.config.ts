import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          primary: '#C97D60',
          secondary: '#B87D5F',
        },
        cream: {
          light: '#FFFEF7',
          base: '#FAF9F6',
          dark: '#F5F5F0',
        },
        text: {
          dark: '#1A1A1A',
          medium: '#2C2C2C',
          light: '#5A5A5A',
        },
      },
      fontFamily: {
        heading: ['var(--font-playfair)'],
        body: ['var(--font-baloo)'],
        mono: ['var(--font-mono)'],
      },
      scrollSnapType: {
        'y-mandatory': 'y mandatory',
      },
    },
  },
  plugins: [],
}
export default config

