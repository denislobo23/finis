'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import clsx from 'clsx'

const links = [
  { href: '/', label: 'Home' },
  { href: '/capabilities', label: 'Capabilities' },
  { href: '/about', label: 'About' },
  { href: '/insights', label: 'Insights' },
]

export function Nav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/97 backdrop-blur-md border-b border-white/7 h-[66px] flex items-center px-[5%]">
      <div className="flex items-center justify-between w-full">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <span className="font-serif text-[1.3rem] font-bold text-white tracking-tight">
            Finis<span className="text-cyan-finis">.</span>
          </span>
          <span className="font-mono text-[0.62rem] text-white/30 tracking-[0.08em] uppercase border-l border-white/12 pl-3 hidden sm:block">
            AI Process Intelligence
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={clsx(
                  'text-[0.82rem] font-medium tracking-wide transition-colors duration-200',
                  pathname === l.href ? 'text-white' : 'text-white/45 hover:text-white'
                )}
              >
                {l.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/contact" className="btn-primary text-[0.8rem] px-5 py-2">
              Engage Us
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/60 hover:text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="absolute top-[66px] left-0 right-0 bg-navy-2 border-b border-white/7 py-4 px-[5%] md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm text-white/60 hover:text-white border-b border-white/5"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="block mt-4 btn-primary text-center"
          >
            Engage Us
          </Link>
        </div>
      )}
    </nav>
  )
}
