import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#071528',
          2: '#0D2140',
          3: '#163356',
        },
        slate: '#3A5270',
        steel: '#6B8BA4',
        mist: '#D8E4EE',
        fog: '#EDF2F7',
        gold: {
          DEFAULT: '#C6A84A',
          light: '#E2CC85',
        },
        cyan: {
          finis: '#1FB8D4',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-playfair)'],
        mono: ['var(--font-jetbrains)'],
      },
      backgroundImage: {
        'grid-cyan': `linear-gradient(rgba(31,184,212,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(31,184,212,0.04) 1px, transparent 1px)`,
      },
      backgroundSize: {
        'grid': '48px 48px',
      },
    },
  },
  plugins: [],
}

export default config
