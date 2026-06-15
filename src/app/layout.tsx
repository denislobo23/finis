import type { Metadata } from 'next'
import { Inter, Playfair_Display, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Finis Business Solutions – AI Process Intelligence',
  description:
    'Finis Business Solutions delivers AI-powered process modelling, workflow intelligence and execution consulting to Australian enterprises.',
  keywords: ['AI consulting', 'process modelling', 'workflow design', 'business intelligence', 'Australia'],
  openGraph: {
    title: 'Finis Business Solutions',
    description: 'AI-Powered Process Intelligence for Australian Enterprises',
    url: 'https://finis.com.au',
    siteName: 'Finis Business Solutions',
    locale: 'en_AU',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} ${jetbrains.variable}`}>
      <body className="font-sans antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
