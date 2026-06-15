import Image from 'next/image'
import Link from 'next/link'

const values = [
  { code: 'E', title: 'Evidence over opinion', desc: 'We model before we recommend. Every engagement starts with data, not assumptions.' },
  { code: 'O', title: 'Outcomes over outputs', desc: 'We measure what changes, not what gets delivered. The finish line is the only metric.' },
  { code: 'P', title: 'Practical over theoretical', desc: 'Every model is tested against organisational reality before we ask anyone to change anything.' },
  { code: 'H', title: 'Honest over comfortable', desc: 'We tell you what your business needs to hear, even when it's not what you expected.' },
]

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy px-[5%] pt-40 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-cyan bg-grid" />
        <div className="relative z-10 max-w-2xl">
          <p className="eyebrow">About Finis</p>
          <h1 className="font-serif text-5xl text-white font-bold leading-tight mb-6">
            We exist to help Australian businesses finish what they start
          </h1>
        </div>
      </section>

      <section className="bg-white px-[5%] py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          <div>
            <blockquote className="border-l-2 border-cyan-finis pl-6 mb-8">
              <p className="font-serif text-2xl italic text-navy leading-relaxed">
                "Most organisations don't fail from lack of intelligence. They fail from the inability to finish."
              </p>
            </blockquote>
            <p className="text-[0.95rem] text-slate font-light leading-relaxed mb-4">
              Finis Business Solutions was founded to address a specific problem: Australian enterprises have access to more data, more tools and more strategy than at any point in history — and yet execution remains the number one cause of strategic failure.
            </p>
            <p className="text-[0.95rem] text-slate font-light leading-relaxed mb-4">
              We combine rigorous process science with modern AI to give organisations something they've rarely had: an objective, quantified picture of exactly where execution breaks down — and a practical, evidence-based path to fixing it.
            </p>
            <p className="text-[0.95rem] text-slate font-light leading-relaxed">
              Our name comes from the Latin <em>finis</em> — meaning end, completion, the finish line. It's the only place that counts.
            </p>
          </div>

          <div>
            <div className="relative h-72 rounded overflow-hidden mb-8 border border-mist">
              <Image src="/images/team-consulting.jpg" alt="Finis team at work" fill className="object-cover" />
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-cyan-finis" />
            </div>

            <div className="grid grid-cols-2 gap-px bg-mist">
              {values.map((v) => (
                <div key={v.code} className="bg-white p-6">
                  <div className="w-10 h-10 bg-navy rounded-full flex items-center justify-center font-serif text-cyan-finis text-base mb-4">
                    {v.code}
                  </div>
                  <h4 className="text-sm font-semibold text-navy mb-1">{v.title}</h4>
                  <p className="text-xs text-slate leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy-2 px-[5%] py-20 text-center">
        <h2 className="font-serif text-3xl text-white font-bold mb-4">Work with us</h2>
        <p className="text-white/40 font-light mb-8 max-w-md mx-auto">Start with a no-obligation process intelligence session.</p>
        <Link href="/contact" className="btn-primary">Book a Discovery Session</Link>
      </section>
    </>
  )
}
