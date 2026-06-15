import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const stats = [
  { num: '70', suffix: '%', label: 'of digital transformations fail to meet objectives', source: 'Gartner 2026' },
  { num: '3', suffix: '.4x', label: 'avg execution velocity lift for Finis clients', source: 'Client data' },
  { num: '48', suffix: 'h', label: 'to first AI process model', source: 'Finis method' },
  { num: '$5.4', suffix: 'B', label: 'wasted annually on failed projects in Australia', source: 'CPA Australia' },
]

const capabilities = [
  {
    id: 'CAP_01',
    title: 'AI Process Modelling',
    desc: 'We build digital twins of your operational processes using BPMN 2.0 and ML inference — mapping every step, decision point and handoff — then apply machine learning to identify where value leaks.',
    tags: ['BPMN 2.0', 'ML inference', 'digital twin'],
  },
  {
    id: 'CAP_02',
    title: 'Intelligent Workflow Design',
    desc: 'Redesigning workflows from first principles using constraint theory, behavioural economics and AI simulation — so the new design works in practice, not just on paper.',
    tags: ['constraint theory', 'simulation', 'change design'],
  },
  {
    id: 'CAP_03',
    title: 'Automation Architecture',
    desc: 'Identifying what to automate, in what order, using what tools — and building the integration layer that makes it all work without creating new technical debt.',
    tags: ['RPA', 'LLM integration', 'API design'],
  },
  {
    id: 'CAP_04',
    title: 'Execution Intelligence Systems',
    desc: 'Real-time dashboards, AI alert systems and accountability frameworks that give leadership genuine visibility into whether the organisation is executing — and where it is falling behind.',
    tags: ['OKR systems', 'real-time KPIs', 'AI alerts'],
  },
  {
    id: 'CAP_05',
    title: 'Process Mining & Discovery',
    desc: 'Using event log data from your existing systems to reconstruct exactly how work actually flows — not how you think it flows — then quantifying the cost of every deviation.',
    tags: ['event log analysis', 'conformance check', 'root cause'],
  },
  {
    id: 'CAP_06',
    title: 'AI Change Management',
    desc: 'Deploying AI into a business is a human problem as much as a technical one. We design the adoption strategy, training programmes and cultural scaffolding that make transformation stick.',
    tags: ['adoption design', 'training', 'culture mapping'],
  },
]

const phases = [
  { id: 'PHASE 01', title: 'Process Discovery', desc: 'We instrument your systems, interview your people and build an objective picture of how work actually moves through your organisation.' },
  { id: 'PHASE 02', title: 'AI Modelling', desc: 'We construct a digital process model, run constraint analysis and apply predictive modelling to identify the highest-leverage intervention points.' },
  { id: 'PHASE 03', title: 'Intelligent Design', desc: 'We redesign processes and automation architecture — simulating outcomes before a single line of code is written or process changed.' },
  { id: 'PHASE 04', title: 'Embedded Delivery', desc: 'We build and deploy alongside your team, then stay until the metrics confirm the transformation has taken hold.' },
]

const aiRows = [
  { label: 'approval loops', pct: 82 },
  { label: 'data re-entry', pct: 71 },
  { label: 'wait states', pct: 65 },
  { label: 'exception handling', pct: 48 },
  { label: 'reporting overhead', pct: 39 },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-navy min-h-[94vh] flex items-center px-[5%] pt-[66px] overflow-hidden">
        {/* Grid background */}
        <div className="absolute inset-0 bg-grid-cyan bg-grid opacity-100" />

        {/* Hero image */}
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/images/hero-bg.jpg"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
        </div>

        {/* Glow */}
        <div className="absolute top-[-100px] right-[-100px] w-[600px] h-[600px] rounded-full bg-cyan-finis/8 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-2xl py-24">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-cyan-finis/10 border border-cyan-finis/25 rounded-full px-4 py-1.5 mb-8">
            <span className="w-1.5 h-1.5 bg-cyan-finis rounded-full animate-pulse-dot" />
            <span className="font-mono text-[0.68rem] font-medium text-cyan-finis tracking-[0.1em] uppercase">
              AI-Powered · Process Intelligence · Melbourne, AU
            </span>
          </div>

          <h1 className="font-serif text-[clamp(2.8rem,5vw,4.4rem)] text-white font-bold leading-[1.18] tracking-tight mb-6">
            Where <em className="italic text-gold-light">intelligence</em><br />meets execution.
          </h1>

          <p className="text-lg text-white/55 font-light leading-relaxed max-w-lg mb-10">
            Finis Business Solutions applies artificial intelligence, process modelling and behavioural science to help Australian enterprises eliminate waste, automate complexity and finish what matters.
          </p>

          <div className="flex gap-4 flex-wrap">
            <Link href="/contact" className="btn-primary">Book a Discovery Session</Link>
            <Link href="/capabilities" className="btn-ghost">Explore Capabilities</Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="bg-navy-2 grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <div key={i} className="px-8 py-9 text-center border-r border-white/6 last:border-r-0 border-b md:border-b-0">
            <div className="font-serif text-[2.4rem] font-bold text-white">
              {s.num}<span className="text-cyan-finis">{s.suffix}</span>
            </div>
            <div className="text-[0.72rem] text-white/35 tracking-[0.08em] uppercase mt-1 leading-snug">{s.label}</div>
            <div className="font-mono text-[0.58rem] text-white/15 mt-1">{s.source}</div>
          </div>
        ))}
      </div>

      {/* CAPABILITIES */}
      <section className="bg-white px-[5%] py-24">
        <p className="eyebrow">Core Capabilities</p>
        <h2 className="section-heading max-w-lg">AI that models, predicts and optimises your operations</h2>
        <p className="section-sub">We go beyond consulting frameworks. Our work is grounded in process science, machine learning and real organisational behaviour.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-mist">
          {capabilities.map((c) => (
            <div key={c.id} className="cap-card group">
              <div className="cap-number">{c.id}</div>
              <h3 className="font-serif text-[1.1rem] text-navy mb-3">{c.title}</h3>
              <p className="text-[0.875rem] text-slate leading-relaxed mb-5">{c.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {c.tags.map((t) => <span key={t} className="tag">{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS — dark with image */}
      <section className="bg-navy px-[5%] py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/ai-process.jpg" alt="" fill className="object-cover" />
        </div>
        <div className="relative z-10">
          <p className="eyebrow">Our Method</p>
          <h2 className="font-serif text-4xl text-white font-bold mb-4 max-w-xl">From insight to implementation in four phases</h2>
          <p className="text-base text-white/40 font-light max-w-lg mb-16">A rigorous, evidence-based method that produces results you can measure from week one.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {phases.map((p) => (
              <div key={p.id}>
                <div className="font-mono text-[0.62rem] text-cyan-finis tracking-[0.15em] mb-3">{p.id}</div>
                <div className="w-full h-px bg-white/10 mb-5 relative">
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-finis rounded-full" />
                </div>
                <h3 className="font-serif text-lg text-white mb-2">{p.title}</h3>
                <p className="text-[0.82rem] text-white/40 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI INTELLIGENCE BLOCK */}
      <section className="bg-fog px-[5%] py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <p className="eyebrow">Process Intelligence</p>
            <h2 className="section-heading">See exactly where your organisation is losing capacity</h2>
            <p className="section-sub mb-8">
              Our AI process models give you a quantified picture of friction, waste and automation opportunity — specific to your business, not a generic benchmark.
            </p>
            <Link href="/contact" className="btn-primary">Request a Process Scan</Link>
          </div>

          {/* AI visual */}
          <div className="bg-navy rounded border border-cyan-finis/15 p-8 font-mono relative overflow-hidden">
            <div className="absolute inset-0 opacity-5">
              <Image src="/images/process-mining.jpg" alt="" fill className="object-cover" />
            </div>
            <div className="relative z-10">
              <div className="text-[0.65rem] text-white/25 tracking-[0.12em] uppercase mb-6 pb-4 border-b border-white/6">
                process efficiency model · client: [confidential] · june 2026
              </div>
              {aiRows.map((r) => (
                <div key={r.label} className="flex items-center gap-3 mb-4">
                  <span className="text-[0.72rem] text-white/35 w-36 flex-shrink-0">{r.label}</span>
                  <div className="flex-1 bg-white/5 rounded-sm h-1">
                    <div
                      className="h-1 bg-cyan-finis rounded-sm transition-all"
                      style={{ width: `${r.pct}%` }}
                    />
                  </div>
                  <span className="text-[0.72rem] text-cyan-finis w-9 text-right flex-shrink-0">{r.pct}%</span>
                </div>
              ))}
              <hr className="border-white/6 my-5" />
              <p className="text-[0.68rem] text-white/35 leading-relaxed">
                <span className="text-gold-light font-medium">Model output:</span> 64% of total process load is automatable using current-generation AI tools. Projected capacity recovery: 14.3 hours/employee/week.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INSIGHT TEASER */}
      <section className="bg-white px-[5%] py-24">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-4">
          <div>
            <p className="eyebrow">Featured Insight</p>
            <h2 className="font-serif text-3xl text-navy font-bold">The Incompletion Crisis</h2>
          </div>
          <Link href="/insights" className="flex items-center gap-2 text-sm text-cyan-finis font-medium hover:opacity-75 transition-opacity">
            All insights <ArrowRight size={16} />
          </Link>
        </div>

        <Link href="/insights/the-incompletion-crisis" className="group block">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border border-mist rounded overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="relative h-64 lg:h-auto bg-navy-2">
              <Image
                src="/images/abandoned-project.jpg"
                alt="Abandoned incomplete project"
                fill
                className="object-cover opacity-70 group-hover:opacity-80 transition-opacity"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-navy/60 to-transparent" />
            </div>
            <div className="p-10 bg-white flex flex-col justify-center">
              <div className="font-mono text-[0.65rem] text-cyan-finis tracking-[0.15em] uppercase mb-4">
                Process Intelligence · 14 min read
              </div>
              <h3 className="font-serif text-2xl text-navy font-bold leading-tight mb-4">
                Why Australia's IT Projects Keep Failing — and What It's Actually Costing Us
              </h3>
              <p className="text-sm text-slate font-light leading-relaxed mb-6">
                Thirty years of research. Billions in documented waste. The same root causes, repeated. This is the definitive account of why organisations fail to finish — and why AI process intelligence finally changes the equation.
              </p>
              <div className="flex items-center gap-2 text-sm text-cyan-finis font-medium group-hover:gap-3 transition-all">
                Read the full analysis <ArrowRight size={16} />
              </div>
            </div>
          </div>
        </Link>
      </section>

      {/* FOOTER CTA */}
      <section className="bg-navy-2 px-[5%] py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src="/images/melbourne-city.jpg" alt="" fill className="object-cover object-bottom" />
        </div>
        <div className="relative z-10">
          <p className="eyebrow justify-center flex">Start Here</p>
          <h2 className="font-serif text-4xl text-white font-bold mb-4 max-w-xl mx-auto">
            Find out what's recoverable in your organisation
          </h2>
          <p className="text-white/40 font-light max-w-md mx-auto mb-10 leading-relaxed">
            In a 90-minute process intelligence session, we'll map your highest-risk process and give you a quantified estimate of what AI-driven redesign could recover.
          </p>
          <Link href="/contact" className="btn-primary">Request a Discovery Session</Link>
        </div>
      </section>
    </>
  )
}
