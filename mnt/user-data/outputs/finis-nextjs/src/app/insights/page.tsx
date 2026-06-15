import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const articles = [
  {
    slug: 'the-incompletion-crisis',
    cat: 'Process Intelligence',
    title: "The Incompletion Crisis: Why Australia's IT Projects Keep Failing",
    excerpt: 'Thirty years of research. Billions in documented waste. The same root causes, repeated. This is the definitive account of why organisations fail to finish.',
    date: 'June 2026',
    read: '14 min read',
    image: '/images/abandoned-project.jpg',
    featured: true,
  },
  {
    slug: 'automation-sequencing',
    cat: 'AI & Automation',
    title: 'The Automation Sequencing Problem: Why Most AI Deployments Fail in Year Two',
    excerpt: 'Organisations automate the wrong things first. Not because they lack intelligence, but because they lack a process model.',
    date: 'May 2026',
    read: '10 min read',
    image: '/images/blog-process.jpg',
    featured: false,
  },
  {
    slug: 'neuroscience-of-finishing',
    cat: 'Execution Science',
    title: 'The Neuroscience of Finishing: Why Smart Teams Leave Work Incomplete',
    excerpt: 'The Zeigarnik effect, cognitive switching costs and the planning fallacy all conspire against completion.',
    date: 'April 2026',
    read: '7 min read',
    image: '/images/blog-adoption.jpg',
    featured: false,
  },
]

export default function InsightsPage() {
  const featured = articles.find((a) => a.featured)
  const rest = articles.filter((a) => !a.featured)

  return (
    <>
      <section className="bg-navy px-[5%] pt-40 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-cyan bg-grid" />
        <div className="relative z-10">
          <p className="eyebrow">Insights</p>
          <h1 className="font-serif text-5xl text-white font-bold leading-tight mb-4 max-w-xl">
            Intelligence on process, AI and execution
          </h1>
          <p className="text-white/40 font-light text-lg">Original thinking from our practitioners — grounded in client work, not conference keynotes.</p>
        </div>
      </section>

      <section className="bg-white px-[5%] py-24">
        {/* Featured */}
        {featured && (
          <Link href={`/insights/${featured.slug}`} className="group block mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-mist rounded overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-72 lg:h-auto bg-navy-2">
                <Image src={featured.image} alt={featured.title} fill className="object-cover opacity-70 group-hover:opacity-80 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-r from-navy/50 to-transparent" />
              </div>
              <div className="p-10 flex flex-col justify-center">
                <div className="font-mono text-[0.65rem] text-cyan-finis tracking-[0.15em] uppercase mb-4">
                  {featured.cat} · {featured.read}
                </div>
                <h2 className="font-serif text-2xl text-navy font-bold leading-tight mb-4">{featured.title}</h2>
                <p className="text-sm text-slate font-light leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center gap-2 text-sm text-cyan-finis font-medium group-hover:gap-3 transition-all">
                  Read the full analysis <ArrowRight size={16} />
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rest.map((a) => (
            <Link key={a.slug} href={`/insights/${a.slug}`} className="group block border border-mist rounded overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 bg-navy-2">
                <Image src={a.image} alt={a.title} fill className="object-cover opacity-60 group-hover:opacity-70 transition-opacity" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent" />
              </div>
              <div className="p-8">
                <div className="font-mono text-[0.62rem] text-cyan-finis tracking-[0.15em] uppercase mb-3">{a.cat} · {a.read}</div>
                <h3 className="font-serif text-xl text-navy font-bold leading-tight mb-3">{a.title}</h3>
                <p className="text-sm text-slate font-light leading-relaxed mb-4">{a.excerpt}</p>
                <div className="flex items-center gap-2 text-sm text-cyan-finis font-medium group-hover:gap-3 transition-all">
                  Read more <ArrowRight size={14} />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
