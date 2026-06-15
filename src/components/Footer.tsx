import Link from 'next/link'

const links = [
  { href: '/', label: 'Home' },
  { href: '/capabilities', label: 'Capabilities' },
  { href: '/about', label: 'About' },
  { href: '/insights', label: 'Insights' },
  { href: '/contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className="bg-navy border-t border-white/5">
      <div className="px-[5%] py-12">
        <div className="flex flex-col md:flex-row justify-between gap-8 pb-8 border-b border-white/5 mb-6">
          <div>
            <div className="font-serif text-xl font-bold text-white mb-2">
              Finis<span className="text-cyan-finis">.</span>
            </div>
            <div className="font-mono text-[0.62rem] text-white/20 tracking-[0.1em] uppercase">
              AI Process Intelligence · Melbourne, Australia
            </div>
            <div className="mt-4 text-sm text-white/30 font-light max-w-xs leading-relaxed">
              Helping Australian enterprises model, optimise and finish the work that matters.
            </div>
          </div>
          <div className="flex gap-16">
            <div>
              <div className="font-mono text-[0.62rem] text-white/20 tracking-[0.12em] uppercase mb-4">Navigation</div>
              <ul className="flex flex-col gap-2">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-white/35 hover:text-white transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="font-mono text-[0.62rem] text-white/20 tracking-[0.12em] uppercase mb-4">Contact</div>
              <ul className="flex flex-col gap-2 text-sm text-white/35">
                <li>info@finis.com.au</li>
                <li>Melbourne, VIC</li>
                <li>Australia-wide</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[0.72rem] text-white/20">
            © {new Date().getFullYear()} Finis Business Solutions. All rights reserved.
          </p>
          <span className="font-mono text-[0.62rem] text-white/15 tracking-[0.08em]">
            Finis Business Solutions · ABN Registered · finis.com.au
          </span>
        </div>
      </div>
    </footer>
  )
}
